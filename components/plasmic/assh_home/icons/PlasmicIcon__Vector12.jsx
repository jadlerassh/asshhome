/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M14 6.955C14 3.102 10.877 0 7 0S0 3.102 0 6.955C0 10.807 7 18 7 18s7-7.193 7-11.045M3.74 6.818C3.74 5.045 5.216 3.58 7 3.58s3.26 1.431 3.26 3.238A3.25 3.25 0 0 1 7 10.057c-1.784 0-3.26-1.466-3.26-3.239"
        }
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
