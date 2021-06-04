// Rectangles
/*
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getArea() {
    return this.width * this.length;
  }
}
let rect = new Rectangle(4, 5);
console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20
*/

// Rectangles and Squares
/*
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}
let square = new Square(5);
console.log(`area of square = ${square.getArea()}`);
*/

// Fake Cat
/*
class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat =  new Cat();// your implementation
console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.
*/

// Complete the Program - Cats!
/*
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    return `${this.name} is ${this.age} years old and has black and white fur.`;
  }
}

class Cat extends Pet {
  constructor(name, age) {
    super(name, age);
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());
*/

// Animals
/*
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}
class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }
  introduce() {
    return super.introduce() + " Meow meow!";
  }
}
class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}! Woof woof!`;
  }
}
let cat = new Cat("Pepe", 2, "happy");
console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
let dog = new Dog("Fluffy", 3, "happy", 'FluffMaster');
console.log(dog.introduce());
console.log(dog.greetMaster());
*/

// Refactoring Vehicles
/*
class Vehicle {
  constructor(make, model, wheels=0) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  getWheels() {
    return this.wheels;
  }
  info() {
    return `${this.make} ${this.model}`
  }
}
class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }
}
let car = new Car('camry', '1999');
console.log(car.info() + `. It has ${car.getWheels()} wheels`);
let bike = new Motorcycle('ducati', '1999');
console.log(bike.info() + `. It has ${bike.getWheels()} wheels`);
let truck = new Truck('Volvo', '2001');
console.log(truck.info() + `. It has ${truck.getWheels()} wheels`);
*/
// What will this do?
// Output:
// ByeBye
// HelloHello

// Shouter
/*
class Person {
  greeting(text) {
    console.log(text);
  }
}
class Shouter extends Person {
  greeting(text) {
    super.greeting(text.toUpperCase());
  }
}
let person = new Person();
let shouter = new Shouter();
person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend.");
*/

// Moving
/*
class WalkingAnimal {
  constructor(name, gait='walks') {
    this.name = name;
    this.gait = gait;
  }
  walk() {
    return `${this.name} ${this.gait} forward`;
  }
}
class Person extends WalkingAnimal {
  constructor(name) {
    super(name, 'strolls');
  }
}
class Cat extends WalkingAnimal {
  constructor(name) {
    super(name, 'saunters');
  }
}
class Cheetah extends WalkingAnimal {
  constructor(name) {
    super(name, 'runs');
  }
}
let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"
*/

// Pet Shelter
/*
class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
  info() {
    return `a ${this.species} named ${this.name}`;
  }
}
class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }
  addPet(pet) {
    this.pets.push(pet);
  }
  numberOfPets() {
    return this.pets.length;
  }
}
class Shelter {
  constructor() {
    this.adopters = [];
  }
  adopt(owner, pet) {
    owner.addPet(pet);
    if (!(owner.name in this.adopters)) {
      this.adopters[owner.name] = owner;
    };
  }
  printAdoptions() {
    for (let ownerName in this.adopters) {
      let owner = this.adopters[ownerName];
      console.log(`${ownerName} has adopted the following pets:`);
      for (let p in owner.pets) {
        let pet = owner.pets[p];
        console.log(pet.info());
      }
      console.log('\n');
    }
  }
}
let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
*/
// Banner Class
class Banner {
  constructor(message) {
    this.message = message;
    this.bannerLength = message.length + 2;
  }
  displayBanner() {
    console.log([this.horizontalRule(),
      this.emptyLine(),
      this.messageLine(),
      this.emptyLine(),
      this.horizontalRule()].join("\n"));
  }
  horizontalRule() {
    return '+' + '-'.repeat(this.bannerLength) + '+';
  }

  emptyLine() {
    return '|' + ' '.repeat(this.bannerLength) + '|';
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}
let banner1 = new Banner('To boldly go where no one has gone before.');
let banner2 = new Banner('');
banner1.displayBanner();
banner2.displayBanner();
