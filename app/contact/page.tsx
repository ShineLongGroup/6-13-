import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ShineLong",
  description:
    "Contact ShineLong for LED lighting pricing, catalog, factory visit support, OpenStreetMap location and OEM/ODM project inquiries.",
  alternates: {
    canonical: "/contact/"
  }
};

const address =
  "A901, B902, BLDG. 4, Baolong Intelligent Industry Park, Xinnengyuan 1 Rd, BaoLong street, LongGang, ShenZhen, China, 518118";

export default function ContactPage() {
  return (
    <main className="contactPage">
      <section className="contactHero">
        <div className="container">
          <p className="eyebrow">Contact ShineLong</p>
          <h1>Plan your LED lighting RFQ or factory visit</h1>
          <p>
            Send your country, product requirement, application, quantity and certification needs.
            The sales team will contact you within 12 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contactPageGrid">
          <div className="contactInfoCard">
            <p className="eyebrow">Contact details</p>
            <h2>Send your inquiry to ShineLong</h2>
            <table>
              <tbody>
                <tr><th>Email</th><td><a href="mailto:sales@shinelongled.com">sales@shinelongled.com</a></td></tr>
                <tr><th>WhatsApp</th><td><a href="https://wa.me/447542534055">+44 7542 534055</a></td></tr>
                <tr><th>Phone</th><td><a href="tel:+8675585203898">+86 755 8520 3898</a></td></tr>
                <tr><th>Address</th><td>{address}</td></tr>
              </tbody>
            </table>
          </div>

          <form className="quoteForm contactForm" action="mailto:sales@shinelongled.com" method="post">
            <label>Name<input name="name" required /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>Country<input name="country" required /></label>
            <label>WhatsApp<input name="whatsapp" /></label>
            <label>Product Requirement<input name="product" defaultValue="Catalog request / LED lighting project" required /></label>
            <label>Usage / Application<input name="application" placeholder="Parking garage, warehouse..." /></label>
            <label className="full">Message<textarea name="message" placeholder="Quantity, certification needs, delivery schedule..." /></label>
            <button className="primaryBtn full" type="submit">Submit Inquiry</button>
            <p className="formNote">Thanks, our sales team will contact you within 12 hours.</p>
          </form>
        </div>
      </section>

      <section className="section contactMapSection">
        <div className="container factoryMapGrid">
          <div className="mapCopy">
            <p className="eyebrow">Factory location</p>
            <h2>Visit ShineLong in Longgang, Shenzhen</h2>
            <p>
              The OpenStreetMap pin is an approximate location around Baolong Intelligent Industry
              Park. Please confirm appointment details with sales before visiting.
            </p>
            <div className="addressCard">
              <strong>ShineLong Technology Corp., Ltd.</strong>
              <span>{address}</span>
              <a href="https://www.openstreetmap.org/?mlat=22.701830&mlon=114.285921#map=16/22.701830/114.285921" target="_blank" rel="noopener noreferrer">Open in OpenStreetMap</a>
            </div>
          </div>
          <div className="mapPanel">
            <iframe
              title="ShineLong factory location on OpenStreetMap"
              src="https://www.openstreetmap.org/export/embed.html?bbox=114.2819%2C22.6978%2C114.2899%2C22.7058&layer=mapnik&marker=22.701830%2C114.285921"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="factoryVisitCard">
            <Image className="visitPhoto" src="/assets/sales-team-hero.png" alt="ShineLong sales team ready to support factory visitors" fill sizes="100vw" />
            <div className="visitOverlay" />
            <Image className="visitLogo" src="/assets/shinelong-white-logo.png" alt="ShineLong logo" width={184} height={42} />
            <div className="visitCopy">
              <span>Factory visit support</span>
              <strong>Meet the ShineLong sales team before your project order.</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
