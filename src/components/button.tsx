"use client";
import { LoaderIcon } from "lucide-react";
import { useFormStatus } from "react-dom";

export const Button: React.FC<{
  children: React.ReactNode;
  disabled?: boolean;
}> = ({ children, disabled = false }) => {
  const { pending } = useFormStatus();

  return (
    <button
      className="disabled:bg-gray-400 disabled:cursor-default bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 cursor-pointer"
      disabled={pending || disabled}
    >
      {pending ? (
        <div className="flex items-center justify-center space-x-2">
          <LoaderIcon className="animate-spin h-5 w-5" />
          <span>Loading</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};
