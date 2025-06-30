/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function XIcon(props) {
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
        d={
          "M14.255 10.182 23.2 0h-2.11l-7.78 8.8L7.126 0H0l9.382 13.382L0 24h2.11l8.217-9.31L16.873 24H24zM2.909 1.527h3.273L21.09 22.546h-3.273L2.91 1.527z"
        }
      ></path>
    </svg>
  );
}

export default XIcon;
/* prettier-ignore-end */
