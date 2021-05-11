"use strict";  
  

    let destinations = ["Tampa", "Orlando", "Brandon", "St.Petersburg", "Miami"];
    let restaurant = ["IHOP", "Chili's", "Applebee's", "Cheesecake Factory", "Outback"];
    let transport = ["Ferry", "Car", "Train", "Bus","Horse"]; 
    let entertainment = ["Concert", "Movies", "Stand up comedy", "Theater", "Museum"];
 
    function random(item){
      let i = Math.floor(Math.random() * 6); 
      return item[i];
    } 

   console.log("Your trip: "+random(destinations)+" "+random(restaurant)+" "+random(transport) +" "+random(entertainment));