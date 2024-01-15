"use server";

import { signIn } from "@/auth";
import { StatusType } from "@/lib/types";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import { z } from "zod";

export default async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);
  const errorStatus: StatusType = {
    status: "error",
    message: "Invalid fields",
  };

  const successStatus: StatusType = {
    status: "success",
    message: "Sign in successful",
  };

  if (!validatedFields.success) {
    return errorStatus;
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return successStatus;
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { ...errorStatus, message: "Invalid credentials" };
        default:
          return { ...errorStatus, message: "Something went wrong" };
      }
    }
    throw error;
  }
}
