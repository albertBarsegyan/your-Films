export default function PrimaryButton({ children, ...props }) {
  return (
    <>
      <button
        className="bg-primary text-secondary px-3 py-2 text-2xl rounded-sm"
        {...props}
      >
        {children}
      </button>
    </>
  );
}
