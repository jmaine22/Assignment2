// Larger or Smaller?
let num1 = parseInt(prompt("Number 1 ", ));
let num2 = parseInt(prompt("Number 2 ", ));
//check to see which number is bigger
if (num1 >= num2){
    document.write(num1);
}else {
    document.write(num2);
}

// The Word Translator
let languageChoice = prompt("Language code Please?" + " " + "es" + " " + " de" + " " + " en" + " " + " fr");
//compare user choice
if (languageChoice == "es") {
    window.console.log("Hello World translated in Spanish is: Hola Mundo ");
}else if (languageChoice == "de") {window.console.log("Hello World translated in German is: Hallo Welt ");}
else if (languageChoice == "en") {window.console.log("Hello World translated in English is: Hello World ");}
else if (languageChoice == "fr") {window.console.log("Hello World translated in French is: Bonjour le monde ");}
 else {
    window.console.log("Hello World")
}

// The Coin Flip Game
let coinFlip = Math.round(Math.random());
let coinToss = prompt("Heads or Tails");
let choice = coinToss;
let result;
//check the result of coin flip
if (coinFlip < 5 ) {
     result = "Heads";
     if (result == "Heads" && coinToss == "heads") {
        alert("The flip was heads and you chose heads...you win!");
     }else if (result == "Heads" && coinToss == "tails") {
        alert("The flip was heads and you chose tails...you lose!");
     }
}else if (coinFlip > 5 ){
     result = "Tails";
     if (result == "Tails" && coinToss == "tails") {
        alert("The flip was tails and you chose tails...you win!");
     } else if (result == "Tails" && coinToss == "heads"){
         alert("The flip was tails but you chose heads...you lose!");
     }
}

// The Grade Assigner Application
let collectNum = prompt("Chose a number between 1 and 100");
let userChoice = parseInt(collectNum);
if (!(userChoice > 1 && userChoice <= 100 )) {
    alert("Sorry only numbers between 1 and 100");
}else if (userChoice >= 60 && userChoice <= 69) {
    console.log("You received a D");
}else if (userChoice >= 70 && userChoice <= 79) {
    console.log("You received a C");
}else if (userChoice >= 80 && userChoice <= 89) {
    console.log("You received a B");
}else if (userChoice >= 90 && userChoice == 100) {
    console.log("You received a A");
}else if (userChoice <60) {
    console.log("You received a F");
}


//The Hitchhiker's Guide to the Galaxy Game
let pChoice = prompt("Are you ready to play the game");
if (pChoice == "yes") {
    window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of " + 
    " Captain Chingadera.You are disoriented, lost, hungry and extremely thirsty." + 
    " You see a speck of light in the distance ahead of you, something shimmering to" + 
     " your right, and the sound of running water to your left. Your back is against the wall. ");
     //prompt for to chose where to go.
     let pDirection = window.prompt("Which direction would you like to head (please enter forward, left, or right).");
     //choice of directions for player
    switch (pDirection) {
     case "left":
         alert("Your thirst has gotten the better of you."
         + "You trip on a rock, hit your head, and fall into a pool of water and drown!");
         break;
     case "forward":
         alert("You walk 100 yards and safely make you way out of the cave.");
         break;
     case "right":
         alert("You found the gold! You walk into a small room and see thousands of gold coins"
         + ", jewels, chalices, and more. You jump into the pile of gold in celebration and"
         + "immediately a hidden door slams and traps you in the room forever!");
         break;
     default:
         alert("The ghost of Captain Chingadera has condemned you to etenal damnation and you shall"
         + "now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
 }
} else if (pChoice == "no" || pChoice != "yes") {
    window.alert("Thank You and please play again sometime.");
} 
