"use strict";
//variables
let destinations = ["California" , "Canada" , "Texas" , "Florida"];
let methodsOfTranspo = ["Plane" , "Car" , "Train" , "Hitchhiking"];
let typesOfEntertainment = ["Watching Movies" , "Swimming" , "Birdwatching" , "Crying"];
let restaurant = ["Whataburger" , "Olive Garden" , "The Cheesecake Factory" , "Chik-fil-a"];
let tripDetails = [getRandomNumber(destinations), getRandomNumber(methodsOfTranspo) , getRandomNumber(typesOfEntertainment),
    getRandomNumber(restaurant)];
let result = tripDetails
   

//arrays




//functions

function getRandomNumber(array){ 
    let randomSelect =  array[Math.floor(Math.random() * array.length)]; 
    return randomSelect;
}

//
function displayTripDetails(){
    console.log(result)
}

//
function reRoll(){
    console.log(getRandomNumber(destinations));
    console.log(getRandomNumber(methodsOfTranspo));
    console.log(getRandomNumber(typesOfEntertainment));
    console.log(getRandomNumber(restaurant));
    let howAboutThese = prompt("Do you like these selections?")
    if (howAboutThese == "yes"){
        console.log("Your trip is planned!")
    }else{
        let userDecide = prompt("Would you like to generate new details?")
        if(userDecide == "yes"){
        reRoll();
        }
    }
    return result;
}


//


function displayTripDetails(tripDetails){
            console.log("You will go to " + tripDetails[0]);
            console.log("You will travel there by " + tripDetails[1]);
            console.log("While you are there, you will spend lots of time " + tripDetails[2]);
            console.log("We recommend " + tripDetails[3] + " as a great place to eat.");
}
//


function run(){
    let userInput = prompt("Would you like for us to plan you a vacation?");
        if(userInput == "yes"){
            displayTripDetails(tripDetails);
            let userSatisfied = prompt("Are you satisfied with these choices?");
                if(userSatisfied == "yes"){
                    alert("You are all set for your trip!");
                }else if(userSatisfied == "no"){
                    let secondChance = prompt("Would you like a new random selection")
                        if(secondChance == "yes"){
                            reRoll();
                        }
                        else{
                        chooseTripDetails();       
                        }   
                        
                return result;
                }
        }else{
            chooseTripDetails();
        }
    return result;
    
    }

 //       
        
 function chooseTripDetails(){
    let usersChoices = [];
       
           let usersChoicePlace = prompt("Let us know where you want to go");
           console.log(usersChoicePlace);
           usersChoices.push(usersChoicePlace);
       
           let usersChoiceTranspo = prompt("How would you like to get there?");
           console.log (usersChoiceTranspo);
           usersChoices.push(usersChoiceTranspo);
       
           let usersChoiceEntertainment = prompt("What would you like to do while you are there?");
           console.log (usersChoiceEntertainment);
           usersChoices.push(usersChoiceEntertainment);
      
           let usersChoiceFood = prompt("What restaurant do you want to eat at most while on vacation?");
           console.log (usersChoiceFood);
           usersChoices.push(usersChoiceFood);

       let verify = prompt("You chose " + usersChoices + "Are you happy with this vacation?", "Yes or No");
           if(verify == "yes"){
               console.log ("Here is your itinerary " + (usersChoices));
           }else{
               let newTrip = prompt("Enter new vacation details", "Where? How? Entertainment? Restaurant?");
                   console.log("Here is your updated itinerary " + (newTrip));
           }
      return usersChoices;
      
       } 

run();




//displayTripDetails();


 


