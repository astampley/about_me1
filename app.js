'use strict';

var userPoints = 0;

console.log('hello');
alert('Welcome to my guessing game!');

var user = prompt('What is your name?');
alert('Hi' + user + '! I am so glad you want to play my game.');

var sports = prompt('Do I enjoy watching sports? Type Yes or No').toLowerCase();
console.log(sports);

if(sports === 'yes' || sports === 'y') {
  alert('That\'s correct, I love watching sports');
  userPoints++;
}else {
  alert('Wrong!! I love watching sports.');

}

var bacon = prompt('Does Aunri enjoy bacon? Type Yes or No').toLowerCase();
console.log(bacon);

if(bacon === 'yes' || bacon === 'y') {
  alert('Yes. Bacon will forever be bae. I cant help it.');
  userPoints++;
}else {
  alert('Wrong! I love me some bacon.');
}
var mixed = prompt('Am I mixed? Type Yes or No').toLowerCase();
console.log(mixed);

if(mixed === 'yes' || mixed === 'y') {
  alert('I may look like it but no I am not!');

}else {
  alert('You are correct, I am black, the light skinned version');
  userPoints++;
}
var color = prompt('Is my favorite color black?').toLowerCase();
console.log(color);

if(color === 'yes' || color === 'y') {
  alert('That would be incorrect, my favorite color is purple.');

}else {
  alert('Good job! After the previous question, I figured I could fool you.');
}
var naps = prompt('Do I enjoy taking naps?').toLowerCase();
console.log(naps);

if(naps === 'yes' || naps === 'y') {
  alert('You are oh so correct. Naps are glorious!');
  userPoints++;

} else {
  alert('Shame on you. Naps are a gift from God.');
}

alert('you have' + userPoints + 'points.');
