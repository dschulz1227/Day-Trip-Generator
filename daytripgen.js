"use strict";

let destinations = ["California" , "Canada" , "Texas" , "Florida"];
let methodsOfTranspo = ["Plane" , "Car" , "Train" , "Hitchhike"];
let typesOfEntertainment = ["Seeing a Movie" , "Swimming" , "Birdwatching" , "Crying"];
let restaurant = ["Whataburger" , "Olive Garden" , "The Cheesecake Factory" , "Chik-fil-a"];

function getRandomNumber(array) {
    let myArray = destinations || methodsOfTranspo || typesOfEntertainment;
    let randomItem = [Math.floor(Math.random()* myArray.length)];
    let randomSelection = parseFloat(randomItem);
    return randomSelection;
}

// console.log(getRandomNumber(destinations))
// console.log(getRandomNumber(methodsOfTranspo))
// console.log(getRandomNumber(typesOfEntertainment))

function getRandomNumber(array){ 
    let randomSelect =  array[Math.floor(Math.random() * array.length)]; 
    return randomSelect;
}

getRandomNumber(destinations);
getRandomNumber(methodsOfTranspo);
getRandomNumber(typesOfEntertainment);
getRandomNumber(restaurant);


function run(){
    let userInput = prompt("Would you like for us to plan you a vacation?");
        if(userInput === "yes"){
            console.log("You will go to " + getRandomNumber(destinations))
            console.log("You will travel there by " + getRandomNumber(methodsOfTranspo))
            console.log("While you are there, you will spend lots of time " + getRandomNumber(typesOfEntertainment))
            console.log("We recommend " + getRandomNumber(restaurant) + " as a great place to eat.")
        }else{
           let usersChoice = prompt("Let us know where you want to go, hpw you want to get there, and what you want to do while you are there.")
           console.log(usersChoice);
        }

    
}

run();





//     while (userInput !== properResponse){
//         userInput = prompt("Please enter a new response.");
//     }
//         if (userInput == properResponse){
//              (getRandomNumber(destinations))
//              (getRandomNumber(methodsOfTranspo))
//              (getRandomNumber(typesOfEntertainment))   
        
//         return true;
//         }
// }

// run();


// run();
//     if(userInput == "no") {
//         console.log("Sorry, you must find a new business to help you.")
    
//     } 
   
//     else {
//         console.log("Your destination will be " + getRandomNumber(destination)) , "You will arrive there by way of " + (getRandomNumber(methodsOfTranspo)) ,
//         "and while you are there, you will spend lots of time " + (getRandomNumber(typesOfEntertainment) +  ".")
//         }
// }

// run()
