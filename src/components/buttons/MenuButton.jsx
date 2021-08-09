

export default function MenuButton({ children, ...props }) {
  return (
    <li>
      <div className="bg-primary text-secondary  py-2 text-2xl text-center border border-transparent hover:border hover:border-secondary duration-100">
        <button {...props}>{children}</button>
      </div>
    </li>
  );
}
