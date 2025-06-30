/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Plus2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M19.375 8.125h-7.5v-7.5A.625.625 0 0 0 11.25 0h-2.5a.625.625 0 0 0-.625.625v7.5h-7.5A.625.625 0 0 0 0 8.75v2.5c0 .345.28.625.625.625h7.5v7.5c0 .345.28.625.625.625h2.5c.345 0 .625-.28.625-.625v-7.5h7.5c.345 0 .625-.28.625-.625v-2.5a.625.625 0 0 0-.625-.625"
        }
      ></path>
    </svg>
  );
}

export default Plus2Icon;
/* prettier-ignore-end */
