import { FeaturedBrands } from "./components/FeaturedBrands";
import { FeaturedSuppliers } from "./components/FeaturedSuppliers";
import { HeroSection } from "./components/HeroSection";
import { NewsSection } from "./components/NewsSection";
import { PopularProducts } from "./components/PopularProducts";
import { PromoBanners } from "./components/PromoBanners";
import { QuoteCTA } from "./components/QuoteCTA";
import { ShopByCategory } from "./components/ShopByCategory";
import { SolarPricesSection } from "./components/SolarPricesSection";
import { StatsSection } from "./components/StatsSection";
import { WhatsAppCTA } from "./components/WhatsAppCTA";
import { WhySolarTradeHub } from "./components/WhySolarTradeHub";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ShopByCategory />
      <FeaturedBrands />
      <PromoBanners />
      <PopularProducts />
      <WhySolarTradeHub />
      <FeaturedSuppliers />
      <SolarPricesSection />
      <QuoteCTA />
      <NewsSection />
      <WhatsAppCTA />
    </>
  );
}