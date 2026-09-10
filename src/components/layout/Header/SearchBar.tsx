"use client";

import { Search, X } from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import "@/components/animations/css/header/search-bar.css";

export function SearchBar() {
  const router = useRouter();
  const searchParams =
    useSearchParams();

  const currentSearch =
    searchParams.get("search") ?? "";

  const [query, setQuery] =
    useState(currentSearch);

  useEffect(() => {
    setQuery(currentSearch);
  }, [currentSearch]);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const value =
      query.trim();

    if (!value) {
      router.push("/shop");
      return;
    }

    router.push(
      `/shop?search=${encodeURIComponent(
        value
      )}`
    );
  };

  const handleClear = () => {
    setQuery("");

    if (currentSearch) {
      router.push("/shop");
    }
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
          setQuery(
            event.target.value
          )
        }
        placeholder="Search products, brands, categories..."
        aria-label="Search Solar Trade Hub"
        className="sth-search__input"
      />

      {query && (
        <button
          type="button"
          className="sth-search__clear"
          aria-label="Clear search"
          onClick={handleClear}
        >
          <X
            size={15}
            strokeWidth={1.7}
          />
        </button>
      )}

      <button
        type="submit"
        className="sth-search__button"
        aria-label="Search"
      >
        <Search
          size={16}
          strokeWidth={1.7}
        />
      </button>
    </form>
  );
}