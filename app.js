'use strict';

var userPoints = 0;

console.log('hello');
alert('Welcome to my guessing game!');

var user = prompt('What is your name?');
alert('Hi' + user + '! I am so glad you want to play my game.');
// Question 1
var sports = prompt('Do I enjoy watching sports? Type Yes or No').toLowerCase();
console.log(sports);

if(sports === 'yes' || sports === 'y') {
  alert('That\'s correct, I love watching sports');
  userPoints++;
}else {
  alert('Wrong!! I love watching sports.');

}
// Question 2
var bacon = prompt('Does Aunri enjoy bacon? Type Yes or No').toLowerCase();
console.log(bacon);

if(bacon === 'yes' || bacon === 'y') {
  alert('Yes. Bacon will forever be bae. I cant help it.');
  userPoints++;
}else {
  alert('Wrong! I love me some bacon.');
}
// Question 3
var mixed = prompt('Am I mixed? Type Yes or No').toLowerCase();
console.log(mixed);

if(mixed === 'yes' || mixed === 'y') {
  alert('I may look like it but no I am not!');

}else {
  alert('You are correct, I am black, the light skinned version');
  userPoints++;
}
// Question 4
var color = prompt('Is my favorite color black?').toLowerCase();
console.log(color);

if(color === 'yes' || color === 'y') {
  alert('That would be incorrect, my favorite color is purple.');

}else {
  alert('Good job! After the previous question, I figured I could fool you.');
}
// Question 5
var naps = prompt('Do I enjoy taking naps?').toLowerCase();
console.log(naps);

if(naps === 'yes' || naps === 'y') {
  alert('You are oh so correct. Naps are glorious!');
  userPoints++;

} else {
  alert('Shame on you. Naps are a gift from God.');
}
// Guessing game with four chances
var correctNumber = 1987;
var notDone = true;

var guess;
for (var tries = 4; tries > 0 && notDone; tries--) {
  guess = prompt('Which year was I born? Hint - it\'s between 1980-1990');
  guess = parseInt(guess);
  console.log('guess');
  if (guess === correctNumber) {
    alert('That\'s correct!');
    notDone = false;
    userPoints++;
  } else if (guess > correctNumber) {
    alert('Nope. Too high.');
  } else {
    alert('Too low. Try again.');
  }
  // Question 7
  var answer7 = prompt('Where I have been stationed while in the Navy? Name a state.').toLowerCase();
  console.log('answer7');

  var done = false;
  var locations = ['Connecticut', 'Hawaii', 'Guam', 'Washington', 'Illinois', 'Mississippi' ];
  var guesses = 6;

  while(!done && guesses > 0) {

    for(var i = 0; i < locations.length; i++) {
      if(answer7 === locations[i]) {
        done = true;
      }

    }
    if(done === true) {
      alert('That would be correct!.');
    } else {
      alert('Wrong. Try again.');
      guesses--;
      answer7 = prompt('Guess again.');
    }
  }

  alert('you have' + userPoints + 'points.');
}
