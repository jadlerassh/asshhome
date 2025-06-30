/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group22Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 230 432"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M71.795 27.685c7.098-7.9 13.471-2.681 9.27 4.42-44.614 75.293-33.17 186.602-33.17 186.602-29.116-48.915-12.675-150.586 23.9-191.022m81.189 198.124c-45.121-65.438-17.744-170.08 45.411-208.198 8.619-5.217 16.296-1.087 10.212 5.58-36.792 40.437-79.089 113.266-42.948 165.515 4.925 4.565 8.473 8.261 8.473 8.261l5.65 6.087c16.223-15.001 12.747-62.829 50.191-47.828-26.436 23.479-17.093 74.351-29.115 108.338-1.739 9.783-19.483 43.553-19.483 43.553s-3.766-33.915-17.672-60.438c-3.983-7.609-7.532-14.566-10.574-20.87z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M172.975 430.745C78.676 443.789-30.542 295.884 7.915 129.355c4.057-17.537 11.589-17.682 9.996-1.015-14.34 154.5 44.397 252.837 154.992 302.405zM91.422 174.502C61.8 130.008 85.845 26.815 146.466 1.089c8.618-3.623 15.789 2.536 10.139 7.609-42.224 38.335-64.676 109.497-65.256 165.804z"
        }
      ></path>
    </svg>
  );
}

export default Group22Icon;
/* prettier-ignore-end */
