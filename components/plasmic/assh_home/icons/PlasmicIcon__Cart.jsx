/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CartIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M13.558 11.064a1.223 1.223 0 1 0 0 2.446 1.223 1.223 0 0 0 0-2.446m-8.622 0a1.223 1.223 0 1 0 0 2.446 1.223 1.223 0 0 0 0-2.446"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M15.38 1.223H3.838C3.737.776 3.713 0 3.09 0H.64a.625.625 0 0 0-.032 1.247H2.59l1.7 7.918a4.9 4.9 0 0 0-.576 1.323c0 .34.272.62.612.624h9.852a.625.625 0 0 0 0-1.247h-8.87c.128-.188.204-.4.224-.624a3.2 3.2 0 0 0-.124-.675l10.04-1.175A.665.665 0 0 0 16 6.767v-4.92a.63.63 0 0 0-.623-.624z"
        }
      ></path>
    </svg>
  );
}

export default CartIcon;
/* prettier-ignore-end */
