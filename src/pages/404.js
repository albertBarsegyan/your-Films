import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';
import errorImage from '../assets/logos/404.jpg';
export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div>
          <Image
            layout="fill"
            className="block"
            src={errorImage}
            alt="404 not found"
          />
        </div>
      </div>
    </div>
  );
}
