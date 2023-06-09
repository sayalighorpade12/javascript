


const array = [11, 22, 33, 44, 55];

// const clonedArray = array; // shallow clone
// clonedArray.splice(2, 0 ,100, 200);
// console.log(array);
// console.log(clonedArray);

const clonedArray = [...array];
clonedArray.splice(2, 0 ,100, 200);
console.log(array);
console.log(clonedArray);

const array1 = [1, 2, 3, 4, 5];
const array2 = [22, 33,  44, 55, 66];

const array3 = array1.concat(array2);
console.log(array3);

const array4 = [...array1,  ...array2, ...array3];
console.log(array4);






