
//Write a program to get table for 5

for (let index = 0; index <= 50; index = index+5) { //index = index+1
    console.log(index);

}
console.log("After Loop");





//Write a program to get 100 to 80 reverse order by decrementing 1

for (let index = 100; index >= 80; index--) { //index = index+1
    console.log(index);

}
console.log("After Loop");




//Write a program to get table for 17
for (let index = 0; index <=170; index = index+17) {
    console.log(index);
    
}
console.log("After Loop");
 

//Write a program to get table for 19 in reverse order

for (let index = 190; index >=19; index = index-19) {
    console.log(index);
    
}
console.log("After Loop");

//Write a program to get table for 17
for (let index = 8; index <= 80; index = index+8) {
    console.log(index);
    
}

// Javascript --> J a v a s c r i p t 
var str = "Javascript";
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    console.log(char);
    
    
}


//Write a program to reverse the string --> Javascript // 9
// Initialization = 9

var str = "Javascript";
var reverseString = "";
for (let index = 9; index >= 0; index--) {
    var charr = str.charAt(index);
    reverseString = reverseString.concat(charr);
   
   
    
}
console.log(reverseString);

var str = "Google Chrome"
var reverseStr = "";
for (let index = 12; index >= 0; index--){
    var char = str.charAt(index);
    reverseStr = reverseStr.concat(char)
   
}
console.log(reverseStr);



function reverseWord(word) {
    var reverseStr = "";
    var wordLength = word.length;
for (let index = wordLength; index >= 0; index--){
    var char = word.charAt(index);
    reverseStr = reverseStr.concat(char)
}
console.log(reverseStr);
}

reverseWord("Javascript");
reverseWord("Google Chrome");
reverseWord("Developer");

// var string = "Hello how are you doing";
// Doing you are how hello



function name(sentence) {
    
    sentenceLength = sentence.length;
    reverseString = "";
    for (let index = sentenceLength; index >=0 ; index--){
        var char = sentence.charAt(index);
         reverseString = reverseString.concat(char);
      
    }
    console.log(reverseString);
}
name("Hello how are you doing");




























