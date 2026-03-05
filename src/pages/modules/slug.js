import Head from 'next/head';
import Link from 'next/link';
import { SITE } from '../../lib/seo/site';
import { MODULES } from '../../lib/seo/modules';
import AnswerBlock from '../../component/seo/AnswerBlock';
import  SEOFAQ  from '../../component/seo/FAQ';

export default function ModulePage({ module, otherModules, seo }) {
  // Sample answer blocks for each module
  const answerBlocks = [
    {
      heading: `What is ${module.name}?`,
      answer: `${module.name} is a comprehensive software solution designed for higher education institutions to manage and streamline their ${module.short.toLowerCase()}`,
      bullets: [
        'Centralized data management',
        'Automation of routine tasks',
        'Real-time reporting and analytics',
        'Integration with other ERP modules',
      ],
    },
    {
      heading: `Why choose ${module.name} for your institution?`,
      answer: `Our ${module.name} module is built specifically for educational institutions, offering tailored features that address the unique challenges of ${module.short.toLowerCase()}`,
      bullets: [
        'User-friendly interface',
        'Scalable architecture',
        'Compliance with education regulations',
        '24/7 technical support',
      ],
    },
  ];

  // Expanded FAQs with 3-5 long-tail queries
  const baseQueries = [
    `Best ${module.name} for colleges in India`,
    `${module.name} features and pricing`,
    `How does ${module.name} help NAAC accreditation?`,
  ];
  const additionalQueries = module.queries.slice(0, 2);
  const allQueries = [...baseQueries, ...additionalQueries];
  
  const faqs = allQueries.map((query) => ({
    question: query,
    answer: `${module.name} provides comprehensive solutions for ${module.short.toLowerCase()} With features like centralized data management, automation, and real-time analytics, it helps institutions streamline operations and achieve better outcomes. Contact us to learn how our module can benefit your institution.`,
  }));

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
        <meta property="og:type" content="article" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.jsonld) }}
        />
      </Head>
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/modules" className="hover:underline">Modules</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{module.name}</span>
        </nav>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {module.name}
        </h1>
        <p className="text-lg text-gray-700 mb-8 speakable-summary">
          {module.short}
        </p>
        
        {/* AI-Quotable Definition Section */}
        <section className="mb-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Understanding {module.name}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {module.name} is a specialized software module within the ScholarClone ERP ecosystem, designed to help higher education institutions manage and automate their {module.short.toLowerCase()} It provides centralized data management, real-time analytics, and seamless integration with other institutional systems, ensuring operational efficiency while maintaining compliance with education regulatory bodies.
          </p>
        </section>
        
        {/* Answer Blocks for AEO */}
        {answerBlocks.map((block, index) => (
          <AnswerBlock
            key={index}
            heading={block.heading}
            answer={block.answer}
            bullets={block.bullets}
          />
        ))}
        
        {/* FAQ Section */}
        <SEOFAQ faqs={faqs} />
        
        {/* Internal Links to Other Modules */}
        <section className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Explore Other Modules
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherModules.map((other) => (
              <Link
                key={other.slug}
                href={`/modules/${other.slug}`}
                className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <span className="font-semibold text-blue-600 hover:underline">
                  {other.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link 
              href="/compare" 
              className="inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Compare with Generic ERP
            </Link>
            <Link 
              href="/insights" 
              className="inline-block px-5 py-2 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
            >
              Read More Insights
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = MODULES.map((module) => ({
    params: { slug: module.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const module = MODULES.find((m) => m.slug === params.slug);
  const otherModules = MODULES.filter((m) => m.slug !== params.slug);
  
  const title = `${module.name} | ScholarClone ERP Module`;
  const description = `Learn about ${module.name} - ${module.short} Comprehensive solution for higher education institutions.`;
  const canonical = `${SITE.url}/modules/${module.slug}`;
  
  const breadcrumbs = [
    { name: 'Home', url: SITE.url },
    { name: 'Modules', url: `${SITE.url}/modules` },
    { name: module.name, url: canonical },
  ];
  
  // Expanded FAQs with 3-5 long-tail queries
  const baseQueries = [
    `Best ${module.name} for colleges in India`,
    `${module.name} features and pricing`,
    `How does ${module.name} help NAAC accreditation?`,
  ];
  const additionalQueries = module.queries.slice(0, 2);
  const allQueries = [...baseQueries, ...additionalQueries];
  
  const faqs = allQueries.map((query) => ({
    question: query,
    answer: `${module.name} provides comprehensive solutions for ${module.short.toLowerCase()} With features like centralized data management, automation, and real-time analytics, it helps institutions streamline operations and achieve better outcomes. Contact us to learn how our module can benefit your institution.`,
  }));
  
  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: canonical,
    author: {
      '@type': 'Organization',
      name: SITE.name,
    },
    datePublished: new Date().toISOString(),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    },
  };
  
  return {
    props: {
      module,
      otherModules,
      seo: {
        title,
        description,
        canonical,
        breadcrumbs,
        faqs,
        service: {
          name: module.name,
          description: module.short,
          url: canonical,
        },
        jsonld,
      },
    },
  };
}
