"use strict";

//1

// let date = new Date("September 04, 2003");
// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// let weekday = date.getDay();
// console.log(`${weekday}.${month}.${year}`);

//2 
function getDiffDays(dateStart, dateEnd) {
    let start = new Date(dateStart);
    let end = new Date(dateEnd);
     if (start.toString() === "Invalid Date" || end.toString() === "Invalid Date") {
      console.error("invalid date");
      return false;
    }
    else if (start > end) {
      console.error("your start date is later than end");
      return false;
    }
  
    let diff = (end - start) / 86400000;
    return diff;
  }
  console.log(getDiffDays("2020-01-01", "2020-01-17")); // 16
  console.log(getDiffDays("2020-01-01", "2020-03-15")); // 74
  console.log(getDiffDays("2222222222", "2020-03-15")); 
  console.log(getDiffDays("2021-01-02", "2020-03-15")); // Error: your start date is later than end

  //3

// function isWeekend(Daate) {
//   let date = new Date(Daate);
//   let day = date.getDay(Daate);
//   if (day === 6 || day === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isWeekend("2022-02-12")); // true
// console.log(isWeekend("2022-02-13")); // true
// console.log(isWeekend("2022-02-09")); // false

//4

// const person = {
//   fullName: "Sherlock Holmes",
//   address: {
//     street: "Baker Street",
//     city: "London",
//     house: "221b",
//   },
// };
// let str = JSON.stringify(person);
// console.log(str);
// console.log("----------------------------------------");
// let obj = JSON.parse(str);
// console.log(obj);
// console.log("----------------------------------------");
// let { fullName } = person;
// let { street } = person.address;
// let { city } = person.address;
// let { house } = person.address;
// console.log(`${fullName}, ${street}, ${city}, ${house}`);
