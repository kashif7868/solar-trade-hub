import Link from "next/link";

import {
  MessageCircle,
  PhoneCall,
} from "lucide-react";

import "@/components/animations/css/home/whatsapp-cta.css";

const whatsappNumber = "923000000000";
const phoneNumber = "+923000000000";

export function WhatsAppCTA() {
  return (
    <section className="sth-whatsapp-cta">
      <div className="sth-whatsapp-cta__container">
        <div className="sth-whatsapp-cta__panel">
          <div className="sth-whatsapp-cta__glow" />

          <div className="sth-whatsapp-cta__content">
            <div className="sth-whatsapp-cta__copy">
              <span className="sth-whatsapp-cta__badge">
                <MessageCircle size={14} strokeWidth={1.8} />
                Quick Support
              </span>

              <h2 className="sth-whatsapp-cta__title">
                Need Help Choosing the
                <span> Right Solar Product?</span>
              </h2>

              <p className="sth-whatsapp-cta__description">
                Talk to our team for product guidance, supplier
                information, pricing support and solar marketplace
                assistance.
              </p>
            </div>

            <div className="sth-whatsapp-cta__actions">
              <Link
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="sth-whatsapp-cta__button sth-whatsapp-cta__button--whatsapp"
              >
                <MessageCircle size={15} strokeWidth={1.8} />
                <span>Chat on WhatsApp</span>
              </Link>

              <Link
                href={`tel:${phoneNumber}`}
                className="sth-whatsapp-cta__button sth-whatsapp-cta__button--call"
              >
                <PhoneCall size={15} strokeWidth={1.8} />
                <span>Call Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}