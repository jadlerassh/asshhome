/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container8Icon(props) {
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
          "M15.636 14.211c-.24.556-.876.92-1.387 1.204a4.3 4.3 0 0 1-2.11.58c-1.056 0-2.011-.433-2.974-.784a10.5 10.5 0 0 1-1.987-.944 19.2 19.2 0 0 1-5.451-5.451 10.5 10.5 0 0 1-.944-1.987C.432 5.862 0 4.911 0 3.856a4.3 4.3 0 0 1 .58-2.11C.863 1.234 1.227.598 1.783.359c.503-.2 1.035-.32 1.578-.352a.6.6 0 0 1 .24.032c.24.08.488.635.604.863.363.648.715 1.307 1.09 1.943.18.295.524.66.524 1.01 0 .692-2.054 1.703-2.054 2.315.072.356.224.687.444.975a11.3 11.3 0 0 0 4.644 4.645c.288.22.623.367.975.443.612 0 1.623-2.054 2.318-2.054.352 0 .716.34 1.011.523.636.376 1.296.728 1.943 1.091.228.112.783.364.863.604.028.076.04.16.036.24a5.1 5.1 0 0 1-.351 1.579z"
        }
      ></path>
    </svg>
  );
}

export default Container8Icon;
/* prettier-ignore-end */
