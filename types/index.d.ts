type CustomNextApiRequest = import("next").NextApiRequest & {
  csrfToken: () => string;
  session: import("express-session").Session & {
    userId?: number;
  };
  db: import("@prisma/client").PrismaClient;
  memolizedCurrentUser?: {
    loaded: boolean;
    data: import("@prisma/client").User | null;
  };
  currentUser: () => Promise<import("@prisma/client").User | null>;
  authenticate: () => Promise<void>;
};

type GenericResponse = Readonly<{
  code: string;
  message: string;
}>;

type ErrorResponse = GenericResponse;

type GetCsrfResponse = Readonly<{
  token: string;
}>;

type GetUserResponse = Readonly<{
  email: string;
}>;

type GetPostsResponse = Readonly<{
  posts: ReadonlyArray<import("@prisma/client").Post>;
}>;
