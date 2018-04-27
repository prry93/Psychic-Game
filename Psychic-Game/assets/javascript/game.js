// An array of every letter of the alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// variable that tracks wins and losses

var wins = 0;
var losses = 0;
var guesses = 8;

// variable that records keys previously guessed
var lettersPicked = [];

//  key presses
document.onkeyup = function(event) {
    var userKey = event.key
// chooses random number
    var alphabetChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// Will add userKey into the letterPicked array

lettersPicked.push(userKey)

// If user chooses correct key within 8 tries, win counter goes up by one
    if (userKey === alphabetChoice) {
        wins ++;
    }
// Guess counter goes down for every incorrect pick
    else {
        guesses --;
    }
// If guesses goes to 0, a loss and 8 more guesses will added. The 8 guesses and cleared lettersPicked array will restart the game.
   if(guesses === 0 ){
        losses ++;
        guesses = 8;
        return lettersPicked = []
    }


var html =

"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>guesses left:" + guesses + "</p>" +
"<p> You pressed: " + event.key + "</p>" +
"<p> words chosen: " + lettersPicked + "</p>";

document.querySelector("#game").innerHTML = html;
};
