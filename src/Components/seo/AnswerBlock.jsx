/**
 * AnswerBlock Component
 * Renders a section with h2, a short answer paragraph, and optional bullets list.
 * Used for AEO (Answer Engine Optimization) to provide direct answers to search queries.
 */

export default function AnswerBlock({ heading, answer, bullets = [] }) {
  return (
    <section className="answer-block my-8 p-6 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{heading}</h2>
      <p className="text-lg text-gray-700 mb-4">{answer}</p>
      {bullets && bullets.length > 0 && (
        <ul className="list-disc pl-6 space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-gray-700">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
