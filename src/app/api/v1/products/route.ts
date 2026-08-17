import { NextResponse } from "next/server";

import { popularProducts } from "@/data/productData";

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "Products fetched successfully.",
      data: popularProducts,
    },
    {
      status: 200,
    }
  );
}