'use strict'
function keyHandler(event) {
    console.log(event.type);
    console.log('repeat:'+event.repeat);
    console.log (`key:${event.code}, code:${event.key}`);
    
}
let test = document.getElementById('test');
test.onmousemove = function (event) {
    event = event || window.event;
    // console.log (event);
    let x= document.querySelector('#offx');
    x.innerHTML = event.offsetX;
    let y = document.querySelector('#offy');
    y.innerHTML = event.offsetY;
    
}

