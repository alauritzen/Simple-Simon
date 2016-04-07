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

/*
    // create interval
    var count = 0;
    var max = cpuString.length;
    var interval = 1000;

    var intervalId = setInterval(function () {
        if (count <= max) {
            // random number function
            var nextButton = getRandomInt();

            function getRandomInt() {
                return Math.floor(Math.random() * (3 - 0 + 1) + 0);
            }
            cpuString.push(nextButton);
            count++;

            console.log(cpuString);
            buttons[nextButton].css("background-color", "black");
            
        }
    });
*/


    // random number function
    function getRandomInt() {
        return Math.floor(Math.random() * (3 - 0 + 1) + 0);
    }
    console.log(getRandomInt());




    // function to push each button to cpu string
    function addCpuNumber() {
        var nextButton = getRandomInt();
        console.log(nextButton);
        cpuString.push(nextButton);
    }

    // function to flash cpu string
    


















})();