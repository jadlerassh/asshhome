/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M9.425 0H0v21.874h3.835V14.9h5.59c4.146 0 7.509-3.337 7.509-7.45 0-4.114-3.363-7.45-7.51-7.45zm0 11.157h-5.59V3.744h5.59c2.06 0 3.735 1.661 3.735 3.706s-1.674 3.707-3.735 3.707"
        }
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
