var authors = ["austen", "dickens", "bronte", "twain", "hemingway", "faulkner", "hurston"];
var numberOfGuess = 12;
var win = 0;

var authorName = authors[Math.floor(Math.random() * authors.length)];
    console.log("I've chosen one!");
    console.log('authorName = %s',authorName);
var authorLetters = str.indexof(authorName);
    console.log("I'm an individual letter");

document.onkeyup = function(event) {
    var playerGuess = event.key;
    console.log('The game starts');

        if(playerGuess == authorName.indexOf()){
            console.log("I got a letter");
        } else if (playerGuess != authorName){
            console.log("I lost a guess");
            numberOfGuess--;
        } else if(numberOfGuess == 0){
            console.log("start over");
            authors[Math.floor(Math.random() * authors.length)];
            numberOfGuess = 12;
        }
}