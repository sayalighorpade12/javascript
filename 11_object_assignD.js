



let professor = {
    name: "Rajesh",
    age: 46,
    city: "Pune",
    subject: "Cloud computing",
    isProfessional: true,
    degrees: {
        Engineering: "CSC",
        PHD: "Adv Computing",
        Diploma: "Web Designing"
    },
    certificates: ["Hacker Rank Participation", "Ceritificate in IFE course", "Certificate in Adv Programming"],
    allDegrees : function(){
          let details = `engineering :${this.degrees.Engineering}, PHD: ${this.degrees.PHD}, Diploma: ${this.degrees.Diploma}`;
          return details;
    }

}



console.log("1. Professor object properties are:", professor);

console.log(`                              `);

const properties = professor.degrees;
console.log("2. Degrees object properties are:" , properties);

console.log(`                              `);

const certified = professor.certificates;
console.log("3. Certificates array elements are:" , certified);

console.log(`                              `);

console.log("4. ============= Professor total degrees ===============");
const degree = professor.allDegrees();
console.log(`   Teacher degrees and toal degrees are : ${degree}`);

console.log(`                              `);

console.log("5. ============= add new property ===============");

professor.totalExperience = "14 years";
console.log(`   Total Experience is : ${professor.totalExperience}`);

console.log(`                              `);

console.log("6. ============= Modify Property ===============");
console.log(`   Existing object is:`,professor);
professor.city = "Mumbai";
console.log(`   Modify city Pune to Mumbai:`, professor);

console.log(`                              `);  

console.log("7. ============= Add new Certificate ===============");
console.log(`   Existing certificate : ${professor.certificates}`);
professor.certificates.push("Oracle Certified");
console.log(`   After add new certificate: ${professor.certificates}`);

console.log(`                              `);

console.log("8. ============= Last Element of Array Certificate ===============");
const indexLast  = professor.certificates[ professor.certificates.length-1];
console.log(`   Last element of array certificate is: ${indexLast}`);