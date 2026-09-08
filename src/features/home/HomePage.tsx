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
        <ShopByCategory />
        <PopularProducts />
      </div>

      <div className="sth-home__trust-group">
        <FeaturedSuppliers />
        <WhySolarTradeHub />
        <SolarPricesSection />
        <FeaturedBrands />
        <PromoBanners />
      </div>
    </div>
  );
}