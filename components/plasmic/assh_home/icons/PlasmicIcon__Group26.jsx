/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group26Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 45"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M7.343 2.832c.726-.808 1.378-.275.949.452-4.564 7.7-3.393 19.086-3.393 19.086C1.92 17.367 3.602 6.968 7.343 2.832m8.305 20.264C11.033 16.403 13.833 5.7 20.292 1.801c.882-.533 1.667-.11 1.045.571-3.763 4.136-8.09 11.585-4.393 16.93.504.466.867.844.867.844l.578.623c1.659-1.534 1.303-6.426 5.133-4.892-2.704 2.401-1.748 7.605-2.978 11.08-.178 1.002-1.992 4.456-1.992 4.456s-.386-3.47-1.808-6.182q-.612-1.167-1.082-2.135z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M17.692 44.058C8.047 45.392-3.124 30.264.81 13.23c.414-1.794 1.185-1.809 1.022-.104C.365 28.93 6.373 38.988 17.685 44.057zM9.35 17.849C6.322 13.298 8.78 2.743 14.98.11c.883-.37 1.616.26 1.038.779-4.319 3.92-6.615 11.2-6.675 16.959h.008z"
        }
      ></path>
    </svg>
  );
}

export default Group26Icon;
/* prettier-ignore-end */
