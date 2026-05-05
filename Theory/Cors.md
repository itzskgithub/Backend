🌐 What is CORS?

CORS = Cross-Origin Resource Sharing

👉 It’s a browser security rule that controls:

“Can this frontend (website) talk to that backend (server)?”

🧠 First understand “Origin”

An origin = combination of:

protocol (http / https)
domain (localhost, google.com)
port (3000, 5000)
Examples:
http://localhost:3000 ❌ different from http://localhost:5000
https://google.com ❌ different from http://google.com

👉 If anything changes → it’s a different origin

🚫 Why CORS exists?

Without CORS, any website could call your backend and steal data.

Example attack:

You log into your bank → malicious site secretly sends request → gets your data 😬

👉 So browser blocks cross-origin requests by default

⚠️ When do you face CORS error?

When:

frontend (React app) runs on localhost:3000
backend runs on localhost:5000

Then browser says:

❌ “Blocked by CORS policy”

🔓 How CORS works (simple flow)
Frontend sends request
Browser checks: “Is this same origin?”
If not → backend must allow it explicitly

Backend sends headers like:

Access-Control-Allow-Origin: http://localhost:3000

👉 Then browser allows it

🛠️ How to fix CORS (Node.js / Express)
Step 1: Install package
npm install cors
Step 2: Use it in backend
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // allow all origins
🔒 Better (secure way)

Instead of allowing everyone:

app.use(cors({
  origin: "http://localhost:3000"
}));

👉 Only your frontend can access backend

⚡ What is Preflight Request? (important)

For some requests (like POST, PUT), browser first sends:

OPTIONS request

👉 asking:

“Is this allowed?”

Backend must respond with:

Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type

👉 This is called preflight

🧩 Common mistakes beginners make

❌ Thinking CORS is backend error
👉 It’s actually browser security

❌ Trying to fix it in frontend
👉 Must fix in backend

❌ Using cors() blindly
👉 Works, but not safe for production

📦 Where CORS fits in your project

In your structure:

src/
  routes/
  controllers/
  middlewares/

👉 CORS is a middleware

So you can even put it inside:

middlewares/corsMiddleware.js
🧠 One-line memory trick

CORS = Browser asking backend “Are you okay with this request?”

💡 Real dev scenario
React frontend → deployed on Vercel
Backend → running on Render

👉 Different origins → CORS must be configured