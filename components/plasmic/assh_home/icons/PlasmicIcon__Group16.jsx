/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group16Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M16.692 16.943c-2.016 4.082-10.649 6.707-15.12 3.323-.635-.482-.487-1.273.13-1.075 4.625 1.482 10.822.111 14.996-2.248zM32.102 0c4.976 6.411-1.277 20.778-15.188 25.034-1.467.45-1.8-.099-.5-.698C28.409 18.808 33.157 10.278 32.103 0zM17.851 10.21C14.953 16.331 6.074 18.765.574 15.732c-.746-.414-.777-1.155-.019-.988 4.545.994 11.71 1.013 14.022-3.88.13-.561.253-.975.253-.975l.21-.673c-1.795-.556-5.174 1.735-5.661-1.668 2.855.951 6.21-1.909 9.225-2.47.789-.291 4.039-.415 4.039-.415s-2.337 1.724-3.7 3.88c-.395.623-.752 1.18-1.085 1.673z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M6.709 24.651c-.882-.192-.77-.877-.068-.87 7.449.086 15.163-5.504 15.163-5.504-2.368 4.237-10.557 7.35-15.095 6.374"
        }
      ></path>
    </svg>
  );
}

export default Group16Icon;
/* prettier-ignore-end */
