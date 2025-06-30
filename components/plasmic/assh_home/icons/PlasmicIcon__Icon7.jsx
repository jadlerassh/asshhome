/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      version={"1.1"}
      xmlns={"http://www.w3.org/2000/svg"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 122.88 122.88"}
      xmlSpace={"preserve"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.63 97.99l36.55-36.55L1.63 24.89c-2.17-2.17-2.17-5.73 0-7.9L16.99 1.63c2.17-2.17 5.73-2.17 7.9 0l36.55 36.55L97.99 1.63c2.17-2.17 5.73-2.17 7.9 0l15.36 15.36c2.17 2.17 2.17 5.73 0 7.9L84.7 61.44l36.55 36.55c2.17 2.17 2.17 5.73 0 7.9l-15.36 15.36c-2.17 2.17-5.73 2.17-7.9 0L61.44 84.7l-36.55 36.55c-2.17 2.17-5.73 2.17-7.9 0L1.63 105.89c-2.17-2.17-2.17-5.73 0-7.9z"
        }
        fillRule={"evenodd"}
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
