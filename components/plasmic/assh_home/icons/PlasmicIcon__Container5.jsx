/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container5Icon(props) {
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
          "M4.964 0v1.58H2.98c-.774 0-1.402.629-1.402 1.402v6.04c0 .773.628 1.402 1.402 1.402h6.04c.774 0 1.402-.629 1.402-1.403l-.003-.002V6.93H12v2.088A2.986 2.986 0 0 1 9.015 12H2.98A2.985 2.985 0 0 1-.001 9.019V2.982A2.99 2.99 0 0 1 2.98 0zm7.037 0v5.212h-1.579V2.697l-5.578 5.58-1.118-1.119L9.304 1.58H6.79V0z"
        }
      ></path>
    </svg>
  );
}

export default Container5Icon;
/* prettier-ignore-end */
