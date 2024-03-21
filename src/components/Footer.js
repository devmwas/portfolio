import { Copyright } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import DelayAnimation from "./animations/DelayAnimation";

function Footer({ setIsMessageOpen }) {
  return (
    <div
      className="bg-sky-600 text-center text-xl flex justify-between p-2"
      style={{ height: "90px" }}
    >
      <DelayAnimation delay={0}>
        <div className="flex flex-col h-full left-0 justify-center">
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() => setIsMessageOpen(true)}
          >
            Let's Talk
          </Button>
        </div>
      </DelayAnimation>

      {/* This will only show on small and medium-sized devices */}
      <DelayAnimation delay={0.5}>
        <div className="h-full flex flex-col justify-center">
          <div
            style={{
              fontSize: "14px",
              lineHeight: "21px",
              letterSpacing: "1px",
              wordSpacing: "2px",
            }}
          >
            Copyright <Copyright fontSize="small" /> Devmwas{" "}
            {new Date().getFullYear()}
          </div>
        </div>
      </DelayAnimation>
    </div>
  );
}

export default Footer;
