/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M2.97 1.133c.295-.324.558-.11.385.18-1.847 3.08-1.373 7.635-1.373 7.635-1.205-2.001-.525-6.161.989-7.815zm3.36 8.105C4.464 6.561 5.597 2.28 8.21.721c.356-.214.674-.045.422.228C7.11 2.603 5.36 5.583 6.855 7.72c.204.187.35.338.35.338l.234.25c.672-.614.528-2.571 2.077-1.957-1.094.96-.707 3.042-1.204 4.432-.072.4-.807 1.782-.807 1.782s-.155-1.388-.73-2.473a30 30 0 0 1-.438-.854z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M7.158 17.623c-3.902.534-8.422-5.518-6.83-12.33.167-.718.48-.724.413-.042-.593 6.32 1.837 10.344 6.414 12.372zM3.783 7.14C2.557 5.318 3.553 1.096 6.061.044c.356-.149.653.103.42.31-1.748 1.57-2.677 4.48-2.7 6.784h.002z"
        }
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
