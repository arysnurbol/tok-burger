import type { Metadata, Viewport } from "next";
import { Onest, Rubik } from "next/font/google";
import Script from "next/script";
import { AnalyticsListener } from "@/components/AnalyticsListener";
import { SITE_URL, brand } from "@/content/site";
import { jsonLd } from "@/lib/schema";
import "./globals.css";

// Both families include the full Kazakh alphabet (Ә Ғ Қ Ң Ө Ұ Ү Һ І) in cyrillic-ext.
// Unbounded/Manrope were dropped: they lack these glyphs and fell back to a serif.
const rubik = Rubik({
  variable: "--font-display-face",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const onest = Onest({
  variable: "--font-body-face",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const title = "ТОҚ BURGER — бургер в Алматы | Бургерная, заказ в WhatsApp";
const description =
  "ТОҚ BURGER — бургерная в Алматы: 5 филиалов, работаем ежедневно до 05:00. Закажите бургер, картофель фри и наггетсы в WhatsApp. Дәммен қуаттан!";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "бургер Алматы",
    "ТОҚ Burger",
    "Tok burger",
    "бургерная Алматы",
    "заказать бургер Алматы",
    "доставка бургеров Алматы",
    "лучшие бургеры Алматы",
    "бургер Алматы тапсырыс",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "kk_KZ",
    alternateLocale: ["ru_RU"],
    url: "/",
    siteName: brand.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#f76103",
  width: "device-width",
  initialScale: 1,
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="kk" className={`${rubik.variable} ${onest.variable} antialiased`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()).replace(/</g, "\\u003c") }}
        />
        <AnalyticsListener />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
