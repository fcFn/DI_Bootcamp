function hotelCost(nights) {

  return nights * 140;
}
function planeRideCost(destination) {
  switch (destination.toLowerCase()) {
    case "london":
      return 183;
    case "paris":
      return 220;
    default:
      return 300;
  }
}

function rentalCarCost(days) {
  let cost = days * 40;
  if (days > 10) {
    cost -= cost * 0.05;
  }
  return cost;
}

function totalVacationCost() {
  let nights
  let days
  let destination
  do {
    nights = parseInt(prompt("How many nights are you staying?"));
  } while (isNaN(nights));
  do {
    destination = prompt("Where are you going?");
  } while (destination === null && destination === "");
  do {
    days = parseInt(prompt("How many days are you renting a car?"));
  } while (isNaN(days));

  let total = hotelCost(nights) + planeRideCost(destination) + rentalCarCost(days);
  return total;
}

// NB: This makes the Live Preview hang for some reason (but it will still work
// if the document is served to a browser via the Live Preview).
alert(`The total cost of your vacation is $${totalVacationCost()}`)
