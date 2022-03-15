'use strict'
function keyHandler(event) {
    console.log(event.type);
    console.log('repeat:' + event.repeat);
    console.log(`key:${event.code}, code:${event.key}`);

}
let test = document.getElementById('test');
test.onmousemove = function (event) {
    event = event || window.event;
    // console.log (event);
    let x = document.querySelector('#offx');
    x.innerHTML = event.offsetX;
    let y = document.querySelector('#offy');
    y.innerHTML = event.offsetY;

}

document.addEventListener('DOMContentLoaded', readyDom);
window.addEventListener ('load',readyLoad);

function readyDom() {
    const image = document.querySelector('.image');
    console.log (document.readyState);
    console.log('DOM downloaded!');
    console.log(image.offsetWidth);
}

function readyLoad() {
    console.log(document.readyState);
    const image = document.querySelector('.image');
    console.log("page downloaded");
    console.log(image.offsetWidth);
}

