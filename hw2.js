// Задание №1
/*
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 a=2 c=a=2
d = b++; alert(d);           // 1 d=b=1 b=2
c = (2+ ++a); alert(c);      // 5 a=2+1=3 c=3+2=5
d = (2+ b++); alert(d);      // 4 d=2+b=2+2=4 b=2+1=3
alert(a);                    // 3 Последнее значение, принятое переменной в 6ст
alert(b);                    // 3 Последнее значение, принятое переменной в 7ст
*/

// Задание №2

var a = 2;
var x = 1 + (a *= 2); //5 

// Задание №3
var a = -4, b = 7;
var res = 0;

if(a >= 0 && b >= 0){  // 1)если a и b положительные, вывести их разность;
res = a - b;
} else if(a < 0 && b < 0){  // 2)если а и b отрицательные, вывести их произведение;
res = a * b;
} else { // 3)если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
res = a + b;
}  
alert(res);
*/
/*
a = Math.round(Math.random() * 15 + 0) // 4)Присвоить переменной а значение в промежутке [0..15]
switch(a){                         //С помощью оператора switch организовать вывод чисел от a до 15. 
case  0:
    console.log(0);    
case 1:
    console.log(1);
case 2:
        console.log(2);
case 3:
    console.log(3);
case 4:
    console.log(4);
case 5:
    console.log(5);
case 6:
    console.log(6);
case 7:
    console.log(7);
case 8:
    console.log(8);
case  9:
    console.log(9);
case 10:
    console.log(10);
case 11:
    console.log(11);
case 12:
    console.log(12);
case 13:
    console.log(13);
case 14:
    console.log(14);
case 15:
    console.log(15);
    break;
    default:
    console.log("something wrong " + a);
}       
*/

function easyCalc(a, b){   // 5) Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
    if(a >= 0 && b >= 0){  
        res = a - b;
        } else if(a < 0 && b < 0){  
        res = a * b;
        } else if(a > 0 && b < 0) { 
        res = a + b;
        } else{
            if(b !== 0){
                res = a / b;
            } else{
                console.log("Sory, i can't do this!");
            }
        } 
        return res;
}
// console.log(easyCalc(-10, 3));



function calculate(x, y, operation){ // 6)Реализовать функцию с тремя параметрами
    switch(operation){
        case '+':
            res = x + y;
            break;
        case '-':
            res = x - y;
            break;
        case '*':
            res = x * y;
            break;
        case '/':
            res = x / y;
            break;
        default:
            console.log('something wrong');
    }
        return res;
}
// console.log(calculate(2, 4, '*'));

// 7) *Сравнить null и 0. 
/*
var w = null;
if (w == 0){
    console.log('null == 0'); //false
}else if(w > 0){
    console.log('null > 0');  //false
} else if(w < 0){
    console.log('null < 0');   //false
} else if (w >= 0){
    console.log('null >= 0'); //true
}   else if (w <= 0){
    console.log('null <= 0');  //false
} else{
    console.log("can't compare")//false
}
// получается null = +0
*/

function powCalc(val, pow){    // 8) *С помощью рекурсии организовать функцию возведения числа в степень.
    if (Math.pow(val, pow) >= 100){
    return;
    }
console.log(Math.pow(val, pow));
powCalc(val+1, pow);
}

// powCalc(2, 2);
