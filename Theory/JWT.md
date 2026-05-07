JWT (JSON Web Token) — Complete Notes
What is JWT?

JWT stands for JSON Web Token.
It is a secure way to send information between client and server.

Mostly used for:

Authentication (login system)
Authorization (checking permissions)
Secure data transfer

After login, the server gives the user a token.
The client stores that token and sends it with future requests.

Real Life Flow
Without JWT

Every request:

User sends username/password
Server checks database again and again

This is slow and inefficient.

With JWT
User logs in once
Server creates JWT token
Client stores token
Client sends token in future requests
Server verifies token

No need to login repeatedly.

Structure of JWT

JWT has 3 parts:

HEADER.PAYLOAD.SIGNATURE

Example:

eyJhbGciOiJIUzI1NiIs...
1. Header

Contains metadata about token.

Example:

{
  "alg": "HS256",
  "typ": "JWT"
}

Meaning:

alg → algorithm used
typ → token type
2. Payload

Contains actual data.

Example:

{
  "id": "123",
  "email": "shubham@gmail.com",
  "role": "admin"
}

This data is called claims.

Types of Claims
Public Claims

General info.

{
  "name": "Shubham"
}
Private Claims

Custom app data.

{
  "userId": "123"
}
Registered Claims

Predefined standard claims.

Examples:

Claim	Meaning
exp	Expiration time
iat	Issued at
sub	Subject
iss	Issuer
3. Signature

Most important part.

Created using:

Header + Payload + Secret Key

Example:

HMACSHA256(
  base64UrlEncode(header) +
  "." +
  base64UrlEncode(payload),
  secret
)

This ensures:

Token is not modified
Token is trusted
Important Point

JWT is not encrypted by default.

Anyone can decode:

header
payload

But they cannot modify it because signature will fail.

So NEVER store:

passwords
OTPs
sensitive secrets

inside JWT payload.

JWT Authentication Flow
Step 1 — Login

User sends:

{
  "email": "abc@gmail.com",
  "password": "1234"
}
Step 2 — Server Verifies

Checks database.

If valid:

create token
send token
Step 3 — Token Sent
{
  "token": "jwt_token_here"
}
Step 4 — Client Stores Token

Usually:

localStorage
cookies
sessionStorage
Step 5 — Client Sends Token

Inside headers:

Authorization: Bearer token_here
Step 6 — Server Verifies Token

If valid:

allow access

If invalid:

reject request
JWT in Node.js

Install package:

npm install jsonwebtoken
Creating JWT
import jwt from "jsonwebtoken";

const token = jwt.sign(
  {
    id: user._id,
    email: user.email
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1d"
  }
);

console.log(token);
Explanation
jwt.sign()

Used to create token.

Parameters:

Parameter	Meaning
payload	data
secret key	private key
options	expiry etc
Verifying JWT
const decoded = jwt.verify(
  token,
  process.env.JWT_SECRET
);

console.log(decoded);

If token modified:

verification fails
Middleware Example

Very important in backend.

import jwt from "jsonwebtoken";

const verifyJWT = (req, res, next) => {
  try {
    const authHeader =
      req.headers.authorization;

    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "No token" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Invalid token" });
  }
};

export default verifyJWT;
Why split(" ")[1]?

Header looks like:

Bearer eyhshshsh

After split:

["Bearer", "eyhshshsh"]

Index [1] gives token.

Protected Route Example
router.get(
  "/profile",
  verifyJWT,
  getProfile
);

Flow:

Middleware runs
Token checked
If valid → controller runs
JWT Secret

Example:

JWT_SECRET=mySuperSecretKey

Used for:

signing token
verifying token

Never expose it publicly.

Token Expiry

Example:

expiresIn: "1h"

Examples:

"1h"
"7d"
"30m"

Why expiry important?

reduces hacking risk
improves security
Access Token vs Refresh Token
Access Token

Short-lived token.

Example:

15 min
1 hour

Used for:

API access
Refresh Token

Long-lived token.

Example:

7 days
30 days

Used to generate new access tokens.

Flow
Access token expires
Client sends refresh token
Server generates new access token

This avoids frequent login.

JWT vs Session Authentication
JWT	Session
Stateless	Stateful
Stored on client	Stored on server
Faster scaling	More server memory
Good for APIs	Traditional apps
Advantages of JWT
Stateless

Server doesn't store login sessions.

Fast

No DB check every request.

Cross-platform

Works with:

web
mobile
APIs
Scalable

Great for large applications.

Disadvantages of JWT
Difficult Logout

Token remains valid until expiry.

Bigger Size

Larger than session IDs.

Security Risk

If token stolen:

attacker can use it
Best Practices
Use HTTPS

Never send JWT over HTTP.

Keep Expiry Short

Example:

15 min access token
Use Refresh Tokens

Improves UX + security.

Never Store Sensitive Data

JWT payload is decodable.

Store Securely

Prefer:

HttpOnly cookies

Avoid:

insecure localStorage in sensitive apps
Common Errors
jwt malformed

Invalid token format.

invalid signature

Wrong secret key.

jwt expired

Token expiry completed.

Complete Login Example
Controller
import jwt from "jsonwebtoken";

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // check user

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(404)
      .json({ message: "User not found" });
  }

  // password compare skipped

  const token = jwt.sign(
    {
      id: user._id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d"
    }
  );

  return res.json({
    token
  });
};
Authentication Middleware Flow
Request
   ↓
Middleware
   ↓
Extract Token
   ↓
Verify Token
   ↓
Attach User to req
   ↓
next()
   ↓
Controller
Important Interview Questions
Why JWT used?

For authentication and authorization.

Difference between authentication and authorization?
Authentication

Who are you?

Authorization

What can you access?

Why JWT stateless?

Because server stores no session data.

Can JWT be hacked?

If:

secret leaked
token stolen
insecure storage

then yes.

Why use Bearer token?

Standard way to send tokens in headers.

One-Line Summary

JWT is a compact secure token system used to authenticate users without storing session data on the server.