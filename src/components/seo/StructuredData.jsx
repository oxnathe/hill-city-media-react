const SITE_URL = "https://hill-city-media.vercel.app";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Hill City Media",
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.png`,
        description:
          "Hill City Media is a creative media and branding company providing printing, digital marketing, videography, corporate identity, and visual communication solutions.",
        telephone: "+2348031388328",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "Hill City Media",
        url: SITE_URL,
        image: `${SITE_URL}/images/logo.png`,
        telephone: "+2348031388328",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Muniru Plaza, Opp. Ojaja Mall, Abraham Adesanya, Lekki-Epe Expressway",
          addressLocality: "Lekki",
          addressRegion: "Lagos",
          addressCountry: "NG",
        },
        parentOrganization: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}