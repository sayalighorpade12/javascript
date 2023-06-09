



console.log("-----------------------Greatest Number--------------------");
console.log("                                                                                                  ");

var greaterNumber = function (num1, num2){
   
  var result = num1>=num2 ? `  ${num1} is greater number ` : `  ${num2} is greater number`;
  console.log(`${result}`);
}
console.log("Given numbers are: 10, -10");
greaterNumber(10, -10);
console.log("Given numbers are: 800, -899");
greaterNumber(800, -899);

console.log("                                                                                                  ");
console.log("-----------------------EVEN or ODD------------------------");
console.log("                                                                                                  ");

var isEvenOrOdd = function(num1){
    var result = num1%2 == 0 ? true : false;
    return result;
}
var result = isEvenOrOdd(29);
var res = (result == true) ? "29 is even number" : "29 is odd number";
console.log(`${res}`);

var result = isEvenOrOdd(44);
var res = (result == true) ? "44 is even number" : "44 is odd number";
console.log(`${res}`);

var result = isEvenOrOdd(0);
var res = (result == true) ? "0 is even number" : "0 is odd number";
console.log(`${res}`);

var result = isEvenOrOdd(101);
var res = (result == true) ? "101 is even number" : "101 is odd number";
console.log(`${res}`);

console.log("                                                                                                  ");
console.log("------------------Word Length is EVEN or ODD----------------");
console.log("                                                                                                  ");

var wordLength = function(word){
    var len = word.length;
    var result = len %2 == 0 ? "EVEN" : "ODD";
    return result;
}

console.log(`Given word is "JavaScript"`);
var returnValue = wordLength("JavaScript");
console.log("JavaScript is : ", returnValue);

console.log(`Given word is "Developer"`);
var returnValue = wordLength("Developer");
console.log("Developer is : ", returnValue);

console.log(`Given word is "Google"`);
var returnValue = wordLength("Google");
console.log("Google is : ", returnValue);


  
















