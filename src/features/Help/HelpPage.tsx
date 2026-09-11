import Link from "next/link";
import {
  CircleHelp,
  ClipboardCheck,
  Headphones,
  PackageSearch,
  Search,
  ShieldCheck,
  ShoppingBag,
  Store,
} from "lucide-react";

import "@/components/animations/css/help/help-page.css";

const helpTopics = [
  {
    icon: ShoppingBag,
    title: "Shopping & Products",
    description:
      "Learn how to browse solar products, compare listings, review product information, and navigate the marketplace.",
  },
  {
    icon: PackageSearch,
    title: "Orders & Tracking",
    description:
      "Find guidance related to order references, order status, delivery progress, and tracking your purchase.",
  },
  {
    icon: Store,
    title: "Seller Support",
    description:
      "Information for businesses interested in becoming sellers or managing their presence on Solar Trade Hub.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Verification",
    description:
      "Understand how Solar Trade Hub approaches seller information, marketplace standards, and platform trust.",
  },
];

const quickLinks = [
  {
    title: "Track an Order",
    description:
      "Check the current status of an order using your order reference and contact information.",
    href: "/track-order",
    action: "Track Order",
  },
  {
    title: "Contact Support",
    description:
      "Reach the Solar Trade Hub team for marketplace, order, seller, or general support enquiries.",
    href: "/contact",
    action: "Contact Us",
  },
  {
    title: "Become a Seller",
    description:
      "Learn how suppliers and solar businesses can apply to join the marketplace as verified sellers.",
    href: "/seller",
    action: "Seller Information",
  },
  {
    title: "Join Community",
    description:
      "Connect with buyers, installers, suppliers, engineers, and professionals across Pakistan's solar ecosystem.",
    href: "/community",
    action: "Join Community",
  },
];

const faqs = [
  {
    question: "What is Solar Trade Hub?",
    answer:
      "Solar Trade Hub is a solar-focused platform designed to connect products, buyers, suppliers, installers, tenders, pricing information, and industry participants in one ecosystem.",
  },
  {
    question: "How can I find solar products?",
    answer:
      "You can browse the Shop or use product categories such as solar panels, inverters, batteries, ESS, and accessories.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Use the Track Order page and enter the order reference along with the contact information associated with the order.",
  },
  {
    question: "Can solar businesses sell on Solar Trade Hub?",
    answer:
      "Yes. Businesses can review the Become a Seller page and submit seller information. Full seller onboarding will be activated when the seller backend is connected.",
  },
  {
    question: "How can I find an installer?",
    answer:
      "Visit the Installers page to browse installer profiles and solar service providers.",
  },
  {
    question: "Where can I view solar tenders?",
    answer:
      "Solar tender opportunities can be explored through the dedicated Tenders page.",
  },
];

export function HelpPage() {
  return (
    <main className="sth-help">
      <section className="sth-help__hero">
        <div className="sth-help__container">
          <div className="sth-help__hero-grid">
            <div className="sth-help__hero-copy">
              <span className="sth-help__eyebrow">
                Solar Trade Hub Help Center
              </span>

              <h1>
                How Can We Help?
                <span>Find Answers Quickly.</span>
              </h1>

              <p>
                Find guidance for products, orders, sellers, installers,
                marketplace features, and common Solar Trade Hub questions.
              </p>

              <div className="sth-help__search-box">
                <Search size={20} strokeWidth={1.9} />

                <input
                  type="search"
                  placeholder="Search help topics..."
                  aria-label="Search help topics"
                />

                <button type="button">Search</button>
              </div>

              <p className="sth-help__search-note">
                Help search is currently frontend UI and can be connected to the
                knowledge base later.
              </p>
            </div>

            <div className="sth-help__hero-visual">
              <div className="sth-help__visual-glow sth-help__visual-glow--orange" />
              <div className="sth-help__visual-glow sth-help__visual-glow--purple" />

              <div className="sth-help__visual-card sth-help__visual-card--main">
                <div className="sth-help__visual-icon">
                  <CircleHelp size={30} strokeWidth={1.7} />
                </div>

                <span>Support Center</span>

                <strong>
                  Answers.
                  <span>Guidance. Support.</span>
                </strong>

                <p>
                  Everything you need to navigate Solar Trade Hub more easily.
                </p>
              </div>

              <div className="sth-help__visual-card sth-help__visual-card--orders">
                <PackageSearch size={20} strokeWidth={1.8} />

                <div>
                  <small>Need an Update?</small>
                  <strong>Track Orders</strong>
                </div>
              </div>

              <div className="sth-help__visual-card sth-help__visual-card--support">
                <Headphones size={20} strokeWidth={1.8} />

                <div>
                  <small>Need Assistance?</small>
                  <strong>Contact Support</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sth-help__topics">
        <div className="sth-help__container">
          <div className="sth-help__section-head">
            <span>Help Topics</span>

            <h2>
              Find Help by
              <strong>Category</strong>
            </h2>

            <p>
              Start with the section that best matches what you need help with.
            </p>
          </div>

          <div className="sth-help__topic-grid">
            {helpTopics.map((topic) => {
              const Icon = topic.icon;

              return (
                <article key={topic.title} className="sth-help__topic-card">
                  <div className="sth-help__topic-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sth-help__quick">
        <div className="sth-help__container">
          <div className="sth-help__section-head">
            <span>Quick Help</span>

            <h2>
              Get Where You
              <strong>Need to Go</strong>
            </h2>

            <p>
              Use these shortcuts for the most common Solar Trade Hub support
              actions.
            </p>
          </div>

          <div className="sth-help__quick-grid">
            {quickLinks.map((item, index) => (
              <article key={item.title} className="sth-help__quick-card">
                <div className="sth-help__quick-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <Link href={item.href}>{item.action}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sth-help__faq">
        <div className="sth-help__container">
          <div className="sth-help__faq-grid">
            <div className="sth-help__faq-copy">
              <span>Frequently Asked Questions</span>

              <h2>
                Common Questions.
                <strong>Clear Answers.</strong>
              </h2>

              <p>
                These answers cover the most common questions about using Solar
                Trade Hub.
              </p>

              <div className="sth-help__faq-note">
                <ClipboardCheck size={21} strokeWidth={1.8} />

                <div>
                  <strong>Still need help?</strong>
                  <p>
                    If your question is not listed here, you can contact the
                    Solar Trade Hub team directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="sth-help__faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} className="sth-help__faq-item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sth-help__cta">
        <div className="sth-help__container">
          <div className="sth-help__cta-card">
            <div>
              <span>Need More Help?</span>

              <h2>
                Our Support Team
                <strong>Can Help You Further.</strong>
              </h2>

              <p>
                Contact Solar Trade Hub for help with orders, seller enquiries,
                products, marketplace navigation, or other platform questions.
              </p>
            </div>

            <div className="sth-help__cta-actions">
              <Link
                href="/contact"
                className="sth-help__button sth-help__button--white"
              >
                Contact Support
              </Link>

              <Link
                href="/track-order"
                className="sth-help__button sth-help__button--outline-white"
              >
                Track Order
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}