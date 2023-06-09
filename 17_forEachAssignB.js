



class Employee {
    constructor(empId, empName, empDept, empSalary, empCompany){
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}

const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empViny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
 
const arrayEmployees = [empAnil, empRadha, empRishi,empSonali,empMonika,empViny,empMahi];

console.log(`1. Find out the 'TCS' employee details and log only name and company`);
console.log(`                           `);

arrayEmployees.forEach( (employee) => {
    if (employee.empCompany == "TCS") {
        console.log(`Name: ${employee.empName}, Company Name: ${employee.empCompany}`);
    }

});

console.log(`---------------------------------------------------------------------------------`);

console.log(`2. Find employees whose salary greater than or equal 50000 and log all the employee details on console`);
console.log(`                                  `);
arrayEmployees.forEach( (employee) => {
    if (employee.empSalary>=50000) {
        console.log(employee);
    }
});

console.log(`---------------------------------------------------------------------------------`);

console.log(`3. Find the sum of all employees salary and log on console`);
console.log(`                       `);
let sumOfSalary = 0;
arrayEmployees.forEach( (employee) => {
    sumOfSalary = sumOfSalary + employee.empSalary;
});
console.log(`Sum of all employees Salary is: ${sumOfSalary}`);

console.log(`---------------------------------------------------------------------------------`);

console.log(`4. Find the average salary and dlog on console`);
console.log(`                           `);
let sumSalary = 0;
arrayEmployees.forEach( (employee) => {
    sumSalary = sumSalary + employee.empSalary;

});
let averageSalary = sumSalary / arrayEmployees.length
console.log(averageSalary);

console.log(`---------------------------------------------------------------------------------`);

console.log(`5. Find the 'IT' or 'HR' department employees whose salary is greater than or equal to 75000 and log complete employee details`);
console.log(`                        `);
arrayEmployees.forEach( (employee) => {
    if (employee.empSalary>=75000 && employee.empDept == "IT" || employee.empDept == "HR") {
        console.log(employee);
    }
});