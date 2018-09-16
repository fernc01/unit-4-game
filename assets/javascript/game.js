//Set total score counter, losses, and wins to 0
var totalScoreCounter = 0;
var losses = 0;
var wins = 0;

//Computer generates random number between 19 - 120
function randomNumberGen(){
    var randomNumber = [Math.floor(Math.random() * 101) + 19];
}

    //display random number





//Generate random number between 1 & 12 for each button
function buttonsValueGen(){
    var button1Value = [Math.floor(Math.random() * 11) + 1];
    var button2Value = [Math.floor(Math.random() * 11) + 1];
    var button3Value = [Math.floor(Math.random() * 11) + 1];
    var button4Value = [Math.floor(Math.random() * 11) + 1];
}

//.onclick response for each button
$("#button1").click(function(){
    button1Value += totalScoreCounter;
})
$("#button2").click(function(){
    button2Value += totalScoreCounter;
})
$("#button3").click(function(){
    button3Value += totalScoreCounter;
})
$("#button4").click(function(){
    button4Value += totalScoreCounter;
})
    //add random button value to total score counter

//if total score counter > random number
if(totalScoreCounter > randomNumber){
    losses++;
    randomNumberGen();
    buttonsValueGen();
    totalScoreCounter = 0;
}
    //incrememnt losses counter and restart game:
        //generate new random number
        //generate new random value
        //reset total score counter to 0

//if total score counter == random number
else if(totalScoreCounter == randomNumber){
    wins++;
    randomNumberGen();
    buttonsValueGen();
    totalScoreCounter = 0;
}
    //increment wins counter and restart game:
        //generate new random number
        //generate new random value
        //reset total score counter to 0