var prv = document.getElementById('prv');
var next = document.getElementById('next');
var hero = document.getElementById('hero');
var thumbnil = document.getElementsByClassName('thumbnil');

var backgroundImage = new Array(
    'image/img/bg1.png',
    'image/img/bg2.png',
    'image/img/bg3.png',
    'image/img/bg4.png',
    'image/img/bg5.png',
);
let i = 0;
next.onclick = function () {

    if (i < 4) {
        hero.style.backgroundImage = 'url("' + backgroundImage[i + 1] + '")';
        thumbnil[i + 1].classList.add('active');
        thumbnil[i].classList.remove('active');
        i++;
    }

}
prv.onclick = function () {

    if (i > 0) {
        hero.style.backgroundImage = 'url("' + backgroundImage[i - 1] + '")';
        thumbnil[i - 1].classList.add('active');
        thumbnil[i].classList.remove('active');
        i--;
    }

}