import { HeaderMain } from "./HeaderMain";
import { MainNavigation } from "./MainNavigation";
import { MobileHeader } from "./MobileHeader";
import { TopBar } from "./TopBar";

import "@/components/animations/css/header/header.css";

export function Header() {
  return (
    <header className="sth-header">
      <div className="sth-header__desktop">
        <TopBar />
        <HeaderMain />
        <MainNavigation />
      </div>

      <div className="sth-header__mobile">
        <MobileHeader />
      </div>
    </header>
  );
}