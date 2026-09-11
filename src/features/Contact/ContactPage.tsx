import Link from "next/link";
import {
  Building2,
  Headphones,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
} from "lucide-react";

import "@/components/animations/css/contact/contact-page.css";

const contactOptions = [
  {
    icon: Mail,
    title: "Email Us",
    value: "sales@zorays.com",
    description:
      "For general enquiries, platform support, supplier discussions, and business coordination.",
    href: "mailto:sales@zorays.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+92 339 4163264",
    description:
      "Speak with our team regarding Solar Trade Hub enquiries and business requirements.",
    href: "tel:+923394163264",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lahore, Pakistan",
    description:
      "Solar Trade Hub is being developed for Pakistan’s solar market and industry ecosystem.",
    href: null,
  },
];

const enquiryTypes = [
  {
    icon: Building2,
    title: "Suppliers & Sellers",
    description:
      "Interested in listing products, joining the supplier network, or building your presence on Solar Trade Hub?",
  },
  {
    icon: Headphones,
    title: "Platform Support",
    description:
      "Need help navigating products, suppliers, installers, tenders, or other platform sections?",
  },
  {
    icon: MessageSquareText,
    title: "General Enquiries",
    description:
      "For partnerships, media, marketplace questions, collaboration opportunities, and other enquiries.",
  },
];

export function ContactPage() {
  return (
    <main className="sth-contact">
      <section className="sth-contact__hero">
        <div className="sth-contact__container">
          <div className="sth-contact__hero-grid">
            <div className="sth-contact__hero-copy">
              <span className="sth-contact__eyebrow">
                Contact Solar Trade Hub
              </span>

              <h1>
                Let&apos;s Talk Solar.
                <span>We&apos;re Here to Help.</span>
              </h1>

              <p>
                Whether you are a buyer, supplier, installer, solar business,
                or industry professional, our team is available to help you
                connect with the right part of Solar Trade Hub.
              </p>

              <div className="sth-contact__hero-actions">
                <a
                  href="mailto:sales@zorays.com"
                  className="sth-contact__button sth-contact__button--primary"
                >
                  Email Our Team
                </a>

                <Link
                  href="/shop"
                  className="sth-contact__button sth-contact__button--secondary"
                >
                  Explore Products
                </Link>
              </div>
            </div>

            <div className="sth-contact__hero-visual">
              <div className="sth-contact__visual-glow sth-contact__visual-glow--orange" />
              <div className="sth-contact__visual-glow sth-contact__visual-glow--purple" />

              <div className="sth-contact__visual-card sth-contact__visual-card--main">
                <span>Solar Trade Hub</span>

                <strong>
                  One Platform.
                  <span>Multiple Solar Connections.</span>
                </strong>

                <p>
                  Buyers, suppliers, installers, businesses, and solar market
                  opportunities connected in one ecosystem.
                </p>
              </div>

              <div className="sth-contact__visual-card sth-contact__visual-card--support">
                <Headphones size={21} strokeWidth={1.8} />
                <span>Platform Support</span>
              </div>

              <div className="sth-contact__visual-card sth-contact__visual-card--business">
                <Building2 size={21} strokeWidth={1.8} />
                <span>Business Enquiries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sth-contact__details">
        <div className="sth-contact__container">
          <div className="sth-contact__section-head">
            <span>Get in Touch</span>

            <h2>
              Contact the
              <strong>Solar Trade Hub Team</strong>
            </h2>

            <p>
              Choose the contact option that best matches your enquiry.
            </p>
          </div>

          <div className="sth-contact__cards">
            {contactOptions.map((option) => {
              const Icon = option.icon;

              const cardContent = (
                <>
                  <div className="sth-contact__card-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3>{option.title}</h3>
                    <strong>{option.value}</strong>
                    <p>{option.description}</p>
                  </div>
                </>
              );

              if (option.href) {
                return (
                  <a
                    key={option.title}
                    href={option.href}
                    className="sth-contact__card"
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <article
                  key={option.title}
                  className="sth-contact__card"
                >
                  {cardContent}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sth-contact__form-section">
        <div className="sth-contact__container">
          <div className="sth-contact__form-grid">
            <div className="sth-contact__form-copy">
              <span className="sth-contact__eyebrow">
                Send an Enquiry
              </span>

              <h2>
                Tell Us What
                <strong>You Need</strong>
              </h2>

              <p>
                Share your details and enquiry below. This frontend form is
                ready for backend/API integration when the contact workflow is
                connected.
              </p>

              <div className="sth-contact__enquiry-list">
                {enquiryTypes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="sth-contact__enquiry-item"
                    >
                      <div className="sth-contact__enquiry-icon">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>

                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="sth-contact__form-card">
              <form className="sth-contact__form">
                <div className="sth-contact__form-row">
                  <label className="sth-contact__field">
                    <span>Full Name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                    />
                  </label>

                  <label className="sth-contact__field">
                    <span>Phone Number</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+92 3XX XXXXXXX"
                    />
                  </label>
                </div>

                <label className="sth-contact__field">
                  <span>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                </label>

                <label className="sth-contact__field">
                  <span>Enquiry Type</span>
                  <select name="enquiryType" defaultValue="">
                    <option value="" disabled>
                      Select enquiry type
                    </option>
                    <option value="general">
                      General Enquiry
                    </option>
                    <option value="supplier">
                      Supplier / Seller
                    </option>
                    <option value="installer">
                      Installer
                    </option>
                    <option value="support">
                      Platform Support
                    </option>
                    <option value="partnership">
                      Partnership
                    </option>
                  </select>
                </label>

                <label className="sth-contact__field">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell us how we can help..."
                  />
                </label>

                <button
                  type="button"
                  className="sth-contact__submit"
                >
                  Send Enquiry
                </button>

                <p className="sth-contact__form-note">
                  Submission functionality will be connected during backend
                  integration.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="sth-contact__cta">
        <div className="sth-contact__container">
          <div className="sth-contact__cta-card">
            <div>
              <span>Explore Solar Trade Hub</span>

              <h2>
                Looking for Solar
                <strong>Products or Professionals?</strong>
              </h2>

              <p>
                Explore products, find trusted installers, discover suppliers,
                and browse solar market opportunities across Pakistan.
              </p>
            </div>

            <div className="sth-contact__cta-actions">
              <Link
                href="/shop"
                className="sth-contact__button sth-contact__button--white"
              >
                Browse Products
              </Link>

              <Link
                href="/installers"
                className="sth-contact__button sth-contact__button--outline-white"
              >
                Find Installers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}