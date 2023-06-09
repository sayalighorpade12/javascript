


console.log(`====================== Vehicle Details ============================`);

console.log(`                      `);

class Vehicles {
    constructor(brand, name, price, fuelType, color, transmission){
        this.brand = brand;
        this.name = name;
        this.price = price;
        this.fuelType = fuelType;
        this.color = color;
        this.transmission = transmission;
    
    }
    showDetails(){
        console.log(`Vehicle Details : ${this.brand}, ${this.name}, ${this.price}, ${this.fuelType}, ${this.color}, ${this.transmission}`);
    }
   
}


const car1 = new Vehicles("Tata", "Nexon", "14.20L", "Disel", "Grey", "Manual");
const car2 = new Vehicles("Mahindra", "XUV700", "21.58L", "Disel","Black", "Manual");
const car3 = new Vehicles("Hundai", "Verna", "17L", "Petrol", "beinge", "Automatic");
const car4 = new Vehicles("BMW", "BMW X5", "1.09Cr", "Petrol", "Black Sapphire", "Automatic");
const car5 = new Vehicles("Mercedes-Benz", "Mercedes-Maybach S-Class", "2.89Cr", "Petrol", "Silver","Automatic");



const array = [car1, car2, car3, car4, car5];

for (const element of array) {
    element.showDetails();
}

console.log(`                                         `);
console.log(`====================== College Details ============================`);

console.log(`                          `);

class College {
    constructor(collegeName, department, city, phoneNumber){
        this.collegeName = collegeName;
        this.department = department;
        this.city = city;
        this.phoneNumber = phoneNumber;
    }
        
}

const collegeName1 = new College("Sinhgad", "Science", "Pune", 2114-673405);
const collegeName2 = new College("IIt Bombay", "Engineering", "Mumbai", 022-25722545)
const collegeName3 = new College("Fergusson", "Biotechnology", "Pune", 020-67656000);
const collegeName4 = new College(" D. Y. Patil", "Engineering", "Kolhapur", 0231-260-1433);


traverse(collegeName1);
console.log(`--------------------------------------------------------`);
traverse(collegeName2);
console.log(`--------------------------------------------------------`);
traverse(collegeName3);
console.log(`--------------------------------------------------------`);
traverse(collegeName4);

function traverse(collegeObject){
   for (const key in collegeObject) {
    if (Object.hasOwnProperty.call(collegeObject, key)) {
        const value = collegeObject[key];
         console.log(`${key} : ${value}`);
    }
   }
    
}
