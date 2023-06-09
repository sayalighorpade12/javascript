



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

console.log(`1. Find all the employees working in'TCS' and log only employee names`);
console.log(`                           `);
for (const employee of arrayEmployees) {
    if (employee.empCompany == "TCS") {
        console.log(`Name: ${employee.empName}, Company: ${employee.empCompany}`);
    }
   
}

console.log(`---------------------------------------------------------------------------------`);

console.log(`2. Find the'Finance' department employees and log only department`);
console.log(`                           `);
for (const employee of arrayEmployees) {
    if (employee.empDept == "Finance") {
        console.log(`Name: ${employee.empName}, Department:${employee.empDept}`);
    }
    
}

console.log(`---------------------------------------------------------------------------------`);

console.log(`3. Find the employees whose name starts with 'R' and log complete details on console`);
console.log(`                           `);
for (const employee of arrayEmployees) {
    if (employee.empName.startsWith("R")) {
        console.log(employee);
    }
}  

console.log(`---------------------------------------------------------------------------------`);

console.log(`4. Find the employees whose salary is greater than 75000`);
console.log(`                           `);
for (const employee of arrayEmployees) {
    if (employee.empSalary>75000) {
        console.log(`Employee name: ${employee.empName}, Company: ${employee.empCompany}, Salary: ${employee.empSalary}`);
    }
}

console.log(`---------------------------------------------------------------------------------`);

console.log(`5. Find employees whose salary greater than or equal 50000 and from 'IT' department and log complete details on console`);
console.log(`                                  `);
for (const employee of arrayEmployees) {
    if (employee.empSalary>=50000 && employee.empDept == "IT") {
        console.log(employee);
    }
}

console.log(`---------------------------------------------------------------------------------`);

console.log(`6. Find out all the employees from company 'Infy' and log complete details on console`);
console.log(`                          `);

for (const employee of arrayEmployees) {
    if (employee.empCompany == "Infy") {
        console.log(employee);
    }
}