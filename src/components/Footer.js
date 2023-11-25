import { Copyright } from "@mui/icons-material";
import React from "react";

function Footer() {
  return (
    <div
      className="bg-slate-400 text-center text-xl flex flex-col justify-center"
      style={{ height: "50px" }}
    >
      <div>
        Copyright <Copyright /> Devmwas 2023
      </div>
    </div>
  );
}

export default Footer;
