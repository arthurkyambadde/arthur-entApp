import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-IE366Y5W.js";

// app/components/Inputs/search/Search.tsx
var import_react = __toESM(require_react());

// app/components/Inputs/search/styles.css
var styles_default = "/build/_assets/styles-IYIZM2P2.css";

// app/components/Inputs/search/Search.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [{ rel: "stylesheet", href: styles_default }];
var SearchInput = import_react.default.forwardRef(
  ({ children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
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
          }, void 0, false, {
            fileName: "app/components/Inputs/search/Search.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this)
        }, void 0, false, {
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
          "data-search-input": true,
          placeholder: "Search for movies or TV series"
        }, void 0, false, {
          fileName: "app/components/Inputs/search/Search.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/Inputs/search/Search.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this);
  }
);
SearchInput.displayName = "Search Input";

// app/components/button/styles.css
var styles_default2 = "/build/_assets/styles-ZPRPZPDR.css";

// app/components/button/button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links2 = () => [{ rel: "stylesheet", href: styles_default2 }];

// app/components/Inputs/text/TextInput.tsx
var import_react2 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_react4 = __toESM(require_react());

// app/components/Inputs/text/styles.css
var styles_default3 = "/build/_assets/styles-OR45PG77.css";

// app/components/Inputs/text/TextInput.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links3 = () => [{ rel: "stylesheet", href: styles_default3 }];
var TextInput = import_react4.default.forwardRef(
  ({ children, ...props }, ref) => {
    const [error, setError] = (0, import_react3.useState)("");
    const innerRef = (0, import_react2.useRef)(null);
    const doValidation = () => {
      var _a;
      const currentInputText = (_a = innerRef.current) == null ? void 0 : _a.value;
      if (currentInputText !== void 0 && props.validationFn) {
        const result = props.validationFn(currentInputText);
        setError(result);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
      className: "input_container",
      htmlFor: props.id,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          id: "email",
          className: "email_input small_heading",
          type: props.type,
          ref: innerRef,
          ...props,
          placeholder: props.placeholder,
          required: true,
          "data-testid": "text-input",
          onFocus: doValidation,
          onChange: doValidation
        }, void 0, false, {
          fileName: "app/components/Inputs/text/TextInput.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          "data-testid": "input-error",
          className: "text-message",
          children: error
        }, void 0, false, {
          fileName: "app/components/Inputs/text/TextInput.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/Inputs/text/TextInput.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this);
  }
);
TextInput.displayName = "Text Input";

// app/components/logIn/styles.css
var styles_default4 = "/build/_assets/styles-DEQODY4X.css";

// app/components/logIn/login.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links4 = () => [{ rel: "stylesheet", href: styles_default4 }];

// app/routes/index.tsx
var import_react5 = __toESM(require_react());

// app/components/authenticatedApplication/styles.css
var styles_default5 = "/build/_assets/styles-VPTDCAOM.css";

// public/assets/logo.svg
var logo_default = "/build/_assets/logo-BWJKDGBT.svg";

// public/assets/icon-nav-home.svg
var icon_nav_home_default = "/build/_assets/icon-nav-home-4XV5PWD5.svg";

// app/components/authenticatedApplication/authenticatedApplication.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links5 = () => [{ rel: "stylesheet", href: styles_default5 }];
var AuthenticatedApplication = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "authenticated_user",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "navigation_bar",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "category_icons--container",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: logo_default
                  }, void 0, false, {
                    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: icon_nav_home_default
                  }, void 0, false, {
                    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                lineNumber: 17,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: "two"
              }, void 0, false, {
                fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                lineNumber: 21,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
            lineNumber: 16,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: "second"
          }, void 0, false, {
            fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
            lineNumber: 23,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "category_container",
        children: "you"
      }, void 0, false, {
        fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
};

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links6 = () => [...links(), ...links5(), ...links2(), ...links4(), ...links3()];
function Index() {
  const [isLoggedIn, setIsLoggedIn] = (0, import_react5.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    className: "app_container",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticatedApplication, {}, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 30,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links6 as links
};
//# sourceMappingURL=/build/routes/index-IFUVD6CE.js.map
