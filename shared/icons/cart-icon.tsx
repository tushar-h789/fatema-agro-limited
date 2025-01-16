import * as React from "react";

const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 682.667 682.667"
    fill="none"
    className={props.className}
    {...props} // Spread the props here
  >
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M0 512h512V0H0Z" />
      </clipPath>
    </defs>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={30}
      clipPath="url(#a)"
      transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
    >
      <path
        d="M0 0h391l-60-210H60"
        transform="translate(106 406)"
      />
      <path
        d="M0 0c0-16.568-13.432-30-30-30-16.568 0-30 13.432-30 30 0 16.568 13.432 30 30 30C-13.432 30 0 16.568 0 0Z"
        transform="translate(256 76)"
      />
      <path
        d="M0 0c0-16.568-13.432-30-30-30-16.568 0-30 13.432-30 30 0 16.568 13.432 30 30 30C-13.432 30 0 16.568 0 0Z"
        transform="translate(407 76)"
      />
      <path
        d="M0 0h-252.459c-22.301 0-36.806 23.469-26.833 43.417L-271 60"
        transform="translate(437 136)"
      />
      <path
        d="M0 0h73.861C99.402-89.409 151-270 151-270"
        transform="translate(15 466)"
      />
    </g>
  </svg>
);

export default CartIcon;
