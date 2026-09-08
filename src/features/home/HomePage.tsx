import { FeaturedBrands } from "./components/FeaturedBrands";
import { FeaturedSuppliers } from "./components/FeaturedSuppliers";
import { HeroSection } from "./components/HeroSection";
import { PopularProducts } from "./components/PopularProducts";
import { QuoteCTA } from "./components/QuoteCTA";
import { ShopByCategory } from "./components/ShopByCategory";
import { SolarPricesSection } from "./components/SolarPricesSection";
import { WhySolarTradeHub } from "./components/WhySolarTradeHub";

import "@/components/animations/css/home/home.css";

export function HomePage() {
  return (
    <div className="sth-home">
      <HeroSection />

      <div className="sth-home__marketplace-group">
        <ShopByCategory />
        <FeaturedBrands />
        <PopularProducts />
      </div>

      <div className="sth-home__trust-group">
        <WhySolarTradeHub />
        <FeaturedSuppliers />
        <SolarPricesSection />
      </div>

      <div className="sth-home__conversion-group">
        <QuoteCTA />
      </div>
    </div>
  );
}