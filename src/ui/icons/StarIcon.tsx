import React from "react";

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clip-path="url(#a)">
      <path
        fill="#F2F4F7"
        d="M9.538 1.61a.5.5 0 0 1 .924 0l2.066 4.967a.5.5 0 0 0 .421.307l5.363.43a.5.5 0 0 1 .286.878l-4.086 3.5a.5.5 0 0 0-.161.496l1.248 5.233a.5.5 0 0 1-.747.543l-4.591-2.805a.5.5 0 0 0-.522 0l-4.59 2.804a.5.5 0 0 1-.748-.542l1.248-5.233a.5.5 0 0 0-.16-.496l-4.087-3.5a.5.5 0 0 1 .286-.878l5.363-.43a.5.5 0 0 0 .421-.307L9.538 1.61Z"
      />
      <g clip-path="url(#b)">
        <path
          fill="#FDB022"
          d="M9.538 1.61a.5.5 0 0 1 .924 0l2.066 4.967a.5.5 0 0 0 .421.307l5.363.43a.5.5 0 0 1 .286.878l-4.086 3.5a.5.5 0 0 0-.161.496l1.248 5.233a.5.5 0 0 1-.747.543l-4.591-2.805a.5.5 0 0 0-.522 0l-4.59 2.804a.5.5 0 0 1-.748-.542l1.248-5.233a.5.5 0 0 0-.16-.496l-4.087-3.5a.5.5 0 0 1 .286-.878l5.363-.43a.5.5 0 0 0 .421-.307L9.538 1.61Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default StarIcon;
