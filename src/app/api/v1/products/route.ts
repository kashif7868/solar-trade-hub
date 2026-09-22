import { NextResponse } from "next/server";

import { popularProducts } from "@/data/productData";

/* =========================================================
   STATIC EXPORT CONFIG

   Required because frontend uses:

   output: "export"

   This API route currently serves local static product data,
   so it can safely be generated during `next build`.
========================================================= */

export const dynamic =
  "force-static";

/* =========================================================
   GET PRODUCTS
========================================================= */

export async function GET() {
  return NextResponse.json(
    {
      success: true,

      message:
        "Products fetched successfully.",

      data:
        popularProducts,
    },
    {
      status: 200,
    }
  );
}