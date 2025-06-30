/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function YouTubeIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M23.568 17.805a3.1 3.1 0 0 1-2.582 2.432q-4.485.425-8.986.336a80 80 0 0 1-8.987-.336 3.06 3.06 0 0 1-2.582-2.432A27.7 27.7 0 0 1 .018 12a27.4 27.4 0 0 1 .413-5.805 3.1 3.1 0 0 1 2.582-2.432A79 79 0 0 1 12 3.427a80 80 0 0 1 8.986.336 3.06 3.06 0 0 1 2.582 2.432c.342 1.917.48 3.858.413 5.805a27 27 0 0 1-.413 5.805m-6.853-6.512L9.897 6.986a.8.8 0 0 0-.863-.036.9.9 0 0 0-.449.749v8.572a.9.9 0 0 0 .45.75.9.9 0 0 0 .413.113.68.68 0 0 0 .449-.15l6.853-4.271a.82.82 0 0 0 .414-.713.94.94 0 0 0-.45-.713z"
        }
      ></path>
    </svg>
  );
}

export default YouTubeIcon;
/* prettier-ignore-end */
