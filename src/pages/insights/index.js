import Head from 'next/head';
import Link from 'next/link';
import { SITE } from '../../lib/seo/site';
import { MODULES } from '../../lib/seo/modules';

export default function InsightsIndex({ seo }) {
  const insights = [
    {
      title: 'NAAC Accreditation: A Complete Guide for Institutions',
      excerpt: 'Learn the step-by-step process for NAAC accreditation, from initial preparation to final assessment, including documentation requirements and best practices.',
      category: 'Accreditation',
      readTime: '8 min read',
    },
    {
      title: 'Implementing OBE in Higher Education',
      excerpt: 'A comprehensive guide to Outcome-Based Education implementation, covering course outcomes, program outcomes, and CO-PO attainment calculations.',
      category: 'Curriculum',
      readTime: '10 min read',
    },
    {
      title: 'Digital Transformation in Higher Education',
      excerpt: 'How education ERP systems are revolutionizing institutional operations, improving student outcomes, and ensuring regulatory compliance.',
      category: 'Technology',
      readTime: '6 min read',
    },
    {
      title: 'Student Engagement Strategies for Modern Institutions',
      excerpt: 'Discover effective strategies to enhance student engagement through technology, personalized learning, and institutional support systems.',
      category: 'Student Success',
      readTime: '7 min read',
    },
    {
      title: 'Data-Driven Decision Making in Education',
      excerpt: 'How analytics and reporting tools in education ERP help administrators make informed decisions for institutional improvement.',
      category: 'Analytics',
      readTime: '5 min read',
    },
  ];

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
      </Head>
      
      <main className="max-w-5xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Insights</span>
        </nav>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Knowledge Hub
        </h1>
        <p className="text-lg text-gray-700 mb-8 speakable-summary">
          Explore expert insights on higher education management, accreditation, and digital transformation.
        </p>
        
        {/* AI-Quotable Definition */}
        <section className="mb-12 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What is Education ERP?
          </h2>
          <p className="text-lg text-gray-700">
            Education ERP (Enterprise Resource Planning) is specialized software that integrates all institutional processes—including student information, examinations, finance, and human resources—into a unified platform, enabling automation, data-driven decisions, and regulatory compliance for universities and colleges.
          </p>
        </section>
        
        {/* Insights Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
          <div className="grid gap-6">
            {insights.map((article, index) => (
              <article 
                key={index} 
                className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                  {article.title}
                </h3>
                <p className="text-gray-600">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
        
        {/* Authority Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Trust Our Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Industry Experts</h3>
              <p className="text-gray-600">Content created by education technology professionals with decades of institutional experience.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Research-Backed</h3>
              <p className="text-gray-600">Insights based on documented case studies and best practices from leading institutions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3"> регулярно Updated</h3>
              <p className="text-gray-600">Continuous updates reflecting the latest trends in higher education technology and regulations.</p>
            </div>
          </div>
        </section>
        
        {/* Modules CTA */}
        <section className="mb-12 p-8 bg-gray-50 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Our Solutions</h2>
          <p className="text-gray-600 mb-6">
            Learn about the comprehensive modules that make ScholarClone the preferred choice for higher education institutions.
          </p>
          <Link 
            href="/modules" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Modules
          </Link>
        </section>
        
        {/* Internal Links */}
        <section className="p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Compare Solutions</h2>
          <p className="text-gray-600 mb-4">
            See how ScholarClone compares with generic ERP solutions in the industry.
          </p>
          <Link 
            href="/compare" 
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
          >
            Compare Now
          </Link>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const title = 'Knowledge Hub | Higher Education Insights';
  const description = 'Expert insights on NAAC accreditation, OBE implementation, digital transformation, and education technology from ScholarClone.';
  const canonical = `${SITE.url}/insights`;

  return {
    props: {
      seo: {
        title,
        description,
        canonical,
      },
    },
  };
}
