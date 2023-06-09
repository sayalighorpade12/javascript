                                                  
                                                            

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
                                                                  
                                                              
console.log(`1. Add 10 into each element`);
let num = 10;
const array = arrayNumbers.map( (element) => {
                                                                  
    return num + element;
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
console.log(array);

console.log(`2. Square the each array element`);
const arraySquare = arrayNumbers.map( (element) => {
    return element*element;
});
console.log(arraySquare);

console.log(`3. Add the index value into its corresponding each array element`);
const arrayValue = arrayNumbers.map( (currentValue, index) => {
    return currentValue + index;
})
console.log(arrayValue);
                                                                                                            