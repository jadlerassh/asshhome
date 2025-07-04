/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 34tvEQuyqfK98iGCjMbawB
// Component: hATneKZaDAmX
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import SectionAsshHomeMenu from "../../SectionAsshHomeMenu"; // plasmic-import: HrBwnQh3XfKO/component
import SectionHeroWithLinks from "../../SectionHeroWithLinks"; // plasmic-import: KrK4IjZZwAsd/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 34tvEQuyqfK98iGCjMbawB/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: hATneKZaDAmX/css

createPlasmicElementProxy;

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props) {
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
  let [$queries, setDollarQueries] = React.useState({});
  const new$Queries = {
    updatesQuery: usePlasmicDataOp(() => {
      return {
        sourceId: "tbVV8SR67UpQ6Z9zuPcDPB",
        opId: "cd78a920-c2ba-4464-81cc-cbd12c3ae506",
        userArgs: {},
        cacheKey: `plasmic.$.cd78a920-c2ba-4464-81cc-cbd12c3ae506.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
    $queries = new$Queries;
  }
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"asshHome"}
          data-plasmic-override={overrides.asshHome}
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
            sty.asshHome
          )}
        >
          <SectionAsshHomeMenu
            data-plasmic-name={"sectionAsshHomeMenu"}
            data-plasmic-override={overrides.sectionAsshHomeMenu}
            className={classNames("__wab_instance", sty.sectionAsshHomeMenu)}
          />

          <SectionHeroWithLinks
            data-plasmic-name={"sectionHeroWithLinks"}
            data-plasmic-override={overrides.sectionHeroWithLinks}
            className={classNames("__wab_instance", sty.sectionHeroWithLinks)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  asshHome: ["asshHome", "sectionAsshHomeMenu", "sectionHeroWithLinks"],
  sectionAsshHomeMenu: ["sectionAsshHomeMenu"],
  sectionHeroWithLinks: ["sectionHeroWithLinks"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "asshHome") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("asshHome"),
  {
    // Helper components rendering sub-elements
    sectionAsshHomeMenu: makeNodeComponent("sectionAsshHomeMenu"),
    sectionHeroWithLinks: makeNodeComponent("sectionHeroWithLinks"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "ASSH Home",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
