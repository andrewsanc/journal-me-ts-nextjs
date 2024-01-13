"use server";

import bcrypt from "bcrypt";
import { StatusType } from "@/lib/types";
import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export default async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);
  const errorStatus: StatusType = {
    status: "error",
    message: "Invalid fields",
  };
  const successStatus: StatusType = {
    status: "success",
    message: "Registered successfully",
  };

  if (!validatedFields.success) {
    return errorStatus;
  }

  const { email, password, firstName, lastName } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    const emailInUser: StatusType = {
      status: "error",
      message: "Email already in use",
    };
    return emailInUser;
  }

  await db.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  // TODO: send verification token email

  return !validatedFields.success ? errorStatus : successStatus;
}
