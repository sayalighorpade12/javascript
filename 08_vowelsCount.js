







var string = "Javascript Language Of Internet";
// a e i o u == A E I O U
var count = 0;
for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index);

    if (char == 'a' || char== 'e' || char=='i' || char=='o'  || char=='u' || 
        char == 'A' || char== 'E' || char=='I' || char=='O'  || char=='U') {
        console.log(char);
        count++;
    }
}
console.log(`count total vowels: ${count}`);











