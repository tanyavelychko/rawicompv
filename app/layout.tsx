import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://rawicompv.co.uk";
const SITE_NAME = "Rawicom PV LTD";
const SITE_DESCRIPTION =
  "Rawicom PV LTD designs, installs and maintains commercial solar power systems for UK businesses, from rooftop arrays to full-scale solar power plant construction.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Commercial Solar Installation & Maintenance UK`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "commercial solar installation UK",
    "solar power plant construction",
    "solar panel maintenance",
    "commercial solar energy company",
    "business solar panels UK",
    "Rawicom PV",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Commercial Solar Installation & Maintenance UK`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Commercial Solar Installation & Maintenance UK`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  telephone: "+447754218033",
  email: "contact@rawicompv.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11 Newton Way",
    addressLocality: "Newport",
    postalCode: "NP20 6FY",
    addressCountry: "GB",
  },
  areaServed: "GB",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
