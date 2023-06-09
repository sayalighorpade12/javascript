



// 5! = 5 * 4 * 3 * 2 * 1
let factorial = 1;
for (let index = 5; index >=1 ; index--) {
    factorial = factorial * index;

}
console.log(`Factorial is: ${factorial}`);

let fact = 1;
for (let index = 12; index >=1 ; index--) {
    fact = fact * index;

}
console.log(`Factorial is: ${fact}`);


function factorialNum(num) {
    if (num==0) {
        console.log(`Factorial of zero is 1`);
        return;
    }
    let factorial = 1;
    for (let index = num; index >=1; index--) {
        factorial = factorial * index;
        
    }
    console.log(`Factorial is: ${factorial}`);
    }



    
factorialNum(2);
factorialNum(10);
factorialNum(6);
factorialNum(5);
factorialNum(0);
















