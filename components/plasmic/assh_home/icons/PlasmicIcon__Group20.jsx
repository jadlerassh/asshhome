/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group20Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 233 174"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M114.932 116.524c-13.883 28.08-73.322 46.134-104.103 22.855-4.374-3.313-3.355-8.751.891-7.392 31.843 10.196 74.512.765 103.255-15.463zM221.031 0c34.263 44.095-8.789 142.905-104.571 172.174-10.105 3.101-12.397-.68-3.439-4.8C195.599 129.354 228.291 70.688 221.031 0m-98.118 70.22c-19.954 42.1-81.092 58.836-118.963 37.978-5.138-2.846-5.35-7.944-.128-6.797 31.29 6.84 80.626 6.967 96.547-26.678a121 121 0 0 1 1.741-6.712l1.443-4.63c-12.355-3.823-35.621 11.937-38.975-11.47 19.657 6.542 42.754-13.126 63.515-16.992 5.435-1.997 27.809-2.846 27.809-2.846s-16.091 11.852-25.474 26.678c-2.717 4.29-5.18 8.113-7.472 11.512z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M46.194 169.54c-6.071-1.317-5.307-6.032-.467-5.99 51.288.595 104.401-37.85 104.401-37.85-16.303 29.142-72.686 50.552-103.934 43.84"
        }
      ></path>
    </svg>
  );
}

export default Group20Icon;
/* prettier-ignore-end */
