import * as React from "react";

const PricingCard = ({ title, price, recommended, bestValue, buttonColor, borderColor, features }) => {
  return (
    <div className={`flex flex-col font-inter rounded-xl w-[30%] max-md:w-full ${recommended ? 'bg-sky-500' : bestValue ? 'bg-green-600' : ''} p-2`}>
      <div
        className={`flex flex-col px-6 py-8 w-full text-sm font-bold text-black bg-white rounded-lg shadow-lg ${
          recommended ? 'mt-0' : bestValue ? 'mt-0' : 'mt-10'
        }`}
      >
        {recommended && <div className="self-center mb-4 text-white text-sm px-4 py-1 bg-sky-500 rounded">Recommended</div>}
        {bestValue && (
          <div className="self-center mb-4 text-white text-sm px-4 py-1 bg-green-600 rounded">
            Best Value
          </div>
        )}
        <div className="self-center text-lg">{title}</div>
        <div className="self-center mt-2 text-xl text-sky-950">
          <span className="text-sky-950">₹ {price}/</span>
          <span>User</span>
        </div>
        <div className="self-center mt-2 text-sm text-zinc-600">Per Month</div>
        <div className="self-center mt-2 text-xs text-zinc-600">(Includes 1000 Users)</div>
        <div className="my-4 w-full h-px border border-gray-300" />
        {features?.map((feature, index) => (
          <div key={index} className="flex gap-2 items-center mt-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6584c070b022da334e18774febceaeef0a5298e7feeb409d64c5e4c9276cf2da?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
              alt=""
              className="w-4 h-4"
            />
            <div className="text-sm">{feature}</div>
          </div>
        ))}
        <button
          className={`overflow-hidden px-6 py-2 mt-6 rounded-lg border-2 border-solid text-${buttonColor} border-${borderColor}`}
          tabIndex={0}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
