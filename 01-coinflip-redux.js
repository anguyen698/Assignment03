let coinFlip;
let numIterations = prompt("Please enter a number (of iterations):");

numIterations = parseFloat(numIterations);
for (let iteration = 0; iteration < numIterations; iteration++) {
  coinFlip = Math.round(Math.random());
  if (coinFlip) {
    window.console.log("Tails");
  } else {
    window.console.log("Heads");
  }
}
