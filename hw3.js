// Задание №1. вывести все простые числа в промежутке (0; 100)

var arr = [];
var i = 0;
var numb = [];
 while (i <= 100){   
   var n = i;
    if(n==2 || n==3 || n==5 || n==7 ||(n%2>0 && n%3>0 && n%5>0 && n%7>0)){
        arr.push(n);
    }
++ i;
 }

console.log(arr);

// Задание №2/№3 Посчитать стоимость корзины.

var bag = [
    {
        'name': 'product1',
        'price': 100,
        'quantity': 2,
    },
    {
        'name': 'product2',
        'price': 50,
        'quantity': 6,
    },
    {
        'name': 'product3',
        'price': 1000,
        'quantity': 1,
    },
    {
        'name': 'product4',
        'price': 300,
        'quantity': 5,
    }
]

function countBasketPrice(goods){// функция для подсчета стоимости корзины
var total = 0
for(var item of bag){
 total += item.price * item.quantity;
}
return total;
}
console.log(countBasketPrice(bag));

// Задание №4. вывести цифры от 0 до 9 не используя тело цикла

for(var i = 0; i < 10; console.log(i++)){
    // здесь пусто
}

// Задание №5. Нарисовать пирамиду из звездочек

for(var i = 1; i <= 20; i++){
    var star = '';
    for(var j = 1; j <= i; j++){
        star += '*'
    } 
    console.log(star);
}
