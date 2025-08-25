"use server";

import dbConnect, { collectionLists } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
  try {
    const { email, password } = payload;

    const usersCollection = dbConnect(collectionLists.usersCollection);
    const user = await usersCollection.findOne({ email });

    if (!user) {
      return null; // Return null instead of object for consistency
    }

    const isPasswordOk = await bcrypt.compare(password, user.password); // Fixed order and added await
    if (!isPasswordOk) return null;

    // Return only necessary user data, not the entire MongoDB document
    return {
      id: user._id?.toString(),
      email: user.email,
      name: user.name,
      // Add other necessary fields
    };
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};
