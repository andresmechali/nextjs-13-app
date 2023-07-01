"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter the search term"
        onChange={(e) => setSearch(e.target.value)}
        className="text-gray-400 p-2 mr-2"
      />
      <button type="submit" className="btn border-2 rounded-lg p-2">
        Search
      </button>
    </form>
  );
}
