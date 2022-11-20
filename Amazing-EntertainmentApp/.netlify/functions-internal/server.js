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
var shared_default = "/build/_assets/shared-UILCKXNK.css";

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
  links: () => links4
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

// app/components/Inputs/email/Email.tsx
var import_react4 = require("react"), import_react5 = require("react"), import_react6 = __toESM(require("react"));

// app/components/Inputs/email/styles.css
var styles_default2 = "/build/_assets/styles-HIXJVU3A.css";

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

// app/components/Inputs/email/Email.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default2 }], EmailInput = import_react6.default.forwardRef(
  ({ children, ...props }, ref) => {
    let [error, setError] = (0, import_react5.useState)(""), innerRef = (0, import_react4.useRef)(null), doValidation = () => {
      var _a;
      let currentInputText = (_a = innerRef.current) == null ? void 0 : _a.value;
      if (currentInputText !== void 0) {
        let result = validateEmail(currentInputText);
        setError(result);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
      className: "email_container",
      htmlFor: props.id,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          id: "email",
          className: "email_input small_heading",
          type: "email",
          ref: innerRef,
          ...props,
          placeholder: "Email address",
          required: !0,
          "data-testid": "email-input",
          onFocus: doValidation,
          onChange: doValidation
        }, void 0, !1, {
          fileName: "app/components/Inputs/email/Email.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          "data-testid": "email-error",
          className: "text-message",
          children: error
        }, void 0, !1, {
          fileName: "app/components/Inputs/email/Email.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/Inputs/email/Email.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this);
  }
);
EmailInput.displayName = "Email Input";

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links4 = () => [...links2(), ...links3()];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchInput, {
        id: "__search_bar_input__"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailInput, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "0795178a", entry: { module: "/build/entry.client-6ALRIWEB.js", imports: ["/build/_shared/chunk-QFI44WFR.js", "/build/_shared/chunk-IE366Y5W.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NRJR254O.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-7CZM3OA4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-0795178A.js" };

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
