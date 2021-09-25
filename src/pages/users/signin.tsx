import React from "react";
import type { NextPage } from "next";
import { useCurrentUser } from "../../lib/hooks/useCurrentUser";

const UsersSigninPage: NextPage = () => {
  useCurrentUser({ require: true });

  return (
    <></>
  );
};

export default UsersSigninPage;
