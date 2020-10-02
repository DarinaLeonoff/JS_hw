var elem = document.querySelector('#block');
var table = document.createElement('table');
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var numb = ['1', '2', '3', '4', '5', '6', '7', '8'];
var figure = ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '&#9817;'];
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
        cell[j].style.backgroundColor = "black";
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

}

var firstLine = figureAccom(figure, names, 0);

