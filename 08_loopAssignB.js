




function countCharA(word) {
 
    var count = 0;
    for (let index = 0; index < word.length; index++) {
        var char = word.charAt(index);
        if (char ==  'a' || char == 'A') {
            
           
            count++;
        }
       
        
    }
    console.log(`Total Number of Characters ['a' or 'A'] in given string is: ${count}`);
}

console.log(`Given String : I AM Learning JavaScript, The Language of internet`);
countCharA("I AM Learning JavaScript, The Language of internet");

console.log("                  ");

console.log(`Given String : My favourite movie is LAggAn`);
countCharA(" My favourite movie is LAggAn")





