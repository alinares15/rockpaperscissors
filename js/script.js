// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function(){
    var userChoice = '';
    userChoice = $("#input").val();
    
   $("#userChoice").text($("#input").val()); 
   
   var computerChoice = '';
   var number = Math.random();
   
   if (number > 0 && number < 0.25 ){
       computerChoice = "Earth";
   }
   
   if (number > 0.25 && number < 0.50){
       computerChoice = "Fire";
   }
   
   if (number > 0.50 && number < 0.75){
       computerChoice = "Air";
   }
   
   if (number > 0.75 && number < 1){
       computerChoice = "Water";
   }
   
   $("#computerChoice").text(computerChoice)
   
   var winner = '';
   if (userChoice === "earth" && computerChoice === "wind"){
       winner = "Computer wins";
   }
   
   if (userChoice === "earth" && computerChoice === "water"){
       winner = "computer wins";
   }

    if (userChoice === "earth" && computerChoice === "fire"){
        winner = "user wins";
    }   
    
    if (userChoice === "earth" && computerChoice === "earth"){
        winner = "nobody wins, try again";
    }   
    
    
   $("#result").text(winner);
});

// DOCUMENT READY FUNCTION BELOW

