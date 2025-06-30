/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group28Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M26.854 13.348c5.452-.349 13.364 7.056 12.534 13.749-.119.956-1.03 1.275-1.193.511-1.237-5.707-6.386-11.333-11.341-14.26M0 7.47c3.674-9.028 22.35-11.133 35.12.786 1.35 1.26.979 1.934-.421.94C21.749.029 10.045.207 0 7.47m19.164 8.71c8.104-.653 15.964 7.123 16.112 14.668.023 1.023-.733 1.497-1.015.615-1.696-5.329-5.978-12.8-12.452-12.267-.66.2-1.163.326-1.163.326l-.83.186c.497 2.201 4.912 4.343 1.667 6.893-.733-3.543-5.712-5.314-8.104-8.124-.778-.652-2.86-3.958-2.86-3.958s3.193 1.401 6.252 1.527c.882.037 1.675.082 2.386.126z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M40.855 19.114c.333 1.03-.452 1.334-.86.593-4.385-7.805-14.83-12.482-14.83-12.482 5.822-.081 13.978 6.575 15.69 11.89z"
        }
      ></path>
    </svg>
  );
}

export default Group28Icon;
/* prettier-ignore-end */
