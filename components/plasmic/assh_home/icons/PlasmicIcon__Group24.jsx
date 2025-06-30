/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group24Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 401 313"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M262.546 130.498c53.306-3.406 130.657 68.988 122.546 134.426-1.159 9.348-10.068 12.464-11.661 5C361.336 214.125 311 159.122 262.546 130.498M0 73.032c35.923-88.265 218.51-108.845 343.372 7.681 13.182 12.32 9.561 18.914-4.128 9.204C212.643.275 98.21 2.014 0 73.032m187.368 85.149c79.234-6.377 156.078 69.64 157.527 143.412.217 10-7.17 14.638-9.923 6.014-16.585-52.103-58.448-125.15-121.748-119.932-6.446 1.956-11.371 3.188-11.371 3.188l-8.112 1.812c4.853 21.523 48.019 42.465 16.296 67.394-7.17-34.639-55.84-51.959-79.234-79.424-7.605-6.377-27.956-38.697-27.956-38.697s31.215 13.696 61.127 14.928c8.619.363 16.369.797 23.321 1.232z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M399.43 186.877c3.259 10.073-4.418 13.044-8.402 5.797C348.152 116.367 246.031 70.64 246.031 70.64c56.927-.797 136.668 64.278 153.399 116.237"
        }
      ></path>
    </svg>
  );
}

export default Group24Icon;
/* prettier-ignore-end */
