const details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

const param = [];
for (const key in details) {
  if (details.hasOwnProperty(key)) {
    param.push(key);
    param.push(details[key]);
  }
}

console.log(param.join(" "));
