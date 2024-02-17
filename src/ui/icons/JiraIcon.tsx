import React from "react";

const JiraIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <path
      fill="#2684FF"
      d="m48.913 23.629-21.8-21.085L25 .5 8.59 16.372l-7.503 7.257a1.896 1.896 0 0 0 0 2.742l14.992 14.501L25 49.5l16.41-15.872.254-.246 7.25-7.01a1.896 1.896 0 0 0 0-2.743ZM25 32.244 17.51 25 25 17.756 32.49 25 25 32.244Z"
    />
    <path
      fill="url(#a)"
      fill-rule="evenodd"
      d="M25 17.756C20.096 13.013 20.073 5.33 24.947.558L8.557 16.404l8.92 8.628L25 17.756Z"
      clip-rule="evenodd"
    />
    <path
      fill="url(#b)"
      fill-rule="evenodd"
      d="M32.51 24.98 25 32.245c2.367 2.288 3.697 5.392 3.697 8.628 0 3.236-1.33 6.34-3.697 8.628L41.43 33.61l-8.92-8.628Z"
      clip-rule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1="23.663"
        x2="11.169"
        y1="10.428"
        y2="15.883"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".18" stop-color="#0052CC" />
        <stop offset="1" stop-color="#2684FF" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="26.431"
        x2="38.902"
        y1="39.488"
        y2="34.072"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".18" stop-color="#0052CC" />
        <stop offset="1" stop-color="#2684FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default JiraIcon;
