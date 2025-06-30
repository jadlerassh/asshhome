/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container6Icon(props) {
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
          "M15.996 1.166h-2.564V.998c0-.552-.45-1-1.006-1s-1.007.448-1.007 1v.172H4.577v-.168c0-.552-.451-1-1.007-1s-1.006.448-1.006 1v.172H0v14.828h16V3zm-1.497 5.728v7.607h-13V4.5h13z"
        }
      ></path>
    </svg>
  );
}

export default Container6Icon;
/* prettier-ignore-end */
