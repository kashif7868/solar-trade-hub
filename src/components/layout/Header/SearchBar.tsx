"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import "@/components/animations/css/header/search-bar.css";

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
      className="sth-search"
      onSubmit={handleSubmit}
      role="search"
    >
      <input
        type="search"
        value={query}
        onChange={(event) =>
          setQuery(event.target.value)
        }
        placeholder="Search products, brands, categories..."
        aria-label="Search Solar Trade Hub"
        className="sth-search__input"
      />

      <button
        type="submit"
        className="sth-search__button"
        aria-label="Search"
      >
        <Search
          size={16}
          strokeWidth={1.8}
        />
      </button>
    </form>
  );
}