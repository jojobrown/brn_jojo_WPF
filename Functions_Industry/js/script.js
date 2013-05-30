// Josephine Brown	
// May 30,2012
// Functions_Industry

//client will take a deal depending on what is on the table as far how many spots they can get for certain amount

function clientAccepting(){
	var sixtySpots = 300
	var clientBudget = 450 
	var clientAccepts = clientBudget > sixtySpots
	console.log(clientAccepts)	
}
clientAccepting();
clientAccepting();
clientAccepting();

var countingBugs = prompt("There was 1 ladybug, 2 ants, 3 catipliers and 4 butterflies. Can you please tell me how many flying bugs we have and how many crawling ones we have? You can apply in the box below. Please labe which ones are the flying ones and which one is the crawling ones.")

var bugsCounting = prompt("The first screen mentioned 10 bugs, do you remember the bugs and how much of each I had. If you do please list how much and which bugs they were.")

alert("You fisrt mentioned that we had" + " " + countingBugs + "." + "Then you remembered we had" + " " + bugsCounting +"." + "Thank you for your input and time.")

	

  
