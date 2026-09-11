import Link from "next/link";
import {
  BadgeCheck,
  BookOpenText,
  Building2,
  MessageCircle,
  Network,
  Users,
} from "lucide-react";

import "@/components/animations/css/community/community-page.css";

const communityBenefits = [
  {
    icon: Users,
    title: "Connect With the Industry",
    description:
      "Meet solar buyers, installers, suppliers, engineers, businesses, and professionals from across Pakistan.",
  },
  {
    icon: MessageCircle,
    title: "Share Practical Experience",
    description:
      "Discuss products, installations, market developments, business challenges, and real-world solar experiences.",
  },
  {
    icon: BookOpenText,
    title: "Learn From Others",
    description:
      "Exchange useful knowledge about solar technologies, products, pricing, system design, and market trends.",
  },
  {
    icon: Network,
    title: "Build Better Connections",
    description:
      "Create new professional relationships, discover opportunities, and become part of a growing solar ecosystem.",
  },
];

const communityGroups = [
  {
    title: "Solar Buyers",
    description:
      "Homeowners and businesses exploring products, installers, technologies, and solar solutions.",
  },
  {
    title: "Installers & EPC Companies",
    description:
      "Solar professionals involved in system design, installation, commissioning, and project delivery.",
  },
  {
    title: "Suppliers & Sellers",
    description:
      "Businesses supplying solar panels, inverters, batteries, ESS, structures, cables, and accessories.",
  },
  {
    title: "Engineers & Professionals",
    description:
      "Technical professionals, consultants, researchers, and people working across the energy industry.",
  },
];

export function CommunityPage() {
  return (
    <main className="sth-community">
      <section className="sth-community__hero">
        <div className="sth-community__container">
          <div className="sth-community__hero-grid">
            <div className="sth-community__hero-copy">
              <span className="sth-community__eyebrow">
                Solar Trade Hub Community
              </span>

              <h1>
                Connect With Pakistan&apos;s
                <span>Solar Community</span>
              </h1>

              <p>
                Join buyers, installers, suppliers, engineers, solar
                businesses, and industry professionals in one connected
                ecosystem built around Pakistan&apos;s growing solar market.
              </p>

              <div className="sth-community__hero-actions">
                <a
                  href="#join-community"
                  className="sth-community__button sth-community__button--primary"
                >
                  Join the Community
                </a>

                <Link
                  href="/installers"
                  className="sth-community__button sth-community__button--secondary"
                >
                  Explore Installers
                </Link>
              </div>

              <div className="sth-community__hero-trust">
                <span>
                  <BadgeCheck size={17} strokeWidth={1.9} />
                  Solar-Focused Network
                </span>

                <span>
                  <Users size={17} strokeWidth={1.9} />
                  Industry Connections
                </span>
              </div>
            </div>

            <div className="sth-community__hero-visual">
              <div className="sth-community__visual-glow sth-community__visual-glow--orange" />
              <div className="sth-community__visual-glow sth-community__visual-glow--purple" />

              <div className="sth-community__visual-card sth-community__visual-card--main">
                <div className="sth-community__visual-icon">
                  <Network size={30} strokeWidth={1.7} />
                </div>

                <span>Community Network</span>

                <strong>
                  People.
                  <span>Knowledge. Opportunity.</span>
                </strong>

                <p>
                  A solar-focused community designed to connect people across
                  Pakistan&apos;s renewable energy ecosystem.
                </p>
              </div>

              <div className="sth-community__visual-card sth-community__visual-card--buyers">
                <Users size={20} strokeWidth={1.8} />
                <div>
                  <small>Community</small>
                  <strong>Solar Buyers</strong>
                </div>
              </div>

              <div className="sth-community__visual-card sth-community__visual-card--business">
                <Building2 size={20} strokeWidth={1.8} />
                <div>
                  <small>Network</small>
                  <strong>Solar Businesses</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sth-community__benefits">
        <div className="sth-community__container">
          <div className="sth-community__section-head">
            <span>Why Join</span>

            <h2>
              More Than a
              <strong>Marketplace</strong>
            </h2>

            <p>
              Solar Trade Hub is also designed to help people across the solar
              industry discover each other, exchange knowledge, and build
              stronger professional connections.
            </p>
          </div>

          <div className="sth-community__benefit-grid">
            {communityBenefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="sth-community__benefit-card"
                >
                  <div className="sth-community__benefit-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sth-community__members">
        <div className="sth-community__container">
          <div className="sth-community__section-head">
            <span>Who It&apos;s For</span>

            <h2>
              One Community for the
              <strong>Solar Ecosystem</strong>
            </h2>

            <p>
              The community is intended for people working in, buying from, or
              actively learning about Pakistan&apos;s solar industry.
            </p>
          </div>

          <div className="sth-community__member-grid">
            {communityGroups.map((group, index) => (
              <article
                key={group.title}
                className="sth-community__member-card"
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sth-community__values">
        <div className="sth-community__container">
          <div className="sth-community__values-grid">
            <div>
              <span className="sth-community__eyebrow">
                Community Principles
              </span>

              <h2>
                Useful Conversations.
                <strong>Better Connections.</strong>
              </h2>

              <p>
                The goal is to build a useful solar community where members can
                exchange practical information without losing sight of quality,
                professionalism, and trust.
              </p>
            </div>

            <div className="sth-community__values-card">
              <div>
                <BadgeCheck size={20} strokeWidth={1.9} />
                <span>
                  <strong>Relevant</strong>
                  Solar-focused discussions and connections.
                </span>
              </div>

              <div>
                <Users size={20} strokeWidth={1.9} />
                <span>
                  <strong>Professional</strong>
                  Respectful interaction between members.
                </span>
              </div>

              <div>
                <BookOpenText size={20} strokeWidth={1.9} />
                <span>
                  <strong>Useful</strong>
                  Practical knowledge instead of unnecessary noise.
                </span>
              </div>

              <div>
                <Network size={20} strokeWidth={1.9} />
                <span>
                  <strong>Connected</strong>
                  Better links between buyers and industry participants.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="join-community"
        className="sth-community__join"
      >
        <div className="sth-community__container">
          <div className="sth-community__join-grid">
            <div className="sth-community__join-copy">
              <span>Join the Network</span>

              <h2>
                Become Part of the
                <strong>Solar Trade Hub Community</strong>
              </h2>

              <p>
                Share a few details about yourself and your connection to the
                solar industry. Community registration can be connected to the
                backend when the membership workflow is implemented.
              </p>
            </div>

            <div className="sth-community__form-card">
              <form className="sth-community__form">
                <div className="sth-community__form-row">
                  <label className="sth-community__field">
                    <span>Full Name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                    />
                  </label>

                  <label className="sth-community__field">
                    <span>Phone Number</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+92 3XX XXXXXXX"
                    />
                  </label>
                </div>

                <label className="sth-community__field">
                  <span>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                </label>

                <label className="sth-community__field">
                  <span>You Are Joining As</span>

                  <select
                    name="memberType"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select member type
                    </option>

                    <option value="buyer">
                      Solar Buyer
                    </option>

                    <option value="installer">
                      Installer / EPC
                    </option>

                    <option value="supplier">
                      Supplier / Seller
                    </option>

                    <option value="engineer">
                      Engineer / Professional
                    </option>

                    <option value="student">
                      Student / Researcher
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </label>

                <label className="sth-community__field">
                  <span>About You</span>

                  <textarea
                    name="about"
                    rows={5}
                    placeholder="Tell us briefly about your interest or work in solar..."
                  />
                </label>

                <button
                  type="button"
                  className="sth-community__submit"
                >
                  Join Community
                </button>

                <p className="sth-community__form-note">
                  Membership submission will be activated when the community
                  backend is connected.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="sth-community__cta">
        <div className="sth-community__container">
          <div className="sth-community__cta-card">
            <div>
              <span>Explore Solar Trade Hub</span>

              <h2>
                Discover Products.
                <strong>Connect With Professionals.</strong>
              </h2>

              <p>
                Explore solar products, suppliers, installers, deals, tenders,
                and industry opportunities across the platform.
              </p>
            </div>

            <div className="sth-community__cta-actions">
              <Link
                href="/shop"
                className="sth-community__button sth-community__button--white"
              >
                Browse Products
              </Link>

              <Link
                href="/tenders"
                className="sth-community__button sth-community__button--outline-white"
              >
                View Tenders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}