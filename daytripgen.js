"use strict";

let destinations = ["California" , "Canada" , "Texas" , "Florida"];
let methodsOfTranspo = ["Plane" , "Car" , "Train" , "Hitchhike"];
let typesOfEntertainment = ["Seeing a Movie" , "Swimming" , "Birdwatching" , "Crying"];
let restaurant = ["Whataburger" , "Olive Garden" , "The Cheesecake Factory" , "Chik-fil-a"];

let tripDetails = [getRandomNumber(destinations), getRandomNumber(methodsOfTranspo) , getRandomNumber(typesOfEntertainment),
getRandomNumber(restaurant)];

function getRandomNumber(array){ 
    let randomSelect =  array[Math.floor(Math.random() * array.length)]; 
    return randomSelect;
}


function run(){
    let result = tripDetails
    let userInput = prompt("Would you like for us to plan you a vacation?");
        if(userInput === "yes"){
            console.log("You will go to " + getRandomNumber(destinations));
            console.log("You will travel there by " + getRandomNumber(methodsOfTranspo));
            console.log("While you are there, you will spend lots of time " + getRandomNumber(typesOfEntertainment));
            console.log("We recommend " + getRandomNumber(restaurant) + " as a great place to eat.");
            let userSatisfied = prompt("Are you satisfied with these choices?");
                if(userSatisfied == "yes"){
                    alert("You are all set for your trip!");
                }else{
                    let secondChance = prompt("Would you like a new random selection")
                        if (secondChance == "yes"){
                     
                            run();
                        }       
                return result;
                }
                
             } else{
            let usersChoice = prompt("Let us know where you want to go");
                console.log(usersChoice);
            let usersChoiceTranspo = prompt("How would you like to get there?");
                console.log (usersChoiceTranspo);
            let usersChoiceEntertainment = prompt("What would you like to do while you are there?");
                console.log (usersChoiceEntertainment);
            let usersChoiceFood = prompt("What restaurant do you want to eat at most while on vacation?");
                console.log (usersChoiceFood);

            let verify = prompt("You chose " + usersChoice,"Are you happy with this vacation?")
                if(verify == "yes"){
                    console.log ("Here is your itinerary " + (usersChoice));
                }else{
                    let newTrip = prompt("Enter new vacation details", "Where? How? Entertainment? Restaurant?");
                        console.log("Here is your updated itinerary " + (newTrip));
                        
                    }
                }
            }
        



run();

//creating function to display completed trip details

function displayTripDetails(){
    console.log(result)
}

displayTripDetails();

// Store USERSCHOICES in ARRAY and display as ARRAY with headings
//Function to display array of randomized trip details(push each detail into array)
//How to choose individual random choices

