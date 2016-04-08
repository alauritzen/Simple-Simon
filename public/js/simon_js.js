(function(){
"use strict";

// create number randomizer that indicates each button

    // set variables for cpu string and user string
    var cpuString=[];
    var userString=[];

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
        
        var index = 0;

        var max = cpuString.length;
        var interval = 2000;

        var intervalId = setInterval(function() {
            if (index <= (max-1)) {
                // cpuString[index].css("opacity", "1.0");
                cpuString[index].animate({
                    opacity: "1.0"
                }, 500);
                cpuString[index].animate({
                    opacity: "0.4"
                }, 500);
            
                console.log("length "+ cpuString.length + ", current index: " + (index+1));
                index++;
            }
        }, interval);
    } 

    // listener for user input
    // if false, clear cpu string and user string
    // if true, run flashSequence again
    buttons.forEach(function (whichButton,index, array) {
        whichButton.click(function() {
            whichButton.animate({
                opacity: "1.0"
            }, 500);
            whichButton.animate({
                opacity: "0.4"
            }, 500);
            // compare input to cpu string
            userString.push(whichButton);
            var lastUserIndex = userString.length-1
            if (userString[lastUserIndex] != cpuString[lastUserIndex]) {
                console.log(userString[0] + " user compare to cpu " + cpuString[0] + " not correctly")
            } else {
                console.log(userString[0] + " user compare to cpu " + cpuString[0] + " correctly");
            }
            
        });
    });


    addCpuNumber();
    addCpuNumber();
    addCpuNumber();
    flashSequence();
    console.log(cpuString);
    // console.log("length "+ cpuString.length + ", current count: " + count);

















})();