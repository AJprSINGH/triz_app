import React from 'react';
import EducationChallenges from './EducationalChallenges';
import RevolutionarySystem from './RevolutionarySystem';
import PersonalizedLearning from './PersonalizedLearning';

function MainContent() {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 py-16">
        <EducationChallenges />
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center bg-white py-10">
        <h2 className="text-3xl font-bold text-center text-amber-500 mb-16 px-4 max-w-4xl">
          Redefining education to unlock potential and create brighter futures for every student.
        </h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e1ee0c20767fb35fc2a7ed3a382cf408cb1d0424619595a661a560fc3f15ee1?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
          alt="Educational concept illustration"
          className="w-full max-w-3xl rounded-xl shadow-lg"
        />
      </section>

      <RevolutionarySystem />
      <PersonalizedLearning />
    </main>
  );
}

export default MainContent;