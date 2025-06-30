/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M20.702 9.605c.181-.82.37-1.74.57-2.772C21.936 3.385 24.087 0 24.087 0s-4.147 1.807-5.023 2.575c-3.627 2.242-6.509 7.584-10.697 7.816 2.408 4.164 5.676-.68 8.31-.736C18.206 18.68 7.657 22.918.612 24.05c-1.063.17-.648 1.108.53 1.257 8.653 1.1 18.868-6.45 19.558-15.7l.002-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
