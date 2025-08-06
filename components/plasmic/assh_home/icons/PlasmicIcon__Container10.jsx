/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container10Icon(props) {
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
          "M16 12.904v1.048C16 14.53 15.216 15 14.256 15H1.744C.784 15 0 14.53 0 13.952v-1.048zM.336 10.454V2.75c0-.964.78-1.747 1.743-1.751h11.85c.96 0 1.74.783 1.743 1.751v7.699a1.75 1.75 0 0 1-1.744 1.75H2.08a1.75 1.75 0 0 1-1.743-1.746zm1.396 0c.008.189.16.345.347.35h11.85a.363.363 0 0 0 .347-.35V2.75a.357.357 0 0 0-.348-.35H2.08a.36.36 0 0 0-.347.35v7.703zm7.318 3.325a.176.176 0 0 0-.168-.177H7.134a.177.177 0 0 0-.184.165.177.177 0 0 0 .164.185h1.76a.174.174 0 0 0 .176-.169z"
        }
      ></path>
    </svg>
  );
}

export default Container10Icon;
/* prettier-ignore-end */
