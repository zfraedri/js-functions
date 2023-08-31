// Functions Practice
//For the first standard function, write a function that accepts two numbers as parameters, adds them together, then returns the result of that addition
//name this function addTwoNums
//TODO

//For box 2, let's accept two string parameters and return the result of them concatenated into a single string with a space between the two words
//name this function concatenateStrings
//TODO

//for the first function expression, let's write code that displays returns one result if the number entered by the user is less than 100 ("number is less than 100"), and another message if the number is greater than or equal to 100 ("that is 100 or greater")
//name this variable compareToHundred
//TODO

//for the second function expression, let's write code that tells the user whether or not their answer to a trivia question is correct. This will accept a parameter for a letter answer, and can use either a switch statement or a series of if/else/if statements for the logic
//name this variable quizAnswer
//TODO
		//if they answered a return "Nope. GIT215 is the Introductory HTML/CSS course."

	
		//if they answered b return "Nope. GIT337 is the Intermediate HTML/CSS course."

	
		//if they answered c return "Nope. GIT414 is the Responsive HTML/CSS course."

	
		//if they answered d return "You got it! GIT417 is the Introductory JavaScript course."


//For box five, re-write the first standard function in the arrow function syntax
//name the variable addTwoNumsArrow
//TODO

//For box five, re-write the second standard function in the arrow function syntax
//name the variable concatenateStringsArrow
//TODO







//CODE BELOW IS COMPLETE - DO NOT EDIT

//helper function for box 1, this accepts the user input and parses it into numbers and is called on the click of the submit button in the box
function helpAddTwoNums(e){
	//prevent default form submission
	e.preventDefault();
	
	//get the two numbers from the form and change them from strings into numbers
	let num1 = parseInt(document.getElementById("add1").value);
	let num2 = parseInt(document.getElementById("add2").value);
	
	//get the paragraph to use for output/displaying the result
	let output = document.querySelector("#section2 .output");
	
	//call the function you wrote to do the math and store the result in a variable for displaying to the page
	let result = addTwoNums(num1, num2);
	
	//display that math to the user
	output.innerHTML = num1 + " + " + num2 + " = " + result;
}

//helper function for box 2 - grabs the strings and calls the concatenateStrings method then outputs the result to the page
function helpConcatenateStrings(e){
	//prevent default form submission
	e.preventDefault();
	
	//get the two strings from the form
	let str1 = document.getElementById("str1").value;
	let str2 = document.getElementById("str2").value;
	
	//get the paragraph to use for output/displaying the result
	let output = document.querySelector("#section3 .output");
	
	//call the function you wrote to do the math and store the result in a variable for displaying to the page
	let result = concatenateStrings(str1, str2);
	
	//display that math to the user
	output.innerHTML = str1 + " + " + str2 + " = " + result;
}

//helper function for function expression 1, this accepts the user input and parses it into a number then calls the function expression you wrote to display the result to the screen
function helpCompareToHundred(e){
	//prevent default form submission
	e.preventDefault();
	
	//get the two numbers from the form and change them from strings into numbers
	let number = parseInt(document.getElementById("add3").value);
	
	//get the paragraph to use for output/displaying the result
	let output = document.querySelector("#section5 .output");
	
	//call the function you wrote to do the comparison and store the result in a variable for displaying to the page
	let result = compareToHundred(number);
	
	//display that math to the user
	output.innerHTML = result;
}

//helper function for function expression 2, this gets the user input then calls the function expression you wrote to display the result to the screen
function helpQuizAnswer(e){
	//prevent default form submission
	e.preventDefault();
	
	//get the user choice from select
	let answer = document.getElementById("answer").value;
	
	//get the paragraph to use for output/displaying the result
	let output = document.querySelector("#section6 .output");
	
	//call the function you wrote to check the answer and store the result in a variable for displaying to the page
	let result = quizAnswer(answer);
	
	//display that math to the user
	output.innerHTML = result;
}

//helper function for box 5, this accepts the user input and parses it into numbers and is called on the click of the submit button in the box
function helpAddTwoNumsArrow(e){
	//prevent default form submission
	e.preventDefault();
	
	//get the two numbers from the form and change them from strings into numbers
	let num1 = parseInt(document.getElementById("add5").value);
	let num2 = parseInt(document.getElementById("add6").value);
	
	//get the paragraph to use for output/displaying the result
	let output = document.querySelector("#section8 .output");
	
	//call the function you wrote to do the math and store the result in a variable for displaying to the page
	let result = addTwoNumsArrow(num1, num2);
	
	//display that math to the user
	output.innerHTML = num1 + " + " + num2 + " = " + result;
}

//helper function for box 9 - grabs the strings and calls the concatenateStrings method then outputs the result to the page
function helpConcatenateStringsArrow(e){
	//prevent default form submission
	e.preventDefault();
	
	//get the two strings from the form
	let str1 = document.getElementById("str5").value;
	let str2 = document.getElementById("str6").value;
	
	//get the paragraph to use for output/displaying the result
	let output = document.querySelector("#section9 .output");
	
	//call the function you wrote to do the math and store the result in a variable for displaying to the page
	let result = concatenateStringsArrow(str1, str2);
	
	//display that math to the user
	output.innerHTML = str1 + " + " + str2 + " = " + result;
}



// these are the event handlers that tell the code what to do when a button is clicked
document.getElementById("mySubmit1").addEventListener("click", helpAddTwoNums);
document.getElementById("mySubmit2").addEventListener("click", helpConcatenateStrings);
document.getElementById("mySubmit3").addEventListener("click", helpCompareToHundred);
document.getElementById("mySubmit4").addEventListener("click", helpQuizAnswer);
document.getElementById("mySubmit5").addEventListener("click", helpAddTwoNumsArrow);
document.getElementById("mySubmit6").addEventListener("click", helpConcatenateStringsArrow);