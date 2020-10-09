// Глобальные переменные
var FIELD_SIZE_X = 20; //Строки
var FIELD_SIZE_Y = 20; //столбцы
var SNAKE_SPEED = 200; //скорость движение
var snake = [] //тело змейки
var bomb = [];
var direction = 'y+'; //направление движения змейки
var gameIsRunning = false; //состояние игры
var snake_timer; //движение змейки
var food_timer; //
var bomb_timer;
var score = 0;

function init() {
    prepareGameField(); //генерирование поля игры

    //кнопки запуска
    document.getElementById('snake-start').addEventListener('click', startGame);
    document.getElementById('snake-renew').addEventListener('click', refreshGame);

    //кнопк клавиатуры
    addEventListener('keydown', changeDirection);
}

// функция создающая поле
function prepareGameField() {
    // создание таблицы
    var game_table = document.createElement('table');
    game_table.classList.add('game-table');

    //генерация поля
    for (var i = 0; i < FIELD_SIZE_X; i++) {
        //генерация строк
        var row = document.createElement('tr');
        row.className = 'game-table-row row-' + i;

        for (var j = 0; j < FIELD_SIZE_Y; j++) {
            //создание ячеек
            var cell = document.createElement('td');
            cell.className = 'game-table-cell cell-' + i + '-' + j;

            row.append(cell); //формирование строки
        }
        game_table.append(row); //формирование таблицы
    }

    document.getElementById('snake-field').appendChild(game_table); //добавление таблицы на страницу
}

// старт игры
function startGame() {
    gameIsRunning = true;
    respawn(); //создает змейку

    snake_timer = setInterval(move, SNAKE_SPEED);
    setTimeout(createFood, 5000);//вызывает функцию createFood каждые 5000мс
    setInterval(createBomb, 5000);
    setInterval(stopBomb, 15000);
}



// расположение змейки на поле
function respawn() {
    //стратовая длина змейки 2ячейки

    //respawn по центру
    var start_coord_x = Math.floor(FIELD_SIZE_X / 2); //10
    var start_coord_y = Math.floor(FIELD_SIZE_Y - 1); //10

    //голова
    var snake_head = document.getElementsByClassName('cell-' + start_coord_y + '-' + start_coord_x)[0];
    snake_head.setAttribute('class', snake_head.getAttribute('class') + ' snake-unit');

    // тело
    var snake_tail = document.getElementsByClassName('cell-' + (start_coord_y - 1) + '-' + start_coord_x)[0];
    snake_tail.setAttribute('class', snake_tail.getAttribute('class') + ' snake-unit');

    snake.push(snake_head);
    snake.push(snake_tail);
}

//движение змейки
function move() {

    // собираем классы головы змейки
    var snake_head_classes = snake[snake.length - 1].getAttribute('class').split(' '); //формируется масив классов головы змейки

    //сдвиг головы
    var new_unit;
    var snake_coords = snake_head_classes[1].split('-'); //создаем масив класса с координатами ячейки
    var coord_y = +(snake_coords[1]);
    var coord_x = +(snake_coords[2]);

    //определяем новую точку
    if (direction == 'x-') {
        new_unit = document.getElementsByClassName('cell-' + coord_y + '-' + (coord_x - 1))[0];
    } else if (direction == 'x+') {
        new_unit = document.getElementsByClassName('cell-' + coord_y + '-' + (coord_x + 1))[0];
    } else if (direction == 'y+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y - 1) + '-' + (coord_x))[0];
    } else if (direction == 'y-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y + 1) + '-' + (coord_x))[0];
    }

    //проверки
    if (new_unit == undefined) {
        if (coord_x == FIELD_SIZE_X - 1) {
            coord_x = 0;
        } else if (coord_y == FIELD_SIZE_Y - 1) {
            coord_y = 0;
        } else if (coord_x == 0) {
            coord_x = FIELD_SIZE_X - 1;
        } else if (coord_y == 0) {
            coord_y = FIELD_SIZE_Y - 1;
        }
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x))[0];
    }

    if (!isSnakeUnit(new_unit) && new_unit !== undefined) {

        new_unit.classList.add('snake-unit');
        snake.push(new_unit);
        if (haveBomb(new_unit)) {
            finishTheGame();
        }
        //проверка надо ли убирать хвост
        else if (!haveFood(new_unit)) {

            //нахоим хвост
            var removed = snake.splice(0, 1)[0];
            var classes = removed.getAttribute('class').split(' ');

            //удаляем хвост
            removed.setAttribute('class', classes[0] + ' ' + classes[1]);
        }
    } else {
        finishTheGame();
    }


}

//проверка на змейку
function isSnakeUnit(unit) {
    var check = false;
    if (snake.includes(unit)) {
        check = true;
    }
    return check;
}

//проверка на еду
function haveFood(unit) {
    var check = false;

    var unit_classes = unit.getAttribute('class').split(' ');

    if (unit_classes.includes('food-unit')) {
        check = true;
        createFood();

        score++;
        var block = document.getElementById('score');
        block.innerHTML = score;
    }
    return check;
}

function haveBomb(unit) {
    var check = false;

    var unit_classes = unit.getAttribute('class').split(' ');

    if (unit_classes.includes('bomb-unit')) {
        check = true;
    }
    return check;
}

function stopBomb() {
    var remove = bomb.splice(0, 1)[0];
    var classes = remove.getAttribute('class').split(' ');
    remove.setAttribute('class', classes[0] + ' ' + classes[1]);
}

//создание корма
function createFood() {
    var foodCreated = false;

    while (!foodCreated) {
        var food_x = Math.floor(Math.random() * FIELD_SIZE_X);
        var food_y = Math.floor(Math.random() * FIELD_SIZE_Y);

        var food_cell = document.getElementsByClassName('cell-' + food_y + '-' + food_x)[0];
        var food_cell_classes = food_cell.getAttribute('class').split(' ');

        //проверка на змейку
        if (!food_cell_classes.includes('snake-unit')) {
            var classes = '';
            for (var i = 0; i < food_cell_classes.length; i++) {
                classes += food_cell_classes[i] + ' ';
            }
            food_cell.setAttribute('class', classes + ' food-unit');
            foodCreated = true;
        }
    }
}

//bombs
function createBomb() {
    var bombCreated = false;

    while (!bombCreated) {
        var bomb_x = Math.floor(Math.random() * FIELD_SIZE_X);
        var bomb_y = Math.floor(Math.random() * FIELD_SIZE_Y);

        var bomb_cell = document.getElementsByClassName('cell-' + bomb_y + '-' + bomb_x)[0];
        var bomb_cell_classes = bomb_cell.getAttribute('class').split(' ');

        //проверка на змейку
        if (!bomb_cell_classes.includes('snake-unit') && !bomb_cell_classes.includes('food-unit')) {
            var classes = '';
            for (var i = 0; i < bomb_cell_classes.length; i++) {
                classes += bomb_cell_classes[i] + ' ';
            }
            bomb_cell.setAttribute('class', classes + 'bomb-unit');
            bomb.push(bomb_cell);
            bombCreated = true;
        }
    }

}

//измеменение направления
function changeDirection(e) {
    console.log(e);

    switch (e.keyCode) {
        case 37: //left
            if (direction != 'x+') {
                direction = 'x-'
            }
            break;
        case 38: //up
            if (direction != 'y-') {
                direction = 'y+'
            }
            break;
        case 39: //right
            if (direction != 'x-') {
                direction = 'x+'
            }
            break;
        case 40: //down
            if (direction != 'y+') {
                direction = 'y-'
            }
            break;
    }
}

function refreshGame() {
    location.reload();
}

function finishTheGame() {
    gameIsRunning = false;
    clearInterval(snake_timer);
    alert('Результат: ' + score.toString());
}

//инициализация
window.onload = init;