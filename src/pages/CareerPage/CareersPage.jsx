import * as React from "react";
import CareersHero from "./CareersHero";
import JobCard from "./JobCard";
import Header from "../Header_C/NavBar";
import Footer from "../Footer_C/Footer";
import Content from "../../EmployeeBenefits/EmployeeBenefits";
import ContentNew from "../../ExploreOpenRoles/ExploreOpenRoles";
const jobListings = [
  {
    title: "Fullstack Developer",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/35a944865c0e271de7c45769cebb1328d1f46a5e1ce2374cd2fbf3a92f476861?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
  },
  {
    title: "Flutter Developer",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/70038d647dac4657e4982f33dbdee41c4fa8c69222c6c880915c8984815446d8?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
  },
  {
    title: "UI/UX Designer",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/70038d647dac4657e4982f33dbdee41c4fa8c69222c6c880915c8984815446d8?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3"
  }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <CareersHero />
      <Content />
     
      <ContentNew />
      <Footer />
    </div>
  );
}
