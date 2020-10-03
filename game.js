var elem = document.querySelector('#block');
var table = document.createElement('table');
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var numb = ['1', '2', '3', '4', '5', '6', '7', '8'];
var figureW = ['-106px -45px', '-214px -45px', '-160px -45px', '-50px -45px', '0 -45px', '-160px -45px', '-214px -45px', '-106px -45px', '-269px -45px'];
var figureB = ['-106px 0', '-214px 0', '-160px 0', '-50px 0', '0 0', '-160px 0', '-214px 0', '-106px 0', '-269px 0'];
var names = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook', 'pown'];

elem.insertAdjacentHTML("afterbegin", '<div class="container">');
var container = document.querySelector('.container');

// создание доски
for (var i = 0; i < 8; i++) {
    var tr = document.createElement('tr');
    tr.className = 'string';

    for (var j = 0; j < 8; j++) {
        var td = document.createElement('td');
        td.className = 'cell';
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
container.appendChild(table);

var string = document.querySelectorAll('.string');
var cell = document.querySelectorAll('.cell');

// разделение на черные и белые клетки
var i = 0;
for (var j = 0; j < cell.length; j++) {

    if (((i % 2 !== 0) && (j % 2 !== 0)) || ((i % 2 == 0) && (j % 2 == 0))) {
        cell[j].style.backgroundColor = "white";
    } else {
        cell[j].style.backgroundColor = "#2F4F4F";
    };

    if (j == 7 || j == 7 * (i + 1) + i) {
        i++;
    };

}

function listMaker(mas, clas, name) {
    var list = document.querySelector(name);
    for (var i = 0; i < mas.length; i++) {
        var li = document.createElement('li');
        li.classList.add(clas);
        li.innerText = mas[i];
        list.appendChild(li);
    }
    return list;
}


// строки с буквами и колонки цифр
var top = container.insertAdjacentHTML("beforebegin", '<ul class="top list">');
listMaker(letters, 'li', '.top');

var bottom = container.insertAdjacentHTML("afterend", '<ul class="bottom list">');
listMaker(letters, 'li', '.bottom');

var left = container.insertAdjacentHTML("afterbegin", '<ul class="left column">');
listMaker(numb, 'col', '.left');

var left = container.insertAdjacentHTML("beforeend", '<ul class="right column">');
listMaker(numb, 'col', '.right');


//расстановка фигур


function figureAccom(fig, name, str) {
    if (str == 0 || str == 7) {
        var j = 0;
        for (var i = 8 * str; i < 8 * (str + 1); i++) {
            cell[i].classList.add(name[j]);
            cell[i].style.backgroundImage = 'url(kisspng-chess-piece-white-and-black-in-chess-queen-clip-ar-chess-transparent-png-5a76fcfe659344.1089993215177474544161.png)';
            cell[i].style.backgroundPosition = fig[j];
            j++;

        }
    } else {
        for (var i = 8 * str; i < 8 * (str + 1); i++) {
            cell[i].classList.add(name[8]);
            cell[i].style.backgroundImage = 'url(kisspng-chess-piece-white-and-black-in-chess-queen-clip-ar-chess-transparent-png-5a76fcfe659344.1089993215177474544161.png)';
            cell[i].style.backgroundPosition = fig[8];
        }
        return cell;
    }
}

var firstW = figureAccom(figureW, names, 0);
var firstB = figureAccom(figureB, names, 7);
var pownW = figureAccom(figureW, names, 1);
var pownB = figureAccom(figureB, names, 6);
