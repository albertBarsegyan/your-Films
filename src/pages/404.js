import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';
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
