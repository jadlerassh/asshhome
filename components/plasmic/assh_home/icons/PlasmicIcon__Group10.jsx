/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 36"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M23.395 23.72c-2.826 5.715-14.925 9.39-21.19 4.652-.891-.675-.684-1.782.18-1.505 6.482 2.076 15.168.156 21.019-3.147zM44.993 0c6.974 8.976-1.79 29.09-21.287 35.048-2.056.63-2.523-.139-.7-.978C39.816 26.331 46.471 14.39 44.993 0M25.02 14.294C20.958 22.864 8.513 26.27.804 22.024c-1.046-.579-1.089-1.616-.026-1.383 6.37 1.392 16.412 1.418 19.653-5.43.181-.787.354-1.367.354-1.367l.294-.942c-2.515-.778-7.25 2.43-7.934-2.335 4.002 1.332 8.703-2.672 12.93-3.459 1.106-.406 5.66-.58 5.66-.58S28.46 8.942 26.55 11.96a98 98 0 0 1-1.521 2.344z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M9.403 34.511c-1.236-.268-1.08-1.228-.095-1.219 10.44.121 21.252-7.705 21.252-7.705-3.319 5.933-14.796 10.29-21.157 8.924"
        }
      ></path>
    </svg>
  );
}

export default Group10Icon;
/* prettier-ignore-end */
