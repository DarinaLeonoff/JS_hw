var cards = document.querySelector('.card-block');
var basket = [];
var sum = 0;
// создаем карточки товаров 
function createCard(mas, block) {
    var card = document.createElement('div');
    card.className = 'card';

    var title = document.createElement('h3');
    title.innerText = mas.head;
    card.append(title);

    var img = document.createElement('img');
    img.src = mas.img;
    card.append(img);

    var price = document.createElement('p');
    price.innerText = mas.price + '$';
    card.append(price);

    var btn = document.createElement('button');
    btn.className = 'btn';
    btn.id = 'btn' + '-' + i;
    btn.innerText = 'Купить';
    btn.onclick = f;
    card.append(btn);
    block.append(card);
    return block, mas.price;
}

for (var i = 0; i < goods.length; i++) {
    createCard(goods[i], cards);
}

var button = document.querySelectorAll('button');
var basketBlock = document.querySelector('.goods-block');

function f(eve) {
    var str = eve.target.id;
    var strMas = str.split('');
    var good = goods[strMas[strMas.length - 1]];
    createCard(good, basketBlock);
    sum += good.price;
    basket.push(good);
    var result = document.querySelector('.res');
    result.innerHTML = 'Итого: ' + sum + '$';
    return basket, result;
}







