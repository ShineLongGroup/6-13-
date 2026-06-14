const fs = require("fs");
const path = require("path");

const root = __dirname;
const siteUrl = "https://www.shinelongled.com";
const whatsapp = "https://wa.me/447542534055";
const catalog = "/assets/ShineLong_Catalog20260313.pdf";

const nav = [
  ["Products", "/products/"],
  ["Applications", "/applications/"],
  ["Factory", "/factory/"],
  ["Resources", "/resources/"],
  ["Downloads", "/downloads/"],
  ["Contact", "/contact/"]
];

const products = [
  {
    title: "LED Tri-proof Lights",
    slug: "/products/led-tri-proof-lights/",
    keyword: "LED tri proof light IP65",
    summary: "IP65/IP69K vapor tight and tri-proof fixtures for parking garages, industrial facilities, farms, and demanding commercial spaces.",
    specs: {
      "Protection": "IP65, IP66 and IP69K options",
      "Typical Efficacy": "120-150 lm/W by model",
      "Applications": "Parking garage, warehouse, food processing, poultry farm, factory",
      "OEM/ODM": "Housing, wiring, sensor, CCT and packaging customization"
    },
    tags: ["IP65/IP69K", "IK09/IK10", "Linkable", "OEM/ODM"]
  },
  {
    title: "LED Panel Lights",
    slug: "/products/led-panel-lights/",
    keyword: "LED panel light 600x600",
    summary: "Commercial LED panel lights including 600x600, 620x620 and custom formats for offices, supermarkets, schools and retail projects.",
    specs: {
      "Formats": "295x1195, 595x595, 620x620 and custom sizes",
      "Typical Efficacy": "100-140 lm/W by model",
      "Driver": "Internal, backlit, flicker-free and smart options",
      "Certifications": "CE, RoHS and project-specific certification support"
    },
    tags: ["600x600", "Flicker-free", "Backlit", "Commercial"]
  },
  {
    title: "LED Linear Lights",
    slug: "/products/led-linear-lights/",
    keyword: "LED linear light supplier",
    summary: "Seamless, linkable and lens-controlled linear lighting for supermarkets, warehouses, offices, showrooms and commercial corridors.",
    specs: {
      "Installation": "Ceiling, suspended, wall-mounted and track rail options",
      "Optics": "Symmetric, asymmetric and low-glare lens options",
      "Typical Efficacy": "120-150 lm/W by model",
      "Customization": "Length, lens, driver, dimming and packaging"
    },
    tags: ["Seamless", "Low glare", "Linkable", "Commercial"]
  },
  {
    title: "Parkade Tri-proof Light",
    slug: "/products/parkade-tri-proof-light/",
    keyword: "Parkade tri-proof light",
    summary: "Aluminum-cased, tool-free and linkable tri-proof lighting designed for EU, AU and US parking garage projects.",
    specs: {
      "Power Range": "20W to 100W options",
      "Length": "600 mm to 3000 mm by model",
      "Efficacy": "Up to 150 lm/W by configuration",
      "Key Features": "Tool-free wiring, 94V0 materials, L80B10 long lifetime"
    },
    tags: ["Parking garage", "Tool-free", "DLC option", "150 lm/W"]
  },
  {
    title: "Slice Panel Light",
    slug: "/products/slice-panel-light/",
    keyword: "Slice LED panel light",
    summary: "Slim commercial LED panel solution for clean ceiling installations, stable output and international project supply.",
    specs: {
      "Use Cases": "Office, retail, supermarket, school and public buildings",
      "Lighting Quality": "Stable output with low-glare options",
      "Supply": "OEM/ODM labeling, packaging and project batches",
      "Support": "Specification sheets and catalog download available"
    },
    tags: ["Commercial", "Slim design", "OEM-ready", "Clean ceiling"]
  },
  {
    title: "Seam Linear Light",
    slug: "/products/seam-linear-light/",
    keyword: "Seam LED linear light",
    summary: "Instant seamless connection linear light for long continuous lighting runs in supermarkets, corridors, offices and warehouses.",
    specs: {
      "Power Range": "20W, 40W and 80W typical families",
      "Length": "600 mm, 1200 mm and 2400 mm options",
      "Mounting": "Wall-mounted and continuous-row installation",
      "Advantage": "Seamless connection and clean linear appearance"
    },
    tags: ["Seamless", "Continuous row", "Retail", "Warehouse"]
  }
];

const applications = [
  {
    title: "Parking Garage Lighting",
    slug: "/applications/parking-garage-lighting/",
    keyword: "parking garage lighting",
    problem: "Parking garages need reliable, low-maintenance lighting that supports safety, visibility and energy control in humid or dusty environments.",
    solution: "Use Parkade and IP65/IP69K tri-proof fixtures with linkable wiring, suitable optics and project-specific certification options.",
    products: "Parkade Tri-proof Light, LED Tri-proof Lights, Seam Linear Light",
    cta: "Get Parking Garage Lighting Quote"
  },
  {
    title: "Warehouse Lighting",
    slug: "/applications/warehouse-lighting/",
    keyword: "warehouse lighting solution",
    problem: "Warehouses need efficient lighting for aisles, loading areas and storage zones while keeping installation and maintenance simple.",
    solution: "Combine linear, high bay and tri-proof families according to mounting height, aisle width, glare control and operating conditions.",
    products: "LED Linear Lights, LED Tri-proof Lights, Industrial Lighting",
    cta: "Plan Warehouse Lighting"
  },
  {
    title: "Supermarket Lighting",
    slug: "/applications/supermarket-lighting/",
    keyword: "supermarket LED lighting",
    problem: "Retail and supermarket buyers need clean visual presentation, stable color, efficient operation and product lines that can scale across stores.",
    solution: "Use LED panel and linear systems with low-glare optics, consistent CCT and OEM packaging for store rollouts.",
    products: "LED Panel Lights, Seam Linear Light, Slice Panel Light",
    cta: "Get Commercial Lighting Quote"
  },
  {
    title: "Factory Lighting",
    slug: "/applications/factory-lighting/",
    keyword: "factory lighting system LED",
    problem: "Factories need durable fixtures for dust, moisture, production lines and inspection zones with dependable replacement cycles.",
    solution: "Specify IP-rated tri-proof and linear fixtures by zone, then match power, wiring and installation methods to maintenance requirements.",
    products: "LED Tri-proof Lights, LED Linear Lights, Industrial Lighting",
    cta: "Request Factory Lighting Proposal"
  }
];

const articles = [
  {
    title: "How to Choose LED Tri-proof Lights for Parking Garages",
    slug: "/resources/how-to-choose-led-tri-proof-light/",
    description: "A buyer-focused guide to IP rating, wiring, optics, power range and supplier checks for LED tri-proof lights.",
    keyword: "how to choose LED tri proof light",
    sections: [
      ["Start with the environment", "Check humidity, dust, ceiling height, wiring route and whether the garage needs linkable fixtures or rear connection."],
      ["Match IP and material requirements", "IP65 is suitable for many indoor garages, while IP66 or IP69K options are useful when cleaning pressure, corrosion or agricultural environments are involved."],
      ["Ask for project documents", "Request spec sheets, certification files, packing details, installation guidance and replacement policy before placing bulk orders."]
    ]
  },
  {
    title: "IP65 vs IP66 vs IP69K LED Lights: Which One Do You Need?",
    slug: "/resources/ip65-vs-ip66-vs-ip69k-led-lights/",
    description: "Understand common LED lighting protection ratings for industrial, garage, poultry and outdoor-adjacent applications.",
    keyword: "what is IP66 LED light",
    sections: [
      ["IP65", "Dust tight and protected against water jets. Often used for warehouses, factories and general commercial wet areas."],
      ["IP66", "Provides stronger protection against powerful water jets and is suitable for more demanding industrial environments."],
      ["IP69K", "Designed for high-pressure, high-temperature washdown conditions such as food processing or poultry environments."]
    ]
  },
  {
    title: "LED Parking Garage Lighting Buying Guide",
    slug: "/resources/led-parking-garage-lighting-buying-guide/",
    description: "Practical buying criteria for importers and contractors planning parking garage LED lighting projects.",
    keyword: "parking garage lighting",
    sections: [
      ["Define the project zones", "Separate entrances, ramps, driving lanes, parking areas and equipment rooms because they often need different optics and wattages."],
      ["Evaluate installation speed", "Tool-free and linkable designs can reduce wiring time on repeated garage projects."],
      ["Confirm compliance needs", "Check DLC, CE, SAA, UL or local requirements based on the target market before finalizing the model."]
    ]
  },
  {
    title: "Warehouse LED Lighting Layout Guide for Importers and Contractors",
    slug: "/resources/warehouse-led-lighting-layout-guide/",
    description: "A practical overview of warehouse lighting decisions, fixture selection and quote preparation.",
    keyword: "warehouse lighting solution",
    sections: [
      ["Collect site data first", "Mounting height, rack layout, aisle width and working hours are needed before recommending wattage and beam angle."],
      ["Choose fixtures by zone", "Use linear fixtures for low and medium-height zones, high bays for tall areas and tri-proof lights for humid or dusty spaces."],
      ["Prepare the RFQ", "Include drawings, target lux, voltage, certification needs, country, quantity and installation deadline."]
    ]
  },
  {
    title: "LED Panel Light 600x600: Applications, Specs and Buying Tips",
    slug: "/resources/led-panel-light-600x600-guide/",
    description: "How overseas buyers can compare 600x600 LED panel lights for commercial projects.",
    keyword: "LED panel light 600x600",
    sections: [
      ["Common applications", "600x600 panel lights are widely used in offices, schools, hospitals, supermarkets and public buildings."],
      ["Important specs", "Compare lumen output, driver quality, flicker control, frame quality, CCT and certification."],
      ["Buying tip", "Ask for packing dimensions, installation accessories and replacement driver availability for long-term project support."]
    ]
  },
  {
    title: "OEM/ODM LED Lighting Manufacturing: What Buyers Should Check",
    slug: "/resources/oem-odm-led-lighting-manufacturing-checklist/",
    description: "A checklist for importers and distributors evaluating an OEM/ODM LED lighting manufacturer in China.",
    keyword: "OEM LED lighting manufacturer China",
    sections: [
      ["Check customization range", "Confirm whether the supplier supports housing, optics, sensor, driver, label, packaging and documentation changes."],
      ["Check quality process", "Ask how incoming materials, production testing, aging, packaging and final inspection are handled."],
      ["Check market support", "For Europe, Saudi Arabia, USA and Australia, certification and documentation requirements may differ."]
    ]
  },
  {
    title: "CE, RoHS, UL, ENEC, SAA: LED Lighting Certifications Explained",
    slug: "/resources/led-lighting-certifications-explained/",
    description: "A buyer-friendly explanation of common LED lighting certifications used in international projects.",
    keyword: "LED lighting certifications",
    sections: [
      ["Certification is market-specific", "Different target markets may require different documentation, marks and test reports."],
      ["Do not rely on claims alone", "Ask suppliers for valid files, model coverage and certificate ownership details."],
      ["Use certifications in page content carefully", "Only publish marks and certificates that are verified and applicable to the listed product."]
    ]
  }
];

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(path.join(root, filePath)), { recursive: true });
}

function writePage(urlPath, html) {
  const filePath = urlPath === "/" ? "index.html" : `${urlPath.replace(/^\/|\/$/g, "")}/index.html`;
  ensureDir(filePath);
  fs.writeFileSync(path.join(root, filePath), html);
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function header() {
  return `
    <header class="site-header">
      <nav class="nav" aria-label="Main navigation">
        <a class="brand" href="/"><img src="/assets/shinelong-logo.png" alt="ShineLong logo"><span class="brand-name"><span class="green">Shine</span><span class="accent">Long</span></span></a>
        <div class="nav-links" data-nav-links>${nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</div>
        <div class="nav-actions">
          <a class="btn secondary" href="${whatsapp}" data-track="whatsapp">WhatsApp</a>
          <a class="btn" href="/contact/">Get a Quote</a>
          <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-menu-toggle>☰</button>
        </div>
      </nav>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          <img src="/assets/shinelong-white-logo.png" alt="ShineLong white logo">
          <p>ShineLong Technology Corp., Ltd. is an LED lighting manufacturer and OEM/ODM solution provider for commercial and industrial projects.</p>
        </div>
        <div>
          <h3>Products</h3>
          ${products.slice(0, 4).map((p) => `<a href="${p.slug}">${p.title}</a>`).join("")}
        </div>
        <div>
          <h3>Applications</h3>
          ${applications.map((a) => `<a href="${a.slug}">${a.title}</a>`).join("")}
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:sales@shinelongled.com">sales@shinelongled.com</a>
          <a href="${whatsapp}">WhatsApp: +44 7542 534055</a>
          <a href="tel:+8675585203898">+86 755 8520 3898</a>
          <p>A901, B902, BLDG. 4, Baolong Intelligent Industry Park, LongGang, ShenZhen, China.</p>
        </div>
      </div>
      <div class="footer-bottom">© 2010-2026 ShineLong Technology Corp., Ltd. All rights reserved.</div>
    </footer>
    <a class="floating-whatsapp" href="${whatsapp}" aria-label="Chat on WhatsApp" data-track="whatsapp">WA</a>`;
}

function leadForm(product = "") {
  return `
    <form class="form" data-lead-form>
      <div class="form-grid">
        <label><span>Name</span><input name="name" autocomplete="name" required></label>
        <label><span>Email</span><input type="email" name="email" autocomplete="email" required></label>
        <label><span>Country</span><input name="country" autocomplete="country-name" required></label>
        <label><span>WhatsApp</span><input name="whatsapp" autocomplete="tel"></label>
      </div>
      <div class="form-grid">
        <label><span>Product Requirement</span><input name="product" value="${esc(product)}" required></label>
        <label><span>Usage / Application</span><input name="usage" placeholder="Parking garage, warehouse, supermarket..."></label>
      </div>
      <label><span>Message</span><textarea name="message" placeholder="Tell us the quantity, target market, certification needs and project timeline."></textarea></label>
      <button class="btn" type="submit">Submit Inquiry</button>
      <p class="form-note">Thanks, our sales team will contact you within 12 hours. Your email app will open with the inquiry details.</p>
    </form>`;
}

function layout({ title, description, pathName = "/", schema = [], body }) {
  const canonical = `${siteUrl}${pathName}`;
  const schemaItems = Array.isArray(schema) ? schema : [schema];
  const baseSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ShineLong Technology Corp., Ltd.",
      url: siteUrl,
      logo: `${siteUrl}/assets/shinelong-logo.png`,
      email: "sales@shinelongled.com",
      telephone: "+86 755 8520 3898",
      address: {
        "@type": "PostalAddress",
        streetAddress: "A901, B902, BLDG. 4, Baolong Intelligent Industry Park, Xinnengyuan 1 Rd, BaoLong street, LongGang",
        addressLocality: "Shenzhen",
        addressCountry: "CN"
      },
      sameAs: [
        "https://www.facebook.com/ShineLongCorp/",
        "https://www.linkedin.com/company/shenzhen-shinelong-led-lighting-co--ltd/",
        "https://www.youtube.com/channel/UC8rnVfM5RVTIQBGpNly5bPw"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ShineLong",
      url: siteUrl
    }
  ];

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${siteUrl}/assets/shinelong-company-photo.jpg">
  <link rel="stylesheet" href="/styles.css">
  ${[...baseSchema, ...schemaItems].map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join("\n  ")}
</head>
<body>
  ${header()}
  <main>${body}</main>
  ${footer()}
  <script src="/site.js"></script>
</body>
</html>`;
}

function cardGrid(items, type) {
  return `<div class="grid three">${items.map((item) => `
    <article class="card">
      <div class="icon">${type === "product" ? "LED" : "APP"}</div>
      <h3>${item.title}</h3>
      <p class="muted">${item.summary || item.problem}</p>
      <div class="tag-list">${(item.tags || [item.keyword]).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <div class="section-ctas"><a class="btn ghost" href="${item.slug}">View Details</a></div>
    </article>`).join("")}</div>`;
}

function pageHero(title, description, current) {
  return `<section class="page-hero"><div class="container">
    <div class="breadcrumb"><a href="/">Home</a> / ${esc(current || title)}</div>
    <p class="eyebrow">ShineLong B2B LED Lighting</p>
    <h1>${esc(title)}</h1>
    <p>${esc(description)}</p>
  </div></section>`;
}

function faqBlock(items) {
  return `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`;
}

function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };
}

function productSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    brand: { "@type": "Brand", name: "ShineLong" },
    description: product.summary,
    manufacturer: { "@type": "Organization", name: "ShineLong Technology Corp., Ltd." },
    category: "LED Lighting"
  };
}

function home() {
  const faqs = [
    ["Can ShineLong support OEM and ODM LED lighting projects?", "Yes. ShineLong supports OEM/ODM customization for lighting products, packaging, labeling, specifications and project requirements."],
    ["Which markets does ShineLong serve?", "The first-stage website focuses on Europe, Saudi Arabia, USA and Australia, with documentation and project support for overseas buyers."],
    ["How can I request price and specifications?", "Use the Get a Quote button, submit the inquiry form, contact sales@shinelongled.com or message ShineLong on WhatsApp."]
  ];
  writePage("/", layout({
    title: "OEM & ODM LED Lighting Manufacturer in China | ShineLong",
    description: "ShineLong manufactures LED tri-proof lights, panel lights and linear lights for commercial and industrial projects with OEM/ODM support.",
    pathName: "/",
    schema: faqSchema(faqs),
    body: `
      <section class="hero">
        <div class="hero-inner">
          <div>
            <p class="eyebrow">Since 2010 · OEM/ODM LED Lighting Manufacturer</p>
            <h1>OEM & ODM LED Lighting Manufacturer for Commercial and Industrial Projects</h1>
            <p class="lead">ShineLong helps importers, wholesalers, contractors and commercial buyers source project-ready LED tri-proof lights, panel lights and linear lighting systems.</p>
            <div class="hero-ctas">
              <a class="btn" href="/contact/">Get a Quote</a>
              <a class="btn secondary" href="${catalog}">Download Catalog</a>
            </div>
          </div>
          <aside class="hero-panel">
            <strong>Fast RFQ checklist</strong>
            <p class="muted">Send country, application, quantity, certification needs and target delivery schedule.</p>
            <ul class="quick-specs">
              <li><span>Main Products</span><b>Tri-proof, Panel, Linear</b></li>
              <li><span>Target Markets</span><b>Europe, Saudi Arabia, USA, Australia</b></li>
              <li><span>Certifications</span><b>UL, TUV, ENEC, UKCA, SAA, CE, RoHS</b></li>
              <li><span>Response</span><b>Within 12 hours</b></li>
            </ul>
          </aside>
        </div>
      </section>
      <section class="trust-strip"><div class="trust-grid">
        ${[["2010", "Company established"], ["10,000+ m²", "Factory area"], ["150+", "Elite team members"], ["OEM/ODM", "Customization support"], ["UL / CE", "Certification-ready supply"]].map(([a, b]) => `<div class="trust-item"><strong>${a}</strong><span>${b}</span></div>`).join("")}
      </div></section>
      <section class="section"><div class="container"><div class="section-head"><p class="eyebrow">Product Categories</p><h2>Core LED lighting lines for project buyers</h2><p>Build the first product path around the lines that are already supported by ShineLong catalog data and SEO intent.</p></div>${cardGrid(products.slice(0, 3), "product")}</div></section>
      <section class="section alt"><div class="container"><div class="section-head"><p class="eyebrow">Featured Products</p><h2>Recommended products for RFQ and ad landing pages</h2></div>${cardGrid(products.slice(3), "product")}</div></section>
      <section class="section"><div class="container"><div class="section-head"><p class="eyebrow">Applications</p><h2>Application pages built for SEO, AIO and advertising traffic</h2><p>Each application page answers the buyer problem, recommends products and gives a clear quote path.</p></div>${cardGrid(applications, "app")}</div></section>
      <section class="section alt"><div class="container split">
        <div><p class="eyebrow">Factory Strength</p><h2>Manufacturing, quality control and project support in one supply path</h2><p class="muted">ShineLong combines OEM/ODM customization, international delivery support and industrial-grade quality control for overseas B2B buyers.</p><div class="section-ctas"><a class="btn" href="/factory/">View Factory Capability</a><a class="btn secondary" href="/certifications/">Certifications</a></div></div>
        <img class="factory-image" src="/assets/shinelong-company-photo.jpg" alt="ShineLong company and factory">
      </div></section>
      <section class="section"><div class="container"><div class="section-head"><p class="eyebrow">Buyer FAQ</p><h2>Answers for importers, wholesalers and contractors</h2></div>${faqBlock(faqs)}</div></section>
      <section class="section quote-band"><div class="container split"><div><h2>Send your LED lighting RFQ</h2><p>Tell us your country, application, product requirement, quantity and certification needs.</p></div><div class="card">${leadForm("LED lighting project")}</div></div></section>`
  }));
}

function productsIndex() {
  writePage("/products/", layout({
    title: "LED Lighting Products | ShineLong Tri-proof, Panel and Linear Lights",
    description: "Explore ShineLong LED tri-proof lights, LED panel lights, LED linear lights and featured products for commercial and industrial projects.",
    pathName: "/products/",
    body: `${pageHero("LED Lighting Products", "Project-ready LED products for importers, wholesalers, contractors and commercial buyers.", "Products")}<section class="section"><div class="container">${cardGrid(products, "product")}</div></section>`
  }));
}

function productPage(product) {
  const faqs = [
    [`Is ${product.title} available for OEM/ODM?`, `Yes. ShineLong can support OEM/ODM requirements for ${product.title}, including labeling, packaging and project-specific configuration.`],
    [`Can I download catalog and specifications for ${product.title}?`, "Yes. Use the Download Catalog button and send your model or application requirements for detailed specification support."],
    ["Which information should I include in an RFQ?", "Please include country, application, quantity, voltage, certification needs, target delivery date and any installation constraints."]
  ];
  writePage(product.slug, layout({
    title: `${product.title} | ShineLong OEM/ODM LED Lighting`,
    description: product.summary,
    pathName: product.slug,
    schema: [productSchema(product), faqSchema(faqs)],
    body: `${pageHero(product.title, product.summary, product.title)}
      <section class="section"><div class="container grid two">
        <div class="answer-box"><p class="eyebrow">Quick Answer</p><h2>${product.keyword}</h2><p>${product.summary}</p><div class="tag-list">${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div></div>
        <div class="card"><h3>Request specs and price</h3>${leadForm(product.title)}</div>
      </div></section>
      <section class="section alt"><div class="container"><div class="section-head"><p class="eyebrow">Specifications</p><h2>Buyer-focused specification overview</h2></div><table class="spec-table"><tbody>${Object.entries(product.specs).map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join("")}<tr><th>Certifications</th><td>UL, TUV, ENEC, UKCA, SAA, CE and RoHS listed as ShineLong capabilities. Publish product-specific files only after verification.</td></tr><tr><th>Downloads</th><td><a href="${catalog}">Download ShineLong catalog</a></td></tr></tbody></table></div></section>
      <section class="section"><div class="container"><div class="section-head"><p class="eyebrow">Applications</p><h2>Recommended application paths</h2></div>${cardGrid(applications.filter((a) => product.title.includes("Panel") ? a.title.includes("Supermarket") || a.title.includes("Warehouse") : true).slice(0, 3), "app")}</div></section>
      <section class="section alt"><div class="container"><div class="section-head"><p class="eyebrow">FAQ</p><h2>Common purchasing questions</h2></div>${faqBlock(faqs)}</div></section>`
  }));
}

function applicationsIndex() {
  writePage("/applications/", layout({
    title: "LED Lighting Applications | Parking Garage, Warehouse, Supermarket and Factory",
    description: "Explore ShineLong LED lighting solutions for parking garages, warehouses, supermarkets and factories.",
    pathName: "/applications/",
    body: `${pageHero("LED Lighting Applications", "Application pages help project buyers match product families to real installation needs.", "Applications")}<section class="section"><div class="container">${cardGrid(applications, "app")}</div></section>`
  }));
}

function applicationPage(app) {
  const faqs = [
    [`Which ShineLong products are recommended for ${app.title}?`, `Recommended product families include ${app.products}. Final selection depends on mounting height, project country and certification needs.`],
    [`Can this page be used as an ad landing page?`, "Yes. It includes the application problem, solution, recommended products, quote CTA, trust signals and inquiry form."],
    ["What should I send for a lighting proposal?", "Send drawings or photos, installation height, target lux, quantity, voltage, country and expected delivery timeline."]
  ];
  writePage(app.slug, layout({
    title: `${app.title} Solution | ShineLong LED Lighting`,
    description: `${app.solution} ShineLong supports ${app.keyword} projects with OEM/ODM manufacturing and quote support.`,
    pathName: app.slug,
    schema: faqSchema(faqs),
    body: `${pageHero(`${app.title} Solution`, app.problem, app.title)}
      <section class="section"><div class="container grid two">
        <div class="answer-box"><p class="eyebrow">Problem to Solution</p><h2>${app.keyword}</h2><p><strong>Problem:</strong> ${app.problem}</p><p><strong>Solution:</strong> ${app.solution}</p><p><strong>Recommended products:</strong> ${app.products}</p></div>
        <div class="card"><h3>${app.cta}</h3>${leadForm(app.title)}</div>
      </div></section>
      <section class="section alt"><div class="container"><div class="section-head"><p class="eyebrow">Landing Page Checklist</p><h2>Built for SEO, AIO and paid traffic</h2></div><div class="grid four">${["IP rating and durability", "Certification-aware RFQ", "OEM/ODM project supply", "Catalog and WhatsApp CTA"].map((item) => `<div class="card"><div class="icon">✓</div><h3>${item}</h3><p class="muted">This section gives buyers a clear reason to contact ShineLong with project details.</p></div>`).join("")}</div></div></section>
      <section class="section"><div class="container"><div class="section-head"><p class="eyebrow">Recommended Products</p><h2>Products to review for this application</h2></div>${cardGrid(products.slice(0, 4), "product")}</div></section>
      <section class="section alt"><div class="container"><div class="section-head"><p class="eyebrow">FAQ</p><h2>Project buyer questions</h2></div>${faqBlock(faqs)}</div></section>`
  }));
}

function simplePage(pathName, title, description, content) {
  writePage(pathName, layout({ title: `${title} | ShineLong`, description, pathName, body: `${pageHero(title, description, title)}${content}` }));
}

function resources() {
  writePage("/resources/", layout({
    title: "LED Lighting Resources for SEO, AIO and Buyer Education | ShineLong",
    description: "Buyer guides about LED tri-proof lights, IP ratings, parking garage lighting, warehouse lighting and LED certifications.",
    pathName: "/resources/",
    body: `${pageHero("LED Lighting Resources", "Clear, useful buying guides written for importers, contractors and commercial lighting buyers.", "Resources")}<section class="section"><div class="container"><div class="grid three">${articles.map((a) => `<article class="card"><p class="eyebrow">${a.keyword}</p><h3>${a.title}</h3><p class="muted">${a.description}</p><div class="section-ctas"><a class="btn ghost" href="${a.slug}">Read Guide</a></div></article>`).join("")}</div></div></section>`
  }));
  articles.forEach((article) => {
    writePage(article.slug, layout({
      title: `${article.title} | ShineLong Resources`,
      description: article.description,
      pathName: article.slug,
      schema: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        author: { "@type": "Organization", name: "ShineLong Technology Corp., Ltd." },
        publisher: { "@type": "Organization", name: "ShineLong Technology Corp., Ltd." }
      },
      body: `${pageHero(article.title, article.description, "Resources")}<section class="section"><div class="container article-body"><p class="eyebrow">${article.keyword}</p>${article.sections.map(([h, p]) => `<h2>${h}</h2><p>${p}</p>`).join("")}<div class="section-ctas"><a class="btn" href="/contact/">Ask for Project Support</a><a class="btn secondary" href="${catalog}">Download Catalog</a></div></div></section>`
    }));
  });
}

function miscPages() {
  simplePage("/about/", "About ShineLong", "ShineLong Technology Corp., Ltd. is an LED lighting manufacturer founded in 2010 with OEM/ODM project support.", `
    <section class="section"><div class="container split"><div><p class="eyebrow">Company Profile</p><h2>LED lighting manufacturer for international B2B buyers</h2><p class="muted">ShineLong focuses on LED tri-proof lights, LED panel lights and LED industrial lighting for Europe, Saudi Arabia, USA and Australia. The site uses verified company information and avoids invented customer names or claims.</p><div class="tag-list"><span class="tag">Founded 2010</span><span class="tag">10,000+ m²</span><span class="tag">150+ team</span><span class="tag">OEM/ODM</span></div></div><img class="founder-image" src="/assets/founder-ken.jpg" alt="ShineLong founder profile"></div></section>`);

  simplePage("/factory/", "Factory Capability", "Manufacturing, quality control, customization and delivery capability for LED lighting project buyers.", `
    <section class="section"><div class="container split"><div><p class="eyebrow">Factory Strength</p><h2>Production and quality control for repeat project supply</h2><p class="muted">Use this page to show workshop, equipment, inspection, packaging and delivery photos as more assets are added. Current launch uses the verified ShineLong company photo.</p><div class="grid two"><div class="card"><h3>OEM/ODM</h3><p class="muted">Product, label, packaging and project documentation support.</p></div><div class="card"><h3>Quality Control</h3><p class="muted">Industrial-grade inspection and certification-aware supply.</p></div></div></div><img class="factory-image" src="/assets/shinelong-company-photo.jpg" alt="ShineLong factory and office building"></div></section>`);

  simplePage("/certifications/", "Certifications", "ShineLong certification capabilities include UL, TUV, ENEC, UKCA, SAA, CE and RoHS, with product-specific files to be verified before publication.", `
    <section class="section"><div class="container"><div class="grid four">${["UL", "TUV", "ENEC", "UKCA", "SAA", "CE", "RoHS"].map((c) => `<div class="card"><div class="icon">${c.slice(0, 2)}</div><h3>${c}</h3><p class="muted">Add verified certificate image or query link before using this mark on a product page.</p></div>`).join("")}</div></div></section>`);

  simplePage("/downloads/", "Downloads", "Download ShineLong product catalog and request specification sheets, IES files and installation guidance.", `
    <section class="section"><div class="container"><div class="download-row"><div><h3>ShineLong Product Catalog 2026</h3><p class="muted">Product families, specification references and application overview.</p></div><a class="btn" href="${catalog}">Download Catalog</a></div><div class="download-row"><div><h3>Specification Sheets</h3><p class="muted">Request model-specific sheets for your project and target market.</p></div><a class="btn secondary" href="/contact/">Request Specs</a></div><div class="download-row"><div><h3>IES / Installation Files</h3><p class="muted">Available after product and project requirements are confirmed.</p></div><a class="btn secondary" href="/contact/">Ask Sales</a></div></div></section>`);

  simplePage("/contact/", "Contact ShineLong", "Contact ShineLong for LED lighting pricing, specifications, catalog downloads and OEM/ODM project support.", `
    <section class="section"><div class="container grid two"><div><p class="eyebrow">Contact</p><h2>Send your LED lighting inquiry</h2><p class="muted">Include country, product requirement, application, quantity, certification needs and timeline for faster response.</p><table class="spec-table"><tbody><tr><th>Email</th><td><a href="mailto:sales@shinelongled.com">sales@shinelongled.com</a></td></tr><tr><th>WhatsApp</th><td><a href="${whatsapp}">+44 7542 534055</a></td></tr><tr><th>Phone</th><td><a href="tel:+8675585203898">+86 755 8520 3898</a></td></tr><tr><th>Address</th><td>A901, B902, BLDG. 4, Baolong Intelligent Industry Park, Xinnengyuan 1 Rd, BaoLong street, LongGang, ShenZhen, China, 518118</td></tr></tbody></table></div><div class="card">${leadForm("LED lighting project")}</div></div></section>`);
}

function robotsAndSitemap() {
  const urls = ["/", "/products/", ...products.map((p) => p.slug), "/applications/", ...applications.map((a) => a.slug), "/about/", "/factory/", "/certifications/", "/downloads/", "/resources/", ...articles.map((a) => a.slug), "/contact/"];
  fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
  fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${siteUrl}${u}</loc></url>`).join("\n")}\n</urlset>\n`);
}

home();
productsIndex();
products.forEach(productPage);
applicationsIndex();
applications.forEach(applicationPage);
resources();
miscPages();
robotsAndSitemap();

console.log("ShineLong static site generated.");
