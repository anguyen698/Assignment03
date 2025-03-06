let multipleOfThreeWord = "Marco!";
let multipleOfFiveWord = "Polo!";
for (let i = 1; i < 100; i++) {
  let multipleOfThree = i % 3 === 0;
  let multipleOfFive = i % 5 === 0;
  if (multipleOfThree && multipleOfFive) {
    window.console.log(multipleOfThreeWord + " " + multipleOfFiveWord);
  } else if (multipleOfFive) {
    window.console.log(multipleOfFiveWord);
  } else if (multipleOfThree) {
    window.console.log(multipleOfThreeWord);
  } else {
    window.console.log(i);
  }
}
