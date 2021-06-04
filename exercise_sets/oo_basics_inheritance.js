// Inherited Year
/*
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}
class Truck extends Vehicle {
  constructor(year) {
    super(year);
  }
}
class Car extends Vehicle {
  constructor(year) {
    super(year);
  }
}
let truck = new Truck(2003);
console.log(truck.year); // 2003

let car = new Car(2015);
console.log(car.year); // 2015
*/

// Start Engine
/*
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}
class Truck extends Vehicle {
  startEngine() {
    console.log('Ready to go!')
  }
  constructor(year) {
    super(year);
    this.startEngine();
  }
}

let truck = new Truck(2003);
console.log(truck.year); // 2003
*/

// Only Pass the Year
/*
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
  }
}

class Car extends Vehicle {}

let truck1 = new Truck(2003, 'Short');
console.log(truck1.year);
console.log(truck1.bedType);
*/

// Start the Engine (part 2)
/*
class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle {
  constructor() {
    super();
    console.log(super.startEngine());
  }
  startEngine(speed) {
    return `Drive ${speed}, please!`;
  }
}

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));
*/

// Walk The Cat
/*
let walkMixin = {
  walk() {
    return "Let's go for a walk!";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}
Object.assign(Cat.prototype, walkMixin);
let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());
*/

// Swimming
/*
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {}

Object.assign(Maltese.prototype, swimMixin);
Object.assign(Fish.prototype, swimMixin);
let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());
*/

// Towable (part 1)
/*
let towMixin = {
  tow() {
    console.log("I can tow a trailer!");
  }
};

class Truck {}
Object.assign(Truck.prototype, towMixin);

class Car {}

let truck = new Truck();
truck.tow();
*/
