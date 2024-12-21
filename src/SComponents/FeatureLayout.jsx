import * as React from "react";
import { useState, useEffect } from "react";
import { LeftMenuItem, RightMenuItem } from "./MenuItem";
import { leftMenuItems } from "./menuItems";

// Define the right-side menu items for each left-side menu item
const rightMenuForERP = [
  {
    id: 1,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45345495e38b9b587ce08cc3fa065620d70b6dfb2473bbbdd2a9bfe8c0d08443?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Administrative & Management Solutions",
    description: "Administrative & Management Solutions streamline organizational operations.",
    url: "/erpservice"  // Add a clickable URL
  },
  {
    id: 2,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e01ba0320aa0eaa980d365161f82833c212ccd234a493a831bc6d50fcda4af?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Finance & Operations",
    description: "Finance & Operations Systems manage budgets and daily operations.",
    url: "/erpservice"  // Add a clickable URL
  },
  {
    id: 3,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Student & Academic Management",
    description: "Student & Academic Management Systems organize student data and streamline academic processes.",
    url: "/erpservice"  // Add a clickable URL
  },
  {
    id: 4,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7761a4f206fe520a1e55f00f92df761110e10203a3c23ce604102b1a3f70ec56?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Engagement & Communication",
    description: "Engagement & Communication Systems enhance interaction and information sharing.",
    url: "/erpservice"
  }
];

const rightMenuForLMS = [
  {
    id: 1,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e01ba0320aa0eaa980d365161f82833c212ccd234a493a831bc6d50fcda4af?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: " Teaching & Learning",
    description: "Finance & Operations Systems manage budgets and daily operations.",
    url: "/lmsservice"  // Add a clickable URL
  },
  {
    id: 2,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Assessment & Evaluation",
    description: "Student & Academic Management Systems organize student data and streamline academic processes.",
    url: "/lmsservice"  // Add a clickable URL
  },
  {
    id: 3,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Administration & Management",
    description: "Student & Academic Management Systems organize student data and streamline academic processes.",
    url: "/lmsservice"  // Add a clickable URL
  },
  {
    id: 4,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Student Support & Engagement",
    description: "Student & Academic Management Systems organize student data and streamline academic processes.",
    url: "/lmsservice" // Add a clickable URL
  },
  // Add more specific items for LMS if needed
];

const rightMenuForCareerCounselling = [
    {
        id: 1,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45345495e38b9b587ce08cc3fa065620d70b6dfb2473bbbdd2a9bfe8c0d08443?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        title: "Career Development",
        description: "Administrative & Management Solutions streamline organizational operations.",
        url: "ccservice"  // Add a clickable URL
      },
      {
        id: 2,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e01ba0320aa0eaa980d365161f82833c212ccd234a493a831bc6d50fcda4af?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        title: "Assessment & Evaluation",
        description: "Finance & Operations Systems manage budgets and daily operations.",
        url: "ccservice" // Add a clickable URL
      },
      {
        id: 3,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        title: "Counseling & Support",
        description: "Student & Academic Management Systems organize student data and streamline academic processes.",
        url: "ccservice"  // Add a clickable URL
      },
      {
        id: 4,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7761a4f206fe520a1e55f00f92df761110e10203a3c23ce604102b1a3f70ec56?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        title: "Exploration & Connectivity",
        description: "Engagement & Communication Systems enhance interaction and information sharing.",
        url: "ccservice"
      }
];
const rightMenuForEducationAI = [
    {
        id: 1,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45345495e38b9b587ce08cc3fa065620d70b6dfb2473bbbdd2a9bfe8c0d08443?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        title: "AI-Powered Learning Tools",
        description: "Administrative & Management Solutions streamline organizational operations.",
        url: "/aiservice"  // Add a clickable URL
      },
      {
        id: 2,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e01ba0320aa0eaa980d365161f82833c212ccd234a493a831bc6d50fcda4af?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        title: "Automation & Efficiency",
        description: "Finance & Operations Systems manage budgets and daily operations.",
        url: "/aiservice"  // Add a clickable URL
      },
      {
        id: 3,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        title: "AI-Driven Communication",
        description: "Student & Academic Management Systems organize student data and streamline academic processes.",
        url: "/aiservice"  // Add a clickable URL
      },
];

const rightMenuForCommunication = [
    {
      id: 1,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e01ba0320aa0eaa980d365161f82833c212ccd234a493a831bc6d50fcda4af?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Parental Engagement",
      description: "Finance & Operations Systems manage budgets and daily operations.",
      url: "/commservice"  // Add a clickable URL
    },
    {
      id: 2,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Teacher Communication & Coordinations",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url:"/commservice"// Add a clickable URL
    },
    {
      id: 3,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Messaging & Notifications",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url:"/commservice" // Add a clickable URL
    },
    {
      id: 4,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Automated Communication",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url:"/commservice"
    },
    // Add more specific items for LMS if needed
  ];

  const rightMenuForAnalytics = [
    {
      id: 1,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e01ba0320aa0eaa980d365161f82833c212ccd234a493a831bc6d50fcda4af?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Performance Analytics",
      description: "Finance & Operations Systems manage budgets and daily operations.",
      url: "/analyticsservice"  // Add a clickable URL
    },
    {
      id: 2,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Reporting & Insights",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url: "/analyticsservice"  // Add a clickable URL
    },
    {
      id: 3,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Predictive Analytics",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url: "/analyticsservice" // Add a clickable URL
    },
    {
      id: 4,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Exam & Results Analysis",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url:"/analyticsservice"
    },
    // Add more specific items for LMS if needed
  ];
// Additional content for each left-side menu item with "Know Features" and "Know Benefits"
const additionalContentForERP = (
  <div>
    <div>Enterprise Resource Planning Features</div>
    <div className="mt-10">Financial Tracking</div>
    <div className="mt-10">Supply Chain Management</div>
    <div className="mt-10">
      <a href="/erp/features" className="text-sky-500">Know Features</a>
    </div>
    <div className="mt-10">
      <a href="/erp/benefits" className="text-sky-500">Know Benefits</a>
    </div>
  </div>
);

const additionalContentForLMS = (
  <div>
    <div>Learning Management System Features</div>
    <div className="mt-10">Course Management</div>
    <div className="mt-10">Student Progress Tracking</div>
    <div className="mt-10">
      <a href="/lms/features" className="text-sky-500">Know Features</a>
    </div>
    <div className="mt-10">
      <a href="/lms/benefits" className="text-sky-500">Know Benefits</a>
    </div>
  </div>
);

const additionalContentForCareerCounselling = (
  <div>
    <div>Career Counselling Features</div>
    <div className="mt-10">Student Career Guidance</div>
    <div className="mt-10">Job Placement Services</div>
    <div className="mt-10">
      <a href="/career-counselling/features" className="text-sky-500">Know Features</a>
    </div>
    <div className="mt-10">
      <a href="/career-counselling/benefits" className="text-sky-500">Know Benefits</a>
    </div>
  </div>
);

export default function FeatureLayout({ onLeftMenuHover }) {
  const [hoveredLeftMenuId, setHoveredLeftMenuId] = React.useState(null);
  const [visible, setVisible] = useState(false);

  // Logic for handling the right menu items
  const getRightMenuItems = (id) => {
    switch (id) {
      case 1:
        return rightMenuForERP;
      case 2:
        return rightMenuForLMS;
      case 3:
        return rightMenuForCareerCounselling;
    case 4:
        return rightMenuForEducationAI;
    case 5:
        return rightMenuForCommunication;
    case 6:
        return rightMenuForAnalytics;
      // You can add more cases for other left-side menu items if needed
      default:
        return [];
    }
  };

  // Logic for handling additional content
  const getAdditionalContent = (id) => {
    switch (id) {
      case 1:
        return additionalContentForERP;
      case 2:
        return additionalContentForLMS;
      case 3:
        return additionalContentForCareerCounselling;
      // You can add more cases for other left-side menu items if needed
      default:
        return null;
    }
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredLeftMenuId(id);
    if (onLeftMenuHover) {
      // Pass the ID to the parent to adjust position
      console.log(id);
      onLeftMenuHover(id);
    }
  };

  return (
    <div
      className={`overflow-hidden bg-gray-200 rounded-2xl shadow-sm ${visible ? "opacity-100" : "opacity-0"}`}
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        boxShadow: '0 0 25px 3px rgba(36, 174, 139, 0.45)',
      }}
    >
      <div className="relative flex h-full transition-all duration-300 ease-in-out">
        <div
          className={`flex h-full`}
          style={{
            width: hoveredLeftMenuId ? "calc(100% + 800px)" : "100%", // Expands to accommodate both right menu and extra content
          }}
        >
          <div
            className={`flex flex-col transition-all duration-300 ease-in-out bg-white`}
            style={{
              width: hoveredLeftMenuId ? "calc(100% - 800px)" : "100%", // Shrink left menu on hover
            }}
          >
            <div className="flex flex-col px-5 pt-24 pb-24 w-full text-sm font-semibold leading-none text-sky-500 shadow-sm max-md:px-5 max-md:pb-24">
              {leftMenuItems.map((item) => (
                <div
                  key={item.id}
                  className="mt-5 first:mt-0"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                >
                  <a href={item.url} className="flex items-center">
                    <LeftMenuItem icon={item.icon} title={item.title} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Menu (Appears only on hover of left menu) */}
          <div
            className={`transition-all duration-300 ease-in-out bg-white`}
            style={{
              width: "400px", // Set width for right-side menu
              position: hoveredLeftMenuId ? "" : "absolute",
              transform: hoveredLeftMenuId ? "translateX(0)" : "translateX(100%)", // Slide right menu in
              opacity: hoveredLeftMenuId ? 1 : 0, // Fade in/out
            }}
          >
            <div className="flex flex-col pt-28 pb-24 mx-auto font-semibold size-full max-md:py-24 max-md:max-w-full">
              {getRightMenuItems(hoveredLeftMenuId).map((item) => (
                <div key={item.id} className="mt-5 first:mt-0">
                  <a href={item.url} className="flex items-center">
                    <RightMenuItem
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Content (Appears next to the right menu) */}
          <div
            className={`flex flex-col items-start mt-28 w-full text-sm font-semibold leading-none text-sky-500 text-opacity-80 max-md:mt-10 transition-all duration-300 ease-in-out`}
            style={{
              width: "400px", // Fixed width for additional content
              position: hoveredLeftMenuId ? "" : "absolute",
              transform: hoveredLeftMenuId ? "translateX(0)" : "translateX(100%)", // Slide in/out with the right menu
              opacity: hoveredLeftMenuId ? 1 : 0, // Fade in/out
              pointerEvents: hoveredLeftMenuId ? "auto" : "none", // Enable/disable pointer events
            }}
          >
            <div className="px-6 py-6 -mt-10">
              <div>Front Desk Management</div>
              <div className="flex gap-8 mt-3.5 ml-3.5 text-[12px] text-neutral-500 max-md:ml-2.5">
                <div className="basis-auto">Know Features</div>
                <div>Know Benifits</div>
              </div>
              <div className="mt-10">User/Teacher Management</div>
              <div className="mt-10">Task Management</div>
              <div className="mt-10">Complaint Management</div>
              <div className="mt-10">Discipline Tracking</div>
              <div className="mt-10">Visitor Management</div>
              <div className="mt-10">Digital Records</div>
              <div className="self-stretch mt-10">Inventory & Store Management</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
