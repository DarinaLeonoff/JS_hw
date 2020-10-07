var cards = document.querySelector('.card-block');
var basket = [];
var sum = 0;
var result = document.querySelector('.res');
var button = document.querySelectorAll('button');
var basketBlock = document.querySelector('.goods-block');

// создаем карточки товаров 
function createCard(mas, block, btnIn, func) {
    var card = document.createElement('div');
    card.className = 'card';
    card.id = 'card-' + i;

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
    btn.innerHTML = btnIn;
    btn.onclick = func;
    card.append(btn);
    block.append(card);
    return block, mas.price;
}


for (var i = 0; i < goods.length; i++) {
    createCard(goods[i], cards, 'Купить', f);
}


function f(eve) {
    i = 0;
    var str = eve.target.id;
    var strMas = str.split('');
    var good = goods[strMas[strMas.length - 1]];
    sum += good.price;
    createCard(good, basketBlock, '&#10008;', close);
    basket.push(good);
    result.innerHTML = 'Итого: ' + sum + '$';
    i++;
    return basket;
}

// удалние карт
function close(event) {
    var btnNumb = event.target.id.split('-');
    sum = sum - basket[btnNumb[1]].price;
    basket.splice([btnNumb[1] - 6], 1);
    var basketCard = document.getElementById('card-' + btnNumb[1]);
    basketCard.parentNode.removeChild(basketCard);
    result.innerHTML = 'Итого: ' + sum + '$';
    return basket;
}






