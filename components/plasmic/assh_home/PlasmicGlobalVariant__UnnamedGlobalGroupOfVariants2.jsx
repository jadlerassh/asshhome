/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import * as React from "react";

export const UnnamedGlobalGroupOfVariants2Context = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

export function UnnamedGlobalGroupOfVariants2ContextProvider(props) {
  return (
    <UnnamedGlobalGroupOfVariants2Context.Provider value={props.value}>
      {props.children}
    </UnnamedGlobalGroupOfVariants2Context.Provider>
  );
}

export function useUnnamedGlobalGroupOfVariants2() {
  return React.useContext(UnnamedGlobalGroupOfVariants2Context);
}

export default UnnamedGlobalGroupOfVariants2Context;
/* prettier-ignore-end */
