import React from "react";

const QuestionMarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#98A2B3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.333"
      d="M6.06 6a2 2 0 0 1 3.887.667c0 1.333-2 2-2 2M8 11.333h.007M14.667 8A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.334 0Z"
    />
  </svg>
);

export default QuestionMarIcon;
