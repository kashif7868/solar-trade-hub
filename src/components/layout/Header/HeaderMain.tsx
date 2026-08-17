import { CategoryDropdown } from "./CategoryDropdown";
import { HeaderActions } from "./HeaderActions";
import { SearchBar } from "./SearchBar";

export function HeaderMain() {
  return (
    <div className="border-t border-white/10 bg-[#07143D]">
      <div className="mx-auto flex max-w-[1480px] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="shrink-0">
          <CategoryDropdown />
        </div>

        <div className="min-w-0 flex-1">
          <SearchBar />
        </div>

        <div className="shrink-0">
          <HeaderActions />
        </div>
      </div>
    </div>
  );
}