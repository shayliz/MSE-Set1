// Task 3: fs module methods used in this project (per Node.js official docs
// at https://nodejs.org/api/fs.html):
//   - fs.readFile(path, encoding, callback)   -> asynchronously reads a file
//   - fs.appendFile(path, data, callback)     -> asynchronously appends data
//   - fs.promises.appendFile(path, data)      -> Promise-based version
//
// The snippet below adapts the basic "Reading files with fs.readFile()"
// example from the official Node.js fs documentation
// (https://nodejs.org/api/fs.html#fsreadfilepath-options-callback) to read
// our own tasks.txt file instead of the doc's generic example file.

const fs = require("fs");

fs.readFile("tasks.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading tasks.txt:", err.message);
    return;
  }
  console.log("Current tasks in tasks.txt:");
  console.log(data);
});
// Actual Output:
// Current tasks in tasks.txt:
// Buy groceries
// Finish assignment
// Call the electrician
