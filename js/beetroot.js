'use strict'
// function buttonClick() {
//     console.log ('button pressed');
// }
// document.getElementById('btn').onclick = function () {
//     console.log ('button pressed');
// }
// function buttonPressed() {
//     console.log ('button pressrd');
// }
// document.getElementById('btnFour').onclick = buttonPressed;

// let btn = document.getElementById ('btnFive');
// btn.addEventListener ('click',()=>console.log('button pressed'));
// btn.addEventListener ('click',function() {
//     console.log ('the button has been pressed')
// })

// let btnSix = document.getElementById('btnSix');
// function buttonPressedSix() {
//     console.log ('btnSix pressed');
// }
// btnSix.addEventListener ('click',buttonPressedSix);

// document.getElementById('link').onclick = function (event) {
// console.log(event);
// alert (event.target);
// event.preventDefault();
// console.log (this);
// }

// let add = document.getElementById('seven');
// let remove = document.getElementById('eight');
// let test = document.getElementById('nine');

// function testAdd(){
//     test.addEventListener ('click',testRed);
// }

// function testRed() {
//     test.style.backgroundColor='red';
// setTimeout(()=>{ test.style.backgroundColor='white';} ,3000);
// }

// function testRemove() {
//     test.removeEventListener('click',testRed);
// }

// Task 1
let colorRed = document.getElementById('editColor');
colorRed.addEventListener('mouseout', bluecolor);
colorRed.addEventListener('dblclick',circle);
colorRed.addEventListener ('contextmenu',(e)=> e.preventDefault());

function editColor() {
    colorRed.style.backgroundColor = 'red';
}

function bluecolor() {
    colorRed.style.backgroundColor = 'blue';
}

function circle() {
    colorRed.style.borderRadius = '50%';
}

