var authors = ["austen", "dickens", "brone", "twain", "hemingway", "faulkner", "hurston"];
var numberOfGuess = 12;
var win = 0;

var authorName = authors[Math.floor(Math.random() * authors.length)];
    console.log("I've chosen one!");

document.onkeyup = function(event) {
    var playerGuess = event.key;
    console.log('The game starts');
}


if(playerGuess == authorName[]){
    console.log("I got a letter");
} else{
    console.log("I lost a guess");
    numberOfGuess--;
}