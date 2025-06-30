/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PresentationIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M9.87 29.98c0-.45-.37-.81-.81-.81H7.44c-.45 0-.81.37-.81.81v1.56c0 .45.37.81.81.81h1.62c.45 0 .81-.37.81-.81zm0-7.62c0-.45-.37-.81-.81-.81H7.44c-.45 0-.81.37-.81.81v1.56c0 .45.37.81.81.81h1.62c.45 0 .81-.37.81-.81zm0-7.62c0-.45-.37-.81-.81-.81H7.44c-.45 0-.81.37-.81.81v1.56c0 .45.37.81.81.81h1.62c.45 0 .81-.37.81-.81zm23.56 15.25c0-.45-.37-.81-.81-.81H14c-.45 0-.81.37-.81.81v1.56c0 .45.37.81.81.81h18.62c.45 0 .81-.37.81-.81zm0-7.62c0-.45-.37-.81-.81-.81H14c-.45 0-.81.37-.81.81v1.56c0 .45.37.8.81.81h18.62c.45 0 .81-.37.81-.81zm0-7.62c0-.45-.37-.81-.81-.81H14c-.45 0-.81.37-.81.81v1.56c0 .45.37.81.81.81h18.62c.45 0 .81-.37.81-.81zM36.68 36c0 .45-.37.8-.81.81H4.12a.82.82 0 0 1-.81-.81V10.31c0-.45.37-.8.81-.81h31.75c.45 0 .81.37.81.81zm3.31-32a4.103 4.103 0 0 0-4.12-4H4.12A4.096 4.096 0 0 0 0 4v32.06A4.09 4.09 0 0 0 4.12 40h31.75c2.24.01 4.07-1.77 4.12-4z"
        }
      ></path>
    </svg>
  );
}

export default PresentationIcon;
/* prettier-ignore-end */
