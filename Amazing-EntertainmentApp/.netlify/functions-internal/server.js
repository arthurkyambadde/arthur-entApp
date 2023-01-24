var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/shared.css
var shared_default = "/build/_assets/shared-IRZJ6FDV.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: shared_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "Entertainment App",
  viewport: "width=device-width,initial-scale=1",
  author: "Daniel Ssejjemba",
  description: "A movie watching application with profiled reccomendation and categorisation",
  keywords: "movies, entertainment, tv shows, designs"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links6
});

// app/components/Inputs/search/Search.tsx
var import_react3 = __toESM(require("react"));

// app/components/Inputs/search/styles.css
var styles_default = "/build/_assets/styles-IYIZM2P2.css";

// app/components/Inputs/search/Search.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: styles_default }], SearchInput = import_react3.default.forwardRef(
  ({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
    className: "search_container",
    htmlFor: props.id,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
        className: "search_icon",
        viewBox: "0 0 25 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19.08 17.2L23.6133 21.72C23.8657 21.9704 24.0077 22.3111 24.0077 22.6667C24.0077 23.0222 23.8657 23.363 23.6133 23.6133C23.363 23.8657 23.0222 24.0077 22.6667 24.0077C22.3111 24.0077 21.9704 23.8657 21.72 23.6133L17.2 19.08C15.3366 20.5426 13.0355 21.3363 10.6667 21.3333C4.77563 21.3333 0 16.5577 0 10.6667C0 4.77563 4.77563 0 10.6667 0C16.5577 0 21.3333 4.77563 21.3333 10.6667C21.3363 13.0355 20.5426 15.3366 19.08 17.2ZM10.6667 2.66667C6.24839 2.66667 2.66667 6.24839 2.66667 10.6667C2.66667 15.0849 6.24839 18.6667 10.6667 18.6667C15.0849 18.6667 18.6667 15.0849 18.6667 10.6667C18.6667 6.24839 15.0849 2.66667 10.6667 2.66667Z",
          fill: "white"
        }, void 0, !1, {
          fileName: "app/components/Inputs/search/Search.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Inputs/search/Search.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        id: props.id,
        className: "search_input medium_heading",
        type: "search",
        ...props,
        ref,
        "data-search-input": !0,
        placeholder: "Search for movies or TV series"
      }, void 0, !1, {
        fileName: "app/components/Inputs/search/Search.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Inputs/search/Search.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this)
);
SearchInput.displayName = "Search Input";

// app/constants/errors.ts
var errors_default = {
  EMPTY_EMAIL: "can't be empty",
  INVALID_EMAIL: "Invalid email",
  NO_ERROR: ""
};

// app/utils/helper.ts
function validateEmail(email) {
  return email ? /^[a-zA-Z][^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email) ? errors_default.NO_ERROR : errors_default.INVALID_EMAIL : errors_default.EMPTY_EMAIL;
}

// app/components/Inputs/text/TextInput.tsx
var import_react4 = require("react"), import_react5 = require("react"), import_react6 = __toESM(require("react"));

// app/components/Inputs/text/styles.css
var styles_default2 = "/build/_assets/styles-E75LOUBT.css";

// app/components/Inputs/text/TextInput.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default2 }], TextInput = import_react6.default.forwardRef(
  ({ children, ...props }, ref) => {
    let [error, setError] = (0, import_react5.useState)(""), innerRef = (0, import_react4.useRef)(null), doValidation = () => {
      var _a;
      let currentInputText = (_a = innerRef.current) == null ? void 0 : _a.value;
      if (currentInputText !== void 0 && props.validationFn) {
        let result = props.validationFn(currentInputText);
        setError(result);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
      className: "input_container",
      htmlFor: props.id,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          id: "email",
          className: "input_field small_heading",
          type: props.type,
          ref: innerRef,
          ...props,
          placeholder: props.placeholder,
          required: !0,
          "data-testid": "text-input",
          onFocus: doValidation,
          onChange: doValidation
        }, void 0, !1, {
          fileName: "app/components/Inputs/text/TextInput.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          "data-testid": "input-error",
          className: "text-message",
          children: error
        }, void 0, !1, {
          fileName: "app/components/Inputs/text/TextInput.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/Inputs/text/TextInput.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this);
  }
);
TextInput.displayName = "Text Input";

// app/components/buttons/styles.css
var styles_default3 = "/build/_assets/styles-LWFDD66L.css";

// app/components/buttons/LoginButton.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links4 = () => [{ rel: "stylesheet", href: styles_default3 }], LoginButton = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
  className: "btn small_normal_text",
  "data-testid": "login-button",
  children: props.children
}, void 0, !1, {
  fileName: "app/components/buttons/LoginButton.tsx",
  lineNumber: 12,
  columnNumber: 5
}, this);

// app/pages/home/thumbnail/Thumbnail.tsx
var import_react7 = require("react");

// app/components/bookmark-icons/idle-icon/IdleIcon.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), IdleIcon = ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: "12",
    height: "14",
    xmlns: "http://www.w3.org/2000/svg",
    "data-testid": "idle-icon",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z",
      strokeWidth: "1.5",
      fill: "none"
    }, void 0, !1, {
      fileName: "app/components/bookmark-icons/idle-icon/IdleIcon.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/bookmark-icons/idle-icon/IdleIcon.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/bookmark-icons/idle-icon/IdleIcon.tsx",
  lineNumber: 8,
  columnNumber: 5
}, this);

// app/components/bookmark-icons/active-icon/ActiveIcon.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ActiveIcon = ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: "12",
    height: "14",
    xmlns: "http://www.w3.org/2000/svg",
    "data-testid": "active-icon",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z",
      fill: "#FFF"
    }, void 0, !1, {
      fileName: "app/components/bookmark-icons/active-icon/ActiveIcon.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/bookmark-icons/active-icon/ActiveIcon.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/bookmark-icons/active-icon/ActiveIcon.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this);

// app/pages/home/thumbnail/styles.css
var styles_default4 = "/build/_assets/styles-BOS4AQVI.css";

// app/pages/home/thumbnail/Thumbnail.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links5 = () => [{ rel: "stylesheet", href: styles_default4 }], Thumbnail = ({ name, src }) => {
  let [bookmarked, setbookmarked] = (0, import_react7.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "thumbnail-container",
    "data-testid": "thumbnail",
    onClick: () => setbookmarked(!0),
    children: [
      bookmarked ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActiveIcon, {
        className: "bookmark-icon active-bookmark"
      }, void 0, !1, {
        fileName: "app/pages/home/thumbnail/Thumbnail.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IdleIcon, {
        className: "bookmark-icon idle-bookmark"
      }, void 0, !1, {
        fileName: "app/pages/home/thumbnail/Thumbnail.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        alt: name,
        src,
        className: "thumbnail-img"
      }, void 0, !1, {
        fileName: "app/pages/home/thumbnail/Thumbnail.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "hover-container",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "controls-wrapper",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
              width: "30",
              height: "30",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                d: "M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z",
                fill: "#fff"
              }, void 0, !1, {
                fileName: "app/pages/home/thumbnail/Thumbnail.tsx",
                lineNumber: 31,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/pages/home/thumbnail/Thumbnail.tsx",
              lineNumber: 30,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "extra_small_heading",
              children: "Play"
            }, void 0, !1, {
              fileName: "app/pages/home/thumbnail/Thumbnail.tsx",
              lineNumber: 36,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/pages/home/thumbnail/Thumbnail.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/pages/home/thumbnail/Thumbnail.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/pages/home/thumbnail/Thumbnail.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
};

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links6 = () => [
  ...links2(),
  ...links3(),
  ...links4(),
  ...links5()
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchInput, {
        id: "__search_bar_input__"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, {
        type: "email",
        placeholder: "Email Address",
        validationFn: validateEmail
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoginButton, {
        children: "Login to your account"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, {
        name: "earth",
        src: "assets/thumbnails/earths-untouched/regular/medium.jpg"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "9a07ebf7", entry: { module: "/build/entry.client-RKVSGYLS.js", imports: ["/build/_shared/chunk-HOXLABUL.js", "/build/_shared/chunk-IE366Y5W.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4PMO4BG7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-MY3SO7M4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-9A07EBF7.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
