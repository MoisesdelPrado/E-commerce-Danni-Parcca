import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function Index() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push('./../register/login');
    },
  });
  
  if (status === "loading") {
    return "Redirecting to Login...";
  };
  
  return "User is logged in";
};
