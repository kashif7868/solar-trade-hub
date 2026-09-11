import { Suspense } from "react";

import Image from "next/image";
import Link from "next/link";

import { CategoryDropdown } from "./CategoryDropdown";
import { HeaderActions } from "./HeaderActions";
import { SearchBar } from "./SearchBar";

import "@/components/animations/css/header/header-main.css";

export function HeaderMain() {
  return (
    <div className="sth-header-main">
      <div className="sth-header-main__container">
        <Link
          href="/"
          aria-label="Solar Trade Hub Home"
          className="sth-header-main__logo"
        >
          <Image
            src="/logos/solar-trade-hub-logo-dark.png"
            alt="Solar Trade Hub"
            width={190}
            height={68}
            priority
          />
        </Link>

        <div className="sth-header-main__search-area">
          <CategoryDropdown />

          <Suspense fallback={null}>
            <SearchBar />
          </Suspense>
        </div>

        <div className="sth-header-main__actions">
          <HeaderActions />
        </div>
      </div>
    </div>
  );
}