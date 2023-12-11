/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  var start = Date.now();
  console.log("haulting the js thread for " + seconds + " seconds...");
  while (Date.now() < start + seconds * 1000) {}
  console.log(seconds + " seconds have passed.");
  return;
}

sleep(3);
