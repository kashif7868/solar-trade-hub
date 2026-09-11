import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Lightbulb,
  MapPin,
  Users,
} from "lucide-react";

import "@/components/animations/css/careers/careers-page.css";

const openings = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Lahore / Hybrid",
    description:
      "Build fast, responsive, and scalable experiences across Solar Trade Hub using modern web technologies.",
  },
  {
    title: "Marketplace Operations Executive",
    type: "Full Time",
    location: "Lahore",
    description:
      "Support supplier onboarding, product listings, marketplace quality, and day-to-day platform operations.",
  },
  {
    title: "Content & Solar Research Associate",
    type: "Full Time",
    location: "Lahore / Hybrid",
    description:
      "Research solar products, market developments, pricing, technologies, and industry insights for the platform.",
  },
];

const culture = [
  {
    icon: Lightbulb,
    title: "Build With Purpose",
    description:
      "Work on a platform designed to improve access, transparency, and connectivity across Pakistan’s solar industry.",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description:
      "Work across product, marketplace, technology, content, supplier, and business functions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Real Industry Exposure",
    description:
      "Gain hands-on exposure to solar commerce, products, EPC businesses, suppliers, installers, and market operations.",
  },
];

export function CareersPage() {
  return (
    <main className="sth-careers">
      <section className="sth-careers__hero">
        <div className="sth-careers__container">
          <div className="sth-careers__hero-grid">
            <div className="sth-careers__hero-copy">
              <span className="sth-careers__eyebrow">
                Careers at Solar Trade Hub
              </span>

              <h1>
                Build the Future of
                <span>Solar Commerce in Pakistan</span>
              </h1>

              <p>
                Join a growing platform working to connect buyers, suppliers,
                installers, products, services, and opportunities across
                Pakistan&apos;s solar industry.
              </p>

              <div className="sth-careers__hero-actions">
                <a
                  href="#open-positions"
                  className="sth-careers__button sth-careers__button--primary"
                >
                  View Open Positions
                </a>

                <Link
                  href="/about"
                  className="sth-careers__button sth-careers__button--secondary"
                >
                  About Solar Trade Hub
                </Link>
              </div>
            </div>

            <div className="sth-careers__hero-visual">
              <div className="sth-careers__visual-card sth-careers__visual-card--main">
                <span>Join the Team</span>

                <strong>
                  Technology.
                  <span>Solar. Marketplace.</span>
                </strong>

                <p>
                  Help build digital infrastructure for one of Pakistan&apos;s
                  most important emerging industries.
                </p>
              </div>

              <div className="sth-careers__visual-card sth-careers__visual-card--orange">
                <Lightbulb size={20} strokeWidth={1.8} />
                Innovation
              </div>

              <div className="sth-careers__visual-card sth-careers__visual-card--purple">
                <Users size={20} strokeWidth={1.8} />
                Collaboration
              </div>

              <div className="sth-careers__visual-orbit sth-careers__visual-orbit--one" />
              <div className="sth-careers__visual-orbit sth-careers__visual-orbit--two" />
            </div>
          </div>
        </div>
      </section>

      <section className="sth-careers__culture">
        <div className="sth-careers__container">
          <div className="sth-careers__section-head">
            <span>Why Join Us</span>

            <h2>
              Work Where Technology Meets
              <strong>Pakistan&apos;s Solar Industry</strong>
            </h2>

            <p>
              Solar Trade Hub brings together technology, commerce, energy,
              market intelligence, and industry relationships in one growing
              platform.
            </p>
          </div>

          <div className="sth-careers__culture-grid">
            {culture.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="sth-careers__culture-card"
                >
                  <div className="sth-careers__culture-icon">
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

      <section
        id="open-positions"
        className="sth-careers__positions"
      >
        <div className="sth-careers__container">
          <div className="sth-careers__section-head">
            <span>Open Positions</span>

            <h2>
              Find Your Next
              <strong>Opportunity</strong>
            </h2>

            <p>
              Explore current opportunities to work with Solar Trade Hub.
            </p>
          </div>

          <div className="sth-careers__jobs">
            {openings.map((job) => (
              <article
                key={job.title}
                className="sth-careers__job-card"
              >
                <div className="sth-careers__job-main">
                  <div className="sth-careers__job-icon">
                    <BriefcaseBusiness
                      size={23}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <h3>{job.title}</h3>

                    <div className="sth-careers__job-meta">
                      <span>{job.type}</span>

                      <span>
                        <MapPin
                          size={14}
                          strokeWidth={1.8}
                        />
                        {job.location}
                      </span>
                    </div>

                    <p>{job.description}</p>
                  </div>
                </div>

                <a
                  href={`mailto:sales@zorays.com?subject=${encodeURIComponent(
                    `Application - ${job.title}`
                  )}`}
                  className="sth-careers__job-action"
                >
                  Apply Now
                  <ArrowRight
                    size={16}
                    strokeWidth={1.9}
                  />
                </a>
              </article>
            ))}
          </div>

          <div className="sth-careers__general-application">
            <div>
              <span>Don&apos;t See Your Role?</span>

              <h3>Send Us Your Profile</h3>

              <p>
                We&apos;re interested in people with experience or strong
                potential in software, solar, marketplace operations, research,
                content, sales, and business development.
              </p>
            </div>

            <a
              href="mailto:sales@zorays.com?subject=Career Application - Solar Trade Hub"
              className="sth-careers__button sth-careers__button--primary"
            >
              Submit Your Profile
            </a>
          </div>
        </div>
      </section>

      <section className="sth-careers__cta">
        <div className="sth-careers__container">
          <div className="sth-careers__cta-card">
            <div>
              <span>Build Something Meaningful</span>

              <h2>
                Help Shape Pakistan&apos;s
                <strong>Solar Trade Ecosystem</strong>
              </h2>

              <p>
                Join a platform focused on making solar products, businesses,
                information, and opportunities easier to discover and access.
              </p>
            </div>

            <a
              href="mailto:sales@zorays.com?subject=Career Enquiry - Solar Trade Hub"
              className="sth-careers__button sth-careers__button--white"
            >
              Contact Careers
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}