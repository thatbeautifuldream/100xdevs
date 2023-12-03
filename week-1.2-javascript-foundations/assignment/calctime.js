// Calculate the time it takes between a setTimeout call and the inner function actually running
function calculateTime() {
  const start = Date.now();
  setTimeout(() => {
    const end = Date.now();
    console.log(end - start, "ms");
    // in seconds
    console.log((end - start) / 1000, "s");
  }, 1000);
}

calculateTime();
