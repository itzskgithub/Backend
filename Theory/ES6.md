🧠 ES6 (ECMAScript 2015)
🔹 What is ES6?

ES6 = 6th version of JavaScript (released in 2015)

👉 It introduced modern features that make JS:

cleaner ✨
shorter ✂️
more powerful 💪
🔹 Why ES6 is Important
Used in modern JS (Node, React, etc.)
Makes code readable
Reduces boilerplate code
🔥 Key Features of ES6
1. let and const
❌ Old:
var name = "Shubham";
✅ ES6:
let age = 20;      // can change
const pi = 3.14;   // cannot change
2. Arrow Functions (=>)
❌ Old:
function add(a, b) {
  return a + b;
}
✅ ES6:
const add = (a, b) => a + b;
3. Template Literals
❌ Old:
"Hello " + name
✅ ES6:
`Hello ${name}`
4. Destructuring
const user = { name: "Shubham", age: 20 };

const { name, age } = user;

👉 You already used this:

const { email } = req.body;
5. Spread Operator (...)
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
6. Rest Operator
const sum = (...numbers) => {
  return numbers.reduce((a, b) => a + b);
};
7. Default Parameters
const greet = (name = "Guest") => {
  return `Hello ${name}`;
};
8. Modules (import/export)
// export
export const name = "Shubham";

// import
import { name } from "./file.js";

👉 You’re already using this in backend ✅

9. Classes
class User {
  constructor(name) {
    this.name = name;
  }
}
10. Promises
const promise = new Promise((resolve, reject) => {
  resolve("Done");
});
🧠 One-line Definition

ES6 is a major update to JavaScript that introduced modern syntax and features to write cleaner and more efficient code.

💬 Real talk

You’re already using ES6 without realizing:

import/export ✅
async/await (ES7 but built on ES6 concepts) ✅
destructuring ✅

👉 Means you’re already in modern JS zone 🔥