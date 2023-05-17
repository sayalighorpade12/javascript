



function stringHandsOn(){
    var givenString ="   Hey you are doing good, keep it up    ";
    console.log("1. Given a string : ", givenString);

      var result = givenString.length;
      console.log("2. Total Length of the given string is : ", result);

       var result = givenString.trim();
      console.log("3. After remove leading and trailling extra spaces length is : ", result.length );
   
      var givenStringLength = givenString.length;
      var result1 = result.length;
       console.log("4. Total number of removed extra spaces count are : ", givenStringLength-result1);

       var charAtFirstPlace = result.charAt(0);
       var charAtLastPlace = result.charAt(result.length-1);
       console.log("5. First and last character of given string after remove extra spaces : ", charAtFirstPlace, charAtLastPlace);


          
      var splitResult = result.split(" ");
      console.log("6. Total no of words : ", splitResult.length);



      var indexResult = result.indexOf("good");
      console.log("7. Index of word good in given string is : ", indexResult );

      var subStringResult = result.substring(22);
      console.log("8. a) Substring strating from index 22 by uing substring method : ", subStringResult);

      var sliceResult = result.slice(22);
      console.log("   b) Substring strating from index 22 by uing  slice method : ", sliceResult);

      var includeResult = result.includes("up");
      console.log("9. String ends with word up : ", includeResult);

      var value = result.includes("Hey");
      console.log("10 .String strats with word Hey : ", value);
 
      
 
 
}

stringHandsOn();




