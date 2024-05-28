// The version where the userNumber is used for the amount that is subtracted from
// 99 (becuase the spec is unclear)
// let userNumber = parseInt(prompt("Enter a number: "), 10);

// for (let i = 99; i >= 0; i -= userNumber++) {
//   if (i > userNumber) {
//     console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
//     console.log(
//       `Take ${userNumber} down and pass ${
//         userNumber > 1 ? "them" : "it"
//       } around, ${i - userNumber} bottles of beer on the wall.\n`
//     );
//   } else if (i === userNumber) {
//     console.log(
//       `${i} bottle${
//         i > 1 ? "s" : ""
//       } of beer on the wall, ${i} bottle${i} bottle${i > 1 ? "s" : ""} of beer.`
//     );
//     console.log(
//       `Take ${userNumber} down and pass ${
//         userNumber > 1 ? "them" : "it"
//       } around, no more bottles of beer on the wall.\n`
//     );
//     break;
//   } else if (i < userNumber) {
//     console.log(`${i} bottle${
//       i > 1 ? "s" : ""
//     } of beer on the wall, ${i} bottle${i > 1 ? "s" : ""} of beer.`);
//     console.log(
//       `Take ${i} down and pass ${
//         i > 1 ? "them" : "it"
//       } around, no more bottles of beer on the wall.\n`
//     );
//   } else {
//     console.log(
//       `No more bottles of beer on the wall, no more bottles of beer.`
//     );
//   }
// }

// The version that instead starts with the number of bottles specified by
// the user
let userNumber = parseInt(prompt("Enter a number: "), 10);
let decrement = 1;

for (let i = userNumber; i >= 0; i -= decrement) {
  decrement++;
  if (i >= decrement) {
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
    console.log(
      `Take ${decrement} down and pass it around, ${
        i - decrement > 0 ? i - decrement : "no more"
      } bottle${i - decrement > 1 ? "" : "s"} of beer on the wall.\n`
    );
  } else if ((i === 1 || i < decrement) && i > 0) {
    const bottle = i === 1 ? "bottle" : "bottles";
    console.log(`${i} ${bottle} of beer on the wall, ${i} ${bottle} of beer.`);
    console.log(
      `Take ${i} down and pass it around, no more bottles of beer on the wall.\n`
    );
  } else {
    console.log(
      `No more bottles of beer on the wall, no more bottles of beer.`
    );
  }
}
