import { db } from '@repo/db/client';
import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3003;
const HOST = process.env.HOST || 'localhost';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/data', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const data = await db.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  res.json({ message: 'Data received', data });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
// Export the app for testing