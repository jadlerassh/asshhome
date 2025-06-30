/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container3Icon(props) {
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
        fill={"currentColor"}
        d={
          "M22.155 23.999c-.486 0-.954-.198-1.296-.546l-4.951-4.933c-4.621 3.174-10.94 2.004-14.122-2.611-3.174-4.621-2.004-10.94 2.611-14.122 4.621-3.174 10.94-2.004 14.121 2.611a10.16 10.16 0 0 1 0 11.51l4.946 4.946A1.846 1.846 0 0 1 22.156 24zM10.152 3.684a6.46 6.46 0 0 0-6.463 6.464 6.46 6.46 0 0 0 6.463 6.463 6.46 6.46 0 0 0 6.464-6.463c0-3.565-2.893-6.458-6.464-6.464"
        }
      ></path>
    </svg>
  );
}

export default Container3Icon;
/* prettier-ignore-end */
