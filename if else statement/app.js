//calculator


var firstNumber = prompt("Enter Num a");
var secondNumber = prompt("Enter Num b");

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
var ask = prompt("What you want to do \n1) add or (+) \nsub\nmul\ndiv\nmod");

if (ask === "add" || ask === "+") {
    var sum = firstNumber + secondNumber;
    console.log("Your sum ", sum);
} else if (ask === "sub" || ask === "-") {
    var sum = firstNumber - secondNumber;
    console.log("Your sub ", sum);
} else if (ask === "mul" || ask === "*") {
    var sum = firstNumber * secondNumber;
    console.log("Your mul ", sum);
} else if (ask === "div" || ask === "/") {
    var sum = firstNumber / secondNumber;
    console.log("Your div ", sum);
} else if (ask === "mod" || ask === "%") {
    var sum = firstNumber % secondNumber;
    console.log("Your mod ", sum);
} else {
    console.log("jakay kuch aur kar ");
}
