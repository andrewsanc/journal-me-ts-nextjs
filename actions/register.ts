"use server";

import { StatusType } from "@/lib/types";
import { RegisterSchema } from "@/schemas";
import { z } from "zod";

export default async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);

  return !validatedFields.success
    ? ({ status: "error", message: "Invalid fields" } as StatusType)
    : ({ status: "success", message: "Login success" } as StatusType);
}
