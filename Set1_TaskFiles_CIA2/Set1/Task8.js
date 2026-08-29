// Task 8: Asynchronous Programming & Callback Functions
const fs = require("fs");

function saveTaskCallback(task, callback) {
  fs.appendFile("tasks.txt", task + "\n", (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
}

saveTaskCallback("Water the plants", (err) => {
  if (err) {
    console.log("Failed to save task:", err.message);
  } else {
    console.log("Task saved successfully via callback.");
  }
});
