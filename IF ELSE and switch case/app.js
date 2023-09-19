var num=prompt("Enter Number : ");
if(num%3== 0 ){

document.write(num+ "is divisible by 3 <br> ")

}else{

document.write(" Number is not divisible by 3")

}

var num=prompt("Enter Number : ");
 if(num%2== 0 ){
 document.write(num+ "   is even <br> ")
 }else{
 document.write(" Number is odd")

 }

 var age=prompt("Enter your age : ");
  if(age > 18 ){
  document.write("age is enough   <br> ")
  }else{
  document.write(" to young");
  }
var nam=prompt("Enter your Name : ");
if(nam=="sabir"){
document.write("Wll come ",nam);
}else{

}

var num = parseInt(prompt("Enter a number:"));

var remainder = num % 3;

switch (remainder) {
  case 0:
    document.write("Number is divisible by 3");
    break;
  default:
    document.write("Number is not divisible by 3");
    break;
}
var inputChar = prompt("Enter a character:");

var charCode = inputChar.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    document.write("The input is a number.");
} 
else if (charCode >= 65 && charCode <= 90) {
    document.write("The input is an uppercase letter.");
}
else if (charCode >= 97 && charCode <= 122) {
    document.write("The input is a lowercase letter.");
}
else {
    document.write("The input is neither a number, uppercase letter, nor lowercase letter.");
}


var number1 = parseFloat(prompt("Enter the first number:"));
var number2 = parseFloat(prompt("Enter the second number:"));
var operator = prompt("Enter the operator (+, -, *, /, %):");

var result;

switch (operator) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    if (number2 !== 0) {
      result = number1 / number2;
    } else {
      result = "Division by zero is not allowed";
    }
    break;
  case "%":
    result = number1 % number2;
    break;
  default:
    result = "Invalid operator";
    break;
}

document.write('Result: ${result}');

const inputTime = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));

let hours;
let minutes;

if (!isNaN(inputTime) && inputTime >= 0 && inputTime <= 2359) {
  hours = Math.floor(inputTime / 100);
  minutes = inputTime % 100;

  if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
    let period;

    if (hours < 12) {
      period = "AM";
      if (hours === 0) {
        hours = 12;
      }
    } else {
      period = "PM";
      if (hours !== 12) {
        hours -= 12;
      }
    }

    console.log(`The time in 12-hour clock format is: ${hours}:${String(minutes).padStart(2, '0')} ${period}`);
  } else {
    console.log("Invalid input for hours or minutes.");
  }
} else {
  console.log("Invalid input. Please enter a valid 24-hour clock time.");
}

const year = parseInt(prompt("Enter a year (YYYY):"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
 document.write(`${year} is a leap year.`);
} else {
    document.write(`${year} is not a leap year.`);
}
var firstName = "Ali";
if (firstName === "Fahad") {
  document.write("Hello Fahad!");
} else {
  document.write("You are not Fahad");
}

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}


const num1 = parseInt(prompt("Enter the first integer:"));
const num2 = parseInt(prompt("Enter the second integer:"));

if (num1 === num2) {
  console.log("The two integers are equal.");
} else if (num1 > num2) {
  console.log(`The larger integer is: ${num1}`);
} else {
  console.log(`The larger integer is: ${num2}`);
}

const number = parseFloat(prompt("Enter a number:"));

if (number === 0) {
  console.log("The number is zero.");
} else if (number > 0) {
  console.log("The number is positive.");
} else {
  console.log("The number is negative.");
}

const hour = parseInt(prompt("Enter the current hour (24-hour format):"));

if (hour >= 6 && hour <= 9) {
  console.log("Breakfast is served.");
} else if (hour >= 11 && hour <= 13) {
  console.log("Time for lunch.");
} else if (hour >= 17 && hour <= 20) {
  console.log("It's dinner time.");
} else {
  console.log("Sorry, you'll have to wait, or go get a snack.");
}

const value = 42; // Change this to the variable you want to check

if (typeof value === "number") {
  console.log("The variable is of type 'number'.");
} else if (typeof value === "string") {
  console.log("The variable is of type 'string'.");
} else if (typeof value === "boolean") {
  console.log("The variable is of type 'boolean'.");
} else {
  console.log("The variable is of type 'undefined'.");
}

const character = prompt("Enter a single character:").toLowerCase();

if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
  console.log("The character is a vowel.");
} else {
  console.log("The character is not a vowel.");
}
var result = 10 !== 8;
document.write(result);
const age = 16; 

const voteable = age < 18 ? "Too young" : "Old enough";

console.log(voteable);

const monthNumber = parseInt(prompt("Enter the number of a month (1-12):"));

let monthName;

switch (monthNumber) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month number";
    break;
}
var sabir="my self is sabir";
document.write(`my nsme is : ${sabir}` );

document.write(`<br> The name of the month is: ${monthName}`);

