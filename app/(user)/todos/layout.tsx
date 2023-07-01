import React from "react";
import TodosList from "@/app/(user)/todos/TodosList";

export const metadata = {
  title: "Todo page",
  description: "Page that lists all the todos",
};
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
