import CommonButton from '../CommonButton';
import Link from 'next/link';

export default function LogOut() {
  const handleLogOut = () => {
    localStorage.setItem('loggedUser', JSON.stringify({}));
  };
  return (
    <div>
      <Link href="/" passHref>
        <CommonButton
          onClick={() => handleLogOut()}
          buttonInnerText="Log out"
        />
      </Link>
    </div>
  );
}
