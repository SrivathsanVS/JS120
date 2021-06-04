# Topic 1: Function declaration vs expression

```
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
```

- Type of a function value is "function"

# Topic 2: Global object
- Houses global properties like isNaN and Infinity
  - E.g:
  ```global.isNaN // [Function.isNaN]
  ```
  - `Number.isNaN(0 /0) // true`

- Possible to add values to global object at any time:
  - `global.foo = 1`
  - `global.foo // 1`

- Undeclared variables: Undeclared variables become properties of the global object:
  ```
  foo =  bar;
  global.foo // 'bar'
  ```
  - It is possible to access such undeclared variables.
    - Undeclared variables that are properties of the global object are accessed only if there are no global or local variables of the same name.
    
