

console.log(`1. Arrow function with no arguments and no return value`);

console.log(`                         `);

let display = () => {
    console.log(`"Good Morning, Today is Monday"`);
}
display();

console.log(`--------------------------------------------------------------------------------------------------`);

console.log(`2. Arrow function with arguments and no return value`);

console.log(`                         `);

let multiplication = (num1, num2, num3 = 1) => {
    let result = num1 * num2 * num3;
    console.log(`   Multiplication is:  ${result}`);
}
console.log(`a. Passed value are: 5, 5, 2`);
result = multiplication(5, 5, 2);

console.log(`b. Passed value are: 10, 4`);
result = multiplication(10, 4);

console.log(`--------------------------------------------------------------------------------------------------`);

console.log(`3. Arrow function with arguments and return value`);
console.log(`                           `);

let addition = (num1, num2, num3, num4, num5) => {
    var res = num1 + num2 + num3 + num4 + num5;
    return res;
}
 
console.log(`a. Passed value are: 100, 100, 200, 349, 756`);
var res = addition(100, 100, 200, 349, 756);
console.log(`   Addition is : ${res}`);

console.log(`c. Passed values are: "I am", "learning", "ES6", "features", "in depth"`);
var res = addition("I am ", "learning ", "ES6 ", "features ", "in depth");
console.log(`   The string is: ${res}`);