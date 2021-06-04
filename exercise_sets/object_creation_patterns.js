//Ancestors
/*
Object.prototype.ancestors = function() {
  parent = Object.getPrototypeOf(this);
  let ancestorList = [];
  while(parent) {
    ancestorList.push(parent.name || 'Object.prototype');
    parent = Object.getPrototypeOf(parent);
  };
  console.log(ancestorList);
}
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();
baz.ancestors();
bar.ancestors();
foo.ancestors();
*/

// Classical Object Creation
/*
class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  eat() {
    console.log("Eating");
  }
  communicate() {
    console.log("Communicating");
  }
  sleep() {
    console.log("Sleeping");
  }
}
class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }
  diagnose() {
    console.log("Diagnosing");
  }
}
class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }
  teach() {
    console.log("Teaching");
  }
}
class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }
  study() {
    console.log("Studying");
  }
}
class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, degree, graduateDegree) {
    super(firstName, lastName, age, gender, degree);
    this.graduateDegree = graduateDegree;
  }
  research() {
    console.log("Researching");
  }
}
let person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
*/
// Circular Queue
class CircularQueue {
  constructor(bufferSize) {
    this.queue = [{val: null, index: 0}];
    for (let i = 1; i < bufferSize; i++) {
      this.queue.push({val: null, index: i});
    }
    this.qindex = 0;
    this.qcap = bufferSize;
    this.bufferSize = bufferSize;
  }
  incrementIndex() {
    this.qindex = (this.qindex < this.bufferSize - 1) ? this.qindex + 1 : 0;
  }
  incrementToNullIndex() {
    while (this.valAtIndex() !== null) this.incrementIndex();
  }
  incrementToNonNullIndex() {
    this.incrementIndex();
    while (this.valAtIndex() === null) this.incrementIndex();
  }
  valAtIndex() {
    return this.queue[this.qindex].val;
  }
  assignVal(obj) {
    this.queue[this.qindex].val = obj;
  }
  decrementCap() {
    this.qcap -= 1;
  }
  incrementCap() {
    this.qcap += 1;
  }
  enqueue(obj) {
    if (this.qcap !== 0) {
      this.incrementToNullIndex();
      this.decrementCap();
    } else {
      this.incrementIndex();
    }
    this.assignVal(obj);
  }
  dequeue() {
    if (this.qcap === this.bufferSize) return null;
    let currIndex = this.qindex;
    this.incrementToNonNullIndex();
    let returnVal = this.valAtIndex();
    this.assignVal(null);
    this.qindex = currIndex;
    this.qcap += 1;
    return returnVal;
  }
}
let queue = new CircularQueue(3);
console.log(queue.queue);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);
let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
