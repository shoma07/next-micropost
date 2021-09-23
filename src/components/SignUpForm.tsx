import React from "react";
import { useForm } from "react-hook-form";

export type FormData = Readonly<{
  email: string;
  password: string;
}>;

type Props = Readonly<{
  onSubmit: (data: FormData) => void;
}>;

export const SignUpForm: React.FC<Props> = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email: </label>
      <input {...register("email", { required: true })} id="email" />
      <br />
      <label htmlFor="signInFormPassword">Password: </label>
      <input
        id="signInFormPassword"
        type="password"
        {...register("password", { required: true })}
      />
      <br />
      <input type="submit" />
    </form>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};
