import { Suspense } from "react";

import { ShopPage } from "@/features/shop/ShopPage";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ShopPage />
    </Suspense>
  );
}