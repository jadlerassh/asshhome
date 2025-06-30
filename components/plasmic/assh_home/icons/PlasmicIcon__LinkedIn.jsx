/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LinkedInIcon(props) {
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
          "M6.44 22H2V8.001h4.44zM4.22 6.002c-1.16.05-2.15-.84-2.22-2a2.13 2.13 0 0 1 2.22-2c1.16-.05 2.15.84 2.22 2a2.13 2.13 0 0 1-2.22 2M22 22h-4.44v-8a2.13 2.13 0 0 0-2.22-1.999c-1.16-.05-2.15.84-2.22 2V22H8.65V8.001h4.44v2.47c.905-1.125 2.31-2.47 3.875-2.47 2.76.01 4.99 2.24 5 5V22z"
        }
      ></path>
    </svg>
  );
}

export default LinkedInIcon;
/* prettier-ignore-end */
