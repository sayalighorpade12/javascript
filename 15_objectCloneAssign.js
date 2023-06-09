


console.log(`Given Array : [20, 3, 4, 56, 400, 49]`);

const arrayNums = [20, 3, 4, 56, 400, 49];

console.log(`-------------------------------------------------------------`);

console.log(`01. Perform shallow clone, Update cloned array and log original and cloned array`);
const clonedArrayNums = arrayNums;
clonedArrayNums.push(55, 66);
console.log(arrayNums);
console.log(clonedArrayNums);

console.log(`-------------------------------------------------------------`);

console.log(`02. Perform deep clone, Update original array and log original and cloned array`);
const arrayNumsClone = [...arrayNums];
arrayNumsClone.push(10, 25);
console.log(arrayNums);
console.log(arrayNumsClone);

console.log(`-------------------------------------------------------------`);

console.log(`03. Merge and concat array with spread operator and log merged array`);
const arrayEven = [2, 30, 14, 8];
const array1 = arrayNums.concat(arrayEven);

const arr = [...array1]; // Using spread operator
console.log(arr);

console.log(`-------------------------------------------------------------`);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,000INR",
        jun_month: "65,000INR",
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            strret: "Kanch Pokali, 431202",

        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800 4567 32", "+91 9096 5678 77"]
}

console.log(`05. the employee details: `);

const emp = employee_info.address.locality.colony;
const emp0 = employee_info.address.locality.strret;
const emp1 = employee_info.address.city;
const emp2 = employee_info.address.state;
const emp3 = employee_info.address.country;
console.log(`a. Employee address is: ${emp}, ${emp0}, ${emp1},${emp2}, ${emp3}`);

const emp4 = employee_info.mobiles;
console.log(`b. Mobile numbers are: ${emp4}`);

console.log(`-------------------------------------------------------------`);

console.log(`06. Perform deep clone using JSON.stringify`);

console.log(`                                     `);

const clonedEmployeeInfo = JSON.parse(JSON.stringify(employee_info));

console.log(`A. Update property 'july_month' salary to 80K on cloned oblect`);

employee_info.salary.july_month = "80,000INR";
console.log(`Original salary: ${clonedEmployeeInfo.salary.july_month}`);
console.log(`Updated salary: ${employee_info.salary.july_month}`);

console.log(`                                     `);

console.log(`B. Updated property 'Country' to 'United Kingdom' on original object`);

employee_info.address.country = "United Kingdom";
console.log(`Update original property 'Country' is: ${employee_info.address.country}`);

console.log(`                                     `);   
  
console.log(`C. Updated values for original and cloned object`);

console.log(``);



