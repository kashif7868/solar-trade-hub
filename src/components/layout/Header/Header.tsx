import { HeaderMain } from "./HeaderMain";
import { MainNavigation } from "./MainNavigation";
import { MobileHeader } from "./MobileHeader";
import { TopBar } from "./TopBar";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      <div className="hidden lg:block">
        <TopBar />
        <HeaderMain />
        <MainNavigation />
      </div>

      <MobileHeader />
    </header>
  );
}