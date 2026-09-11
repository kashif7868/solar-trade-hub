import Link from "next/link";
import {
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  PackageOpen,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";

import "@/components/animations/css/seller/seller-page.css";

const sellerBenefits = [
  {
    icon: Store,
    title: "Build Your Storefront",
    description:
      "Create a professional presence for your solar business and showcase your products on Solar Trade Hub.",
  },
  {
    icon: Users,
    title: "Reach Solar Buyers",
    description:
      "Put your products in front of customers, installers, businesses, and professionals actively exploring solar solutions.",
  },
  {
    icon: PackageOpen,
    title: "Manage Product Listings",
    description:
      "List solar panels, inverters, batteries, ESS, accessories, and other approved solar products from one seller account.",
  },
  {
    icon: BarChart3,
    title: "Grow Your Business",
    description:
      "Use Solar Trade Hub as another digital channel to increase product visibility and generate new commercial opportunities.",
  },
];

const onboardingSteps = [
  {
    number: "01",
    title: "Create Your Application",
    description:
      "Submit your business details and tell us about the products or services you want to offer.",
  },
  {
    number: "02",
    title: "Business Verification",
    description:
      "Solar Trade Hub reviews the submitted business information before seller access is approved.",
  },
  {
    number: "03",
    title: "Set Up Your Seller Profile",
    description:
      "Build your business profile and prepare your product catalogue for the marketplace.",
  },
  {
    number: "04",
    title: "Start Listing Products",
    description:
      "Publish approved products and begin reaching buyers through Solar Trade Hub.",
  },
];

const requirements = [
  "Valid business or seller information",
  "Authentic solar products and accurate specifications",
  "Clear product pricing and availability information",
  "Reliable customer and order communication",
  "Compliance with Solar Trade Hub marketplace standards",
];

export function SellerPage() {
  return (
    <main className="sth-seller">
      {/* HERO */}
      <section className="sth-seller__hero">
        <div className="sth-seller__container">
          <div className="sth-seller__hero-grid">
            <div className="sth-seller__hero-copy">
              <span className="sth-seller__eyebrow">
                Sell on Solar Trade Hub
              </span>

              <h1>
                Grow Your Solar Business.
                <span>Become a Verified Seller.</span>
              </h1>

              <p>
                Join Solar Trade Hub and bring your solar products closer to
                buyers, installers, businesses, and industry professionals
                across Pakistan.
              </p>

              <div className="sth-seller__hero-actions">
                <a
                  href="#seller-application"
                  className="sth-seller__button sth-seller__button--primary"
                >
                  Become a Seller
                </a>

                <a
                  href="#how-it-works"
                  className="sth-seller__button sth-seller__button--secondary"
                >
                  How It Works
                </a>
              </div>

              <div className="sth-seller__hero-trust">
                <span>
                  <BadgeCheck size={17} strokeWidth={1.9} />
                  Business Verification
                </span>

                <span>
                  <ShieldCheck size={17} strokeWidth={1.9} />
                  Trusted Marketplace
                </span>
              </div>
            </div>

            <div className="sth-seller__hero-visual">
              <div className="sth-seller__visual-glow sth-seller__visual-glow--orange" />
              <div className="sth-seller__visual-glow sth-seller__visual-glow--purple" />

              <div className="sth-seller__visual-card sth-seller__visual-card--main">
                <div className="sth-seller__visual-icon">
                  <Store size={30} strokeWidth={1.7} />
                </div>

                <span>Seller Network</span>

                <strong>
                  Your Products.
                  <span>Pakistan&apos;s Solar Buyers.</span>
                </strong>

                <p>
                  Build your digital presence and showcase your solar catalogue
                  through Solar Trade Hub.
                </p>
              </div>

              <div className="sth-seller__visual-card sth-seller__visual-card--verified">
                <BadgeCheck size={20} strokeWidth={1.9} />
                <div>
                  <small>Seller Status</small>
                  <strong>Verified Business</strong>
                </div>
              </div>

              <div className="sth-seller__visual-card sth-seller__visual-card--catalogue">
                <PackageOpen size={20} strokeWidth={1.9} />
                <div>
                  <small>Marketplace</small>
                  <strong>Product Catalogue</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="sth-seller__benefits">
        <div className="sth-seller__container">
          <div className="sth-seller__section-head">
            <span>Why Sell With Us</span>

            <h2>
              More Visibility for Your
              <strong>Solar Business</strong>
            </h2>

            <p>
              Solar Trade Hub is designed to connect solar businesses with the
              people actively looking for products, suppliers, and energy
              solutions.
            </p>
          </div>

          <div className="sth-seller__benefit-grid">
            {sellerBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="sth-seller__benefit-card"
                >
                  <div className="sth-seller__benefit-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="sth-seller__process"
      >
        <div className="sth-seller__container">
          <div className="sth-seller__section-head">
            <span>Seller Onboarding</span>

            <h2>
              Start Selling in
              <strong>Four Simple Steps</strong>
            </h2>

            <p>
              Seller onboarding keeps the marketplace structured while helping
              buyers identify legitimate solar businesses.
            </p>
          </div>

          <div className="sth-seller__steps">
            {onboardingSteps.map((step) => (
              <article
                key={step.number}
                className="sth-seller__step"
              >
                <div className="sth-seller__step-number">
                  {step.number}
                </div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="sth-seller__requirements">
        <div className="sth-seller__container">
          <div className="sth-seller__requirements-grid">
            <div className="sth-seller__requirements-copy">
              <span className="sth-seller__eyebrow">
                Seller Standards
              </span>

              <h2>
                Built for Serious
                <strong>Solar Businesses</strong>
              </h2>

              <p>
                Marketplace quality depends on reliable sellers and accurate
                product information. Seller applications are therefore
                reviewed before marketplace access is approved.
              </p>

              <div className="sth-seller__requirements-list">
                {requirements.map((requirement) => (
                  <div
                    key={requirement}
                    className="sth-seller__requirement"
                  >
                    <CheckCircle2
                      size={19}
                      strokeWidth={2}
                    />
                    <span>{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sth-seller__verification-card">
              <div className="sth-seller__verification-icon">
                <ShieldCheck size={34} strokeWidth={1.7} />
              </div>

              <span>Marketplace Verification</span>

              <h3>Build Buyer Confidence</h3>

              <p>
                Verification helps Solar Trade Hub maintain a stronger
                marketplace by distinguishing reviewed businesses from
                unverified listings.
              </p>

              <div className="sth-seller__verification-points">
                <div>
                  <Building2 size={18} strokeWidth={1.8} />
                  Business Information
                </div>

                <div>
                  <BadgeCheck size={18} strokeWidth={1.8} />
                  Seller Review
                </div>

                <div>
                  <PackageOpen size={18} strokeWidth={1.8} />
                  Product Standards
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section
        id="seller-application"
        className="sth-seller__application"
      >
        <div className="sth-seller__container">
          <div className="sth-seller__application-grid">
            <div className="sth-seller__application-copy">
              <span>Seller Application</span>

              <h2>
                Ready to Join
                <strong>Solar Trade Hub?</strong>
              </h2>

              <p>
                Tell us about your business. The application interface is ready
                for connection with the seller onboarding backend.
              </p>
            </div>

            <div className="sth-seller__form-card">
              <form className="sth-seller__form">
                <div className="sth-seller__form-row">
                  <label className="sth-seller__field">
                    <span>Contact Person</span>
                    <input
                      type="text"
                      name="contactPerson"
                      placeholder="Full name"
                    />
                  </label>

                  <label className="sth-seller__field">
                    <span>Business Name</span>
                    <input
                      type="text"
                      name="businessName"
                      placeholder="Company or store name"
                    />
                  </label>
                </div>

                <div className="sth-seller__form-row">
                  <label className="sth-seller__field">
                    <span>Email Address</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="business@example.com"
                    />
                  </label>

                  <label className="sth-seller__field">
                    <span>Phone Number</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+92 3XX XXXXXXX"
                    />
                  </label>
                </div>

                <div className="sth-seller__form-row">
                  <label className="sth-seller__field">
                    <span>Business Type</span>

                    <select
                      name="businessType"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select business type
                      </option>

                      <option value="manufacturer">
                        Manufacturer
                      </option>

                      <option value="importer">
                        Importer
                      </option>

                      <option value="distributor">
                        Distributor
                      </option>

                      <option value="wholesaler">
                        Wholesaler
                      </option>

                      <option value="retailer">
                        Retailer
                      </option>

                      <option value="epc">
                        EPC / Solar Company
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>
                  </label>

                  <label className="sth-seller__field">
                    <span>City</span>
                    <input
                      type="text"
                      name="city"
                      placeholder="e.g. Lahore"
                    />
                  </label>
                </div>

                <label className="sth-seller__field">
                  <span>Products You Sell</span>

                  <textarea
                    name="products"
                    rows={5}
                    placeholder="Tell us about the brands and solar products your business supplies..."
                  />
                </label>

                <button
                  type="button"
                  className="sth-seller__submit"
                >
                  Submit Seller Application
                </button>

                <p className="sth-seller__form-note">
                  Application submission will be activated when the seller
                  onboarding backend is connected.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* EXISTING SELLER */}
      <section className="sth-seller__existing">
        <div className="sth-seller__container">
          <div className="sth-seller__existing-card">
            <div>
              <span>Already Registered?</span>

              <h2>
                Manage Your
                <strong>Seller Account</strong>
              </h2>

              <p>
                Existing sellers will be able to manage their profile,
                catalogue, listings, and marketplace activity from their
                account.
              </p>
            </div>

            <Link
              href="/login"
              className="sth-seller__button sth-seller__button--white"
            >
              Seller Login
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}