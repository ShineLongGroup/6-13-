import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LED Tri-proof Lights Collection",
  description:
    "Explore ShineLong LED tri-proof light series including Parkade, Rancher IP69K, Eco-Rancher, Rancher Mini, Alpha and Eco series for industrial and commercial projects.",
  alternates: {
    canonical: "/products/led-tri-proof-lights/"
  }
};

const triProofSeries = [
  {
    name: "Parkade EU & AU Garage Lights",
    image: "/assets/tri-proof/series/parkade-eu-au.jpg",
    application: "Parking garages, commercial corridors and damp utility spaces",
    range: "20W-100W · 600-3000 mm",
    highlights: ["Linkable / tool-free", "Up to 150 lm/W", "94V0 materials", "L80B10 long lifetime"]
  },
  {
    name: "Parkade US Vapor Tight Light",
    image: "/assets/tri-proof/series/parkade-us.jpg",
    application: "US parking garage and vapor tight retrofit projects",
    range: "20W-100W · 2 ft to 8 ft",
    highlights: ["DLC 5.1 premium option", "Single / linkable / rear connection", "1/2 and 3/4 connector options"]
  },
  {
    name: "Rancher IP69K LED Poultry Light",
    image: "/assets/tri-proof/series/rancher-ip69k.jpg",
    application: "Poultry farms, livestock houses, washdown and corrosive environments",
    range: "20W-60W · 600-1500 mm",
    highlights: ["IP69K", "Anti-corrosion and anti-UV", "S316 components", "Waterjet clean"]
  },
  {
    name: "Eco-Rancher IP69K LED Poultry Light",
    image: "/assets/tri-proof/series/eco-rancher-ip69k.jpg",
    application: "Indoor poultry lighting projects needing full PC housing",
    range: "20W / 36W / 45W",
    highlights: ["IP69K", "Anti-yellowing", "No dark area", "Full PC housing"]
  },
  {
    name: "Rancher IP69K Low UGR",
    image: "/assets/tri-proof/series/rancher-low-ugr.jpg",
    application: "Poultry and industrial areas requiring lower glare",
    range: "20W-60W · UGR <12 / UGR <22 options",
    highlights: ["IP69K / IK10", "Low UGR", "Aluminum rebreather", "Linkable S316 components"]
  },
  {
    name: "Eco-Rancher Plastic IP69K Tri-proof Light",
    image: "/assets/tri-proof/series/eco-rancher-plastic.jpg",
    application: "Cost-sensitive indoor tri-proof and agricultural lighting projects",
    range: "20W / 35W / 45W",
    highlights: ["IP69K / IK09", "CCT setting option", "Power setting option", "Tool-free and cost-effective"]
  },
  {
    name: "Rancher-Mini LED Tri-proof Light",
    image: "/assets/tri-proof/series/rancher-mini.jpg",
    application: "Compact spaces requiring small diameter linkable tri-proof lighting",
    range: "10W / 20W / 30W · 600-1500 mm",
    highlights: ["40 mm diameter", "No water condensation", "PC UV resistance", "S316 components"]
  },
  {
    name: "Alpha Vapor Tight Light",
    image: "/assets/tri-proof/series/alpha-vapor-tight.jpg",
    application: "Industrial vapor tight replacement for fluorescent fittings",
    range: "40W-60W · 4 ft / 5 ft",
    highlights: ["Full PC housing", "S304 clips", "Anti-yellowing", "No sulfur seal"]
  },
  {
    name: "Eco Alpha Vapor Tight Light",
    image: "/assets/tri-proof/series/eco-alpha-vapor-tight.jpg",
    application: "Cost-effective commercial and industrial vapor tight projects",
    range: "20W-60W · 4 ft / 5 ft",
    highlights: ["Full PC housing", "Anti-yellowing", "No dark area", "Project batch supply"]
  },
  {
    name: "Eco Mini II Tri-proof Light",
    image: "/assets/tri-proof/series/eco-mini-ii.jpg",
    application: "Slim and economical tri-proof lighting for utility and commercial spaces",
    range: "20W / 30W / 40W",
    highlights: ["IP65 / IK09", "Linkable", "Tool-free", "120-150 lm/W option"]
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "LED Tri-proof Lights Collection",
  description:
    "ShineLong LED tri-proof light series for parking garages, poultry farms, factories and commercial damp environments.",
  mainEntity: triProofSeries.map((item) => ({
    "@type": "Product",
    name: item.name,
    brand: { "@type": "Brand", name: "ShineLong" },
    category: "LED Tri-proof Light",
    description: `${item.application}. ${item.range}.`
  }))
};

export default function TriProofCollectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="collectionPage">
        <section className="collectionHero">
          <div className="container collectionHeroGrid">
            <div>
              <p className="eyebrow">Product collection</p>
              <h1>LED Tri-proof Lights Collection</h1>
              <p>
                A focused collection page for ShineLong tri-proof series from the catalog, built
                for buyers comparing parking garage, vapor tight, poultry, farm and industrial
                lighting options.
              </p>
              <div className="heroActions">
                <a className="primaryBtn" href="/#contact">Request Specs & Price</a>
                <a className="secondaryBtn" href="/#contact">Get Catalog by Form</a>
              </div>
            </div>
            <div className="collectionImage">
              <Image
                src="/assets/shinelong-company-photo.jpg"
                alt="ShineLong LED lighting showroom and factory"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionIntro">
              <p className="eyebrow">Series map</p>
              <h2>Choose by environment, protection rating and installation requirement</h2>
              <p>
                Use this page as the SEO and sales landing page for “LED tri proof light IP65”,
                “vapor tight light”, “IP69K poultry light” and parking garage lighting inquiries.
              </p>
            </div>
            <div className="seriesGrid">
              {triProofSeries.map((item) => (
                <article className="seriesCard" key={item.name}>
                  <div className="seriesImage">
                    <Image src={item.image} alt={item.name} fill sizes="(max-width: 900px) 100vw, 50vw" />
                  </div>
                  <div className="seriesBody">
                    <span>{item.range}</span>
                    <h3>{item.name}</h3>
                    <p>{item.application}</p>
                    <div className="specPills">
                      {item.highlights.map((highlight) => (
                        <em key={highlight}>{highlight}</em>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section capability">
          <div className="container collectionSplit">
            <div>
              <p className="eyebrow">Buyer guidance</p>
              <h2>How to select the right tri-proof series</h2>
            </div>
            <div className="selectionList">
              <p><b>Parking garage:</b> start with Parkade EU/AU or Parkade US depending on market and certification needs.</p>
              <p><b>Poultry and washdown:</b> compare Rancher IP69K, Eco-Rancher IP69K and Low UGR versions.</p>
              <p><b>General vapor tight:</b> use Alpha, Eco Alpha or Eco Mini II based on budget, size and installation method.</p>
              <p><b>RFQ details:</b> send country, application, quantity, voltage, certification requirement and target delivery schedule.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
