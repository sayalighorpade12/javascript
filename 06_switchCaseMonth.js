function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`Month is: January as month number is ${monthNumber}`);
      break;
    case 2:
      console.log(`Month is: February as month number is ${monthNumber}`);
      break;
    case 3:
      console.log(`Month is: March as month number is ${monthNumber}`);
      break;
    case 4:
      console.log(`Month is: April as month number is ${monthNumber}`);
      break;
    case 5:
      console.log(`Month is: May as month number is ${monthNumber}`);
      break;
    case 6:
      console.log(`Month is: June as month number is ${monthNumber}`);
      break;
    case 7:
      console.log(`Month is: July as month number is ${monthNumber}`);
      break;
    case 8:
      console.log(`Month is: August as month number is ${monthNumber}`);
      break;
    case 9:
      console.log(`Month is: September as month number is ${monthNumber}`);
      break;
    case 10:
      console.log(`Month is: October as month number is ${monthNumber}`);
      break;
    case 11:
      console.log(`Month is: November as month number is ${monthNumber}`);
      break;
    case 12:
      console.log(`Month is: December as month number is ${monthNumber}`);
      break;
    default:
        console.log(`Invalid input: ${monthNumber}`);
      break;
  }
}

monthOfYear(1);
monthOfYear(2);
monthOfYear(3);
monthOfYear(4);
monthOfYear(5);
monthOfYear(6);
monthOfYear(7);
monthOfYear(8);
monthOfYear(9);
monthOfYear(10);
monthOfYear(11);
monthOfYear(12);
monthOfYear(null);
monthOfYear(undefined);
monthOfYear(NaN);
monthOfYear(100);
monthOfYear(0);

