// Create a terminal clock (HH:MM:SS)

const clock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  console.log(`${hours}:${minutes}:${seconds}`);
};

setInterval(clock, 1000);
