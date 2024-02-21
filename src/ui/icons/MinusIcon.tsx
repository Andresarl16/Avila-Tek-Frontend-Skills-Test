import React from "react";

const MinusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 22"
    {...props}
  >
    <path
      stroke="#98A2B3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 11h8m6 0c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10Z"
    />
  </svg>
);

export default MinusIcon;
