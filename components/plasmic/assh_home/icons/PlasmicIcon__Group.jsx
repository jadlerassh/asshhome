/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 82 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 .136h3.385v7.907h9.193V.136h3.385v19.019h-3.385v-8.016H3.386v8.016H0V.136zM27.744 0h3.138l8.476 19.155h-3.577l-1.954-4.592h-9.11l-1.982 4.592h-3.468L27.744 0zm4.843 11.601l-3.33-7.607-3.303 7.607h6.633zM42.663.136h3.138l10.32 13.15V.136h3.33v19.019h-2.835L45.993 5.625v13.53h-3.33V.136zm21.744 0h7.184c6.055 0 10.237 4.102 10.237 9.456v.054c0 5.352-4.184 9.509-10.237 9.509h-7.184V.136zm7.184 15.976c4.045 0 6.687-2.691 6.687-6.412v-.055c0-3.723-2.642-6.467-6.688-6.467h-3.797v12.934h3.797z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
