"use strict";

let destinations = ["California" , "Canada" , "Texas" , "Florida"];
let methodsOfTranspo = ["Plane" , "Car" , "Train" , "Hitchhike"];
let typesOfEntertainment = ["Seeing a Movie" , "Swimming" , "Birdwatching" , "Crying"];
let restaurant = ["Whataburger" , "Olive Garden" , "The Cheesecake Factory" , "Chik-fil-a"];



function getRandomNumber(array){ 
    let randomSelect =  array[Math.floor(Math.random() * array.length)]; 
    return randomSelect;
}


function run(){
    
    let userInput = prompt("Would you like for us to plan you a vacation?");
        if(userInput === "yes"){
            console.log("You will go to " + getRandomNumber(destinations))
            console.log("You will travel there by " + getRandomNumber(methodsOfTranspo))
            console.log("While you are there, you will spend lots of time " + getRandomNumber(typesOfEntertainment))
            console.log("We recommend " + getRandomNumber(restaurant) + " as a great place to eat.");
            let userSatisfied = prompt("Are you satisfied with these choices?")
                if(userSatisfied == "yes"){
                    console.log( "You are all set for your trip!");
                }else{
                    let secondChance =prompt("Would you like a new random selection")
                        if (secondChance == "yes"){
                     
                            run();
                }       
                        
                    
                        }

                
             } else{
           let usersChoice = prompt("Let us know where you want to go, hpw you want to get there, and what you want to do while you are there.")
           let verify = prompt("Are you happy with this vacation?")
                if(verify == "yes"){
                    console.log("Here is your itinerary " + usersChoice);
                }else{
                    let newTrip = prompt("Enter new vacation details")
                        console.log("Here is your updated itinerary " + newTrip);
                    }
                }
            }
        



run();






