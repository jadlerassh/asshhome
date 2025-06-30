/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group21Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 235 183"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M153.906 76.499c31.249-1.997 76.592 40.441 71.837 78.801-.679 5.48-5.901 7.307-6.835 2.932-7.091-32.71-36.598-64.953-65.002-81.733M0 42.812C21.059-8.93 128.092-20.994 201.288 47.315c7.727 7.221 5.604 11.087-2.421 5.395C124.653.16 57.571 1.18 0 42.812m109.836 49.915c46.448-3.739 91.494 40.824 92.343 84.069.128 5.862-4.203 8.581-5.816 3.526-9.723-30.544-34.263-73.364-71.37-70.306-3.779 1.147-6.666 1.869-6.666 1.869l-4.755 1.063c2.845 12.616 28.149 24.893 9.553 39.506-4.203-20.305-32.734-30.458-46.448-46.558-4.458-3.739-16.388-22.685-16.388-22.685s18.299 8.029 35.834 8.751c5.052.212 9.595.467 13.671.722z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M234.149 109.549c1.911 5.905-2.59 7.646-4.925 3.398-25.134-44.732-84.998-71.537-84.998-71.537 33.371-.467 80.115 37.68 89.923 68.139"
        }
      ></path>
    </svg>
  );
}

export default Group21Icon;
/* prettier-ignore-end */
