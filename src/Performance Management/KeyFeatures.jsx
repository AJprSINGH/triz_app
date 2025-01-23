import * as React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/27b4d347cb8a73961550f08143231389d9373c91bfd84999b3367f6cfa57e735?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Advanced Analytics for Real-Time Insights",
    description:
      "Gain a comprehensive understanding of performance trends.Visualize performance data with customizable charts and reports.Monitor trends across classes, grades, and departments.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/60814cbd7863719cfc46e1a5db2dba6938943eee6fc25f073ba540e12910f228?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Personalized Learning Pathways",
    description:
      "Highlight individual strengths and areas for improvement.Adjust lesson plans based on real-time progress tracking.Enable students to track their milestones and stay motivated.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/06e2f10f5a1df641d82c513b0f5a5c3d389d9be49cdd6bcf8070f21c49a8be4d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Digital Assessment and Feedback Tools",
    description:
      "Save time with quick and accurate grading of digital assignments and exams.Pinpoint learning gaps and create strategies to address them supervisor evaluations to promote growth.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a99387fe49c906bded655749ef7b6003c556cf28d84a2d52e07ecca49e3c4f6?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Teacher Performance Metrics",
    description:
      "Measure engagement and learning outcomes from teaching sessions.Track and achieve career growth goals effectively.Digitally monitor and review teaching practices for continuous improvement.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/88da79f0e05f42d8a962fc6c7e689a7a4790fa90636e5a482f61550c4f9018f9?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Customizable Goal-Tracking Tools",
    description:
      "Keep students and teachers motivated with clear, interactive progress updates.Recognize excellence with digital rewards and certificates.Set and track school-wide goals for a unified vision of success.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45adc09b215913ad558b6f419ce2e0b1a80e9629a6a29c8fb910a82bdb7b203d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Seamless Integration and Accessibility",
    description:
      "Works perfectly with Scholar Clone’s other modules.Stay connected to performance data anytime, anywhere.Easy navigation for administrators, teachers, and students alike.",
  },
];

export default function KeyFeatures() {
  return (
    <div className="flex flex-col rounded-[48px] mx-40 mt-[10px]">
      <div className="self-center text-4xl font-bold text-center text-slate-500 max-md:max-w-full max-md:text-4xl"  style={{
                color:'rgba(61, 96, 149, 1)'
            }}>
        Key Features That Set Us Apart
      </div>
      <div className="flex flex-col items-center px-20 py-10 mt-6 w-full bg-white rounded-[48px] max-md:px-5 max-md:mt-10 max-md:max-w-full"style={{
      boxShadow: '6px 6px 12px 2px rgba(16, 24, 40, 0.2)'
    }}>
        <div className="w-full max-w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
        <div className="mt-10 w-full max-w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {features.slice(3, 6).map((feature, index) => (
              <FeatureCard key={index + 3} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
