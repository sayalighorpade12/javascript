



function eligibility(gradScore, hscScore, sscScore, candidateName) {
    if (gradScore>=70 || hscScore>=80 || sscScore>=90) {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
    } else {
        console.log(`Unfortunately ${candidateName} you are not eligible for TCS interview`);
    }
}
eligibility(80, 86, 90, "Jenny");
eligibility(70, 65, 55, "Riya");
eligibility(60, 79, 88, "Niya");