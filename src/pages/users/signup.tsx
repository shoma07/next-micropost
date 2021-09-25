import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useCsrf } from "../../lib/hooks/useCsrf";
import { SignupForm, FormData } from "../../components/SignupForm";

const UsersSignupPage: NextPage = () => {
  const { token } = useCsrf();
  const onSubmit = async (data: FormData): Promise<void> => {
    await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": String(token),
      },
    });
  };

  return (
    <div>
      <Head>
        <title>SignUp</title>
        <meta content="sign in page" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <h1>Sign Up</h1>
        <SignupForm onSubmit={onSubmit} />
      </main>
    </div>
  );
};

export default UsersSignupPage;
