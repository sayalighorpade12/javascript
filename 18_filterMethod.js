




const array = [23, 56, 78, 9, 5, 4,  0, 66, 21 ];

// WAP to get the elements greater than 50
const arrayGreaterThan50 = array.filter( (element)=> {
    return element>50;
} );
console.log(arrayGreaterThan50);
// Traditional way
// const newArray = [];
// for (const element of array) {
//     if (element>50) {
//         newArray.push(element); 
//     }
// }
// console.log(newArray);


console.log(`======== WAP to get the even numbers using filter() ================)`);
const arr = array.filter( (element) => {
    return element%2==0;
});
console.log(arr);

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];


console.log(`Get the list of tcs employee names`);
const arrayTcsEmployees = array_employees.filter( (employee) => {
    return employee.emp_company=="TCS";
});

let arrayTcsEmpNames = arrayTcsEmployees.map( (employee) => {
    return (`name: ${employee.emp_name}, Company Name: ${employee.emp_company}`);
});
console.log(arrayTcsEmpNames);

// console.log(arrayTcsEmployees);
// for (const emp of arrayTcsEmployees) {
//    console.log(emp);
// }

console.log(`Get the list of employee id's whose salary is greater than equal 750000`);
const arraySalary = array_employees.filter( (employee) => {
    return employee.emp_salary>=75000;
});

let arrayId = arraySalary.map( (employee) => {
      return employee.emp_id;
});
console.log(arrayId);


console.log(`Find the average salary of employee from company wipro`);
const wiproEmployees = array_employees.filter( (employee) => {
    return employee.emp_company=="Wipro";
});

let sum = 0;
const sumSalary = wiproEmployees.forEach( (employee) => {
    return  sum = sum + employee.emp_salary;
});
console.log(`Sum of salary is: ${sum}`);
const average = sum / array_employees.length;
console.log(`Average salary is: ${average}`);

console.log(`Find the average salary of employee from companies Wipro and Infy`);
const employeeSalaries = array_employees.filter( (employee) => {
    return employee.emp_company=="Wipro" || employee.emp_company=="Infy";
});

let sumOfSalary = 0;
const SummOfSalary = employeeSalaries.forEach( (employee) => {
       return sumOfSalary = sumOfSalary + employee.emp_salary;
});
console.log(`Sum of salary is: ${sumOfSalary}`);
const averageSalary = sumOfSalary / array_employees.length;
console.log(`Average salary is: ${averageSalary}`);