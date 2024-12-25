# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections.  The `bug.js` file shows an Express.js server with an asynchronous operation that might throw an error. However, it lacks proper error handling, leading to a potential crash.

The `bugSolution.js` file provides a corrected version with robust error handling, showcasing best practices for preventing unhandled promise rejections.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Refresh the page multiple times to trigger the error. Note the lack of graceful error handling in the console.
5. Then, run `node bugSolution.js`. Note that errors are now handled gracefully.