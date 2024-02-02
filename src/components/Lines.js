import React from "react";

function Lines({ angle }) {
  let lines = [];
  // We used to have 2,000 lines here till I noticed the impact on performance and
  // decided to reduce them to 0
  // Might remove this component completely or replace it with a more ligher and fancier background
  for (let i = 0; i < 0; i++) {
    lines.push(
      <div
        key={i}
        style={{
          opacity: 0.2,
          transform: `rotate(${angle || 45}deg)`,
          height: 10,
          width: 2,
        }}
        className="m-1 bg-sky-400 -z-5"
      ></div>
    );
  }
  return lines;
}

export default Lines;
