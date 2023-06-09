







console.log("Given String : I am very good IT Developer");
var string = "I am very good IT Developer";
var count = 0;
for (let index = 0; index < string.length; index++) {
   var char = string.charAt(index);

   if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' ||
   char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
    
    count++;
   }
    
}
console.log(`Total Number of Vowels : ${count}`);

console.log("                      ");



var sumOfCube = function(){
    var sum = 0;
    for (let index = 1; index <=5; index++){
       sum = sum + index*index*index;
       
    }
    console.log(`Sum of cube of numbers from 1 to 5: ${sum}`);
}
sumOfCube(5);



console.log("                      ");

function oddPositionedChars(word) {
    var str = "";
    var wordLength = word.length;
    for (let index = 0; index <= wordLength; index++) {
         var char = word.charAt(index);
        if (index%2!==0 && char != ' ') {
            str = str+char;
            
           
        }
    }
    console.log(`${str}`);


}
console.log(`Given String : Hard work always pays back`);
oddPositionedChars("Hard work always pays back");

console.log("                      ");

console.log(`Given String : Soon I Will be Angular IT Champ`);
oddPositionedChars("Soon I Will be Angular IT Champ");










