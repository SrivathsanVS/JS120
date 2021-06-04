# Topic 4: Dealing with Context Loss

1. Method copied from an object
- Copying a method and executing it as a function or on another object
- To resolve this context loss, need to do one of the following:
  * Pass context as argument
  * Bind method's context

2. Inner function not using the surrounding context
- Invocation a nested function inside a method will use the global context.
- This is because the context is determined by how a function is used.
- Resolution is by :
  * Passing the context to the inner function by stashing the object's context.
  * Explicit context reference
  * Binding
- Using an arrow function
  * Disclaimer: Do not use arrow functions as object methods

3. Function as argument losing surrounding Context
  - forEach, map, etc. all pass functions to the array function.
  - Calling the callback function will result in context loss unless:
    * Stash and pass context
    * Pass context as argument to function
    * Use bind
    * Use arrow function
