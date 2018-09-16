//Set total score counter, losses, and wins to 0
var totalScoreCounter = 0;
var losses = 0;
var wins = 0;

//Computer generates random number between 19 - 120
    //display random number
//function randomNumberGen(){
    var randomNumber = Math.floor((Math.random() * 101) + 19);
    console.log(randomNumber);
    document.getElementById("randomNumberBox").innerHTML = randomNumber;

   
//}

    
document.getElementById("totalScore").innerHTML = totalScoreCounter;

function buttonsValueGen(){
    var button1Value = Math.floor((Math.random() * 11) + 1);
    var button2Value = Math.floor((Math.random() * 11) + 1);
    var button3Value = Math.floor((Math.random() * 11) + 1);
    var button4Value = Math.floor((Math.random() * 11) + 1);
    console.log(button1Value);


$(".button").click(function(){
    if(id = "button1"){
        totalScoreCounter = button1Value + totalScoreCounter;
    document.getElementById("totalScore").innerHTML = totalScoreCounter;
    }

    if(id = "button2"){
        totalScoreCounter = button2Value + totalScoreCounter;
    document.getElementById("totalScore").innerHTML = totalScoreCounter;
    }

    if(id = "button3"){
        totalScoreCounter = button3Value + totalScoreCounter;
    document.getElementById("totalScore").innerHTML = totalScoreCounter;
    }

    if(id = "button4"){
        totalScoreCounter = button4Value + totalScoreCounter;
    document.getElementById("totalScore").innerHTML = totalScoreCounter;
    }

    if(totalScoreCounter > randomNumber){
        losses++;
        randomNumber = Math.floor((Math.random() * 101) + 19);
    console.log(randomNumber);
    document.getElementById("randomNumberBox").innerHTML = randomNumber;
        buttonsValueGen();
        totalScoreCounter = 0;
    }

    else if(totalScoreCounter == randomNumber){
        wins++;
        randomNumber = Math.floor((Math.random() * 101) + 19);
    console.log(randomNumber);
    document.getElementById("randomNumberBox").innerHTML = randomNumber;
        buttonsValueGen();
        totalScoreCounter = 0;
    }
})
}
//Generate random number between 1 & 12 for each button

    /*$("#button1").click(function(){
    totalScoreCounter = button1Value + totalScoreCounter;
    document.getElementById("totalScore").innerHTML = totalScoreCounter;
    console.log(totalScoreCounter);
     if(totalScoreCounter > randomNumber){
        losses++;
        randomNumber = Math.floor((Math.random() * 101) + 19);
    console.log(randomNumber);
    document.getElementById("randomNumberBox").innerHTML = randomNumber;
        buttonsValueGen();
        totalScoreCounter = 0;
    }

    else if(totalScoreCounter == randomNumber){
        wins++;
        randomNumber = Math.floor((Math.random() * 101) + 19);
    console.log(randomNumber);
    document.getElementById("randomNumberBox").innerHTML = randomNumber;
        buttonsValueGen();
        totalScoreCounter = 0;
    }
 })  
$("#button2").click(function(){
    totalScoreCounter = button2Value + totalScoreCounter;
    document.getElementById("totalScore").innerHTML = totalScoreCounter;
    console.log(totalScoreCounter);
})
$("#button3").click(function(){
    totalScoreCounter = button3Value + totalScoreCounter;
    document.getElementById("totalScore").innerHTML = totalScoreCounter;
    console.log(totalScoreCounter);
})
$("#button4").click(function(){
    totalScoreCounter = button4Value + totalScoreCounter;
    document.getElementById("totalScore").innerHTML = totalScoreCounter;
    console.log(totalScoreCounter);
})
    
}*/

 

//.onclick response for each button
    //add random button value to total score counter


//if total score counter > random number
    //incrememnt losses counter and restart game:
        //generate new random number
        //generate new random value
        //reset total score counter to 0

    

//if total score counter == random number
    //increment wins counter and restart game:
        //generate new random number
        //generate new random value
        //reset total score counter to 0



       // randomNumberGen();

        buttonsValueGen();