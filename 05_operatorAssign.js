

console.log("--------------------------1-------------------------------");
console.log("                                                                                                  ");

  function squareOfWordLength(str){
    var len = str.length;
    console.log("Sring Length is : ",len);
     var squareResult = len*len;
     console.log("String Length square is : ", squareResult);
  }
  squareOfWordLength("JavaScript");
  squareOfWordLength("Google Chrome");
  squareOfWordLength("Developer Smart");

  console.log("                                                                                                  ");

console.log("--------------------------2-------------------------------");
console.log("                                                                                                  ");


function wordName(){
   var stringName = "I am Angular Developer";
   console.log("given sring is : ",stringName);

   var stringNameLength = stringName.length;
   console.log("Lengh of given string is : ", stringNameLength);

   var splitStringName = stringName.split(" ")
   console.log("Number of words in given string is : ", splitStringName.length);

   var divideResult = stringName.length / splitStringName.length;
   console.log("String Length / Total number of Words : ", divideResult);
  
   var multiplyResult = stringName.length * splitStringName.length;
   console.log("String Length / Total number of Words : ", multiplyResult);
  








}






wordName();
