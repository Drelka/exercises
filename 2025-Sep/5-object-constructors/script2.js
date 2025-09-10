"use strict";

let task = "";

const toDoList = {
    1: "go to work",
    2: "keep on learning",
    "this sunday": "church",
    "next wednesday": "visit Alex",
    "holiday countdown": 30,
    extraTask: function() { 
        switch (task) {
            case "windows":
                console.log("clean the windows");
                break;
            case "carpets":
                console.log("wash carpets");
                break;
            case "garden":
                console.log("cut grass");
                break;
            default:
                alert("no extra task assigned");
                break;
        }
    },
}

// bracket notation
toDoList[2];
toDoList["this sunday"];

// dot notation
toDoList.extraTask;


