const menuButton = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const expanded = navLinks.classList.contains("open");
    menuButton.setAttribute("aria-expanded", expanded ? "true" : "false");
  });
}

document.querySelectorAll("[data-lead-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const product = data.get("product") || "LED lighting project";
    const country = data.get("country") || "Not specified";
    const message = data.get("message") || "Please contact me with pricing and specifications.";
    const body = [
      "New inquiry from ShineLong website",
      "",
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Country: ${country}`,
      `WhatsApp: ${data.get("whatsapp") || ""}`,
      `Product Requirement: ${product}`,
      `Usage/Application: ${data.get("usage") || ""}`,
      "",
      message
    ].join("\n");

    window.location.href = `mailto:sales@shinelongled.com?subject=${encodeURIComponent(`Inquiry: ${product}`)}&body=${encodeURIComponent(body)}`;
  });
});
