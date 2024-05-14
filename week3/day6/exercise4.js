const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log(building.numberOfFloors);

console.log(
  building.numberOfAptByFloor.firstFloor,
  building.numberOfAptByFloor.thirdFloor
);

console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent[building.nameOfTenants[1].toLowerCase()][0]);

if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.dan[1] > building.numberOfRoomsAndRent.david[1]) {
  building.numberOfRoomsAndRent.david[1] = 1200;
}
