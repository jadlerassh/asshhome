/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HamburgerSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -1 20 20"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19 8H1a1 1 0 000 2h18a1 1 0 100-2zm0 8H1a1 1 0 000 2h18a1 1 0 100-2zM1 2h18a1 1 0 100-2H1a1 1 0 000 2z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default HamburgerSvgrepoComSvgIcon;
/* prettier-ignore-end */
