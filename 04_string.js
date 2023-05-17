

var greet = "Good Morning";
var greetLength = greet.length;
console.log("Total number of character in given string is:", greetLength);

var indexOfM = greet.indexOf("M");
console.log("Index of M is:", indexOfM);

var indexOfO = greet.indexOf("o");
console.log("Index of o is:", indexOfO);

var replaceValue = greet.replace("Morning", "Afternoon");
console.log("After replace:", replaceValue);

var includeResult = greet.includes("ing");
console.log("Is ing string available inside : ", includeResult);

var searchResult = greet.search("Mor");
console.log("Search Result : ", searchResult);

var sliceResult = greet.slice(4, 6);
console.log("Slice result is : ", sliceResult);

var subStringResult = greet.substring(4, 6);
console.log("subString result is : ", subStringResult );

var greet = "Good Morning mate, How are you";

var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total no of words : ", splitResult.length);

var splitResult = greet.split(",");
console.log(splitResult);
console.log("Total no of words : ", splitResult.length);

var splitResult = greet.split("");
console.log(splitResult);
console.log("Total no of words : ", splitResult.length);














console.log("----------------------------------------------------------------------------------------")

var fullName = "Sayali Ghorpade";
var result = fullName.length;
console.log("Total number of character in given string is:", result);

 var firstName = "Sayali";
var result = firstName.length;
console.log("Total characters available in firstName:", result);

var charAtZeroIndex = firstName.charAt(0);
console.log("char at 0 index:", charAtZeroIndex);

var charAtLastIndex = firstName.charAt(firstName.length-1);
console.log("Char at last index:", charAtLastIndex);

var firstName = "     Shraviya     ";

var firstNameLength = firstName.length;
console.log("Before Trim firstName is:", firstNameLength);

var trimmedFirstName = firstName.trim();
var lengthAfterTrim = trimmedFirstName.length;
console.log("After Trim firstName is:", trimmedFirstName, trimmedFirstName.length)
console.log("Trimmed Total spaces: ", firstNameLength-lengthAfterTrim);





var lastName = "     Ghorpade             ";
 var trimmedLastName = lastName.trimStart();
 var trimLastName = lastName.trimEnd();
 console.log(trimmedLastName.length-trimLastName.length);





var firstName = "Shraviya";
var lastName = "Ghorpade";
var concatString = firstName.concat(lastName);
console.log(concatString);





