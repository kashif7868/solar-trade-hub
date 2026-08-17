"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const value = query.trim();

    if (!value) return;

    console.log("Search:", value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex h-[52px] w-full
        overflow-hidden
        rounded-md
        border border-white/10
        bg-white
        shadow-sm
      "
    >
      <input
        type="search"
        value={query}
        onChange={(event) =>
          setQuery(event.target.value)
        }
        placeholder="Search products, brands, categories..."
        aria-label="Search Solar Trade Hub"
        className="
          min-w-0 flex-1
          bg-transparent
          px-5
          text-[13px]
          text-slate-900
          outline-none
          placeholder:text-slate-400
        "
      />

      <button
        type="submit"
        aria-label="Search"
        className="
          flex w-[64px]
          shrink-0
          items-center justify-center
          bg-[#ED2436]
          text-white
          transition-colors
          hover:bg-[#C91828]
        "
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
}