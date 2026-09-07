import { FeaturedBrands } from "./components/FeaturedBrands";
import { FeaturedSuppliers } from "./components/FeaturedSuppliers";
import { HeroSection } from "./components/HeroSection";
import { PopularProducts } from "./components/PopularProducts";
import { PromoBanners } from "./components/PromoBanners";
import { QuoteCTA } from "./components/QuoteCTA";
import { ShopByCategory } from "./components/ShopByCategory";
import { SolarPricesSection } from "./components/SolarPricesSection";
import { StatsSection } from "./components/StatsSection";
import { WhatsAppCTA } from "./components/WhatsAppCTA";
import { WhySolarTradeHub } from "./components/WhySolarTradeHub";

import "@/components/animations/css/home/home.css";

export function HomePage() {
  return (
    <div className="sth-home">
      <HeroSection />

      <div className="sth-home__stats">
        <StatsSection />
      </div>

      <div className="sth-home__categories">
        <ShopByCategory />
      </div>

      <div className="sth-home__brands">
        <FeaturedBrands />
      </div>

      <div className="sth-home__products">
        <PopularProducts />
      </div>

      <div className="sth-home__promos">
        <PromoBanners />
      </div>

      <div className="sth-home__why">
        <WhySolarTradeHub />
      </div>

      <div className="sth-home__suppliers">
        <FeaturedSuppliers />
      </div>

      <div className="sth-home__prices">
        <SolarPricesSection />
      </div>

      <div className="sth-home__quote">
        <QuoteCTA />
      </div>

      <div className="sth-home__whatsapp">
        <WhatsAppCTA />
      </div>
    </div>
  );
}