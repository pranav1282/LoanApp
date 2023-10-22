import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-veryDarkBlue p-6 space-y-4">
        {/* Logo */}
        <div className="my-auto flex justify-center">
          <h1 className="text-4xl text-white font-semibold ">
            Quick<span className="text-brightRed">Loan</span>
          </h1>
        </div>

        {/* Copywrite */}
        <div className="flex justify-center">
          <p className="text-xs text-white">
            {" "}
            Copyright &copy; 2023, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
