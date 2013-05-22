// Josephine Brown
//Conditionals_Wacky
//May 23, 2013

//decideing where to eat dinner it will depends on what time we get home.

var arriveHome = 9;
var dinner; 

if(arriveHome <= 7){
	//if we come home before 7 then we can eat at Red Lobster
	console.log("We get to eat at Red Lobsters!!");
}else{
	//if not we are going to Mcdonalds
    console.log("We eat Mcdonalds for dinner.");
}

dinner = (arriveHome <= 7) ? "We get to eat at Red Lobsters!!" : "We eat Mcdonalds for dinner."
console.log(dinner)		