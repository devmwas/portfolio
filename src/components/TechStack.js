import { Tooltip } from "@mui/material";
import React from "react";

function TechStack() {
  return (
    <div
      style={{ marginTop: "8px" }}
      className="flex flex-wrap justify-end space-x-2"
    >
      {/* Javascript Logo */}
      <Tooltip title="JavaScript" arrow>
        <div className="flex space-x-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 cursor-pointer">
          <img alt="JavaScript Logo" src="js_logo.png" />
        </div>
      </Tooltip>

      {/* React Logo */}
      <Tooltip title="React" arrow>
        <div className="flex space-x-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 cursor-pointer">
          <img alt="React Logo" src="logo192.png" title="Rect" />
        </div>
      </Tooltip>

      {/* Firebase Logo */}
      <Tooltip title="Firebase" arrow>
        <div className="flex space-x-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 cursor-pointer">
          <img alt="Firebase Logo" src="firebase_logo.png" />
        </div>
      </Tooltip>

      {/* Express JS Logo */}
      <Tooltip title="Express JS" arrow>
        <div className="flex space-x-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 cursor-pointer">
          <img alt="Express JS Logo" src="express_logo.png" />
        </div>
      </Tooltip>

      {/* Redux Logo */}
      <Tooltip title="Redux" arrow>
        <div className="flex space-x-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 cursor-pointer">
          <img alt="Redux Logo" src="redux_logo.png" />
        </div>
      </Tooltip>

      {/* Tailwind Logo */}
      <Tooltip title="Tailwind CSS" arrow>
        <div className="flex space-x-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 cursor-pointer">
          <img alt="TailwindCSS Logo" src="tailwind_logo.png" />
        </div>
      </Tooltip>

      {/* Material Ui Logo */}
      <Tooltip title="Material UI" arrow>
        <div className="flex space-x-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 cursor-pointer">
          <img alt="Material Logo" src="mui_logo.png" />
        </div>
      </Tooltip>
    </div>
  );
}

export default TechStack;
