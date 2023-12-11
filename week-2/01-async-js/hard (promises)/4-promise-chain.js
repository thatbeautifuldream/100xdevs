/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1 second has passed.");
      resolve();
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2 seconds have passed.");
      resolve();
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3 seconds have passed.");
      resolve();
    }, 3000);
  });
}

function calculateTime() {
  var start = Date.now();
  waitOneSecond()
    .then(() => waitTwoSecond())
    .then(() => waitThreeSecond())
    .then(() => {
      console.log(
        "All promises have resolved after " +
          (Date.now() - start) / 1000 +
          " seconds."
      );
    });
}

calculateTime();
