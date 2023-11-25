import React from "react";

function Lines({ angle }) {
  let lines = [];
  for (let i = 0; i < 800; i++) {
    lines.push(
      <div
        key={i}
        style={{
          opacity: 0.2,
          transform: `rotate(${angle || 45}deg)`,
          height: 100,
        }}
        className="m-1 bg-sky-400 w-1 -z-5"
      ></div>
    );
  }
  return lines;
}

export default Lines;
