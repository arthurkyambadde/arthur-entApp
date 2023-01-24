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

// app/components/thumbnail/thumbnail.tsx
var import_react2 = __toESM(require_react());

// app/components/thumbnail/styles.css
var styles_default3 = "/build/_assets/styles-4F6CB4IP.css";

// public/assets/iconPlay.svg
var iconPlay_default = "/build/_assets/iconPlay-NBIN7PHU.svg";

// app/components/bookmark-icons/idle-icon/IdleIcon.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var IdleIcon = ({ className }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ActiveIcon = ({ className }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
      width: "12",
      height: "14",
      xmlns: "http://www.w3.org/2000/svg",
      "data-testid": "active-icon",
      fill: "white",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links3 = () => [{ rel: "stylesheet", href: styles_default3 }];
var Thumbnail = (props) => {
  const { image } = props;
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    "data-testid": "thumbnail",
    className: "thumbnail_container",
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onClick: () => setbookmarked(!bookmarked),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: image,
        alt: image,
        className: "thumbnail_image"
      }, void 0, false, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 44,
        columnNumber: 7
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
            lineNumber: 47,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "play_tag",
            children: "Play"
          }, void 0, false, {
            fileName: "app/components/thumbnail/thumbnail.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      bookmarked ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActiveIcon, {
        className: "bookmark"
      }, void 0, false, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IdleIcon, {
        className: "bookmark",
        "data-testid": "bookmark_icon"
      }, void 0, false, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "container_bg hidden"
      }, void 0, false, {
        fileName: "app/components/thumbnail/thumbnail.tsx",
        lineNumber: 57,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/thumbnail/thumbnail.tsx",
    lineNumber: 37,
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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
var styles_default5 = "/build/_assets/styles-DEQODY4X.css";

// app/components/logIn/login.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links5 = () => [{ rel: "stylesheet", href: styles_default5 }];

// app/routes/index.tsx
var import_react6 = __toESM(require_react());

// app/components/authenticatedApplication/styles.css
var styles_default6 = "/build/_assets/styles-P7XG6SJ6.css";

// public/assets/logo.svg
var logo_default = "/build/_assets/logo-BWJKDGBT.svg";

// public/assets/icon-nav-bookmark.svg
var icon_nav_bookmark_default = "/build/_assets/icon-nav-bookmark-WCQT4TYP.svg";

// public/assets/icon-nav-tv-series.svg
var icon_nav_tv_series_default = "/build/_assets/icon-nav-tv-series-PCU7YJIE.svg";

// public/assets/icon-nav-movies.svg
var icon_nav_movies_default = "/build/_assets/icon-nav-movies-UVEWU7UD.svg";

// public/assets/icon-nav-home.svg
var icon_nav_home_default = "/build/_assets/icon-nav-home-XUNBOYJ3.svg";

// public/assets/image-avatar.png
var image_avatar_default = "/build/_assets/image-avatar-GNC22TMZ.png";

// public/assets/thumbnails/beyond-earth/trending/small.jpg
var small_default = "/build/_assets/small-DLZYTFW3.jpg";

// public/assets/thumbnails/bottom-gear/trending/small.jpg
var small_default2 = "/build/_assets/small-2NDAKHCH.jpg";

// public/assets/thumbnails/undiscovered-cities/trending/small.jpg
var small_default3 = "/build/_assets/small-OR3P5ELO.jpg";

// public/assets/thumbnails/1998/trending/small.jpg
var small_default4 = "/build/_assets/small-R4A332TQ.jpg";

// public/assets/thumbnails/dark-side-of-the-moon/trending/small.jpg
var small_default5 = "/build/_assets/small-HROWMK2H.jpg";

// public/assets/thumbnails/the-great-lands/regular/large.jpg
var large_default = "/build/_assets/large-H52ZAGLE.jpg";

// public/assets/thumbnails/earths-untouched/regular/large.jpg
var large_default2 = "/build/_assets/large-WDBJ2SM4.jpg";

// public/assets/thumbnails/no-land-beyond/regular/large.jpg
var large_default3 = "/build/_assets/large-UYHJA3OS.jpg";

// public/assets/thumbnails/same-answer-2/regular/large.jpg
var large_default4 = "/build/_assets/large-IBWGD7VI.jpg";

// public/assets/thumbnails/relentless/regular/large.jpg
var large_default5 = "/build/_assets/large-T2YL6LJU.jpg";

// public/assets/thumbnails/van-life/regular/large.jpg
var large_default6 = "/build/_assets/large-AANGFSEQ.jpg";

// public/assets/thumbnails/the-heiress/regular/large.jpg
var large_default7 = "/build/_assets/large-KPZIORP7.jpg";

// public/assets/thumbnails/off-the-track/regular/large.jpg
var large_default8 = "/build/_assets/large-E3EP2RK4.jpg";

// public/assets/thumbnails/darker/regular/large.jpg
var large_default9 = "/build/_assets/large-OWJ4LGLX.jpg";

// public/assets/thumbnails/mission-saturn/regular/large.jpg
var large_default10 = "/build/_assets/large-3S7GKEWY.jpg";

// public/assets/thumbnails/whispering-hill/regular/large.jpg
var large_default11 = "/build/_assets/large-BGZFJIFM.jpg";

// public/assets/thumbnails/lone-heart/regular/large.jpg
var large_default12 = "/build/_assets/large-2A4D7PN6.jpg";

// public/assets/thumbnails/the-diary/regular/large.jpg
var large_default13 = "/build/_assets/large-X4YDWR6S.jpg";

// public/assets/thumbnails/autosport-the-series/regular/large.jpg
var large_default14 = "/build/_assets/large-NWXGDNQR.jpg";

// public/assets/thumbnails/below-echo/regular/large.jpg
var large_default15 = "/build/_assets/large-4H2KK2AU.jpg";

// public/assets/thumbnails/the-rockies/regular/large.jpg
var large_default16 = "/build/_assets/large-Y2HIAJ3S.jpg";

// public/assets/thumbnails/community-of-ours/regular/large.jpg
var large_default17 = "/build/_assets/large-4GFEH5UB.jpg";

// public/assets/thumbnails/112/regular/large.jpg
var large_default18 = "/build/_assets/large-KZ4Z4PYV.jpg";

// public/assets/thumbnails/production-line/regular/large.jpg
var large_default19 = "/build/_assets/large-EHHEYQEC.jpg";

// public/assets/thumbnails/dogs/regular/large.jpg
var large_default20 = "/build/_assets/large-KHUMLF5A.jpg";

// public/assets/thumbnails/asia-in-24-days/regular/large.jpg
var large_default21 = "/build/_assets/large-VX2EL7IV.jpg";

// public/assets/thumbnails/unresolved-cases/regular/large.jpg
var large_default22 = "/build/_assets/large-4HEAJSWH.jpg";

// public/assets/thumbnails/the-tasty-tour/regular/large.jpg
var large_default23 = "/build/_assets/large-LXBE4TT2.jpg";

// public/assets/thumbnails/during-the-hunt/regular/large.jpg
var large_default24 = "/build/_assets/large-DVYNBKVT.jpg";

// app/components/authenticatedApplication/authenticatedApplication.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var icons = [icon_nav_home_default, icon_nav_movies_default, icon_nav_tv_series_default, icon_nav_bookmark_default];
var trendingMovies = [
  {
    src: small_default,
    id: "1",
    year: "2019",
    category: "movie",
    age: "PG"
  },
  {
    src: small_default2,
    id: "2",
    year: "2021",
    category: "movie",
    age: "PG"
  },
  {
    src: small_default3,
    id: "3",
    year: "2019",
    category: "TV series",
    age: "E"
  },
  {
    src: small_default5,
    id: "5",
    year: "2018",
    category: "TV series",
    age: "PG"
  },
  {
    src: small_default4,
    id: "6",
    year: "2018",
    category: "TV series",
    age: "PG"
  }
];
var recommendedForYour = [
  {
    src: large_default,
    id: "1",
    year: "2019",
    category: "Movies",
    age: "PG"
  },
  {
    src: large_default13,
    id: "2",
    year: "2019",
    category: "TV series",
    age: "PG"
  },
  {
    src: large_default2,
    id: "3",
    year: "2017",
    category: "Movies",
    age: "18+"
  },
  {
    src: large_default3,
    id: "4",
    year: "2019",
    category: "Movies",
    age: "E"
  },
  {
    src: large_default24,
    id: "5",
    year: "2016",
    category: "TV series",
    age: "PG"
  },
  {
    src: large_default14,
    id: "6",
    year: "2016",
    category: "TV series",
    age: "PG"
  },
  {
    src: large_default4,
    id: "7",
    year: "2017",
    category: "TV series",
    age: "E"
  },
  {
    src: large_default15,
    id: "8",
    year: "2016",
    category: "TV series",
    age: "PG"
  },
  {
    src: large_default16,
    id: "9",
    year: "2015",
    category: "TV series",
    age: "E"
  },
  {
    src: large_default5,
    id: "10",
    year: "2017",
    category: "Movie",
    age: "PG"
  },
  {
    src: large_default17,
    id: "11",
    year: "2018",
    category: "TV series",
    age: "18+"
  },
  {
    src: large_default6,
    id: "12",
    year: "2015",
    category: "Movie",
    age: "PG"
  },
  {
    src: large_default7,
    id: "13",
    year: "2021",
    category: "Movie",
    age: "PG"
  },
  {
    src: large_default8,
    id: "14",
    year: "2017",
    category: "Movie",
    age: "18+"
  },
  {
    src: large_default11,
    id: "15",
    year: "2017",
    category: "Movie",
    age: "E"
  },
  {
    src: large_default18,
    id: "16",
    year: "2013",
    category: "Movie",
    age: "PG"
  },
  {
    src: large_default12,
    id: "17",
    year: "2017",
    category: "Movie",
    age: "E"
  },
  {
    src: large_default19,
    id: "18",
    year: "2018",
    category: "TV serie",
    age: "PG"
  },
  {
    src: large_default20,
    id: "18",
    year: "2018",
    category: "TV serie",
    age: "PG"
  },
  {
    src: large_default21,
    id: "18",
    year: "2018",
    category: "TV serie",
    age: "PG"
  },
  {
    src: large_default23,
    id: "19",
    year: "2016",
    category: "TV serie",
    age: "PG"
  },
  {
    src: large_default9,
    id: "20",
    year: "2017",
    category: "TV serie",
    age: "18+"
  },
  {
    src: large_default22,
    id: "21",
    year: "2018",
    category: "TV serie",
    age: "18+"
  },
  {
    src: large_default10,
    id: "22",
    year: "2017",
    category: "TV serie",
    age: "PG"
  }
];
var listItems = icons.map((icon) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
    src: icon
  }, void 0, false, {
    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
    lineNumber: 486,
    columnNumber: 5
  }, this)
}, icon, false, {
  fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
  lineNumber: 485,
  columnNumber: 3
}, this));
var trendingMoviesList = trendingMovies.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "thumbnail_wrapper",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, {
    image: item.src
  }, void 0, false, {
    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
    lineNumber: 492,
    columnNumber: 5
  }, this)
}, item.id, false, {
  fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
  lineNumber: 491,
  columnNumber: 3
}, this));
var recommendedList = recommendedForYour.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "recommended_thumbnail--wrapper",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, {
    image: item.src
  }, void 0, false, {
    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
    lineNumber: 498,
    columnNumber: 5
  }, this)
}, item.id, false, {
  fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
  lineNumber: 497,
  columnNumber: 3
}, this));
var links6 = () => [{ rel: "stylesheet", href: styles_default6 }];
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
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  src: logo_default
                }, void 0, false, {
                  fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                  lineNumber: 510,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                lineNumber: 509,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "navigation_icons",
                children: listItems
              }, void 0, false, {
                fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                lineNumber: 512,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
            lineNumber: 508,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: image_avatar_default
            }, void 0, false, {
              fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
              lineNumber: 515,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
            lineNumber: 514,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
        lineNumber: 507,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "category_container",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchInput, {}, void 0, false, {
            fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
            lineNumber: 519,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "category_tag",
                children: "Trending"
              }, void 0, false, {
                fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                lineNumber: 521,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "trending_movies--container",
                children: trendingMoviesList
              }, void 0, false, {
                fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                lineNumber: 522,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "category_tag",
                children: "Recommended for you"
              }, void 0, false, {
                fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                lineNumber: 523,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "recommended_List--container",
                children: recommendedList
              }, void 0, false, {
                fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
                lineNumber: 524,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
            lineNumber: 520,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
        lineNumber: 518,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/authenticatedApplication/authenticatedApplication.tsx",
    lineNumber: 506,
    columnNumber: 5
  }, this);
};

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links7 = () => [
  ...links(),
  ...links6(),
  ...links2(),
  ...links5(),
  ...links4(),
  ...links3()
];
function Index() {
  const [isLoggedIn, setIsLoggedIn] = (0, import_react6.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    className: "app_container",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthenticatedApplication, {}, void 0, false, {
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
//# sourceMappingURL=/build/routes/index-6XPBOODQ.js.map
