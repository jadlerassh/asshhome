/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VideoPlayButtonSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M482.703 98.813C456.469 77.625 363.953 61 256 61S55.531 77.625 29.297 98.813C5.188 118.25 0 206.125 0 256s5.188 137.75 29.297 157.188C55.531 434.375 148.047 451 256 451s200.469-16.625 226.703-37.813C506.813 393.75 512 305.875 512 256s-5.187-137.75-29.297-157.187zm-149.89 159.593l-118.844 70.938c-.875.5-1.938.531-2.813.031s-1.422-1.438-1.422-2.438V185.062c0-1.016.547-1.938 1.422-2.438s1.938-.469 2.813.031l118.844 70.938a2.779 2.779 0 011.359 2.406 2.82 2.82 0 01-1.359 2.407z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VideoPlayButtonSvgrepoComSvgIcon;
/* prettier-ignore-end */
