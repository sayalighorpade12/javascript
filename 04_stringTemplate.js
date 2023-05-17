

var greet = "Good Morning mate, How are you";
var splitResult = greet.split(" ");
console.log(splitResult);
//console.log( "After split words are : ", splitResult, "Total no of words : ", splitResult.length);
console.log(`After split words are: ${splitResult} Total no of words: ${splitResult.length}`);

console.log(`Given string is:${greet}`);

var myName = "Elon Musk";
var result = myName.startsWith("E");
console.log(`Is ${myName} starts with character "E": ${result}`);

var result = myName.endsWith("b")
console.log(`Is ${myName} ends with character "b" : ${result}`);



var result = myName.startsWith("elon")
console.log(`Is ${myName} strats with character "elon" : ${result}`);

var result = myName.endsWith("Musk")
console.log(`Is ${myName} ends with character "Musk" : ${result}`);


