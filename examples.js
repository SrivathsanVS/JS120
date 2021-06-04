// Bind
Function.prototype.customBind = function(...args) {
  let context = args.shift();
  let fn = this;
  return function() {
    return fn.call(context, ...args);
  };
}
function customLength() {
  let properties = Object.getOwnPropertyNames(this);
  let length = 0;
  for (let propIndex in properties) {
    let prop = properties[propIndex];
    length += Number(this.propertyIsEnumerable(prop));
  }
  return length;
}
let obj = {
  1: 1,
  2: 2,
};
const length = customLength.customBind(obj);
console.log(length());

// Context loss
// Method copied from object
let car = {
  brand: 'Toyota',
  model: 'Camry',
  year: '1995',
  returnYear: function() {
    return Number(this.year);
  }
}

function qualityCheck(retrieveYearOfMake, obj) {
  let needToRecall = (retrieveYearOfMake.call(obj) <= 2008);
  console.log((needToRecall) ? 'Recall': 'No need');
}

qualityCheck(car.returnYear, car);

// Inner function not using surrounding context
let customMath = {
  num: 5,
  nearestThousandToExponent: function(power) {
    function exponent() {
      let product = 1;
      for (let j = 0; j < power; j++) {
        product *= this.num;
      }
    }
    return parseInt(exponent() / 1000);
  }
}

// Constructor
function Car(args) {
  this.brand = args['brand'];
  this.model = args['model'];
  this.yearVersion = args['year'];
  this.dateOfPurchase = new Date(args['dateOfPurchase']);
}

Car.prototype.lengthOfOwnsership = function() {
  let currDate = new Date();
  let diffMilliseconds = currDate - this.dateOfPurchase;
  const millisecInDay = 24 * 3600 * 1000;
  const millisecInYear = 365.25 * millisecInDay;
  let yearsDiff = Math.floor(diffMilliseconds / millisecInYear);
  let daysDiff = Math.floor((diffMilliseconds - yearsDiff * millisecInYear) / millisecInDay);
  console.log(`${yearsDiff} years and ${daysDiff} days`);
}

let car1 = {
  brand: 'Toyota',
  model: 'Corolla',
  year: '1999',
  dateOfPurchase: '2005-10-21'
};

let carObj = new Car(car1);
carObj.lengthOfOwnsership();

// Constructor reuse
function Person(name) {
  this.name = name;
  this.school = undefined;
}

Person.prototype.speak = function() {
  return `Hello, my name is ${this.name}.`;
};

function Child(name, school) {
  Person.call(this, name);
  this.school = school;
}
Child.prototype = Object.create(Person.prototype);
Child.prototype["constructor"] = Child;

// Subtyping other example
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  return `[Rectangle ${this.length} x ${this.width}]`;
};

// rect test code omitted

function Square(size) {
  Rectangle.call(this, size, size);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
};

// sqr test code omitted

// Assign Property
function assignProperty(obj, property, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = value;
      break;
    }

    obj = Object.getPrototypeOf(obj);
  }
}

// Inner function
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = () => {
      console.log(this.a + ' ' + this.b);
    }

    // some code
    bar();

    // some more code
    bar();

    // still more code
  }
};

obj.foo();

// Function as argument
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + self.a + ' ' + self.b);
    });
  },
};

obj.foo();

// Mixins
const Swimmable = {
  swim() {};
}

class Bird {}

class FlyingBird extends Bird {
  fly() {}
}

class Stork extends FlyingBird {}

class Parrot extends FlyingBird {}

class Penguin extends Bird {}
Object.assign(Penguin.prototype, Swimmable);

class Ostrich extends Bird {}
Object.assign(Ostrich.prototype, Swimmable);

class Duck extends FlyingBird {}
Object.assign(Duck.prototype, Swimmable);

class Goose extends FlyingBird {}
Object.assign(Goose.prototype, Swimmable);
