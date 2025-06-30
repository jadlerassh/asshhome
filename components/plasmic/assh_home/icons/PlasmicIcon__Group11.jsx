/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group11Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 38"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M31.329 15.572c6.36-.406 15.59 8.232 14.623 16.04-.138 1.116-1.201 1.488-1.392.598-1.443-6.659-7.45-13.222-13.231-16.638M0 8.715C4.287-1.818 26.074-4.274 40.974 9.63c1.573 1.47 1.14 2.257-.493 1.099C25.374.033 11.72.24 0 8.715m22.358 10.16c9.455-.76 18.625 8.31 18.797 17.113.026 1.194-.855 1.747-1.184.718-1.979-6.217-6.974-14.934-14.528-14.311-.769.233-1.357.38-1.357.38l-.967.216c.579 2.569 5.73 5.068 1.944 8.043-.855-4.134-6.663-6.2-9.455-9.478-.907-.761-3.336-4.618-3.336-4.618s3.725 1.635 7.295 1.782c1.028.043 1.953.095 2.782.147z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M47.663 22.3c.389 1.202-.527 1.556-1.002.691C41.544 13.886 29.358 8.43 29.358 8.43c6.793-.095 16.309 7.67 18.305 13.87"
        }
      ></path>
    </svg>
  );
}

export default Group11Icon;
/* prettier-ignore-end */
