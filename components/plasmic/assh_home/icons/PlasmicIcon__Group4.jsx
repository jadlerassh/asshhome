/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group4Icon(props) {
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
          "M8.113 8.132c-.98 1.96-5.176 3.22-7.349 1.595-.308-.23-.236-.61.063-.515 2.248.711 5.26.053 7.289-1.08zM15.602 0c2.42 3.077-.62 9.974-7.381 12.016-.713.217-.875-.047-.243-.335C13.808 9.028 16.115 4.933 15.602 0M8.676 4.9C7.268 7.84 2.952 9.008.28 7.552c-.363-.198-.378-.554-.01-.474 2.21.477 5.692.486 6.816-1.862.063-.27.123-.468.123-.468l.102-.324c-.872-.266-2.515.834-2.751-.8 1.387.457 3.018-.916 4.483-1.186.384-.14 1.963-.199 1.963-.199S9.87 3.066 9.207 4.1q-.287.45-.528.804z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M3.26 11.832c-.428-.091-.374-.42-.032-.418 3.62.042 7.37-2.641 7.37-2.641-1.151 2.034-5.131 3.528-7.337 3.06z"
        }
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
