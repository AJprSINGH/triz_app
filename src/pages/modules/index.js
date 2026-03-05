import Head from 'next/head';
import Link from 'next/link';
import { SITE } from '../../lib/seo/site';
import { MODULES } from '../../lib/seo/modules';

export default function ModulesIndex({ modules, seo }) {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <meta name="robots" content="index, follow" />
        
        {/* OpenGraph */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.jsonld) }}
        />
      </Head>
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          ERP Modules
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Explore our comprehensive suite of Higher Education ERP modules designed to streamline institutional operations.
        </p>
        
        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Link 
            href="/compare" 
            className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Compare with Generic ERP
          </Link>
          <Link 
            href="/insights" 
            className="px-5 py-2 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
          >
            Read Insights
          </Link>
        </div>
        
        <div className="grid gap-6">
          {modules.map((module) => (
            <Link
              key={module.slug}
              href={`/modules/${module.slug}`}
              className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {module.name}
              </h2>
              <p className="text-gray-600">{module.short}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const title = 'ERP Modules | ScholarClone';
  const description = 'Explore comprehensive Higher Education ERP modules including Student Information System, Learning Management, Examination, and Finance Management.';
  const canonical = `${SITE.url}/modules`;
  
  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'ERP Modules',
    description: description,
    url: canonical,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: MODULES.map((module, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: module.name,
        url: `${SITE.url}/modules/${module.slug}`,
      })),
    },
  };
  
  return {
    props: {
      modules: MODULES,
      seo: {
        title,
        description,
        canonical,
        jsonld,
      },
    },
  };
}
