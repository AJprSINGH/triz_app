export default function Schema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ScholarClone",
          url: "https://hp.scholarclone.com",
          logo: "https://hp.scholarclone.com/logo.png",
          description:
            "ScholarClone is an AI-powered ERP platform for schools and colleges providing attendance automation and academic analytics.",
        }),
      }}
    />
  );
}