


let bankSbi = {
    bankName: "SBI Bank",
    location: "Pune",
    accountNumber: 300071999,
    ifscCode: "SBIN0000454"
    
}

let bankLocation ={
    street: "Paud road",
    city: "Kothrud, Pune",
    pinCode: 411052
}
const rateOfInterest = {
    homeLoanInterest : "13%",
    personalLoanInterest : "12%",
    dueInterest : "10%"
}


console.log(`---------------- Clone objects bankSbi and bankLocation ---------------`);
Object.assign( bankSbi, bankLocation);
console.table(bankSbi);

console.log(`---------------- SBI Details ---------------`);

const sbiDetails = Object.assign(bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);

console.log(`---------------- Traverse SBI Details ---------------`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}: ${value}`);
    }
}




