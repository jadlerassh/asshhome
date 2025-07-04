/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 83 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M9.86.16h2.288l9.866 21.841h-2.627l-2.535-5.732H5.07l-2.566 5.732H0L9.866.161H9.86zm6.03 13.91L10.976 3.008 6.03 14.07h9.866zm8.54 4.769 1.518-1.798c2.256 2.045 4.42 3.064 7.424 3.064 3.003 0 4.822-1.55 4.822-3.688v-.061c0-2.014-1.086-3.163-5.63-4.12-4.982-1.087-7.27-2.693-7.27-6.257v-.062C25.294 2.507 28.297 0 32.41 0c3.157 0 5.414.896 7.609 2.662l-1.425 1.89C36.584 2.91 34.575 2.2 32.348 2.2c-2.812 0-4.606 1.55-4.606 3.502v.062c0 2.044 1.116 3.193 5.876 4.212 4.822 1.056 7.048 2.817 7.048 6.134v.061c0 3.719-3.095 6.134-7.393 6.134-3.435 0-6.246-1.149-8.842-3.471v.006zm19.517 0 1.517-1.798c2.257 2.045 4.42 3.064 7.424 3.064 3.003 0 4.822-1.55 4.822-3.688v-.061c0-2.014-1.085-3.163-5.63-4.12-4.982-1.087-7.27-2.693-7.27-6.257v-.062C44.81 2.507 47.813 0 51.926 0c3.157 0 5.414.896 7.61 2.662l-1.425 1.89C56.1 2.91 54.09 2.2 51.864 2.2c-2.811 0-4.606 1.55-4.606 3.502v.062c0 2.044 1.116 3.193 5.877 4.212 4.822 1.056 7.054 2.817 7.054 6.134v.061c0 3.719-3.096 6.134-7.394 6.134-3.434 0-6.246-1.149-8.842-3.471l-.006.006zM65.165.315h2.442v9.636H80.1V.315h2.441v21.686H80.1v-9.759H67.607v9.76h-2.442z"
        }
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
