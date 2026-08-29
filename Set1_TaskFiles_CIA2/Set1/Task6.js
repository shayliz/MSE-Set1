// Task 6: Node Packages - NodeMon & Monitoring Applications
//
// Setup steps performed:
//   1. Installed nodemon as a dev dependency:
//        npm install --save-dev nodemon
//
//   2. Added this script to package.json:
//        "scripts": {
//          "dev": "nodemon logger.js"
//        }
//
//   3. Ran it with: npm run dev
//
// Demonstrated auto-restart by editing and saving logger.js while nodemon
// was running. Actual captured output:
//
//   [nodemon] 3.1.14
//   [nodemon] to restart at any time, enter `rs`
//   [nodemon] watching path(s): *.*
//   [nodemon] watching extensions: js,mjs,cjs,json
//   [nodemon] starting `node logger.js`
//   [8/28/2026, 8:42:19 AM] Task Logger Started
//   [8/28/2026, 8:42:19 AM] Buy groceries
//   [nodemon] clean exit - waiting for changes before restart
//   [nodemon] restarting due to changes...
//   [nodemon] starting `node logger.js`
//   [8/28/2026, 8:42:20 AM] Task Logger Started
//   [8/28/2026, 8:42:20 AM] Buy groceries
//   [nodemon] clean exit - waiting for changes before restart
//
// nodemon restarted the app automatically the moment the file was saved,
// with no manual Ctrl+C / re-run needed - see package.json in this repo
// for the resulting "dev" script and the nodemon devDependency entry.
