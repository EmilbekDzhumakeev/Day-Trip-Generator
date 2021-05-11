"use strict";  
  
    let myTrip=[];
    let destinations = ["Tampa", "Orlando", "Brandon", "St.Petersburg", "Miami"];
    let restaurant = ["IHOP", "Chili's", "Applebee's", "Cheesecake Factory", "Outback"];
    let transport = ["Ferry", "Car", "Train", "Bus","Horse"]; 
    let entertainment = ["Concert", "Movies", "Stand up comedy", "Theater", "Museum"];
 
    myTrip = createTrip(destinations, restaurant , transport, entertainment);

   let proceed = prompt("Would you like to continue with this trip? Y/N "+   printTrip(myTrip)); 
    printTrip(myTrip);

   if (proceed !== "Y") {
   let userInput= prompt("What would you like to change? Choose: 1,2,3 or 4");
switch (userInput) {
    case "1":
        myTrip.push[0]=random(destinations);
    break; 
    case "2":
        myTrip.push[1]=random(restaurant);
    break;  
    case "3":
        myTrip.push[2]=random(transport)
    break; 
    case "4":
        myTrip.push[3]=random(entertainment);
    break;
    default: 
    console.log("Wrong input entry! Try again !");
    break; 
    proceed = prompt("Would you like to continue with this trip? Y/N ")  
    printTrip(myTrip);
} }  else  printTrip(myTrip);

//////////////////////////////
function random(item){
    let i = Math.floor(Math.random() * 6); 
    return item[i];
  }  
  /////////////////////////// 
  function createTrip(dest, res, trans, enter){
    myTrip.push(random(dest)); 
    myTrip.push(random(res));
    myTrip.push(random(trans));
    myTrip.push(random(enter)); 
    return myTrip;
} 
/////////////////////////// 
function printTrip(trip){
    console.log("Here is your random generated day trip");
    console.log("1 Destination: "+trip[0]);
    console.log("2 Restaurant: "+trip[1]); 
    console.log("3 Transport: "+trip[2]);
    console.log("4 Entertainment: "+trip[3]); 
}