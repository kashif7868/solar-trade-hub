"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";

import type { Product } from "@/types/product";

import "@/components/animations/css/product/product-gallery.css";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({
  product,
}: ProductGalleryProps) {
  return (
    <section className="sth-product-gallery">
      <div className="sth-product-gallery__main">
        {product.badge && (
          <span className="sth-product-gallery__badge">
            {product.badge}
          </span>
        )}

        <div className="sth-product-gallery__glow" />

        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
            className="sth-product-gallery__image"
          />
        ) : (
          <div className="sth-product-gallery__fallback">
            <ImageIcon
              size={34}
              strokeWidth={1.5}
            />

            <span>
              Product image unavailable
            </span>
          </div>
        )}
      </div>

      <div className="sth-product-gallery__thumbnails">
        <button
          type="button"
          className="sth-product-gallery__thumbnail sth-product-gallery__thumbnail--active"
          aria-label={`View ${product.name} image`}
        >
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="72px"
              className="sth-product-gallery__thumbnail-image"
            />
          ) : (
            <ImageIcon
              size={18}
              strokeWidth={1.5}
            />
          )}
        </button>
      </div>
    </section>
  );
}