const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error during async operation:', err);
      res.status(500).send('Internal Server Error');
    });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      resolve();
    } else {
      reject(new Error('Something went wrong!'));
    }
  });
}