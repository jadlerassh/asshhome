/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.198 18.318c2.786 0 4.746-1.122 6.395-2.827l1.883 1.665c-2.04 2.246-4.511 3.757-8.355 3.757C4.55 20.913 0 16.693 0 10.456 0 4.646 4.119 0 9.727 0c6.002 0 9.453 4.724 9.453 10.61 0 .271 0 .58-.038 1.046H3.058c.433 4.22 3.57 6.66 7.14 6.66v.002zm5.922-9.061c-.354-3.64-2.472-6.738-6.472-6.738-3.49 0-6.159 2.865-6.59 6.738h13.063z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
