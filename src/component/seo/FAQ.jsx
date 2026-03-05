/**
 * FAQ Component
 * Renders FAQs using <details><summary> with good spacing.
 * Used for AEO to provide structured FAQ content for search engines.
 */

export default function SEOFAQ({ faqs = [] }) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="seo-faq my-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details 
            key={index} 
            className="faq-item border border-gray-200 rounded-lg overflow-hidden"
          >
            <summary className="faq-question px-6 py-4 cursor-pointer bg-white hover:bg-gray-50 font-semibold text-gray-800 flex justify-between items-center">
              {faq.question}
              <span className="faq-icon text-2xl">+</span>
            </summary>
            <div className="faq-answer px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
      <style jsx>{`
        details.faq-item summary {
          list-style: none;
        }
        details.faq-item summary::-webkit-details-marker {
          display: none;
        }
        details.faq-item[open] .faq-icon {
          transform: rotate(45deg);
          transition: transform 0.2s ease;
        }
        details.faq-item .faq-icon {
          transition: transform 0.2s ease;
        }
      `}</style>
    </section>
  );
}
