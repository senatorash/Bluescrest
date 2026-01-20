const LegalSchema = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Bluecrest Attorneys",
    url: "https://www.bluecrestattorneys.com",
    logo: "https://www.bluecrestattorneys.com/bluecrest-white.png",
    description:
      "Leading law firm in Lagos specializing in corporate law, dispute resolution, and intellectual property. Providing expert legal representation across Nigeria.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Suite 207, Ikeja Plaza, Mobolaji Bank Anthony Way, Ikeja, Lagos",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    telephone: "+2347088312857",
    email: "info@bluecrestattorneys.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
};
export default LegalSchema;
