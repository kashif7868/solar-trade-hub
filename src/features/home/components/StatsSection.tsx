import {
  Headphones,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: PackageCheck,
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
    <section className="relative z-10 bg-white">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="-mt-7 grid overflow-hidden rounded-lg border border-white/10 bg-[#091B52] shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`
                  flex min-h-[110px] items-center gap-4 px-6 py-5
                  ${
                    index !== stats.length - 1
                      ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                      : ""
                  }
                  ${index === 1 ? "sm:border-b-0 sm:border-r" : ""}
                `}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#07143D]">
                  <Icon className="h-6 w-6 text-[#ED2436]" />
                </div>

                <div>
                  <p className="text-2xl font-bold leading-none text-white">
                    {item.value}
                  </p>

                  <p className="mt-2 text-xs leading-4 text-white/65">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}