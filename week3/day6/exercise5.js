const family = {
  lastName: "Smith",
  members: ["John", "Jane", "Alex"],
  relations: ["father", "mother", "son"],
};

for (key in family) {
  if (family.hasOwnProperty(key)) {
    console.log(key);
  }
}

for (key in family) {
  if (family.hasOwnProperty(key)) {
    console.log(family[key]);
  }
}
