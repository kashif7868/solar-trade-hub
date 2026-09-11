import Link from "next/link";
import {
  Cookie,
  Database,
  Eye,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import "@/components/animations/css/privacy-policy/privacy-policy-page.css";

const privacySections = [
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    content: (
      <>
        <p>
          Solar Trade Hub may collect information that you provide directly
          when using the platform, creating an account, submitting a form,
          placing an order, contacting support, applying as a seller, or
          joining platform services.
        </p>

        <p>This information may include:</p>

        <ul>
          <li>Name and contact information</li>
          <li>Email address and phone number</li>
          <li>Account and profile information</li>
          <li>Business or seller information</li>
          <li>Order, enquiry, and transaction-related information</li>
          <li>Information submitted through forms or support requests</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    icon: UserCheck,
    title: "How We Use Information",
    content: (
      <>
        <p>
          Information collected through Solar Trade Hub may be used to operate,
          maintain, improve, and support the platform and its services.
        </p>

        <ul>
          <li>Provide and manage platform services</li>
          <li>Process and manage orders and enquiries</li>
          <li>Support customer and seller communication</li>
          <li>Review seller or business applications</li>
          <li>Improve marketplace functionality and user experience</li>
          <li>Maintain platform security and prevent misuse</li>
          <li>Respond to support and contact requests</li>
        </ul>
      </>
    ),
  },
  {
    id: "information-sharing",
    icon: Eye,
    title: "Information Sharing",
    content: (
      <>
        <p>
          Solar Trade Hub does not intend to disclose personal information
          unnecessarily. Information may, however, need to be shared where
          required to provide a requested marketplace service.
        </p>

        <p>
          For example, relevant order or enquiry information may be made
          available to sellers, suppliers, service providers, delivery
          partners, or other parties involved in completing the requested
          service.
        </p>

        <p>
          Information may also be disclosed where required by applicable law,
          regulation, legal process, or a lawful request from an appropriate
          authority.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    icon: LockKeyhole,
    title: "Data Security",
    content: (
      <>
        <p>
          Solar Trade Hub aims to use reasonable technical and organizational
          measures to protect information handled through the platform against
          unauthorized access, misuse, alteration, or disclosure.
        </p>

        <p>
          No internet-based platform or electronic storage method can guarantee
          absolute security. Users should also take appropriate steps to
          protect their account credentials and devices.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies & Similar Technologies",
    content: (
      <>
        <p>
          Solar Trade Hub may use cookies or similar technologies where needed
          for platform functionality, preferences, security, analytics, or
          performance.
        </p>

        <p>
          The specific cookies and consent controls used on the production
          platform should reflect the technologies actually deployed on the
          website.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    icon: FileText,
    title: "Data Retention",
    content: (
      <>
        <p>
          Information may be retained for as long as reasonably necessary to
          provide platform services, maintain appropriate business records,
          resolve disputes, enforce agreements, meet legal requirements, and
          protect legitimate platform interests.
        </p>
      </>
    ),
  },
];

export function PrivacyPolicyPage() {
  return (
    <main className="sth-privacy">
      <section className="sth-privacy__hero">
        <div className="sth-privacy__container">
          <div className="sth-privacy__hero-grid">
            <div className="sth-privacy__hero-copy">
              <span className="sth-privacy__eyebrow">
                Privacy & Data
              </span>

              <h1>
                Your Privacy Matters.
                <span>Transparency Matters Too.</span>
              </h1>

              <p>
                This Privacy Policy explains the general principles governing
                how information may be collected, used, protected, and shared
                when you interact with Solar Trade Hub.
              </p>

              <div className="sth-privacy__hero-meta">
                <span>
                  <ShieldCheck size={17} strokeWidth={1.9} />
                  Privacy-Focused
                </span>

                <span>
                  <LockKeyhole size={17} strokeWidth={1.9} />
                  Responsible Data Handling
                </span>
              </div>
            </div>

            <div className="sth-privacy__hero-visual">
              <div className="sth-privacy__visual-glow sth-privacy__visual-glow--orange" />
              <div className="sth-privacy__visual-glow sth-privacy__visual-glow--purple" />

              <div className="sth-privacy__visual-card">
                <div className="sth-privacy__visual-icon">
                  <ShieldCheck size={32} strokeWidth={1.7} />
                </div>

                <span>Solar Trade Hub</span>

                <strong>
                  Privacy.
                  <span>Security. Transparency.</span>
                </strong>

                <p>
                  Clear principles for how information is handled across the
                  platform.
                </p>

                <div className="sth-privacy__visual-points">
                  <div>
                    <LockKeyhole size={17} />
                    Responsible handling
                  </div>

                  <div>
                    <UserCheck size={17} />
                    User-focused privacy
                  </div>

                  <div>
                    <Eye size={17} />
                    Clear disclosure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sth-privacy__content">
        <div className="sth-privacy__container">
          <div className="sth-privacy__content-grid">
            <aside className="sth-privacy__navigation">
              <span>On This Page</span>

              <nav aria-label="Privacy policy sections">
                {privacySections.map((section) => (
                  <a key={section.id} href={`#${section.id}`}>
                    {section.title}
                  </a>
                ))}

                <a href="#your-choices">Your Choices</a>
                <a href="#policy-updates">Policy Updates</a>
                <a href="#contact">Contact</a>
              </nav>
            </aside>

            <div className="sth-privacy__policy">
              <div className="sth-privacy__intro">
                <span>Privacy Policy</span>

                <h2>
                  How Solar Trade Hub
                  <strong>Handles Information</strong>
                </h2>

                <p>
                  This policy applies generally to information handled through
                  Solar Trade Hub&apos;s website and related platform features.
                  The final production policy should remain aligned with the
                  actual services, integrations, payment systems, analytics,
                  and data-processing technologies deployed by the platform.
                </p>
              </div>

              {privacySections.map((section, index) => {
                const Icon = section.icon;

                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className="sth-privacy__policy-section"
                  >
                    <div className="sth-privacy__section-heading">
                      <div className="sth-privacy__section-icon">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <div>
                        <span>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3>{section.title}</h3>
                      </div>
                    </div>

                    <div className="sth-privacy__section-content">
                      {section.content}
                    </div>
                  </section>
                );
              })}

              <section
                id="your-choices"
                className="sth-privacy__policy-section"
              >
                <div className="sth-privacy__section-heading">
                  <div className="sth-privacy__section-icon">
                    <UserCheck size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span>07</span>
                    <h3>Your Choices</h3>
                  </div>
                </div>

                <div className="sth-privacy__section-content">
                  <p>
                    Depending on the services available and applicable legal
                    requirements, users may be able to request updates or
                    corrections to certain information associated with them.
                  </p>

                  <p>
                    Privacy-related enquiries can be submitted through the
                    Solar Trade Hub contact channel.
                  </p>
                </div>
              </section>

              <section
                id="policy-updates"
                className="sth-privacy__policy-section"
              >
                <div className="sth-privacy__section-heading">
                  <div className="sth-privacy__section-icon">
                    <FileText size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span>08</span>
                    <h3>Policy Updates</h3>
                  </div>
                </div>

                <div className="sth-privacy__section-content">
                  <p>
                    This Privacy Policy may be updated as Solar Trade Hub
                    develops, introduces new services, changes platform
                    technologies, or responds to applicable legal or regulatory
                    requirements.
                  </p>

                  <p>
                    The latest version published on this page will represent
                    the current policy.
                  </p>
                </div>
              </section>

              <section
                id="contact"
                className="sth-privacy__policy-section"
              >
                <div className="sth-privacy__section-heading">
                  <div className="sth-privacy__section-icon">
                    <Mail size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span>09</span>
                    <h3>Privacy Questions</h3>
                  </div>
                </div>

                <div className="sth-privacy__section-content">
                  <p>
                    If you have questions about this Privacy Policy or how
                    information is handled through Solar Trade Hub, please use
                    our Contact page.
                  </p>

                  <Link
                    href="/contact"
                    className="sth-privacy__contact-link"
                  >
                    Contact Solar Trade Hub
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="sth-privacy__notice">
        <div className="sth-privacy__container">
          <div className="sth-privacy__notice-card">
            <ShieldCheck size={25} strokeWidth={1.8} />

            <div>
              <strong>Production Legal Review</strong>
              <p>
                Before launch, this policy should be reviewed against the
                platform&apos;s actual account system, checkout, payments,
                seller onboarding, analytics, cookies, third-party services,
                and applicable legal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}