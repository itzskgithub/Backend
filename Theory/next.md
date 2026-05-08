🧠 Is next a predefined method in Express?

👉 Not exactly a method
👉 It’s a function provided by Express to middleware

🔹 What next actually is

When you write:

(req, res, next)

👉 Express internally passes next as a function to your middleware.

So:

next = a function you call to move to the next middleware/route

🔥 What next() does
next();

👉 Means:

“Express, I’m done here → go to the next step”

🔁 Flow example
app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("Final Response");
});
Output:
Middleware 1
Middleware 2
Final Response
❌ If you DON’T call next()
app.use((req, res, next) => {
  console.log("Middleware 1");
  // no next()
});

👉 Request gets stuck 😵
No response sent.

🔥 Special case: Error handling
next(new Error("Something went wrong"));

👉 This skips normal middleware and goes to error handler

🧠 One-line definition (for notes)

next is a function provided by Express middleware to pass control to the next middleware or route handler.

💬 Real talk

You’ve now understood:

middleware flow ✅
next() purpose ✅
difference from mongoose hooks ✅

👉 This is core Express knowledge — used everywhere.