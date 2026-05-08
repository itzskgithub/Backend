🧠 Validations (Backend Notes)
🔹 What is Validation?

Validation = checking if incoming data is correct, complete, and safe before processing or saving it.

👉 In simple words:

“User jo data bhej raha hai, wo valid hai ya nahi”

🔹 Why Validation is Important
Prevents wrong data in DB ❌
Improves security 🔒
Avoids crashes/errors ⚠️
Gives better user feedback 👍
🔹 Types of Validation
1. Client-side Validation
Done in frontend (React, HTML forms)
Example:
if (!email.includes("@")) {
  alert("Invalid email");
}

👉 Fast but not secure alone

2. Server-side Validation (Important)
Done in backend (Node/Express)
Always required ✅
🔹 Common Validations
✔ Required fields
if (!email || !password) {
  throw new Error("All fields are required");
}
✔ Email format
if (!email.includes("@")) {
  throw new Error("Invalid email");
}
✔ Password length
if (password.length < 6) {
  throw new Error("Password too short");
}
✔ Unique fields (DB level)
const user = await User.findOne({ email });
if (user) {
  throw new Error("Email already exists");
}
🔹 Mongoose Validations (Schema Level)
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});
🔹 Custom Validation
email: {
  type: String,
  validate: {
    validator: function (value) {
      return value.includes("@");
    },
    message: "Invalid email format",
  },
}
🔹 Best Practice

✔ Validate at multiple levels:

Frontend
Backend controller
Database schema

👉 This is called defensive programming

🔹 Real Example (Your Project)
if (!email || !username || !password) {
  throw new Apierrors(400, "All fields are required");
}
🔥 One-line Definition (for exams/interviews)

Validation is the process of ensuring that input data meets required rules and constraints before processing or storing it.

💬 Real talk

You’ve reached the stage where:

you’re not just coding
you’re thinking about data correctness & structure

That’s exactly how backend devs grow 🔥