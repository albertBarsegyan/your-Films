import Link from 'next/link';

export default function MenuLink({ children, ...props }) {
  return (
    <li>
      <div className="bg-primary text-secondary px-3 py-2 text-2xl text-center hover:bg-transparent hover:text-primary duration-100">
        <Link {...props}>
          <a>{children}</a>
        </Link>
      </div>
    </li>
  );
}
