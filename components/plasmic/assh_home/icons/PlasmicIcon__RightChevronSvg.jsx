/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function RightChevronSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M24.218 15.731 9.75 29.715a1.1 1.1 0 0 1-.727.285 1.36 1.36 0 0 1-.726-.285l-1.5-1.5a.95.95 0 0 1-.293-.704.82.82 0 0 1 .294-.66l12.188-11.832L6.79 3.194a1 1 0 0 1 0-1.41l1.546-1.5A1.1 1.1 0 0 1 9.062 0c.263.022.518.12.727.285L24.21 14.314a1 1 0 0 1 0 1.41z"
        }
      ></path>
    </svg>
  );
}

export default RightChevronSvgIcon;
/* prettier-ignore-end */
