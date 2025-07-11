/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 34tvEQuyqfK98iGCjMbawB
// Component: PDBoM43wxd7a
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import { useScreenVariants as useScreenVariantsdjBtUr72ZExV } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: DJBtUr72ZExV/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 34tvEQuyqfK98iGCjMbawB/projectcss
import sty from "./PlasmicCtaLeftInfo.module.css"; // plasmic-import: PDBoM43wxd7a/css

createPlasmicElementProxy;

export const PlasmicCtaLeftInfo__VariantProps = new Array();

export const PlasmicCtaLeftInfo__ArgProps = new Array("bgColor", "imageId");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCtaLeftInfo__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          bgColor: "#3F5266",
          imageId: "dRRIalEQp8BFqN3lqmClf"
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
  const new$Queries = {
    heroData: usePlasmicDataOp(() => {
      return {
        sourceId: "tbVV8SR67UpQ6Z9zuPcDPB",
        opId: "ca6c8ad7-7a82-4e46-aa65-4bd8da338702",
        userArgs: {},
        cacheKey: `plasmic.$.ca6c8ad7-7a82-4e46-aa65-4bd8da338702.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    getImage: usePlasmicDataOp(() => {
      return {
        sourceId: "n5sYZavh6xkK4D8BEueUSq",
        opId: "0c2afc0b-6aa8-47c9-b10b-6228850bafaf",
        userArgs: {
          path: [
            $queries.heroData.data.response.items[0].fields.backgroundImage.sys
              .id
          ]
        },
        cacheKey: `plasmic.$.0c2afc0b-6aa8-47c9-b10b-6228850bafaf.$.`,
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
      <section
        data-plasmic-name={"hero"}
        data-plasmic-override={overrides.hero}
        className={classNames(projectcss.all, sty.hero)}
        overflow={"hidden"}
      >
        <section className={classNames(projectcss.all, sty.section__d9ISf)}>
          <section className={classNames(projectcss.all, sty.section__uKvUj)} />
          <section className={classNames(projectcss.all, sty.section___3Ms0F)}>
            <div className={classNames(projectcss.all, sty.freeBox___0Tyip)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__laW6)}
              >
                <div
                  data-plasmic-name={"tagline3"}
                  data-plasmic-override={overrides.tagline3}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.tagline3
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return $queries.heroData.data.response.items[0].fields
                          .header;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "Education, Research & Advocacy";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
                <div
                  data-plasmic-name={"tagline5"}
                  data-plasmic-override={overrides.tagline5}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.tagline5
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                    <React.Fragment>
                      {(() => {
                        try {
                          return $queries.heroData.data.response.items[0].fields
                            .subheader;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Advancing the science and practice of hand and upper extremity surgery through ";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {(() => {
                        try {
                          return $queries.heroData.data.response.items[0].fields
                            .subheader;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Advancing the science and practice of hand and upper extremity surgery through";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  )}
                </div>
                <section
                  className={classNames(projectcss.all, sty.section___2GnOq)}
                >
                  {(() => {
                    try {
                      return (
                        $queries.heroData.data.response.items[0].fields
                          .cta1Text !== undefined
                      );
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return true;
                      }
                      throw e;
                    }
                  })() ? (
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link__cwUb7
                      )}
                      component={Link}
                      href={(() => {
                        try {
                          return $queries.heroData.data.response.items[0].fields
                            .cta1Link;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "https://www.plasmic.app/";
                          }
                          throw e;
                        }
                      })()}
                      platform={"nextjs"}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return $queries.heroData.data.response.items[0]
                              .fields.cta1Text;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "Some link text";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </PlasmicLink__>
                  ) : null}
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__mcMe
                    )}
                    component={Link}
                    href={(() => {
                      try {
                        return $queries.heroData.data.response.items[0].fields
                          .cta2Link;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "https://www.plasmic.app/";
                        }
                        throw e;
                      }
                    })()}
                    platform={"nextjs"}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $queries.heroData.data.response.items[0].fields
                            .cta2Text;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Some link text";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </PlasmicLink__>
                </section>
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : false
                ) ? (
                  <div
                    data-plasmic-name={"tagline6"}
                    data-plasmic-override={overrides.tagline6}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.tagline6
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                      <React.Fragment>
                        {(() => {
                          try {
                            return $queries.heroData.data.response.items[0]
                              .fields.cta1Text;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "Advancing the science and practice of hand and upper extremity surgery through ";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        {(() => {
                          try {
                            return $queries.heroData.data.response.items[0]
                              .fields.subheader;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "Advancing the science and practice of hand and upper extremity surgery through";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    )}
                  </div>
                ) : null}
              </Stack__>
            </div>
          </section>
        </section>
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"100%"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"100%"}
          height={"100%"}
          loading={"lazy"}
          src={(() => {
            try {
              return $queries.getImage.data.response.fields.file.url;
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
          width={"100%"}
        />

        <section className={classNames(projectcss.all, sty.section___9DXrm)}>
          <div className={classNames(projectcss.all, sty.freeBox__qlhJ3)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__eeGna)}
            >
              <div
                data-plasmic-name={"tagline4"}
                data-plasmic-override={overrides.tagline4}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.tagline4
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $queries.heroData.data.response.items[0].fields
                        .header;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Education, Research & Advocacy";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
              <div
                data-plasmic-name={"tagline7"}
                data-plasmic-override={overrides.tagline7}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.tagline7
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                  <React.Fragment>
                    {(() => {
                      try {
                        return $queries.heroData.data.response.items[0].fields
                          .subheader;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "Advancing the science and practice of hand and upper extremity surgery through ";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {(() => {
                      try {
                        return $queries.heroData.data.response.items[0].fields
                          .subheader;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "Advancing the science and practice of hand and upper extremity surgery through";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                )}
              </div>
              <section
                className={classNames(projectcss.all, sty.section__vCnKr)}
              >
                {(() => {
                  try {
                    return (
                      $queries.heroData.data.response.items[0].fields
                        .cta1Text !== undefined
                    );
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return true;
                    }
                    throw e;
                  }
                })() ? (
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__mV0O8
                    )}
                    component={Link}
                    href={(() => {
                      try {
                        return $queries.heroData.data.response.items[0].fields
                          .cta1Link;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "https://www.plasmic.app/";
                        }
                        throw e;
                      }
                    })()}
                    platform={"nextjs"}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $queries.heroData.data.response.items[0].fields
                            .cta1Text;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Some link text";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </PlasmicLink__>
                ) : null}
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___0Gqtl
                  )}
                  component={Link}
                  href={(() => {
                    try {
                      return $queries.heroData.data.response.items[0].fields
                        .cta2Link;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "https://www.plasmic.app/";
                      }
                      throw e;
                    }
                  })()}
                  platform={"nextjs"}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return $queries.heroData.data.response.items[0].fields
                          .cta2Text;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "Some link text";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </PlasmicLink__>
              </section>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? true
                  : false
              ) ? (
                <div
                  data-plasmic-name={"tagline8"}
                  data-plasmic-override={overrides.tagline8}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.tagline8
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                    <React.Fragment>
                      {(() => {
                        try {
                          return $queries.heroData.data.response.items[0].fields
                            .cta1Text;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Advancing the science and practice of hand and upper extremity surgery through ";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {(() => {
                        try {
                          return $queries.heroData.data.response.items[0].fields
                            .subheader;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Advancing the science and practice of hand and upper extremity surgery through";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  )}
                </div>
              ) : null}
            </Stack__>
          </div>
        </section>
      </section>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "hero",
    "tagline3",
    "tagline5",
    "tagline6",
    "img",
    "tagline4",
    "tagline7",
    "tagline8"
  ],

  hero: [
    "hero",
    "tagline3",
    "tagline5",
    "tagline6",
    "img",
    "tagline4",
    "tagline7",
    "tagline8"
  ],

  tagline3: ["tagline3"],
  tagline5: ["tagline5"],
  tagline6: ["tagline6"],
  img: ["img"],
  tagline4: ["tagline4"],
  tagline7: ["tagline7"],
  tagline8: ["tagline8"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCtaLeftInfo__ArgProps,
          internalVariantPropNames: PlasmicCtaLeftInfo__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCtaLeftInfo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCtaLeftInfo";
  } else {
    func.displayName = `PlasmicCtaLeftInfo.${nodeName}`;
  }
  return func;
}

export const PlasmicCtaLeftInfo = Object.assign(
  // Top-level PlasmicCtaLeftInfo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    hero: makeNodeComponent("hero"),
    tagline3: makeNodeComponent("tagline3"),
    tagline5: makeNodeComponent("tagline5"),
    tagline6: makeNodeComponent("tagline6"),
    img: makeNodeComponent("img"),
    tagline4: makeNodeComponent("tagline4"),
    tagline7: makeNodeComponent("tagline7"),
    tagline8: makeNodeComponent("tagline8"),
    // Metadata about props expected for PlasmicCtaLeftInfo
    internalVariantProps: PlasmicCtaLeftInfo__VariantProps,
    internalArgProps: PlasmicCtaLeftInfo__ArgProps
  }
);

export default PlasmicCtaLeftInfo;
/* prettier-ignore-end */
