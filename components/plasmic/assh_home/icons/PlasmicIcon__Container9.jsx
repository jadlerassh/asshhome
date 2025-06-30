/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M14.472 5.7c-1.392.92-2.796 1.84-4.18 2.772-.58.384-1.564 1.168-2.284 1.168h-.02c-.724 0-1.704-.784-2.284-1.168C4.32 7.54 2.916 6.62 1.536 5.7.904 5.292 0 4.328 0 3.552 0 2.716.472 2 1.428 2h13.144A1.41 1.41 0 0 1 16 3.364c0 .952-.74 1.816-1.528 2.336M16 12.636A1.4 1.4 0 0 1 14.572 14H1.428A1.4 1.4 0 0 1 0 12.636V5.868q.407.427.904.74c1.484.964 2.98 1.928 4.436 2.94.752.528 1.68 1.176 2.652 1.176h.02c.972 0 1.904-.648 2.652-1.176a186 186 0 0 1 4.444-2.94 5 5 0 0 0 .892-.74z"
        }
      ></path>
    </svg>
  );
}

export default Container9Icon;
/* prettier-ignore-end */
