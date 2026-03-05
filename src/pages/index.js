import React from "react";
import HomePage from "./HomePageNew/UnlockPotential";
import FAQ from "../Components/FAQ";
import AnswerBlock from "../components/seo/AnswerBlock";
import SEOFAQ from "../components/seo/FAQ";
import { SITE } from "../lib/seo/site";
import Link from "next/link";

export default function Home({ seo }) {
  return (
    <div>
      <HomePage />
      <FAQ />
      
      {/* AI-Quotable Definition Section - Clean 50-word definition for generative engines */}
      <div className="container mx-auto px-4 py-12">
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is ScholarClone?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 speakable-summary">
            ScholarClone is an AI-driven Higher Education ERP designed for universities and colleges. It automates academic processes including student information management, examinations, NAAC/NBA accreditation workflows, OBE curriculum tracking, attendance, and institutional analytics—streamlining operations while ensuring compliance with education regulatory bodies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/modules" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Explore Modules
            </Link>
            <Link href="/compare" className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
              Compare with Others
            </Link>
            <Link href="/insights" className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
              Read Insights
            </Link>
          </div>
        </section>
      </div>
      
      {/* Authority Section - Institutional Benefits */}
      <div className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Institutions Choose ScholarClone</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">NAAC/NBA Ready</h3>
              <p className="text-gray-600">Built-in workflows and documentation templates aligned with accreditation council requirements streamline the entire accreditation process.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">AI-Powered Analytics</h3>
              <p className="text-gray-600">Advanced machine learning algorithms provide actionable insights into student performance, attendance patterns, and institutional metrics.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Seamless Integration</h3>
              <p className="text-gray-600">RESTful APIs and pre-built connectors enable smooth integration with payment gateways, LMS platforms, and third-party systems.</p>
            </div>
          </div>
        </section>
      </div>
      
      {/* AEO: Answer Block - What is ScholarClone */}
      <div className="container mx-auto px-4">
        <AnswerBlock
          heading="What is ScholarClone?"
          answer="ScholarClone is an AI-driven Higher Education ERP (Enterprise Resource Planning) solution designed specifically for universities, colleges, and academic institutions. It streamlines academic processes, examinations, NAAC/NBA workflows, OBE (Outcome-Based Education), CBCS (Choice Based Credit System), attendance management, and provides advanced analytics to help educational institutions improve their operational efficiency."
          bullets={[
            "AI-powered academic management system",
            "NAAC/NBA accreditation workflow support",
            "OBE and CBCS curriculum management",
            "Comprehensive attendance tracking",
            "Advanced analytics and reporting",
          ]}
        />
        
        {/* AEO: FAQ Section with 5 Q/A */}
        <SEOFAQ
          faqs={[
            {
              question: "What is ScholarClone and what does it do?",
              answer: "ScholarClone is an AI-driven Higher Education ERP designed for universities and colleges. It automates academic processes including examinations, student attendance, NAAC/NBA workflows, OBE curriculum management, and provides analytics for better decision-making.",
            },
            {
              question: "Does ScholarClone support NAAC and NBA accreditation?",
              answer: "Yes, ScholarClone is specifically designed with built-in workflows for NAAC (National Assessment and Accreditation Council) and NBA (National Board of Accreditation) processes. It helps institutions track and document required metrics for accreditation.",
            },
            {
              question: "What is OBE and CBCS support in ScholarClone?",
              answer: "ScholarClone supports Outcome-Based Education (OBE) and Choice Based Credit System (CBCS) curriculum management. It enables institutions to define program outcomes, course outcomes, and manage credit-based examinations efficiently.",
            },
            {
              question: "Can ScholarClone handle attendance management?",
              answer: "Yes, ScholarClone provides comprehensive attendance management features including real-time tracking, automatic notifications, attendance reports, and integration with leave management systems for both students and faculty.",
            },
            {
              question: "What kind of analytics does ScholarClone provide?",
              answer: "ScholarClone offers advanced analytics including student performance metrics, attendance patterns, examination results analysis, institutional KPIs, and customizable dashboards for administrators, faculty, and management.",
            },
          ]}
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "AI-Driven Higher Education ERP | ScholarClone",
        description: "ScholarClone is an AI-driven Higher Education ERP for academics, examinations, NAAC/NBA workflows, OBE, CBCS, attendance, analytics.",
        canonical: `${SITE.url}/`,
        breadcrumbs: [
          { name: "Home", url: SITE.url },
        ],
        faq: [
          {
            question: "What is ScholarClone and what does it do?",
            answer: "ScholarClone is an AI-driven Higher Education ERP designed for universities and colleges. It automates academic processes including examinations, student attendance, NAAC/NBA workflows, OBE curriculum management, and provides analytics for better decision-making.",
          },
          {
            question: "Does ScholarClone support NAAC and NBA accreditation?",
            answer: "Yes, ScholarClone is specifically designed with built-in workflows for NAAC (National Assessment and Accreditation Council) and NBA (National Board of Accreditation) processes. It helps institutions track and document required metrics for accreditation.",
          },
          {
            question: "What is OBE and CBCS support in ScholarClone?",
            answer: "ScholarClone supports Outcome-Based Education (OBE) and Choice Based Credit System (CBCS) curriculum management. It enables institutions to define program outcomes, course outcomes, and manage credit-based examinations efficiently.",
          },
          {
            question: "Can ScholarClone handle attendance management?",
            answer: "Yes, ScholarClone provides comprehensive attendance management features including real-time tracking, automatic notifications, attendance reports, and integration with leave management systems for both students and faculty.",
          },
          {
            question: "What kind of analytics does ScholarClone provide?",
            answer: "ScholarClone offers advanced analytics including student performance metrics, attendance patterns, examination results analysis, institutional KPIs, and customizable dashboards for administrators, faculty, and management.",
          },
        ],
      },
    },
  };
}
