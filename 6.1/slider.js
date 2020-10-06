var img = document.querySelectorAll('img');
var bigImg = document.querySelector('.big-photo');

for (var item of img) {
    item.onclick = showBig;
}

var title = document.createElement('h2');

function showBig(eve) {
    var numb = eve.target.id;
    var mas = numb.split('-');
    title.classList.add('hidden');
    bigImg.classList.remove('hidden');
    bigImg.src = 'big/photo-' + mas[mas.length - 1] + '.jpg';
    bigImg.onerror = function () {
        title.innerText = "no photo in case";
        bigImg.insertAdjacentElement("beforebegin", title);
        bigImg.classList.add('hidden');
        title.classList.remove('hidden');
        return title;
    }
}

// Слайдер 
var numberOf = 5;
var i = 1;
var image = document.querySelector('.slider-photo');
var left = document.querySelector('#left');
var right = document.querySelector('#right');


left.onclick = imgSrc;
right.onclick = imgSrc;
image.src = 'img/photo-' + i + '.jpg';


function imgSrc(eve) {
    if (eve.target.id == 'left') {
        --i;
        if (i == 0) {
            i = numberOf;
        }

    } else {
        ++i;
        if (i > numberOf) {
            i = 1;
        }
    }
    image.src = 'img/photo-' + i + '.jpg';
    console.log(image.src);
    return image.src;
}










