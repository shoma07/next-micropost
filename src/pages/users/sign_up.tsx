import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useCsrf } from "../../lib/hooks/useCsrf";
import { SignUpForm, FormData } from "../../components/SignUpForm";

const UsersSignUpPage: NextPage = () => {
  const { token } = useCsrf();
  const onSubmit = async (data: FormData): Promise<void> => {
    await fetch("/api/users/sign_up", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "X-CSRF-Token": String(token) },
    });
  };

  return (
    <div>
      <Head>
        <title>SignIn</title>
        <meta content="sign in page" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <h1>Sign Up</h1>
        <SignUpForm onSubmit={onSubmit} />
      </main>
    </div>
  );
};

export default UsersSignUpPage;
