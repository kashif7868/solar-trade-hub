import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  CircleDollarSign,
  Headphones,
  PackageCheck,
  RefreshCcw,
  ShieldCheck,
  Truck,
  UsersRound,
  Wrench,
  Zap,
} from "lucide-react";

import "@/components/animations/css/home/why-solar-trade-hub.css";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Verified Suppliers",
    description:
      "Connect with trusted solar suppliers and verified marketplace partners.",
    variant: "purple",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Products",
    description:
      "Compare quality solar panels, inverters, batteries and accessories.",
    variant: "orange",
  },
  {
    icon: CircleDollarSign,
    title: "Transparent Choices",
    description:
      "Compare products, specifications and market options before you buy.",
    variant: "purple",
  },
  {
    icon: RefreshCcw,
    title: "Reliable Support",
    description:
      "Get practical support for product selection and supplier coordination.",
    variant: "orange",
  },
  {
    icon: UsersRound,
    title: "Industry Network",
    description:
      "Access installers, suppliers and solar professionals across Pakistan.",
    variant: "purple",
  },
  {
    icon: Headphones,
    title: "Engineering Guidance",
    description:
      "Get technical guidance for residential, commercial and industrial projects.",
    variant: "orange",
  },
];

const processSteps = [
  {
    number: "01",
    icon: PackageCheck,
    label: "Explore",
    description: "Browse products",
  },
  {
    number: "02",
    icon: Wrench,
    label: "Compare",
    description: "Check specifications",
  },
  {
    number: "03",
    icon: ShieldCheck,
    label: "Verify",
    description: "Review suppliers",
  },
  {
    number: "04",
    icon: Zap,
    label: "Get Quote",
    description: "Request pricing",
  },
  {
    number: "05",
    icon: Truck,
    label: "Delivery",
    description: "Receive products",
  },
];

export function WhySolarTradeHub() {
  return (
    <section className="sth-why">
      <div className="sth-why__container">
        <div className="sth-why__hero">
          <div className="sth-why__left">
            <div className="sth-why__header">
              <span className="sth-why__eyebrow">
                <span className="sth-why__eyebrow-line" />
                Why Solar Trade Hub
              </span>

              <h2 className="sth-why__title">
                Better Solar Decisions.
                <span> Fewer Shortcuts.</span>
              </h2>

              <p className="sth-why__intro">
                Product discovery, supplier access, technical guidance and
                market transparency in one focused solar marketplace.
              </p>
            </div>

            <div className="sth-why__benefits">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className={`sth-why__benefit sth-why__benefit--${item.variant}`}
                  >
                    <span className="sth-why__benefit-icon">
                      <Icon
                        size={17}
                        strokeWidth={1.8}
                      />
                    </span>

                    <div className="sth-why__benefit-content">
                      <h3>{item.title}</h3>

                      <p>{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <article className="sth-why__tutorial">
            <div className="sth-why__tutorial-media">
              <iframe
                src="https://www.youtube.com/embed/Mti18r6fUzo?rel=0&modestbranding=1"
                title="Solar Trade Hub tutorial video"
                className="sth-why__tutorial-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="sth-why__tutorial-content">
              <div className="sth-why__tutorial-copy">
                <span className="sth-why__tutorial-eyebrow">
                  <span />
                  Video Guide
                </span>

                <h3>
                  Understand the System Before You Invest
                </h3>

                <p>
                  Learn how to evaluate solar panels, inverters, batteries,
                  system sizing and supplier claims before making a purchase.
                </p>
              </div>

              <Link
                href="/shop"
                className="sth-why__tutorial-link"
              >
                <span>Explore Products</span>

                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                />
              </Link>
            </div>
          </article>
        </div>

        <div className="sth-why__process">
          <div className="sth-why__process-intro">
            <span className="sth-why__process-eyebrow">
              <span />
              How It Works
            </span>

            <h3>
              From Product Search
              <span> to Solar Delivery</span>
            </h3>

            <p>
              A simple path from product discovery to a verified
              purchase decision.
            </p>
          </div>

          <div className="sth-why__steps">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="sth-why__step"
                >
                  <div className="sth-why__step-top">
                    <span className="sth-why__step-icon">
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                      />
                    </span>

                    {index !== processSteps.length - 1 && (
                      <span className="sth-why__step-line">
                        <ArrowRight
                          size={13}
                          strokeWidth={1.7}
                        />
                      </span>
                    )}
                  </div>

                  <span className="sth-why__step-number">
                    {step.number}
                  </span>

                  <strong>{step.label}</strong>

                  <span className="sth-why__step-description">
                    {step.description}
                  </span>
                </div>
              );
            })}
          </div>

          <Link
            href="/shop"
            className="sth-why__process-link"
          >
            <span>Start Exploring</span>

            <ArrowRight
              size={15}
              strokeWidth={1.8}
            />
          </Link>
        </div>

        <div className="sth-why__footer">
          <div className="sth-why__footer-glow" />

          <div className="sth-why__footer-content">
            <span className="sth-why__footer-eyebrow">
              <span />
              Need Technical Help?
            </span>

            <h3>
              Talk to Solar Trade Hub
              <span> Before You Buy</span>
            </h3>

            <p>
              Get support with product selection, compatibility
              and supplier evaluation.
            </p>
          </div>

          <Link
            href="/get-quote"
            className="sth-why__footer-cta"
          >
            <span>Get Solar Quote</span>

            <ArrowRight
              size={15}
              strokeWidth={1.8}
            />
          </Link>

          <div className="sth-why__footer-features">
            <span>
              <UsersRound
                size={14}
                strokeWidth={1.8}
              />
              People
            </span>

            <span>
              <PackageCheck
                size={14}
                strokeWidth={1.8}
              />
              Products
            </span>

            <span>
              <BadgeCheck
                size={14}
                strokeWidth={1.8}
              />
              Partnerships
            </span>

            <span>
              <BatteryCharging
                size={14}
                strokeWidth={1.8}
              />
              Cleaner Pakistan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}