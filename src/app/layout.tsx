import type { Metadata } from "next";
import { Ancizar_Serif, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const displayFont = Ancizar_Serif({
  variable: "--font-playfair",
  subsets: ["latin", "greek"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
  display: "swap",
});

const siteUrl = "https://homegym.gr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HomeGym Λαμία — Γυμναστήριο, Personal Training & Πισίνα",
    template: "%s — HomeGym Λαμία",
  },
  description:
    "HomeGym στη Λαμία: γυμναστήριο, personal training, group classes, Home Pilates, Kids Pool Academy και summer camp. Χώρος προπόνησης σχεδιασμένος για σοβαρά αποτελέσματα.",
  keywords: [
    "HomeGym",
    "γυμναστήριο Λαμία",
    "personal training Λαμία",
    "πισίνα Λαμία",
    "Kids Pool Academy",
    "Home Pilates",
    "summer camp Λαμία",
  ],
  authors: [{ name: "HomeGym" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: siteUrl,
    siteName: "HomeGym",
    title: "HomeGym Λαμία — Nothing Will Work Unless You Do",
    description:
      "Γυμναστήριο, personal training, group classes, πισίνα και προγράμματα για παιδιά στη Λαμία.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeGym Λαμία",
    description:
      "Γυμναστήριο, personal training, group classes, πισίνα και προγράμματα για παιδιά στη Λαμία.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "HomeGym",
  url: siteUrl,
  telephone: "+30 22310 50 111",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Αγριελιά",
    addressLocality: "Λαμία",
    postalCode: "35100",
    addressCountry: "GR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  sameAs: ["https://instagram.com/home_for_health_fitness"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="el" className={`${displayFont.variable} ${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
      </head>
      <body className="min-h-full bg-paper text-text antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
