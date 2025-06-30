/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container4Icon(props) {
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
          "M5.709 9.379.114 3.766A.42.42 0 0 1 0 3.484a.5.5 0 0 1 .114-.282l.6-.582a.4.4 0 0 1 .282-.114.33.33 0 0 1 .264.114l4.734 4.73 4.731-4.73a.406.406 0 0 1 .561 0l.6.6a.42.42 0 0 1 .114.282.5.5 0 0 1-.114.282L6.273 9.382a.41.41 0 0 1-.564 0z"
        }
      ></path>
    </svg>
  );
}

export default Container4Icon;
/* prettier-ignore-end */
