console.log("-------------------------- Swap Two Variables -----------------------------------------------");

var sweety = "Sweety";
var cutie = "Cutie";

console.log("Before Swap:");
console.log("sweety:", sweety);
console.log("cutie:", cutie);

var temp = sweety;
sweety = cutie;
cutie = temp;
console.log("After Swap:");
console.log("sweety:", sweety);
console.log("cutie:", cutie);

console.log("-------------------------- Swap Three Variables -----------------------------------------------");

var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log("Before Swap:  ", "num1:", num1, "num2:", num2, "num3:", num3);

var temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;

console.log("After Swap:  ", "num1:", num1, "num2:", num2, "num3:", num3);
