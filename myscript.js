// JavaScript Test File

// console.log("Hello From My Script");
// console.log("This is my first go at this!");

// var name = prompt("What is your name");

//var counter = 10;

// while (counter) {
// 	console.log("Hello World!");
// 	counter = counter - 1;
// }

// while(prompt("What is your name")) {
// 	console.log("Got Your Name")
// }

// for (var counter = 10;counter;counter=counter-1) {
// 	console.log("Hello World");
// 	console.log("How are you?");
// };

// var friends = ["John", "Aral", "Laura", "Sophie", "Andy"];

// console.log(friends);
// console.log(friends.length);

// var friendNumber = 1;
// console.log(friends[friendNumber]);

// //i usually means counter.

// for(var i=0; i < friends.length; i+=1){
// 	console.log(friends[i]);
// }

// var me = {
// 	first_name: "Natalie",
// 	last_name: "Kane",
// 	"Employee Number": 1
// }

// me.first_name = "Nat"; //redefines value of first_name

// console.log(me.first_name);
// console.log(me.last_name);
// console.log(me["Employee Number"]) //[] is a subscript
// console.log(me);
// //'.' is a shorthand for the subscript []

// var key = "first_name"

// console.log(me[key])
// //if in doubt always go for subscript operator, can use 
// //shorthand when convenient name.


// var sayHello = function () {
// 	console.log("Hello World!")
// 	var message = "Hello";
// 	message = message + "World!";
// }

// var debug = function (message) {
// 	console.log("Debug", message);
// }

// var doubleNumber = function (num) {
// 	return num * 3;
// }

// debug(doubleNumber(456))

// sayHello();

// var x = 1;
// debug("x has been set");

// sayHello();

// x += 10;
// var y =100;

// debug("x has been increased, y has been set");
// sayHello();

var color = "red";

var myDiv = document.getElementById('myDiv');
myDiv.style.background= "black";
myDiv.style.color = "#ffffff";

//cannot start a variable name with a number

// reserved words in JavaScript, look up! Text editor does 
// highlight them though.

// var myVar;

/*console.log(typeof myVar); 
// how to check if undefined
console.log(typeof myVar === "undefined"); //the best <--
// how to test a var is undefined, should equal true if undef.
console.log(myVar === undefined)
//careful you don't accidentally redefine undefined
*/


//Scope

// var world = "World!"; //global variable

// function sayHello () {
// 	var hello = "Hello ";

// 	function inner () {
// 		var extra = " There is more!";
// 		console.log(hello + world + extra);
// 	}

// 	inner();
// }

// sayHello();

// Shadowing

// var myColor = "blue";
// console.log("myColor before myFunc()", myColor);

// function myFunc() {
// 	var myColor = "yellow"; //myColor = yellow only available in func
// 	myNumber = 42;
// 	console.log("myColor inside myFunc()", myColor);
// }

// myFunc();

// console.log("myColor after myFunc()", myColor);
// console.log(myNumber);

//myColor inside myFunc() is a local variable, and only
//accesible within it.

//make sure var is in front of local variable, as 
//removing 'var' refers to global variable and therefore
//changes it.
//JS will create a variable by default if defined locally


//Hoisting

function doSomething (doit) {

	//declare all variables at the top!
	var color = "blue", 
		number, 
		name = "Natalie";

	//multipart variables, commas not semicolons!

	if(doit) {
		var color = "red";
		//var number = 10; //Hoisting
		//Assigns at that point, when should be above^
		//should be this:
		number = 10;
		console.log("Color in if(){}", color)
	}
	console.log("Color after if(){}", color, number, name)
}

//if block not creating a new function, so all the same
//scope and all the same variable

doSomething(false);
doSomething(true);






















