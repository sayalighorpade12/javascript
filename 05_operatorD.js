console.log("-----------------------TCS Interview Eligibility---------------------------");
console.log("                                            ");

function interviewEligibility (gradScore, hscScore, sscScore, candidateName) {
    var gradScore = 80;
    var hscScore = 86;
    var sscScore = 90;
    var candidateName = "Sayali";
    var result = gradScore>=70 && hscScore>=65 && sscScore>=50 ? `Congrates! ${candidateName} you are eligible for TCS interview.` : `Unfortunately ${candidateName} you are not eligible for TCS interview.`
    console.log(`${result}`);

    var gradScore = 70;
    var hscScore = 65;
    var sscScore = 55;
    var candidateName = "Jenny";
    var result = gradScore>=70 && hscScore>=65 && sscScore>=50 ? `Congrates! ${candidateName} you are eligible for TCS interview.` : `Unfortunately ${candidateName} you are not eligible for TCS interview.`
    console.log(`${result}`);

    var gradScore = 60;
    var hscScore = 79;
    var sscScore = 88;
    var candidateName = "Riya";
    var result = gradScore>=70 && hscScore>=65 && sscScore>=50 ? `Congrates! ${candidateName} you are eligible for TCS interview.` : `Unfortunately ${candidateName} you are not eligible for TCS interview.`
    console.log(`${result}`);

}
   interviewEligibility()
















