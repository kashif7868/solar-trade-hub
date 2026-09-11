import Link from "next/link";
import {
  BadgeCheck,
  FileCheck2,
  Gavel,
  PackageCheck,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Store,
} from "lucide-react";

import "@/components/animations/css/terms/terms-page.css";

const termsSections = [
  {
    id: "platform-use",
    icon: FileCheck2,
    title: "Use of the Platform",
    content: (
      <>
        <p>
          Solar Trade Hub provides a platform for users to explore solar
          products, sellers, installers, tenders, pricing information, and
          related marketplace services.
        </p>

        <p>
          By using the platform, users agree to use Solar Trade Hub only for
          lawful purposes and in a manner that does not interfere with the
          platform, other users, sellers, or service providers.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    icon: ShieldCheck,
    title: "Accounts & User Responsibilities",
    content: (
      <>
        <p>
          Where account functionality is available, users are responsible for
          providing accurate information and maintaining the confidentiality of
          their account credentials.
        </p>

        <p>
          Users should promptly update information where necessary and take
          reasonable steps to prevent unauthorized use of their accounts.
        </p>
      </>
    ),
  },
  {
    id: "products",
    icon: ShoppingCart,
    title: "Products, Listings & Information",
    content: (
      <>
        <p>
          Product listings may include specifications, pricing, availability,
          images, seller information, and other marketplace details.
        </p>

        <p>
          Solar Trade Hub aims to present useful marketplace information, but
          product details may originate from sellers, suppliers, manufacturers,
          or other sources. Users should review the final product information
          before making a purchase decision.
        </p>
      </>
    ),
  },
  {
    id: "orders",
    icon: PackageCheck,
    title: "Orders, Pricing & Availability",
    content: (
      <>
        <p>
          Orders, pricing, stock availability, delivery, payment, and related
          transaction terms may vary depending on the product, seller, service,
          and transaction flow available on the platform.
        </p>

        <p>
          Final order terms displayed or agreed during checkout should govern
          the specific transaction where applicable.
        </p>
      </>
    ),
  },
  {
    id: "sellers",
    icon: Store,
    title: "Sellers & Marketplace Participants",
    content: (
      <>
        <p>
          Sellers, suppliers, installers, and other marketplace participants
          are responsible for the accuracy of the information they provide and
          for complying with applicable platform requirements.
        </p>

        <p>
          Solar Trade Hub may review marketplace participants, listings, or
          applications, and may restrict or remove content that is inaccurate,
          misleading, unlawful, or inconsistent with platform standards.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    icon: BadgeCheck,
    title: "Acceptable Use",
    content: (
      <>
        <p>Users must not use Solar Trade Hub to:</p>

        <ul>
          <li>Submit false, misleading, or fraudulent information</li>
          <li>Attempt unauthorized access to platform systems or accounts</li>
          <li>Disrupt platform operation or security</li>
          <li>Misuse marketplace listings, communications, or user data</li>
          <li>Use the platform for unlawful activity</li>
          <li>Infringe intellectual property or other lawful rights</li>
        </ul>
      </>
    ),
  },
];

export function TermsPage() {
  return (
    <main className="sth-terms">
      <section className="sth-terms__hero">
        <div className="sth-terms__container">
          <div className="sth-terms__hero-grid">
            <div className="sth-terms__hero-copy">
              <span className="sth-terms__eyebrow">
                Platform Terms
              </span>

              <h1>
                Clear Platform Terms.
                <span>Fair Marketplace Use.</span>
              </h1>

              <p>
                These Terms &amp; Conditions set out the general principles for
                using Solar Trade Hub and interacting with its marketplace
                features, services, listings, sellers, and platform content.
              </p>

              <div className="sth-terms__hero-meta">
                <span>
                  <Scale size={17} strokeWidth={1.9} />
                  Clear Usage Principles
                </span>

                <span>
                  <ShieldCheck size={17} strokeWidth={1.9} />
                  Marketplace Standards
                </span>
              </div>
            </div>

            <div className="sth-terms__hero-visual">
              <div className="sth-terms__visual-glow sth-terms__visual-glow--orange" />
              <div className="sth-terms__visual-glow sth-terms__visual-glow--purple" />

              <div className="sth-terms__visual-card">
                <div className="sth-terms__visual-icon">
                  <Gavel size={32} strokeWidth={1.7} />
                </div>

                <span>Solar Trade Hub</span>

                <strong>
                  Fair Use.
                  <span>Clear Responsibilities.</span>
                </strong>

                <p>
                  General rules designed to support a transparent and reliable
                  solar marketplace.
                </p>

                <div className="sth-terms__visual-points">
                  <div>
                    <FileCheck2 size={17} />
                    Platform use
                  </div>

                  <div>
                    <Store size={17} />
                    Seller standards
                  </div>

                  <div>
                    <ShieldCheck size={17} />
                    Responsible participation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sth-terms__content">
        <div className="sth-terms__container">
          <div className="sth-terms__content-grid">
            <aside className="sth-terms__navigation">
              <span>On This Page</span>

              <nav aria-label="Terms and conditions sections">
                {termsSections.map((section) => (
                  <a key={section.id} href={`#${section.id}`}>
                    {section.title}
                  </a>
                ))}

                <a href="#intellectual-property">
                  Intellectual Property
                </a>
                <a href="#service-availability">
                  Platform Availability
                </a>
                <a href="#changes">
                  Changes to These Terms
                </a>
                <a href="#contact">Contact</a>
              </nav>
            </aside>

            <div className="sth-terms__policy">
              <div className="sth-terms__intro">
                <span>Terms &amp; Conditions</span>

                <h2>
                  Rules for Using
                  <strong>Solar Trade Hub</strong>
                </h2>

                <p>
                  These terms are intended as a general frontend draft for the
                  platform. Before production launch, they should be aligned
                  with the actual checkout process, payment methods, seller
                  agreements, order policies, returns, warranties, delivery
                  arrangements, and applicable legal requirements.
                </p>
              </div>

              {termsSections.map((section, index) => {
                const Icon = section.icon;

                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className="sth-terms__policy-section"
                  >
                    <div className="sth-terms__section-heading">
                      <div className="sth-terms__section-icon">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <div>
                        <span>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3>{section.title}</h3>
                      </div>
                    </div>

                    <div className="sth-terms__section-content">
                      {section.content}
                    </div>
                  </section>
                );
              })}

              <section
                id="intellectual-property"
                className="sth-terms__policy-section"
              >
                <div className="sth-terms__section-heading">
                  <div className="sth-terms__section-icon">
                    <BadgeCheck size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span>07</span>
                    <h3>Intellectual Property</h3>
                  </div>
                </div>

                <div className="sth-terms__section-content">
                  <p>
                    Platform branding, design, original content, software,
                    graphics, and other proprietary materials may be protected
                    by applicable intellectual property rights.
                  </p>

                  <p>
                    Users and marketplace participants should not copy,
                    reproduce, distribute, or misuse protected platform
                    material without appropriate authorization.
                  </p>

                  <p>
                    Product names, trademarks, logos, and manufacturer content
                    belonging to third parties remain the property of their
                    respective owners.
                  </p>
                </div>
              </section>

              <section
                id="service-availability"
                className="sth-terms__policy-section"
              >
                <div className="sth-terms__section-heading">
                  <div className="sth-terms__section-icon">
                    <ShieldCheck size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span>08</span>
                    <h3>Platform Availability</h3>
                  </div>
                </div>

                <div className="sth-terms__section-content">
                  <p>
                    Solar Trade Hub may update, modify, improve, suspend, or
                    discontinue platform features as the service develops.
                  </p>

                  <p>
                    Temporary interruptions may also occur due to maintenance,
                    technical issues, security requirements, or circumstances
                    outside the platform&apos;s reasonable control.
                  </p>
                </div>
              </section>

              <section
                id="changes"
                className="sth-terms__policy-section"
              >
                <div className="sth-terms__section-heading">
                  <div className="sth-terms__section-icon">
                    <FileCheck2 size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span>09</span>
                    <h3>Changes to These Terms</h3>
                  </div>
                </div>

                <div className="sth-terms__section-content">
                  <p>
                    These Terms &amp; Conditions may be updated as Solar Trade
                    Hub introduces new features, modifies marketplace services,
                    or responds to operational or legal requirements.
                  </p>

                  <p>
                    The latest version published on this page will represent
                    the current platform terms.
                  </p>
                </div>
              </section>

              <section
                id="contact"
                className="sth-terms__policy-section"
              >
                <div className="sth-terms__section-heading">
                  <div className="sth-terms__section-icon">
                    <Gavel size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span>10</span>
                    <h3>Questions About These Terms</h3>
                  </div>
                </div>

                <div className="sth-terms__section-content">
                  <p>
                    If you have questions about these Terms &amp; Conditions,
                    use the Solar Trade Hub Contact page to reach the relevant
                    team.
                  </p>

                  <Link
                    href="/contact"
                    className="sth-terms__contact-link"
                  >
                    Contact Solar Trade Hub
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="sth-terms__notice">
        <div className="sth-terms__container">
          <div className="sth-terms__notice-card">
            <Scale size={25} strokeWidth={1.8} />

            <div>
              <strong>Production Legal Review</strong>

              <p>
                Before launch, these terms should be reviewed against the actual
                business model, checkout flow, seller agreements, payment
                providers, shipping arrangements, warranty policies, refund and
                return rules, dispute handling, and applicable Pakistani legal
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}