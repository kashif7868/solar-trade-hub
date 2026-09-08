import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  Leaf,
  ShieldCheck,
  UsersRound,
  Zap,
} from "lucide-react";

import "@/components/animations/css/home/hero-section.css";

export function HeroSection() {
  return (
    <section className="sth-hero">
      <div className="sth-hero__container">
        {/* LEFT CONTENT */}
        <div className="sth-hero__content">
          <div className="sth-hero__eyebrow">
            <span className="sth-hero__eyebrow-dot" />
            Pakistan&apos;s Solar Marketplace
          </div>

          <h1 className="sth-hero__title">
            Everything Solar.
            <span> One Trusted Marketplace.</span>
          </h1>

          <p className="sth-hero__description">
            Compare solar panels, inverters, batteries and complete
            energy solutions from trusted suppliers across Pakistan.
            Buy smarter with technical information, transparent
            choices and engineering support.
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
              <span>Explore Products</span>
              <ArrowRight size={15} strokeWidth={1.8} />
            </Link>

            <Link
              href="/get-quote"
              className="sth-hero__btn sth-hero__btn--secondary"
            >
              Get Solar Quote
            </Link>
          </div>

          <div className="sth-hero__proof">
            <div className="sth-hero__proof-avatars">
              <span>ST</span>
              <span>ES</span>
              <span>GP</span>
            </div>

            <div className="sth-hero__proof-copy">
              <strong>500+</strong>
              <span>Solar products & marketplace listings</span>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="sth-hero__visual">
          <div className="sth-hero__visual-glow sth-hero__visual-glow--purple" />
          <div className="sth-hero__visual-glow sth-hero__visual-glow--orange" />

          <div className="sth-hero__dots sth-hero__dots--top" />
          <div className="sth-hero__dots sth-hero__dots--bottom" />

          <div className="sth-hero__energy-bubble">
            <Leaf size={16} strokeWidth={1.8} />

            <span>
              Powering a Greener
              <strong>Pakistan</strong>
            </span>
          </div>

          <div className="sth-hero__product-area">
            <Image
              src="/images/home/solar-marketplace-hero.webp"
              alt="Solar panels, inverter and battery products available on Solar Trade Hub"
              width={680}
              height={500}
              priority
              className="sth-hero__image"
            />
          </div>

          <div className="sth-hero__performance-card">
            <div className="sth-hero__performance-item">
              <span className="sth-hero__performance-icon sth-hero__performance-icon--orange">
                <Zap size={15} strokeWidth={1.8} />
              </span>

              <span>
                Reliable
                <strong>Performance</strong>
              </span>
            </div>

            <div className="sth-hero__performance-item">
              <span className="sth-hero__performance-icon sth-hero__performance-icon--purple">
                <ShieldCheck size={15} strokeWidth={1.8} />
              </span>

              <span>
                Verified
                <strong>Technology</strong>
              </span>
            </div>

            <div className="sth-hero__performance-item">
              <span className="sth-hero__performance-icon sth-hero__performance-icon--green">
                <Leaf size={15} strokeWidth={1.8} />
              </span>

              <span>
                Lower
                <strong>Energy Costs</strong>
              </span>
            </div>
          </div>

          <div className="sth-hero__info-card sth-hero__info-card--products">
            <strong>500+</strong>
            <span>Solar Products</span>
          </div>

          <div className="sth-hero__info-card sth-hero__info-card--suppliers">
            <span className="sth-hero__verified">
              <BadgeCheck size={14} />
            </span>

            <div>
              <strong>Verified</strong>
              <span>Solar Suppliers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="sth-hero__bottom-line" />
    </section>
  );
}