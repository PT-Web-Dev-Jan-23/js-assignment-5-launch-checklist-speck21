// Write your JavaScript code here!




window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let destination;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       //console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       destination = pickPlanet(listedPlanets);
       addDestinationInfo(document, destination.name, destination.diameter, destination.star, destination.distance, destination.moons, destination.image);


   })
   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";
   let form = this.document.querySelector("form");
   form.addEventListener("submit", function(event){
    //use class name chained with tagName, remove class x
    /*let classFormField = document.getElementsByTagName("input");
    for(let i=0; i<classFormField.length;i++){
        if(classFormField[i].value == ""){
            alert('All fields required');
            event.preventDefault();
            return;
        }
    }*/
    event.preventDefault();
    
    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;


    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
   });
   
});