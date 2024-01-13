"use server";

import bcrypt from "bcrypt";
import { StatusType } from "@/lib/types";
import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export default async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, firstName, lastName } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use" };
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

  return !validatedFields.success
    ? ({ status: "error", message: "Invalid fields" } as StatusType)
    : ({ status: "success", message: "Register successful" } as StatusType);
}
