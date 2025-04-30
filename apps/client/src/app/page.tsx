import { db } from "@repo/db/client";

export default async function Home() {
  const user = await db.user.findMany();
  console.log(user);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-xl">This is a sample application.</p>
      <ul>
        {user.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
