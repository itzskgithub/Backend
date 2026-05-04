🔹 What is Prettier?

Prettier is a code formatter

👉 It automatically:

fixes indentation
adds/removes spaces
formats quotes
aligns code

So instead of arguing:

“tabs vs spaces”, “single vs double quotes”

Prettier just says:

“I’ll handle it. You focus on logic.”

🔹 Why you should use it (seriously)

Without Prettier:

const  name ="Shubham"
function test( ){console.log(name)}

With Prettier:

const name = "Shubham";

function test() {
  console.log(name);
}

👉 Cleaner
👉 Consistent
👉 Easier to read
👉 Looks professional on GitHub

🔹 How to install

Inside your project:

npm install --save-dev prettier
🔹 Basic usage

Format a file:

npx prettier --write index.js

Format whole project:

npx prettier --write .
🔹 Prettier config (important)

Create a file:

.prettierrc

Example config:

{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
🔹 Ignore files

Create:

.prettierignore

Add:

node_modules
dist
build
🔹 VS Code setup (best way)

Install extension:
👉 Prettier – Code formatter

Then enable:

Format on Save ✅

Now every time you press Ctrl + S, code auto-formats 🔥

🔹 Prettier vs ESLint (important difference)
Tool	Purpose
Prettier	Formatting (looks)
ESLint	Code quality (errors, bad practices)

👉 They are often used together

🔹 Real-world setup (what pros do)
npm install --save-dev prettier eslint

Then:

ESLint → catches mistakes
Prettier → formats code
🔹 Common rules you’ll see
semi: true → adds ;
singleQuote: true → 'hello' instead of "hello"
tabWidth: 2 → 2 spaces
printWidth: 80 → line length limit
🔥 Pro tip (this will impress recruiters)

Add this in package.json:

"scripts": {
  "format": "prettier --write ."
}

Now run:

npm run format
⚠️ One mistake beginners make

They install Prettier but:
❌ don’t configure it
❌ don’t enable format on save

👉 Then it feels useless

🚀 When you should use it

Always.

React projects ✅
Node backend ✅
Even small practice code ✅
🧠 Simple way to remember

Prettier = automatic code cleanup