/*
Topic 1: Function declaration vs expression
*/

// Function declaration
function prompt(message) {
  console.log(`=> ${message}`); // can be invoked before declaration
}

// Function expression
foo();
const foo = function() {
  console.log("this is foo");
};

// Anonymous functions
let squaredNums = [1, 2, 3].map(function(num) {
  return num * num;
});

// Type of a fucntion value is "function"

/*
Topic 2: global object
*/
