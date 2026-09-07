import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  MessageCircle,
} from "lucide-react";

import "@/components/animations/css/home/quote-cta.css";

const quoteBenefits = [
  "Verified suppliers",
  "Faster comparison",
  "Technical assistance",
];

export function QuoteCTA() {
  return (
    <section className="sth-quote-cta">
      <div className="sth-quote-cta__container">
        <div className="sth-quote-cta__panel">
          <div className="sth-quote-cta__glow sth-quote-cta__glow--top" />
          <div className="sth-quote-cta__glow sth-quote-cta__glow--bottom" />

          <div className="sth-quote-cta__content">
            <div className="sth-quote-cta__copy">
              <span className="sth-quote-cta__badge">
                <ClipboardList size={14} strokeWidth={1.8} />
                Need a Custom Solar Solution?
              </span>

              <h2 className="sth-quote-cta__title">
                Get Multiple Solar Quotes
                <span> From Trusted Suppliers</span>
              </h2>

              <p className="sth-quote-cta__description">
                Share your project requirements and connect with
                relevant suppliers, installers and solar solution
                providers through one streamlined request.
              </p>

              <div className="sth-quote-cta__benefits">
                {quoteBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="sth-quote-cta__benefit"
                  >
                    <BadgeCheck size={14} strokeWidth={1.8} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sth-quote-cta__card">
              <div className="sth-quote-cta__card-header">
                <span className="sth-quote-cta__card-icon">
                  <ClipboardList size={17} strokeWidth={1.8} />
                </span>

                <div>
                  <h3>Start Your Inquiry</h3>

                  <p>
                    Tell us what you need and we&apos;ll help connect
                    you with suitable solar marketplace partners.
                  </p>
                </div>
              </div>

              <div className="sth-quote-cta__actions">
                <Link
                  href="/get-quote"
                  className="sth-quote-cta__button sth-quote-cta__button--primary"
                >
                  <span>Get Solar Quote</span>
                  <ArrowRight size={14} strokeWidth={1.8} />
                </Link>

                <Link
                  href="/contact"
                  className="sth-quote-cta__button sth-quote-cta__button--secondary"
                >
                  <MessageCircle size={14} strokeWidth={1.8} />
                  <span>Talk to Our Team</span>
                </Link>
              </div>

              <p className="sth-quote-cta__note">
                No obligation. Submit your requirement and compare
                available options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}