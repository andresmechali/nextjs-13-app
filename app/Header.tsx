"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const pathnameRoot = pathname.split("/")?.[1];

  return (
    <header className="p-5 bg-blue-500">
      <Link
        href="/"
        className={`px-2 py-1 bg-white text-blue-500 rounded-lg mr-5 hover:text-blue-950 ${
          pathnameRoot === "" ? "underline text-blue-950" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/todos"
        className={`px-2 py-1 bg-white text-blue-500 rounded-lg mr-5 hover:text-blue-950 ${
          pathnameRoot === "todos" ? "underline text-blue-950" : ""
        }`}
      >
        Todos
      </Link>
      <Link
        href="/search"
        className={`px-2 py-1 bg-white text-blue-500 rounded-lg mr-5 hover:text-blue-950 ${
          pathnameRoot === "search" ? "underline text-blue-950" : ""
        }`}
      >
        Search
      </Link>
    </header>
  );
}
