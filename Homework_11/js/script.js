"use strict";

function isWeekend(Date) {
  
  let day = Date.getDay();

  return day === 6 || day === 0;
}

class Person {
  
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = new Date(birthDayDate);
  }
  celebrate() {
    console.log("Happy Birthday, let's celebrate");
  }
}

class Employee extends Person {
  #salary = 0;
  constructor(firstName, lastName, age, birthDayDate, salary, jobPosition) {
    super(firstName, lastName, age, birthDayDate);
    this.salary = salary;
    this.jobPosition = jobPosition;
  }

  getYearSalary() {
    console.log(`Годовая зарплата: ${this.salary * 12}`);
  }

  celebrate() {

    if (isWeekend(this.birthDayDate)) {
      super.celebrate();
    } else {
      console.log("Happy Birthday, but I need to work");
    }
  
  }
}
let person = new Person("Alex", "Jhonson", 30, "1992-05-06");
person.celebrate();


let employee = new Employee("Bob", "Karlson", 40, "1982-09-06", 25000, "Boss");
employee.celebrate();



