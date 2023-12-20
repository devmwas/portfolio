import React from "react";

function TechStack() {
  return (
    <div
      style={{ marginTop: "54px" }}
      className="flex flex-wrap justify-end space-x-2"
    >
      <div className="flex space-x-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
        <img alt="JavaScript Logo" src="js_logo.png" />
      </div>
      <div className="flex space-x-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
        <img alt="React Logo" src="logo192.png" title="Rect" />
      </div>
      <div className="flex space-x-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
        <img alt="Redux Logo" src="redux_logo.png" />
      </div>
      <div className="flex space-x-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
        <img alt="TailwindCSS Logo" src="tailwind_logo.png" />
      </div>
      <div className="flex space-x-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
        <img alt="Material Logo" src="mui_logo.png" />
      </div>
    </div>
  );
}

export default TechStack;
