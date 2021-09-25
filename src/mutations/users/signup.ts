import bcrypt from "bcrypt";
import type { PrismaClient } from "@prisma/client";
import {
  SignupInput,
  SignupInputType,
} from "../../validations/users/signupInput";

export const signup = async (db: PrismaClient, input: SignupInputType) => {
  const { email, password } = SignupInput.parse(input);

  const encryptedPassword = await bcrypt.hash(password, 10);
  const user = await db.user.create({
    data: { email: email.toLowerCase(), encryptedPassword },
    select: { id: true, email: true },
  });

  return user;
};
