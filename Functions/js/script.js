// Function = Parameters and Arguments

//storage bin for info parameter
//function dogYears(age){//parameters
//var dogYears = age * 7;
//	console.log("Sparky is " + dogYears + " years old.")
//}

//passing info argument
//dogYears(6);//arguments
//dogYears(8);
//

//Functions = Returning Values

var total = calcArea(30, 20);
//assign where return is going to go

function calcArea(w, h){
	var area = w * h;
	return area;//function is spitting the information back
}
console.log(total);