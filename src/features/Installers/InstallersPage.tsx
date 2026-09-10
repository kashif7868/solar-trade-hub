import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  MapPin,
  Search,
  ShieldCheck,
  Star,
  UsersRound,
  Wrench,
} from "lucide-react";

import "@/components/animations/css/installers/installers-page.css";

const installers = [
  {
    id: 1,
    name: "SolarPro Engineering",
    city: "Lahore",
    rating: 4.9,
    reviews: 128,
    projects: 240,
    experience: "8+ Years",
    services: [
      "Residential Solar",
      "Commercial Solar",
      "Hybrid Systems",
    ],
  },
  {
    id: 2,
    name: "GreenVolt Solutions",
    city: "Islamabad",
    rating: 4.8,
    reviews: 94,
    projects: 180,
    experience: "7+ Years",
    services: [
      "Net Metering",
      "Battery Storage",
      "Commercial EPC",
    ],
  },
  {
    id: 3,
    name: "SunGrid Technologies",
    city: "Karachi",
    rating: 4.8,
    reviews: 86,
    projects: 165,
    experience: "6+ Years",
    services: [
      "Industrial Solar",
      "On-Grid Systems",
      "O&M Services",
    ],
  },
  {
    id: 4,
    name: "Bright Energy Pakistan",
    city: "Faisalabad",
    rating: 4.7,
    reviews: 73,
    projects: 142,
    experience: "5+ Years",
    services: [
      "Residential Solar",
      "Solar Maintenance",
      "Hybrid Backup",
    ],
  },
  {
    id: 5,
    name: "EcoPower Engineering",
    city: "Multan",
    rating: 4.9,
    reviews: 101,
    projects: 198,
    experience: "8+ Years",
    services: [
      "Commercial EPC",
      "Battery Storage",
      "Solar Design",
    ],
  },
  {
    id: 6,
    name: "Prime Solar Systems",
    city: "Peshawar",
    rating: 4.7,
    reviews: 69,
    projects: 130,
    experience: "5+ Years",
    services: [
      "On-Grid Solar",
      "Off-Grid Solar",
      "Maintenance",
    ],
  },
];

const cities = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Faisalabad",
  "Multan",
  "Peshawar",
];

export function InstallersPage() {
  return (
    <main className="sth-installers">
      <section className="sth-installers__hero">
        <div className="sth-installers__container">
          <div className="sth-installers__hero-content">
            <span className="sth-installers__eyebrow">
              <BadgeCheck size={14} strokeWidth={1.8} />
              Verified Solar Professionals
            </span>

            <h1>
              Find Trusted Solar
              <span> Installers in Pakistan</span>
            </h1>

            <p>
              Connect with qualified solar installers for residential,
              commercial and industrial projects. Compare expertise,
              location, services and project experience through Solar Trade Hub.
            </p>

            <div className="sth-installers__search">
              <Search size={18} strokeWidth={1.8} />

              <input
                type="text"
                placeholder="Search installer, city or service..."
                aria-label="Search installers"
              />

              <button type="button">
                Search Installers
              </button>
            </div>

            <div className="sth-installers__hero-stats">
              <div>
                <strong>100+</strong>
                <span>Installer Profiles</span>
              </div>

              <div>
                <strong>25+</strong>
                <span>Cities Covered</span>
              </div>

              <div>
                <strong>1,500+</strong>
                <span>Projects Listed</span>
              </div>
            </div>
          </div>

          <div className="sth-installers__hero-panel">
            <div className="sth-installers__hero-card">
              <div className="sth-installers__hero-card-icon">
                <ShieldCheck size={30} strokeWidth={1.6} />
              </div>

              <span>Solar Trade Hub Verification</span>

              <strong>
                Compare installer credentials before choosing your solar partner.
              </strong>

              <div className="sth-installers__verification-list">
                <p>
                  <CheckCircle2 size={15} />
                  Company profiles
                </p>

                <p>
                  <CheckCircle2 size={15} />
                  Service coverage
                </p>

                <p>
                  <CheckCircle2 size={15} />
                  Project experience
                </p>

                <p>
                  <CheckCircle2 size={15} />
                  Customer ratings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sth-installers__cities">
        <div className="sth-installers__container">
          <div className="sth-installers__section-head">
            <div>
              <span>Browse by Location</span>
              <h2>
                Find Installers by
                <strong> City</strong>
              </h2>
            </div>

            <p>
              Explore solar professionals serving major cities across Pakistan.
            </p>
          </div>

          <div className="sth-installers__city-grid">
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                className="sth-installers__city"
              >
                <span>
                  <MapPin size={17} strokeWidth={1.7} />
                </span>

                <strong>{city}</strong>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="sth-installers__directory">
        <div className="sth-installers__container">
          <div className="sth-installers__section-head">
            <div>
              <span>Installer Directory</span>
              <h2>
                Featured
                <strong> Solar Installers</strong>
              </h2>
            </div>

            <p>
              Compare installer profiles, services and experience before making
              contact.
            </p>
          </div>

          <div className="sth-installers__grid">
            {installers.map((installer) => (
              <article
                key={installer.id}
                className="sth-installers__card"
              >
                <div className="sth-installers__card-top">
                  <div className="sth-installers__company-icon">
                    <Building2 size={22} strokeWidth={1.7} />
                  </div>

                  <span className="sth-installers__verified-badge">
                    <BadgeCheck size={14} />
                    Verified
                  </span>
                </div>

                <h3>{installer.name}</h3>

                <div className="sth-installers__location">
                  <MapPin size={14} strokeWidth={1.7} />
                  {installer.city}, Pakistan
                </div>

                <div className="sth-installers__rating">
                  <Star
                    size={15}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />

                  <strong>{installer.rating}</strong>

                  <span>
                    ({installer.reviews} reviews)
                  </span>
                </div>

                <div className="sth-installers__metrics">
                  <div>
                    <Wrench size={15} />
                    <strong>{installer.projects}+</strong>
                    <span>Projects</span>
                  </div>

                  <div>
                    <UsersRound size={15} />
                    <strong>{installer.experience}</strong>
                    <span>Experience</span>
                  </div>
                </div>

                <div className="sth-installers__services">
                  {installer.services.map((service) => (
                    <span key={service}>
                      {service}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="sth-installers__profile-btn"
                >
                  View Installer Profile
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sth-installers__join">
        <div className="sth-installers__container">
          <div className="sth-installers__join-card">
            <div>
              <span>For Solar Professionals</span>

              <h2>
                Grow Your Business with
                <strong> Solar Trade Hub</strong>
              </h2>

              <p>
                Build your installer profile, showcase your services and connect
                with customers looking for professional solar solutions.
              </p>
            </div>

            <button type="button">
              Join Installer Network
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}