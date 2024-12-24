import * as React from "react";
import { useState, useEffect } from "react";
import { LeftMenuItem, RightMenuItem } from "../../Components/MenuItem";
import { leftMenuItems } from "../../Components/menuItems";

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
    icon: "/home_images/Megamenu/LMS/1.png",
    title: "Teaching & Learning",
    description: "Finance & Operations Systems manage budgets and daily operations.",
    url: "/lmsservice"  // Add a clickable URL
  },
  {
    id: 2,
    icon: "/home_images/Megamenu/LMS/2.png",
    title: "Measuring Learning & Growth",
    description: "Student & Academic Management Systems organize student data and streamline academic processes.",
    url: "/lmsservice"  // Add a clickable URL
  },
  {
    id: 3,
    icon: "/home_images/Megamenu/LMS/3.png",
    title: "Administration & Management",
    description: "Student & Academic Management Systems organize student data and streamline academic processes.",
    url: "/lmsservice"  // Add a clickable URL
  },
  {
    id: 4,
    icon: "/home_images/Megamenu/LMS/4.png",
    title: "Student Support & Engagement",
    description: "Student & Academic Management Systems organize student data and streamline academic processes.",
    url: "/lmsservice" // Add a clickable URL
  },
  // Add more specific items for LMS if needed
];

const rightMenuForCareerCounselling = [
    {
        id: 1,
        icon: "/home_images/Megamenu/CC/1.png",
        title: "Career Development",
        description: "Administrative & Management Solutions streamline organizational operations.",
        url: "ccservice"  // Add a clickable URL
      },
      {
        id: 2,
        icon: "/home_images/Megamenu/CC/2.png",
        title: "Assessment & Evaluation",
        description: "Finance & Operations Systems manage budgets and daily operations.",
        url: "ccservice" // Add a clickable URL
      },
      {
        id: 3,
        icon: "/home_images/Megamenu/CC/3.png",
        title: "Counseling & Support",
        description: "Student & Academic Management Systems organize student data and streamline academic processes.",
        url: "ccservice"  // Add a clickable URL
      },
      {
        id: 4,
        icon: "/home_images/Megamenu/CC/4.png",
        title: "Exploration & Connectivity",
        description: "Engagement & Communication Systems enhance interaction and information sharing.",
        url: "ccservice"
      }
];
const rightMenuForEducationAI = [
    {
        id: 1,
        icon: "/home_images/Megamenu/EAI/1.png",
        title: "AI-Powered Learning Tools",
        description: "Administrative & Management Solutions streamline organizational operations.",
        url: "/aiservice"  // Add a clickable URL
      },
      {
        id: 2,
        icon: "/home_images/Megamenu/EAI/2.png",
        title: "Automation & Efficiency",
        description: "Finance & Operations Systems manage budgets and daily operations.",
        url: "/aiservice"  // Add a clickable URL
      },
      {
        id: 3,
        icon: "/home_images/Megamenu/EAI/3.png",
        title: "AI-Driven Communication",
        description: "Student & Academic Management Systems organize student data and streamline academic processes.",
        url: "/aiservice"  // Add a clickable URL
      },
];

const rightMenuForCommunication = [
    {
      id: 1,
      icon: "/home_images/Megamenu/COMM/1.png",
      title: "Parental Engagement",
      description: "Finance & Operations Systems manage budgets and daily operations.",
      url: "/commservice"  // Add a clickable URL
    },
    {
      id: 2,
      icon: "/home_images/Megamenu/COMM/2.png",
      title: "Teacher Communication & Coordinations",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url:"/commservice"// Add a clickable URL
    },
    {
      id: 3,
      icon: "/home_images/Megamenu/COMM/3.png",
      title: "Messaging & Notifications",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url:"/commservice" // Add a clickable URL
    },
    {
      id: 4,
      icon: "/home_images/Megamenu/COMM/4.png",
      title: "Automated Communication",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url:"/commservice"
    },
    // Add more specific items for LMS if needed
  ];

  const rightMenuForAnalytics = [
    {
      id: 1,
      icon: "/home_images/Megamenu/ANALYTICS/1.png",
      title: "Performance Analytics",
      description: "Finance & Operations Systems manage budgets and daily operations.",
      url: "/analyticsservice"  // Add a clickable URL
    },
    {
      id: 2,
      icon: "/home_images/Megamenu/ANALYTICS/2.png",
      title: "Reporting & Insights",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url: "/analyticsservice"  // Add a clickable URL
    },
    {
      id: 3,
      icon: "/home_images/Megamenu/ANALYTICS/3.png",
      title: "Predictive Analytics",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url: "/analyticsservice" // Add a clickable URL
    },
    {
      id: 4,
      icon: "/home_images/Megamenu/ANALYTICS/4.png",
      title: "Exam & Results Analysis",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url:"/analyticsservice"
    },
  ];
const additionalContentForERP = [
 [   
  {
    id: 1,
    title: "Front Desk Management",
    url1: "/erpservice/front-desk",  
    url2: "/erpservice/front-desk-benefits"  
    },
    {
    id: 2,
    title: "User/Teacher Management",
    url1: "/erpservice/user-teacher",  
    url2: "/erpservice/user-teacher-benefits"  
    },
    {
    id: 3,
    title: "Task Management",
    url1: "/erpservice/task",  
    url2: "/erpservice/task-benefits"  
    },
    {
    id: 4,
    title: "Complaint Management",
    url1: "/erpservice/complaint",  
    url2: "/erpservice/complaint-benefits"  
    },
    {
    id: 5,
    title: "Discipline Tracking",
    url1: "/erpservice/discipline",  
    url2: "/erpservice/discipline-benefits"  
    },
    {
    id: 6,
    title: "Visitor Management",
    url1: "/erpservice/visitor",  
    url2: "/erpservice/visitor-benefits"  
    },
    {
    id: 7,
    title: "Digital Records",
    url1: "/erpservice/digital-records",  
    url2: "/erpservice/digital-records-benefits"  
    },
    {
    id: 8,
    title: "Inventory & Store Management",
    url1: "/erpservice/inventory",  
    url2: "/erpservice/inventory-benefits"  
    }
  ],
  [
    {
      id: 9,
      title: "Finance & Petty Cash Management",
      url1: "/erpservice/finance-petty-cash",  
      url2: "/erpservice/finance-petty-cash-benefits"
    },
    {
      id: 10,
      title: "Student Fees Management",
      url1: "/erpservice/student-fees",  
      url2: "/erpservice/student-fees-benefits"
    },
    {
      id: 11,
      title: "Library Management",
      url1: "/erpservice/library",  
      url2: "/erpservice/library-benefits"
    },
    {
      id: 12,
      title: "Payment Processing",
      url1: "/erpservice/payment-processing",  
      url2: "/erpservice/payment-processing-benefits"
    }
  ],
  
  // New Subarray for Student & Academic Management
  [
    {
      id: 13,
      title: "Education CRM",
      url1: "/erpservice/education-crm",  
      url2: "/erpservice/education-crm-benefits"
    },
    {
      id: 14,
      title: "Student Profiles & Management",
      url1: "/erpservice/student-profiles",  
      url2: "/erpservice/student-profiles-benefits"
    },
    {
      id: 15,
      title: "Attendance Tracking",
      url1: "/erpservice/attendance",  
      url2: "/erpservice/attendance-benefits"
    },
    {
      id: 16,
      title: "Gradebook",
      url1: "/erpservice/gradebook",  
      url2: "/erpservice/gradebook-benefits"
    },
    {
      id: 17,
      title: "Certificate Generation",
      url1: "/erpservice/certificate-generation",  
      url2: "/erpservice/certificate-generation-benefits"
    },
    {
      id: 18,
      title: "I-Cards",
      url1: "/erpservice/icards",  
      url2: "/erpservice/icards-benefits"
    },
    {
      id: 19,
      title: "Hostel Management",
      url1: "/erpservice/hostel",  
      url2: "/erpservice/hostel-benefits"
    }
  ],
  
  // New Subarray for Engagement & Communication
  [
    {
      id: 20,
      title: "Communication Tools (Email, SMS, Notifications, etc.)",
      url1: "/erpservice/communication-tools",  
      url2: "/erpservice/communication-tools-benefits"
    },
    {
      id: 21,
      title: "Parental Engagement",
      url1: "/erpservice/parental-engagement",  
      url2: "/erpservice/parental-engagement-benefits"
    },
    {
      id: 22,
      title: "Complaint & Feedback System",
      url1: "/erpservice/complaint-feedback",  
      url2: "/erpservice/complaint-feedback-benefits"
    },
    {
      id: 23,
      title: "Student Performance Tracking",
      url1: "/erpservice/student-performance",  
      url2: "/erpservice/student-performance-benefits"
    }
  ]
];

const additionalContentForLMS = [
  [
    {
      id: 1,
      title: "Learning Management System (LMS)",
      url1: "/lmsservice/lms",  
      url2: "/lmsservice/lms-benefits"
    },
    {
      id: 2,
      title: "Teaching Tools",
      url1: "/lmsservice/teaching-tools",  
      url2: "/lmsservice/teaching-tools-benefits"
    },
    {
      id: 3,
      title: "Learning Tools",
      url1: "/lmsservice/learning-tools",  
      url2: "/lmsservice/learning-tools-benefits"
    },
    {
      id: 4,
      title: "Curriculum Planning",
      url1: "/lmsservice/curriculum-planning",  
      url2: "/lmsservice/curriculum-planning-benefits"
    }
  ],
  [
    {
      id: 5,
      title: "Assessment Tools",
      url1: "/lmsservice/assessment-tools",  
      url2: "/lmsservice/assessment-tools-benefits"
    },
    {
      id: 6,
      title: "MTSS (Multi-Tiered System of Support)",
      url1: "/lmsservice/mtss",  
      url2: "/lmsservice/mtss-benefits"
    }
  ],
  [
    {
      id: 7,
      title: "Administration Tools",
      url1: "/lmsservice/administration-tools",  
      url2: "/lmsservice/administration-tools-benefits"
    },
    {
      id: 8,
      title: "Engagement Tools",
      url1: "/lmsservice/engagement-tools",  
      url2: "/lmsservice/engagement-tools-benefits"
    }
  ],
  [
    {
      id: 9,
      title: "Student Engagement",
      url1: "/lmsservice/student-engagement",  
      url2: "/lmsservice/student-engagement-benefits"
    },
    {
      id: 10,
      title: "Performance & Feedback Tracking",
      url1: "/lmsservice/performance-feedback",  
      url2: "/lmsservice/performance-feedback-benefits"
    }
  ]
];


const additionalContentForCareerCounselling = [
  [
    {
      id: 1,
      title: "Career Counseling",
      url1: "/career-counselling/career-counseling",  
      url2: "/career-counselling/career-counseling-benefits"
    },
    {
      id: 2,
      title: "Guidance",
      url1: "/career-counselling/guidance",  
      url2: "/career-counselling/guidance-benefits"
    }
  ],
  [
    {
      id: 3,
      title: "Assessment",
      url1: "/career-counselling/assessment",  
      url2: "/career-counselling/assessment-benefits"
    }
  ],
  [
    {
      id: 4,
      title: "Counseling",
      url1: "/career-counselling/counseling",  
      url2: "/career-counselling/counseling-benefits"
    }
  ],
  [
    {
      id: 5,
      title: "Connect/Explore",
      url1: "/career-counselling/connect-explore",  
      url2: "/career-counselling/connect-explore-benefits"
    }
  ]
];


const additionalContentForEducationAI = [
  [
    {
      id: 1,
      title: "PAL (Personalized Adaptive Learning)",
      url1: "/ai/pal",  
      url2: "/ai/pal-benefits"
    },
    {
      id: 2,
      title: "Generative AI",
      url1: "/ai/generative-ai",  
      url2: "/ai/generative-ai-benefits"
    }
  ],
  [
    {
      id: 3,
      title: "Automatic Grading",
      url1: "/ai/automatic-grading",  
      url2: "/ai/automatic-grading-benefits"
    },
    {
      id: 4,
      title: "Time Table Automation",
      url1: "/ai/time-table-automation",  
      url2: "/ai/time-table-automation-benefits"
    }
  ],
  [
    {
      id: 5,
      title: "Chat Bot",
      url1: "/ai/chat-bot",  
      url2: "/ai/chat-bot-benefits"
    }
  ]
];

const additionalContentForCommunication = [
  [
    {
      id: 1,
      title: "PTM (Parent-Teacher Meetings)",
      url1: "/communication/ptm",  
      url2: "/communication/ptm-benefits"
    },
    {
      id: 2,
      title: "Circulars",
      url1: "/communication/circulars",  
      url2: "/communication/circulars-benefits"
    }
  ],
  [
    {
      id: 3,
      title: "Teacher Diary",
      url1: "/communication/teacher-diary",  
      url2: "/communication/teacher-diary-benefits"
    }
  ],
  [
    {
      id: 4,
      title: "Email",
      url1: "/communication/email",  
      url2: "/communication/email-benefits"
    },
    {
      id: 5,
      title: "SMS",
      url1: "/communication/sms",  
      url2: "/communication/sms-benefits"
    },
    {
      id: 6,
      title: "WhatsApp",
      url1: "/communication/whatsapp",  
      url2: "/communication/whatsapp-benefits"
    }
  ],
  [
    {
      id: 7,
      title: "IVRS (Interactive Voice Response System)",
      url1: "/communication/ivrs",  
      url2: "/communication/ivrs-benefits"
    }
  ]
];

const additionalContentForAnalytics = [
  [
    {
      id: 1,
      title: "Student Performance",
      url1: "/analytics/student-performance",  
      url2: "/analytics/student-performance-benefits"
    },
    {
      id: 2,
      title: "Teacher Performance",
      url1: "/analytics/teacher-performance",  
      url2: "/analytics/teacher-performance-benefits"
    }
  ],
  [
    {
      id: 3,
      title: "Reports",
      url1: "/analytics/reports",  
      url2: "/analytics/reports-benefits"
    }
  ],
  [
    {
      id: 4,
      title: "Prediction",
      url1: "/analytics/prediction",  
      url2: "/analytics/prediction-benefits"
    }
  ],
  [
    {
      id: 5,
      title: "CBSE Result Analyzer",
      url1: "/analytics/cbse-result-analyzer",  
      url2: "/analytics/cbse-result-analyzer-benefits"
    }
  ]
];

export default function FeatureLayout({ onLeftMenuHover }) {
  const [hoveredLeftMenuId, setHoveredLeftMenuId] = React.useState(null);
  const [hoveredRightMenuId, setHoveredRightMenuId] = React.useState(null);
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
      default:
        return [];
    }
  };
  const getAdditionalContent = (leftId,rightId) => {
    if(leftId == 1){
    switch (rightId) {
      case 1:
        return additionalContentForERP[0];
      case 2:
        return additionalContentForERP[1];
      case 3:
        return additionalContentForERP[2];
      case 4:
        return additionalContentForERP[3];
      default:
        return [];
    }
  }
  else if(leftId == 2){
    switch (rightId) {
      case 1:
        return additionalContentForLMS[0];
      case 2:
        return additionalContentForLMS[1];
      case 3:
        return additionalContentForLMS[2];
      case 4:
        return additionalContentForLMS[3];
      default:
        return [];
    }
  }
  else if(leftId == 3){
    switch (rightId) {
      case 1:
        return additionalContentForCareerCounselling[0];
      case 2:
        return additionalContentForCareerCounselling[1];
      case 3:
        return additionalContentForCareerCounselling[2];
      case 4:
        return additionalContentForCareerCounselling[3];
      default:
        return [];
    }
  }
  else if(leftId == 4){
    switch (rightId) {
      case 1:
        return additionalContentForEducationAI[0];
      case 2:
        return additionalContentForEducationAI[1];
      case 3:
        return additionalContentForEducationAI[2];
      default:
        return [];
    }
  }
  else if(leftId == 5){
    switch (rightId) {
      case 1:
        return additionalContentForCommunication[0];
      case 2:
        return additionalContentForCommunication[1];
      case 3:
        return additionalContentForCommunication[2];
      case 4:
        return additionalContentForCommunication[3];
      default:
        return [];
    }
  }
  else if(leftId == 6){
    switch (rightId) {
      case 1:
        return additionalContentForAnalytics[0];
      case 2:
        return additionalContentForAnalytics[1];
      case 3:
        return additionalContentForAnalytics[2];
      case 4:
        return additionalContentForAnalytics[3];
      default:
        return [];
    }
  }
  if(!leftId){
    return [];
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
  const handleMouseEnterRight = (id) => {
    setHoveredRightMenuId(id);
  };
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnterNew = (item) => {
    setHoveredItem(item);
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
                <div key={item.id} 
                     className="mt-5 first:mt-0"
                     onMouseEnter={() => handleMouseEnterRight(item.id)}
                >
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
            <div className="px-6 py-6 -mt-16">
            {getAdditionalContent(hoveredLeftMenuId,hoveredRightMenuId).map((item) => (
              <div 
                key={item.id}
                className="mt-10"
                onMouseEnter={() => handleMouseEnterNew(item)}
              >
                {item.title}
                {hoveredItem === item && (
                  <div className="flex gap-8 mt-3.5 ml-3.5 text-[12px] text-neutral-500 max-md:ml-2.5">
                    <a href={item.url1} className="basis-auto">Know Features</a>
                    <a href={item.url2}>Know Benefits</a>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
