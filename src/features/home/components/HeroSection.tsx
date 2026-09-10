import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Building2,
  Headphones,
  Leaf,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  SunMedium,
  TrendingDown,
  UsersRound,
  Zap,
} from "lucide-react";

import "@/components/animations/css/home/hero-section.css";

export function HeroSection() {
  return (
    <section className="sth-hero">
      <div
        className="sth-hero__background"
        aria-hidden="true"
      >
        <span className="sth-hero__orb sth-hero__orb--purple" />
        <span className="sth-hero__orb sth-hero__orb--orange" />
        <span className="sth-hero__grid-pattern" />
      </div>

      <div className="sth-hero__container">
        {/* LEFT */}
        <div className="sth-hero__content">
          <div className="sth-hero__eyebrow">
            <span className="sth-hero__eyebrow-icon">
              <Sparkles size={13} strokeWidth={1.8} />
            </span>

            <span>Solar Trade Hub Pakistan</span>
          </div>

          <h1 className="sth-hero__title">
            Everything Solar.
            <span>One Trusted Platform.</span>
          </h1>

          <p className="sth-hero__description">
            Solar Trade Hub helps you compare solar panels,
            inverters, batteries and energy solutions from
            trusted suppliers across Pakistan. Discover
            transparent pricing, verified technology and
            smarter solar choices in one place.
          </p>

          <div className="sth-hero__features">
            <div className="sth-hero__feature">
              <span className="sth-hero__feature-icon">
                <ShieldCheck size={16} strokeWidth={1.8} />
              </span>
              <span>Verified Products</span>
            </div>

            <div className="sth-hero__feature">
              <span className="sth-hero__feature-icon">
                <UsersRound size={16} strokeWidth={1.8} />
              </span>
              <span>Trusted Suppliers</span>
            </div>

            <div className="sth-hero__feature">
              <span className="sth-hero__feature-icon">
                <Headphones size={16} strokeWidth={1.8} />
              </span>
              <span>Engineering Support</span>
            </div>
          </div>

          <div className="sth-hero__actions">
            <Link
              href="/shop"
              className="sth-hero__btn sth-hero__btn--primary"
            >
              <ShoppingBag size={16} strokeWidth={1.8} />
              <span>Explore Products</span>
              <ArrowRight size={15} strokeWidth={1.9} />
            </Link>

            <Link
              href="/#solar-prices"
              className="sth-hero__btn sth-hero__btn--secondary"
            >
              <TrendingDown size={16} strokeWidth={1.8} />
              <span>Solar Prices</span>
            </Link>
          </div>

          <div className="sth-hero__proof">
            <div className="sth-hero__proof-icons">
              <span>
                <BadgeCheck size={13} />
              </span>
              <span>
                <Building2 size={13} />
              </span>
              <span>
                <Zap size={13} />
              </span>
            </div>

            <div className="sth-hero__proof-copy">
              <strong>500+ Products</strong>
              <span>Available through Solar Trade Hub</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="sth-hero__visual">
          <div className="sth-hero__visual-glow sth-hero__visual-glow--purple" />
          <div className="sth-hero__visual-glow sth-hero__visual-glow--orange" />

          <div className="sth-hero__visual-stage">
            <div className="sth-hero__orbit" aria-hidden="true">
              <span className="sth-hero__orbit-dot sth-hero__orbit-dot--one" />
              <span className="sth-hero__orbit-dot sth-hero__orbit-dot--two" />
              <span className="sth-hero__orbit-dot sth-hero__orbit-dot--three" />
            </div>

            <div className="sth-hero__solar-sun">
              <SunMedium size={25} strokeWidth={1.8} />
            </div>

            <div className="sth-hero__market-card">
              <div className="sth-hero__market-card-top">
                <div>
                  <span className="sth-hero__market-label">
                    SOLAR TRADE HUB
                  </span>

                  <strong>Smart Energy Hub</strong>
                </div>

                <span className="sth-hero__market-live">
                  Live
                </span>
              </div>

              <div className="sth-hero__energy-system">
                <div className="sth-hero__device sth-hero__device--panel">
                  <div className="sth-hero__panel">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <span key={index} />
                    ))}
                  </div>

                  <small>Solar</small>
                </div>

                <div className="sth-hero__energy-line sth-hero__energy-line--one">
                  <span />
                </div>

                <div className="sth-hero__device sth-hero__device--inverter">
                  <div className="sth-hero__inverter">
                    <span className="sth-hero__inverter-screen">
                      12.0
                    </span>

                    <Zap size={15} strokeWidth={2} />
                  </div>

                  <small>Inverter</small>
                </div>

                <div className="sth-hero__energy-line sth-hero__energy-line--two">
                  <span />
                </div>

                <div className="sth-hero__device sth-hero__device--battery">
                  <div className="sth-hero__battery">
                    <BatteryCharging
                      size={23}
                      strokeWidth={1.7}
                    />

                    <div className="sth-hero__battery-level">
                      <span />
                    </div>
                  </div>

                  <small>Storage</small>
                </div>
              </div>

              <div className="sth-hero__market-footer">
                <div>
                  <span className="sth-hero__market-dot sth-hero__market-dot--orange" />
                  <span>Generation</span>
                  <strong>8.4 kW</strong>
                </div>

                <div>
                  <span className="sth-hero__market-dot sth-hero__market-dot--purple" />
                  <span>Battery</span>
                  <strong>86%</strong>
                </div>

                <div>
                  <span className="sth-hero__market-dot sth-hero__market-dot--green" />
                  <span>Status</span>
                  <strong>Active</strong>
                </div>
              </div>
            </div>

            <div className="sth-hero__float-card sth-hero__float-card--search">
              <span className="sth-hero__float-icon sth-hero__float-icon--purple">
                <Search size={15} strokeWidth={1.8} />
              </span>

              <div>
                <small>Compare</small>
                <strong>Solar Products</strong>
              </div>
            </div>

            <div className="sth-hero__float-card sth-hero__float-card--supplier">
              <span className="sth-hero__float-icon sth-hero__float-icon--orange">
                <BadgeCheck size={16} strokeWidth={1.9} />
              </span>

              <div>
                <small>Verified</small>
                <strong>Suppliers</strong>
              </div>
            </div>

            <div className="sth-hero__float-card sth-hero__float-card--green">
              <span className="sth-hero__float-icon sth-hero__float-icon--green">
                <Leaf size={15} strokeWidth={1.8} />
              </span>

              <div>
                <small>Clean Energy</small>
                <strong>For Pakistan</strong>
              </div>
            </div>

            <span className="sth-hero__particle sth-hero__particle--1" />
            <span className="sth-hero__particle sth-hero__particle--2" />
            <span className="sth-hero__particle sth-hero__particle--3" />
            <span className="sth-hero__particle sth-hero__particle--4" />
          </div>
        </div>
      </div>

      <div className="sth-hero__bottom-line" />
    </section>
  );
}