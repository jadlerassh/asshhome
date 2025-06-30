/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function StoreSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.571 1.176A.59.59 0 010 .58C0 .268.264 0 .571 0h1.553c.527.015.996.12 1.391.372.44.283.762.715.937 1.355 0 .014 0 .03.015.044l.147.596h12.815a.577.577 0 01.542.759l-1.494 6.117a.566.566 0 01-.557.446H6.547c.205.774.41 1.191.688 1.384.337.224.923.239 1.904.224h6.635c.322 0 .571.268.571.58 0 .328-.264.58-.571.58h-6.62c-1.216.016-1.963-.014-2.563-.416-.615-.417-.938-1.131-1.26-2.426L3.37 2.069c0-.015 0-.015-.015-.03-.088-.327-.234-.55-.44-.67-.204-.134-.483-.193-.805-.193H.571zm13.49 11.966c.775 0 1.405.64 1.405 1.43 0 .788-.63 1.428-1.406 1.428-.776 0-1.406-.64-1.406-1.429s.63-1.429 1.406-1.429zm-6.167 0c.776 0 1.406.64 1.406 1.43C9.3 15.36 8.67 16 7.894 16c-.776 0-1.406-.64-1.406-1.429s.63-1.429 1.406-1.429zM4.936 3.527l1.303 4.986h9.242l1.216-4.986H4.936z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StoreSvgIcon;
/* prettier-ignore-end */
