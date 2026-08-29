// Task 5: Node Process Object, Command Line & Terminal I/O
// Run with: node task5_logger.js "Finish assignment"

const taskDescription = process.argv[2] || "(no task provided)";
console.log("Task received from command line:", taskDescription);

process.stdout.write("Save this task? (y/n): ");

process.stdin.setEncoding("utf8");
process.stdin.once("data", (input) => {
  const answer = input.trim().toLowerCase();
  if (answer === "y") {
    console.log(`Task "${taskDescription}" saved.`);
  } else {
    console.log("Task discarded.");
  }
  process.exit(0);
});

// Actual Output (with "y" entered at the prompt):
// Task received from command line: Finish assignment
// Save this task? (y/n): Task "Finish assignment" saved.
