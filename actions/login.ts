"use server";

import { StatusType } from "@/lib/types";
import { LoginSchema } from "@/schemas";
import { z } from "zod";

export default async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  return !validatedFields.success
    ? ({ status: "error", message: "Invalid fields" } as StatusType)
    : ({ status: "success", message: "Login success" } as StatusType);
}
