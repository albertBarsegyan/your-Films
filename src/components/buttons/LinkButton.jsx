import Link from 'next/link';

export default function LinkButton({ children, ...props }) {
  return (
    <Link {...props}>
      <a className="bg-primary text-secondary px-3 py-2 text-2xl rounded-sm">
        {children}
      </a>
    </Link>
  );
}
