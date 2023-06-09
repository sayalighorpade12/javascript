


const sbiBank = {
    bankName: "SBI Bank",
    location: "Satara",
    accountNumber: 300071999,
    ifscCode: "SBIN0000454",
    inrerestRate: "8.75%",
    showDetails: function(){
         let details = `Bank Name: ${this.bankName}, Location: ${this.location}, Account Number: ${this.accountNumber}, IFSC Code: ${this.ifscCode}, Interest Rate: ${this.inrerestRate}`;
         return details;
    }
}
var details = sbiBank.showDetails();
console.log(`${details}`);


const axisBank = {
    bankName: "AXIS Bank",
    location: "Pune",
    accountNumber: 314000789,
    ifscCode: "UTIB0000004",
    inrerestRate: "8.90%",
    showDetails: function(){
        let details = `Bank Name: ${this.bankName}, Location: ${this.location}, Account Number: ${this.accountNumber}, IFSC Code: ${this.ifscCode}, Interest Rate: ${this.inrerestRate}`;
        return details;
   }
}

var details = axisBank.showDetails();
console.log(`${details}`);

const hdfsBank = {
    bankName: "HDFC Bank",
    location: "Mumbai",
    accountNumber: 400211899,
    ifscCode: "HDFC0000064",
    inrerestRate: "8.90%",
    showDetails: function(){
        let details = `Bank Name: ${this.bankName}, Location: ${this.location}, Account Number: ${this.accountNumber}, IFSC Code: ${this.ifscCode}, Interest Rate: ${this.inrerestRate}`;
        return details;
   }
}

var details = hdfsBank.showDetails();
console.log(`${details}`);

const yesBank = {
    bankName: "YES Bank",
    location: "Nashik",
    accountNumber: 416532002,
    ifscCode: "YESB000054",
    inrerestRate: "9.60%",
    showDetails: function(){
        let details = `Bank Name: ${this.bankName}, Location: ${this.location}, Account Number: ${this.accountNumber}, IFSC Code: ${this.ifscCode}, Interest Rate: ${this.inrerestRate}`;
        return details;
   }
}

var details = yesBank.showDetails();
console.log(`${details}`);
