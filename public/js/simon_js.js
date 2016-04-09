(function(){
"use strict";

// create number randomizer that indicates each button

    // set variables for cpu string and user string
    var cpuString=[];
    var userString=[];
    var score=0;
    var high_score=0;

    // use jquery to get ids of buttons
    var $up = $("#box_up");
    var $left = $("#box_left");
    var $down = $("#box_down");
    var $right = $("#box_right");

    var buttons = [$up, $left, $down, $right];

    // random number function
    function getRandomInt() {
        return Math.floor(Math.random() * (3 - 0 + 1) + 0);
    }

    // function to push each button to cpu string
    function addCpuNumber() {
        var nextButton = getRandomInt();
        console.log(nextButton);
        cpuString.push(buttons[nextButton]);
    }

    // function to update score
    function updateScore() {
        $("#current_score").text(score);
        if (score > high_score) {
            high_score=score;
        $("#high_score").text(high_score);
        }
    }

    // function to flash cpu string
    function flashSequence() {
        addCpuNumber(); 
        
        var index = 0;

        var max = cpuString.length;
        var interval = 2000;


        var intervalId = setInterval(function() {
            if (index <= (max-1)) {
                // cpuString[index].css("opacity", "1.0");
                cpuString[index].animate({
                    opacity: "1.0"
                }, 430);
                cpuString[index].animate({
                    opacity: "0.6"
                }, 430);
                index++;
            }
        }, interval);
    } 

    // listener for user input
    buttons.forEach(function (whichButton,index, array) {
        whichButton.click(function() {
            // buttons flash faster for user input
            whichButton.animate({
                opacity: "1.0"
            }, 200);
            whichButton.animate({
                opacity: "0.6"
            }, 200);
            userString.push(whichButton);
            var lastUserIndex = userString.length-1
            // compare input to cpu string
            // if false, clear cpu string and user string
            if (userString[lastUserIndex] != cpuString[lastUserIndex]) {
                userString = [];
                cpuString = [];
                $("#start_text").text("Oops! Game over! Your score was " + score + ".");
                score=0;
                updateScore();
                // change start text on game over
            // input correct and complete string matches, clear user string for next round and run flashSequence again
            } else if (userString.length == cpuString.length) {
                // change start text when round is complete
                $("#start_text").text("Well done! Prepare for the next round!");
                score++;
                updateScore();                
                userString = [];
                flashSequence();
            // otherwise input is correct, but string is not complete, so nothing happens yet
            } else {
                $("#start_text").text("So far, so good!");
            }
        });
    });

    // listener for start button runs flash sequence on start
    $("#box_start").click(function() {
        // scorecard slides down
        $("#scorecard").slideDown();
        userString = [];
        cpuString = [];
        score=0;
        updateScore();
        flashSequence();
        // start button text changes
        $("#start_text").text("Good luck!")
    });



    
    // flashSequence();
    // console.log(cpuString);
    // console.log("length "+ cpuString.length + ", current count: " + count);

















})();