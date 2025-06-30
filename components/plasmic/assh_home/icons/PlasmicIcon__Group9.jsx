/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 52"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M8.567 3.304c.847-.943 1.608-.32 1.106.527-5.323 8.985-3.958 22.267-3.958 22.267C2.241 20.26 4.203 8.128 8.567 3.304m9.688 23.641c-5.384-7.808-2.117-20.295 5.42-24.843 1.028-.623 1.944-.13 1.218.665-4.39 4.826-9.438 13.516-5.125 19.75.587.546 1.011.987 1.011.987l.674.726c1.936-1.79 1.521-7.497 5.99-5.707-3.155 2.802-2.04 8.872-3.475 12.928-.207 1.167-2.325 5.197-2.325 5.197s-.45-4.047-2.109-7.212a87 87 0 0 1-1.261-2.49z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M20.64 51.4C9.389 52.956-3.644 35.307.946 15.436c.484-2.093 1.382-2.11 1.192-.121C.426 33.75 7.435 45.485 20.632 51.4h.009zm-9.73-30.577C7.374 15.513 10.243 3.2 17.476.13c1.029-.432 1.885.303 1.21.908-5.038 4.574-7.717 13.066-7.786 19.785h.008z"
        }
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
