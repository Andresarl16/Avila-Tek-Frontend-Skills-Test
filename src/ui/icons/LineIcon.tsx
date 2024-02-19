import React from "react";

const LineIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 2"
    {...props}
  >
    <path
      stroke="#344054"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M1 1h18M1"
    />
  </svg>
);

export default LineIcon;
