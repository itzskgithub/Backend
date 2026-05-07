import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then((result) => {
    app.listen(port, () => {
      console.log(
        `Example is listening on the port : http://localhost:${port}`,
      );
    });
  })
  .catch((err) => {
    console.error("Not Connected to DB", err);
  });
