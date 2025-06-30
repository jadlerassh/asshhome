/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AccountSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.991 7.179a3.015 3.015 0 01-3.006-3.007V3.094A3.015 3.015 0 015.99.088a3.015 3.015 0 013.006 3.006v1.078A3.015 3.015 0 015.991 7.18zm1.77.426L5.991 9.65l-1.77-2.044C1.986 7.977.267 9.93.267 12.267v3.11a.52.52 0 00.518.517h10.412a.519.519 0 00.518-.517v-3.11c0-2.337-1.719-4.29-3.954-4.662zm2.13 5.984a.212.212 0 01-.213.212h-.68v.681a.212.212 0 01-.213.212h-.734a.212.212 0 01-.212-.212v-.68h-.68a.212.212 0 01-.213-.213v-.734c0-.117.095-.212.212-.212h.681v-.681c0-.117.095-.212.212-.212h.734c.117 0 .212.095.212.212v.68h.681c.117 0 .212.096.212.213v.734z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AccountSvgIcon;
/* prettier-ignore-end */
