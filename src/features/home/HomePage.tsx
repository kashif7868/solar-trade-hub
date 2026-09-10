import { ScrollReveal } from "@/components/common/ScrollReveal/ScrollReveal";

import { FeaturedBrands } from "./components/FeaturedBrands";
import { FeaturedSuppliers } from "./components/FeaturedSuppliers";
import { HeroSection } from "./components/HeroSection";
import { PopularProducts } from "./components/PopularProducts";
import { PromoBanners } from "./components/PromoBanners";
import { ShopByCategory } from "./components/ShopByCategory";
import { SolarPricesSection } from "./components/SolarPricesSection";
import { WhySolarTradeHub } from "./components/WhySolarTradeHub";

import "@/components/animations/css/home/home.css";

export function HomePage() {
  return (
    <div className="sth-home">
      <HeroSection />

      <div className="sth-home__marketplace-group">
        <ScrollReveal
          variant="up"
          duration={700}
        >
          <ShopByCategory />
        </ScrollReveal>

        <ScrollReveal
          variant="up"
          delay={80}
          duration={720}
        >
          <PopularProducts />
        </ScrollReveal>
      </div>

      <div className="sth-home__trust-group">
        <ScrollReveal
          variant="left"
          duration={720}
        >
          <FeaturedSuppliers />
        </ScrollReveal>

        <ScrollReveal
          variant="right"
          duration={720}
        >
          <WhySolarTradeHub />
        </ScrollReveal>

        <ScrollReveal
          variant="up"
          duration={720}
        >
          <SolarPricesSection />
        </ScrollReveal>

        <ScrollReveal
          variant="scale"
          duration={700}
        >
          <FeaturedBrands />
        </ScrollReveal>

        <ScrollReveal
          variant="up"
          duration={720}
        >
          <PromoBanners />
        </ScrollReveal>
      </div>
    </div>
  );
}