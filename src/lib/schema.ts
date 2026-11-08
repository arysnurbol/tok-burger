import { SITE_URL, branches, brand, menu } from "@/content/site";

/** Restaurant structured data built only from verified fields in content/site.ts. */
export function jsonLd() {
  const hasMenuItems = menu.some((c) => c.items.length > 0);

  const restaurants = branches
    .filter((b) => b.kind === "restaurant")
    .map((b) => ({
      "@type": "Restaurant",
      "@id": `${SITE_URL}/#branch-${b.id}`,
      name: `${brand.latinName} — ${b.name}`,
      parentOrganization: { "@id": `${SITE_URL}/#brand` },
      servesCuisine: ["Burgers", "Fast food"],
      address: {
        "@type": "PostalAddress",
        streetAddress: b.address,
        addressLocality: "Алматы",
        addressCountry: "KZ",
      },
      geo: { "@type": "GeoCoordinates", latitude: b.lat, longitude: b.lon },
      ...(b.phone && { telephone: b.phone }),
      ...(b.hours !== "24/7" && {
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: days, opens: b.hours.open, closes: b.hours.close },
        ],
      }),
      hasMap: `https://2gis.kz/almaty/firm/${b.id}`,
      ...(b.rating && {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: b.rating.value,
          ratingCount: b.rating.count,
          bestRating: 5,
        },
      }),
      ...(hasMenuItems && { hasMenu: { "@id": `${SITE_URL}/#menu` } }),
    }));

  const graph: object[] = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#brand`,
      name: brand.name,
      alternateName: [brand.latinName, "Tok Burger", "Тоқ бургер"],
      url: SITE_URL,
      logo: `${SITE_URL}/brand/tok-logo-instagram.jpg`,
      slogan: brand.slogan,
      sameAs: [brand.instagram.url, brand.twoGisUrl],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: brand.order.phone,
        contactType: "orders",
        areaServed: "KZ",
        availableLanguage: ["kk", "ru"],
      },
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: brand.name, inLanguage: "kk" },
    ...restaurants,
  ];

  if (hasMenuItems) {
    graph.push({
      "@type": "Menu",
      "@id": `${SITE_URL}/#menu`,
      hasMenuSection: menu
        .filter((c) => c.items.length)
        .map((c) => ({
          "@type": "MenuSection",
          name: c.title,
          hasMenuItem: c.items.map((i) => ({
            "@type": "MenuItem",
            name: i.name,
            ...(i.description && { description: i.description }),
            ...(i.price && { offers: { "@type": "Offer", price: i.price, priceCurrency: "KZT" } }),
          })),
        })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
