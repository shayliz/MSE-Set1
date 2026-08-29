/*
 * How V8 and libuv work together to run this script:
 * V8 is the JavaScript engine (also used in Chrome) that parses and
 * executes our JavaScript code, and manages memory/objects on the heap.
 * On its own, V8 has no idea how to do things like read files or talk to
 * the network - it only understands the JavaScript language itself.
 * libuv is a C library that Node.js plugs in underneath V8 to provide
 * those capabilities: it manages the event loop, a thread pool for
 * expensive operations (like file I/O), and hands results back to V8
 * once they're ready. So when we call fs.readFile(), V8 hands the request
 * off to libuv, keeps running the rest of our synchronous code, and libuv
 * calls back into V8 with the file's contents once the OS has delivered
 * them - this is what makes Node.js non-blocking.
 */

const fs = require("fs");

console.log("Task Logger Started");

fs.readFile("tasks.txt", "utf8", (err, data) => {
  if (err) {
    console.log("File read failed:", err.message);
    return;
  }
  console.log("File contents loaded:", JSON.stringify(data));
});

// This line runs immediately, before the file's contents are logged above,
// proving fs.readFile does not block the rest of the script.
console.log("This prints before the file contents - proving non-blocking behaviour");
// Actual Output:
// Task Logger Started
// This prints before the file contents - proving non-blocking behaviour
// File contents loaded: ""

