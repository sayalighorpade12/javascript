function checkLeapYear(leapYear) {
  if (leapYear == undefined || isNaN(leapYear)) {
    console.log(`Invalid data: ${leapYear}`);
  } else {
    if ((leapYear % 4 == 0 && leapYear % 100 != 0) || leapYear % 400 == 0) {
      console.log(`${leapYear} is a Leap Year`);
    } else {
      console.log(`${leapYear} is not a Leap Year`);
    }
  }
}

checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
