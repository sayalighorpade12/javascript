
console.log(`Given array is : ["Banana", "Orange", "Apple", "Mango", "Water Melon"]`);

var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log(`                  `);

const zerothIndexValue = arrayFruits[0];
console.log(`1. First Element is : ${zerothIndexValue}`);
const lastIndexValue = arrayFruits[arrayFruits.length-1];
console.log(`   Last Element is : ${lastIndexValue}`);

console.log(`                  `);

arrayFruits.unshift("Papaya");
console.log(`2. Add "Papaya" element, the array is : ${arrayFruits}`);

console.log(`                               `);

const arrayRemove = arrayFruits.splice(4, 1);
console.log(`3. Remove "Mango" from the array : ${arrayFruits}`);

console.log(`                               `);

arrayFruits.push("Pineapple");
console.log(`4. Add element "pineapple" at the last position : ${arrayFruits}`);

console.log(`                               `);

arrayFruits.splice(4, 0, "Dragon Fruit");
console.log(`5. Add element "Dragon Fruit" before "Water Melon" is : ${arrayFruits}`);

console.log(`                               `);

arrayFruits.splice(2, 1, "Kiwi");
console.log(`6. Replace an element "Orange" with "Kiwi" is : ${arrayFruits}`);

console.log("                   ");

const sliceArray = arrayFruits.slice(1, 4);
console.log(`7. Log the elements starting from index 1 to 4 is: ${sliceArray}`);

console.log("                   ");

const spliceArr  = arrayFruits.slice(arrayFruits.length-3);
console.log(`8. Log the last three element is : ${spliceArr}`);

