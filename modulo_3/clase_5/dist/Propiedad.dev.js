"use strict";

var user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
console.log(user.sizes.height); // 182

console.log(user["name"]); // John