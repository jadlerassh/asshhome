/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group17Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M22.353 11.123c4.538-.29 11.123 5.88 10.433 11.458-.099.796-.857 1.062-.993.426-1.03-4.756-5.315-9.444-9.44-11.884M0 6.225c3.058-7.523 18.604-9.278 29.234.655 1.122 1.05.814 1.612-.351.784C18.104.024 8.36.172 0 6.224zm15.952 7.257c6.746-.543 13.288 5.936 13.412 12.224.018.852-.61 1.248-.845.513-1.412-4.441-4.976-10.667-10.366-10.223-.548.167-.968.272-.968.272l-.69.154c.413 1.835 4.088 3.62 1.387 5.745-.61-2.953-4.754-4.429-6.746-6.77-.647-.543-2.38-3.298-2.38-3.298s2.658 1.167 5.204 1.272q1.1.048 1.986.105z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M34.007 15.928c.277.859-.376 1.112-.715.494-3.65-6.504-12.345-10.401-12.345-10.401 4.846-.068 11.635 5.479 13.06 9.907"
        }
      ></path>
    </svg>
  );
}

export default Group17Icon;
/* prettier-ignore-end */
