// Josephine Brown
// May 23, 2013
// Conditionals_Industry

//want to apply for a loan to open our business but credit scores makes a big difference on getting a loan or not

var creditScoreLoan = 700
var clientCreditScore = 500
var scoreWithCosigner = 600

if(clientCreditScore > creditScoreLoan){
	//we can get the loan
	console.log("We got the loan and open our business!!")
}else if(clientCreditScore > scoreWithCosigner){
	//we can get the loan but with some help
	console.log("We still get the loan but with help and a partner!!")
}else{
	//we don't get nothing because we don't qualify
	console.log("We go home and figure something else to do!!")
}

//Now we can start our prompts
	
	


