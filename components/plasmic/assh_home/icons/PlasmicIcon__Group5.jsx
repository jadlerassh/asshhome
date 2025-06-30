/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M10.864 5.339c2.206-.14 5.407 2.822 5.071 5.5-.048.382-.417.51-.482.204-.501-2.283-2.584-4.533-4.589-5.704M0 2.988c1.487-3.611 9.042-4.453 14.209.314.545.504.395.774-.171.377C8.799.01 4.064.082 0 2.988m7.753 3.484c3.279-.261 6.459 2.849 6.519 5.867.009.409-.297.599-.41.246-.687-2.132-2.42-5.12-5.039-4.907-.267.08-.47.13-.47.13l-.336.075c.2.88 1.987 1.737.674 2.757-.296-1.417-2.31-2.126-3.278-3.25-.315-.26-1.157-1.583-1.157-1.583s1.291.56 2.53.611q.534.024.964.05z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M16.529 7.646c.134.412-.183.533-.348.237-1.774-3.122-6-4.993-6-4.993 2.356-.033 5.655 2.63 6.348 4.756"
        }
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
