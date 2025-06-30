/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 14"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#Ri5Kv_YfM5XDa)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M8.505 5.722c-.279.37-.731.37-1.01 0L4.167 1.297a.946.946 0 010-1.074c.224-.297.585-.297.808 0L8 4.244 11.024.223c.224-.297.586-.297.809 0a.946.946 0 010 1.074L8.505 5.722z"
          }
          fill={"#fff"}
        ></path>
      </g>

      <defs>
        <filter
          id={"Ri5Kv_YfM5XDa"}
          x={"0"}
          y={"0"}
          width={"16"}
          height={"14"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"4"}></feOffset>

          <feGaussianBlur stdDeviation={"2"}></feGaussianBlur>

          <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow_670_1731"}
          ></feBlend>

          <feBlend
            mode={"normal"}
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_670_1731"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
