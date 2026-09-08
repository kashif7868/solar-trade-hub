import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import "@/components/animations/css/footer/footer-bottom.css";

export function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="sth-footer-bottom">
      <div className="sth-footer-bottom__container">
        <div className="sth-footer-bottom__legal">
          <p>
            © {currentYear} Solar Trade Hub. All rights reserved.
          </p>

          <span className="sth-footer-bottom__divider" />

          <div className="sth-footer-bottom__legal-links">
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <span className="sth-footer-bottom__legal-separator" />

            <Link href="/terms">
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="sth-footer-bottom__trust">
          <ShieldCheck
            size={16}
            strokeWidth={1.8}
          />

          <span>
            Pakistan&apos;s Trusted Solar Energy Partner
          </span>
        </div>
      </div>
    </div>
  );
}