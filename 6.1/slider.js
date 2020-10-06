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

    // console.log(mas[mas.length - 1]);
}

