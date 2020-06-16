"use strict";

let destinations = ["California" , "Canada" , "Texas" , "Florida"];
let methodsOfTranspo = ["Plane" , "Car" , "Train" , "Hitchhike"];
let typesOfEntertainment = ["Seeing a Movie" , "Swimming" , "Birdwatching" , "Crying"];


function getRandomNumber(array) {
    let myArray = destinations || methodsOfTranspo || typesOfEntertainment;
    let randomItem = [Math.floor(Math.random()* myArray.length)];
    let randomSelection = parseFloat(randomItem);
    return randomSelection;
}

console.log(getRandomNumber(destinations))
console.log(getRandomNumber(methodsOfTranspo))
console.log(getRandomNumber(typesOfEntertainment))