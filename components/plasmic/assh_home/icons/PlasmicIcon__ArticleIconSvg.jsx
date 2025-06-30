/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArticleIconSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.15 0h9.792v6.876c0 .259.205.468.458.468h7.1v14.971c0 .461-.185.882-.484 1.188l-.004.004c-.3.304-.71.493-1.161.493H2.15c-.454 0-.867-.19-1.166-.494a1.698 1.698 0 01-.484-1.19V1.684C.5 1.22.685.8.984.495A1.628 1.628 0 012.15 0zm10.708.105c.042.028.08.063.114.101l6.267 6.202h-6.38V.105zm-8.167 19.57a.463.463 0 01-.459-.468c0-.259.205-.469.459-.469h10.618c.254 0 .459.21.459.469a.463.463 0 01-.459.467H4.691zm0-3.58a.463.463 0 01-.459-.467c0-.259.205-.469.459-.469h10.453c.254 0 .459.21.459.469a.463.463 0 01-.459.468H4.691zm0-3.578a.463.463 0 01-.459-.468c0-.259.205-.468.459-.468h8.458c.253 0 .459.21.459.468a.464.464 0 01-.459.468H4.691zm0-3.58a.463.463 0 01-.459-.467c0-.26.205-.469.459-.469h4.722c.253 0 .458.21.458.469a.463.463 0 01-.458.467H4.691zm0-3.578a.463.463 0 01-.459-.469c0-.258.205-.467.459-.467h2.543c.253 0 .458.21.458.467a.463.463 0 01-.458.469H4.69z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArticleIconSvgIcon;
/* prettier-ignore-end */
