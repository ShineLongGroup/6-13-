import Image from "next/image";

const productLines = [
  {
    title: "Tri-proof Lighting",
    keyword: "LED tri proof light IP65",
    text: "IP65, IP66 and IP69K fixtures for wet, dusty and industrial environments.",
    specs: ["120-150 lm/W", "IP65/IP69K", "Parking / factory / farm"]
  },
  {
    title: "Panel Lighting",
    keyword: "LED panel light 600x600",
    text: "Commercial panel lights for offices, retail spaces, supermarkets and public buildings.",
    specs: ["600x600 options", "Flicker-free", "Commercial ceilings"]
  },
  {
    title: "Linear Lighting",
    keyword: "LED linear light supplier",
    text: "Seamless, linkable linear systems for long continuous commercial lighting runs.",
    specs: ["Seamless connection", "Low glare optics", "Retail / warehouse"]
  }
];

const applications = [
  ["Parking Garage", "Parkade tri-proof lights with durable wiring and IP-rated protection."],
  ["Warehouse", "Linear and industrial lighting matched to mounting height and aisle layout."],
  ["Supermarket", "Panel and linear lighting for clean retail presentation and rollout consistency."],
  ["Factory", "Durable lighting for production lines, inspection areas and humid zones."]
];

const proofPoints = [
  ["2010", "Founded"],
  ["10,000+ m²", "Factory area"],
  ["150+", "Team members"],
  ["OEM/ODM", "Customization"],
  ["UL / TUV / CE", "Certification support"]
];

const contentPillars = [
  "How to choose LED tri-proof lights",
  "IP65 vs IP66 vs IP69K explained",
  "Parking garage lighting buying guide",
  "Warehouse lighting layout guide",
  "LED panel light 600x600 guide",
  "LED lighting certification checklist"
];

const faqs = [
  {
    q: "What is the main goal of this website?",
    a: "The first version should generate qualified inquiries, support SEO growth and provide focused landing pages for paid traffic."
  },
  {
    q: "What should the inquiry form collect?",
    a: "Name, email, country, WhatsApp, product requirement, application, quantity and certification needs."
  },
  {
    q: "How should ShineLong handle certifications online?",
    a: "Publish only verified certifications and model coverage. Do not invent certificate images, customer logos or project claims."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ShineLong Technology Corp., Ltd.",
    url: "https://www.shinelongled.com",
    logo: "https://www.shinelongled.com/assets/shinelong-logo.png",
    email: "sales@shinelongled.com",
    telephone: "+86 755 8520 3898"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="siteHeader">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="/">
            <Image src="/assets/shinelong-logo.png" alt="ShineLong logo" width={50} height={50} />
            <span>
              <span className="green">Shine</span>
              <span className="orangeText">Long</span>
            </span>
          </a>
          <div className="navLinks">
            <div className="megaItem">
              <a href="#products">Products</a>
              <div className="megaMenu megaProducts">
                <div className="megaInner">
                  <a className="megaContactTrigger" href="#mega-contact-popup">
                    <span>Need help?</span>
                    <strong>Contact Sales</strong>
                  </a>
                  <div className="megaLevels">
                    <div className="megaLevelTwo">
                      <a className="active" href="/products/led-tri-proof-lights/"><span>01</span> LED Tri-proof Lights</a>
                      <a href="#products"><span>02</span> LED Panel Lights</a>
                      <a href="#products"><span>03</span> LED Linear Lights</a>
                    </div>
                    <div className="megaLevelThree">
                      <div className="megaKicker">LED Tri-proof Lights series</div>
                      <div className="megaSubgrid">
                        <a href="/products/led-tri-proof-lights/">Parkade EU & AU Garage Lights</a>
                        <a href="/products/led-tri-proof-lights/">Parkade US Vapor Tight Light</a>
                        <a href="/products/led-tri-proof-lights/">Rancher IP69K LED Poultry Light</a>
                        <a href="/products/led-tri-proof-lights/">Eco-Rancher IP69K LED Poultry Light</a>
                        <a href="/products/led-tri-proof-lights/">Rancher IP69K Low UGR</a>
                        <a href="/products/led-tri-proof-lights/">Eco-Rancher Plastic IP69K</a>
                        <a href="/products/led-tri-proof-lights/">Rancher-Mini LED Tri-proof Light</a>
                        <a href="/products/led-tri-proof-lights/">Alpha Vapor Tight Light</a>
                        <a href="/products/led-tri-proof-lights/">Eco Alpha Vapor Tight Light</a>
                        <a href="/products/led-tri-proof-lights/">Eco Mini II Tri-proof Light</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="megaItem"><a href="#applications">Applications</a><div className="megaMenu"><div className="megaInner megaSimple"><a href="#applications"><strong>Parking Garage Lighting</strong><span>Parkade and vapor tight product path</span></a><a href="#applications"><strong>Warehouse Lighting</strong><span>Linear and industrial lighting selection</span></a><a href="#applications"><strong>Supermarket Lighting</strong><span>Panel and linear commercial solutions</span></a><a href="#applications"><strong>Factory Lighting</strong><span>Durable lights for production environments</span></a><form className="megaForm" action="mailto:sales@shinelongled.com" method="post"><span>Application RFQ</span><input name="email" type="email" placeholder="Email" required /><input name="application" placeholder="Application" /><button type="submit">Ask Sales</button></form></div></div></div>
            <div className="megaItem"><a href="#capability">Capability</a><div className="megaMenu"><div className="megaInner megaSimple"><a href="#capability"><strong>OEM/ODM Customization</strong><span>Product, label, packaging and project configuration</span></a><a href="#capability"><strong>Quality Control</strong><span>Industrial-grade inspection and documentation</span></a><a href="#capability"><strong>Certification Support</strong><span>UL, TUV, CE, SAA and market-specific files</span></a><a href="#contact"><strong>Sales Enablement</strong><span>Catalog, specs, RFQ fields and WhatsApp handoff</span></a><form className="megaForm" action="mailto:sales@shinelongled.com" method="post"><span>Factory audit</span><input name="email" type="email" placeholder="Email" required /><input name="message" placeholder="What do you need?" /><button type="submit">Contact</button></form></div></div></div>
            <div className="megaItem"><a href="#seo">SEO Plan</a><div className="megaMenu"><div className="megaInner megaSimple"><a href="#seo"><strong>Tri-proof Buying Guide</strong><span>How to choose IP-rated LED lights</span></a><a href="#seo"><strong>IP65 vs IP66 vs IP69K</strong><span>Answer engine ready technical content</span></a><a href="#seo"><strong>Parking Garage Lighting Guide</strong><span>Application content for ads and SEO</span></a><a href="#seo"><strong>Certification Checklist</strong><span>Buyer education for global markets</span></a><form className="megaForm" action="mailto:sales@shinelongled.com" method="post"><span>Get resources</span><input name="email" type="email" placeholder="Email" required /><input name="topic" placeholder="Topic" /><button type="submit">Request</button></form></div></div></div>
            <a href="#contact">RFQ</a>
          </div>
          <a className="navCta" href="#contact">Start RFQ</a>
        </nav>
      </header>

      <div className="contactPopup" id="mega-contact-popup" aria-label="Contact sales popup">
        <a className="popupBackdrop" href="#products" aria-label="Close popup" />
        <form className="popupCard" action="mailto:sales@shinelongled.com" method="post">
          <a className="popupClose" href="#products" aria-label="Close">×</a>
          <span>Contact ShineLong sales</span>
          <strong>Get catalog, specs, and price support.</strong>
          <input name="email" type="email" placeholder="Email" required />
          <input name="country" placeholder="Country / market" />
          <input name="product" defaultValue="LED Tri-proof Lights" />
          <textarea name="message" placeholder="Quantity, application, certification needs..." />
          <button type="submit">Send Inquiry</button>
        </form>
      </div>

      <main>
        <section className="hero">
          <div className="heroCanvas">
            <div className="heroCopy">
              <p className="eyebrow">LED lighting procurement hub</p>
              <h1>Build a clearer path from product discovery to qualified RFQ</h1>
              <p>
                A B2B website template for ShineLong that helps overseas buyers compare product
                lines, match applications, download catalog files and submit project-ready
                inquiries.
              </p>
              <div className="heroActions">
                <a className="primaryBtn" href="#contact">Get a Project Quote</a>
                <a className="secondaryBtn" href="#contact">
                  Get Catalog by Form
                </a>
              </div>
            </div>

            <aside className="rfqBoard" aria-label="Quick RFQ board">
              <div className="boardHeader">
                <span>RFQ Builder</span>
                <strong>12h response target</strong>
              </div>
              <div className="boardField">
                <span>Target market</span>
                <b>Europe / Saudi Arabia / USA / Australia</b>
              </div>
              <div className="boardField">
                <span>Product focus</span>
                <b>Tri-proof · Panel · Linear</b>
              </div>
              <div className="boardField">
                <span>Buyer type</span>
                <b>Importer · Wholesaler · Contractor</b>
              </div>
              <div className="boardField">
                <span>Required files</span>
                <b>Catalog · Specs · Certifications</b>
              </div>
            </aside>
          </div>
        </section>

        <section className="proofStrip" aria-label="ShineLong trust data">
          {proofPoints.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="section productSection" id="products">
          <div className="container">
            <div className="sectionIntro">
              <p className="eyebrow">Product architecture</p>
              <h2>Three product paths, each built for search intent and sales follow-up</h2>
              <p>
                Instead of showing every SKU at once, the homepage pushes buyers into three clear
                product families with quick answer copy and RFQ-ready specifications.
              </p>
            </div>
            <div className="productMatrix">
              {productLines.map((item) => (
                <article key={item.title}>
                  <div className="productTopline">{item.keyword}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="specPills">
                    {item.specs.map((spec) => (
                      <span key={spec}>{spec}</span>
                    ))}
                  </div>
                  {item.title === "Tri-proof Lighting" ? (
                    <a className="cardLink" href="/products/led-tri-proof-lights/">
                      View tri-proof collection
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section visualBand" id="applications">
          <div className="container visualGrid">
            <div>
              <p className="eyebrow">Application-led conversion</p>
              <h2>Let buyers start from their project environment</h2>
              <p>
                Paid traffic and SEO traffic should land on application pages that answer buyer
                problems first, then recommend ShineLong product lines.
              </p>
              <div className="applicationList">
                {applications.map(([title, text]) => (
                  <div key={title}>
                    <span>{title}</span>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="imagePanel">
              <Image
                src="/assets/shinelong-company-photo.jpg"
                alt="ShineLong company and lighting showroom"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
          </div>
        </section>

        <section className="section capability" id="capability">
          <div className="container capabilityGrid">
            <div className="capabilityCard">
              <p className="eyebrow">Factory evidence</p>
              <h2>Turn capability into buyer confidence</h2>
              <p>
                The site should show what overseas buyers need to verify: production ability,
                certification support, quality control, customization and delivery readiness.
              </p>
            </div>
            <div className="evidenceGrid">
              <article><strong>OEM/ODM</strong><span>Product, label, packaging and project configuration.</span></article>
              <article><strong>Quality Control</strong><span>Industrial-grade inspection and production documentation.</span></article>
              <article><strong>Verified Claims</strong><span>No invented customer logos, cases or certificate images.</span></article>
              <article><strong>Sales Enablement</strong><span>Catalog, specification sheets, RFQ fields and WhatsApp handoff.</span></article>
            </div>
          </div>
        </section>

        <section className="section seoSection" id="seo">
          <div className="container seoGrid">
            <div>
              <p className="eyebrow">SEO / AIO / GEO engine</p>
              <h2>Build content that can answer real procurement questions</h2>
              <p>
                The resource center should not be a generic blog. It should become a practical LED
                lighting buying library for importers, distributors and contractors.
              </p>
            </div>
            <div className="contentPillars">
              {contentPillars.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section faqSection">
          <div className="container faqGrid">
            <div>
              <p className="eyebrow">Buyer questions</p>
              <h2>Make the next step obvious before the buyer leaves</h2>
            </div>
            <div className="faqList">
              {faqs.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contactSection" id="contact">
          <div className="container contactGrid">
            <div>
              <p className="eyebrow">Qualified inquiry path</p>
              <h2>Send ShineLong a project-ready RFQ</h2>
              <p>
                Fill in the form to receive the ShineLong catalog and help sales reply with the
                right product, document set and pricing direction.
              </p>
              <div className="contactLinks">
                <a href="mailto:sales@shinelongled.com">sales@shinelongled.com</a>
                <a href="https://wa.me/447542534055">WhatsApp: +44 7542 534055</a>
                <a href="tel:+8675585203898">+86 755 8520 3898</a>
              </div>
            </div>
            <form className="quoteForm" action="mailto:sales@shinelongled.com" method="post">
              <label>Name<input name="name" required /></label>
              <label>Email<input type="email" name="email" required /></label>
              <label>Country<input name="country" required /></label>
              <label>WhatsApp<input name="whatsapp" /></label>
              <label>Product Requirement<input name="product" defaultValue="Catalog request / LED lighting project" required /></label>
              <label>Usage / Application<input name="application" placeholder="Parking garage, warehouse..." /></label>
              <label className="full">Message<textarea name="message" placeholder="Quantity, target market, certification needs, delivery schedule..." /></label>
              <button className="primaryBtn full" type="submit">Submit Inquiry</button>
              <p className="formNote">Thanks, our sales team will contact you within 12 hours.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <Image src="/assets/shinelong-white-logo.png" alt="ShineLong white logo" width={180} height={40} />
          <p>© 2010-2026 ShineLong Technology Corp., Ltd. Built for SEO, AIO and qualified B2B inquiries.</p>
        </div>
      </footer>
    </>
  );
}
