// Constructors
function Circle(radius) {
  this.area = function() {
    return Math.PI * Math.pow(radius, 2);
  }
}

let a = new Circle(3);
let b = new Circle(4);

// Practice problem 6
// function Ninja() {
//   this.swung = false;
// }
//
// Ninja.prototype.swing = function() {
//   this.swung = !(this.swung);
//   return this;
// }
//
// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// Practice problem 7
let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

let ninjaB = Object.create(ninjaA);
let ninjaC = Object.create(ninjaC);
