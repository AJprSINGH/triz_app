import '../app/globals.css';
import Head from 'next/head';
import { SITE } from '../lib/seo/site';
import { organizationJsonLd, websiteJsonLd, webpageJsonLd, serviceJsonLd, speakableJsonLd, faqJsonLd, breadcrumbJsonLd } from '../lib/seo/jsonld';

// Fallback SITE object to prevent crashes when SITE is undefined
const FALLBACK_SITE = {
  name: "ScholarClone",
  url: "https://hp.scholarclone.com",
  ogImage: "https://hp.scholarclone.com/og.jpg",
  category: "Higher Education ERP",
  description: "AI-driven Higher Education ERP platform.",
  twitter: ""
};

function MyApp({ Component, pageProps }) {
  // Use SITE with fallback - ensure all properties are safely accessed
  const site = SITE ?? FALLBACK_SITE;
  const seo = pageProps?.seo ?? {};

  // Build SEO values with safe fallbacks - no router usage to prevent hydration mismatch
  const title =
    seo.title
      ? `${seo.title} | ${site.name}`
      : `${site.name} | ${site.category}`;

  const description = seo.description ?? site.description;
  const canonical = seo.canonical ?? site.url;
  const ogImage = seo.ogImage ?? site.ogImage;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        
        {/* Safe Robots Meta - conditionally render to prevent SSR/CSR mismatch */}
        {seo.noindex ? (
          <meta name="robots" content="noindex,nofollow" />
        ) : (
          <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"/>
        )}
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.name} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        {site.twitter && <meta name="twitter:site" content={site.twitter} />}
        
        <link rel="icon" href="/vercel.png" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd({ title, description, canonical })) }}
        />
        {seo.faq && seo.faq.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(seo.faq)) }}
          />
        )}
        {seo.breadcrumbs && seo.breadcrumbs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(seo.breadcrumbs)) }}
          />
        )}
        {seo.service && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(seo.service)) }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd({ canonical })) }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
