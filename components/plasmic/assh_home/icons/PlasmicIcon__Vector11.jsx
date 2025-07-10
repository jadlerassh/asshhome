/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector11Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M18.182 0H1.818C.814 0 0 .796 0 1.778v10.666c0 .983.814 1.778 1.818 1.778h4.546V16h7.272v-1.778h4.546c1.004 0 1.809-.795 1.809-1.778L20 1.778C20 .796 19.186 0 18.182 0m0 12.444H1.818V1.778h16.364z"
        }
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
