/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FacebookIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M16.86 12.007h-3.18V24H8.968V12.007H6.725V7.773h2.242V5.029C8.967 3.065 9.85 0 13.725 0l3.49.014v4.113h-2.534c-.414 0-1 .218-1 1.152v2.495h3.594l-.414 4.233z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default FacebookIcon;
/* prettier-ignore-end */
