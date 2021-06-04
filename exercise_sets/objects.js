// Buggy Code 1
/*
function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }
      console.log(msg);
    },
  };
}
let helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
*/
// Buggy Code 2
/*
let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    return (1 - percent / 100) * this.price;
  },
};
console.log(item.discount(20));
console.log(item.discount(50));
console.log(item.discount(25));
*/
// Testing Object Equality
/*
function objectsEqual(obj1, obj2) {
  let result = true;
  Object.keys(obj1).forEach(key => {
    result *= (key in obj2) * (obj1[key] === obj2[key]);
  });
  return Boolean(result);
}
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
*/
// Student
/*
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    notes: {},
    info() {
      return `${this.name} is a ${this.year} year student`;
    },
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      return this.courses;
    },
    listNotes() {
      return this.notes;
    },
    courseName(code) {
      let name = '';
      this.courses.forEach(course => {
        if (course.code === code) name = course.name;
      });
      return name;
    },
    addNote(code, note) {
      if (!(code in this.notes)) this.notes[code] = [];
      this.notes[code].push(note);
    },
    updateNote(code, note) {
      this.notes[code] = [note];
    },
    viewNotes() {
      Object.keys(this.notes).forEach(code => {
        console.log(`${this.courseName(Number(code))}: ${this.notes[code].join("; ")}`);
      });
    }
  }
}
let foo = createStudent('Foo', '1st');
console.log(foo.info());
console.log(foo.listCourses());
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();
*/
// School
/*
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    notes: {},
    info() {
      return `${this.name} is a ${this.year} year student`;
    },
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      return this.courses;
    },
    listNotes() {
      return this.notes;
    },
    courseName(code) {
      let name = '';
      this.courses.forEach(course => {
        if (course.code === code) name = course.name;
      });
      return name;
    },
    addNote(code, note) {
      if (!(code in this.notes)) this.notes[code] = [];
      this.notes[code].push(note);
    },
    updateNote(code, note) {
      this.notes[code] = [note];
    },
    viewNotes() {
      Object.keys(this.notes).forEach(code => {
        console.log(`${this.courseName(Number(code))}: ${this.notes[code].join("; ")}`);
      });
    }
  }
}
let foo = createStudent('Foo', '1st');
console.log(foo.info());
console.log(foo.listCourses());
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();
*/
// School
/*
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    notes: {},
    info() {
      return `${this.name} is a ${this.year} year student`;
    },
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      return this.courses;
    },
    listNotes() {
      return this.notes;
    },
    courseName(code) {
      let name = '';
      this.courses.forEach(course => {
        if (course.code === code) name = course.name;
      });
      return name;
    },
    addNote(code, note) {
      if (!(code in this.notes)) this.notes[code] = [];
      this.notes[code].push(note);
    },
    updateNote(code, note) {
      this.notes[code] = [note];
    },
    viewNotes() {
      Object.keys(this.notes).forEach(code => {
        console.log(`${this.courseName(Number(code))}: ${this.notes[code].join("; ")}`);
      });
    }
  }
}
let foo = createStudent('Foo', '1st');
console.log(foo.info());
console.log(foo.listCourses());
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();
*/
// School
function createStudent(name, year) {
  return {
    name,
    year,
    courses: {},
    notes: {},
    info() {
      return `${this.name} is a ${this.year} year student`;
    },
    addCourse(course) {
      this.courses[course.code] = course;
    },
    listNotes() {
      return this.notes;
    },
    courseName(code) {
      return this.courses[code].name;
    },
    addNote(code, note) {
      if (!(code in this.notes)) this.notes[code] = [];
      this.notes[code].push(note);
    },
    addGrade(courseCode, grade) {
      this.courses[courseCode]['grade'] = grade;
    },
    updateNote(code, note) {
      this.notes[code] = [note];
    },
    viewNotes() {
      Object.keys(this.notes).forEach(code => {
        console.log(`${this.courseName(Number(code))}: ${this.notes[code].join("; ")}`);
      });
    }
  }
}
let school = {
  students: {},
  courseCatalogue: {
    101: 'Math',
    102: 'Advanced Math',
    202: 'Physics'
  },
  validYears: ['1st', '2nd', '3rd', '4th', '5th'],
  addStudent(name, year) {
    if (!(this.validYears.includes(year))) {
      console.log("Invalid Year");
      return;
    }
    let newStudent = createStudent(name, year);
    this.students[name] = newStudent;
    return newStudent;
  },
  enrollStudent(student, courseCode) {
    this.students[student].addCourse({name: this.courseCatalogue[courseCode],
    code: courseCode});
  },
  addGrade(student, courseCode, grade) {
    this.students[student].addGrade(courseCode, grade);
  },
  getReportCard(student) {
    for (let courseCode in this.students[student].courses) {
      let course = this.students[student].courses[courseCode];
      let grade = course.grade || 'In progress';
      console.log(`${course.name}: ${grade}`);
    }
  },
  courseCode(name) {
    for (let code in this.courseCatalogue) {
      if (this.courseCatalogue[code] == name) return code;
    }
  },
  courseReport(subjectName) {
    let gradeCount = 0;
    let studentsEnrolledInSubject = 0;
    let displayString = '';
    let courseCode = this.courseCode(subjectName);
    Object.values(this.students).forEach(student => {
      displayString += `${student.name}: ${student.courses[courseCode].grade} \n`;
      gradeCount += student.courses[courseCode].grade;
      studentsEnrolledInSubject += 1;
    });
    if (displayString) {
      let average = Math.floor(gradeCount / studentsEnrolledInSubject);
      displayString = `=${subjectName} Grades=\n` + displayString + `---\n` +
      `Course Average: ${average}`;
      console.log(displayString);
    }
  }
}
school.addStudent('foo', '3rd');
school.enrollStudent('foo', 101);
school.enrollStudent('foo', 102);
school.enrollStudent('foo', 202);
school.addStudent('bar', '1st');
school.enrollStudent('bar', 101);
school.addStudent('qux', '2nd');
school.enrollStudent('qux', 101);
school.enrollStudent('qux', 102);
//Grades
school.addGrade('foo', 101, 95);
school.addGrade('bar', 101, 91);
school.addGrade('qux', 101, 93);
school.addGrade('foo', 102, 90);
school.addGrade('qux', 102, 90);
// Grade Reporting
school.getReportCard('foo');
school.courseReport('Math');
