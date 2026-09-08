import { FooterBottom } from "./FooterBottom";
import { FooterContact } from "./FooterContact";
import { FooterLinks } from "./FooterLinks";

import "@/components/animations/css/footer/footer.css";

export function Footer() {
  return (
    <footer className="sth-footer">
      <div className="sth-footer__shell">
        <div className="sth-footer__container">
          <div className="sth-footer__main">
            <FooterContact />
            <FooterLinks />
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}