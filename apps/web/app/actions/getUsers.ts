"use server"
import { db } from "@repo/db/client";

export async function getUsers() {
  const users = await db.user.findMany();
  return users;
}