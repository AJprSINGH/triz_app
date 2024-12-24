import * as React from "react";
import { useState, useEffect } from "react";
import { LeftMenuItem, RightMenuItem } from "./MenuItem";
import { leftMenuItems } from "./menuItems";

const rightMenuForERP = [
  {
    id: 1,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45345495e38b9b587ce08cc3fa065620d70b6dfb2473bbbdd2a9bfe8c0d08443?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Attendance & Tracking Solutions",
    description: "Administrative & Management Solutions streamline organizational operations.",
    url: "/integration"  
  },
  {
    id: 2,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e01ba0320aa0eaa980d365161f82833c212ccd234a493a831bc6d50fcda4af?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Communication & Collaboration",
    description: "Finance & Operations Systems manage budgets and daily operations.",
    url: "/integration" 
  },
  {
    id: 3,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Financial Integrations",
    description: "Student & Academic Management Systems organize student data and streamline academic processes.",
    url: "/integration" 
  },
  {
    id: 4,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7761a4f206fe520a1e55f00f92df761110e10203a3c23ce604102b1a3f70ec56?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "API & System Integrations",
    description: "Engagement & Communication Systems enhance interaction and information sharing.",
    url: "/integration" 
  }
];

const rightMenuForLMS = [
  {
    id: 1,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e01ba0320aa0eaa980d365161f82833c212ccd234a493a831bc6d50fcda4af?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Template management",
    description: "Finance & Operations Systems manage budgets and daily operations.",
    url: "/supportservice"  
  },
  {
    id: 2,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Roll-Over",
    description: "Student & Academic Management Systems organize student data and streamline academic processes.",
    url: "/supportservice" 
  },
  {
    id: 3,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Onboarding",
    description: "Student & Academic Management Systems organize student data and streamline academic processes.",
    url: "/supportservice"  
  }
];

const rightMenuForCareerCounselling = [
    {
        id: 1,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45345495e38b9b587ce08cc3fa065620d70b6dfb2473bbbdd2a9bfe8c0d08443?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        title: "Parents App",
        description: "Administrative & Management Solutions streamline organizational operations.",
        url: "mobileservices"
      },
      {
        id: 2,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e01ba0320aa0eaa980d365161f82833c212ccd234a493a831bc6d50fcda4af?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        title: "User/Teacher App",
        description: "Finance & Operations Systems manage budgets and daily operations.",
        url: "mobileservices"
      },
      {
        id: 3,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        title: "Management App",
        description: "Student & Academic Management Systems organize student data and streamline academic processes.",
        url: "mobileservices"
      }
];
const rightMenuForEducationAI = [
    {
        id: 1,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45345495e38b9b587ce08cc3fa065620d70b6dfb2473bbbdd2a9bfe8c0d08443?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
        title: "SQAA",
        description: "Administrative & Management Solutions streamline organizational operations.",
        url: "/pione"
      }
];

const rightMenuForCommunication = [
    {
      id: 1,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e01ba0320aa0eaa980d365161f82833c212ccd234a493a831bc6d50fcda4af?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Access & Permissions Management",
      description: "Finance & Operations Systems manage budgets and daily operations.",
      url: "/pitwo"
    },
    {
      id: 2,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Workflow Automation",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url: "/pitwo"
    },
    {
      id: 3,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Mapping & Visualization",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url: "/pitwo"
    }
  ];

  const rightMenuForAnalytics = [
    {
      id: 1,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e01ba0320aa0eaa980d365161f82833c212ccd234a493a831bc6d50fcda4af?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Student & Parent Solutions",
      description: "Finance & Operations Systems manage budgets and daily operations.",
      url: "/pithree"
    },
    {
      id: 2,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Teaching & Educational Management",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url: "/pithree"
    },
    {
      id: 3,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Finance & Administrative Solutions",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url: "/pithree"
    },
    {
      id: 4,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      title: "Human Resource & Staff Management",
      description: "Student & Academic Management Systems organize student data and streamline academic processes.",
      url: "/pithree"
    },
  ];
const additionalContentForERP = [
  [
    {
      id: 1,
      title: "RFID Attendance",
      url1: "/integrations/rfid-attendance",  
      url2: "/integrations/rfid-attendance-benefits"
    },
    {
      id: 2,
      title: "VTS (Vehicle Tracking System)",
      url1: "/integrations/vts",  
      url2: "/integrations/vts-benefits"
    }
  ],
  [
    {
      id: 3,
      title: "Google Classroom",
      url1: "/integrations/google-classroom",  
      url2: "/integrations/google-classroom-benefits"
    },
    {
      id: 4,
      title: "Zoom",
      url1: "/integrations/zoom",  
      url2: "/integrations/zoom-benefits"
    },
    {
      id: 5,
      title: "Google Meet",
      url1: "/integrations/google-meet",  
      url2: "/integrations/google-meet-benefits"
    }
  ],
  [
    {
      id: 6,
      title: "Payment Gateway",
      url1: "/integrations/payment-gateway",  
      url2: "/integrations/payment-gateway-benefits"
    },
    {
      id: 7,
      title: "Zoho Books",
      url1: "/integrations/zoho-books",  
      url2: "/integrations/zoho-books-benefits"
    },
    {
      id: 8,
      title: "Tally",
      url1: "/integrations/tally",  
      url2: "/integrations/tally-benefits"
    }
  ],
  [
    {
      id: 9,
      title: "API Integration",
      url1: "/integrations/api-integration",  
      url2: "/integrations/api-integration-benefits"
    }
  ]
];

const additionalContentForLMS = [
  [
    {
      id: 1,
      title: "Template",
      url1: "/template-management/roll-over",  
      url2: "/template-management/roll-over-benefits"
    }
  ],
  [
    {
      id: 2,
      title: "Roll Over",
      url1: "/template-management/roll-over",  
      url2: "/template-management/roll-over-benefits"
    }
  ],
  [
    {
      id: 3,
      title: "Onboarding",
      url1: "/template-management/onboarding",  
      url2: "/template-management/onboarding-benefits"
    }
  ]
];


const additionalContentForCareerCounselling = [
  [
    {
      id: 1,
      title: "Parent",
      url1: "/template-management/roll-over",  
      url2: "/template-management/roll-over-benefits"
    }
  ],
  [
    {
      id: 2,
      title: "User/Teacher",
      url1: "/template-management/roll-over",  
      url2: "/template-management/roll-over-benefits"
    }
  ],
  [
    {
      id: 3,
      title: "Management",
      url1: "/template-management/onboarding",  
      url2: "/template-management/onboarding-benefits"
    }
  ]
];


const additionalContentForEducationAI = [
  [
    {
      id: 1,
      title: "SQAA",
      url1: "/ai/pal",  
      url2: "/ai/pal-benefits"
    },
  ]
];

const additionalContentForCommunication = [
  [
    {
      id: 1,
      title: "Role-Based Rights Management",
      url1: "/permissions/role-based-rights",  
      url2: "/permissions/role-based-rights-benefits"
    },
    {
      id: 2,
      title: "Mobile App Rights Management",
      url1: "/permissions/mobile-app-rights",  
      url2: "/permissions/mobile-app-rights-benefits"
    }
  ],
  [
    {
      id: 3,
      title: "Workflow",
      url1: "/permissions/workflow",  
      url2: "/permissions/workflow-benefits"
    }
  ],
  [
    {
      id: 4,
      title: "Map",
      url1: "/permissions/map",  
      url2: "/permissions/map-benefits"
    }
  ]
];

const additionalContentForAnalytics = [
  [
    {
      id: 1,
      title: "Student/Parents",
      url1: "/solutions/student-parents",  
      url2: "/solutions/student-parents-benefits"
    }
  ],
  [
    {
      id: 2,
      title: "Teacher",
      url1: "/solutions/teacher",  
      url2: "/solutions/teacher-benefits"
    },
    {
      id: 3,
      title: "Principal",
      url1: "/solutions/principal",  
      url2: "/solutions/principal-benefits"
    },
    {
      id: 4,
      title: "Librarian",
      url1: "/solutions/librarian",  
      url2: "/solutions/librarian-benefits"
    }
  ],
  [
    {
      id: 5,
      title: "CA/Finance Head",
      url1: "/solutions/finance-head",  
      url2: "/solutions/finance-head-benefits"
    },
    {
      id: 6,
      title: "Fees Head",
      url1: "/solutions/fees-head",  
      url2: "/solutions/fees-head-benefits"
    }
  ],
  [
    {
      id: 7,
      title: "HR Head",
      url1: "/solutions/hr-head",  
      url2: "/solutions/hr-head-benefits"
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
    if (leftId == null || rightId == null) {
      return [];
    }
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
  return [];
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
            <div className="flex flex-col px-5 pt-24 pb-24 w-full text-sm font-semibold leading-none text-sky-500 shadow-sm max-md:px-5 max-md:pb-24" style={{
              paddingTop: hoveredLeftMenuId ? "32%" : "10%",
              paddingBottom: hoveredLeftMenuId ? "32%" : "10%",
            }}
          >
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
            {getAdditionalContent(hoveredLeftMenuId,hoveredRightMenuId)?.map((item) => (
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
