import { Loader } from "lucide-react";
import React from "react";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="animate-spin h-32 w-32" />
    </div>
  );
};
