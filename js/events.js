'use strict'
let button = document.querySelector('.button');
// button.onclick = function () {
//     console.log ('Click me please!');
// }


// button.onclick = showConsole;

//  button.addEventListener('click',function() {
//      console.log('Click!');
//  });
//  button.addEventListener('click',function() {
//      console.log('Click me please');
//  });


const options = {
    'capture':false,
    'onse':true,
    'passive':true,
}

function showConsole() {
    console.log ('Click me!');
}

button.addEventListener('click',showConsole,options);

let btn = document.getElementById('btn');
function showConsole(event){
    // тип події
    console.log (event.type)
    // об'єкт на якому спрацював обробник
    console.log (event.target)
    // обєкт якому призначен обробник
    console.log(event.currentTarget)
    console.log(event.clientX)
    console.log(event.clientY)
    console.log(event)


}
btn.addEventListener ('click',showConsole)

document.addEventListener('keydown',function(event){
    console.log('keyPressed')
})