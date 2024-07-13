// Exercise 1: Location
// Instructions:
// 1. Analyze the code below. What will be the output?

const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// Exercise 2: Display Student Info
// Instructions:
// 1. Using the code below, destructure the parameter inside the function and return a string as the example seen below:
// output : 'Your full name is Elie Schoppik'

function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" }));

// Exercise 3: User & Id
// Instructions:
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }
// 1. Using methods taught in class, turn the users object into an array
// 2. Modify the outcome of part 1, by multipling the user's ID by 2

const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);
console.log(usersArray);

const modifiedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
console.log(modifiedUsersArray);

// Exercise 4: Person Class
// Instructions:
// 1. Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);

// Exercise 5: Dog Class
// Instructions:
// Analyze the options below. Which constructor will successfully extend the Dog class?

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// The correct option is 2:
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

// Exercise 6: Challenges
// 1. Evaluate these (ie True or False)
console.log([2] === [2]); // false
console.log({} === {}); // false

// 2. What is, for each object below, the value of the property number and why?
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5

// 3. Create a class Animal with the attributes name, type and color
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// 4. Create a class Mamal that extends from the Animal class
class Mammal extends Animal {
  sound(sound) {
    return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// 5. Create a farmerCow object
const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));
