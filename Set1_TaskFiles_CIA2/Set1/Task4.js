// Task 4: Node.js REPL Introduction
//
// In the Node.js REPL (started by typing `node` in the terminal), the
// following snippet was tested interactively first:
//
//   > const now = new Date();
//   > console.log(now.toLocaleString());
//   8/28/2026, 8:41:50 AM
//
// Once confirmed working in the REPL, it was moved here into logger.js so
// every logged task is timestamped.

function logTask(taskDescription) {
  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] ${taskDescription}`);
}

logTask("Task Logger Started");
logTask("Buy groceries");
// Actual Output:
// [8/28/2026, 8:41:56 AM] Task Logger Started
// [8/28/2026, 8:41:56 AM] Buy groceries
