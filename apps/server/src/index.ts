import express from "express";
import { db } from "@repo/db/client";

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const users = await db.user.findMany();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/user", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await db.user.create({
      data: {
        name: username,
        email: email,
        password,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// This is a simple Express server that listens on a specified port and responds with "Hello World!" when accessed at the root URL.
