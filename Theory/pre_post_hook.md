🧠 What are pre hooks and post hooks

In Mongoose, hooks are also called middleware.

👉 They let you run code:

before something happens → pre
after something happens → post
🔁 Simple idea
Action (save/update/delete)

⬅️ pre hook runs BEFORE  
➡️ post hook runs AFTER
🔥 Example (super relevant: password hashing)
✅ Pre Hook (before saving)
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

👉 Runs before data is saved to DB

💡 Use case:

Hash password
Validate data
Modify fields
🔍 Post Hook (after saving)
userSchema.post("save", function (doc) {
  console.log("User saved:", doc.email);
});

👉 Runs after data is saved

💡 Use case:

Logging
Sending email
Triggering side effects
⚖️ Difference (clear)
Feature	Pre Hook	Post Hook
Runs	Before action	After action
Can modify data?	✅ Yes	❌ No (too late)
Use case	Hashing, validation	Logging, notifications
🧩 Common hook types

You can attach hooks to:

save
find
findOne
updateOne
deleteOne
⚠️ Very important gotcha

👉 In pre("save"):

function () { ... }

NOT:

() => { ... } ❌

Because:
👉 Arrow functions don’t have this

And you need:

this.password
🔥 Real-world flow (your project)
🧩 Register API
User sends password
pre("save") runs → hashes password
Data saved in DB
post("save") runs → maybe log/send email
💡 One-line memory trick

👉 Pre = prepare data
👉 Post = react to data

🎯 Where this helps you
Cleaner controllers
Automatic logic (less manual work)
Production-level backend patterns