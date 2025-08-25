"use server";

import dbConnect, { collectionLists } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (payload) => {
  const usersCollection = dbConnect(collectionLists.usersCollection);

  const { email, password } = payload;
  if (!email || !password) {
    return { success: false, error: "Email and password are required" };
  }

  const user = await usersCollection.findOne({ email });

  if (user) {
    return { success: false, error: "User already exists" };
  }

  const encryptedPassword = await bcrypt.hash(password, 10);
  payload.password = encryptedPassword;

  const result = await usersCollection.insertOne(payload);

  if (result.acknowledged && result.insertedId) {
    return { success: true, userId: result.insertedId };
  }

  return { success: false, error: "Registration failed. Try again." };
};
