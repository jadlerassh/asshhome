/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CalendarIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M4.75 2h4.5V.75a.75.75 0 1 1 1.5 0V2H12a2 2 0 0 1 2 2v10c0 1.103-.897 2-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1.25V.75a.75.75 0 1 1 1.5 0zM1.5 14a.5.5 0 0 0 .5.5h10c.275 0 .5-.225.5-.5V6h-11z"
        }
      ></path>
    </svg>
  );
}

export default CalendarIcon;
/* prettier-ignore-end */
