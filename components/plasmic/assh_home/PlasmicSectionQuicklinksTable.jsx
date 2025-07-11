/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 34tvEQuyqfK98iGCjMbawB
// Component: dzBXgCr_C9up
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import ItemCalloutItem from "../../ItemCalloutItem"; // plasmic-import: ntQQTfdTjzvC/component
import { useScreenVariants as useScreenVariantsdjBtUr72ZExV } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: DJBtUr72ZExV/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 34tvEQuyqfK98iGCjMbawB/projectcss
import sty from "./PlasmicSectionQuicklinksTable.module.css"; // plasmic-import: dzBXgCr_C9up/css

createPlasmicElementProxy;

export const PlasmicSectionQuicklinksTable__VariantProps = new Array("columns");

export const PlasmicSectionQuicklinksTable__ArgProps = new Array("name");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSectionQuicklinksTable__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          name: "ASSH Education Quicklinks"
        },
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "links",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return (() => {
                const entryMap = Object.fromEntries(
                  $queries.getQuicklinks.data.response.includes.Entry.map(
                    entry => [entry.sys.id, entry]
                  )
                );
                return $queries.getQuicklinks.data.response.items[0].fields.childLinks
                  .map(link => {
                    const entry = entryMap[link.sys.id];
                    return {
                      id: link.sys.id,
                      label: entry?.fields.label || "Label missing",
                      order: Number(entry?.fields.order) || 0,
                      column: entry?.fields.column ?? 0,
                      url: entry?.fields.url || "#",
                      showExternalIcon: entry?.fields.showExternalIcon || false,
                      subText: entry?.fields.subText || ""
                    };
                  })
                  .sort((a, b) => a.order - b.order);
              })();
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
      },
      {
        path: "columns",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.columns
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const new$Queries = {
    getQuicklinks: usePlasmicDataOp(() => {
      return {
        sourceId: "tbVV8SR67UpQ6Z9zuPcDPB",
        opId: "cd767760-3d32-4b02-933e-cd25d3232278",
        userArgs: {
          params: [$props.name]
        },
        cacheKey: `plasmic.$.cd767760-3d32-4b02-933e-cd25d3232278.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
    $queries = new$Queries;
  }
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsdjBtUr72ZExV()
  });
  return (
    <div
      data-plasmic-name={"quickLinks"}
      data-plasmic-override={overrides.quickLinks}
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
        sty.quickLinks
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"quickLinksContainer2"}
        data-plasmic-override={overrides.quickLinksContainer2}
        hasGap={true}
        className={classNames(projectcss.all, sty.quickLinksContainer2)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__cBr52)}>
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $queries.getQuicklinks.data.response.items[0].fields
                    .label;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "ASSH Education";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__h1PUo)}>
          <div
            className={classNames(projectcss.all, sty.freeBox__g3XRs, {
              [sty.freeBoxcolumns__3Column__g3XRse7MI]: hasVariant(
                $state,
                "columns",
                "_3Column"
              )
            })}
          >
            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return $state.links;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()
            ).map((__plasmic_item_0, __plasmic_idx_0) => {
              const currentItem = __plasmic_item_0;
              const currentIndex = __plasmic_idx_0;
              return (
                <div
                  className={classNames(
                    projectcss.all,
                    sty.freeBox__v0LlI,
                    hasVariant($state, "columns", "_4Column")
                      ? "quicklinkItem quicklinkItemFour"
                      : hasVariant($state, "columns", "_3Column")
                      ? "quicklinkItem quicklinkItemThree"
                      : "quicklinkItem",
                    {
                      [sty.freeBoxcolumns__3Column__v0LlIe7MI]: hasVariant(
                        $state,
                        "columns",
                        "_3Column"
                      ),
                      [sty.freeBoxcolumns__4Column__v0LlIGa6JV]: hasVariant(
                        $state,
                        "columns",
                        "_4Column"
                      )
                    }
                  )}
                  key={currentIndex}
                >
                  <ItemCalloutItem
                    data-plasmic-name={"itemCalloutItem"}
                    data-plasmic-override={overrides.itemCalloutItem}
                    className={classNames(
                      "__wab_instance",
                      sty.itemCalloutItem,
                      {
                        [sty.itemCalloutItemcolumns__3Column]: hasVariant(
                          $state,
                          "columns",
                          "_3Column"
                        )
                      }
                    )}
                    desc={(() => {
                      try {
                        return currentItem.subText;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                    linkUrl={(() => {
                      try {
                        return currentItem.url;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                    name={(() => {
                      try {
                        return currentItem.label;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  quickLinks: ["quickLinks", "quickLinksContainer2", "text", "itemCalloutItem"],
  quickLinksContainer2: ["quickLinksContainer2", "text", "itemCalloutItem"],
  text: ["text"],
  itemCalloutItem: ["itemCalloutItem"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSectionQuicklinksTable__ArgProps,
          internalVariantPropNames: PlasmicSectionQuicklinksTable__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSectionQuicklinksTable__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "quickLinks") {
    func.displayName = "PlasmicSectionQuicklinksTable";
  } else {
    func.displayName = `PlasmicSectionQuicklinksTable.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionQuicklinksTable = Object.assign(
  // Top-level PlasmicSectionQuicklinksTable renders the root element
  makeNodeComponent("quickLinks"),
  {
    // Helper components rendering sub-elements
    quickLinksContainer2: makeNodeComponent("quickLinksContainer2"),
    text: makeNodeComponent("text"),
    itemCalloutItem: makeNodeComponent("itemCalloutItem"),
    // Metadata about props expected for PlasmicSectionQuicklinksTable
    internalVariantProps: PlasmicSectionQuicklinksTable__VariantProps,
    internalArgProps: PlasmicSectionQuicklinksTable__ArgProps
  }
);

export default PlasmicSectionQuicklinksTable;
/* prettier-ignore-end */
