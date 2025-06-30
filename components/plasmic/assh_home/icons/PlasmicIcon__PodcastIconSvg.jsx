/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PodcastIconSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.5 11.155c0-.627-.517-1.133-1.152-1.133-.638 0-1.152.508-1.152 1.133 0 2.233-.545 4.077-1.647 5.307-1 1.114-2.509 1.756-4.549 1.756-2.04 0-3.55-.64-4.549-1.754-1.104-1.23-1.647-3.074-1.647-5.309 0-.627-.516-1.133-1.152-1.133-.638 0-1.152.508-1.152 1.133 0 2.784.733 5.143 2.223 6.805 1.096 1.223 2.574 2.051 4.436 2.374v1.86H4.334a.913.913 0 00-.918.902V24h11.172v-.904a.913.913 0 00-.918-.903h-2.83v-1.86c1.86-.324 3.337-1.15 4.435-2.374 1.49-1.66 2.225-4.02 2.225-6.804zM8.998 0c2.352 0 4.275 1.893 4.275 4.203v.11h-2.298V6.99h2.3v1.363h-2.3v2.678h2.3v.963c0 2.313-1.925 4.204-4.275 4.204-2.352 0-4.275-1.893-4.275-4.204v-.963h2.3V8.354H4.723V6.991h2.3V4.313h-2.3v-.11C4.723 1.893 6.646 0 8.998 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PodcastIconSvgIcon;
/* prettier-ignore-end */
