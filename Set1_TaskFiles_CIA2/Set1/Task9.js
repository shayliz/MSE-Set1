// Task 9: Node Timers & Global Objects
let tasksLoggedSoFar = 3;

setTimeout(() => {
  console.log("Reminder: review your tasks");
}, 5000);

const intervalId = setInterval(() => {
  console.log(`Tasks logged so far: ${tasksLoggedSoFar}`);
}, 3000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Stopped the interval after 15 seconds.");
}, 15000);
