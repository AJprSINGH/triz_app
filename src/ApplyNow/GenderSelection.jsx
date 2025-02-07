import React from "react";

function GenderSelection() {
  return (
    <div className="flex flex-col items-start mt-32 max-w-full w-[353px]">
      <fieldset>
        <legend className=" max-md:ml-2.5 text-xl">Select Gender</legend>
        <div className="flex gap-5 justify-between mt-4 w-full text-xl whitespace-nowrap">
          <div className="flex gap-8">
            <label htmlFor="male" className="my-auto">
              Male
            </label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              className="flex shrink-0 w-6 h-6 rounded-full border-black border-solid border-[3px]"
            />
          </div>
          <div className="flex gap-8">
            <label htmlFor="female" className="my-auto">
              Female
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              className="flex shrink-0 w-6 h-6 rounded-full border-black border-solid border-[3px]"
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default GenderSelection;
