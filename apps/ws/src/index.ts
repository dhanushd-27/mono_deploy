import { WebSocketServer } from "ws";
import { db } from "@repo/db/client";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  socket.on("message", (message) => {

    async function createUser() {
      const randomId = Math.floor(Math.random() * 10000);
      const name = `user${randomId}`;
      const email = `user${randomId}@example.com`;
      const password = `password${randomId}`;

      const user = await db.user.create({
        data: {
          name,
          email,
          password,
        },
      });

      return user;
    }

    createUser().then((user) => {
      socket.send(`User created: ${user.name}`);
    }).catch((error) => {
      socket.send("Error creating user");
    });
    console.log(`Received message: ${message}`);
    socket.send(`Echo: ${message}`);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });

})