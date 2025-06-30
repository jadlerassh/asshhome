/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SimpleIconsXIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.75 2.961h3.067l-6.7 7.659L22 21.039h-6.172l-4.833-6.32-5.532 6.32H2.395l7.167-8.192L2 2.962h6.328l4.37 5.777L17.75 2.96zm-1.075 16.243h1.7L7.404 4.7H5.582l11.093 14.504z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SimpleIconsXIcon;
/* prettier-ignore-end */
