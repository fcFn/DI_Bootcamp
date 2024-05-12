const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeriesLength = myWatchedSeries.length;

const myWatchedSeriesSentence = myWatchedSeries.join(", ");

console.log(
  `I have watched ${myWatchedSeriesLength} series: ${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}.`
);

myWatchedSeries[2] = "friends";

myWatchedSeries.push("Neon Genesis Evangelion".toLowerCase());

myWatchedSeries.unshift("Firefly".toLowerCase());

myWatchedSeries.splice(1, 1);

console.log(myWatchedSeries[1][2]);

console.log(myWatchedSeries);
