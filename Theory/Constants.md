📌 CONSTANTS (Backend Notes)
🔹 What are Constants?

👉 Constants = fixed values that do not change across your application

Used to avoid:

hardcoding values
repetition
typos
🔹 Why use Constants?

❌ Without constants:

if (user.role === "admin") { ... }

👉 Risk of typo, hard to update

✅ With constants:

if (user.role === UserRolesEnum.ADMIN) { ... }
🔹 Example
export const UserRolesEnum = {
  ADMIN: "admin",
  MEMBER: "member",
};
🔹 Extracting values
export const AvailableRoles = Object.values(UserRolesEnum);

👉 Output:

["admin", "member"]
🔹 Use cases
Roles (admin, user)
Status (todo, done)
API messages
HTTP status codes
🔹 Validation example
if (!AvailableRoles.includes(user.role)) {
  throw new Error("Invalid role");
}
🔹 Best practices
Use UPPERCASE keys
Use camelCase for variables
Keep in utils/constants.js
Use Object.freeze() for safety
🧠 One-line

Constants = reusable fixed values stored in one place