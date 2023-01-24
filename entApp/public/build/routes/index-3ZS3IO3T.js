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

// app/components/Inputs/email/Email.tsx
var import_react2 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_react4 = __toESM(require_react());

// app/components/Inputs/email/styles.css
var styles_default2 = "/build/_assets/styles-MBWYSQTL.css";

// app/constants/errors.ts
var errors_default = {
  EMPTY_EMAIL: `can't be empty`,
  INVALID_EMAIL: "Invalid email",
  NO_ERROR: ""
};

// app/utils/helper.ts
function validateEmail(email) {
  if (!email) {
    return errors_default.EMPTY_EMAIL;
  }
  const pattern = /^[a-zA-Z][^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!pattern.test(email)) {
    return errors_default.INVALID_EMAIL;
  }
  return errors_default.NO_ERROR;
}

// app/components/Inputs/email/Email.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links2 = () => [{ rel: "stylesheet", href: styles_default2 }];
var EmailInput = import_react4.default.forwardRef(
  ({ children, ...props }, ref) => {
    const [error, setError] = (0, import_react3.useState)("");
    const innerRef = (0, import_react2.useRef)(null);
    const doValidation = () => {
      var _a;
      const currentInputText = (_a = innerRef.current) == null ? void 0 : _a.value;
      if (currentInputText !== void 0) {
        const result = validateEmail(currentInputText);
        setError(result);
      }
    };
    let containerClass = "";
    if (error !== "") {
      containerClass = "red_border";
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
      className: `email_container ${containerClass}`,
      htmlFor: props.id,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          id: "email",
          className: "email_input small_heading",
          type: "email",
          ref: innerRef,
          ...props,
          placeholder: "Email address",
          required: true,
          "data-testid": "email-input",
          onFocus: doValidation,
          onChange: doValidation
        }, void 0, false, {
          fileName: "app/components/Inputs/email/Email.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          "data-testid": "email-error",
          className: "text-message",
          children: error
        }, void 0, false, {
          fileName: "app/components/Inputs/email/Email.tsx",
          lineNumber: 55,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/Inputs/email/Email.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this);
  }
);
EmailInput.displayName = "Email Input";

// app/components/button/styles.css
var styles_default3 = "/build/_assets/styles-ZPRPZPDR.css";

// app/components/button/button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links3 = () => [{ rel: "stylesheet", href: styles_default3 }];
var Button = (props) => {
  const { buttonName } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
    "data-testid": "button_element",
    className: "primary_button",
    children: buttonName
  }, void 0, false, {
    fileName: "app/components/button/button.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
};

// app/components/thumbnail/thumbnail.tsx
var import_react5 = __toESM(require_react());

// app/components/thumbnail/styles.css
var styles_default4 = "/build/_assets/styles-VJJM6V3D.css";

// public/assets/iconPlay.svg
var iconPlay_default = "/build/_assets/iconPlay-NBIN7PHU.svg";

// public/assets/idle-bookmark--icon.svg
var idle_bookmark_icon_default = "/build/_assets/idle-bookmark--icon-ARTICSOO.svg";

// app/components/thumbnail/thumbnail.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links4 = () => [{ rel: "stylesheet", href: styles_default4 }];
var Thumbnail = (props) => {
  const { image } = props;
  const [isHovering, setIsHovering] = (0, import_react5.useState)(false);
  const handleMouseOver = () => {
    var _a, _b;
    (_a = document.querySelector(".container_bg")) == null ? void 0 : _a.classList.add("overlay");
    (_b = document.querySelector(".container_bg")) == null ? void 0 : _b.classList.remove("hidden");
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    var _a, _b;
    (_a = document.querySelector(".container_bg")) == null ? void 0 : _a.classList.add("hidden");
    (_b = document.querySelector(".container_bg")) == null ? void 0 : _b.classList.remove("overlay");
    setIsHovering(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    "data-testid": "thumbnail",
    className: "thumbnail_container",
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: image,
        alt: image,
        className: "thumbnail_image"
      }, void 0, false, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      isHovering && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        "data-testid": "playIcon",
        className: "play_icon--container",
        onMouseOver: handleMouseOver,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: iconPlay_default,
            alt: "thumbnail",
            className: "image"
          }, void 0, false, {
            fileName: "app/components/thumbnail/thumbnail.tsx",
            lineNumber: 44,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "play_tag",
            children: "Play"
          }, void 0, false, {
            fileName: "app/components/thumbnail/thumbnail.tsx",
            lineNumber: 45,
            columnNumber: 17
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 41,
        columnNumber: 30
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: " bookmark_icon",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: idle_bookmark_icon_default,
          alt: "",
          className: "bookmark",
          "data-testid": "bookmark_icon"
        }, void 0, false, {
          fileName: "app/components/thumbnail/thumbnail.tsx",
          lineNumber: 49,
          columnNumber: 8
        }, this)
      }, void 0, false, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 48,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "container_bg hidden"
      }, void 0, false, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 52,
        columnNumber: 8
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/thumbnail/thumbnail.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this);
};

// public/assets/thumbnails/1998/regular/medium.jpg
var medium_default = "/build/_assets/medium-GMKCW3UB.jpg";

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links5 = () => [...links(), ...links2(), ...links3(), ...links4()];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchInput, {
        id: "__search_bar_input__"
      }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailInput, {}, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
        buttonName: "Button"
      }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, {
        image: medium_default
      }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links5 as links
};
//# sourceMappingURL=/build/routes/index-3ZS3IO3T.js.map
