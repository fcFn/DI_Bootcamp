// Exercise 1: Analyzing
// Instructions:
// 1. Analyze these pieces of code before executing them. What will be the outputs?

console.log("Exercise 1:");

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result);
// Output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
console.log([...country]);
// Output: ['U', 'S', 'A']

// ------Bonus------
let newArray = [...[, ,]];
console.log(newArray);
// Output: [undefined, undefined]

// Exercise 2: Employees
console.log("\nExercise 2:");

const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// 1. Using map() to create welcome messages
const welcomeStudents = users.map((user) => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2. Using filter() to get Full Stack Residents
const fullStackResidents = users.filter(
  (user) => user.role === "Full Stack Resident"
);
console.log(fullStackResidents);

// 3. Bonus: Chaining filter() and map() to get lastNames of Full Stack Residents
const fullStackLastNames = users
  .filter((user) => user.role === "Full Stack Resident")
  .map((user) => user.lastName);
console.log(fullStackLastNames);

// Exercise 3: Star Wars
console.log("\nExercise 3:");

const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
const combined = epic.reduce((acc, current) => acc + " " + current);
console.log(combined);

// Exercise 4: Employees #2
console.log("\nExercise 4:");

const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

// 1. Using filter() to get students who passed
const passedStudents = students.filter((student) => student.isPassed);
console.log(passedStudents);

// 2. Bonus: Chaining filter() and forEach() to congratulate passed students
students
  .filter((student) => student.isPassed)
  .forEach((student) =>
    console.log(
      `Good job ${student.name}, you passed the course in ${student.course}`
    )
  );
