// Josephine Brown
//May 16, 2012
//Expression


//Baby bags of balls she has 8 bags of ball but they all have different amounts of balls in them. Find out how many ball altogether and devide them up evenly amoung the bags. If there will a remainder.  So we want to find out the remainder

var ballBags = [10, 8, 6, 12, 9, 7, 4, 14]

var ballsLeft = (ballBags[0] + ballBags[1] + ballBags[2] + ballBags[3] + ballBags[4] + ballBags[5] +ballBags[6] + ballBags[7])%8

var firstName = prompt("Just want get your name before we start. Please enter your first name.")

var lastName = prompt("Please fill in your last name?")

alert("Your name is" + " " + firstName + " " + lastName)

console.log("Total of balls left that won't go evenly in the bags are" + " " + ballsLeft)

//but now we need to devide it amoungest the bags
