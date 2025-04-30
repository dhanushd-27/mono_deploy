import { db } from '@repo/db/client'
import React from 'react'
import { getUsers } from './actions/getUsers'

export default async function Home() {
  const user = await getUsers();
  console.log(user);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {/* <div>
        {user.map((u) => (
          <div key={u.id}>
            <p>{u.name}</p>
            <p>{u.password}</p>
          </div>
        ))}
      </div> */}
    </div>
  )
}
