import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shinelongled.com"),
  title: {
    default: "OEM & ODM LED Lighting Manufacturer in China | ShineLong",
    template: "%s | ShineLong"
  },
  description:
    "ShineLong manufactures LED tri-proof lights, panel lights and linear lights for commercial and industrial projects with OEM/ODM support.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "OEM & ODM LED Lighting Manufacturer in China | ShineLong",
    description:
      "Project-ready LED tri-proof lights, panel lights and linear lighting systems for overseas B2B buyers.",
    url: "https://www.shinelongled.com/",
    siteName: "ShineLong",
    images: ["/assets/shinelong-company-photo.jpg"],
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
