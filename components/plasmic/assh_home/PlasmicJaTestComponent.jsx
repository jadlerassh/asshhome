/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 34tvEQuyqfK98iGCjMbawB
// Component: 7BUIUe4SKtWq
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 34tvEQuyqfK98iGCjMbawB/projectcss
import sty from "./PlasmicJaTestComponent.module.css"; // plasmic-import: 7BUIUe4SKtWq/css

createPlasmicElementProxy;

export const PlasmicJaTestComponent__VariantProps = new Array();

export const PlasmicJaTestComponent__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicJaTestComponent__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__glzEq)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___07MTf
          )}
        >
          {"Test Text"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__wavo3
          )}
        >
          {"Test Text 2"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__uLsjw
          )}
        >
          {"Test Text 2"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__pyjj4
          )}
        >
          {"Test Text 2"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__n5WCd
          )}
        >
          {"Test Text 2"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__zH76B
          )}
        >
          {"Test Text 2"}
        </div>
      </Stack__>
      <div className={classNames(projectcss.all, sty.freeBox__zhCoh)}>
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__vZa9Z)}>
            <PlasmicLink__
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link
              )}
              component={Link}
              href={(() => {
                try {
                  return undefined;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "https://www.assh.org";
                  }
                  throw e;
                }
              })()}
              platform={"nextjs"}
            >
              {"Some link text"}
            </PlasmicLink__>
          </div>
          <div className={classNames(projectcss.all, sty.column__mtymA)} />
          <div className={classNames(projectcss.all, sty.column__fuQ1P)} />
          <div className={classNames(projectcss.all, sty.column__o1ID9)} />
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "link"],
  columns: ["columns", "link"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicJaTestComponent__ArgProps,
          internalVariantPropNames: PlasmicJaTestComponent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicJaTestComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicJaTestComponent";
  } else {
    func.displayName = `PlasmicJaTestComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicJaTestComponent = Object.assign(
  // Top-level PlasmicJaTestComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicJaTestComponent
    internalVariantProps: PlasmicJaTestComponent__VariantProps,
    internalArgProps: PlasmicJaTestComponent__ArgProps
  }
);

export default PlasmicJaTestComponent;
/* prettier-ignore-end */
