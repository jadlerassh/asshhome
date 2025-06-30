/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container7Icon(props) {
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
        fill={"currentColor"}
        d={
          "m12.988 7.2-3.79 8.06a1.32 1.32 0 0 1-1.196.74 1.31 1.31 0 0 1-1.187-.74L3.012 7.2a4.4 4.4 0 0 1-.343-1.863A5.336 5.336 0 0 1 7.994 0a5.336 5.336 0 0 1 5.337 5.325v.012a4.4 4.4 0 0 1-.343 1.863M8.002 2.67a2.666 2.666 0 1 0 0 5.334 2.663 2.663 0 0 0 2.667-2.667 2.67 2.67 0 0 0-2.667-2.666z"
        }
      ></path>
    </svg>
  );
}

export default Container7Icon;
/* prettier-ignore-end */
