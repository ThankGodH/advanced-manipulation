// Creating the student object
const student = {
    name: 'ThankGod Hunyinbo',
    age: 25,
    enrolled: true,
    courses: ['Math', 'Science', 'History'],
    
    // Method to display student information
    displayInfo: function() {
      return `${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled ? 'Yes' : 'No'}`;
    }
  };
  
  
  console.log(student.name); // ThankGod Hunyinbo
  console.log(student.age); // 25
  console.log(student.displayInfo()); // ThankGod Hunyinbo, Age: 21, Enrolled: Yes
  
  
const studentJSON = JSON.stringify(student);
console.log(studentJSON);


const studentObject = JSON.parse(studentJSON);
console.log(studentObject);


console.log(student === studentObject); // false, as they are different objects

// Destructuring student object
const { name, courses } = student;
console.log(name); // ThankGod Hunyinbo
console.log(courses); // ['Math', 'Science', 'History']

// Destructuring an array of scores
const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log(firstScore, secondScore); // 85 92

// Cloning the student object
const clonedStudent = { ...student, graduationYear: 2024 };
console.log(clonedStudent);

// Merging arrays using the spread operator
const newCourses = ['Art', 'Music'];
const allCourses = [...student.courses, ...newCourses];
console.log(allCourses); // ['Math', 'Science', 'History', 'Art', 'Music']

student.addCourse = function(course) {
    this.courses.push(course);
  };
  
  // Adding a method to calculate the total number of courses
  student.totalCourses = function() {
    return this.courses.length;
  };
  
  // Test the methods
  student.addCourse('Geography');
  console.log(student.courses); // ['Math', 'Science', 'History', 'Geography']
  console.log(student.totalCourses()); // 4
  
  const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
console.log(averageScore); // (85 + 92 + 78 + 90) / 4 = 86.25
