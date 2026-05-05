🧠 MIDDLEWARES — COMPLETE NOTES (Express.js)
🔹 1. What is Middleware?

A middleware is a function that runs after a request is received but before a response is sent.

👉 It sits in the middle of the request–response cycle.

Client → Middleware → Route Handler → Response
🔹 2. Middleware Function Signature
(req, res, next)
req → incoming request data
res → response object
next → function to pass control to next middleware
🔹 3. Basic Example
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

👉 Without next() → request will hang ❌

🔹 4. Using Middleware with app.use()
✅ Apply globally
app.use(logger);

👉 Runs for every request

✅ Built-in Middleware
app.use(express.json());

👉 Parses JSON → enables req.body

✅ Third-party Middleware
const cors = require("cors");
app.use(cors());

👉 Enables cross-origin requests

🔹 5. Types of Middleware
1️⃣ Application-level Middleware
app.use((req, res, next) => {
  console.log("App-level middleware");
  next();
});
2️⃣ Router-level Middleware
const router = require("express").Router();

router.use((req, res, next) => {
  console.log("Router middleware");
  next();
});
3️⃣ Built-in Middleware
express.json()
express.urlencoded()
4️⃣ Third-party Middleware
cors
morgan
helmet
5️⃣ Error-handling Middleware ⚠️

👉 Special type (has 4 parameters)

(err, req, res, next)

Example:

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
🔹 6. Order of Middleware (VERY IMPORTANT)
app.use(m1);
app.use(m2);

app.get("/", handler);

👉 Flow:

m1 → m2 → handler

❗ If order is wrong → bugs happen

🔹 7. Path-based Middleware
app.use("/api", (req, res, next) => {
  console.log("API middleware");
  next();
});

👉 Runs only for /api/*

🔹 8. Route-level Middleware
app.get("/profile", authMiddleware, (req, res) => {
  res.send("Profile");
});

👉 Runs only for this route

🔹 9. Multiple Middlewares
app.get("/data", m1, m2, m3, (req, res) => {
  res.send("Done");
});

👉 Flow:

m1 → m2 → m3 → handler
🔹 10. Real-world Example (Auth Middleware)
const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  next();
};
🔹 11. Middleware that Ends Request
app.use((req, res) => {
  res.send("Response sent");
});

👉 No next() → stops chain

🔹 12. Middleware vs Controller
Feature	Middleware	Controller
Purpose	Pre-processing	Main logic
Runs before?	Yes	After middleware
Example	Auth, logging, parsing	Business logic
🔹 13. Project Structure
src/
  middlewares/
    authMiddleware.js
    loggerMiddleware.js
    errorMiddleware.js
🔹 14. Custom Middleware Example
// middlewares/logger.js
const logger = (req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
};

module.exports = logger;

Use it:

const logger = require("./middlewares/logger");
app.use(logger);
🔹 15. Error Handling Flow
Error → next(err) → error middleware → response

Example:

app.get("/", (req, res, next) => {
  next(new Error("Something broke"));
});
🔹 16. Async Middleware (Important)
const asyncMiddleware = async (req, res, next) => {
  try {
    // async code
    next();
  } catch (err) {
    next(err);
  }
};
🔹 17. Common Middleware Use Cases
Authentication (JWT)
Authorization (roles)
Logging (request logs)
Validation (input checking)
CORS handling
Rate limiting
Error handling
🔹 18. Middleware Flow (Full Picture)
Request
 ↓
Global Middleware (app.use)
 ↓
Route Middleware
 ↓
Controller
 ↓
Response
🔹 19. One-line Revision

Middleware = functions that process request before it reaches your main logic

🔥 Pro Tips (important for interviews)
Always call next() unless sending response
Order matters more than you think
Use middleware for reusable logic
Keep controllers clean