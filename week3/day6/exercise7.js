const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secretSocietyName = names.reduce((acc, val) => [...acc, val[0]], []);
secretSocietyName.sort();
console.log(secretSocietyName.join(""));
