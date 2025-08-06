/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M.116 5.709 5.729.114A.42.42 0 0 1 6.01 0a.5.5 0 0 1 .282.114l.582.6a.4.4 0 0 1 .114.282.33.33 0 0 1-.114.264l-4.73 4.734 4.73 4.731c.15.156.15.405 0 .561l-.6.6a.42.42 0 0 1-.282.114.5.5 0 0 1-.282-.114L.112 6.273a.41.41 0 0 1 0-.564z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M5.115 5.709 10.728.114A.42.42 0 0 1 11.01 0a.5.5 0 0 1 .282.114l.582.6a.4.4 0 0 1 .114.282.33.33 0 0 1-.114.264L7.143 5.994l4.731 4.731c.15.156.15.405 0 .561l-.6.6a.42.42 0 0 1-.282.114.5.5 0 0 1-.282-.114L5.112 6.273a.41.41 0 0 1 0-.564z"
        }
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
