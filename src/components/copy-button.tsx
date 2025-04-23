import { toast } from "sonner";

export const CopyButton: React.FC<{
  children: React.ReactNode;
  text: string;
  toastText?: string;
}> = ({ children, text, toastText = "Text on your clipboard" }) => {
  function copyText() {
    navigator.clipboard.writeText(text);

    toast(toastText);
  }

  return (
    <button
      className="bg-amber-500 p-1 rounded-md text-white font-bold cursor-pointer hover:bg-amber-700"
      onClick={copyText}
    >
      {children}
    </button>
  );
};
