"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <p className="my-2 p-2 bg-red-500">Something went wrong</p>
      <button
        onClick={reset}
        className="p-2 border-2 rounded-lg cursor-pointer hover:text-black hover:bg-white"
      >
        Reset error boundary
      </button>
    </div>
  );
}
