/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ChevronRightIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.642 8.33L5.71 14.261a.732.732 0 01-1.036 0l-.692-.691a.732.732 0 010-1.035l4.7-4.723-4.7-4.722a.732.732 0 010-1.035l.692-.691a.732.732 0 011.036 0l5.93 5.93a.732.732 0 010 1.036z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronRightIcon;
/* prettier-ignore-end */
