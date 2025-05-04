import React from 'react'
import { db } from '@repo/db/client'

export default async function Home() {
  const users = await db.user.findMany()
  console.log(users)

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
        <li>No more users available</li>
      </ul>
    </div>
  )
}
