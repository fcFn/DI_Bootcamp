// Create a stuctured html file linked to a JS file

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

const user = {
  username: {
    name: "foo"
  },
  password: "password",
};

const database = [user];

const newsfeed = [
  {
    username: user.username,
    timeline: "timeline1",
  },
  {
    username: user.username,
    timeline: "timeline2",
  },
  {
    username: user.username,
    timeline: "timeline3",
  },
];
console.log(newsfeed)

user.username.name = 'newUser';

console.log(newsfeed)
