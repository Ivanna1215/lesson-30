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

let thMenu = document.getElementById('tr');
function pressedMenu () {


}

function pressedPrice() {

  
  }
let thPrice = document.getElementById('thPrice')
thMenu.addEventListener ('click',function(event){
    if (event.target.closest ('#thMenu')) {
        pressedMenu()
    }
})
thPrice.addEventListener ('click',function(event){
    if (event.target.closest ('#thPrice')) {
        pressedPrice()
    }
})
