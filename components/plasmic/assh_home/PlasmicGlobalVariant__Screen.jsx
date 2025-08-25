/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export const ScreenContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

export function ScreenContextProvider(props) {
  return (
    <ScreenContext.Provider value={props.value}>
      {props.children}
    </ScreenContext.Provider>
  );
}

export const useScreenVariants = createUseScreenVariants(true, {
  largeMobile: "(min-width:0px) and (max-width:767px)",
  tablet: "(max-width:1023px)",
  smallMobile: "(max-width:480px)",
  largeDesktop: "(max-width:1535px)",
  miniMobile: "(max-width:240px)",
  smallDesktop: "(max-width:1279px)",
});

export default ScreenContext;
/* prettier-ignore-end */
