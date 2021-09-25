import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

type HookArgs = Readonly<{
  require: boolean;
}>;

type HookReturn = Readonly<{
  data?: GetUserResponse;
  error?: ErrorResponse;
}>;

export const useCurrentUser = (args: HookArgs): HookReturn => {
  const router = useRouter();
  const { require } = args;
  const { data, error } = useSWR('/api/users/me');

  useEffect(() => {
    if (require && error) {
      router.push('/');
    }
  }, [require, error]);

  return { data, error };
};
