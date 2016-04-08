(function(){
"use strict";

// create number randomizer that indicates each button

    // set variables for cpu string and user string
    var cpuString=[];
    var userString=[];
    var current_score=0;
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

    // function to flash cpu string
    function flashSequence() {
        addCpuNumber();
        // change round in scorecard
        $("#current_round").text(cpuString.length); 
        
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
            
                /*console.log("After running flash Sequence: cpu length "+ cpuString.length + ", cpu current index: " + index);
                console.log("user input length "+ userString.length + ", user current index: " + index);*/

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
                console.log(userString[0] + " user compare to cpu " + cpuString[0] + " not correctly");
                userString = [];
                cpuString = [];
                $("#start_text").text("Sorry. You've reached the end. Your score is " + current_score + ".").css("font-size", "20px");
                console.log("length of cpu string: " + cpuString.length + "length of user string: " + userString.length);
            // if true and complete string matches, clear user string for next round and run flashSequence again
            } else if (userString.length == cpuString.length) {
                console.log("Correct. Complete sequence matches. Prepare for next round")
                userString = [];
                flashSequence();
            // otherwise input is correct, but string is not complete, so nothing happens yet
            } else {
                console.log(userString[0] + " user compare to cpu " + cpuString[0] + " correctly");
            }
        });
    });

    // listener for start button runs flash sequence on start
    $("#box_start").click(function() {
        // scorecard slides down
        $("#scorecard").slideDown();
        userString = [];
        cpuString = [];
        flashSequence();
        // start button text changes
        $("#start_text").text("Good luck!")
        console.log(cpuString);
    });



    
    // flashSequence();
    // console.log(cpuString);
    // console.log("length "+ cpuString.length + ", current count: " + count);

















})();