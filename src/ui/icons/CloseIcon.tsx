import React from "react";

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#344054"
      stroke-linecap="round"
      stroke-width="2"
      d="m1.636 1.636 12.728 12.728m-12.728 0L14.364 1.636"
    />
  </svg>
);

export default CloseIcon;
