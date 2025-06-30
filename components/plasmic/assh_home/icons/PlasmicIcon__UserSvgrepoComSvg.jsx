/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UserSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 7a3 3 0 100-6 3 3 0 000 6zm6 5a3 3 0 00-3-3H5a3 3 0 00-3 3v3h12v-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UserSvgrepoComSvgIcon;
/* prettier-ignore-end */
