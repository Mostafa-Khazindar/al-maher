import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a0d14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "الماهر لسمكرة ودهان السيارات | Al-Maher Automotive Body Shop - جدة",
  description:
    "مركز الماهر المتخصص في سمكرة ودهان السيارات بأعلى المعايير، مطابقة ألوان احترافية واستخدام دهانات Spies Hecker العالمية في صناعية عسفان، بلوك 1102، جدة.",
  keywords: [
    "الماهر",
    "سمكرة سيارات جدة",
    "ورشة دهان سيارات عسفان",
    "صناعية عسفان بلوك 1102",
    "دهان Spies Hecker",
    "إصلاح حوادث السيارات جدة",
    "تعديل صدمات",
    "مطابقة ألوان السيارات",
    "Al-Maher Body Shop Jeddah",
    "Car collision repair Asfan",
  ],
  authors: [{ name: "مركز الماهر لسمكرة ودهان السيارات" }],
  creator: "الماهر",
  publisher: "الماهر",
  robots: "index, follow",
  alternates: {
    canonical: "https://al-maher-bodyshop.sa",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
    url: "https://al-maher-bodyshop.sa",
    siteName: "الماهر لسمكرة ودهان السيارات | Al-Maher Body Shop",
    title: "الماهر لسمكرة ودهان السيارات | حرفية وإتقان في صناعية عسفان - جدة",
    description:
      "مركز احترافي متقدم لإصلاح هياكل السيارات، سمكرة دقيقة، وتطبيق أنظمة الدهان العالمية في صناعية عسفان، جدة.",
  },
  twitter: {
    card: "summary_large_image",
    title: "الماهر لسمكرة ودهان السيارات | Al-Maher Body Shop",
    description: "احترافية في إصلاح هيكل سيارتك وإعادتها لحالتها الأصلية - صناعية عسفان، جدة.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Local Business JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoBodyShop",
              name: "الماهر لسمكرة ودهان السيارات | Al-Maher Body Shop",
              description:
                "مركز متخصص في سمكرة وهياكل ودهان السيارات باستخدام أنظمة Spies Hecker في صناعية عسفان، جدة.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "بلوك 1102، صناعية عسفان",
                addressLocality: "جدة",
                addressRegion: "منطقة مكة المكرمة",
                addressCountry: "SA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "21.9056",
                longitude: "39.3090",
              },
              areaServed: "Jeddah",
              priceRange: "$$",
              serviceType: [
                "سمكرة سيارات",
                "دهان وفرن حراري",
                "مطابقة ألوان رقمية",
                "إصلاح حوادث",
                "تعديل صدمات وانبعاجات",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#f8fafc] text-[#0f172a] font-sans antialiased selection:bg-blue-600 selection:text-white min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
