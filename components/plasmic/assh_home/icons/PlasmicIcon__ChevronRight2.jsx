/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ChevronRight2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m8.855 8.39-7.232 7.458A.54.54 0 0 1 1.26 16a.66.66 0 0 1-.363-.152l-.75-.8A.52.52 0 0 1 0 14.672a.45.45 0 0 1 .147-.352L6.24 8.01.147 1.704a.56.56 0 0 1 0-.752l.773-.8A.54.54 0 0 1 1.283 0a.66.66 0 0 1 .363.152l7.21 7.482a.56.56 0 0 1 0 .752z"
        }
      ></path>
    </svg>
  );
}

export default ChevronRight2Icon;
/* prettier-ignore-end */
