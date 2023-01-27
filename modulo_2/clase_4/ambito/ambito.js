function bar() {
    console.log("bar");
}
  
function baz() {
  console.log("baz");
}
  
function foo() {
  console.log("foo");
  bar();
  baz();
}
  
foo();