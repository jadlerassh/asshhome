/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group23Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 397 296"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M196.06 198.777c-23.683 47.9-125.08 78.699-177.589 38.987-7.46-5.652-5.722-14.928 1.52-12.609 54.32 17.392 127.109 1.304 176.141-26.378zM377.053 0C435.5 75.22 362.06 243.779 198.667 293.708c-17.238 5.29-21.149-1.159-5.867-8.189C333.669 220.662 389.437 120.585 377.053 0M209.676 119.787C175.635 191.602 71.342 220.154 6.737 184.573c-8.763-4.855-9.125-13.551-.217-11.595 53.378 11.667 137.537 11.885 164.697-45.509 1.521-6.595 2.97-11.45 2.97-11.45l2.462-7.899c-21.076-6.522-60.765 20.363-66.487-19.566 33.533 11.16 72.933-22.392 108.35-28.986 9.27-3.406 47.439-4.856 47.439-4.856s-27.45 20.218-43.456 45.509c-4.635 7.32-8.836 13.842-12.747 19.639z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M78.8 289.215c-10.356-2.246-9.053-10.29-.796-10.217C165.495 280.012 256.1 214.43 256.1 214.43c-27.812 49.712-123.994 86.235-177.3 74.785"
        }
      ></path>
    </svg>
  );
}

export default Group23Icon;
/* prettier-ignore-end */
