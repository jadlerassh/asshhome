/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m11.78 1.277-5.25 5.25a.736.736 0 0 1-1.04.016l-.017-.016-5.25-5.25A.75.75 0 0 1 0 .749C0 .337.337 0 .752 0h10.5A.75.75 0 0 1 12 .749a.75.75 0 0 1-.22.528"
        }
      ></path>
    </svg>
  );
}

export default ArrowIcon;
/* prettier-ignore-end */
