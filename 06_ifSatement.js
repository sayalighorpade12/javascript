



var show = function(){
    return 100;
}
console.log(`Result is ${show()}`);

console.log("I am going to office");

var isTrafficToDailyRoute = false;
if(isTrafficToDailyRoute){
      console.log("Daily Route");

}
      console.log("Going by cab");
      console.log("Had breakfast in middle");
      console.log("office"); 










var num1 = 13;
var isEven = num1%2==0;
if (  isEven) {
    console.log(`Is Even: ${isEven}, Even number: ${num1}`);
    
} else {
    console.log(`Is Even: ${isEven}, Odd number: ${num1}`);
}
console.log("After if else statement");


//gender - male --> age>=21 AND <=90
//gender - female --> age>=18 AND <=90
//gender - transgender--> Invalid



/*function marriageEligibility1(age, gender, name) {
    //Invalid data
      if ((gender=="male" && age<21 || age>90) || (gender=="female" && age< 18 || age>90) || age==null || age==undefined) {
        console.log(`${name} not allowed: ${age} ${gender}`);

      } else {
         //valid data

         
      }

}

marriageEligibility1(17,"male", "Bill");
marriageEligibility1(170,"male", "stew");
marriageEligibility1(null,"male", "Bill");






function marriageEligibility(age, gender, candidateName) {




    
//Happy path
    if (gender=="male" && age>=21 && age<=90) {
        console.log(`${candidateName} ${gender} ${age}  you are eligible`);
    } else {
        if (gender=="female" && age>=18) {
            console.log(`${candidateName} ${gender} ${age} you are eligible`);
        } else {
            if (gender=="transgender") {
                console.log(`${candidateName} ${gender} ${age} you are note aloud as per indian constitution`);
            
           
            } else {
                if (gender=="female" && age<18) {
                    console.log(`Hey girl ${candidateName} you are below 18 Not allowed`);
                } else {
                  console.log(`Hey boy ${candidateName} you are below 21 Not allowed`);
                }
            }
        }
       
    }
    
}
//marriageEligibility(23,"male","shyam");
//marriageEligibility(20,"female","sheetal");
//marriageEligibility(5,"transgender","shaa");

//marriageEligibility(20,"male","Mady");
//marriageEligibility(350,"male","Rahul");
//marriageEligibility(16,"female","ketty");*/






function marriageEligibility2(age, gender, name) {
    //Invalid data
         if (age==null || age==undefined || gender==undefined ) {
            console.log(`Invalid input ${name} ${age} ${gender}`);
         } else {
            if (gender=="male" && age<21 || age>90) {
                console.log(`Invalid input ${name} ${age} ${gender}`);
            } else {
                if (gender=="female" && age<18 || age>90) {
                    console.log(`Invalid input ${name} ${age} ${gender}`);
                } else {
                    if (gender=="transgender") {
                        console.log(`Not aloowed ${name} ${age} ${gender} as constitution`); 
                    } else {
                        if (gender=="male") {
                            console.log(`You are eligible ${name} ${age} ${gender}`);
                        } else {
                            console.log(`You are eligible ${name} ${age} ${gender}`);
                        }
                    }
                }
            }
         } 
      


}



marriageEligibility2(null, "male", "Raam");





