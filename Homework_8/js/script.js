"use strict";

//1

function sumTwoSmallestNumbersShort(...array) {
 if (array.length <2) {
    console.error("Введите минимум 2 числа");
  }
 
  const sortedArray = array.sort((a, b) => a - b);
  let sum = sortedArray[0] + sortedArray[1];
  return +sum;

}

console.log(sumTwoSmallestNumbersShort(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbersShort(1, 3, 2)); // 3
console.log(sumTwoSmallestNumbersShort(1)); // undefined и отдельный console.error("...")


// 2
// function createCalculator(value) {
//   let defaultValue = value;

//   return {
//     sum: (result) => (defaultValue += result),
//     mult: (result) => (defaultValue *= result),
//     sub: (result) => (defaultValue -= result),
//     div: (result) => (defaultValue /= result),
//   };
// }

// const calc = createCalculator(10);
// console.log(calc.sum(5)); /// 15
// console.log(calc.mult(10)); // 150
// console.log(calc.sub(40)); // 110
// console.log(calc.div(10)); // 11
