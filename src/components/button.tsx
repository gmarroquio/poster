import { useFormStatus } from "react-dom";

export const Button: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 cursor-pointer"
      disabled={pending}
    >
      {children}
    </button>
  );
};
