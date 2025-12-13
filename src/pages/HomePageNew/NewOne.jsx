"use client"
import * as React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import Service from './ServicesSection';
const HERO_BUTTONS = [
  { text: "Get a free Demo Now!", bgColor: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' },
  //{ text: "Explore Scholar Clone", bgColor: 'rgb(255, 255, 255)' , color: 'rgb(0, 0, 0)' }
];
function ImageComponent() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
    setModalOpen(true);
  }, []);

  const handleClick = () => {
    router.push("/contactGlobal");
  };
  return (
    <>
      <div className="relative mt-10">
        <div className="lg:flex sm:hidden overflow-hidden relative flex-col rounded-3xl w-full max-md:pl-5 max-md:max-w-full" style={{
          backgroundImage: 'url("/home_images/Group 1321314662 (2).png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          height: '149vh',

        }}
        >
          <div className="flex flex-col w-full pt-10 items-center justify-center max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center justify-center w-full text-2xl font-medium max-md:mt-10 max-md:max-w-full">
              <div className="lg:text-7xl sm:text-5xl text-white text-center font-poppins max-md:max-w-full max-md:text-4xl">
                One platform,<br />Endless possibilities.
              </div>
              <div className="flex gap-10 mt-16 max-w-full items-center justify-center text-lg w-full max-md:mt-10">
                {HERO_BUTTONS.map((button, index) => (
                  <button key={index}
                    className={`gap-2.5 self-stretch px-5 py-1 bg-sky-500 font-inter rounded-3xl transition-all duration-300 transform hover:scale-105`}
                    tabIndex="0"
                    style={{
                      background: button.bgColor,
                      color: button.color,
                    }}
                    onClick={handleClick}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex lg:hidden overflow-hidden relative flex-col rounded-3xl w-full max-md:pl-5 max-md:max-w-full" style={{
          backgroundImage: 'url("/home_images/Group 1321314662 (2).png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          height: '52vh',

        }}
        >
          <div className="flex flex-col w-full pt-10 items-center justify-center max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center justify-center w-full text-2xl font-medium max-md:mt-10 max-md:max-w-full">
              <div className="lg:text-7xl sm:text-1xl text-white text-center font-poppins max-md:max-w-full max-md:text-3xl">
                One platform,<br />Endless possibilities.
              </div>
              <div className="flex gap-10 lg:mt-16 sm:mt-1 max-w-full items-center justify-center lg:text-lg sm:text-xs w-[80%] max-md:mt-10">
                {HERO_BUTTONS.map((button, index) => (
                  <button key={index}
                    className={`gap-2.5 self-stretch px-3 py-1 bg-sky-500 font-inter sm:rounded-3xl transition-all duration-300 transform hover:scale-105`}
                    tabIndex="0"
                    style={{
                      background: button.bgColor,
                      color: button.color,
                    }}
                    onClick={handleClick}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="lg:mt-40 sm:mt-30 lg:px-80 text-center font-inter lg:text-4xl sm:text-2xl" style={{
        color: 'rgba(17, 134, 254, 1)'
      }}>
        Holistic Solutions for Seamless Management and Growth
      </h1>
      <div className="relative mt-10 lg:mx-[200px]">
        <div className="lg:flex sm:hidden min-h-screen overflow-hidden relative flex-col rounded-3xl w-full max-md:pl-5 max-md:max-w-full" style={{
          backgroundImage: 'url("/home_images/00 (1).png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
        ></div>
        <div className="sm:flex lg:hidden mb-10 overflow-hidden relative flex-col rounded-3xl w-full min-h-[200px] max-md:pl-5 max-md:max-w-full"
          style={{
            backgroundImage: 'url("/home_images/00 (1).png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>


      </div>
      <h1 className="lg:mt-40 sm:mt-5 lg:px-40 text-center font-inter lg:text-4xl sm:text-2xl" style={{
        color: 'rgba(17, 134, 254, 1)'
      }}>
        Scholar Clone in Your Pocket Mobile Apps for Everyone
      </h1>
      <Service />
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-500 opacity-100">
          <div
            className="flex overflow-hidden flex-col items-center px-6 pt-5 pb-6 bg-white rounded-xl shadow-sm w-[95vw] max-w-[1200px]"
            style={{ boxShadow: '0 0 25px 3px rgba(36, 174, 139, 0.45)' }}
          >
            <div className="w-full">
              <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">

                {/* First */}
                <Link href="/" onClick={() => setModalOpen(false)} className="w-full flex justify-center">
                  <img loading="lazy" src="/center_home_images/Group 242.png" className="w-full" />
                </Link>

                {/* Second */}
                <Link href="https://triz-apphigher-education.vercel.app/" className="w-full flex justify-center">
                  <img loading="lazy" src="/center_home_images/Group 243.png" className="w-full" />
                </Link>

                {/* Third */}
                <Link href="https://triz-corporate.vercel.app/" className="w-full flex justify-center">
                  <img loading="lazy" src="/center_home_images/Group 244.png" className="w-full" />
                </Link>

              </div>
            </div>
          </div>

        </div>
      )}
    </>
  );
}

export default ImageComponent;
