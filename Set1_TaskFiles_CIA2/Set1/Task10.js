// Task 10: JavaScript Promises - Introduction, Detail & Revisited
const fs = require("fs");

function saveTaskPromise(task) {
  return fs.promises.appendFile("tasks.txt", task + "\n");
}

saveTaskPromise("Read a chapter of a book")
  .then(() => {
    console.log("Task saved successfully via Promise.");
  })
  .catch((err) => {
    console.log("Failed to save task:", err.message);
  });
