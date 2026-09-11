import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  PackageCheck,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";

import "@/components/animations/css/track-order/track-order-page.css";

const trackingSteps = [
  {
    icon: CheckCircle2,
    title: "Order Confirmed",
    description:
      "Your order has been received and confirmed by Solar Trade Hub.",
  },
  {
    icon: PackageCheck,
    title: "Processing",
    description:
      "Your order is being prepared and coordinated with the relevant seller or supplier.",
  },
  {
    icon: Truck,
    title: "In Transit",
    description:
      "The shipment has been dispatched and is moving toward the delivery destination.",
  },
  {
    icon: CheckCircle2,
    title: "Delivered",
    description:
      "The order has reached the customer and delivery is complete.",
  },
];

export function TrackOrderPage() {
  return (
    <main className="sth-track-order">
      <section className="sth-track-order__hero">
        <div className="sth-track-order__container">
          <div className="sth-track-order__hero-grid">
            <div className="sth-track-order__hero-copy">
              <span className="sth-track-order__eyebrow">
                Order Tracking
              </span>

              <h1>
                Track Your Solar Order.
                <span>Stay Updated at Every Step.</span>
              </h1>

              <p>
                Enter your order reference and contact details to check the
                latest status of your Solar Trade Hub order.
              </p>

              <div className="sth-track-order__hero-trust">
                <span>
                  <ShieldCheck size={17} strokeWidth={1.9} />
                  Secure Order Lookup
                </span>

                <span>
                  <Clock3 size={17} strokeWidth={1.9} />
                  Latest Order Status
                </span>
              </div>
            </div>

            <div className="sth-track-order__hero-visual">
              <div className="sth-track-order__visual-glow sth-track-order__visual-glow--orange" />
              <div className="sth-track-order__visual-glow sth-track-order__visual-glow--purple" />

              <div className="sth-track-order__visual-card sth-track-order__visual-card--main">
                <span>Order Status</span>

                <strong>
                  Simple.
                  <span>Clear. Trackable.</span>
                </strong>

                <p>
                  Check order progress from confirmation through processing,
                  dispatch, and delivery.
                </p>
              </div>

              <div className="sth-track-order__visual-card sth-track-order__visual-card--processing">
                <PackageCheck size={21} strokeWidth={1.8} />

                <div>
                  <small>Current Status</small>
                  <strong>Processing</strong>
                </div>
              </div>

              <div className="sth-track-order__visual-card sth-track-order__visual-card--delivery">
                <Truck size={21} strokeWidth={1.8} />

                <div>
                  <small>Next Stage</small>
                  <strong>Dispatch</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sth-track-order__lookup">
        <div className="sth-track-order__container">
          <div className="sth-track-order__lookup-grid">
            <div className="sth-track-order__lookup-copy">
              <span>Find Your Order</span>

              <h2>
                Enter Your
                <strong>Order Details</strong>
              </h2>

              <p>
                Use the order reference provided after checkout. Order tracking
                will be connected to the commerce backend during order-system
                integration.
              </p>

              <div className="sth-track-order__help-card">
                <Search size={21} strokeWidth={1.8} />

                <div>
                  <strong>Where is my order reference?</strong>
                  <p>
                    Your order reference will appear on the order confirmation
                    page and in the confirmation communication sent after a
                    successful order.
                  </p>
                </div>
              </div>
            </div>

            <div className="sth-track-order__form-card">
              <form className="sth-track-order__form">
                <label className="sth-track-order__field">
                  <span>Order Reference</span>

                  <input
                    type="text"
                    name="orderReference"
                    placeholder="e.g. STH-2026-00125"
                  />
                </label>

                <label className="sth-track-order__field">
                  <span>Email or Phone Number</span>

                  <input
                    type="text"
                    name="contact"
                    placeholder="Enter the contact used with your order"
                  />
                </label>

                <button
                  type="button"
                  className="sth-track-order__submit"
                >
                  <Search size={18} strokeWidth={1.9} />
                  Track Order
                </button>

                <p className="sth-track-order__form-note">
                  Live order lookup will be activated when the order backend is
                  connected.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="sth-track-order__journey">
        <div className="sth-track-order__container">
          <div className="sth-track-order__section-head">
            <span>Order Journey</span>

            <h2>
              Know What Happens
              <strong>After You Order</strong>
            </h2>

            <p>
              A clear order flow helps customers understand what stage their
              purchase has reached.
            </p>
          </div>

          <div className="sth-track-order__steps">
            {trackingSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="sth-track-order__step"
                >
                  <div className="sth-track-order__step-top">
                    <div className="sth-track-order__step-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="sth-track-order__step-icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sth-track-order__support">
        <div className="sth-track-order__container">
          <div className="sth-track-order__support-card">
            <div>
              <span>Need Assistance?</span>

              <h2>
                Need Help With
                <strong>Your Order?</strong>
              </h2>

              <p>
                Contact the Solar Trade Hub team if you need assistance with an
                order, delivery update, seller coordination, or another
                marketplace enquiry.
              </p>
            </div>

            <div className="sth-track-order__support-actions">
              <Link
                href="/contact"
                className="sth-track-order__button sth-track-order__button--white"
              >
                Contact Support
              </Link>

              <Link
                href="/shop"
                className="sth-track-order__button sth-track-order__button--outline-white"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}