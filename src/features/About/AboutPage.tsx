import Link from "next/link";
import {
    BadgeCheck,
    Building2,
    Handshake,
    ShieldCheck,
    SolarPanel,
    Users,
} from "lucide-react";

import "@/components/animations/css/about/about-page.css";

const values = [
    {
        icon: ShieldCheck,
        title: "Trust First",
        description:
            "We focus on verified information, clearer comparisons, and better visibility across Pakistan’s solar ecosystem.",
    },
    {
        icon: Handshake,
        title: "Better Connections",
        description:
            "Solar Trade Hub brings buyers, suppliers, installers, brands, and businesses into one connected platform.",
    },
    {
        icon: BadgeCheck,
        title: "Quality Matters",
        description:
            "Our goal is to make it easier for users to discover credible solar products, services, and opportunities.",
    },
];

const ecosystem = [
    {
        icon: SolarPanel,
        title: "Solar Products",
        description:
            "Explore panels, inverters, batteries, energy storage systems, structures, cables, and accessories.",
    },
    {
        icon: Building2,
        title: "Suppliers & Businesses",
        description:
            "Discover solar suppliers and businesses operating across the Pakistani market.",
    },
    {
        icon: Users,
        title: "Installers & Professionals",
        description:
            "Find solar installers and professionals for residential, commercial, and industrial requirements.",
    },
];

export function AboutPage() {
    return (
        <main className="sth-about">
            <section className="sth-about__hero">
                <div className="sth-about__container">
                    <div className="sth-about__hero-grid">
                        <div className="sth-about__hero-copy">
                            <span className="sth-about__eyebrow">
                                About Solar Trade Hub
                            </span>

                            <h1>
                                Pakistan&apos;s Solar
                                <span>Trade Ecosystem</span>
                            </h1>

                            <p>
                                Solar Trade Hub is being built as a dedicated platform for
                                Pakistan&apos;s solar industry — helping people discover
                                products, compare market options, connect with suppliers and
                                installers, explore tenders, and access useful solar market
                                information from one place.
                            </p>

                            <div className="sth-about__hero-actions">
                                <Link href="/shop" className="sth-about__button sth-about__button--primary">
                                    Explore Products
                                </Link>

                                <Link
                                    href="/installers"
                                    className="sth-about__button sth-about__button--secondary"
                                >
                                    Find Installers
                                </Link>
                            </div>
                        </div>

                        <div className="sth-about__hero-visual">
                            <div className="sth-about__visual-card sth-about__visual-card--main">
                                <span className="sth-about__visual-kicker">
                                    Solar Trade Hub
                                </span>

                                <strong>
                                    Everything Solar.
                                    <span>One Connected Platform.</span>
                                </strong>

                                <p>
                                    Products, suppliers, installers, prices, tenders, and solar
                                    market opportunities.
                                </p>
                            </div>

                            <div className="sth-about__visual-card sth-about__visual-card--orange">
                                Marketplace
                            </div>

                            <div className="sth-about__visual-card sth-about__visual-card--purple">
                                Industry Network
                            </div>

                            <div className="sth-about__visual-orbit sth-about__visual-orbit--one" />
                            <div className="sth-about__visual-orbit sth-about__visual-orbit--two" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="sth-about__section">
                <div className="sth-about__container">
                    <div className="sth-about__section-head">
                        <span>What We Are Building</span>

                        <h2>
                            A Better Way to Navigate
                            <strong>Pakistan&apos;s Solar Industry</strong>
                        </h2>

                        <p>
                            The solar market is growing rapidly, but product discovery,
                            pricing, supplier visibility, installer selection, and industry
                            information are often fragmented. Solar Trade Hub is designed to
                            bring these pieces together.
                        </p>
                    </div>

                    <div className="sth-about__ecosystem-grid">
                        {ecosystem.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article className="sth-about__info-card" key={item.title}>
                                    <div className="sth-about__info-icon">
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

            <section className="sth-about__mission">
                <div className="sth-about__container">
                    <div className="sth-about__mission-grid">
                        <div>
                            <span className="sth-about__eyebrow">
                                Our Mission
                            </span>

                            <h2>
                                Make Solar Decisions
                                <strong>Clearer and Easier</strong>
                            </h2>
                        </div>

                        <div className="sth-about__mission-copy">
                            <p>
                                Our mission is to improve transparency and accessibility across
                                Pakistan&apos;s solar market by providing a platform where
                                users can explore products, businesses, installers, prices, and
                                opportunities without navigating dozens of disconnected
                                sources.
                            </p>

                            <p>
                                Solar Trade Hub is intended to serve homeowners, commercial
                                buyers, solar professionals, EPC companies, suppliers,
                                distributors, manufacturers, and other participants in the
                                energy ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sth-about__section sth-about__section--values">
                <div className="sth-about__container">
                    <div className="sth-about__section-head sth-about__section-head--center">
                        <span>Our Principles</span>

                        <h2>
                            Built Around
                            <strong>Trust and Access</strong>
                        </h2>
                    </div>

                    <div className="sth-about__values-grid">
                        {values.map((value) => {
                            const Icon = value.icon;

                            return (
                                <article className="sth-about__value-card" key={value.title}>
                                    <div className="sth-about__value-icon">
                                        <Icon size={25} strokeWidth={1.8} />
                                    </div>

                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="sth-about__cta">
                <div className="sth-about__container">
                    <div className="sth-about__cta-card">
                        <div>
                            <span>Explore Solar Trade Hub</span>

                            <h2>
                                Discover Pakistan&apos;s
                                <strong>Solar Marketplace</strong>
                            </h2>

                            <p>
                                Browse products, discover installers, explore suppliers, check
                                solar prices, and find industry opportunities.
                            </p>
                        </div>

                        <div className="sth-about__cta-actions">
                            <Link href="/shop" className="sth-about__button sth-about__button--white">
                                Browse Products
                            </Link>

                            <Link
                                href="/tenders"
                                className="sth-about__button sth-about__button--outline-white"
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