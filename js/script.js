// alert("connected");

let petName = prompt("What would you like to name your pet?");
let petHappiness = 0;
let petEnergy = 0;
let actions = ["feed", "pet", "walk"];

for (let i = 0; i < 6; i++) {
    let actionTaken = prompt("Would you like to feed, pet , or walk " + petName + "?")
    if (actionTaken === actions[0]) {
        petEnergy += 2;
    } else if (actionTaken === actions[1]) {
        petHappiness += 1;
    } else if (actionTaken === actions[2]) {
        if (petEnergy === 0) {
            alert("Not enough energy to enjoy a walk.");
        } else {
            petHappiness += 2;
            petEnergy -= 1;        
        }
        
    }   /* MY ATTEMPT TO SOLVE FOR A USER NOT ENTERING ONE OF THE THREE ACTION ITEMS
    
        else if (actionTaken != actions[0,1,2]) {
            alert("Please only choose feed, pet or walk for " + petName +"!");
        i-- ;
        } */
};
console.log(petName + " has " + petHappiness + " happiness and " + petEnergy + " energy.");
