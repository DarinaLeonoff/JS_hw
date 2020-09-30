var even, ok;
var answer = [];
var sum = 0;


function quest(q, a0, a1, a2, a3, a4) {
    do {
        ok = false;
        even = +prompt(q + a1 + a2 + a3 + a4 + '-1 - Выход из игры');
        if (even == -1) {
            break;
        } else {
            ok = isAnswer(a0, even);
        }
    } while (!ok);
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

function repAnswer(q, war1, war2, war3, war4, a) {
    this.quest = q;
    this.war1 = war1;
    this.war2 = war2;
    this.war3 = war3;
    this.war4 = war4;
    this.ans = a;
};

for (var i = 0; i < questions.length; i++) {
    quest(questions[i].question, questions[i].a0, questions[i].a1, questions[i].a2, questions[i].a3, questions[i].a4);
    if (even == +questions[i].correct) {
        sum += questions[i].cost;
        alert('Вы правы! Ваш баланс: ' + sum);
    } else {
        var lose = +prompt("Вы ошиблись. Показать правильный ответ (-1 - нет, любое значение - да)")
        if (lose == -1) {
            break;
        } else {
            alert(questions[i].question + questions[i].a0 + questions[i].a1 + questions[i].a2 + questions[i].a3 + questions[i].a4 + ' \nПравильный ответ: ' + questions[i].correct + ' \nВаш ответ: ' + even);
        }
        break;
    }
}
alert('Спасибо за игру!')