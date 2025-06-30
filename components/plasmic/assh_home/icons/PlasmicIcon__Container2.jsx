/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m9.379 6.291-5.613 5.595a.42.42 0 0 1-.282.114.5.5 0 0 1-.282-.114l-.582-.6a.4.4 0 0 1-.114-.282.33.33 0 0 1 .114-.264l4.73-4.734-4.73-4.731a.406.406 0 0 1 0-.561l.6-.6A.42.42 0 0 1 3.502 0a.5.5 0 0 1 .282.114l5.598 5.613a.41.41 0 0 1 0 .564z"
        }
      ></path>
    </svg>
  );
}

export default Container2Icon;
/* prettier-ignore-end */
