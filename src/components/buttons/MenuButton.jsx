

export default function MenuButton({ children, ...props }) {
  return (
    <li>
      <div className="bg-primary text-secondary px-3 py-2 text-2xl text-center hover:bg-transparent hover:text-primary duration-100">
        <button {...props}>{children}</button>
      </div>
    </li>
  );
}
