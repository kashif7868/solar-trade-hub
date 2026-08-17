import { FooterBottom } from "./FooterBottom";
import { FooterContact } from "./FooterContact";
import { FooterLinks } from "./FooterLinks";

export function Footer() {
  return (
    <footer className="bg-[#07143D] text-white">
      <div className="mx-auto max-w-[1480px] px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1.95fr]">
          <FooterContact />

          <FooterLinks />
        </div>
      </div>

      <FooterBottom />
    </footer>
  );
}