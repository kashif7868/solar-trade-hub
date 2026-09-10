import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  Clock3,
  Filter,
  MapPin,
  Search,
  ShieldCheck,
  SolarPanel,
  Zap,
} from "lucide-react";

import "@/components/animations/css/tenders/tenders-page.css";

const tenders = [
  {
    id: 1,
    title: "Supply & Installation of 500kW Rooftop Solar System",
    organization: "Industrial Development Authority",
    location: "Lahore",
    category: "Commercial Solar",
    deadline: "18 Sep 2026",
    posted: "2 days ago",
    status: "Open",
  },
  {
    id: 2,
    title: "Solarization of Public Sector Buildings",
    organization: "Government Energy Department",
    location: "Islamabad",
    category: "Public Sector",
    deadline: "21 Sep 2026",
    posted: "3 days ago",
    status: "Open",
  },
  {
    id: 3,
    title: "Supply of Lithium Battery Energy Storage Systems",
    organization: "Power Infrastructure Services",
    location: "Karachi",
    category: "Battery Storage",
    deadline: "25 Sep 2026",
    posted: "4 days ago",
    status: "Open",
  },
  {
    id: 4,
    title: "Installation of Hybrid Solar Systems for Schools",
    organization: "Education Support Foundation",
    location: "Multan",
    category: "Hybrid Solar",
    deadline: "28 Sep 2026",
    posted: "5 days ago",
    status: "Open",
  },
  {
    id: 5,
    title: "Procurement of Solar Panels and Inverters",
    organization: "Municipal Services Authority",
    location: "Faisalabad",
    category: "Solar Equipment",
    deadline: "30 Sep 2026",
    posted: "6 days ago",
    status: "Open",
  },
  {
    id: 6,
    title: "Design & EPC of 1MW Industrial Solar Project",
    organization: "Manufacturing Group Pakistan",
    location: "Sialkot",
    category: "Industrial EPC",
    deadline: "03 Oct 2026",
    posted: "1 week ago",
    status: "Open",
  },
];

const categories = [
  "All Tenders",
  "Commercial Solar",
  "Public Sector",
  "Battery Storage",
  "Hybrid Solar",
  "Industrial EPC",
];

export function TendersPage() {
  return (
    <main className="sth-tenders">
      <section className="sth-tenders__hero">
        <div className="sth-tenders__container">
          <div className="sth-tenders__hero-content">
            <span className="sth-tenders__eyebrow">
              <BadgeCheck size={14} strokeWidth={1.8} />
              Solar Tender Opportunities
            </span>

            <h1>
              Discover Solar
              <span> Tenders Across Pakistan</span>
            </h1>

            <p>
              Explore solar procurement, EPC, equipment supply and renewable
              energy tender opportunities from public and private organizations
              through Solar Trade Hub.
            </p>

            <div className="sth-tenders__search">
              <Search size={18} strokeWidth={1.8} />

              <input
                type="text"
                placeholder="Search tenders, organization or city..."
                aria-label="Search solar tenders"
              />

              <button type="button">
                Search Tenders
              </button>
            </div>

            <div className="sth-tenders__stats">
              <div>
                <strong>120+</strong>
                <span>Active Opportunities</span>
              </div>

              <div>
                <strong>30+</strong>
                <span>Cities Covered</span>
              </div>

              <div>
                <strong>50+</strong>
                <span>Organizations</span>
              </div>
            </div>
          </div>

          <div className="sth-tenders__hero-panel">
            <div className="sth-tenders__hero-card">
              <div className="sth-tenders__hero-icon">
                <SolarPanel size={32} strokeWidth={1.6} />
              </div>

              <span>SOLAR TRADE HUB</span>

              <strong>
                One place to discover solar business opportunities.
              </strong>

              <div className="sth-tenders__hero-points">
                <p>
                  <ShieldCheck size={15} />
                  Tender listings
                </p>

                <p>
                  <Building2 size={15} />
                  Public & private sector
                </p>

                <p>
                  <Zap size={15} />
                  EPC & equipment opportunities
                </p>

                <p>
                  <CalendarDays size={15} />
                  Deadline tracking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sth-tenders__directory">
        <div className="sth-tenders__container">
          <div className="sth-tenders__toolbar">
            <div>
              <span>Browse Opportunities</span>

              <h2>
                Latest
                <strong> Solar Tenders</strong>
              </h2>
            </div>

            <button type="button" className="sth-tenders__filter-btn">
              <Filter size={15} strokeWidth={1.8} />
              Filters
            </button>
          </div>

          <div className="sth-tenders__category-row">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={[
                  "sth-tenders__category",
                  index === 0
                    ? "sth-tenders__category--active"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="sth-tenders__grid">
            {tenders.map((tender) => (
              <article
                key={tender.id}
                className="sth-tenders__card"
              >
                <div className="sth-tenders__card-head">
                  <span className="sth-tenders__status">
                    {tender.status}
                  </span>

                  <span className="sth-tenders__posted">
                    <Clock3 size={12} strokeWidth={1.8} />
                    {tender.posted}
                  </span>
                </div>

                <span className="sth-tenders__card-category">
                  {tender.category}
                </span>

                <h3>{tender.title}</h3>

                <div className="sth-tenders__organization">
                  <Building2 size={14} strokeWidth={1.7} />
                  {tender.organization}
                </div>

                <div className="sth-tenders__details">
                  <div>
                    <MapPin size={14} strokeWidth={1.7} />

                    <span>
                      Location
                      <strong>{tender.location}</strong>
                    </span>
                  </div>

                  <div>
                    <CalendarDays size={14} strokeWidth={1.7} />

                    <span>
                      Closing Date
                      <strong>{tender.deadline}</strong>
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="sth-tenders__view-btn"
                >
                  <span>View Tender Details</span>
                  <ArrowRight size={15} strokeWidth={1.8} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sth-tenders__cta">
        <div className="sth-tenders__container">
          <div className="sth-tenders__cta-card">
            <div>
              <span>For Organizations</span>

              <h2>
                Publish Your Solar Tender on
                <strong> Solar Trade Hub</strong>
              </h2>

              <p>
                Reach suppliers, installers and solar EPC companies across
                Pakistan through a focused renewable energy platform.
              </p>
            </div>

            <button type="button">
              Publish a Tender
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}