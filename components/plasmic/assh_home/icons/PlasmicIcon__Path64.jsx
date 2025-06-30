/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Path64Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 4"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M19.375 0H.625C.28 0 0 .299 0 .667v2.666C0 3.701.28 4 .625 4h18.75c.345 0 .625-.299.625-.667V.667C20 .299 19.72 0 19.375 0"
        }
      ></path>
    </svg>
  );
}

export default Path64Icon;
/* prettier-ignore-end */
