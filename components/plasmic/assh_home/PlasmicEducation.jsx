/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 34tvEQuyqfK98iGCjMbawB
// Component: 75jatMM1eO89
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import SectionHomeMenuSection from "../../SectionHomeMenuSection"; // plasmic-import: HrBwnQh3XfKO/component
import SectionInternalHeroTitleSectionV2 from "../../SectionInternalHeroTitleSectionV2"; // plasmic-import: xL1xlGlXhY87/component
import SectionCmeMocSection from "../../SectionCmeMocSection"; // plasmic-import: QQidogip4Svc/component
import SectionMidPageCtaSection from "../../SectionMidPageCtaSection"; // plasmic-import: yV5r8KM9AbUW/component
import SectionUpcomingCouresEventsSection from "../../SectionUpcomingCouresEventsSection"; // plasmic-import: aDAIm3T_wfOv/component
import BlockTanInformationLogoBlock from "../../BlockTanInformationLogoBlock"; // plasmic-import: KjbcRISpC18Z/component
import HtmlContentfulHtmlLoader from "../../HtmlContentfulHtmlLoader"; // plasmic-import: yo4cxXaLxoOm/component
import BlockQuoteBlock from "../../BlockQuoteBlock"; // plasmic-import: pkNfPBeJPFGR/component
import BlockAsshMissionBlueBlock from "../../BlockAsshMissionBlueBlock"; // plasmic-import: oMTPDeBb_fES/component
import SectionFooterSection from "../../SectionFooterSection"; // plasmic-import: l_IC-pMZ1T4O/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 34tvEQuyqfK98iGCjMbawB/projectcss
import sty from "./PlasmicEducation.module.css"; // plasmic-import: 75jatMM1eO89/css

createPlasmicElementProxy;

export const PlasmicEducation__VariantProps = new Array();

export const PlasmicEducation__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicEducation__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "sectionHomeMenuSection.openDropdown",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "allclosed"
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <SectionHomeMenuSection
            data-plasmic-name={"sectionHomeMenuSection"}
            data-plasmic-override={overrides.sectionHomeMenuSection}
            className={classNames("__wab_instance", sty.sectionHomeMenuSection)}
            onOpenDropdownChange={async (...eventArgs) => {
              generateStateOnChangeProp($state, [
                "sectionHomeMenuSection",
                "openDropdown"
              ]).apply(null, eventArgs);
              if (
                eventArgs.length > 1 &&
                eventArgs[1] &&
                eventArgs[1]._plasmic_state_init_
              ) {
                return;
              }
            }}
            openDropdown={generateStateValueProp($state, [
              "sectionHomeMenuSection",
              "openDropdown"
            ])}
          />

          <SectionInternalHeroTitleSectionV2
            data-plasmic-name={"sectionInternalHeroTitleSectionV2"}
            data-plasmic-override={overrides.sectionInternalHeroTitleSectionV2}
            className={classNames(
              "__wab_instance",
              sty.sectionInternalHeroTitleSectionV2
            )}
            title={"Education Overview - Title Card"}
          />

          <SectionCmeMocSection
            data-plasmic-name={"sectionCmeMocSection"}
            data-plasmic-override={overrides.sectionCmeMocSection}
            className={classNames("__wab_instance", sty.sectionCmeMocSection)}
          />

          <SectionMidPageCtaSection
            data-plasmic-name={"sectionMidPageCtaSection"}
            data-plasmic-override={overrides.sectionMidPageCtaSection}
            className={classNames(
              "__wab_instance",
              sty.sectionMidPageCtaSection
            )}
            title={"Education Overview - Mid-page CTA"}
          />

          <SectionUpcomingCouresEventsSection
            data-plasmic-name={"sectionUpcomingCouresEventsSection"}
            data-plasmic-override={overrides.sectionUpcomingCouresEventsSection}
            className={classNames(
              "__wab_instance",
              sty.sectionUpcomingCouresEventsSection
            )}
          />

          <BlockTanInformationLogoBlock
            data-plasmic-name={"blockTanInformationLogoBlock"}
            data-plasmic-override={overrides.blockTanInformationLogoBlock}
            className={classNames(
              "__wab_instance",
              sty.blockTanInformationLogoBlock
            )}
            desc={``}
            title={"Education Overview - Tan information logo block"}
          />

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"What Sets Us Apart"}
            </div>
          </div>
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column__cbYfl)}>
              <HtmlContentfulHtmlLoader
                data-plasmic-name={"htmlContentfulHtmlLoader"}
                data-plasmic-override={overrides.htmlContentfulHtmlLoader}
                className={classNames(
                  "__wab_instance",
                  sty.htmlContentfulHtmlLoader
                )}
                title={"What Sets Us Apart"}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__j6C61)}>
              <BlockQuoteBlock
                data-plasmic-name={"blockQuoteBlock"}
                data-plasmic-override={overrides.blockQuoteBlock}
                className={classNames("__wab_instance", sty.blockQuoteBlock)}
                quote={"singleLine"}
              />
            </div>
          </div>
          <BlockAsshMissionBlueBlock
            data-plasmic-name={"blockAsshMissionBlueBlock"}
            data-plasmic-override={overrides.blockAsshMissionBlueBlock}
            className={classNames(
              "__wab_instance",
              sty.blockAsshMissionBlueBlock
            )}
          />

          <SectionFooterSection
            data-plasmic-name={"sectionFooterSection"}
            data-plasmic-override={overrides.sectionFooterSection}
            className={classNames("__wab_instance", sty.sectionFooterSection)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "sectionHomeMenuSection",
    "sectionInternalHeroTitleSectionV2",
    "sectionCmeMocSection",
    "sectionMidPageCtaSection",
    "sectionUpcomingCouresEventsSection",
    "blockTanInformationLogoBlock",
    "freeBox",
    "text",
    "columns",
    "htmlContentfulHtmlLoader",
    "blockQuoteBlock",
    "blockAsshMissionBlueBlock",
    "sectionFooterSection"
  ],

  sectionHomeMenuSection: ["sectionHomeMenuSection"],
  sectionInternalHeroTitleSectionV2: ["sectionInternalHeroTitleSectionV2"],
  sectionCmeMocSection: ["sectionCmeMocSection"],
  sectionMidPageCtaSection: ["sectionMidPageCtaSection"],
  sectionUpcomingCouresEventsSection: ["sectionUpcomingCouresEventsSection"],
  blockTanInformationLogoBlock: ["blockTanInformationLogoBlock"],
  freeBox: ["freeBox", "text"],
  text: ["text"],
  columns: ["columns", "htmlContentfulHtmlLoader", "blockQuoteBlock"],
  htmlContentfulHtmlLoader: ["htmlContentfulHtmlLoader"],
  blockQuoteBlock: ["blockQuoteBlock"],
  blockAsshMissionBlueBlock: ["blockAsshMissionBlueBlock"],
  sectionFooterSection: ["sectionFooterSection"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicEducation__ArgProps,
          internalVariantPropNames: PlasmicEducation__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEducation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEducation";
  } else {
    func.displayName = `PlasmicEducation.${nodeName}`;
  }
  return func;
}

export const PlasmicEducation = Object.assign(
  // Top-level PlasmicEducation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionHomeMenuSection: makeNodeComponent("sectionHomeMenuSection"),
    sectionInternalHeroTitleSectionV2: makeNodeComponent(
      "sectionInternalHeroTitleSectionV2"
    ),
    sectionCmeMocSection: makeNodeComponent("sectionCmeMocSection"),
    sectionMidPageCtaSection: makeNodeComponent("sectionMidPageCtaSection"),
    sectionUpcomingCouresEventsSection: makeNodeComponent(
      "sectionUpcomingCouresEventsSection"
    ),
    blockTanInformationLogoBlock: makeNodeComponent(
      "blockTanInformationLogoBlock"
    ),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    columns: makeNodeComponent("columns"),
    htmlContentfulHtmlLoader: makeNodeComponent("htmlContentfulHtmlLoader"),
    blockQuoteBlock: makeNodeComponent("blockQuoteBlock"),
    blockAsshMissionBlueBlock: makeNodeComponent("blockAsshMissionBlueBlock"),
    sectionFooterSection: makeNodeComponent("sectionFooterSection"),
    // Metadata about props expected for PlasmicEducation
    internalVariantProps: PlasmicEducation__VariantProps,
    internalArgProps: PlasmicEducation__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicEducation;
/* prettier-ignore-end */
