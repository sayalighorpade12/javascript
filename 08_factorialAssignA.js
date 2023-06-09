




var factorialOfNum = function(num) {
    if (num == undefined || num == null || num == NaN) {
        console.log(`Invalid input  : ${num}`);
    } else {
        let factorial = 1;
        for (let index = num; index >= 1; index--) {
           factorial = factorial * index;
            
        }
        return factorial;
    }
}

var fact = factorialOfNum(5);
console.log(`Factorial of 5 is : ${fact}`);

var fact = factorialOfNum(3);
console.log(`Factorial of 3 is : ${fact}`);

var fact = factorialOfNum(null);

var fact = factorialOfNum(8);
console.log(`Factorial of 8 is : ${fact}`);

var fact = factorialOfNum(undefined);
//console.log(`Factorial of undefined is : ${fact}`);

var fact = factorialOfNum(9);
console.log(`Factorial of 9 is : ${fact}`);


var fact = factorialOfNum(0);
console.log(`Factorial of 0 is : ${fact}`);