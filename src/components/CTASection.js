import React from "react";

const CTASection = () => {
  return (
    <div className="bg-brightRed p-10">
      <div className="grid md:grid-cols-2 space-y-10 py-6 md:align-middle">
        <div className="text-white text-3xl font-bold">
          Streamlined application process, get approved in minutes, not days.
        </div>

        <div className="flex justify-center md:justify-end">
          <button className="bg-white px-4 p-3 rounded-full text-brightRed hover:bg-veryDarkBlue">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
