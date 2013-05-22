// Josephine Brown
//Conditionals_Wacky
//May 23, 2013

//decideing where to eat dinner it will depends on what time we get home.

var arriveHome = 6;
var dinner; 

if(arriveHome <= 7){
	//if we come home before 7 then we can eat at Red Lobster
	console.log("We get to eat at Red Lobsters!!");
}else{
	//if not we are going to Mcdonalds
    console.log("We are eating Mcdonalds for dinner.");
}

//inputting the ternary operator

dinner = (arriveHome <= 7) ? "We get to eat at Red Lobsters!!" : "We are eating Mcdonalds for dinner."
console.log(dinner);

//going to start the prompt that will be similair to the top

var dinnerChoice = prompt("We are taking a survey, where would you perfer to eat dinner at, Red Lobster or Outback Steak House? Pleas enter your answer below.");

var nameFirst = prompt("Now that we know where you want to eat dinner at, please enter your first dinner.");
console.log(nameFirst +" "+ "would like to eat dinner at"+" "+ dinnerChoice);		