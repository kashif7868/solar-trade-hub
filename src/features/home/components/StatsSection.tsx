import {
  Headphones,
  ShieldCheck,
  Truck,
  UsersRound,
} from "lucide-react";

import "@/components/animations/css/home/stats-section.css";

const stats = [
  {
    icon: ShieldCheck,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: UsersRound,
    value: "500+",
    label: "Trusted Partners",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Technical Support",
  },
  {
    icon: Truck,
    value: "PK",
    label: "Nationwide Delivery",
  },
];

export function StatsSection() {
  return (
    <section className="sth-stats">
      <div className="sth-stats__container">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="sth-stats__item"
            >
              <span className="sth-stats__icon">
                <Icon size={18} strokeWidth={1.8} />
              </span>

              <div className="sth-stats__content">
                <strong className="sth-stats__value">
                  {item.value}
                </strong>

                <span className="sth-stats__label">
                  {item.label}
                </span>
              </div>

              {index !== stats.length - 1 && (
                <span className="sth-stats__divider" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}