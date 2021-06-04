# Topic 3: Implicit and Explicit Execution Context

* Two ways to set context while calling a function or a method:
  - Explicit
  - Implicit

## _Implicit Execution Context_
1. `this` available to all functions in a program
  - Example:
    ```
    function foo() {
      console.log("this refers to : " + this);
    }
    foo(); // this refers to: [object global]
    ```
2. For a **regular** function call, JS sets the binding for this to the **global object**.
  - Example:
  ```
  function foo() {
    this.bar = 'bar';
  }
  foo();
  global.bar; // 'bar'
  ```
3. Under strict mode, the implicit `strict` is set to undefined and not the global object:
```
"use strict";

function foo() {
  console.log("this refers to: " + this);
}
foo();
```

## _Method Execution Context (Implicit)_
* The execution context is determined by how a function or method is called
* If a method is called as a function of an object, the context is set to that of the host object.
  - If instead the object method is passed as a first class value to a function of different name and called as such, the context becomes the global context.
  - Example 1:
    ```
    let foo = {
      bar: function() {
        console.log(this);
      }
    };
    foo.bar(); // foo is the implicit execution context for bar
    ```
  - Example 2:
    ```
    let baz = foo.bar;
    baz(); // Object global
    ```

## _Explicit Function and Method Execution Context_
* Using `call`:
  ```
  function logNum() {
    console.log(this.num);
  }
  let obj = {
    num: 42
  };
  logNum.call(obj);
  ```
* Possible to call an object method on another object too.
  ```
  let obj1 = {
    logNum() {
      console.log(this.num);
    }
  };
  let obj2 = {
    num: 42
  };
  obj1.logNum(obj2);
  ```
* Possible to pass arguments to call function via the second parameter

# Bind
- Bind a copy of a function or a method to an object.
- Returns a new function that is bound to the context. Original function is unchanged
  ```
  let obj = {
    message: 'JavaScript',
  };
  function foo() {
    console.log(this.message);
  }
  let func = foo.bind(obj);
  func() // 'Javascript'
  ```
