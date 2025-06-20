import * as React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/27b4d347cb8a73961550f08143231389d9373c91bfd84999b3367f6cfa57e735?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Automated Question Paper Creation",
    description:
      "Create, store, and categorize thousands of questions by topic, difficulty, and type.Automatically generate balanced question papers based on predefined patterns and weightage.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/60814cbd7863719cfc46e1a5db2dba6938943eee6fc25f073ba540e12910f228?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Multi-Language Support",
    description:
      "Create question papers in multiple languages to cater to diverse student groups.  Seamless translation tools to ensure content accuracy and consistency.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/06e2f10f5a1df641d82c513b0f5a5c3d389d9be49cdd6bcf8070f21c49a8be4d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Enhanced Security Features",
    description:
      "Control who can view, edit, or print question papers.Prevent predictability with automatically shuffled questions.Protect your institution’s content with customizable watermarks.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a99387fe49c906bded655749ef7b6003c556cf28d84a2d52e07ecca49e3c4f6?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Exam Customization Options",
    description:
      "Generate MCQs, descriptive questions, fill-in-the-blanks, and more.Create papers for individual subjects or combined assessments.Adjust marks allocation with just a few clicks.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/88da79f0e05f42d8a962fc6c7e689a7a4790fa90636e5a482f61550c4f9018f9?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Seamless Integration",
    description:
      "Easily pull from existing question banks or add new content.Receive recommendations for questions based on past usage.Generate papers in PDF, Word, or print-ready formats.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45adc09b215913ad558b6f419ce2e0b1a80e9629a6a29c8fb910a82bdb7b203d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Performance Analytics and Insights",
    description:
      " Identify high-performing and low-performing questions based on student outcomes.Automatically adjust question difficulty levels based on historical performance.",
  },
];

export default function KeyFeatures() {
  return (
    <div className="lg:flex flex-col lg:rounded-[48px] lg:mx-40 lg:mt-[10px]">
          <div className="self-center lg:text-4xl sm:text-2xl font-bold text-center text-slate-500 max-md:max-w-full max-md:text-4xl"  style={{
                    color:'rgba(61, 96, 149, 1)'
                }}>
            Key Features 
          </div>
          <div className="lg:flex lg:flex-col items-center lg:px-20 py-10 mt-6 w-full bg-white rounded-[48px] max-md:px-5 max-md:mt-10 max-md:max-w-full"style={{
          boxShadow: '6px 6px 12px 2px rgba(16, 24, 40, 0.2)'
        }}>
            <div className="w-full max-w-full max-md:max-w-full">
              <div className="lg:flex gap-5 max-md:flex-col">
                {features.slice(0, 3).map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
            <div className="lg:mt-10 w-full max-w-full max-md:mt-10 max-md:max-w-full">
              <div className="lg:flex gap-5 max-md:flex-col">
                {features.slice(3, 6).map((feature, index) => (
                  <FeatureCard key={index + 3} {...feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
  );
}
