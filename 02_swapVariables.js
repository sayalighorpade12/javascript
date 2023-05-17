

var num1 = 100;
var num2 = 200;

// Output --> num1 = 200, num2 = 100

console.log ("Before swap..", "num1:", num1, "num2:", num2);
var temp = num1;
num1 = num2;
num2 = temp;
console.log("num1:", num1, "num2:", num2 );

var name1 = "Billgates";
var name2 = "Elon Musk";
console.log("before Swap: ", "name1:", name1, "name2:", name2);
var temp = name1;
name1 = name2;
name2 = temp;
console.log("After Swap: ", "name1:", name1, "name2:", name2);