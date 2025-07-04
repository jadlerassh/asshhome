/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
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
        d={
          "M5.928 4.284c.768.036.966.69.978.996H7.98c-.048-1.188-.894-1.914-2.07-1.914-1.326 0-2.31.834-2.31 2.718 0 1.164.558 2.544 2.304 2.544 1.332 0 2.046-.99 2.064-1.77H6.894c-.018.354-.27.828-.978.864C5.13 7.698 4.8 7.086 4.8 6.084c0-1.734.768-1.788 1.128-1.8zM6 0C2.688 0 0 2.688 0 6s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6zm0 10.8A4.806 4.806 0 011.2 6c0-2.646 2.154-4.8 4.8-4.8s4.8 2.154 4.8 4.8-2.154 4.8-4.8 4.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
