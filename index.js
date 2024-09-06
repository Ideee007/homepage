const express = require('express');
const port = 3001
const app = express();

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.listen(port, () => {
    console.log(`Server is runninng on port http://localhost:${port}`);
});

// const number = (a, b);

// function number(a, b) {
//     const add = a + b;
//     return add
// }

// function number(a, b) {
//     const subtract = a - b;
//     return subtract
// }

// function number(a, b) {
//     const divide = a / b;
//     return divide
// }

// function number(a, b) {
//     const multiply = a * b;
//     return multiply
// }


// console.log(number(5, 3));