// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById("missionTarget").innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src=${imageUrl}>
   `
}

function validateInput(testInput) {
    if(testInput === ""){
        return "Empty";
    }else if(isNaN(Number(testInput))){
        return "NaN";
    }else{
        return "Number";
    }
   
}

function formSubmission(document, fautlyItems, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
   
   
    if(validateInput(pilot)==="Empty"||validateInput(copilot)==="Empty"||validateInput(fuelLevel)==="Empty"||validateInput(cargoLevel)==="Empty"){
        alert('All Fields Required!');
   }else if(validateInput(pilot)==="Number"||validateInput(copilot)==="Number"||validateInput(fuelLevel)==="NaN"||validateInput(cargoLevel)==="Nan"){
    alert("Check fields for invalid input.")
   }else{
    fautlyItems.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
    copilotStatus.innerHTML = `Copilot ${copilot} Ready`;
    if(fuelLevel<10000 && cargoLevel<10000){
        fuelStatus.innerHTML = `Fuel level too low for launch!`;
        cargoStatus.innerHTML = `Cargo mass low enough for launch!`;
        launchStatus.innerHTML = `Shuttle not ready for launch!`;
        launchStatus.style.color = "red";
    }else if(fuelLevel>10000 && cargoLevel>10000){
        cargoStatus.innerHTML = `Cargo mass too high for launch!`;
        fuelStatus.innerHTML = `Fuel level high enough for launch!`;
        launchStatus.innerHTML = `Shuttle not ready for launch!`;
        launchStatus.style.color = "red";
    }else if(fuelLevel<10000 && cargoLevel>10000){
        cargoStatus.innerHTML = `Cargo mass too high for launch!`;
        fuelStatus.innerHTML = `Fuel level too low for launch!`;
        launchStatus.innerHTML = `Shuttle not ready for launch!`;
        launchStatus.style.color = "red";
    }else{
        cargoStatus.innerHTML = `Cargo mass low enough for launch!`;
        fuelStatus.innerHTML = `Fuel level high enough for launch!`;
        launchStatus.innerHTML = `Shuttle ready for launch!`;
        launchStatus.style.color = "green";

    }

   }


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json();
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let selected = Math.round(Math.random()*5);
    return planets[selected];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
