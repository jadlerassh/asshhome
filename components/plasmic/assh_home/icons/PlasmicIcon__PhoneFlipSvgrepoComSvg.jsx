/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PhoneFlipSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21 5.5C21 14.06 14.06 21 5.5 21a15.7 15.7 0 01-1.148-.042c-.435-.032-.653-.048-.851-.162a1.06 1.06 0 01-.402-.432C3 20.158 3 19.918 3 19.438v-2.817c0-.404 0-.606.066-.779a1 1 0 01.278-.396c.14-.122.33-.191.71-.329l3.206-1.166c.442-.16.662-.24.872-.227a1 1 0 01.513.182c.171.121.292.322.534.725L10 16a12.1 12.1 0 006-6l-1.369-.821c-.402-.242-.604-.363-.725-.534a1 1 0 01-.182-.513c-.014-.21.066-.43.227-.872h0l1.166-3.207c.138-.38.207-.569.329-.709a1 1 0 01.396-.278C16.015 3 16.217 3 16.621 3h2.817c.48 0 .72 0 .926.1.17.081.338.237.432.401.114.198.13.416.162.85.028.38.042.763.042 1.149z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PhoneFlipSvgrepoComSvgIcon;
/* prettier-ignore-end */
