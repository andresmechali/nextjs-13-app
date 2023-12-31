import React from "react";
import Search from "@/app/(user)/search/Search";

export const metadata = {
  title: "Search page",
  description: "Page that allows searching from SerpApi",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div>
        <h1>Search</h1>
      </div>
      <div className="flex-1 pl-5">
        <Search />
        <div>{children}</div>
      </div>
    </main>
  );
}
