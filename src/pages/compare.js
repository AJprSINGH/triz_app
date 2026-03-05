import Head from 'next/head';
import Link from 'next/link';
import { SITE } from '../lib/seo/site';
import SEOFAQ from '../component/seo/FAQ';

export default function ComparePage({ seo }) {
  const comparisonPoints = [
    {
      feature: 'Education-Specific Features',
      scholarClone: 'Built-in NAAC/NBA workflows, OBE/CBCS curriculum management, examination automation',
      genericERP: 'Requires extensive customization and add-on development',
    },
    {
      feature: 'Accreditation Support',
      scholarClone: 'Pre-built SSR templates, criterion-wise tracking, automated documentation',
      genericERP: 'Manual processes, requires separate compliance modules',
    },
    {
      feature: 'Academic Analytics',
      scholarClone: 'Student performance metrics, attendance patterns, CO-PO attainment tracking',
      genericERP: 'Basic reporting, no education-specific KPIs',
    },
    {
      feature: 'Curriculum Management',
      scholarClone: 'OBE outcome mapping, credit-based system, course catalog management',
      genericERP: 'Limited curriculum support, generic course management',
    },
    {
      feature: 'Examination System',
      scholarClone: 'Online exam scheduling, automated grading, result processing, revaluation',
      genericERP: 'Basic exam module, requires third-party integration',
    },
    {
      feature: 'Integration Readiness',
      scholarClone: 'Pre-built connectors for payment gateways, SMS, LMS, biometric devices',
      genericERP: 'Custom API development required for most integrations',
    },
    {
      feature: 'Mobile Experience',
      scholarClone: 'Native iOS/Android apps for students, faculty, and administrators',
      genericERP: 'Limited mobile support, responsive web only',
    },
  ];

  const faqs = [
    {
      question: 'Why choose education-specific ERP over generic ERP?',
      answer: 'Education-specific ERPs like ScholarClone are purpose-built for academic institutions with features like NAAC/NBA accreditation workflows, OBE curriculum management, and examination automation. Generic ERPs require extensive customization, additional costs, and may not meet education regulatory requirements.',
    },
    {
      question: 'Can ScholarClone replace multiple legacy systems?',
      answer: 'Yes, ScholarClone integrates multiple functions including student information, examinations, attendance, finance, library, and hostel management into a unified platform, eliminating the need for multiple disconnected systems.',
    },
    {
      question: 'How does ScholarClone help with NAAC accreditation?',
      answer: 'ScholarClone provides automated data collection, pre-built SSR templates, criterion-wise dashboards, and documentation workflows that significantly reduce the time and effort required for NAAC accreditation preparation.',
    },
    {
      question: 'Is ScholarClone suitable for both colleges and universities?',
      answer: 'Yes, ScholarClone is scalable and configurable to serve colleges, universities, and autonomous institutions with varying sizes and regulatory requirements.',
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
        <meta property="og:type" content="article" />
      </Head>
      
      <main className="max-w-5xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Compare</span>
        </nav>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ScholarClone vs Generic ERP
        </h1>
        <p className="text-lg text-gray-700 mb-8 speakable-summary">
          Discover why purpose-built education ERPs outperform generic solutions for higher education institutions.
        </p>
        
        {/* AI-Quotable Definition */}
        <section className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What is an Education-Specific ERP?
          </h2>
          <p className="text-lg text-gray-700">
            An education-specific ERP like ScholarClone is specialized software designed exclusively for academic institutions, featuring built-in support for accreditation workflows, curriculum management, and educational analytics—unlike generic ERPs that require costly customization for basic education functionality.
          </p>
        </section>
        
        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 border border-gray-200 font-semibold">Feature</th>
                  <th className="text-left p-4 border border-gray-200 font-semibold text-blue-700">ScholarClone</th>
                  <th className="text-left p-4 border border-gray-200 font-semibold text-gray-600">Generic ERP</th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((point, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 border border-gray-200 font-medium">{point.feature}</td>
                    <td className="p-4 border border-gray-200 text-blue-700">{point.scholarClone}</td>
                    <td className="p-4 border border-gray-200 text-gray-600">{point.genericERP}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Authority Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Institutions Trust ScholarClone
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Industry Expertise</h3>
              <p className="text-gray-600">Deep understanding of Indian higher education regulatory requirements including UGC, NAAC, NBA, and state university guidelines.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Proven ROI</h3>
              <p className="text-gray-600">Institutions report 40% reduction in administrative workload and 60% faster accreditation documentation with ScholarClone.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Continuous Updates</h3>
              <p className="text-gray-600">Regular feature updates aligned with changing education regulations and emerging institutional requirements.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">24/7 technical support with education domain experts who understand institutional workflows.</p>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <SEOFAQ faqs={faqs} />
        
        {/* Internal Links */}
        <section className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/modules" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              View Modules
            </Link>
            <Link href="/insights" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
              Read Insights
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const title = 'ScholarClone vs Generic ERP | Compare Higher Education Solutions';
  const description = 'Compare ScholarClone education-specific ERP with generic solutions. Discover why institutions choose purpose-built software for NAAC/NBA accreditation, OBE management, and academic processes.';
  const canonical = `${SITE.url}/compare`;

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
