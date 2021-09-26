import type { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import {
  SigninInput,
  SigninInputType,
} from "../../validations/users/signinInput";

export const getUserByEmailAndPassword = async (
  db: PrismaClient,
  input: SigninInputType
) => {
  const { email, password } = SigninInput.parse(input);

  const user = await db.user.findFirst({ where: { email: email } });
  if (!user) {
    return null;
  }

  const authenticated = await bcrypt.compare(password, user.encryptedPassword);

  return authenticated ? user : null;
};
