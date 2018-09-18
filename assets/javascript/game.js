$(document).ready(function(){
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

document.getElementById("winCounter").innerHTML = "Wins: " + wins;
document.getElementById("lossCounter").innerHTML = "Losses: " + losses;
//document.getElementById("winsLossBox").innerHTML = wins; 
document.getElementById("totalScore").innerHTML = "Total Score: " + totalScoreCounter;

var button1Value = Math.floor((Math.random() * 11) + 1);
    var button2Value = Math.floor((Math.random() * 11) + 1);
    var button3Value = Math.floor((Math.random() * 11) + 1);
    var button4Value = Math.floor((Math.random() * 11) + 1);
    console.log(button1Value);
    
    function reset(){
    totalScoreCounter = 0;
    document.getElementById("totalScore").innerHTML = "Total Score: " + totalScoreCounter;
    randomNumber = Math.floor((Math.random() * 101) + 19);
    console.log(randomNumber);
    document.getElementById("randomNumberBox").innerHTML = randomNumber;

     button1Value = Math.floor((Math.random() * 11) + 1);
     button2Value = Math.floor((Math.random() * 11) + 1);
     button3Value = Math.floor((Math.random() * 11) + 1);
     button4Value = Math.floor((Math.random() * 11) + 1);
    console.log(button1Value);

    

}

//Generate random number between 1 & 12 for each button
/*$(".button").on("click", function (){
    var newScore = totalScoreCounter + 
})*/

    $("#button1").click(function(){
    totalScoreCounter = button1Value + totalScoreCounter;
    document.getElementById("totalScore").innerHTML = "Total Score: " + totalScoreCounter;
    console.log(totalScoreCounter);

     if(totalScoreCounter > randomNumber){
        losses++;
        document.getElementById("lossCounter").innerHTML = "Losses: " + losses;
        reset();
       
    }

    else if(totalScoreCounter == randomNumber){
        wins++;
        document.getElementById("winCounter").innerHTML = "Wins: " + wins;
        reset();
       
    }
 })  
$("#button2").click(function(){
    totalScoreCounter = button2Value + totalScoreCounter;
    document.getElementById("totalScore").innerHTML = "Total Score: " + totalScoreCounter;
    console.log(totalScoreCounter);

    if(totalScoreCounter > randomNumber){
        losses++;
        document.getElementById("lossCounter").innerHTML = "Losses: " + losses;
        reset();
       
    }

    else if(totalScoreCounter == randomNumber){
        wins++;
        document.getElementById("winCounter").innerHTML = "Wins: " + wins;
        reset();
       
    }
})
$("#button3").click(function(){
    totalScoreCounter = button3Value + totalScoreCounter;
    document.getElementById("totalScore").innerHTML = "Total Score: " + totalScoreCounter;
    console.log(totalScoreCounter);

    if(totalScoreCounter > randomNumber){
        losses++;
        document.getElementById("lossCounter").innerHTML = "Losses: " + losses;
        reset();
       
    }

    else if(totalScoreCounter == randomNumber){
        wins++;
        document.getElementById("winCounter").innerHTML = "Wins: " + wins;
        reset();
       
    }
})
$("#button4").click(function(){
    totalScoreCounter = button4Value + totalScoreCounter;
    document.getElementById("totalScore").innerHTML = "Total Score: " + totalScoreCounter;
    console.log(totalScoreCounter);

    if(totalScoreCounter > randomNumber){
        losses++;
        document.getElementById("lossCounter").innerHTML = "Losses: " + losses;
        reset();
       
    }

    else if(totalScoreCounter == randomNumber){
        wins++;
        document.getElementById("winCounter").innerHTML = "Wins: " + wins;
        reset();
       
    }
})
    


 

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

       // buttonsValueGen();
})