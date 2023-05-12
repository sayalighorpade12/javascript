console.log("----------------------------------01-------------------------------------");

function fullName() {
  console.log("Full Name: Sayali Ghorpade");
  console.log("Address: Kothrud,Pune");
}

fullName();

console.log("----------------------------------02-------------------------------------");

function personalDetails(firstName, lastName, collegeName) {
  console.log("My Personal  Detail is:");
  console.log("My name is: ", firstName, lastName);
  console.log("College Name: ", collegeName);
}
personalDetails("Sayali", "Ghorpade", "Garware College");

console.log("----------------------------------03-------------------------------------");

function swapValuesDude(valueOne, valueTwo) {
  console.log("Before Swap: ", valueOne, valueTwo);
  var temp = valueOne;
  valueOne = valueTwo;
  valueTwo = temp;

  console.log("After Swap: ", valueOne, valueTwo);
}
swapValuesDude("Virat", "Anushka");
swapValuesDude(1000, 2000);

console.log("----------------------------------03-------------------------------------");

function addThreeValues(a, b, c) {
  var result = a + b + c;
  console.log("Addition is:", result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello ", "Good ", "Morning");
