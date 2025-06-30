/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ChevronIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M3.805 4.92.076.902A.32.32 0 0 1 0 .7.4.4 0 0 1 .076.498l.4-.416A.25.25 0 0 1 .664 0 .21.21 0 0 1 .84.082l3.155 3.384L7.148.082a.26.26 0 0 1 .376 0l.4.429A.32.32 0 0 1 8 .713a.4.4 0 0 1-.076.201L4.183 4.92a.26.26 0 0 1-.376 0z"
        }
      ></path>
    </svg>
  );
}

export default ChevronIcon;
/* prettier-ignore-end */
