function calculateTip() {
  const amount = promt("Enter the amount");
  let tip = 0;
  if (amount < 50) {
    tip = amount * 0.2;
  } else if (amount >= 50 && amount <= 200) {
    tip = amount * 0.15;
  } else {
    tip = amount * 0.1;
  }
  console.log(amount + tip);
}

calculateTip();
