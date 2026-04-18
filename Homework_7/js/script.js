"use strict";

//1

// function sumTo(n) {
//   if (n == 1){
//     return 1;
//   }

//   return n + sumTo(n - 1);
// }

// console.log(sumTo(4)); // 10
// console.log(sumTo(3)); // 6

//2

function findShort(str) {
  let arr=str.slice();
  arr = arr.split(" ");
  arr.sort((a, b) => a.length - b.length);
  return arr[0];
}

const sentance = "Lorem ipsum dolor sit amet";

console.log(findShort(sentance)); // sit
console.log(findShort("Hello world")); // Hello
console.log(findShort("Hi")); // Hi
console.log(findShort("She is David's sister")); // is
