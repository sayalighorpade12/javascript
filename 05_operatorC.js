



console.log("-------------------------Male Marriage Eligibility Check--------------------------------------");

console.log("                                                                                                  ");

function maleMarriageEligibility(gender, age, boyName) {

    var gender = "Male";
    var age = 25;
    var boyName = "Billgates";
    var result = gender == "Male" && age>=21 ? `Hey "${boyName}" you are eligible for marriage` : `Hey "${boyName}" you are not eligible for marriage`
    console.log(`${result}`);

    var gender = "Male";
    var age = 17;
    var boyName = "Stew Jobs";
    var result = gender == "Male" && age>=21 ? `Hey "${boyName}" you are eligible for marriage` : `Hey "${boyName}" you are not eligible for marriage`
    console.log(`${result}`);

}
maleMarriageEligibility();


console.log("                                                                                                  ");
console.log("-------------------------Female Marriage Eligibility Check--------------------------------------");
console.log("                                                                                                  ");

function femaleMarriageEligibility(gender, age, girlName)  {
    var gender = "Female";
    var age = 16;
    var girlName = "Jenifer";
    var result = gender == "Female" && age>=18 ? `Hey "${girlName}" you are eligible for marriage` : `Hey "${girlName}" you are not eligible for marriage`
    console.log(`${result}`);

    var gender = "Female";
    var age = 27;
    var girlName = "Malinda Gates";
    var result = gender == "Female" && age>=18 ? `Hey "${girlName}" you are eligible for marriage` : `Hey "${girlName}" you are not eligible for marriage`
    console.log(`${result}`);


}
femaleMarriageEligibility()






