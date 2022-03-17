'use strict'
// Task 1

// let div = document.getElementById('div');
// document.addEventListener('keydown', function (event) {
//     if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
//         event.preventDefault();
//         div.style.display = 'none';
//         let textarea = document.createElement('textarea');
//         textarea.innerText = div.innerText;
//         document.body.append(textarea);
//     }
// })

// document.addEventListener('keydown', function (event) {
//     if (event.code == 'KeyR' && (event.ctrlKey || event.metaKey)) {
//         event.preventDefault();
//         let textarea = document.querySelector('textarea');
//         textarea.style.display = 'none';
//         div.style.display = 'block';
//         div.innerText = textarea.value;

//     }
// })

// Task 3

let point = document.getElementById('point');
function editSize() {
    point.addEventListener('mousemove', startEdit)
}
function startEdit(event) {
let block = document.getElementById('block');
block.style.display = 'red';
block.style.width = event.clientX + 'px';
block.style.height = event.clientY + 'px';
}
document.addEventListener('mouseup',stopEdit);

function stopEdit (){
    point.removeEventListener('mousemove',startEdit)
}