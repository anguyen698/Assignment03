let coinFlip;

do {
  coinFlip = Math.round(Math.random());
  if (coinFlip == 1) {
    window.console.log("Tails");
  } else {
    window.console.log("Heads");
  }
} while (coinFlip != 1);

