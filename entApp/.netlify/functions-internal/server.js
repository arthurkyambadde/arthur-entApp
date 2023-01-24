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
  future: () => future,
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
var shared_default = "/build/_assets/shared-QQ634MJP.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
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

// app/routes/auth/index.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function authentication() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {
    children: "authentication"
  }, void 0, !1, {
    fileName: "app/routes/auth/index.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
var auth_default = authentication;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links8
});

// app/components/Inputs/search/Search.tsx
var import_react3 = __toESM(require("react"));

// app/components/Inputs/search/styles.css
var styles_default = "/build/_assets/styles-IYIZM2P2.css";

// app/components/Inputs/search/Search.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: styles_default }], SearchInput = import_react3.default.forwardRef(
  ({ children, ...props }, ref) => {
    let { setsearchfield } = props, handleChange = (e) => {
      setsearchfield(e.currentTarget.value);
    };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", {
      className: "search_container",
      htmlFor: props.id,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", {
          className: "search_icon",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.08 17.2L23.6133 21.72C23.8657 21.9704 24.0077 22.3111 24.0077 22.6667C24.0077 23.0222 23.8657 23.363 23.6133 23.6133C23.363 23.8657 23.0222 24.0077 22.6667 24.0077C22.3111 24.0077 21.9704 23.8657 21.72 23.6133L17.2 19.08C15.3366 20.5426 13.0355 21.3363 10.6667 21.3333C4.77563 21.3333 0 16.5577 0 10.6667C0 4.77563 4.77563 0 10.6667 0C16.5577 0 21.3333 4.77563 21.3333 10.6667C21.3363 13.0355 20.5426 15.3366 19.08 17.2ZM10.6667 2.66667C6.24839 2.66667 2.66667 6.24839 2.66667 10.6667C2.66667 15.0849 6.24839 18.6667 10.6667 18.6667C15.0849 18.6667 18.6667 15.0849 18.6667 10.6667C18.6667 6.24839 15.0849 2.66667 10.6667 2.66667Z",
            fill: "white"
          }, void 0, !1, {
            fileName: "app/components/Inputs/search/Search.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/Inputs/search/Search.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", {
          id: props.id,
          className: "search_input medium_heading",
          type: "search",
          ...props,
          ref,
          "data-search-input": !0,
          placeholder: "Search for movies or TV series",
          onChange: handleChange
        }, void 0, !1, {
          fileName: "app/components/Inputs/search/Search.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/Inputs/search/Search.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this);
  }
);
SearchInput.displayName = "Search Input";

// app/components/button/styles.css
var styles_default2 = "/build/_assets/styles-ZPRPZPDR.css";

// app/components/button/button.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default2 }];

// app/components/thumbnail/thumbnail.tsx
var import_react4 = require("react");

// app/components/thumbnail/styles.css
var styles_default3 = "/build/_assets/styles-QXZOYM3Z.css";

// public/assets/iconPlay.svg
var iconPlay_default = "/build/_assets/iconPlay-NBIN7PHU.svg";

// app/components/bookmark-icons/idle-icon/IdleIcon.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), IdleIcon = ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", {
  className,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", {
    width: "12",
    height: "14",
    xmlns: "http://www.w3.org/2000/svg",
    "data-testid": "idle-icon",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", {
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
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), ActiveIcon = ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
  className,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", {
    width: "12",
    height: "14",
    xmlns: "http://www.w3.org/2000/svg",
    "data-testid": "active-icon",
    fill: "white",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", {
      d: "M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z",
      fill: "#FFF"
    }, void 0, !1, {
      fileName: "app/components/bookmark-icons/active-icon/ActiveIcon.tsx",
      lineNumber: 17,
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

// app/components/thumbnail/thumbnail.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links4 = () => [{ rel: "stylesheet", href: styles_default3 }], Thumbnail = (props) => {
  let { bookmarked, addBookmarkedData, movie } = props, [isHovering, setIsHovering] = (0, import_react4.useState)(!1), [bookmark, setbookmark] = (0, import_react4.useState)(bookmarked);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
    "data-testid": "thumbnail",
    className: "thumbnail_container",
    onMouseOver: () => {
      var _a, _b;
      (_a = document.querySelector(".container_bg")) == null || _a.classList.add("overlay"), (_b = document.querySelector(".container_bg")) == null || _b.classList.remove("hidden"), setIsHovering(!0);
    },
    onMouseOut: () => {
      var _a, _b;
      (_a = document.querySelector(".container_bg")) == null || _a.classList.add("hidden"), (_b = document.querySelector(".container_bg")) == null || _b.classList.remove("overlay"), setIsHovering(!1);
    },
    onClick: () => {
      setbookmark(!bookmark), addBookmarkedData(movie);
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("picture", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("source", {
            media: "(min-width:768px)",
            srcSet: props.large
          }, void 0, !1, {
            fileName: "app/components/thumbnail/thumbnail.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("source", {
            media: "(min-width:465px)",
            srcSet: props.medium
          }, void 0, !1, {
            fileName: "app/components/thumbnail/thumbnail.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", {
            alt: props.title,
            src: props.small,
            className: "thumbnail_image",
            "data-testid": "thumbnail-img"
          }, void 0, !1, {
            fileName: "app/components/thumbnail/thumbnail.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this),
      isHovering && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
        "data-testid": "playIcon",
        className: "play_icon--container",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", {
            src: iconPlay_default,
            alt: "thumbnail",
            className: "image"
          }, void 0, !1, {
            fileName: "app/components/thumbnail/thumbnail.tsx",
            lineNumber: 69,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", {
            className: "play_tag",
            children: "Play"
          }, void 0, !1, {
            fileName: "app/components/thumbnail/thumbnail.tsx",
            lineNumber: 70,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      bookmark ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ActiveIcon, {
        className: "bookmark"
      }, void 0, !1, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(IdleIcon, {
        className: "bookmark",
        "data-testid": "bookmark_icon"
      }, void 0, !1, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
        className: "container_bg hidden"
      }, void 0, !1, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 79,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/thumbnail/thumbnail.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
};

// app/components/Inputs/text/TextInput.tsx
var import_react5 = require("react"), import_react6 = require("react"), import_react7 = __toESM(require("react"));

// app/components/Inputs/text/styles.css
var styles_default4 = "/build/_assets/styles-OR45PG77.css";

// app/components/Inputs/text/TextInput.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links5 = () => [{ rel: "stylesheet", href: styles_default4 }], TextInput = import_react7.default.forwardRef(
  ({ children, ...props }, ref) => {
    let [error, setError] = (0, import_react6.useState)(""), innerRef = (0, import_react5.useRef)(null), doValidation = () => {
      var _a;
      let currentInputText = (_a = innerRef.current) == null ? void 0 : _a.value;
      if (currentInputText !== void 0 && props.validationFn) {
        let result = props.validationFn(currentInputText);
        setError(result);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", {
      className: "input_container",
      htmlFor: props.id,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", {
          id: "email",
          className: "email_input small_heading",
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", {
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

// app/components/logIn/styles.css
var styles_default5 = "/build/_assets/styles-DEQODY4X.css";

// app/utils/helper.ts
var showActiveIcon = (event) => {
  var _a;
  let formerActiveIcon = document.querySelector(".active_icon");
  formerActiveIcon == null || formerActiveIcon.classList.remove("active_icon"), formerActiveIcon == null || formerActiveIcon.classList.add("icon");
  let iconId = event.currentTarget.id, iconButton = (_a = document.getElementById(iconId)) == null ? void 0 : _a.firstElementChild;
  iconButton == null || iconButton.classList.add("active_icon"), iconButton == null || iconButton.classList.remove("icon");
}, removeActiveIcon = () => {
  let formerActiveIcon = document.querySelector(".active_icon");
  formerActiveIcon == null || formerActiveIcon.classList.remove("active_icon"), formerActiveIcon == null || formerActiveIcon.classList.add("icon");
};

// app/components/logIn/login.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), links6 = () => [{ rel: "stylesheet", href: styles_default5 }];

// app/routes/index.tsx
var import_react10 = require("react");

// app/components/authenticatedApplication/authenticatedApplication.tsx
var import_react9 = require("react");

// app/components/authenticatedApplication/styles.css
var styles_default6 = "/build/_assets/styles-U5CSH3XT.css";

// app/store/data.ts
var import_zustand = __toESM(require("zustand"));

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
    isBookmarked: !1,
    isTrending: !0
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
    isBookmarked: !1,
    isTrending: !0
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
    isBookmarked: !1,
    isTrending: !0
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
    isBookmarked: !1,
    isTrending: !0
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
    isBookmarked: !0,
    isTrending: !0
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !0,
    isTrending: !1
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !0,
    isTrending: !1
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
    isBookmarked: !0,
    isTrending: !1
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !0,
    isTrending: !1
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
    isBookmarked: !0,
    isTrending: !1
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !0,
    isTrending: !1
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !0,
    isTrending: !1
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !0,
    isTrending: !1
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
    isBookmarked: !1,
    isTrending: !1
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
    isBookmarked: !0,
    isTrending: !1
  }
];

// app/store/data.ts
var useMovieDataStore = (0, import_zustand.default)((set) => ({
  data: data_default,
  getBookMarkedMovies: () => data_default.filter((movie) => movie.isBookmarked),
  getTrendingMovies: () => data_default.filter((movie) => movie.isTrending)
}));

// public/assets/logo.svg
var logo_default = "/build/_assets/logo-BWJKDGBT.svg";

// public/assets/image-avatar.png
var image_avatar_default = "/build/_assets/image-avatar-GNC22TMZ.png";

// app/components/bookmark-icons/bookmark-icon/BookmarkIcon.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), BookmarkIcon = ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", {
  className,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", {
    width: "17",
    height: "20",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", {
      d: "M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
    }, void 0, !1, {
      fileName: "app/components/bookmark-icons/bookmark-icon/BookmarkIcon.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/bookmark-icons/bookmark-icon/BookmarkIcon.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/bookmark-icons/bookmark-icon/BookmarkIcon.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this);

// app/components/bookmark-icons/series-icon/SeriesIcon.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), SeriesIcon = ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", {
  className,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("svg", {
    width: "20",
    height: "20",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", {
      d: "M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
    }, void 0, !1, {
      fileName: "app/components/bookmark-icons/series-icon/SeriesIcon.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/bookmark-icons/series-icon/SeriesIcon.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/bookmark-icons/series-icon/SeriesIcon.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this);

// app/components/bookmark-icons/movies-icon/MoviesIcon.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), MoviesIcon = ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
  className,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", {
    width: "20",
    height: "20",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", {
      d: "M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
    }, void 0, !1, {
      fileName: "app/components/bookmark-icons/movies-icon/MoviesIcon.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/bookmark-icons/movies-icon/MoviesIcon.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/bookmark-icons/movies-icon/MoviesIcon.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this);

// app/components/bookmark-icons/trending-icon/TrendingIcon.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), TrendingIcon = ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", {
  className,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", {
    width: "20",
    height: "20",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("path", {
      d: "M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
    }, void 0, !1, {
      fileName: "app/components/bookmark-icons/trending-icon/TrendingIcon.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/bookmark-icons/trending-icon/TrendingIcon.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/bookmark-icons/trending-icon/TrendingIcon.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this);

// app/utils/data.ts
var icons = [
  { id: "1", icon: TrendingIcon, name: "trending" },
  { id: "2", icon: MoviesIcon, name: "movies" },
  { id: "3", icon: SeriesIcon, name: "series" },
  { id: "4", icon: BookmarkIcon, name: "bookmark" }
];

// app/components/authenticatedApplication/trendingMovies.tsx
var import_react8 = require("react");

// public/assets/thumbnailDot.svg
var thumbnailDot_default = "/build/_assets/thumbnailDot-5XOQFNQZ.svg";

// app/components/authenticatedApplication/trendingMovies.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), TrendingMovies = (props) => {
  let { data, addBookmarkedData } = props, [slideIndex, setSlideIndex] = (0, import_react8.useState)(0), trendingMovieData = data.filter((item) => item.isTrending);
  return (0, import_react8.useEffect)(() => {
    let interval = setInterval(() => {
      setSlideIndex((prevIndex) => prevIndex + 1);
    }, 3e3);
    return () => clearInterval(interval);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", {
          className: "category_tag",
          children: "Trending"
        }, void 0, !1, {
          fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", {
          className: "trending_movies--container ",
          children: trendingMovieData.map((item) => {
            var _a, _b, _c, _d, _e, _f;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", {
              className: `thumbnail_wrapper trending slide-${slideIndex}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Thumbnail, {
                  medium: (_b = (_a = item.thumbnail) == null ? void 0 : _a.regular) == null ? void 0 : _b.medium,
                  large: (_d = (_c = item.thumbnail) == null ? void 0 : _c.regular) == null ? void 0 : _d.large,
                  small: (_f = (_e = item.thumbnail) == null ? void 0 : _e.regular) == null ? void 0 : _f.small,
                  title: item.title,
                  bookmarked: item.isBookmarked,
                  addBookmarkedData,
                  movie: item
                }, void 0, !1, {
                  fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                  lineNumber: 32,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", {
                  className: "trending_movie--details",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", {
                      className: "trending_movie--detailsContainer",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", {
                          className: "trending_movie--detailTag",
                          children: item.year
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                          lineNumber: 43,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", {
                          className: "trending_movie--detailTag",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", {
                            src: thumbnailDot_default
                          }, void 0, !1, {
                            fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                          lineNumber: 44,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", {
                          className: "trending_movie--detailTag",
                          children: item.category
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                          lineNumber: 47,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", {
                          className: "trending_movie--detailTag",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", {
                            src: thumbnailDot_default
                          }, void 0, !1, {
                            fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                          lineNumber: 48,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", {
                          className: "trending_movie--detailTag",
                          children: item.rating
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                          lineNumber: 51,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                      lineNumber: 42,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", {
                      className: "trending_movie--name",
                      children: item.title
                    }, void 0, !1, {
                      fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                      lineNumber: 53,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
                  lineNumber: 41,
                  columnNumber: 15
                }, this)
              ]
            }, item.title, !0, {
              fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
              lineNumber: 31,
              columnNumber: 13
            }, this);
          })
        }, void 0, !1, {
          fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/authenticatedApplication/trendingMovies.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// app/components/authenticatedApplication/selectedMovies.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), SelectedMovies = (props) => {
  let { data, addBookmarkedData } = props, movieData = data.filter((movie) => movie.category === "Movie");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", {
          className: "category_tag",
          children: "Movies"
        }, void 0, !1, {
          fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", {
          className: "recommended_List--container",
          children: movieData.map((item) => {
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
                    title: item.title,
                    bookmarked: item.isBookmarked,
                    addBookmarkedData,
                    movie: item
                  }, void 0, !1, {
                    fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                  lineNumber: 25,
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
                      }, void 0, !1, {
                        fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                        lineNumber: 38,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", {
                          src: thumbnailDot_default
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                          lineNumber: 40,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                        lineNumber: 39,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: item.category
                      }, void 0, !1, {
                        fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                        lineNumber: 42,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", {
                          src: thumbnailDot_default
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                          lineNumber: 44,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                        lineNumber: 43,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: item.rating
                      }, void 0, !1, {
                        fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                        lineNumber: 46,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                  lineNumber: 36,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", {
                  className: "recommended_thumbnail--name",
                  children: item.title
                }, void 0, !1, {
                  fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
                  lineNumber: 49,
                  columnNumber: 15
                }, this)
              ]
            }, item.title, !0, {
              fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
              lineNumber: 24,
              columnNumber: 13
            }, this);
          })
        }, void 0, !1, {
          fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
          lineNumber: 22,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/authenticatedApplication/selectedMovies.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};

// app/components/authenticatedApplication/selectedTVSeries.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), SelectedTVSeries = (props) => {
  let { data, addBookmarkedData } = props, serieData = data.filter((serie) => serie.category === "TV Series");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", {
          className: "category_tag",
          children: "TV Series"
        }, void 0, !1, {
          fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", {
          className: "recommended_List--container",
          children: serieData.map((item) => {
            var _a, _b, _c, _d, _e, _f;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", {
              className: "recommended_thumbnail--wrapper",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", {
                  className: "recommened_thumbnail--ImageContainer",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Thumbnail, {
                    medium: (_b = (_a = item.thumbnail) == null ? void 0 : _a.regular) == null ? void 0 : _b.medium,
                    large: (_d = (_c = item.thumbnail) == null ? void 0 : _c.regular) == null ? void 0 : _d.large,
                    small: (_f = (_e = item.thumbnail) == null ? void 0 : _e.regular) == null ? void 0 : _f.small,
                    title: item.title,
                    bookmarked: item.isBookmarked,
                    addBookmarkedData,
                    movie: item
                  }, void 0, !1, {
                    fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                  lineNumber: 24,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", {
                  className: "recommended_thumbnail",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", {
                    className: "recommended_thumbnail--detailWrapper",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: item.year
                      }, void 0, !1, {
                        fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                        lineNumber: 37,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", {
                          src: thumbnailDot_default
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                          lineNumber: 39,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                        lineNumber: 38,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: item.category
                      }, void 0, !1, {
                        fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                        lineNumber: 41,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", {
                          src: thumbnailDot_default
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                          lineNumber: 43,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                        lineNumber: 42,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", {
                        className: "recommended_thumbnail--detail",
                        children: item.rating
                      }, void 0, !1, {
                        fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                        lineNumber: 45,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                  lineNumber: 35,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", {
                  className: "recommended_thumbnail--name",
                  children: item.title
                }, void 0, !1, {
                  fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
                  lineNumber: 48,
                  columnNumber: 15
                }, this)
              ]
            }, item.title, !0, {
              fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
              lineNumber: 23,
              columnNumber: 13
            }, this);
          })
        }, void 0, !1, {
          fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/authenticatedApplication/selectedTVSeries.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};

// app/components/authenticatedApplication/recommended.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), Recommended = (props) => {
  let { data, addBookmarkedData } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", {
        className: "category_tag",
        children: "Recommended for you"
      }, void 0, !1, {
        fileName: "app/components/authenticatedApplication/recommended.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", {
        className: "recommended_List--container",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", {
              className: "recommended_List--container",
              children: data.map((item) => {
                var _a, _b, _c, _d, _e, _f;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", {
                  className: "recommended_thumbnail--wrapper",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", {
                      className: "recommened_thumbnail--ImageContainer",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Thumbnail, {
                        medium: (_b = (_a = item.thumbnail) == null ? void 0 : _a.regular) == null ? void 0 : _b.medium,
                        large: (_d = (_c = item.thumbnail) == null ? void 0 : _c.regular) == null ? void 0 : _d.large,
                        small: (_f = (_e = item.thumbnail) == null ? void 0 : _e.regular) == null ? void 0 : _f.small,
                        title: item.title,
                        bookmarked: item.isBookmarked,
                        addBookmarkedData,
                        movie: item
                      }, void 0, !1, {
                        fileName: "app/components/authenticatedApplication/recommended.tsx",
                        lineNumber: 27,
                        columnNumber: 23
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/authenticatedApplication/recommended.tsx",
                      lineNumber: 26,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", {
                      className: "recommended_thumbnail",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", {
                        className: "recommended_thumbnail--detailWrapper",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", {
                            className: "recommended_thumbnail--detail",
                            children: item.year
                          }, void 0, !1, {
                            fileName: "app/components/authenticatedApplication/recommended.tsx",
                            lineNumber: 39,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", {
                            className: "recommended_thumbnail--detail",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", {
                              src: thumbnailDot_default
                            }, void 0, !1, {
                              fileName: "app/components/authenticatedApplication/recommended.tsx",
                              lineNumber: 41,
                              columnNumber: 27
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/components/authenticatedApplication/recommended.tsx",
                            lineNumber: 40,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", {
                            className: "recommended_thumbnail--detail",
                            children: item.category
                          }, void 0, !1, {
                            fileName: "app/components/authenticatedApplication/recommended.tsx",
                            lineNumber: 43,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", {
                            className: "recommended_thumbnail--detail",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", {
                              src: thumbnailDot_default
                            }, void 0, !1, {
                              fileName: "app/components/authenticatedApplication/recommended.tsx",
                              lineNumber: 45,
                              columnNumber: 27
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/components/authenticatedApplication/recommended.tsx",
                            lineNumber: 44,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", {
                            className: "recommended_thumbnail--detail",
                            children: item.rating
                          }, void 0, !1, {
                            fileName: "app/components/authenticatedApplication/recommended.tsx",
                            lineNumber: 47,
                            columnNumber: 25
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/components/authenticatedApplication/recommended.tsx",
                        lineNumber: 38,
                        columnNumber: 23
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/authenticatedApplication/recommended.tsx",
                      lineNumber: 37,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", {
                      className: "recommended_thumbnail--name",
                      children: item.title
                    }, void 0, !1, {
                      fileName: "app/components/authenticatedApplication/recommended.tsx",
                      lineNumber: 50,
                      columnNumber: 21
                    }, this)
                  ]
                }, item.title, !0, {
                  fileName: "app/components/authenticatedApplication/recommended.tsx",
                  lineNumber: 25,
                  columnNumber: 19
                }, this);
              })
            }, void 0, !1, {
              fileName: "app/components/authenticatedApplication/recommended.tsx",
              lineNumber: 23,
              columnNumber: 15
            }, this)
          }, void 0, !1, {
            fileName: "app/components/authenticatedApplication/recommended.tsx",
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/components/authenticatedApplication/recommended.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/authenticatedApplication/recommended.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/authenticatedApplication/recommended.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
};

// app/components/authenticatedApplication/BookmarkedMovies.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), BookMarked = (props) => {
  let { data, addBookmarkedData } = props, storeData = data, bookmarkedMovieData = storeData.filter(
    (item) => item.isBookmarked && item.category === "Movie"
  ), bookmarkedSerieData = storeData.filter(
    (item) => item.isBookmarked && item.category === "TV Series"
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", {
    className: "bookmark_container",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", {
            className: "category_tag",
            children: "Bookmarked Movies"
          }, void 0, !1, {
            fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", {
            className: "bookmarked_thumbnail--container",
            children: bookmarkedMovieData.map((item) => {
              var _a, _b, _c, _d, _e, _f;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", {
                className: "recommended_thumbnail--wrapper",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", {
                    className: "recommened_thumbnail--ImageContainer",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Thumbnail, {
                      medium: (_b = (_a = item.thumbnail) == null ? void 0 : _a.regular) == null ? void 0 : _b.medium,
                      large: (_d = (_c = item.thumbnail) == null ? void 0 : _c.regular) == null ? void 0 : _d.large,
                      small: (_f = (_e = item.thumbnail) == null ? void 0 : _e.regular) == null ? void 0 : _f.small,
                      title: item.title,
                      bookmarked: item.isBookmarked,
                      addBookmarkedData,
                      movie: item
                    }, void 0, !1, {
                      fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                      lineNumber: 33,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                    lineNumber: 32,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", {
                    className: "recommended_thumbnail",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", {
                      className: "recommended_thumbnail--detailWrapper",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: item.year
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                          lineNumber: 45,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("img", {
                            src: thumbnailDot_default
                          }, void 0, !1, {
                            fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                            lineNumber: 47,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                          lineNumber: 46,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: item.category
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                          lineNumber: 49,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("img", {
                            src: thumbnailDot_default
                          }, void 0, !1, {
                            fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                          lineNumber: 50,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: item.rating
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                          lineNumber: 53,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                      lineNumber: 44,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                    lineNumber: 43,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", {
                    className: "recommended_thumbnail--name",
                    children: item.title
                  }, void 0, !1, {
                    fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                    lineNumber: 56,
                    columnNumber: 15
                  }, this)
                ]
              }, item.title, !0, {
                fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                lineNumber: 31,
                columnNumber: 13
              }, this);
            })
          }, void 0, !1, {
            fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", {
            className: "category_tag",
            children: "Bookmarked TV Series"
          }, void 0, !1, {
            fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", {
            className: "recommended_List--container",
            children: bookmarkedSerieData.map((item) => {
              var _a, _b, _c, _d, _e, _f;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", {
                className: "recommended_thumbnail--wrapper",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", {
                    className: "recommened_thumbnail--ImageContainer",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Thumbnail, {
                      medium: (_b = (_a = item.thumbnail) == null ? void 0 : _a.regular) == null ? void 0 : _b.medium,
                      large: (_d = (_c = item.thumbnail) == null ? void 0 : _c.regular) == null ? void 0 : _d.large,
                      small: (_f = (_e = item.thumbnail) == null ? void 0 : _e.regular) == null ? void 0 : _f.small,
                      title: item.title,
                      bookmarked: item.isBookmarked,
                      addBookmarkedData,
                      movie: item
                    }, void 0, !1, {
                      fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                      lineNumber: 67,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                    lineNumber: 66,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", {
                    className: "recommended_thumbnail",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", {
                      className: "recommended_thumbnail--detailWrapper",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: item.year
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                          lineNumber: 79,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("img", {
                            src: thumbnailDot_default
                          }, void 0, !1, {
                            fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                            lineNumber: 81,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                          lineNumber: 80,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: item.category
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                          lineNumber: 83,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("img", {
                            src: thumbnailDot_default
                          }, void 0, !1, {
                            fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                          lineNumber: 84,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", {
                          className: "recommended_thumbnail--detail",
                          children: item.rating
                        }, void 0, !1, {
                          fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                          lineNumber: 87,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                      lineNumber: 78,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                    lineNumber: 77,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", {
                    className: "recommended_thumbnail--name",
                    children: item.title
                  }, void 0, !1, {
                    fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                    lineNumber: 90,
                    columnNumber: 15
                  }, this)
                ]
              }, item.title, !0, {
                fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
                lineNumber: 65,
                columnNumber: 13
              }, this);
            })
          }, void 0, !1, {
            fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
        lineNumber: 61,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/authenticatedApplication/BookmarkedMovies.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// app/components/authenticatedApplication/authenticatedApplication.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), links7 = () => [{ rel: "stylesheet", href: styles_default6 }], AuthenticatedApplication = () => {
  let listItems = icons.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("button", {
    className: "icon_button",
    onClick: (event) => {
      setCategory(item.name), showActiveIcon(event);
    },
    id: item.id,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(item.icon, {
      className: "icon"
    }, void 0, !1, {
      fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, item.id, !1, {
    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this)), [searchField, setsearchfield] = (0, import_react9.useState)(""), filteredData = useMovieDataStore((state) => state.data).filter((movie) => movie.title.toLowerCase().includes(searchField.toLowerCase())), addBookmarkedData = (item) => {
    filteredData.push(item);
  }, [category, setCategory] = (0, import_react9.useState)("trending"), categories;
  return category === "trending" ? categories = /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TrendingMovies, {
          data: filteredData,
          addBookmarkedData
        }, void 0, !1, {
          fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Recommended, {
          data: filteredData,
          addBookmarkedData
        }, void 0, !1, {
          fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) : category === "movies" ? categories = /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SelectedMovies, {
    data: filteredData,
    addBookmarkedData
  }, void 0, !1, {
    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
    lineNumber: 65,
    columnNumber: 18
  }, this) : category === "series" ? categories = /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SelectedTVSeries, {
    data: filteredData,
    addBookmarkedData
  }, void 0, !1, {
    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
    lineNumber: 67,
    columnNumber: 18
  }, this) : category === "bookmark" && (categories = /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(BookMarked, {
    data: filteredData,
    addBookmarkedData
  }, void 0, !1, {
    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
    lineNumber: 69,
    columnNumber: 18
  }, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", {
    className: "authenticated_user",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", {
        className: "navigation_bar",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", {
            className: "category_icons--container",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("button", {
                className: "logo",
                onClick: () => {
                  setCategory("trending"), removeActiveIcon();
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", {
                  src: logo_default
                }, void 0, !1, {
                  fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                  lineNumber: 83,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                lineNumber: 76,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", {
                className: "navigation_icons",
                children: listItems
              }, void 0, !1, {
                fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                lineNumber: 85,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", {
              src: image_avatar_default
            }, void 0, !1, {
              fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
              lineNumber: 88,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
            lineNumber: 87,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", {
        className: "category_container",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SearchInput, {
            searchFiled: searchField,
            setsearchfield
          }, void 0, !1, {
            fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
            lineNumber: 92,
            columnNumber: 9
          }, this),
          categories
        ]
      }, void 0, !0, {
        fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
        lineNumber: 91,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
};

// app/routes/index.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), links8 = () => [
  ...links2(),
  ...links7(),
  ...links3(),
  ...links6(),
  ...links5(),
  ...links4()
];
function Index() {
  let [isLoggedIn, setIsLoggedIn] = (0, import_react10.useState)(!0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    className: "app_container",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(AuthenticatedApplication, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "2fd61cd5", entry: { module: "/build/entry.client-BXZ6XQDW.js", imports: ["/build/_shared/chunk-FZOANFMC.js", "/build/_shared/chunk-DDCATEM7.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5J376NYH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/index": { id: "routes/auth/index", parentId: "root", path: "auth", index: !0, caseSensitive: void 0, module: "/build/routes/auth/index-463OCYLI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-ZQRJWJF2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-2FD61CD5.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth/index": {
    id: "routes/auth/index",
    parentId: "root",
    path: "auth",
    index: !0,
    caseSensitive: void 0,
    module: auth_exports
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
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
