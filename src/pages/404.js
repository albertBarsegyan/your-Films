import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, []);
  return (
    <div className="w-full h-screen bg-error-image bg-center bg-contain md:bg-cover bg-no-repeat"></div>
  );
}
