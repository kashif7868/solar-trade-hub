import {
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Truck,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Verified Suppliers",
    description:
      "Connect with trusted solar suppliers and verified marketplace partners.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Products",
    description:
      "Explore quality solar panels, inverters, batteries and accessories.",
  },
  {
    icon: Headphones,
    title: "Engineering Support",
    description:
      "Get technical guidance for residential, commercial and industrial projects.",
  },
  {
    icon: Truck,
    title: "Nationwide Access",
    description:
      "Find solar products and suppliers across major cities in Pakistan.",
  },
];

export function WhySolarTradeHub() {
  return (
    <section className="bg-[#07143D] py-14 text-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#ED2436]">
            Why Choose Us
          </span>

          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            Why Solar Trade Hub
          </h2>

          <p className="mt-3 text-sm leading-6 text-white/65">
            A focused solar marketplace designed to make product discovery,
            supplier access and technical decision-making easier.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#ED2436]/40
                  hover:bg-white/[0.06]
                "
              >
                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-xl
                    border border-white/10
                    bg-white/5
                  "
                >
                  <Icon className="h-5 w-5 text-[#ED2436]" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}