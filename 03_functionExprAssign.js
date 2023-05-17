



console.log(`1. Function Expression to get square of the number Ex -> 5, 6, 25, 100`);

var square =  function(num) {
    var result = num*num;
    return `   Square of 5 is : ${result}`;
}
var result = square(5);
console.log(result);


var square =  function(num) {
    var result = num*num;
    return `   Square of 6 is : ${result}`;
}
var result = square(6);
console.log(result);


var square =  function(num) {
    var result = num*num;
    return `   Square of 25 is : ${result}`;
}
var result = square(25);
console.log(result);


var square =  function(num) {
    var result = num*num;
    return `   Square of 100 is : ${result}`;
}
var result = square(100);
console.log(result);

console.log("                                                              ");

console.log(`2. Check and log type of function (Hint -> typeof variableName)`);
var typeOfSquare = typeof square;
console.log("   Type of Function is : ", typeOfSquare);

console.log("                                                              ");


console.log("3. Write a FE to get the area of rectangle plot [length = 499 and width = 917]");
var areaOfPlot = function (length, width) {
    var result = length*width;
    return `   Area of Rectangle is : ${result}`;
    
}
var result = areaOfPlot(499, 917);
console.log(result);

console.log("                                                              ");

console.log("4. FE with two args and should swap the passed values and log on console before swap and after swap values inside function itself.");

var swapValues = function(valueOne,valueTwo) {
   
    console.log("   Before Swap : ", valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log("   After Swap: ", valueOne, valueTwo);
    
}
var result  = swapValues("Virat", "Anushka");
var result = swapValues(1000, 2000);

console.log("                                                              ");

console.log(`5. Write FE which can perform the below steps for the given string "JS the most popular language"`);


stringValue = function() {
    var string = "JS the most popular language of internet";

    var stringLength = string.length;
    console.log("   A. Total number of string available in given string : ", stringLength);

    var charAtSixIndex = string.charAt(6);
    console.log("   B. Char at index 6 is : ", charAtSixIndex );

    var charAtElevenIndex = string.charAt(11);
    console.log("   C. Char at index 11 is : ", charAtElevenIndex );

   var charAtLastIndex = string.charAt(string.length-1);
   console.log("   D. Last character using length property : ", charAtLastIndex);

   var charAtFirstIndex = string.charAt(0);
    console.log("   E. First character from the given string : ", charAtFirstIndex );

    var splitResult = string.split(" ");
    console.log("   F. Total number of words of the given string : ", splitResult.length);

    var squareResult = splitResult.length*splitResult.length;
    console.log("      Square of the total numbers of the given string : ",squareResult);


   

}
    var result = stringValue("JS the most popular language of internet");
