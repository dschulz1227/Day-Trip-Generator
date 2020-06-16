"use strict";

let destination = ["California" , "Canada" , "Texas" , "Florida"];
let methodsOfTranspo = ["Plane" , "Car" , "Train" , "Hitchhike"];
let typesOfEntertainment = ["Seeing a Movie" , "Swimming" , "Birdwatching" , "Crying"];


function getRandom() {
    let myArray = destination || methodsOfTranspo || typesOfEntertainment;
    let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem;
}

getRandom(destination);
getRandom(methodsOfTranspo);
getRandom(typesOfEntertainment);
