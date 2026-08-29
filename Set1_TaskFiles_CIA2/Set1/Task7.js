// Task 7: Debugging Node Programs & Debugging Techniques

// ---------- BUGGY VERSION (before fix) ----------
// function logTask(taskDescription) {
//   const timestamp = new Date().toLocaleString();
//   console.log(`[${timestmap}] ${taskDescription}`); // typo: 'timestmap'
// }
// logTask("Task Logger Started");
//
// Running `node Task7.js` with the buggy version above threw this real error:
//   ReferenceError: timestmap is not defined
//       at logTask (task7_buggy.js:4:19)

// ---------- FIXED VERSION (after fix) ----------
function logTask(taskDescription) {
  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] ${taskDescription}`); // fixed the typo
}

logTask("Task Logger Started");

// Actual Output (after fix):
// [8/28/2026, 8:42:35 AM] Task Logger Started

// How the bug was found: Node's own error trace immediately named the
// undefined variable and the exact line (4:19), which was enough to spot
// the typo without needing the full inspector. For a bug that doesn't
// throw a clear error, the next step would be `node --inspect` together
// with Chrome DevTools (chrome://inspect) or the built-in VS Code
// debugger, to set breakpoints and step through line by line.
