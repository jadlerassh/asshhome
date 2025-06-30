/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m6.887 13.292-5.625 5.594A.43.43 0 0 1 .98 19a.5.5 0 0 1-.283-.114l-.583-.6A.38.38 0 0 1 0 18.004a.33.33 0 0 1 .114-.264l4.739-4.732-4.739-4.73a.41.41 0 0 1 0-.564l.601-.6A.43.43 0 0 1 .998 7a.5.5 0 0 1 .282.114l5.607 5.612c.15.158.15.404 0 .563z"
        }
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
