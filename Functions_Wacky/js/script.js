// Josephine Brown
// May 30, 2013
// Functions_Wacky

// There is a baby playing with her toys, she is trying to count her toys and seperate them
// Using Anonymous Functions

var totalToys = function(balls, dolls, cars){
	var toys = balls + dolls + cars;
	return toys;
}

var t = totalToys(15, 21, 19)

console.log("There is a total of" + " " + t + " " + "toys.")

var weatherTemp = prompt("Taking a survey on the temperture of the weather, could you please put in the temperture of the weather below")

var whereYouAt = prompt("Now can you please tell me where you are in the world")

