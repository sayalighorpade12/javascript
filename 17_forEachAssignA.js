



const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`1. Log the array element with it's index `);
arrayNumbers.forEach( (currentValue, index) => {
    console.log(`${index} ${currentValue}`);

});

console.log(`2. Find the positive number`);
arrayNumbers.forEach( (currentValue) => {
    if (currentValue>=0) {
        console.log(currentValue);
    }
});

console.log(`3. find the negative numbers, add into new array `);
const arrayTransformed = [];
arrayNumbers.forEach( (currentValue) => {
    if (currentValue < 0) {
       arrayTransformed.push(currentValue);
    }
});
console.log(arrayTransformed);

console.log(`4. Find the even numbers `);
arrayNumbers.forEach( (currentValue) => {
    if (currentValue%2 == 0) {
        console.log(currentValue);
    }
});

console.log(`5. Find sum of all elements from arrayNumbers`);
let sum = 0;
arrayNumbers.forEach( (currentValue) => {
    sum = sum + currentValue;
});
console.log(sum);

console.log(`6. Log the only even indexed array value`);
arrayNumbers.forEach( (currentValue, index) => {
    if (index%2==0) {
        console.log(currentValue);
    }
});