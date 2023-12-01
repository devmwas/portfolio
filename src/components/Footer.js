import { Copyright } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

function Footer({ setIsMessageOpen }) {
  return (
    <div
      className="bg-sky-600 text-center text-xl flex justify-between p-2"
      style={{ height: "90px" }}
    >
      <div className="flex flex-col justify-center">
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
        <div className="text-xs md:text-xl md:hidden">
          Copyright <Copyright fontSize="small" /> Devmwas 2023
        </div>
        <div className="text-sm md:text-xl hidden md:block">
          Copyright <Copyright /> Devmwas 2023
        </div>
      </div>
    </div>
  );
}

export default Footer;
