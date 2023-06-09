



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

const arrayEmps =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`1. Find all the employees from 'Wipro' company`);
const arrayWiproEmp = arrayEmps.filter( (employee) => {
    return employee.emp_company=="Wipro";
});

let allEmp = arrayWiproEmp.map( (employee) => {
    return employee.emp_name;
});
console.log(allEmp);

// for (const emp of allEmp) {
//    console.log(emp);
// }

console.log(`----------------------------------------------------------------------------------------------`);

console.log(`2. Find all the employees from 'IT' or 'HR' department`);

const arrayDepartment = arrayEmps.filter( (employee) => {
    return employee.emp_dept=="IT" || employee.emp_dept=="HR";
});

const allEmployees = arrayDepartment.map( (employee) => {
    return employee.emp_name;
});

console.log(allEmployees);

console.log(`----------------------------------------------------------------------------------------------`);

console.log(`3. Find out all employees whose emp id's are greater than 50`);

const empId = arrayEmps.filter( (employee) => {
    return employee.emp_id>50;
});

let empName = empId.map( (employee) => {
    return employee.emp_name
})

console.log(empName);


console.log(`----------------------------------------------------------------------------------------------`);

console.log(`4. Find all the employees whose names starts with letter 'A' or 'V' or 'M' `);
const arrayLetter = arrayEmps.filter( (employee) => {
   if (employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M")) {
        console.log(employee.emp_name);
   }
});

console.log(`----------------------------------------------------------------------------------------------`);

console.log(`5. Find out the average salary of the employee for all the department`);
const empSalaries = arrayEmps.map( (employee) => {
    return employee.emp_salary;
});
const sumSalary = empSalaries.reduce ( (runningTotal, value) => {
    return runningTotal + value; 
});
console.log(`sum is: ${sumSalary}`);
const averageOfSalary = sumSalary / empSalaries.length;
console.log(`Average is:  ${averageOfSalary}`);

console.log(`----------------------------------------------------------------------------------------------`);

console.log(`6. Find the average salary for 'IT' department`);
const empDept = arrayEmps.filter( (employee) => {
    return employee.emp_dept=="IT";
});
const empSalary = empDept.map( (employee) => {
    return employee.emp_salary;
}) 
const sumOfSalary = empSalary.reduce( (runningTotal, value) => {
    return runningTotal + value;
  
})
console.log(`Sum is: ${sumOfSalary}`);

const averageSalary = sumOfSalary / empSalary.length;
console.log(`Average is: ${averageSalary}`);