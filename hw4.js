// Задание 1.

/* var number = prompt('Введите число от 0 до 999:');



function getRank(numb) {

    var mas = numb.split('');
    if (mas.length < 4) {
        var ranks = {
            'units': mas[mas.length - 1],
            'des': mas[mas.length - 2],
            'hundreds': mas[mas.length - 3]
        }
    } else {
        console.log('Вы ввели число больше 999');
        ranks = {};
    }
    return ranks;
}
// console.log("Сотни: " + ranks.hunreds + " Десятки: " + ranks.dozens + " Единицы: " + ranks.units);
console.log(getRank(number));
*/


// Задание 2

var even, ok;
var answer = [];


// functions
var rep;
function check(work00, work0, work1, work2) {
    do {
        ok = false;
        even = +prompt(work00 + work1 + work2 + '-1 - Выход из игры');
        if (even == -1) {
            break;
        } else {
            ok = isAnswer(work0, even);
        }
    } while (!ok);
    rep = new repAnswer(work00, work1, work2, even);
    answer.push(rep);
    return even;
};

function isAnswer(q, eve) {
    if (isNaN(eve) || !isFinite(eve)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (eve < 1 || eve > q) {
        alert('Ваш ответы выходит из допустимого диапазона');
        return false;
    }
    return true;
};

function repAnswer(q, war1, war2, a) {
    this.quest = q;
    this.war1 = war1;
    this.war2 = war2;
    this.ans = a;
};





check(works.a00, works.a0, works.a1, works.a2);
switch (even) {
    case 1:
        check(works.b00, works.b0, works.b1, works.b2);
        switch (even) {
            case 1:
                check(works.d00, works.d0, works.d1, works.d2);
                break;
            case 2:
                check(works.d00, works.d0, works.d1, works.d2);
                break;
        }
        break;
    case 2:
        check(works.c00, works.c0, works.c1, works.c2);
        switch (even) {
            case 1:
                check(works.d00, works.d0, works.d1, works.d2);
                break;
            case 2:
                check(works.d00, works.d0, works.d1, works.d2);
                break;
            case -1:
                break;
            default:
                alert("Ошибка");
        }
        break;
    case -1:
        break;
    default:
        alert("Ошибка");
}

do {
    var finish = false;
    var rep = +prompt('Спасибо за игру! хотите посмотреть ответы?/n' + 'любое значение - да/n' + '-1 - нет');
    if (rep == -1) {
        finish = true;
    } else {
        var numb = +prompt('Какой вопрос вас интересует? (1-3)')
        alert(answer[numb - 1].quest + answer[numb - 1].war1 + answer[numb - 1].war2 + " ваш ответ: " + answer[numb - 1].ans);
        console.log(answer);
    }
} while (!finish)








