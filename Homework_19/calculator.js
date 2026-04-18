"use strict";

let value = 0;

function set(num) {
  value = num;
}

function add(num) {
  return (value += num);
}
function sub(num) {
  return (value -= num);
}
function mult(num) {
  return (value *= num);
}
function div(num) {
  return (value /= num);
}

module.exports = {
  set,
  add,
  sub,
  mult,
  div,
};
