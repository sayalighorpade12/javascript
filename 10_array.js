



var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];
console.log(`Type of array : ${typeof arrayOfRollNumbers}`);

let lengthOfArray = arrayOfRollNumbers.length;
console.log(`Length of array is: ${lengthOfArray}`);

//Accessing array element
const zerothIndexValue = arrayOfRollNumbers[0];
console.log(`Zeroth Index Value: ${zerothIndexValue}`);

//Access the array element 90
const thirdIndexValue = arrayOfRollNumbers[3];
console.log(`Third Index Value: ${thirdIndexValue}`);

//Access the array last element
const lastIndexValue = arrayOfRollNumbers[arrayOfRollNumbers.length-1];
console.log(`Last Index Value: ${lastIndexValue}`);

//Access the array second last element
const secondLastIndexValue = arrayOfRollNumbers[arrayOfRollNumbers.length-2];
console.log(`Second Last Index Value: ${secondLastIndexValue}`);


// Adding element in the last positon
arrayOfRollNumbers.push(80);
arrayOfRollNumbers.push(15);
console.log(arrayOfRollNumbers);


// Adding element in the first positon
arrayOfRollNumbers.unshift(50);
console.log(arrayOfRollNumbers);

// Removing last element
arrayOfRollNumbers.pop();
console.log(arrayOfRollNumbers);

// Removing first element
arrayOfRollNumbers.shift();
console.log(arrayOfRollNumbers);

//arrayOfRollNumbers.push(69, 89, 59)
//console.log(arrayOfRollNumbers);


var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];
//update array element
console.log(`Updating the array value`);
arrayOfRollNumbers[0] = 888;
console.log(arrayOfRollNumbers);

//update last array value
arrayOfRollNumbers[arrayOfRollNumbers.length-1] = 77;
console.log(arrayOfRollNumbers);

//update third last array value
arrayOfRollNumbers[arrayOfRollNumbers.length-3] = 400;
console.log(arrayOfRollNumbers);

console.log("Slice");
var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];
const slicArray = arrayOfRollNumbers.slice(3)
console.log(slicArray);

const slicOfArray = arrayOfRollNumbers.slice(2, 5)
console.log(slicOfArray);

console.log("splice()");
var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];
const arraySpliced = arrayOfRollNumbers.splice(3);
console.log(arrayOfRollNumbers);
console.log(arraySpliced);

var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40, 99, 80 ];
const arrSpliced = arrayOfRollNumbers.splice(2, 5);
console.log(arrayOfRollNumbers);
console.log(arrSpliced);


//Splice for insertion
var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40, 99, 80 ];
console.log(arrayOfRollNumbers);
arrayOfRollNumbers.splice(2, 0, 666, 444);
console.log(arrayOfRollNumbers);

// splice for insertion by replacin elements
var arrayOfRollNumbers = [67, 56, 78, 99, 80];
console.log(arrayOfRollNumbers);
arrayOfRollNumbers.splice(1, 1, 99, 88, 77, 66);
console.log(arrayOfRollNumbers);

var arrayOfRollNumbers = [67, 56, 78, 99, 80];
console.log(arrayOfRollNumbers);
arrayOfRollNumbers.splice(2, 2, 111, 22, 333);
console.log(arrayOfRollNumbers);

console.log("                                                                                                                                                                                                                        ");

console.log(`Give array : ["Anil", "Siya", "Sunil", "Jenny"]`);

var arrayOfName = ["Anil", "Siya", "Sunil", "Jenny"];
arrayOfName.shift();
console.log(`${arrayOfName}`);

var arrayOfName = ["Anil", "Siya", "Sunil", "Jenny"];
arrayOfName.splice(2, 0, "Ram");
console.log(arrayOfName);

console.log(arrayOfName.slice(arrayOfName.length-2));

arrayOfName.splice(1, 1, "Bill", "Stew");
console.log(arrayOfName);


var arrayName = ["Anil", "Siya", "Sunil", "Jenny"];

console.log("==================Traversing Array======================");

for (let index = 0; index < arrayName.length; index++) {
    let element = arrayName[index];
    console.log(element);
}


console.log("=============for in loop================");
for (const element in arrayName) {
    console.log(element);
}

for (const index in arrayName) {
    console.log(index);
}

console.log("=============for of loop================");
for (const element of arrayName) {
    console.log(element);
}

console.log(`------------------WAP to get even indexed element-----------------------------`);
var arrayName = ["Anil", "Siya", "Sunil", "Jenny"];

for (const index in arrayName) {
    if (index%2==     0) {
        console.log(`${arrayName[index]}`);
    }
}


console.log("------------------------join()------------------");

let names = arrayName.join(", ");
console.log(`${names}`);


const arrayBoys = ["Anil", "Ram", "Sunil"];
 const arrayGirls = ["Siya", "Jenny"];

let combineArray = arrayBoys.concat(arrayGirls);
console.log(combineArray);
  
let concatArray = arrayBoys + arrayGirls;
console.log(concatArray);


console.log(`-----------Resize an array------`);
var arrayName = ["Anil", "Siya", "Sunil", "Jenny"];
arrayName.length = 3;
console.log(arrayName);

const array = [45, 67, 89, 89, 45, "ABC", "ABC "];


console.table(arrayName);

console.log(`Spread Operator`);
console.log(arrayName);
console.log(...arrayName);


//Creating Duplicate array
const newArray = [...arrayName];
console.log(newArray);




