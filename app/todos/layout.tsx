import React from "react";
import TodosList from "@/app/todos/TodosList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div>
        <TodosList />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
