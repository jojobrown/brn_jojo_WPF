// Josephine Brown
// May 30, 2013
// Functions_Wacky

// There is a baby playing with her toys, she is trying to count her toys and seperate them
// Using Anonymous Functions

var totalToys = function(balls, dolls, cars){
	var toys = balls + dolls + cars;
	return toys;
}

var c = totalToys(15, 21, 19)

console.log(c)