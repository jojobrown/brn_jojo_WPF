//Conditional Logic - else if

var kidHeight = 46;
var minHeight = 48;
var wParentHeight = 45;//the height of the kid with the parent present

//if the child is old enough, print in the console "you can ride!"
//if kid is over 48 inches in height
if(kidHeight > minHeight){
	//you can ride!
	console.log("You can ride the coaster!")
}else if(kidHeight > wParentHeight ){
	//you can ride with a parentpresent
	console.log("You can ride, but only with a parent present");

}else{
	//sorry you have a growing to do
	console.log("Sorry kid, you've got some growing to do first!");
}
