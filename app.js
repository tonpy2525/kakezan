'use strict';
const textbox = document.getElementById("input-answer");
const inputValue = textbox.value;

let left10 = Math.floor( Math.random() * 9 ) + 1 ;
let left1 = Math.floor( Math.random() * 9 ) + 1 ;

let right10 = left10;
let right1 = 10 - left1

let left = 10 * left10 + left1
let right = 10 * right10 + right1

let mondai = left + " x " + right + " = ? "
document.getElementById('js-question').textContent = mondai

let correct = left * right

console.log(left10)
console.log(left1)
console.log(right10)
console.log(right1)

console.log(left)
console.log(right)
console.log(mondai)
console.log(correct)