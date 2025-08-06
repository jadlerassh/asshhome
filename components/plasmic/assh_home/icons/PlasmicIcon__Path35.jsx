/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Path35Icon(props) {
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
          "M18.463 19.998c-.405 0-.795-.165-1.08-.455l-4.126-4.111a8.47 8.47 0 0 1-11.768-2.175A8.47 8.47 0 0 1 3.664 1.489a8.47 8.47 0 0 1 11.768 2.175 8.47 8.47 0 0 1 0 9.592l4.121 4.122a1.538 1.538 0 0 1-1.09 2.62M8.46 3.07a5.385 5.385 0 0 0-5.386 5.386 5.385 5.385 0 0 0 5.386 5.387 5.385 5.385 0 1 0 0-10.773"
        }
      ></path>
    </svg>
  );
}

export default Path35Icon;
/* prettier-ignore-end */
