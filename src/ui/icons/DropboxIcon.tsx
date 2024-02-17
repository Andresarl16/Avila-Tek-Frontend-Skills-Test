import React from "react";

const DropboxIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="2 2 52 52"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx="28" cy="28" r="24.5" fill="#0F287F" />
      <path
        fill="#DAF8FE"
        fillRule="evenodd"
        d="m19.25 14-8.75 5.25 8.75 5.25-8.75 5.25L19.25 35 28 29.75 36.75 35l8.75-5.25-8.75-5.25 8.75-5.25L36.75 14 28 19.25 19.25 14ZM28 19.25l8.75 5.25L28 29.75l-8.75-5.25L28 19.25Z"
        clipRule="evenodd"
      />
      <path
        fill="#DAF8FE"
        d="M19.25 38.5 28 33.25l8.75 5.25L28 43.75l-8.75-5.25Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width="62"
        height="62"
        x="-3"
        y="-2"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2601_308"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
        <feBlend
          in2="effect1_dropShadow_2601_308"
          result="effect2_dropShadow_2601_308"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_2601_308"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default DropboxIcon;
