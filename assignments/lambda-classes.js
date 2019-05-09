// CODE here for your Lambda Classes
class Person {
  constructor(peopleAttrs) {
    this.name = peopleAttrs.name;
    this.age = peopleAttrs.age;
    this.location = peopleAttrs.location;
  }
  speak() {
    return `Hello, my name is ${this.name} and I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  demo(subject) {
    console.log(subject);
    return `Today we are learning about ${subject}`;
  }
  grade(studentName, subject) {
    console.log(studentName.name, subject);
    return `${studentName.name} receives a perfect score in ${subject}`;
  }
}

class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
  }
  listSubjects(testStudent) {
    // need to return to this one to use a different way to spit out the subjects. i won't always know how many items are in an array.
    return `${testStudent.favSubjects[0]}, ${testStudent.favSubjects[1]}, ${
      testStudent.favSubjects[2]
    }`;
  }
  PRAssignment(testStudent, subject) {
    return `${testStudent.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(testStudent, subject) {
    return `${testStudent.name} has begun the sprint challenge for ${subject}.`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`;
  }
  debugsCode(testStudent, subject) {
    return `${this.name} debugs ${testStudent.name}'s code on ${subject}`;
  }
}

// Person test.
const hunter = new Person({
  name: 'Hunter',
  location: 'Phoenix, AZ',
  age: 36
});

// Instructor test.
const testInstructor = new Instructor({
  name: 'testInstructor',
  age: 30,
  location: 'Salt Lake City, Utah',
  specialty: 'Full Stack Web Development',
  favLanguage: 'JavaScript',
  catchPhrase: 'Hey now!'
});

// Student test.
const testStudent = new Student({
  name: 'testStudent',
  age: 30,
  location: 'Salt Lake City, Utah',
  previousBackground: '7-11',
  className: 'FS201',
  favSubjects: ['History', 'Educational Psychology', 'Computer Science']
});

// PM test.
const testPm = new ProjectManager({
  name: 'testPm',
  age: 30,
  location: 'Salt Lake City, Utah',
  gradClassName: 'FS101',
  favInstructor: 'Dan',
  specialty: 'Extra Full Stack Web Development',
  favLanguage: 'JavaScript/React',
  catchPhrase: 'Hey now 2!'
});

console.log(testInstructor);
console.log(testInstructor.demo('History'));
console.log(testInstructor.grade(testStudent, 'History'));

console.log(testStudent);
console.log(testStudent.listSubjects(testStudent));
console.log(testStudent.PRAssignment(testStudent, 'History'));
console.log(testStudent.sprintChallenge(testStudent, 'Educational Psychology'));

console.log(testPm);
console.log(testPm.standUp('web20_reilly'));
console.log(testPm.debugsCode(testStudent, 'History'));

console.log(hunter);
console.log(hunter.speak());
