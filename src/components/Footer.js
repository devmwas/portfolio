import { Copyright } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

function Footer({ setIsMessageOpen }) {
  return (
    <div
      className="bg-sky-600 text-center text-xl flex justify-between p-2"
      style={{ height: "90px" }}
    >
      {/* We will include the same elements multiple times and only show them at the intended breakpoints  */}
      {/* This will only show on large devices and above */}
      <div className="lg:flex flex-col justify-center hidden">
        <Button
          variant="contained"
          color="success"
          size="medium"
          onClick={() => setIsMessageOpen(true)}
        >
          Let's Talk
        </Button>
      </div>

      {/* This will only show on medium-sized devices and lower */}
      <div className="flex flex-col justify-center lg:hidden">
        <Button
          variant="contained"
          color="success"
          size="small"
          onClick={() => setIsMessageOpen(true)}
        >
          Let's Talk
        </Button>
      </div>

      <div className="flex flex-col justify-center">
        {/* This will only show on large devices and above */}
        <div
          className="hidden lg:block"
          style={{
            fontSize: "18px",
            lineHeight: "27px",
            letterSpacing: "3px",
            wordSpacing: "6px",
          }}
        >
          Copyright <Copyright fontSize="medium" /> Devmwas 2023
        </div>

        {/* This will only show on small and medium-sized devices */}
        <div
          className="hidden sm:block lg:hidden"
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "2px",
            wordSpacing: "4px",
          }}
        >
          Copyright <Copyright fontSize="medium" /> Devmwas 2023
        </div>

        {/* This will only show on mobile phones and smaller devices */}
        <div
          className="sm:hidden"
          style={{
            fontSize: "14px",
            lineHeight: "21px",
            letterSpacing: "1px",
            wordSpacing: "2px",
          }}
        >
          Copyright <Copyright fontSize="small" /> Devmwas 2023
        </div>
      </div>
    </div>
  );
}

export default Footer;
