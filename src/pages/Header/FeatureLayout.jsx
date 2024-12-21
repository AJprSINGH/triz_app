import * as React from "react";
import { useState, useEffect } from "react";
import { LeftMenuItem, RightMenuItem } from "./MenuItem";
import { leftMenuItems, rightMenuItems } from "./menuItems";

export default function FeatureLayout() {
  const [hoveredLeftMenuId, setHoveredLeftMenuId] = React.useState(null);
  const [visible, setVisible] = useState(false);
  const filteredRightMenuItems = (hoveredId) => {
    if (!hoveredId) return []; 
    switch (hoveredId) {
      case 1: 
        return rightMenuItems.slice(0, 1);
      case 2: 
        return rightMenuItems.slice(1, 2); 
      case 3: 
        return rightMenuItems.slice(2, 3); 
      case 4: 
        return rightMenuItems.slice(3, 4);
      default:
        return [];
    }
  };

  useEffect(() => {
    
    setVisible(true);
  }, []);

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
              width: hoveredLeftMenuId ? "calc(100% - 800px)" : "100%",
            }}
          >
            <div className="flex flex-col px-5 pt-24 pb-60 w-full text-sm font-semibold leading-none text-sky-500 shadow-sm max-md:px-5 max-md:pb-24">
              {leftMenuItems.map((item) => (
                <div
                  key={item.id}
                  className="mt-5 first:mt-0"
                  onMouseEnter={() => setHoveredLeftMenuId(item.id)}
                >
                  <LeftMenuItem icon={item.icon} title={item.title} />
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
            <div className="flex flex-col pt-28 pb-56 mx-auto font-semibold size-full max-md:py-24 max-md:max-w-full">
              {filteredRightMenuItems(hoveredLeftMenuId).map((item) => (
                <div key={item.id} className="mt-5 first:mt-0">
                  <RightMenuItem
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
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
