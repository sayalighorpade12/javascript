

console.log(`Callback using named function`);
// Avinash --
function assignment(callbackFun){
    console.log("Start: Assignmen solving");
    console.log("Took 3 hours");
    console.log("Complete : Assignments solving");
    callbackFun();
}

// Mangesh
function copyAssignment(){
    console.log("Start copying");
    console.log("Took 15 mins to copy");
    console.log("Complete assignments ");
}

assignment(copyAssignment);

console.log(`--------------------------------------------------------`);

console.log(`Callback using Function Expression`);
// Avinash --
let doHomeWork = function(callback){
    console.log("Start: Assignmen solving");
    console.log("Took 3 hours");
    console.log("Complete : Assignments solving");
    callback();
}

// Mangesh
function copyAssignment(){
    console.log("Start copying");
    console.log("Took 15 mins to copy");
    console.log("Complete assignments ");
}
doHomeWork(copyAssignment);