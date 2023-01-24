import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-DDCATEM7.js";

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React5 = require_react();
        var ReactSharedInternals = React5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState5 = React5.useState, useEffect = React5.useEffect, useLayoutEffect = React5.useLayoutEffect, useDebugValue2 = React5.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React5.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState5({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue2(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
        var useSyncExternalStore$2 = React5.useSyncExternalStore !== void 0 ? React5.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React5 = require_react();
        var shim = require_shim();
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useSyncExternalStore = shim.useSyncExternalStore;
        var useRef2 = React5.useRef, useEffect = React5.useEffect, useMemo = React5.useMemo, useDebugValue2 = React5.useDebugValue;
        function useSyncExternalStoreWithSelector2(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef2(null);
          var inst;
          if (instRef.current === null) {
            inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else {
            inst = instRef.current;
          }
          var _useMemo = useMemo(function() {
            var hasMemo = false;
            var memoizedSnapshot;
            var memoizedSelection;
            var memoizedSelector = function(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                var _nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0) {
                  if (inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, _nextSelection)) {
                      memoizedSelection = currentSelection;
                      return currentSelection;
                    }
                  }
                }
                memoizedSelection = _nextSelection;
                return _nextSelection;
              }
              var prevSnapshot = memoizedSnapshot;
              var prevSelection = memoizedSelection;
              if (objectIs(prevSnapshot, nextSnapshot)) {
                return prevSelection;
              }
              var nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                return prevSelection;
              }
              memoizedSnapshot = nextSnapshot;
              memoizedSelection = nextSelection;
              return nextSelection;
            };
            var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
            var getSnapshotWithSelector = function() {
              return memoizedSelector(getSnapshot());
            };
            var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            };
            return [getSnapshotWithSelector, getServerSnapshotWithSelector];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
          var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
          useEffect(function() {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue2(value);
          return value;
        }
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

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
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var links2 = () => [{ rel: "stylesheet", href: styles_default2 }];

// app/components/thumbnail/thumbnail.tsx
var import_react2 = __toESM(require_react());

// app/components/thumbnail/styles.css
var styles_default3 = "/build/_assets/styles-KCKVKCVI.css";

// public/assets/iconPlay.svg
var iconPlay_default = "/build/_assets/iconPlay-NBIN7PHU.svg";

// app/components/bookmark-icons/idle-icon/IdleIcon.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var IdleIcon = ({ className }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {
    className,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", {
      width: "12",
      height: "14",
      xmlns: "http://www.w3.org/2000/svg",
      "data-testid": "idle-icon",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", {
        d: "m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z",
        strokeWidth: "1.5",
        fill: "none"
      }, void 0, false, {
        fileName: "app/components/bookmark-icons/idle-icon/IdleIcon.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/bookmark-icons/idle-icon/IdleIcon.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/bookmark-icons/idle-icon/IdleIcon.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};

// app/components/bookmark-icons/active-icon/ActiveIcon.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var ActiveIcon = ({ className }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {
    className,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", {
      width: "12",
      height: "14",
      xmlns: "http://www.w3.org/2000/svg",
      "data-testid": "active-icon",
      fill: "white",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", {
        d: "M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z",
        fill: "#FFF"
      }, void 0, false, {
        fileName: "app/components/bookmark-icons/active-icon/ActiveIcon.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/bookmark-icons/active-icon/ActiveIcon.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/bookmark-icons/active-icon/ActiveIcon.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};

// app/components/thumbnail/thumbnail.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var links3 = () => [{ rel: "stylesheet", href: styles_default3 }];
var Thumbnail = (props) => {
  const {} = props;
  const [isHovering, setIsHovering] = (0, import_react2.useState)(false);
  const [bookmarked, setbookmarked] = (0, import_react2.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", {
    "data-testid": "thumbnail",
    className: "thumbnail_container",
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onClick: () => setbookmarked(!bookmarked),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("picture", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("source", {
            media: "(min-width:768px)",
            srcSet: props.large
          }, void 0, false, {
            fileName: "app/components/thumbnail/thumbnail.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("source", {
            media: "(min-width:465px)",
            srcSet: props.medium
          }, void 0, false, {
            fileName: "app/components/thumbnail/thumbnail.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", {
            alt: props.title,
            src: props.small,
            className: "thumbnail_image",
            "data-testid": "thumbnail-img"
          }, void 0, false, {
            fileName: "app/components/thumbnail/thumbnail.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 47,
        columnNumber: 7
      }, this),
      isHovering && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", {
        "data-testid": "playIcon",
        className: "play_icon--container",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", {
            src: iconPlay_default,
            alt: "thumbnail",
            className: "image"
          }, void 0, false, {
            fileName: "app/components/thumbnail/thumbnail.tsx",
            lineNumber: 60,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", {
            className: "play_tag",
            children: "Play"
          }, void 0, false, {
            fileName: "app/components/thumbnail/thumbnail.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      bookmarked ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ActiveIcon, {
        className: "bookmark"
      }, void 0, false, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(IdleIcon, {
        className: "bookmark",
        "data-testid": "bookmark_icon"
      }, void 0, false, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", {
        className: "container_bg hidden"
      }, void 0, false, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/thumbnail/thumbnail.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
};

// app/components/Inputs/text/TextInput.tsx
var import_react3 = __toESM(require_react());
var import_react4 = __toESM(require_react());
var import_react5 = __toESM(require_react());

// app/components/Inputs/text/styles.css
var styles_default4 = "/build/_assets/styles-OR45PG77.css";

// app/components/Inputs/text/TextInput.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var links4 = () => [{ rel: "stylesheet", href: styles_default4 }];
var TextInput = import_react5.default.forwardRef(
  ({ children, ...props }, ref) => {
    const [error, setError] = (0, import_react4.useState)("");
    const innerRef = (0, import_react3.useRef)(null);
    const doValidation = () => {
      var _a;
      const currentInputText = (_a = innerRef.current) == null ? void 0 : _a.value;
      if (currentInputText !== void 0 && props.validationFn) {
        const result = props.validationFn(currentInputText);
        setError(result);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", {
      className: "input_container",
      htmlFor: props.id,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", {
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
var styles_default5 = "/build/_assets/styles-DEQODY4X.css";

// app/utils/helper.ts
var showActiveIcon = (event) => {
  var _a;
  const formerActiveIcon = document.querySelector(".active_icon");
  formerActiveIcon == null ? void 0 : formerActiveIcon.classList.remove("active_icon");
  formerActiveIcon == null ? void 0 : formerActiveIcon.classList.add("icon");
  const iconId = event.currentTarget.id;
  const iconButton = (_a = document.getElementById(iconId)) == null ? void 0 : _a.firstElementChild;
  iconButton == null ? void 0 : iconButton.classList.add("active_icon");
  iconButton == null ? void 0 : iconButton.classList.remove("icon");
  console.log(iconButton);
};
var removeActiveIcon = () => {
  const formerActiveIcon = document.querySelector(".active_icon");
  formerActiveIcon == null ? void 0 : formerActiveIcon.classList.remove("active_icon");
  formerActiveIcon == null ? void 0 : formerActiveIcon.classList.add("icon");
};

// app/components/logIn/login.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var links5 = () => [{ rel: "stylesheet", href: styles_default5 }];

// app/routes/index.tsx
var import_react8 = __toESM(require_react());

// app/components/authenticatedApplication/authenticatedApplication.tsx
var import_react7 = __toESM(require_react());

// app/components/authenticatedApplication/styles.css
var styles_default6 = "/build/_assets/styles-HEITANDX.css";

// public/assets/logo.svg
var logo_default = "/build/_assets/logo-BWJKDGBT.svg";

// public/assets/image-avatar.png
var image_avatar_default = "/build/_assets/image-avatar-GNC22TMZ.png";

// app/components/bookmark-icons/bookmark-icon/BookmarkIcon.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var BookmarkIcon = ({ className }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
    className,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", {
      width: "17",
      height: "20",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", {
        d: "M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
      }, void 0, false, {
        fileName: "app/components/bookmark-icons/bookmark-icon/BookmarkIcon.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/bookmark-icons/bookmark-icon/BookmarkIcon.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/bookmark-icons/bookmark-icon/BookmarkIcon.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};

// app/components/bookmark-icons/series-icon/SeriesIcon.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
var SeriesIcon = ({ className }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
    className,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("svg", {
      width: "20",
      height: "20",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", {
        d: "M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
      }, void 0, false, {
        fileName: "app/components/bookmark-icons/series-icon/SeriesIcon.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/bookmark-icons/series-icon/SeriesIcon.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/bookmark-icons/series-icon/SeriesIcon.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};

// app/components/bookmark-icons/movies-icon/MoviesIcon.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
var MoviesIcon = ({ className }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", {
    className,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", {
      width: "20",
      height: "20",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", {
        d: "M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
      }, void 0, false, {
        fileName: "app/components/bookmark-icons/movies-icon/MoviesIcon.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/bookmark-icons/movies-icon/MoviesIcon.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/bookmark-icons/movies-icon/MoviesIcon.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};

// app/components/bookmark-icons/trending-icon/TrendingIcon.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
var TrendingIcon = ({ className }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", {
    className,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", {
      width: "20",
      height: "20",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", {
        d: "M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
      }, void 0, false, {
        fileName: "app/components/bookmark-icons/trending-icon/TrendingIcon.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/bookmark-icons/trending-icon/TrendingIcon.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/bookmark-icons/trending-icon/TrendingIcon.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};

// app/utils/data.ts
var icons = [
  { id: "1", icon: TrendingIcon, name: "trending" },
  { id: "2", icon: MoviesIcon, name: "movies" },
  { id: "3", icon: SeriesIcon, name: "series" },
  { id: "4", icon: BookmarkIcon, name: "bookmark" }
];

// public/assets/thumbnailDot.svg
var thumbnailDot_default = "/build/_assets/thumbnailDot-5XOQFNQZ.svg";

// node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => listeners.clear();
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
};
var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

// node_modules/zustand/esm/index.mjs
var import_react6 = __toESM(require_react(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);
var { useSyncExternalStoreWithSelector } = import_with_selector.default;
function useStore(api, selector = api.getState, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  (0, import_react6.useDebugValue)(slice);
  return slice;
}
var createImpl = (createState) => {
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
var create = (createState) => createState ? createImpl(createState) : createImpl;

// public/data.json
var data_default = [
  {
    title: "Beyond Earth",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
        large: "./assets/thumbnails/beyond-earth/trending/large.jpg"
      },
      regular: {
        small: "./assets/thumbnails/beyond-earth/regular/small.jpg",
        medium: "./assets/thumbnails/beyond-earth/regular/medium.jpg",
        large: "./assets/thumbnails/beyond-earth/regular/large.jpg"
      }
    },
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true
  },
  {
    title: "Bottom Gear",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/bottom-gear/trending/small.jpg",
        large: "./assets/thumbnails/bottom-gear/trending/large.jpg"
      },
      regular: {
        small: "./assets/thumbnails/bottom-gear/regular/small.jpg",
        medium: "./assets/thumbnails/bottom-gear/regular/medium.jpg",
        large: "./assets/thumbnails/bottom-gear/regular/large.jpg"
      }
    },
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true
  },
  {
    title: "Undiscovered Cities",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/undiscovered-cities/trending/small.jpg",
        large: "./assets/thumbnails/undiscovered-cities/trending/large.jpg"
      },
      regular: {
        small: "./assets/thumbnails/undiscovered-cities/regular/small.jpg",
        medium: "./assets/thumbnails/undiscovered-cities/regular/medium.jpg",
        large: "./assets/thumbnails/undiscovered-cities/regular/large.jpg"
      }
    },
    year: 2019,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: true
  },
  {
    title: "1998",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/1998/trending/small.jpg",
        large: "./assets/thumbnails/1998/trending/large.jpg"
      },
      regular: {
        small: "./assets/thumbnails/1998/regular/small.jpg",
        medium: "./assets/thumbnails/1998/regular/medium.jpg",
        large: "./assets/thumbnails/1998/regular/large.jpg"
      }
    },
    year: 2021,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: true
  },
  {
    title: "Dark Side of the Moon",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/dark-side-of-the-moon/trending/small.jpg",
        large: "./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg"
      },
      regular: {
        small: "./assets/thumbnails/dark-side-of-the-moon/regular/small.jpg",
        medium: "./assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
        large: "./assets/thumbnails/dark-side-of-the-moon/regular/large.jpg"
      }
    },
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: true,
    isTrending: true
  },
  {
    title: "The Great Lands",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-great-lands/regular/small.jpg",
        medium: "./assets/thumbnails/the-great-lands/regular/medium.jpg",
        large: "./assets/thumbnails/the-great-lands/regular/large.jpg"
      }
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "The Diary",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-diary/regular/small.jpg",
        medium: "./assets/thumbnails/the-diary/regular/medium.jpg",
        large: "./assets/thumbnails/the-diary/regular/large.jpg"
      }
    },
    year: 2019,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "Earth\u2019s Untouched",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/earths-untouched/regular/small.jpg",
        medium: "./assets/thumbnails/earths-untouched/regular/medium.jpg",
        large: "./assets/thumbnails/earths-untouched/regular/large.jpg"
      }
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false
  },
  {
    title: "No Land Beyond",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/no-land-beyond/regular/small.jpg",
        medium: "./assets/thumbnails/no-land-beyond/regular/medium.jpg",
        large: "./assets/thumbnails/no-land-beyond/regular/large.jpg"
      }
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "During the Hunt",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/during-the-hunt/regular/small.jpg",
        medium: "./assets/thumbnails/during-the-hunt/regular/medium.jpg",
        large: "./assets/thumbnails/during-the-hunt/regular/large.jpg"
      }
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "Autosport the Series",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/autosport-the-series/regular/small.jpg",
        medium: "./assets/thumbnails/autosport-the-series/regular/medium.jpg",
        large: "./assets/thumbnails/autosport-the-series/regular/large.jpg"
      }
    },
    year: 2016,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "Same Answer II",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/same-answer-2/regular/small.jpg",
        medium: "./assets/thumbnails/same-answer-2/regular/medium.jpg",
        large: "./assets/thumbnails/same-answer-2/regular/large.jpg"
      }
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "Below Echo",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/below-echo/regular/small.jpg",
        medium: "./assets/thumbnails/below-echo/regular/medium.jpg",
        large: "./assets/thumbnails/below-echo/regular/large.jpg"
      }
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "The Rockies",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-rockies/regular/small.jpg",
        medium: "./assets/thumbnails/the-rockies/regular/medium.jpg",
        large: "./assets/thumbnails/the-rockies/regular/large.jpg"
      }
    },
    year: 2015,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false
  },
  {
    title: "Relentless",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/relentless/regular/small.jpg",
        medium: "./assets/thumbnails/relentless/regular/medium.jpg",
        large: "./assets/thumbnails/relentless/regular/large.jpg"
      }
    },
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false
  },
  {
    title: "Community of Ours",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/community-of-ours/regular/small.jpg",
        medium: "./assets/thumbnails/community-of-ours/regular/medium.jpg",
        large: "./assets/thumbnails/community-of-ours/regular/large.jpg"
      }
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "Van Life",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/van-life/regular/small.jpg",
        medium: "./assets/thumbnails/van-life/regular/medium.jpg",
        large: "./assets/thumbnails/van-life/regular/large.jpg"
      }
    },
    year: 2015,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "The Heiress",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-heiress/regular/small.jpg",
        medium: "./assets/thumbnails/the-heiress/regular/medium.jpg",
        large: "./assets/thumbnails/the-heiress/regular/large.jpg"
      }
    },
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false
  },
  {
    title: "Off the Track",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/off-the-track/regular/small.jpg",
        medium: "./assets/thumbnails/off-the-track/regular/medium.jpg",
        large: "./assets/thumbnails/off-the-track/regular/large.jpg"
      }
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false
  },
  {
    title: "Whispering Hill",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/whispering-hill/regular/small.jpg",
        medium: "./assets/thumbnails/whispering-hill/regular/medium.jpg",
        large: "./assets/thumbnails/whispering-hill/regular/large.jpg"
      }
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "112",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/112/regular/small.jpg",
        medium: "./assets/thumbnails/112/regular/medium.jpg",
        large: "./assets/thumbnails/112/regular/large.jpg"
      }
    },
    year: 2013,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "Lone Heart",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/lone-heart/regular/small.jpg",
        medium: "./assets/thumbnails/lone-heart/regular/medium.jpg",
        large: "./assets/thumbnails/lone-heart/regular/large.jpg"
      }
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: true,
    isTrending: false
  },
  {
    title: "Production Line",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/production-line/regular/small.jpg",
        medium: "./assets/thumbnails/production-line/regular/medium.jpg",
        large: "./assets/thumbnails/production-line/regular/large.jpg"
      }
    },
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "Dogs",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/dogs/regular/small.jpg",
        medium: "./assets/thumbnails/dogs/regular/medium.jpg",
        large: "./assets/thumbnails/dogs/regular/large.jpg"
      }
    },
    year: 2016,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false
  },
  {
    title: "Asia in 24 Days",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/asia-in-24-days/regular/small.jpg",
        medium: "./assets/thumbnails/asia-in-24-days/regular/medium.jpg",
        large: "./assets/thumbnails/asia-in-24-days/regular/large.jpg"
      }
    },
    year: 2020,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "The Tasty Tour",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-tasty-tour/regular/small.jpg",
        medium: "./assets/thumbnails/the-tasty-tour/regular/medium.jpg",
        large: "./assets/thumbnails/the-tasty-tour/regular/large.jpg"
      }
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "Darker",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/darker/regular/small.jpg",
        medium: "./assets/thumbnails/darker/regular/medium.jpg",
        large: "./assets/thumbnails/darker/regular/large.jpg"
      }
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false
  },
  {
    title: "Unresolved Cases",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/unresolved-cases/regular/small.jpg",
        medium: "./assets/thumbnails/unresolved-cases/regular/medium.jpg",
        large: "./assets/thumbnails/unresolved-cases/regular/large.jpg"
      }
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false
  },
  {
    title: "Mission: Saturn",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/mission-saturn/regular/small.jpg",
        medium: "./assets/thumbnails/mission-saturn/regular/medium.jpg",
        large: "./assets/thumbnails/mission-saturn/regular/large.jpg"
      }
    },
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false
  }
];

// app/store/data.ts
var useMovieDataStore = create((set) => {
  return {
    data: data_default,
    getBookMarkedMovies: () => {
      return data_default.filter((movie) => movie.isBookmarked);
    },
    getTrendingMovies: () => {
      return data_default.filter((movie) => movie.isTrending);
    }
  };
});

// app/components/authenticatedApplication/trendingMovies.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
var TrendingMovies = () => {
  const storeData = useMovieDataStore((state) => state.data);
  const data = storeData.filter((item) => item.isTrending);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", {
          className: "category_tag",
          children: "Trending"
        }, void 0, false, {
          fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", {
          className: "trending_movies--container",
          children: data.map((item) => {
            var _a, _b, _c, _d, _e, _f;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", {
              className: "thumbnail_wrapper",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Thumbnail, {
                  medium: (_b = (_a = item.thumbnail) == null ? void 0 : _a.regular) == null ? void 0 : _b.medium,
                  large: (_d = (_c = item.thumbnail) == null ? void 0 : _c.regular) == null ? void 0 : _d.large,
                  small: (_f = (_e = item.thumbnail) == null ? void 0 : _e.regular) == null ? void 0 : _f.small,
                  title: item.title
                }, void 0, false, {
                  fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                  lineNumber: 19,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", {
                  className: "trending_movie--details",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", {
                      className: "trending_movie--detailsContainer",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", {
                          className: "trending_movie--detailTag",
                          children: item.year
                        }, void 0, false, {
                          fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                          lineNumber: 27,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", {
                          className: "trending_movie--detailTag",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", {
                            src: thumbnailDot_default
                          }, void 0, false, {
                            fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                          lineNumber: 28,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", {
                          className: "trending_movie--detailTag",
                          children: item.category
                        }, void 0, false, {
                          fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                          lineNumber: 31,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", {
                          className: "trending_movie--detailTag",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", {
                            src: thumbnailDot_default
                          }, void 0, false, {
                            fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                            lineNumber: 33,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                          lineNumber: 32,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", {
                          className: "trending_movie--detailTag",
                          children: item.rating
                        }, void 0, false, {
                          fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                          lineNumber: 35,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                      lineNumber: 26,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", {
                      className: "trending_movie--name",
                      children: item.title
                    }, void 0, false, {
                      fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                      lineNumber: 37,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                  lineNumber: 25,
                  columnNumber: 15
                }, this)
              ]
            }, item.title, true, {
              fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
              lineNumber: 18,
              columnNumber: 13
            }, this);
          })
        }, void 0, false, {
          fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};

// app/components/authenticatedApplication/selectedMovies.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
var SelectedMovies = () => {
  const data = useMovieDataStore((state) => state.data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", {
          className: "category_tag",
          children: "Movies"
        }, void 0, false, {
          fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
          lineNumber: 14,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
          className: "recommended_List--container",
          children: data.map((item) => {
            var _a, _b, _c, _d, _e, _f;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
              className: "recommended_thumbnail--wrapper",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
                  className: "recommened_thumbnail--ImageContainer",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Thumbnail, {
                    medium: (_b = (_a = item.thumbnail) == null ? void 0 : _a.regular) == null ? void 0 : _b.medium,
                    large: (_d = (_c = item.thumbnail) == null ? void 0 : _c.regular) == null ? void 0 : _d.large,
                    small: (_f = (_e = item.thumbnail) == null ? void 0 : _e.regular) == null ? void 0 : _f.small,
                    title: item.title
                  }, void 0, false, {
                    fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                  lineNumber: 18,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
                  className: "recommended_thumbnail",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
                    className: "recommended_thumbnail--detailWrapper",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: item.year
                      }, void 0, false, {
                        fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                        lineNumber: 28,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", {
                          src: thumbnailDot_default
                        }, void 0, false, {
                          fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                          lineNumber: 30,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                        lineNumber: 29,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: item.category
                      }, void 0, false, {
                        fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                        lineNumber: 32,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", {
                          src: thumbnailDot_default
                        }, void 0, false, {
                          fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                          lineNumber: 34,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                        lineNumber: 33,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: item.rating
                      }, void 0, false, {
                        fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                        lineNumber: 36,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                  lineNumber: 26,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", {
                  className: "recommended_thumbnail--name",
                  children: item.title
                }, void 0, false, {
                  fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                  lineNumber: 39,
                  columnNumber: 15
                }, this)
              ]
            }, item.title, true, {
              fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
              lineNumber: 17,
              columnNumber: 13
            }, this);
          })
        }, void 0, false, {
          fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
};

// app/components/authenticatedApplication/selectedTVSeries.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
var SelectedTVSeries = () => {
  const data = useMovieDataStore((state) => state.data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", {
          className: "category_tag",
          children: "TV Series"
        }, void 0, false, {
          fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", {
          className: "recommended_List--container",
          children: [
            " ",
            data.map((item) => {
              var _a, _b, _c, _d, _e, _f;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", {
                className: "recommended_thumbnail--wrapper",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", {
                    className: "recommened_thumbnail--ImageContainer",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Thumbnail, {
                      medium: (_b = (_a = item.thumbnail) == null ? void 0 : _a.regular) == null ? void 0 : _b.medium,
                      large: (_d = (_c = item.thumbnail) == null ? void 0 : _c.regular) == null ? void 0 : _d.large,
                      small: (_f = (_e = item.thumbnail) == null ? void 0 : _e.regular) == null ? void 0 : _f.small,
                      title: item.title
                    }, void 0, false, {
                      fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                      lineNumber: 19,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                    lineNumber: 18,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", {
                    className: "recommended_thumbnail",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", {
                      className: "recommended_thumbnail--detailWrapper",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: item.year
                        }, void 0, false, {
                          fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                          lineNumber: 28,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", {
                            src: thumbnailDot_default
                          }, void 0, false, {
                            fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                          lineNumber: 29,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: item.category
                        }, void 0, false, {
                          fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                          lineNumber: 32,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", {
                            src: thumbnailDot_default
                          }, void 0, false, {
                            fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                            lineNumber: 34,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                          lineNumber: 33,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: item.rating
                        }, void 0, false, {
                          fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                          lineNumber: 36,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                      lineNumber: 27,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                    lineNumber: 26,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", {
                    className: "recommended_thumbnail--name",
                    children: item.title
                  }, void 0, false, {
                    fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                    lineNumber: 39,
                    columnNumber: 15
                  }, this)
                ]
              }, item.title, true, {
                fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                lineNumber: 17,
                columnNumber: 13
              }, this);
            })
          ]
        }, void 0, true, {
          fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
          lineNumber: 14,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
};

// app/components/authenticatedApplication/recommended.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
var Recommended = () => {
  const data = useMovieDataStore((state) => state.data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", {
        className: "category_tag",
        children: "Recommended for you"
      }, void 0, false, {
        fileName: "app/components/authenticatedApplication/recommended.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", {
        className: "recommended_List--container",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", {
              className: "recommended_List--container",
              children: data.map((item) => {
                var _a, _b, _c, _d, _e, _f;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", {
                  className: "recommended_thumbnail--wrapper",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", {
                      className: "recommened_thumbnail--ImageContainer",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Thumbnail, {
                        medium: (_b = (_a = item.thumbnail) == null ? void 0 : _a.regular) == null ? void 0 : _b.medium,
                        large: (_d = (_c = item.thumbnail) == null ? void 0 : _c.regular) == null ? void 0 : _d.large,
                        small: (_f = (_e = item.thumbnail) == null ? void 0 : _e.regular) == null ? void 0 : _f.small,
                        title: item.title
                      }, void 0, false, {
                        fileName: "app/components/authenticatedApplication/recommended.tsx",
                        lineNumber: 22,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/authenticatedApplication/recommended.tsx",
                      lineNumber: 21,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", {
                      className: "recommended_thumbnail",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", {
                        className: "recommended_thumbnail--detailWrapper",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", {
                            className: "recommended_thumbnail--detail",
                            children: item.year
                          }, void 0, false, {
                            fileName: "app/components/authenticatedApplication/recommended.tsx",
                            lineNumber: 31,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", {
                            className: "recommended_thumbnail--detail",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", {
                              src: thumbnailDot_default
                            }, void 0, false, {
                              fileName: "app/components/authenticatedApplication/recommended.tsx",
                              lineNumber: 33,
                              columnNumber: 27
                            }, this)
                          }, void 0, false, {
                            fileName: "app/components/authenticatedApplication/recommended.tsx",
                            lineNumber: 32,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", {
                            className: "recommended_thumbnail--detail",
                            children: item.category
                          }, void 0, false, {
                            fileName: "app/components/authenticatedApplication/recommended.tsx",
                            lineNumber: 35,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", {
                            className: "recommended_thumbnail--detail",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", {
                              src: thumbnailDot_default
                            }, void 0, false, {
                              fileName: "app/components/authenticatedApplication/recommended.tsx",
                              lineNumber: 37,
                              columnNumber: 27
                            }, this)
                          }, void 0, false, {
                            fileName: "app/components/authenticatedApplication/recommended.tsx",
                            lineNumber: 36,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", {
                            className: "recommended_thumbnail--detail",
                            children: item.rating
                          }, void 0, false, {
                            fileName: "app/components/authenticatedApplication/recommended.tsx",
                            lineNumber: 39,
                            columnNumber: 25
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/components/authenticatedApplication/recommended.tsx",
                        lineNumber: 30,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/authenticatedApplication/recommended.tsx",
                      lineNumber: 29,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", {
                      className: "recommended_thumbnail--name",
                      children: item.title
                    }, void 0, false, {
                      fileName: "app/components/authenticatedApplication/recommended.tsx",
                      lineNumber: 42,
                      columnNumber: 21
                    }, this)
                  ]
                }, item.title, true, {
                  fileName: "app/components/authenticatedApplication/recommended.tsx",
                  lineNumber: 20,
                  columnNumber: 19
                }, this);
              })
            }, void 0, false, {
              fileName: "app/components/authenticatedApplication/recommended.tsx",
              lineNumber: 18,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/components/authenticatedApplication/recommended.tsx",
            lineNumber: 17,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/components/authenticatedApplication/recommended.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/authenticatedApplication/recommended.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/authenticatedApplication/recommended.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
};

// app/components/authenticatedApplication/BookmarkedMovies.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
var BookMarked = () => {
  const storeData = useMovieDataStore((state) => state.data);
  const data = storeData.filter((item) => item.isBookmarked && item.category === "Movie");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", {
          className: "category_tag",
          children: "Bookmarked Movies"
        }, void 0, false, {
          fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", {
          className: "recommended_List--container",
          children: data.map((item) => {
            var _a, _b, _c, _d, _e, _f;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", {
              className: "recommended_thumbnail--wrapper",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", {
                  className: "recommened_thumbnail--ImageContainer",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Thumbnail, {
                    medium: (_b = (_a = item.thumbnail) == null ? void 0 : _a.regular) == null ? void 0 : _b.medium,
                    large: (_d = (_c = item.thumbnail) == null ? void 0 : _c.regular) == null ? void 0 : _d.large,
                    small: (_f = (_e = item.thumbnail) == null ? void 0 : _e.regular) == null ? void 0 : _f.small,
                    title: item.title
                  }, void 0, false, {
                    fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                  lineNumber: 19,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", {
                  className: "recommended_thumbnail",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", {
                    className: "recommended_thumbnail--detailWrapper",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: item.year
                      }, void 0, false, {
                        fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                        lineNumber: 29,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", {
                          src: thumbnailDot_default
                        }, void 0, false, {
                          fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                          lineNumber: 31,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                        lineNumber: 30,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: item.category
                      }, void 0, false, {
                        fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                        lineNumber: 33,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", {
                          src: thumbnailDot_default
                        }, void 0, false, {
                          fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                          lineNumber: 35,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                        lineNumber: 34,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: item.rating
                      }, void 0, false, {
                        fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                        lineNumber: 37,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                  lineNumber: 27,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", {
                  className: "recommended_thumbnail--name",
                  children: item.title
                }, void 0, false, {
                  fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                  lineNumber: 40,
                  columnNumber: 15
                }, this)
              ]
            }, item.title, true, {
              fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
              lineNumber: 18,
              columnNumber: 13
            }, this);
          })
        }, void 0, false, {
          fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};

// app/components/authenticatedApplication/authenticatedApplication.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
var links6 = () => [{ rel: "stylesheet", href: styles_default6 }];
var AuthenticatedApplication = () => {
  const listItems = icons.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", {
    className: "icon_button",
    onClick: (event) => {
      setCategory(item.name);
      showActiveIcon(event);
    },
    id: item.id,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(item.icon, {
      className: "icon"
    }, void 0, false, {
      fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, item.id, false, {
    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this));
  const [category, setCategory] = (0, import_react7.useState)("bookmark");
  let categories;
  if (category === "trending") {
    categories = /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TrendingMovies, {}, void 0, false, {
            fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
            lineNumber: 43,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Recommended, {}, void 0, false, {
            fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
            lineNumber: 44,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this);
  } else if (category === "movies") {
    categories = /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SelectedMovies, {}, void 0, false, {
      fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
      lineNumber: 49,
      columnNumber: 18
    }, this);
  } else if (category === "series") {
    categories = /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SelectedTVSeries, {}, void 0, false, {
      fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
      lineNumber: 51,
      columnNumber: 18
    }, this);
  } else if (category === "bookmark") {
    categories = /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(BookMarked, {}, void 0, false, {
      fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
      lineNumber: 53,
      columnNumber: 18
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", {
    className: "authenticated_user",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", {
        className: "navigation_bar",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", {
            className: "category_icons--container",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", {
                className: "logo",
                onClick: () => {
                  setCategory("trending");
                  removeActiveIcon();
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", {
                  src: logo_default
                }, void 0, false, {
                  fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                  lineNumber: 67,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                lineNumber: 60,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", {
                className: "navigation_icons",
                children: listItems
              }, void 0, false, {
                fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                lineNumber: 69,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", {
              src: image_avatar_default
            }, void 0, false, {
              fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
              lineNumber: 72,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
            lineNumber: 71,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", {
        className: "category_container",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SearchInput, {}, void 0, false, {
            fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
            lineNumber: 76,
            columnNumber: 9
          }, this),
          categories
        ]
      }, void 0, true, {
        fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
        lineNumber: 75,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
};

// app/routes/index.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
var links7 = () => [
  ...links(),
  ...links6(),
  ...links2(),
  ...links5(),
  ...links4(),
  ...links3()
];
function Index() {
  const [isLoggedIn, setIsLoggedIn] = (0, import_react8.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    className: "app_container",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AuthenticatedApplication, {}, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links7 as links
};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/routes/index-TNGHPIID.js.map
