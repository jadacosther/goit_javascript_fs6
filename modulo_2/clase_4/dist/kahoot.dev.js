"use strict";

function foo(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
}

var numbers = [1, 2, 3, 4, 5];
foo(numbers);
console.log(numbers);