// Name the Constructor
/*
function nameConstructor() {
  let vars = ['Hello', [1, 2, 3], {name: 'Srdjan'}];
  for (let i in vars) {
    console.log(vars[i].constructor.name);
  }
}
*/

// Empty class
// class Cat {};

// What are you?
/*
class Cat {
  constructor() {
    console.log("I'm a cat!");
  }
}

let kitty = new Cat();
*/

// Hello Sophie! Part 1
/*
class Cat {
  constructor(name) {
    this.name = name;
    console.log(`Hello! My name is ${this.name}!`);
  }
}
let kitty = new Cat('Sophie');
*/

// Hello Sophie! Part 2
/*
class Cat {
  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }
  constructor(name) {
    this.name = name;
  }
}
let kitty = new Cat('Sophie');
kitty.greet();
*/

// Default Person
/*
class Person {
  constructor(name='John Doe') {
    this.name = name;
  }
}
let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe
*/

// Hello, Chloe!
/*
class Cat {
  constructor(name) {
    this.name = name;
  }
  rename(newName) {
    this.name = newName;
  }
}
let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe
*/

// Generic Greeting part 1
/*
class Cat {
  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }
}
Cat.genericGreeting();
*/

// Generic Greeting part 2
/*
class Cat {
  constructor(name) {
    this.name = name;
  }
  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }
  personalGreeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}
let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting();
*/
