import * as React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/27b4d347cb8a73961550f08143231389d9373c91bfd84999b3367f6cfa57e735?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Automated Payroll Processing",
    description:
      "	Calculate salaries, bonuses, and deductions with precision, based on real-time data such as attendance and performance metrics.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/60814cbd7863719cfc46e1a5db2dba6938943eee6fc25f073ba540e12910f228?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Tax Management",
    description:
      "Stay compliant with tax regulations through automated deductions, tax filing, and detailed reporting.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/06e2f10f5a1df641d82c513b0f5a5c3d389d9be49cdd6bcf8070f21c49a8be4d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Customizable Salary Structures",
    description:
      "Define flexible salary components, including allowances, benefits, and deductions, tailored to your organization's needs.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a99387fe49c906bded655749ef7b6003c556cf28d84a2d52e07ecca49e3c4f6?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Employee Self-Service Portal",
    description:
      "Provide employees with access to their payslips, tax information, and benefits through an intuitive portal.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/88da79f0e05f42d8a962fc6c7e689a7a4790fa90636e5a482f61550c4f9018f9?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Multi-Currency and Multi-Country Support",
    description:
      "Handle payroll operations for a global workforce with support for various currencies and compliance with country-specific laws.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45adc09b215913ad558b6f419ce2e0b1a80e9629a6a29c8fb910a82bdb7b203d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Reporting and Analytics",
    description:
      "Generate payroll summaries, tax filings, and other critical reports with ease, helping you make informed financial decisions.",
  },
];

export default function KeyFeatures() {
  return (
    <div className="flex flex-col rounded-[48px] lg:mx-40 sm:mx-10 mt-[10px]">
      <div className="self-center lg:text-4xl sm:text-2xl font-bold text-center text-slate-500 max-md:max-w-full max-md:text-4xl"  style={{
                color:'rgba(61, 96, 149, 1)'
            }}>
        Features of Payroll Management
      </div>
      <div className="flex flex-col items-center lg:px-20 sm:px-10 py-10 mt-6 w-full bg-white rounded-[48px] max-md:px-5 max-md:mt-10 max-md:max-w-full"style={{
      boxShadow: '6px 6px 12px 2px rgba(16, 24, 40, 0.2)'
    }}>
        <div className="w-full max-w-full max-md:max-w-full">
          <div className="lg:flex gap-5 max-md:flex-col">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
        <div className="lg:mt-10 sm:mt-2 w-full max-w-full max-md:mt-10 max-md:max-w-full">
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
