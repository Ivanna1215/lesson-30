'use strict'
let w = 200;
let h =  100;
    let block = document.getElementById('block');
    block.onmousemove = () => {
        block.style.height = h +'px';
        block.style.width = w +'px';
        w++;
        h++;
    }

   
