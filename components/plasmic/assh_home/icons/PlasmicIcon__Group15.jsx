/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group15Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 37"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M6.113 2.36c.604-.674 1.146-.229.789.376-3.799 6.418-2.824 15.905-2.824 15.905-2.48-4.169-1.08-12.835 2.035-16.281m6.912 16.887C9.183 13.669 11.515 4.75 16.89 1.5c.734-.445 1.388-.093.87.476-3.133 3.446-6.734 9.654-3.657 14.107.42.39.721.704.721.704l.481.52c1.382-1.28 1.086-5.356 4.274-4.077-2.251 2-1.456 6.337-2.48 9.234-.147.834-1.658 3.712-1.658 3.712s-.32-2.89-1.505-5.151a62 62 0 0 1-.9-1.78h-.012z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M14.727 36.714C6.698 37.826-2.6 25.22.674 11.026c.345-1.495.987-1.508.85-.087-1.22 13.169 3.78 21.55 13.197 25.775zm-6.943-21.84C5.262 11.08 7.309 2.286 12.47.093c.734-.309 1.344.216.863.648-3.595 3.268-5.506 9.333-5.556 14.133z"
        }
      ></path>
    </svg>
  );
}

export default Group15Icon;
/* prettier-ignore-end */
