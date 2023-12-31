import { Skeleton } from "@mui/material";
import React from "react";

function Fallback({ width, height }) {
  return (
    <Skeleton
      //   animation={false}
      variant="rectangular"
      width={width}
      height={height}
      sx={{ bgcolor: "darkBlue" }}
    />
  );
}

export default Fallback;
