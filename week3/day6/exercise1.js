const people = ["Greg", "Mary", "Devon", "James"];

people.shift();

people[2] = "Jason";

people.push("Peter");

people.indexOf("Mary");

const peopleCopy = people.slice(1, 3);

console.log(people.indexOf("Foo"));

const last = people[people.length - 1];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
  if (people[i] === "Devon") {
    break;
  }
  console.log(people[i]);
}
