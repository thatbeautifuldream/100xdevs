// Create a terminal clock (HH:MM:SS)

function clock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  console.log(`${hours}:${minutes}:${seconds}`);
}

// To run the function every second we can utilise the setInterval() method.
// the setInterval() method takes two arguments, a function and a time in milliseconds.
// It runs the function every time the time specified in milliseconds has passed.

setInterval(clock, 1000);
