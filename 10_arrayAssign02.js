



const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]

let arrNum = arrayNumbers.length;
console.log(`1. Total elements available in array : ${arrNum}`);

console.log("                  ");

const zerothIndexValue = arrayNumbers[0];
console.log(`2. First Element is : ${zerothIndexValue}`);

const lastIndexValue = arrayNumbers[arrayNumbers.length-1];
console.log(`   Last Element is : ${lastIndexValue}`);

console.log("                  ");

let arrLen = arrayNumbers[arrayNumbers.length-3];
console.log(`3. Third last element in array is : ${arrLen}`);

console.log("                  ");

console.log(`4. ---------------------- Even numbers --------------------------`);

for (const element of arrayNumbers) {
  if (element % 2 == 0) {
    console.log(` Even number is: ${element}`)
  }
}

console.log(`                                `);
console.log(`5. ---------------------- Odd numbers --------------------------`);

for (const element of arrayNumbers) {
  if (element % 2 !== 0) {
    console.log(`Odd number is: ${element}`);
  }
}

console.log(`6. ---------------------- Even Position numbers --------------------------`);

/*var count = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index%2==0) {
    var char = arrayNumbers[index];
    console.log(`Even Position number is: ${arrayNumbers[index]}`);
    count = count +char;
    console.log(count);
  }
  
}*/

var count = 0;
for (const index in arrayNumbers) {
 if (index%2==0) {
  var char = arrayNumbers[index];
    console.log(`Even Position number is: ${arrayNumbers[index]}`);
    count = count +char;
    
 }
}
console.log(`Sum of all even position numbers is: ${count}`);

console.log(`                                `);
console.log(`7. ---------------------- Odd Position numbers --------------------------`);

var count = 0;
for (const index in arrayNumbers) {
     if (index%2 !==0) {
      var char = arrayNumbers[index];
      console.log(`Odd position number is: ${arrayNumbers[index]}`);
      count = count + char;
     }
}
console.log(`Sum of all oddd position numbers is: ${count}`);

var count = 0
for (let index = 0; index < arrayNumbers.length; index++) {
  var char = arrayNumbers[index];
  count = count + char;
  
}

console.log(`8. Sum of all numbers in array is: ${count}`);

console.log(`----------------- Multiple of 5 ----------------`);

for (const element of arrayNumbers) {
  if (element %5 == 0) {
    console.log(`9. multiple of 5 is: ${element}`);
  }
}

var array = arrayNumbers.includes(115);
console.log(`10. Is number 115 is available: ${array}`);

var array = arrayNumbers.includes(23);
console.log(`11. Is number 23 is available: ${array}`);

var array1 = arrayNumbers.splice(3, 0, 55, 66);
console.log(`12. Insert numbers 55 and 66 before index 3 is: ${arrayNumbers}`);

var array2 = arrayNumbers.splice(4, 3);
console.log(`13. Delete 3 elements starting from index 4 is: ${arrayNumbers}`);