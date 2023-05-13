console.log("-------------------------------Assignment1---------------------------------------");

console.log("                                                                                 ");

function stringBasic() {
  var companyName = "Tata Consultancy Services";
  console.log("My Dream Company Name is : ", companyName);

  console.log("                -----------------------------------------");

  var hobby1 = "Travelling ";
  var hobby2 = "Reading ";
  var hobby3 = "Learning";
  console.log("My Hobbies are : ", hobby1, hobby2, hobby3);

  var concatString = hobby1.concat(hobby2).concat(hobby3);
  console.log("Total Number of Characters are : ", concatString.length);
}
stringBasic();

console.log("                                                                                 ");
console.log("-------------------------------Assignment2---------------------------------------");
console.log("                                                                                 ");




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

       var givenString1 ="Hey you are doing good, keep it up";

       var charAtFirstPlace = givenString1.charAt(0);
       var charAtLastPlace = givenString1.charAt(givenString1.length-1);
       console.log("5. First and last character of given string after remove extra spaces : ",charAtFirstPlace, charAtLastPlace);

      
}

stringHandsOn();




