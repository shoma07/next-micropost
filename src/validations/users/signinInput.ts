import * as z from "zod";

export const SigninInput = z.object({
  email: z.string().email(),
  password: z.string().min(10).max(100),
});

export type SigninInputType = z.infer<typeof SigninInput>;
