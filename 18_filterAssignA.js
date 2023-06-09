
console.log(`Given array is: [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19]`);

console.log(`--------------------------------------------------------------------------------`);

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log(`1. Find out all the numbers which are greater than the 50`);
const array = arrayNumbers.filter( (number) => {
    return number>50;
});
console.log(array);

console.log(`--------------------------------------------------------------------------------`);

console.log(`2. Find out all the even number `);
const evenNum = arrayNumbers.filter(  (number) => {
   return number%2==0;
});
console.log(evenNum);

console.log(`--------------------------------------------------------------------------------`);

console.log(`3. Find out the odd numbers`);
const oddNum = arrayNumbers.filter( (number) => {
    return number%2 !== 0;
});
console.log(oddNum);

console.log(`--------------------------------------------------------------------------------`);

console.log(`4. Find out all the numbers which are multiple of 5`);
const multipleOfFive = arrayNumbers.filter( (number) => {
    return number%5==0;
});
console.log(multipleOfFive);

console.log(`--------------------------------------------------------------------------------`);

console.log(`5. find out all numbers which are between 20 and 50`);
const num = arrayNumbers.filter( (number) => {
    return number>20 && number<50;
});
console.log(num);