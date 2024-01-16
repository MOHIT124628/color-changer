'use strict';

var colors = ['white','red','blue','green','yellow','violet'];
var len = colors.length-1;


var buttonControl = document.getElementById('btn');
var spanControl = document.querySelector('.color');

buttonControl.addEventListener('click',()=>{
    var index = generateRandomColor();
    document.body.style.background=colors[index];
    spanControl.textContent=colors[index];
})

function generateRandomColor(){
   return Math.round(Math.random()*len);
}