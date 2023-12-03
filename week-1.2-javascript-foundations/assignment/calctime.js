// Calculate the time it takes between a setTimeout call and the inner function actually running
function calculateTime() {
  const start = Date.now();
  setTimeout(() => {
    const end = Date.now();
    console.log(end - start, "ms");
  }, 1000);
}

calculateTime();

// using performance.now() instead of Date.now() gives a more precise result
function calculateTimePrecise() {
  const start = performance.now();
  setTimeout(() => {
    const end = performance.now();
    console.log(end - start, "ms");
  }, 1000);
}

calculateTimePrecise();
