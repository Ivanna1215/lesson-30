'use strict'
function buttonClick() {
    console.log ('button pressed');
}
document.getElementById('btn').onclick = function () {
    console.log ('button pressed');
}
function buttonPressed() {
    console.log ('button pressrd');
}
document.getElementById('btnFour').onclick = buttonPressed;

let btn = document.getElementById ('btnFive');
btn.addEventListener ('click',()=>console.log('button pressed'));
btn.addEventListener ('click',function() {
    console.log ('the button has been pressed')
})

let btnSix = document.getElementById('btnSix');
function buttonPressedSix() {
    console.log ('btnSix pressed');
}
btnSix.addEventListener ('click',buttonPressedSix);

document.getElementById('link').onclick = function (event) {
console.log(event);
alert (event.target);
event.preventDefault();
console.log (this);
}


