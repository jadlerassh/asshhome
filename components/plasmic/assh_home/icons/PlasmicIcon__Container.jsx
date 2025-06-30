/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ContainerIcon(props) {
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
          "M2.621 5.709 8.234.114A.42.42 0 0 1 8.516 0a.5.5 0 0 1 .282.114l.582.6a.4.4 0 0 1 .114.282.33.33 0 0 1-.114.264L4.65 5.994l4.73 4.731c.15.156.15.405 0 .561l-.6.6a.42.42 0 0 1-.282.114.5.5 0 0 1-.282-.114L2.618 6.273a.41.41 0 0 1 0-.564z"
        }
      ></path>
    </svg>
  );
}

export default ContainerIcon;
/* prettier-ignore-end */
