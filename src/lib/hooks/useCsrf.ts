import { useState, useEffect } from "react";

type HookReturn = Readonly<{
  token?: string;
  error?: ErrorResponse;
}>;

export const useCsrf = (): HookReturn => {
  const [token, setToken] = useState<string | undefined>(undefined);
  const [error, setError] = useState<ErrorResponse | undefined>(undefined);

  useEffect(() => {
    (async (): Promise<void> => {
      fetch("/api/csrf", { method: "GET" })
        /* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */
        .then((response) => response.json())
        .then((data: GetCsrfResponse | ErrorResponse) => {
          if ("error" in data) {
            setError(data);
          }
          if ("token" in data) {
            setToken(data.token);
          }
        });
    })();
  }, []);

  return { token, error };
};
