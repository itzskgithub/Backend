📌 ORM (Object Relational Mapping) — Notes
🔹 What is ORM?

👉 ORM = a tool that lets you interact with a database using code instead of SQL

🔁 Without ORM ❌
SELECT * FROM users WHERE id = 1;
✅ With ORM
User.findById(1);

👉 Much easier and cleaner

🔹 Full form

ORM = Object Relational Mapping

Object → JavaScript object
Relational → database tables
Mapping → connects both
🔹 How ORM works
Database Table	JS Object
rows	objects
columns	properties
🔹 Example

Database table:

users
id | name

ORM:

const user = {
  id: 1,
  name: "Shubham"
};
🔹 Popular ORMs
MongoDB → Mongoose
SQL → Prisma, Sequelize, TypeORM
🔹 Example (Mongoose)
const user = await User.findById(id);
🔹 Benefits
No need to write SQL
Cleaner code
Easy database operations
Faster development
🔹 Drawbacks
Less control over queries
Can be slower for complex queries
🔹 When to use ORM?

✅ Most backend apps
❌ Avoid when:

performance-critical queries
very complex SQL needed
🔹 ORM vs Raw SQL
Feature	ORM	SQL
Ease	Easy	Harder
Control	Less	Full
Speed	Medium	High
🧠 One-line

ORM = use JavaScript to talk to database instead of SQL

🔥 Final Quick Revision
Constants → fixed reusable values
ORM → interact with DB using code instead of SQL