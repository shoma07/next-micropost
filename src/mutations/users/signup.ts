import bcrypt from "bcrypt";
import { db } from "../../lib/db";
import {
  SignupInput,
  SignupInputType,
} from "../../validations/users/signupInput";

export const signup = async (input: SignupInputType) => {
  // This throws an error if input is invalid
  const { email, password } = SignupInput.parse(input);

  const encryptedPassword = await bcrypt.hash(password, 10);
  const user = await db.user.create({
    data: { email: email.toLowerCase(), encryptedPassword },
    select: { id: true, email: true },
  });

  // await session.create({ userId: user.id });
  console.log(user);

  return user;
};
