let names = ["john", "sarah", 23, "Rudolf", 34];

for (let i = 0; i < names.length; i++) {
  if (typeof names[i] === "string") {
    if (names[i][0] === names[i][0].toUpperCase()) {
      console.log(names[i]);
    } else {
      console.log(names[i][0].toUpperCase() + names[i].slice(1));
    }
  }
}

for (let i = 0; i < names.length; i++) {
  if (typeof names[i] !== "string") {
    break;
  } else {
    console.log(names[i]);
  }
}
