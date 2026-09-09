"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Banknote,
  Building2,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  UserRound,
} from "lucide-react";

import { useCartStore } from "@/store/cartStore";

import "@/components/animations/css/checkout/checkout.css";

export function CheckoutPage() {
  const items = useCartStore(
    (state) => state.items
  );

  const subtotal = items.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const formatPrice = (
    value: number
  ) =>
    new Intl.NumberFormat(
      "en-PK"
    ).format(value);

  if (items.length === 0) {
    return (
      <section className="sth-checkout">
        <div className="sth-checkout__container">
          <div className="sth-checkout__empty">
            <ShoppingBag
              size={32}
              strokeWidth={1.6}
            />

            <h1>
              Your cart is empty
            </h1>

            <p>
              Add products to your
              cart before proceeding
              to checkout.
            </p>

            <Link
              href="/shop"
              className="sth-checkout__shop"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sth-checkout">
      <div className="sth-checkout__container">
        <div className="sth-checkout__breadcrumb">
          <Link href="/">
            Home
          </Link>

          <span>›</span>

          <Link href="/cart">
            Cart
          </Link>

          <span>›</span>

          <strong>
            Checkout
          </strong>
        </div>

        <div className="sth-checkout__heading">
          <div>
            <Link
              href="/cart"
              className="sth-checkout__back"
            >
              <ArrowLeft size={14} />
              Back to Cart
            </Link>

            <h1>
              <span className="sth-checkout__heading-orange">
                Secure
              </span>{" "}
              <span className="sth-checkout__heading-purple">
                Checkout
              </span>
            </h1>

            <p>
              Complete your order
              information below.
            </p>
          </div>
        </div>

        <div className="sth-checkout__layout">
          <div className="sth-checkout__main">
            <section className="sth-checkout__card">
              <div className="sth-checkout__card-heading">
                <span>
                  <UserRound size={18} />
                </span>

                <div>
                  <h2>
                    Contact Information
                  </h2>

                  <p>
                    Enter your contact
                    details for this order.
                  </p>
                </div>
              </div>

              <div className="sth-checkout__form-grid">
                <label className="sth-checkout__field">
                  <span>
                    Full Name
                  </span>

                  <div className="sth-checkout__input">
                    <UserRound size={15} />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                    />
                  </div>
                </label>

                <label className="sth-checkout__field">
                  <span>
                    Phone Number
                  </span>

                  <div className="sth-checkout__input">
                    <Phone size={15} />

                    <input
                      type="tel"
                      placeholder="+92 3XX XXXXXXX"
                    />
                  </div>
                </label>

                <label className="sth-checkout__field sth-checkout__field--full">
                  <span>
                    Email Address
                  </span>

                  <div className="sth-checkout__input">
                    <Mail size={15} />

                    <input
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>
                </label>
              </div>
            </section>

            <section className="sth-checkout__card">
              <div className="sth-checkout__card-heading">
                <span>
                  <MapPin size={18} />
                </span>

                <div>
                  <h2>
                    Delivery Address
                  </h2>

                  <p>
                    Where should we
                    deliver your order?
                  </p>
                </div>
              </div>

              <div className="sth-checkout__form-grid">
                <label className="sth-checkout__field sth-checkout__field--full">
                  <span>
                    Address
                  </span>

                  <div className="sth-checkout__input">
                    <MapPin size={15} />

                    <input
                      type="text"
                      placeholder="House, street, area"
                    />
                  </div>
                </label>

                <label className="sth-checkout__field">
                  <span>
                    City
                  </span>

                  <div className="sth-checkout__input">
                    <Building2 size={15} />

                    <input
                      type="text"
                      placeholder="Lahore"
                    />
                  </div>
                </label>

                <label className="sth-checkout__field">
                  <span>
                    Province
                  </span>

                  <select>
                    <option value="">
                      Select province
                    </option>

                    <option value="Punjab">
                      Punjab
                    </option>

                    <option value="Sindh">
                      Sindh
                    </option>

                    <option value="KPK">
                      Khyber Pakhtunkhwa
                    </option>

                    <option value="Balochistan">
                      Balochistan
                    </option>

                    <option value="Islamabad">
                      Islamabad
                    </option>
                  </select>
                </label>
              </div>
            </section>

            <section className="sth-checkout__card">
              <div className="sth-checkout__card-heading">
                <span>
                  <CreditCard size={18} />
                </span>

                <div>
                  <h2>
                    Payment Method
                  </h2>

                  <p>
                    Select how you want
                    to pay.
                  </p>
                </div>
              </div>

              <div className="sth-checkout__payment-options">
                <label className="sth-checkout__payment">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    defaultChecked
                  />

                  <span className="sth-checkout__payment-icon">
                    <Banknote size={19} />
                  </span>

                  <span>
                    <strong>
                      Cash on Delivery
                    </strong>

                    <small>
                      Pay when your
                      order arrives.
                    </small>
                  </span>
                </label>

                <label className="sth-checkout__payment">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                  />

                  <span className="sth-checkout__payment-icon">
                    <Building2 size={19} />
                  </span>

                  <span>
                    <strong>
                      Bank Transfer
                    </strong>

                    <small>
                      Transfer payment
                      directly to our
                      bank account.
                    </small>
                  </span>
                </label>
              </div>
            </section>
          </div>

          <aside className="sth-checkout__summary">
            <div className="sth-checkout__summary-heading">
              <ShoppingBag size={18} />

              <div>
                <h2>
                  Order Summary
                </h2>

                <span>
                  {totalItems}{" "}
                  {totalItems === 1
                    ? "item"
                    : "items"}
                </span>
              </div>
            </div>

            <div className="sth-checkout__products">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="sth-checkout__product"
                >
                  <div className="sth-checkout__product-image">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="60px"
                    />

                    <span>
                      {item.quantity}
                    </span>
                  </div>

                  <div className="sth-checkout__product-info">
                    <strong>
                      {item.name}
                    </strong>

                    <small>
                      {item.sku}
                    </small>
                  </div>

                  <strong className="sth-checkout__product-price">
                    Rs.{" "}
                    {formatPrice(
                      item.price *
                        item.quantity
                    )}
                  </strong>
                </div>
              ))}
            </div>

            <div className="sth-checkout__totals">
              <div>
                <span>
                  Subtotal
                </span>

                <strong>
                  Rs.{" "}
                  {formatPrice(
                    subtotal
                  )}
                </strong>
              </div>

              <div>
                <span>
                  Delivery
                </span>

                <strong className="sth-checkout__free">
                  Free
                </strong>
              </div>
            </div>

            <div className="sth-checkout__grand-total">
              <span>
                Total
              </span>

              <strong>
                Rs.{" "}
                {formatPrice(
                  subtotal
                )}
              </strong>
            </div>

            <button
              type="button"
              className="sth-checkout__place-order"
            >
              Place Order
            </button>

            <p className="sth-checkout__secure-note">
              Secure checkout •
              Official warranty •
              Verified solar products
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}