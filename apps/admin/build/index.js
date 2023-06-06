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
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_styled_components = require("styled-components"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let sheet = new import_styled_components.ServerStyleSheet(), markup = (0, import_server.renderToString)(
    sheet.collectStyles(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 16,
          columnNumber: 7
        },
        this
      )
    )
  ), styles = sheet.getStyleTags();
  return markup = markup.replace("__STYLES__", styles), responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => root_default,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// ../../packages/ui/theme/globalStyle.css
var globalStyle_default = "/build/_assets/globalStyle-K4MK3H3I.css";

// ../../packages/ui/theme/colorPalette.tsx
var collorPalette = {
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
  primary: {
    darkest: "#02020C",
    darker: "#0A0830",
    dark: "#120E54",
    base: "#1B1478",
    light: "#5F5AA0",
    lighter: "#A3A1C9",
    lightest: "#E8E7F1"
  },
  secondary: {
    darkest: "#003F4C",
    darker: "#005466",
    dark: "#0093B2",
    base: "#00D2FF",
    light: "#4CDFFF",
    lighter: "#99EDFF",
    lightest: "#E5FAFF"
  },
  tertiary: {
    darkest: "#66511A",
    darker: "#987926",
    dark: "#CAA233",
    base: "#FDCA40",
    light: "#FDD566",
    lighter: "#FDE9B6",
    lightest: "#FFFAEC"
  },
  grey: {
    darker: "#333333",
    dark: "#666666",
    base: "#8C8C8C",
    light: "#CCCCCC",
    lighter: "#F2F2F2",
    lightest: "#F9F9F9"
  },
  platform: {
    red: "#C42C21",
    redLightest: "#fae8e6",
    green: "#007831",
    greenLightest: "#e6f2ea",
    blue: "#0065ad",
    bluLighter: "#00247D",
    blueLightest: "#e6f0f8",
    greyLightest: "#F8F8F8"
  },
  shadow: "2px 2px 10px 1px #DDDDDD"
}, colorPalette_default = collorPalette;

// app/const.tsx
var import_styles = require("@mui/material/styles"), import_system = require("@mui/system"), RequiredField = "This field is required", InvalidField = "Invalid field value", ErrorSubmit = "There was a problem in submitting your form", ErrorMessage = "An error occured", WrongLoginData = "Email or password is wrong", breakpoints = (0, import_system.createBreakpoints)({}), theme = (0, import_styles.createTheme)({
  components: {
    MuiAlert: {
      styleOverrides: {
        message: ({ theme: theme2 }) => theme2.unstable_sx({
          textAlign: "left",
          lineHeight: "20px",
          fontSize: { xs: 12, sm: 14 },
          color: colorPalette_default.black
        })
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: !0
      }
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: !0
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          position: "absolute",
          top: "45%",
          left: 0,
          right: 0,
          margin: "0 auto"
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #fff inset"
          },
          "&:focus": {
            backgroundColor: "inherit"
          }
        }
      }
    }
  },
  typography: {
    fontFamily: ["Georama"].join(","),
    h1: {
      color: colorPalette_default.black,
      [breakpoints.up("xs")]: {
        fontSize: 13
      },
      [breakpoints.up("sm")]: {
        fontSize: 14
      }
    },
    h2: {
      color: colorPalette_default.black,
      [breakpoints.up("xs")]: {
        fontSize: 15
      },
      [breakpoints.up("sm")]: {
        fontSize: 16
      }
    },
    h5: {
      color: colorPalette_default.black,
      fontWeight: 600,
      [breakpoints.up("xs")]: {
        fontSize: 22
      },
      [breakpoints.up("sm")]: {
        fontSize: 25
      }
    },
    h4: {
      color: colorPalette_default.black,
      fontWeight: 600,
      [breakpoints.up("xs")]: {
        fontSize: 20
      },
      [breakpoints.up("sm")]: {
        fontSize: 22
      }
    },
    h3: {
      color: colorPalette_default.black,
      fontWeight: 600,
      [breakpoints.up("xs")]: {
        fontSize: 16
      },
      [breakpoints.up("sm")]: {
        fontSize: 18
      }
    }
  },
  palette: {
    primary: {
      main: colorPalette_default.primary.base
    },
    secondary: {
      main: colorPalette_default.primary.lighter
    }
  }
});

// app/root.tsx
var import_styles2 = require("@mui/material/styles"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: globalStyle_default },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Georama:wght@200;300;400;600"
  }
], meta = () => ({
  charset: "utf-8",
  title: "Library",
  viewport: "width=device-width,initial-scale=1"
}), App = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    typeof document > "u" ? "__STYLES__" : null
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_styles2.ThemeProvider, { theme, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/root.tsx",
  lineNumber: 32,
  columnNumber: 5
}, this), root_default = App;

// app/routes/__auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default
});
var import_react3 = require("@remix-run/react");

// ../../packages/ui/components/Spinner/Spinner.style.tsx
var import_CircularProgress = __toESM(require("@mui/material/CircularProgress")), import_styles3 = require("@mui/material/styles"), StyledSpinner = (0, import_styles3.styled)(import_CircularProgress.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    position: "fixed"
  })
);

// ../../packages/ui/components/Spinner/SpinnerContainer.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), SpinnerContainer = ({}) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(StyledSpinner, {}, void 0, !1, {
  fileName: "../../packages/ui/components/Spinner/SpinnerContainer.tsx",
  lineNumber: 4,
  columnNumber: 10
}, this), SpinnerContainer_default = SpinnerContainer;

// app/routes/__auth.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), AuthLayout = () => {
  let transition = (0, import_react3.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__auth.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    (transition.state === "submitting" || transition.state === "loading") && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SpinnerContainer_default, {}, void 0, !1, {
      fileName: "app/routes/__auth.tsx",
      lineNumber: 11,
      columnNumber: 44
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}, auth_default = AuthLayout;

// app/routes/__auth/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => login_default,
  loader: () => loader
});
var import_node3 = require("@remix-run/node");

// app/components/Login/Login.helper.tsx
var import_lodash = require("lodash");
var handleLoginErrors = (formData) => {
  let errors = {}, { email, password } = formData;
  return (0, import_lodash.isEmpty)(email) && (errors.email = RequiredField), (0, import_lodash.isEmpty)(password) && (errors.password = RequiredField), errors;
};

// ../../packages/ui/components/Button/Button.style.tsx
var import_Button = __toESM(require("@mui/material/Button")), import_styles4 = require("@mui/material/styles");
var commonStyle = {
  height: "38px",
  padding: "6px 20px",
  letterSpacing: "0.5px",
  fontSize: "15px",
  minWidth: "120px"
}, ContainedButton = (0, import_styles4.styled)(import_Button.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    ...commonStyle,
    backgroundColor: colorPalette_default.primary.base,
    color: colorPalette_default.white,
    border: `2px solid ${colorPalette_default.primary.base}`,
    "&:hover": {
      backgroundColor: colorPalette_default.primary.base
    },
    "&:disabled": {
      backgroundColor: colorPalette_default.grey.lighter,
      color: colorPalette_default.grey.base,
      border: `2px solid ${colorPalette_default.grey.lighter}`
    }
  })
), OutlinedButton = (0, import_styles4.styled)(import_Button.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    ...commonStyle,
    backgroundColor: colorPalette_default.white,
    color: colorPalette_default.black,
    border: `2px solid ${colorPalette_default.primary.base}`,
    "&:hover": {
      backgroundColor: colorPalette_default.white
    },
    "&:disabled": {
      backgroundColor: colorPalette_default.grey.lighter,
      color: colorPalette_default.grey.base,
      border: `2px solid ${colorPalette_default.grey.lighter}`
    }
  })
);

// ../../packages/ui/components/Button/ButtonContainer.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), ButtonContainer = ({
  title,
  variant,
  onClick,
  type,
  disabled
}) => variant === "contained" /* contained */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ContainedButton, { onClick, type, disabled, children: title }, void 0, !1, {
  fileName: "../../packages/ui/components/Button/ButtonContainer.tsx",
  lineNumber: 13,
  columnNumber: 7
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(OutlinedButton, { onClick, type, disabled, children: title }, void 0, !1, {
  fileName: "../../packages/ui/components/Button/ButtonContainer.tsx",
  lineNumber: 20,
  columnNumber: 5
}, this), ButtonContainer_default = ButtonContainer;

// ../../packages/ui/components/Input/Input.style.tsx
var import_TextField = __toESM(require("@mui/material/TextField")), import_styles5 = require("@mui/material/styles"), StandardInput = (0, import_styles5.styled)(import_TextField.default)(
  ({ width, theme: theme2 }) => theme2.unstable_sx({
    flex: 1,
    maxWidth: { md: width },
    width: { xs: "100%" }
  })
);

// ../../packages/ui/components/Input/InputContainer.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), InputContainer = ({
  label,
  value,
  type = "text" /* text */,
  errorMessage,
  onChange,
  width = "inherit",
  multiline = !1,
  placeholder = ""
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  StandardInput,
  {
    error: !!errorMessage,
    label,
    placeholder,
    type,
    value,
    InputProps: { inputProps: { min: 0 } },
    variant: "standard",
    helperText: errorMessage,
    onChange: (event) => {
      onChange(event.target.value);
    },
    width,
    multiline: type !== "number" /* number */ && multiline,
    maxRows: 4
  },
  void 0,
  !1,
  {
    fileName: "../../packages/ui/components/Input/InputContainer.tsx",
    lineNumber: 20,
    columnNumber: 5
  },
  this
), InputContainer_default = InputContainer;

// app/components/Login/Login.style.tsx
var import_Paper = __toESM(require("@mui/material/Paper")), import_styles6 = require("@mui/material/styles"), import_Typography = __toESM(require("@mui/material/Typography"));
var import_Alert = __toESM(require("@mui/material/Alert")), StyledPaper = (0, import_styles6.styled)(import_Paper.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    width: { xs: "100%", sm: "260px" },
    border: `10px solid ${colorPalette_default.primary.lighter}`,
    padding: { xs: 4, sm: 6 },
    flexDirection: "column",
    textAlign: "center",
    borderRadius: { xs: 0, sm: 5 },
    position: "absolute",
    top: "45%",
    transform: "translateY(-50%)",
    left: 0,
    right: 0,
    margin: "0 auto",
    backgroundColor: colorPalette_default.white
  })
), StyledParagraph = (0, import_styles6.styled)(import_Typography.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    color: colorPalette_default.grey.darker
  })
), StyledAlert = (0, import_styles6.styled)(import_Alert.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    padding: "3px 10px"
  })
);

// ../../packages/ui/components/Menu/Menu.const.tsx
var import_Dashboard = __toESM(require("@mui/icons-material/Dashboard")), import_LibraryBooks = __toESM(require("@mui/icons-material/LibraryBooks")), import_DensitySmall = __toESM(require("@mui/icons-material/DensitySmall")), import_PeopleAlt = __toESM(require("@mui/icons-material/PeopleAlt")), import_HomeWork = __toESM(require("@mui/icons-material/HomeWork")), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), menuWidth = 240, menuTitle = "Online library", MenuList = [
  {
    label: "Dashboard",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_Dashboard.default, {}, void 0, !1, {
      fileName: "../../packages/ui/components/Menu/Menu.const.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this),
    url: "/"
  },
  { label: "Loans", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_DensitySmall.default, {}, void 0, !1, {
    fileName: "../../packages/ui/components/Menu/Menu.const.tsx",
    lineNumber: 17,
    columnNumber: 27
  }, this), url: "/loans" },
  { label: "Books", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_LibraryBooks.default, {}, void 0, !1, {
    fileName: "../../packages/ui/components/Menu/Menu.const.tsx",
    lineNumber: 18,
    columnNumber: 27
  }, this), url: "/books" },
  { label: "Readers", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_PeopleAlt.default, {}, void 0, !1, {
    fileName: "../../packages/ui/components/Menu/Menu.const.tsx",
    lineNumber: 19,
    columnNumber: 29
  }, this), url: "/readers" },
  { label: "Libraries", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_HomeWork.default, {}, void 0, !1, {
    fileName: "../../packages/ui/components/Menu/Menu.const.tsx",
    lineNumber: 20,
    columnNumber: 31
  }, this), url: "/libraries" }
];

// app/components/Login/Form/LoginForm.tsx
var import_react4 = require("react");

// ../../packages/ui/components/Flex/Flex.tsx
var import_styled_components2 = __toESM(require("styled-components")), import_styled_system = require("styled-system"), Flex = import_styled_components2.default.div`
  display: flex;
  ${import_styled_system.flexbox}
  ${import_styled_system.space}
  ${import_styled_system.layout}
  gap: ${(props) => props.gap || "0px"};
  position: ${(props) => props.position || "static"};
`, ColumnFlex = (0, import_styled_components2.default)(Flex)`
  flex-direction: column;
`, CenteredFlex = (0, import_styled_components2.default)(Flex)`
  justify-content: center;
`, SpaceBetweenFlex = (0, import_styled_components2.default)(Flex)`
  justify-content: space-between;
`, AlignedFlex = (0, import_styled_components2.default)(Flex)`
  align-items: center;
`, CenteredAlignedFlex = (0, import_styled_components2.default)(CenteredFlex)`
  align-items: center;
`, RelativeCenteredFlex = (0, import_styled_components2.default)(CenteredFlex)`
  position: relative;
`, StretchRelativeCenteredFlex = (0, import_styled_components2.default)(RelativeCenteredFlex)`
  align-items: stretch;
`, RelativeCenteredAlignedFlex = (0, import_styled_components2.default)(CenteredAlignedFlex)`
  position: relative;
`, SpaceBetweenCenterFlex = (0, import_styled_components2.default)(SpaceBetweenFlex)`
  align-items: center;
`, SpaceBetweenStretchlex = (0, import_styled_components2.default)(SpaceBetweenFlex)`
  align-items: stretch;
`, FlexStartSpaceBetweenFlex = (0, import_styled_components2.default)(SpaceBetweenFlex)`
  align-items: flex-start;
`, FlexEndSpaceBetweenFlex = (0, import_styled_components2.default)(SpaceBetweenFlex)`
  align-items: flex-end;
`, CenteredColumnFlex = (0, import_styled_components2.default)(ColumnFlex)`
  align-items: center;
`, StretchColumnFlex = (0, import_styled_components2.default)(ColumnFlex)`
  align-items: stretch;
`, SpaceBetweenColumnFlex = (0, import_styled_components2.default)(ColumnFlex)`
  justify-content: space-between;
`, FlexStartSpaceBetweenColumnFlex = (0, import_styled_components2.default)(SpaceBetweenCenterFlex)`
  align-items: flex-start;
`, FlexEndSpaceBetweenColumnFlex = (0, import_styled_components2.default)(SpaceBetweenCenterFlex)`
  align-items: flex-end;
`, Flex_default = Flex;

// app/components/Login/Form/LoginForm.tsx
var import_Typography2 = __toESM(require("@mui/material/Typography"));

// app/components/Login/Login.const.tsx
var LoginDescription = "Please enter your login data.", initialLogin = {
  email: "",
  password: ""
};

// app/components/Login/Form/LoginForm.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), LoginForm = ({
  onSubmit,
  data,
  setData,
  generalError,
  setGeneralError
}) => {
  let [errors, setErrors] = (0, import_react4.useState)({}), handleInputChange = (value, field) => {
    setData((oldData) => ({ ...oldData, [field]: value })), errors[field] && setErrors((oldErrors) => (delete oldErrors[field], oldErrors)), generalError && setGeneralError("");
  }, handleOnSubmit = () => {
    onSubmit({ callback: (fieldErrors) => setErrors(fieldErrors) });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(StyledPaper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ColumnFlex, { gap: "30px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ColumnFlex, { gap: "10px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_Typography2.default, { variant: "h5", children: menuTitle }, void 0, !1, {
        fileName: "app/components/Login/Form/LoginForm.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(StyledParagraph, { variant: "h2", children: LoginDescription }, void 0, !1, {
        fileName: "app/components/Login/Form/LoginForm.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Login/Form/LoginForm.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ColumnFlex, { gap: "20px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        InputContainer_default,
        {
          label: "Email*",
          errorMessage: errors.email,
          value: data.email,
          onChange: (value) => handleInputChange(value, "email" /* email */)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Login/Form/LoginForm.tsx",
          lineNumber: 47,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        InputContainer_default,
        {
          label: "Password*",
          type: "password" /* password */,
          errorMessage: errors.password,
          value: data.password,
          onChange: (value) => handleInputChange(value, "password" /* password */)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Login/Form/LoginForm.tsx",
          lineNumber: 55,
          columnNumber: 11
        },
        this
      ),
      generalError && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(StyledAlert, { severity: "error", children: generalError }, void 0, !1, {
        fileName: "app/components/Login/Form/LoginForm.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Login/Form/LoginForm.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      ButtonContainer_default,
      {
        type: "submit" /* submit */,
        title: "Login",
        variant: "contained" /* contained */,
        onClick: handleOnSubmit
      },
      void 0,
      !1,
      {
        fileName: "app/components/Login/Form/LoginForm.tsx",
        lineNumber: 70,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Login/Form/LoginForm.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Login/Form/LoginForm.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}, LoginForm_default = LoginForm;

// app/server/request.server.tsx
var import_node = require("@remix-run/node"), badRequest = (data) => (0, import_node.json)(data, { status: 400 }), goodRequest = (data) => (0, import_node.json)(data, { status: 200 });

// app/server/session.server.tsx
var import_node2 = require("@remix-run/node");

// app/server/users.server.tsx
var import_bcryptjs = __toESM(require("bcryptjs"));

// ../../packages/database/prisma/connect.tsx
var import_client = require("@prisma/client"), prisma;
global.db || (global.db = new import_client.PrismaClient(), global.db.$connect());
prisma = global.db;
var connect_default = prisma;

// app/server/users.server.tsx
var getUserSession = (request) => getSession(request.headers.get("Cookie")), getUserId = async (request) => (await getUserSession(request)).get("userId"), login = async ({ email, password }) => {
  try {
    let user = await connect_default.users.findFirst({
      where: { email },
      select: {
        id: !0,
        password: !0
      }
    });
    if (!user)
      throw new Error(WrongLoginData);
    if (!await import_bcryptjs.default.compare(password, user.password))
      throw new Error(WrongLoginData);
    return { id: user.id };
  } catch {
    throw new Error(ErrorSubmit);
  }
};

// app/server/session.server.tsx
var { getSession, commitSession, destroySession } = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "session",
    httpOnly: !0,
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
    secrets: ["s3cret1"],
    secure: !0
  }
}), createUserSession = async ({
  request,
  userId,
  redirectTo
}) => {
  let session = await getUserSession(request);
  return session.set("userId", userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session, {
        expires: new Date(Date.now() + 60 * 60 * 24)
      })
    }
  });
}, removeUserSession = async (request) => {
  let session = await getUserSession(request);
  return (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};

// app/routes/__auth/login.tsx
var import_lodash2 = require("lodash"), import_react5 = require("@remix-run/react"), import_react6 = require("react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader = async ({ request }) => await getUserId(request) ? (0, import_node3.redirect)("/") : {}, action = async ({ request }) => {
  try {
    let formData = await request.formData();
    if (formData.get("intent") === "login") {
      let email = formData.get("email"), password = formData.get("password");
      if (!(0, import_lodash2.isString)(email) || !(0, import_lodash2.isString)(password))
        return badRequest({
          message: ErrorSubmit,
          success: !1
        });
      let fields = { email, password }, fieldErrors = handleLoginErrors(fields);
      if (Object.values(fieldErrors).some(Boolean))
        return badRequest({
          message: ErrorSubmit,
          success: !1
        });
      let user = await login(fields);
      return createUserSession({ request, userId: user.id, redirectTo: "/" });
    }
    return badRequest({
      message: ErrorMessage,
      success: !1
    });
  } catch (error) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: !1
    });
  }
}, Login = () => {
  let submit = (0, import_react5.useSubmit)(), actionData = (0, import_react5.useActionData)(), [data, setData] = (0, import_react6.useState)(initialLogin), [generalError, setGeneralError] = (0, import_react6.useState)("");
  return (0, import_react6.useEffect)(() => {
    actionData && actionData.message && actionData.success === !1 && setGeneralError(actionData.message);
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    LoginForm_default,
    {
      onSubmit: ({ callback }) => {
        let fieldErrors = handleLoginErrors(data);
        if (Object.values(fieldErrors).some(Boolean)) {
          callback(fieldErrors);
          return;
        }
        submit(
          {
            ...data,
            intent: "login"
          },
          {
            method: "post",
            action: "/login"
          }
        );
      },
      data,
      setData,
      generalError,
      setGeneralError
    },
    void 0,
    !1,
    {
      fileName: "app/routes/__auth/login.tsx",
      lineNumber: 107,
      columnNumber: 5
    },
    this
  );
}, login_default = Login;

// app/routes/__app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => app_default
});
var import_react9 = require("@remix-run/react");

// ../../packages/ui/components/Menu/MenuContainer.tsx
var import_react8 = require("react"), import_Box2 = __toESM(require("@mui/material/Box")), import_Menu5 = __toESM(require("@mui/icons-material/Menu")), import_Toolbar2 = __toESM(require("@mui/material/Toolbar"));

// ../../packages/ui/components/Menu/Menu.helper.tsx
var import_List = __toESM(require("@mui/material/List")), import_ListItem = __toESM(require("@mui/material/ListItem")), import_ListItemIcon = __toESM(require("@mui/material/ListItemIcon")), import_ListItemText = __toESM(require("@mui/material/ListItemText")), import_Toolbar = __toESM(require("@mui/material/Toolbar"));

// ../../packages/ui/components/Menu/Menu.style.tsx
var import_styles7 = require("@mui/material/styles");
var import_ListItemButton = __toESM(require("@mui/material/ListItemButton"));
var import_AppBar = __toESM(require("@mui/material/AppBar")), import_IconButton = __toESM(require("@mui/material/IconButton")), import_Box = __toESM(require("@mui/material/Box")), import_Drawer = __toESM(require("@mui/material/Drawer")), import_Divider = __toESM(require("@mui/material/Divider")), StyledAppBar = (0, import_styles7.styled)(import_AppBar.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    width: { sm: `calc(100% - ${menuWidth}px)` },
    boxShadow: "none",
    backgroundColor: colorPalette_default.white,
    borderBottom: "3px solid #F2F2F2",
    ml: { sm: `${menuWidth}px` }
  })
), StyledIconButton = (0, import_styles7.styled)(import_IconButton.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    mr: 2,
    color: colorPalette_default.black,
    display: { sm: "none" }
  })
), StyledMainBox = (0, import_styles7.styled)(import_Box.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    backgroundColor: colorPalette_default.grey.lighter,
    flex: 1,
    p: 3,
    width: {
      sm: `calc(100% - ${menuWidth}px)`
    }
  })
), StyledItemButton = (0, import_styles7.styled)(import_ListItemButton.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    "& .MuiListItemIcon-root": {
      color: colorPalette_default.white,
      paddingLeft: "10px"
    },
    "& .MuiListItemText-root .MuiTypography-root": {
      color: colorPalette_default.white,
      fontSize: { xs: 16, sm: 17 }
    },
    "&.Mui-selected": {
      backgroundColor: colorPalette_default.primary.light
    },
    "&.Mui-selected:hover": {
      backgroundColor: colorPalette_default.primary.light
    },
    "&:hover": {
      backgroundColor: "transparent"
    }
  })
), StyledDrawer = (0, import_styles7.styled)(import_Drawer.default)(
  ({ theme: theme2, display }) => theme2.unstable_sx({
    display,
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: menuWidth,
      backgroundColor: colorPalette_default.primary.base,
      border: "none"
    }
  })
), StyledMenuList = (0, import_styles7.styled)("div")(
  ({ theme: theme2 }) => theme2.unstable_sx({
    display: "flex",
    flexDirection: "column",
    height: "100%"
  })
), StyledDivider = (0, import_styles7.styled)(import_Divider.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    marginTop: "auto",
    borderColor: colorPalette_default.white
  })
);

// ../../packages/ui/components/Menu/Menu.helper.tsx
var import_react7 = require("@remix-run/react"), import_Logout = __toESM(require("@mui/icons-material/Logout"));
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
var menuItems = (onLogoutClick) => {
  let navigate = (0, import_react7.useNavigate)(), pathName = (0, import_react7.useLocation)().pathname;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(StyledMenuList, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_Toolbar.default, {}, void 0, !1, {
      fileName: "../../packages/ui/components/Menu/Menu.helper.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_List.default, { children: MenuList.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_ListItem.default, { disablePadding: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      StyledItemButton,
      {
        selected: item.url.split("/")[1] === pathName.split("/")[1],
        onClick: () => navigate(item.url),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_ListItemIcon.default, { children: item.icon }, void 0, !1, {
            fileName: "../../packages/ui/components/Menu/Menu.helper.tsx",
            lineNumber: 34,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_ListItemText.default, { primary: item.label }, void 0, !1, {
            fileName: "../../packages/ui/components/Menu/Menu.helper.tsx",
            lineNumber: 36,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "../../packages/ui/components/Menu/Menu.helper.tsx",
        lineNumber: 30,
        columnNumber: 13
      },
      this
    ) }, index, !1, {
      fileName: "../../packages/ui/components/Menu/Menu.helper.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "../../packages/ui/components/Menu/Menu.helper.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(StyledDivider, {}, void 0, !1, {
      fileName: "../../packages/ui/components/Menu/Menu.helper.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_ListItem.default, { disablePadding: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(StyledItemButton, { onClick: () => onLogoutClick(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_ListItemIcon.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_Logout.default, {}, void 0, !1, {
        fileName: "../../packages/ui/components/Menu/Menu.helper.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "../../packages/ui/components/Menu/Menu.helper.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_ListItemText.default, { primary: "Logout" }, void 0, !1, {
        fileName: "../../packages/ui/components/Menu/Menu.helper.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "../../packages/ui/components/Menu/Menu.helper.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "../../packages/ui/components/Menu/Menu.helper.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "../../packages/ui/components/Menu/Menu.helper.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
};

// ../../packages/ui/components/Menu/MenuContainer.tsx
var import_Typography3 = __toESM(require("@mui/material/Typography"));
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Menu = ({ onLogoutClick, children }) => {
  let [mobileOpen, setMobileOpen] = (0, import_react8.useState)(!1), handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Flex_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(StyledAppBar, { position: "fixed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_Toolbar2.default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(StyledIconButton, { onClick: handleMenuToggle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_Menu5.default, {}, void 0, !1, {
        fileName: "../../packages/ui/components/Menu/MenuContainer.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "../../packages/ui/components/Menu/MenuContainer.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_Typography3.default, { variant: "h5", children: menuTitle }, void 0, !1, {
        fileName: "../../packages/ui/components/Menu/MenuContainer.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "../../packages/ui/components/Menu/MenuContainer.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "../../packages/ui/components/Menu/MenuContainer.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_Box2.default,
      {
        component: "nav",
        sx: {
          width: { sm: menuWidth },
          flexShrink: { sm: 0 }
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            StyledDrawer,
            {
              variant: "temporary",
              open: mobileOpen,
              onClose: handleMenuToggle,
              ModalProps: {
                keepMounted: !0
              },
              display: { xs: "block", sm: "none" },
              children: menuItems(onLogoutClick)
            },
            void 0,
            !1,
            {
              fileName: "../../packages/ui/components/Menu/MenuContainer.tsx",
              lineNumber: 43,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            StyledDrawer,
            {
              variant: "permanent",
              display: { xs: "none", sm: "block" },
              open: !0,
              children: menuItems(onLogoutClick)
            },
            void 0,
            !1,
            {
              fileName: "../../packages/ui/components/Menu/MenuContainer.tsx",
              lineNumber: 55,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "../../packages/ui/components/Menu/MenuContainer.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(StyledMainBox, { component: "main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_Toolbar2.default, {}, void 0, !1, {
        fileName: "../../packages/ui/components/Menu/MenuContainer.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      children
    ] }, void 0, !0, {
      fileName: "../../packages/ui/components/Menu/MenuContainer.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "../../packages/ui/components/Menu/MenuContainer.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}, MenuContainer_default = Menu;

// app/routes/__app.tsx
var import_react10 = require("react"), import_Snackbar = __toESM(require("@mui/material/Snackbar")), import_Alert2 = __toESM(require("@mui/material/Alert")), import_isBoolean = __toESM(require("lodash/isBoolean")), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), AppLayout = () => {
  let navigation = (0, import_react9.useNavigation)(), submit = (0, import_react9.useSubmit)(), actionData = (0, import_react9.useActionData)(), [alertData, setAlertData] = (0, import_react10.useState)(), [isOpen, setIsOpen] = (0, import_react10.useState)(!1);
  (0, import_react10.useEffect)(() => {
    actionData && actionData.message && (0, import_isBoolean.default)(actionData.success) && (setAlertData(actionData), setIsOpen(!0));
  }, [actionData]);
  let handleLogout = () => {
    submit(
      { intent: "logout" },
      {
        method: "post",
        action: "/?index"
      }
    );
  }, handleAlertClose = () => {
    setIsOpen(!1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(MenuContainer_default, { onLogoutClick: handleLogout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__app.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    (navigation.state === "submitting" || navigation.state === "loading") && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(SpinnerContainer_default, {}, void 0, !1, {
      fileName: "app/routes/__app.tsx",
      lineNumber: 49,
      columnNumber: 44
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_Snackbar.default,
      {
        open: isOpen,
        autoHideDuration: 3e3,
        onClose: handleAlertClose,
        anchorOrigin: { vertical: "top", horizontal: "right" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          import_Alert2.default,
          {
            onClose: handleAlertClose,
            severity: alertData != null && alertData.success ? "success" : "error",
            children: alertData == null ? void 0 : alertData.message
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__app.tsx",
            lineNumber: 57,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app.tsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}, app_default = AppLayout;

// app/routes/__app/libraries/$libraryId.tsx
var libraryId_exports = {};
__export(libraryId_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action2,
  default: () => libraryId_default,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react14 = require("@remix-run/react"), import_lodash4 = require("lodash"), import_react15 = require("react");

// app/components/ErrorInterface/ErrorInterface.tsx
var import_material = require("@mui/material");

// app/components/ErrorInterface/ErrorInterface.style.tsx
var import_styled_components3 = __toESM(require("styled-components"));
var StyledCenteredFlex = (0, import_styled_components3.default)(CenteredColumnFlex)`
  margin-top: 100px;
  @media (max-width: 900px) {
    margin-top: 50px;
  }
`;

// app/components/ErrorInterface/ErrorInterface.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), ErrorInterface = () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(StyledCenteredFlex, { gap: "10px", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material.Typography, { variant: "h5", children: "An error occured!" }, void 0, !1, {
    fileName: "app/components/ErrorInterface/ErrorInterface.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material.Typography, { variant: "h2", children: "Please try again" }, void 0, !1, {
    fileName: "app/components/ErrorInterface/ErrorInterface.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/ErrorInterface/ErrorInterface.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), ErrorInterface_default = ErrorInterface;

// app/components/LayoutTitle/LayoutTitle.tsx
var import_Typography4 = __toESM(require("@mui/material/Typography"));

// app/components/LayoutTitle/LayoutTitle.style.tsx
var import_styled_components4 = __toESM(require("styled-components"));
var import_ArrowBackIosNew = __toESM(require("@mui/icons-material/ArrowBackIosNew")), import_styles8 = require("@mui/material/styles");
var import_IconButton2 = __toESM(require("@mui/material/IconButton")), StyledArrowIcon = (0, import_styles8.styled)(import_ArrowBackIosNew.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    height: "20px",
    color: colorPalette_default.black
  })
), StyledIconButton2 = (0, import_styles8.styled)(import_IconButton2.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    minWidth: "50px",
    justifyContent: "left",
    padding: "10px"
  })
), StyledHeaderFlex = (0, import_styled_components4.default)(SpaceBetweenCenterFlex)`
  margin: 15px 0 25px 0;
`;

// app/components/LayoutTitle/LayoutTitle.tsx
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), LayoutTitle = ({
  title,
  backUrl,
  children
}) => {
  let navigate = (0, import_react11.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(StyledHeaderFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(AlignedFlex, { children: [
      backUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(StyledIconButton2, { onClick: () => navigate(backUrl), children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(StyledArrowIcon, {}, void 0, !1, {
        fileName: "app/components/LayoutTitle/LayoutTitle.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/LayoutTitle/LayoutTitle.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_Typography4.default, { variant: "h4", children: title }, void 0, !1, {
        fileName: "app/components/LayoutTitle/LayoutTitle.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/LayoutTitle/LayoutTitle.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, !0, {
    fileName: "app/components/LayoutTitle/LayoutTitle.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}, LayoutTitle_default = LayoutTitle;

// app/components/Libraries/Form/LibrariesForm.tsx
var import_Paper2 = __toESM(require("@mui/material/Paper"));
var import_react12 = require("react"), import_react13 = require("@remix-run/react");

// ../../packages/ui/utils/common.tsx
var import_dayjs = __toESM(require("dayjs")), import_moment = __toESM(require("moment")), import_isBetween = __toESM(require("dayjs/plugin/isBetween"));
import_dayjs.default.extend(import_isBetween.default);
var readFileAsync = (file) => new Promise((resolve, reject) => {
  let reader = new FileReader();
  reader.readAsDataURL(file), reader.onload = () => {
    resolve(reader.result);
  }, reader.onerror = reject;
}), checkIfValidDate = (date) => (0, import_dayjs.default)(date).isValid(), transformDate = (date) => date && checkIfValidDate(date) ? (0, import_dayjs.default)(date).format() : "", getYearFromDate = (date) => date && checkIfValidDate(date) && (0, import_dayjs.default)(date).isBetween("1900", "2099", "year") && (0, import_dayjs.default)(date).get("year").toString() || (0, import_dayjs.default)().year().toString(), getCorrectYear = (year) => year && checkIfNumber(year) && year.length === 4 && (0, import_dayjs.default)(year).isBetween("1900", "2099", "year") && parseInt(year) || (0, import_dayjs.default)().year(), formatLoangDate = (date) => (0, import_moment.default)(date).format("DD MMM YYYY, HH:mm"), formatShortDate = (date) => (0, import_moment.default)(date).format("DD MMM YYYY"), addDateDays = (days) => {
  let date = new Date();
  return date.setDate(date.getDate() + days), date;
}, checkIfNumber = (value) => /^\d+$/.test(value), checkIfEmail = (email) => /@/.test(email), toFindDuplicates = (arry) => arry.filter((item, index) => arry.indexOf(item) !== index), isValidUrl = (url) => {
  try {
    let newUrl = new URL(url);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch {
    return !1;
  }
}, Months = [
  { value: 1, name: "January" },
  { value: 2, name: "February" },
  { value: 3, name: "March" },
  { value: 4, name: "April" },
  { value: 5, name: "May" },
  { value: 6, name: "June" },
  { value: 7, name: "July" },
  { value: 8, name: "August" },
  { value: 9, name: "September" },
  { value: 10, name: "October" },
  { value: 11, name: "November" },
  { value: 12, name: "December" }
];

// ../../packages/ui/components/TimePicker/TimePickerContainer.tsx
var import_TextField2 = __toESM(require("@mui/material/TextField")), import_AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs"), import_LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider"), import_TimePicker = require("@mui/x-date-pickers/TimePicker"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), TimePickerContainer = ({
  label,
  value,
  errorMessage,
  onChange
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_LocalizationProvider.LocalizationProvider, { dateAdapter: import_AdapterDayjs.AdapterDayjs, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
  import_TimePicker.TimePicker,
  {
    label,
    value,
    onChange,
    renderInput: (params) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      import_TextField2.default,
      {
        ...params,
        error: !!errorMessage,
        variant: "standard",
        helperText: errorMessage
      },
      void 0,
      !1,
      {
        fileName: "../../packages/ui/components/TimePicker/TimePickerContainer.tsx",
        lineNumber: 19,
        columnNumber: 9
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "../../packages/ui/components/TimePicker/TimePickerContainer.tsx",
    lineNumber: 14,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "../../packages/ui/components/TimePicker/TimePickerContainer.tsx",
  lineNumber: 13,
  columnNumber: 3
}, this), TimePickerContainer_default = TimePickerContainer;

// app/components/Libraries/Libraries.const.tsx
var Libraries = "Libraries", NewLibrary = "New library", CreateLibraryTitle = "Create library", UpdateLibraryTitle = "Update library", ScheduleTitle = "Opening hours", Details = "Address details", Cities = "Cities", ErrorCreate = "There was a problem in creating the library", SuccessCreate = "Library created successfully", ErrorGetPaginated = "There was a problem in receiving libraries", ErrorGetSingle = "There was a problem in receiving library", ErrorDelete = "There was a problem in deleting the library", SuccessDelete = "Library deleted successfuly", ErrorUpdate = "There was a problem in updating the library", SuccessUpdate = "Library updated successfully", SearchPlaceholder = "Search for name or phone", initialLibrary = {
  name: "",
  city: "",
  address: "",
  phone: "",
  schedule: {
    mondayFriday: { from: "", to: "" },
    saturday: { from: "", to: "" }
  }
}, librariesColumns = [
  { name: "name", value: "Name" },
  { name: "city", value: "City" },
  { name: "phone", value: "Phone" }
];

// app/components/Libraries/Libraries.style.tsx
var import_Typography5 = __toESM(require("@mui/material/Typography")), import_styles9 = require("@mui/material/styles"), import_styled_components5 = __toESM(require("styled-components"));
var StyledTitle = (0, import_styles9.styled)(import_Typography5.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    marginBottom: "20px"
  })
), StyledTypography = (0, import_styles9.styled)(import_Typography5.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    minWidth: { xs: "120px", sm: "135px" },
    fontWeight: "600"
  })
), StyledFlexButton = (0, import_styled_components5.default)(Flex_default)`
  justify-content: right;
  margin-top: 50px;
  gap: 10px;
  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

// ../../packages/ui/components/Autocomplete/AutocompleteContainer.tsx
var import_TextField3 = __toESM(require("@mui/material/TextField"));

// ../../packages/ui/components/Autocomplete/Autocomplete.style.tsx
var import_Autocomplete = __toESM(require("@mui/material/Autocomplete")), import_styles10 = require("@mui/material/styles"), StandardAutocomplete = (0, import_styles10.styled)(
  import_Autocomplete.default
)(
  ({ width, theme: theme2 }) => theme2.unstable_sx({
    flex: 1,
    maxWidth: { md: width, xs: "100%" }
  })
);

// ../../packages/ui/components/Autocomplete/AutocompleteContainer.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), AutocompleteContainer = ({
  label,
  value,
  options,
  errorMessage,
  onChange,
  width = "inherit",
  placeholder = ""
}) => {
  let handleOnChange = (event, value2) => {
    onChange(value2);
  }, selectedValue = value && options.find((item) => item.id === value) || null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    StandardAutocomplete,
    {
      disablePortal: !0,
      width,
      options,
      getOptionLabel: (option) => option.name,
      value: selectedValue,
      onChange: handleOnChange,
      renderInput: (params) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_TextField3.default,
        {
          ...params,
          label,
          placeholder,
          variant: "standard",
          error: !!errorMessage,
          helperText: errorMessage
        },
        void 0,
        !1,
        {
          fileName: "../../packages/ui/components/Autocomplete/AutocompleteContainer.tsx",
          lineNumber: 30,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "../../packages/ui/components/Autocomplete/AutocompleteContainer.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}, AutocompleteContainer_default = AutocompleteContainer;

// app/components/Books/Books.style.tsx
var import_styled_components6 = __toESM(require("styled-components"));
var import_styles11 = require("@mui/material/styles"), import_Fab = __toESM(require("@mui/material/Fab")), import_Remove = __toESM(require("@mui/icons-material/Remove")), StyledFilters = (0, import_styled_components6.default)(SpaceBetweenFlex)`
  gap: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`, StyledColumnFlex = (0, import_styled_components6.default)(ColumnFlex)`
  gap: 20px;
  flex: 1;
  align-self: flex-start;
  @media (max-width: 899px) {
    max-width: 100%;
    align-self: auto;
  }
`, StyleFlex = (0, import_styled_components6.default)(Flex_default)`
  gap: 50px;
  max-width: 750px;
  @media (max-width: 900px) {
    gap: 20px;
    flex-direction: column;
  }
`, UnitsFlex = (0, import_styled_components6.default)(Flex_default)`
  gap: 20px;
  max-width: 710px;
  background-color: ${colorPalette_default.grey.lightest};
  padding: 20px;
  border-radius: 10px;
  position: relative;
  @media (max-width: 900px) {
    gap: 20px;
    flex-direction: column;
  }
`, StyledAddFab = (0, import_styles11.styled)(import_Fab.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    width: "35px",
    height: "35px",
    minHeight: "35px",
    boxShadow: "none"
  })
), StyledRemoveFab = (0, import_styles11.styled)(import_Fab.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    width: "25px",
    height: "25px",
    minHeight: "25px",
    boxShadow: "none",
    position: "absolute",
    top: "-7px",
    right: "-7px"
  })
), StyledRemoveIcon = (0, import_styles11.styled)(import_Remove.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    width: "17px",
    height: "17px"
  })
);

// app/components/Libraries/Form/LibrariesForm.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), LibrariesForm = ({
  onSubmit,
  setLibrary,
  library,
  cities
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let navigate = (0, import_react13.useNavigate)(), urlParams = (0, import_react13.useParams)(), [errors, setErrors] = (0, import_react12.useState)({}), handleInputChange = (value, field) => {
    setLibrary((oldLibrary) => ({ ...oldLibrary, [field]: value })), errors[field] && setErrors((oldErrors) => (delete oldErrors[field], oldErrors));
  }, handleMondayFriday = (value, field) => {
    var _a2;
    let newTime = transformDate(value);
    setLibrary((oldLibrary) => ({
      ...oldLibrary,
      schedule: {
        ...oldLibrary.schedule,
        mondayFriday: { ...oldLibrary.schedule.mondayFriday, [field]: newTime }
      }
    })), ((_a2 = errors.schedule) == null ? void 0 : _a2.mondayFriday) && errors.schedule.mondayFriday[field] && (delete errors.schedule.mondayFriday[field], setErrors(errors));
  }, handleSaturday = (value, field) => {
    var _a2;
    let newTime = transformDate(value);
    setLibrary((oldLibrary) => ({
      ...oldLibrary,
      schedule: {
        ...oldLibrary.schedule,
        saturday: { ...oldLibrary.schedule.saturday, [field]: newTime }
      }
    })), ((_a2 = errors.schedule) == null ? void 0 : _a2.saturday) && errors.schedule.saturday[field] && (delete errors.schedule.saturday[field], setErrors(errors));
  }, handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors) => setErrors(fieldErrors)
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_Paper2.default, { className: "overview-paper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(StyleFlex, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(StyledColumnFlex, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(StyledTitle, { variant: "h3", children: Details }, void 0, !1, {
          fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          InputContainer_default,
          {
            label: "Name*",
            errorMessage: errors.name,
            value: library.name,
            onChange: (value) => handleInputChange(value, "name" /* name */)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
            lineNumber: 98,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          AutocompleteContainer_default,
          {
            label: "City*",
            onChange: (value) => handleInputChange((value == null ? void 0 : value.id) || "", "city" /* city */),
            errorMessage: errors.city,
            options: cities,
            value: library.city
          },
          void 0,
          !1,
          {
            fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
            lineNumber: 106,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          InputContainer_default,
          {
            label: "Address*",
            errorMessage: errors.address,
            value: library.address,
            onChange: (value) => handleInputChange(value, "address" /* address */),
            multiline: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
            lineNumber: 115,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          InputContainer_default,
          {
            label: "Phone*",
            errorMessage: errors.phone,
            value: library.phone,
            onChange: (value) => handleInputChange(value, "phone" /* phone */)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
            lineNumber: 124,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(StyledColumnFlex, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          StyledTitle,
          {
            variant: "h3",
            sx: {
              marginTop: { sm: "30px", md: "0" }
            },
            children: ScheduleTitle
          },
          void 0,
          !1,
          {
            fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
            lineNumber: 135,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(AlignedFlex, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(StyledTypography, { variant: "h1", children: "Monday-Friday:" }, void 0, !1, {
            fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
            lineNumber: 145,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(ColumnFlex, { gap: "20px", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              TimePickerContainer_default,
              {
                label: "From*",
                errorMessage: (_b = (_a = errors.schedule) == null ? void 0 : _a.mondayFriday) == null ? void 0 : _b.from,
                value: library.schedule.mondayFriday.from,
                onChange: (value) => handleMondayFriday(value, "from" /* from */)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
                lineNumber: 148,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              TimePickerContainer_default,
              {
                label: "To*",
                errorMessage: (_d = (_c = errors.schedule) == null ? void 0 : _c.mondayFriday) == null ? void 0 : _d.to,
                value: library.schedule.mondayFriday.to,
                onChange: (value) => handleMondayFriday(value, "to" /* to */)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
                lineNumber: 156,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
            lineNumber: 147,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(AlignedFlex, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(StyledTypography, { variant: "h1", children: "Saturday:" }, void 0, !1, {
            fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
            lineNumber: 168,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(ColumnFlex, { gap: "20px", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              TimePickerContainer_default,
              {
                label: "From*",
                value: library.schedule.saturday.from,
                errorMessage: (_f = (_e = errors.schedule) == null ? void 0 : _e.saturday) == null ? void 0 : _f.from,
                onChange: (value) => handleSaturday(value, "from" /* from */)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
                lineNumber: 171,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              TimePickerContainer_default,
              {
                label: "To*",
                value: library.schedule.saturday.to,
                errorMessage: (_h = (_g = errors.schedule) == null ? void 0 : _g.saturday) == null ? void 0 : _h.to,
                onChange: (value) => handleSaturday(value, "to" /* to */)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
                lineNumber: 179,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
            lineNumber: 170,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(StyledFlexButton, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        ButtonContainer_default,
        {
          title: "Cancel",
          variant: "outlined" /* outlined */,
          onClick: () => navigate("/libraries")
        },
        void 0,
        !1,
        {
          fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
          lineNumber: 193,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        ButtonContainer_default,
        {
          type: "submit" /* submit */,
          title: urlParams.libraryId ? "Update" : "Create",
          variant: "contained" /* contained */,
          onClick: handleOnSubmit
        },
        void 0,
        !1,
        {
          fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
          lineNumber: 198,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Libraries/Form/LibrariesForm.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}, LibrariesForm_default = LibrariesForm;

// app/components/Libraries/Libraries.helper.tsx
var import_lodash3 = require("lodash");
var handleLibraryErrors = (formData) => {
  var _a, _b, _c, _d;
  let errors = {}, {
    name,
    city,
    address,
    phone,
    schedule: {
      mondayFriday: { from: mondayFridayFrom, to: mondayFridayTo },
      saturday: { from: saturdayFrom, to: saturdayTo }
    }
  } = formData;
  return (0, import_lodash3.isEmpty)(name) && (errors.name = RequiredField), (0, import_lodash3.isEmpty)(city) && (errors.city = RequiredField), (0, import_lodash3.isEmpty)(address) && (errors.address = RequiredField), (0, import_lodash3.isEmpty)(phone) ? errors.phone = RequiredField : (!checkIfNumber(phone) || phone.length !== 10) && (errors.phone = InvalidField), ((0, import_lodash3.isEmpty)(mondayFridayFrom) || !checkIfValidDate(mondayFridayFrom)) && (errors = {
    ...errors,
    schedule: {
      ...errors.schedule,
      mondayFriday: {
        ...(_a = errors.schedule) == null ? void 0 : _a.mondayFriday,
        from: RequiredField
      }
    }
  }), ((0, import_lodash3.isEmpty)(mondayFridayTo) || !checkIfValidDate(mondayFridayFrom)) && (errors = {
    ...errors,
    schedule: {
      ...errors.schedule,
      mondayFriday: {
        ...(_b = errors.schedule) == null ? void 0 : _b.mondayFriday,
        to: RequiredField
      }
    }
  }), ((0, import_lodash3.isEmpty)(saturdayFrom) || !checkIfValidDate(mondayFridayFrom)) && (errors = {
    ...errors,
    schedule: {
      ...errors.schedule,
      saturday: {
        ...(_c = errors.schedule) == null ? void 0 : _c.saturday,
        from: RequiredField
      }
    }
  }), ((0, import_lodash3.isEmpty)(saturdayTo) || !checkIfValidDate(mondayFridayFrom)) && (errors = {
    ...errors,
    schedule: {
      ...errors.schedule,
      saturday: {
        ...(_d = errors.schedule) == null ? void 0 : _d.saturday,
        to: RequiredField
      }
    }
  }), errors;
};

// app/server/cities.server.tsx
var getCities = async () => {
  try {
    let cities = await connect_default.cities.findMany({
      select: {
        id: !0,
        name: !0
      }
    });
    if (!cities)
      throw new Error(ErrorMessage);
    return cities;
  } catch {
    throw new Error(ErrorMessage);
  }
};

// app/transformers/libraries.transformer.tsx
var fromPaginatedLibrariesResponse = (libraries) => libraries.map((item) => ({
  ...item,
  city: item.city.name
})), fromSingleLibraryResponse = (library) => ({ ...library, city: library.city.id });

// app/server/libraries.server.tsx
var getPaginatedLibraries = async ({
  page,
  search,
  city
}) => {
  try {
    let skip = page && page > 1 && (page - 1) * 5 || void 0;
    return await connect_default.$transaction(async (db) => {
      let count = await db.libraries.count({
        where: {
          deleted: !1,
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive"
              }
            },
            { phone: { contains: search, mode: "insensitive" } }
          ],
          city: city && {
            name: city
          } || void 0
        },
        orderBy: {
          createdAt: "desc"
        }
      }), data = await db.libraries.findMany({
        skip,
        take: 5,
        where: {
          deleted: !1,
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive"
              }
            },
            { phone: { contains: search, mode: "insensitive" } }
          ],
          city: city && {
            name: city
          } || void 0
        },
        select: {
          id: !0,
          name: !0,
          city: {
            select: {
              name: !0
            }
          },
          phone: !0
        },
        orderBy: {
          createdAt: "desc"
        }
      });
      if (!data)
        throw new Error(ErrorGetPaginated);
      return { count, data: fromPaginatedLibrariesResponse(data) };
    });
  } catch {
    throw new Error(ErrorGetPaginated);
  }
}, getSingleLibrary = async ({ libraryId }) => {
  try {
    let library = await connect_default.libraries.findFirst({
      where: {
        id: libraryId,
        deleted: !1
      },
      select: {
        name: !0,
        city: {
          select: {
            id: !0
          }
        },
        address: !0,
        phone: !0,
        schedule: !0
      }
    });
    if (!library)
      throw new Error(ErrorGetSingle);
    return fromSingleLibraryResponse(library);
  } catch {
    throw new Error(ErrorGetSingle);
  }
}, createLibrary = async ({
  name,
  city,
  address,
  phone,
  schedule
}) => {
  try {
    if (await connect_default.libraries.findFirst({
      where: {
        name,
        deleted: !1
      },
      select: {
        id: !0
      }
    }))
      throw new Error(ErrorCreate);
    let library = await connect_default.libraries.create({
      data: {
        name,
        cityId: city,
        address,
        phone,
        schedule
      }
    });
    if (!library)
      throw new Error(ErrorCreate);
    return library;
  } catch {
    throw new Error(ErrorCreate);
  }
}, updateLibrary = async ({
  libraryId,
  name,
  city,
  address,
  phone,
  schedule
}) => {
  try {
    if (await connect_default.libraries.findFirst({
      where: {
        name,
        deleted: !1,
        id: { not: libraryId }
      },
      select: {
        id: !0
      }
    }))
      throw new Error(ErrorUpdate);
    let library = await connect_default.libraries.updateMany({
      where: {
        id: libraryId,
        deleted: !1
      },
      data: {
        name,
        cityId: city,
        address,
        phone,
        schedule
      }
    });
    if (!library)
      throw new Error(ErrorUpdate);
    return library;
  } catch {
    throw new Error(ErrorUpdate);
  }
}, deleteLibrary = async ({ libraryId }) => {
  try {
    let library = await connect_default.libraries.update({
      where: {
        id: libraryId
      },
      data: {
        deleted: !0,
        bookLibraries: {
          updateMany: {
            where: { deleted: !1 },
            data: {
              deleted: !0
            }
          }
        }
      }
    });
    if (!library)
      throw new Error(ErrorDelete);
    return library;
  } catch {
    throw new Error(ErrorDelete);
  }
}, getLibraries = async () => {
  try {
    let libraries = await connect_default.libraries.findMany({
      select: {
        id: !0,
        name: !0
      }
    });
    if (!libraries)
      throw new Error(ErrorMessage);
    return libraries;
  } catch {
    throw new Error(ErrorMessage);
  }
};

// app/routes/__app/libraries/$libraryId.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node4.redirect)("/login");
  try {
    let libraryId = new URL(request.url).pathname.split("/").pop();
    if (!(0, import_lodash4.isString)(libraryId))
      return badRequest({
        message: ErrorGetSingle,
        success: !1
      });
    let [library, cities] = await Promise.all([
      getSingleLibrary({
        libraryId
      }),
      getCities()
    ]);
    return goodRequest({ library, cities });
  } catch (error) {
    throw new Error(error.message || ErrorMessage);
  }
}, ErrorBoundary = () => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(ErrorInterface_default, {}, void 0, !1, {
  fileName: "app/routes/__app/libraries/$libraryId.tsx",
  lineNumber: 66,
  columnNumber: 10
}, this), action2 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node4.redirect)("/login");
  try {
    let formData = await request.formData();
    if (formData.get("intent") === "update") {
      let name = formData.get("name"), city = formData.get("city"), address = formData.get("address"), phone = formData.get("phone"), schedule = formData.get("schedule"), libraryId = new URL(request.url).pathname.split("/").pop();
      if (!(0, import_lodash4.isString)(libraryId) || !(0, import_lodash4.isString)(name) || !(0, import_lodash4.isString)(city) || !(0, import_lodash4.isString)(address) || !(0, import_lodash4.isString)(phone) || !(0, import_lodash4.isString)(schedule))
        return badRequest({
          message: ErrorUpdate,
          success: !1
        });
      let objectSchedule = JSON.parse(schedule), fields = { name, city, address, phone, schedule: objectSchedule }, fieldErrors = handleLibraryErrors(fields);
      return Object.values(fieldErrors).some(Boolean) ? badRequest({
        message: ErrorUpdate,
        success: !1
      }) : (await updateLibrary({ ...fields, libraryId }), goodRequest({
        message: SuccessUpdate,
        success: !0
      }));
    }
    return badRequest({
      message: ErrorMessage,
      success: !1
    });
  } catch (error) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: !1
    });
  }
}, UpdateLibrary = () => {
  let submit = (0, import_react14.useSubmit)(), actionData = (0, import_react14.useActionData)(), navigate = (0, import_react14.useNavigate)(), data = (0, import_react14.useLoaderData)(), urlParams = (0, import_react14.useParams)(), [library, setLibrary] = (0, import_react15.useState)(data.library), cities = data.cities;
  return (0, import_react15.useEffect)(() => {
    actionData && (0, import_lodash4.isBoolean)(actionData.success) && navigate("/libraries");
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(ColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(LayoutTitle_default, { title: UpdateLibraryTitle, backUrl: "/libraries" }, void 0, !1, {
      fileName: "app/routes/__app/libraries/$libraryId.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      LibrariesForm_default,
      {
        onSubmit: ({ callback }) => {
          let fieldErrors = handleLibraryErrors(library);
          if (Object.values(fieldErrors).some(Boolean)) {
            callback(fieldErrors);
            return;
          }
          let stringSchedule = JSON.stringify(library.schedule);
          submit(
            {
              ...library,
              schedule: stringSchedule,
              intent: "update"
            },
            {
              method: "post",
              action: `/libraries/${urlParams.libraryId}`
            }
          );
        },
        setLibrary,
        library,
        cities
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/libraries/$libraryId.tsx",
        lineNumber: 179,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app/libraries/$libraryId.tsx",
    lineNumber: 177,
    columnNumber: 5
  }, this);
}, libraryId_default = UpdateLibrary;

// app/routes/__app/readers/$readerId.tsx
var readerId_exports = {};
__export(readerId_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action3,
  default: () => readerId_default,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react18 = require("@remix-run/react"), import_lodash6 = require("lodash"), import_react19 = require("react");

// app/components/Readers/Form/ReadersForm.tsx
var import_Paper3 = __toESM(require("@mui/material/Paper"));
var import_react16 = require("react"), import_react17 = require("@remix-run/react");

// ../../packages/ui/components/DatePicker/DatePickerContainer.tsx
var import_DatePicker = require("@mui/x-date-pickers/DatePicker"), import_LocalizationProvider2 = require("@mui/x-date-pickers/LocalizationProvider"), import_AdapterDayjs2 = require("@mui/x-date-pickers/AdapterDayjs"), import_TextField4 = __toESM(require("@mui/material/TextField")), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), DatePickerContainer = ({
  label,
  value,
  errorMessage,
  onChange,
  onKeyDown,
  views
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_LocalizationProvider2.LocalizationProvider, { dateAdapter: import_AdapterDayjs2.AdapterDayjs, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
  import_DatePicker.DatePicker,
  {
    label,
    value,
    onChange,
    views,
    renderInput: (params) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      import_TextField4.default,
      {
        ...params,
        onKeyDown,
        error: !!errorMessage,
        variant: "standard",
        helperText: errorMessage
      },
      void 0,
      !1,
      {
        fileName: "../../packages/ui/components/DatePicker/DatePickerContainer.tsx",
        lineNumber: 22,
        columnNumber: 9
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "../../packages/ui/components/DatePicker/DatePickerContainer.tsx",
    lineNumber: 16,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "../../packages/ui/components/DatePicker/DatePickerContainer.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this), DatePickerContainer_default = DatePickerContainer;

// app/components/Readers/Readers.const.tsx
var Readers = "Readers", NewReader = "New reader", CreateReaderTitle = "Create reader", UpdateReaderTitle = "Update reader", ErrorCreate2 = "There was a problem in creating the reader", SuccessCreate2 = "Reader created successfully", ErrorGetPaginated2 = "There was a problem in receiving readers", ErrorGetSingle2 = "There was a problem in receiving reader", ErrorDelete2 = "There was a problem in deleting the reader", SuccessDelete2 = "Reader deleted successfuly", ErrorUpdate2 = "There was a problem in updating the reader", SuccessUpdate2 = "Reader updated successfully";
var SearchPlaceholder2 = "Search for name, email or phone", Details2 = "Details", Cities2 = "Cities", NewReaderSubject = "New reader account", initialReader = {
  name: "",
  city: "",
  phone: "",
  address: "",
  email: "",
  birthdate: ""
}, readersColumns = [
  { name: "name", value: "Name" },
  { name: "email", value: "Email" },
  { name: "city", value: "City" },
  { name: "phone", value: "Phone" }
];

// app/components/Readers/Form/ReadersForm.tsx
var import_Typography6 = __toESM(require("@mui/material/Typography"));
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), ReadersForm = ({
  onSubmit,
  setReader,
  reader,
  cities
}) => {
  let navigate = (0, import_react17.useNavigate)(), urlParams = (0, import_react17.useParams)(), [errors, setErrors] = (0, import_react16.useState)({}), handleInputChange = (value, field) => {
    setReader((oldReader) => ({ ...oldReader, [field]: value })), errors[field] && setErrors((oldErrors) => (delete oldErrors[field], oldErrors));
  }, handleBirthdate = (value, field) => {
    let newTime = transformDate(value);
    setReader((oldReader) => ({ ...oldReader, [field]: newTime })), errors[field] && setErrors((oldErrors) => (delete oldErrors[field], oldErrors));
  }, handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors) => setErrors(fieldErrors)
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_Paper3.default, { className: "overview-paper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ColumnFlex, { gap: "40px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_Typography6.default, { variant: "h3", children: Details2 }, void 0, !1, {
        fileName: "app/components/Readers/Form/ReadersForm.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(StyleFlex, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(StyledColumnFlex, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            InputContainer_default,
            {
              label: "Name*",
              errorMessage: errors.name,
              value: reader.name,
              onChange: (value) => handleInputChange(value, "name" /* name */)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Readers/Form/ReadersForm.tsx",
              lineNumber: 69,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            InputContainer_default,
            {
              label: "Email*",
              errorMessage: errors.email,
              value: reader.email,
              onChange: (value) => handleInputChange(value, "email" /* email */),
              multiline: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/Readers/Form/ReadersForm.tsx",
              lineNumber: 77,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            AutocompleteContainer_default,
            {
              label: "City*",
              onChange: (value) => handleInputChange((value == null ? void 0 : value.id) || "", "city" /* city */),
              errorMessage: errors.city,
              options: cities,
              value: reader.city
            },
            void 0,
            !1,
            {
              fileName: "app/components/Readers/Form/ReadersForm.tsx",
              lineNumber: 86,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Readers/Form/ReadersForm.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(StyledColumnFlex, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            InputContainer_default,
            {
              label: "Address*",
              errorMessage: errors.address,
              value: reader.address,
              onChange: (value) => handleInputChange(value, "address" /* address */),
              multiline: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/Readers/Form/ReadersForm.tsx",
              lineNumber: 98,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            InputContainer_default,
            {
              label: "Phone*",
              errorMessage: errors.phone,
              value: reader.phone,
              onChange: (value) => handleInputChange(value, "phone" /* phone */)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Readers/Form/ReadersForm.tsx",
              lineNumber: 107,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            DatePickerContainer_default,
            {
              label: "Birthdate*",
              value: reader.birthdate,
              errorMessage: errors.birthdate,
              onChange: (value) => handleBirthdate(value, "birthdate" /* birthdate */)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Readers/Form/ReadersForm.tsx",
              lineNumber: 116,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Readers/Form/ReadersForm.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Readers/Form/ReadersForm.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Readers/Form/ReadersForm.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(StyledFlexButton, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        ButtonContainer_default,
        {
          title: "Cancel",
          variant: "outlined" /* outlined */,
          onClick: () => navigate("/readers")
        },
        void 0,
        !1,
        {
          fileName: "app/components/Readers/Form/ReadersForm.tsx",
          lineNumber: 129,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        ButtonContainer_default,
        {
          type: "submit" /* submit */,
          title: urlParams.readerId ? "Update" : "Create",
          variant: "contained" /* contained */,
          onClick: handleOnSubmit
        },
        void 0,
        !1,
        {
          fileName: "app/components/Readers/Form/ReadersForm.tsx",
          lineNumber: 134,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Readers/Form/ReadersForm.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Readers/Form/ReadersForm.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}, ReadersForm_default = ReadersForm;

// app/components/Readers/Readers.helper.tsx
var import_lodash5 = require("lodash");
var handleReaderErrors = (formData) => {
  let errors = {}, { name, city, address, email, phone, birthdate } = formData;
  return (0, import_lodash5.isEmpty)(name) && (errors.name = RequiredField), (0, import_lodash5.isEmpty)(city) && (errors.city = RequiredField), (0, import_lodash5.isEmpty)(address) && (errors.address = RequiredField), (0, import_lodash5.isEmpty)(email) ? errors.email = RequiredField : checkIfEmail(email) || (errors.email = InvalidField), (0, import_lodash5.isEmpty)(phone) ? errors.phone = RequiredField : (!checkIfNumber(phone) || phone.length !== 10) && (errors.phone = InvalidField), ((0, import_lodash5.isEmpty)(birthdate) || !checkIfValidDate(birthdate)) && (errors.birthdate = RequiredField), errors;
};

// app/transformers/readers.transformer.tsx
var fromPaginatedReadersResponse = (readers) => readers.map((item) => ({
  ...item,
  city: item.city.name
})), fromSingleReaderResponse = (reader) => ({ ...reader, city: reader.city.id }), fromReaderByEmail = (reader) => ({ ...reader, city: reader.city.name });

// app/server/readers.server.tsx
var import_bcryptjs2 = __toESM(require("bcryptjs")), import_generate_password = __toESM(require("generate-password"));

// app/server/mail.server.tsx
var import_nodemailer = __toESM(require("nodemailer")), sendEmail = async ({ to, subject, template }) => {
  try {
    let transporter = import_nodemailer.default.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.EMAIL_PASSWORD
      },
      from: process.env.FROM_EMAIL
    }), message = {
      from: `Library <${process.env.FROM_EMAIL}>`,
      to,
      subject,
      html: template
    };
    await transporter.sendMail(message);
  } catch {
  }
};

// ../../packages/ui/templates/NewReader.email.tsx
var NewReaderEmail = ({ reader, password }) => `<html>
<head>
  <meta charset="utf-8">
  <title>New reader account</title>
</head>  
<body>
  <div style="text-align: center; margin: 30px 0; font-size: 15px">
    <h2 style="margin-bottom: 35px; font-size: 22px">Hi ${reader},</h2>
    <p>Your reader account has been created.</p>
    <p>Your current password is <strong>${password}</strong>.</p>
  </div>
</body>
</html>`;

// app/server/readers.server.tsx
var getPaginatedReaders = async ({
  page,
  search,
  city
}) => {
  try {
    let skip = page > 1 && (page - 1) * 5 || void 0;
    return await connect_default.$transaction(async (db) => {
      let count = await db.readers.count({
        where: {
          deleted: !1,
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive"
              }
            },
            { email: { contains: search, mode: "insensitive" } },
            { phone: { contains: search, mode: "insensitive" } }
          ],
          city: city && {
            name: city
          } || void 0
        },
        orderBy: {
          createdAt: "desc"
        }
      }), data = await db.readers.findMany({
        skip,
        take: 5,
        where: {
          deleted: !1,
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive"
              }
            },
            { email: { contains: search, mode: "insensitive" } },
            { phone: { contains: search, mode: "insensitive" } }
          ],
          city: city && {
            name: city
          } || void 0
        },
        select: {
          id: !0,
          name: !0,
          city: {
            select: {
              name: !0
            }
          },
          email: !0,
          phone: !0
        },
        orderBy: {
          createdAt: "desc"
        }
      });
      if (!data)
        throw new Error(ErrorGetPaginated2);
      return { count, data: fromPaginatedReadersResponse(data) };
    });
  } catch {
    throw new Error(ErrorGetPaginated2);
  }
}, getSingleReader = async ({ readerId }) => {
  try {
    let reader = await connect_default.readers.findFirst({
      where: {
        id: readerId,
        deleted: !1
      },
      select: {
        name: !0,
        city: {
          select: {
            id: !0
          }
        },
        address: !0,
        email: !0,
        phone: !0,
        birthdate: !0
      }
    });
    if (!reader)
      throw new Error(ErrorGetSingle2);
    return fromSingleReaderResponse(reader);
  } catch {
    throw new Error(ErrorGetSingle2);
  }
}, createReader = async ({
  name,
  city,
  address,
  email,
  phone,
  birthdate
}) => {
  try {
    if (await connect_default.readers.findFirst({
      where: {
        email,
        deleted: !1
      },
      select: {
        id: !0
      }
    }))
      throw new Error(ErrorCreate2);
    let generatePass = import_generate_password.default.generate({
      length: 10,
      numbers: !0
    }), password = await import_bcryptjs2.default.hash(generatePass, 10), reader = await connect_default.readers.create({
      data: {
        name,
        cityId: city,
        address,
        email,
        phone,
        password,
        birthdate
      }
    });
    if (!reader)
      throw new Error(ErrorCreate2);
    return await sendEmail({
      to: email,
      subject: NewReaderSubject,
      template: NewReaderEmail({ password: generatePass, reader: name })
    }), reader;
  } catch {
    throw new Error(ErrorCreate2);
  }
}, updateReader = async ({
  readerId,
  name,
  city,
  address,
  email,
  phone,
  birthdate
}) => {
  try {
    if (await connect_default.readers.findFirst({
      where: {
        email,
        deleted: !1,
        id: { not: readerId }
      },
      select: {
        id: !0
      }
    }))
      throw new Error(ErrorUpdate2);
    let reader = await connect_default.readers.updateMany({
      where: {
        id: readerId,
        deleted: !1
      },
      data: {
        name,
        cityId: city,
        address,
        email,
        phone,
        birthdate
      }
    });
    if (!reader)
      throw new Error(ErrorUpdate2);
    return reader;
  } catch {
    throw new Error(ErrorUpdate2);
  }
}, deleteReader = async ({ readerId }) => {
  try {
    let reader = await connect_default.readers.update({
      where: {
        id: readerId
      },
      data: {
        deleted: !0
      }
    });
    if (!reader)
      throw new Error(ErrorDelete2);
    return reader;
  } catch {
    throw new Error(ErrorDelete2);
  }
};
var getReaderByEmail = async ({ email }) => {
  try {
    if (!email)
      return null;
    let reader = await connect_default.readers.findFirst({
      where: {
        deleted: !1,
        email
      },
      select: {
        id: !0,
        name: !0,
        city: {
          select: {
            name: !0
          }
        },
        email: !0,
        phone: !0,
        deleted: !0
      }
    });
    return reader ? fromReaderByEmail(reader) : null;
  } catch {
    throw new Error(ErrorMessage);
  }
};

// app/routes/__app/readers/$readerId.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node5.redirect)("/login");
  try {
    let readerId = new URL(request.url).pathname.split("/").pop();
    if (!(0, import_lodash6.isString)(readerId))
      return badRequest({
        message: ErrorGetSingle2,
        success: !1
      });
    let [reader, cities] = await Promise.all([
      getSingleReader({
        readerId
      }),
      getCities()
    ]);
    return goodRequest({ reader, cities });
  } catch (error) {
    throw new Error(error.message || ErrorMessage);
  }
}, ErrorBoundary2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(ErrorInterface_default, {}, void 0, !1, {
  fileName: "app/routes/__app/readers/$readerId.tsx",
  lineNumber: 66,
  columnNumber: 10
}, this), action3 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node5.redirect)("/login");
  try {
    let formData = await request.formData();
    if (formData.get("intent") === "update") {
      let name = formData.get("name"), city = formData.get("city"), address = formData.get("address"), email = formData.get("email"), phone = formData.get("phone"), birthdate = formData.get("birthdate"), readerId = new URL(request.url).pathname.split("/").pop();
      if (!(0, import_lodash6.isString)(readerId) || !(0, import_lodash6.isString)(name) || !(0, import_lodash6.isString)(city) || !(0, import_lodash6.isString)(address) || !(0, import_lodash6.isString)(email) || !(0, import_lodash6.isString)(phone) || !(0, import_lodash6.isString)(birthdate))
        return badRequest({
          message: ErrorUpdate2,
          success: !1
        });
      let fields = { name, city, address, email, phone, birthdate }, fieldErrors = handleReaderErrors(fields);
      return Object.values(fieldErrors).some(Boolean) ? badRequest({
        message: ErrorUpdate2,
        success: !1
      }) : (await updateReader({ ...fields, readerId }), goodRequest({
        message: SuccessUpdate2,
        success: !0
      }));
    }
    return badRequest({
      message: ErrorMessage,
      success: !1
    });
  } catch (error) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: !1
    });
  }
}, UpdateReader = () => {
  let submit = (0, import_react18.useSubmit)(), actionData = (0, import_react18.useActionData)(), navigate = (0, import_react18.useNavigate)(), data = (0, import_react18.useLoaderData)(), urlParams = (0, import_react18.useParams)(), [reader, setReader] = (0, import_react19.useState)(data.reader), cities = data.cities;
  return (0, import_react19.useEffect)(() => {
    actionData && (0, import_lodash6.isBoolean)(actionData.success) && navigate("/readers");
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(ColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(LayoutTitle_default, { title: UpdateReaderTitle, backUrl: "/readers" }, void 0, !1, {
      fileName: "app/routes/__app/readers/$readerId.tsx",
      lineNumber: 175,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      ReadersForm_default,
      {
        onSubmit: ({ callback }) => {
          let fieldErrors = handleReaderErrors(reader);
          if (Object.values(fieldErrors).some(Boolean)) {
            callback(fieldErrors);
            return;
          }
          submit(
            {
              ...reader,
              intent: "update"
            },
            {
              method: "post",
              action: `/readers/${urlParams.readerId}`
            }
          );
        },
        setReader,
        reader,
        cities
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/readers/$readerId.tsx",
        lineNumber: 176,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app/readers/$readerId.tsx",
    lineNumber: 174,
    columnNumber: 5
  }, this);
}, readerId_default = UpdateReader;

// app/routes/__app/libraries/create.tsx
var create_exports = {};
__export(create_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action4,
  default: () => create_default,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), import_lodash7 = require("lodash"), import_react21 = require("react");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node6.redirect)("/login");
  try {
    let cities = await getCities();
    return goodRequest({ cities });
  } catch (error) {
    throw new Error(error.message || ErrorMessage);
  }
}, action4 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node6.redirect)("/login");
  try {
    let formData = await request.formData();
    if (formData.get("intent") === "create") {
      let name = formData.get("name"), city = formData.get("city"), address = formData.get("address"), phone = formData.get("phone"), schedule = formData.get("schedule");
      if (!(0, import_lodash7.isString)(name) || !(0, import_lodash7.isString)(city) || !(0, import_lodash7.isString)(address) || !(0, import_lodash7.isString)(phone) || !(0, import_lodash7.isString)(schedule))
        return badRequest({
          message: ErrorCreate,
          success: !1
        });
      let objectSchedule = JSON.parse(schedule), fields = { name, city, address, phone, schedule: objectSchedule }, fieldErrors = handleLibraryErrors(fields);
      return Object.values(fieldErrors).some(Boolean) ? badRequest({
        message: ErrorCreate,
        success: !1
      }) : (await createLibrary(fields), goodRequest({
        message: SuccessCreate,
        success: !0
      }));
    }
    return badRequest({
      message: ErrorMessage,
      success: !1
    });
  } catch (error) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: !1
    });
  }
}, ErrorBoundary3 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ErrorInterface_default, {}, void 0, !1, {
  fileName: "app/routes/__app/libraries/create.tsx",
  lineNumber: 115,
  columnNumber: 10
}, this), CreateLibrary = () => {
  let submit = (0, import_react20.useSubmit)(), actionData = (0, import_react20.useActionData)(), navigate = (0, import_react20.useNavigate)(), data = (0, import_react20.useLoaderData)(), [library, setLibrary] = (0, import_react21.useState)(initialLibrary), cities = data.cities;
  return (0, import_react21.useEffect)(() => {
    actionData && (0, import_lodash7.isBoolean)(actionData.success) && navigate("/libraries");
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(LayoutTitle_default, { title: CreateLibraryTitle, backUrl: "/libraries" }, void 0, !1, {
      fileName: "app/routes/__app/libraries/create.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      LibrariesForm_default,
      {
        onSubmit: ({ callback }) => {
          let fieldErrors = handleLibraryErrors(library);
          if (Object.values(fieldErrors).some(Boolean)) {
            callback(fieldErrors);
            return;
          }
          let stringSchedule = JSON.stringify(library.schedule);
          submit(
            {
              ...library,
              schedule: stringSchedule,
              intent: "create"
            },
            {
              method: "post",
              action: "/libraries/create"
            }
          );
        },
        setLibrary,
        library,
        cities
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/libraries/create.tsx",
        lineNumber: 158,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app/libraries/create.tsx",
    lineNumber: 156,
    columnNumber: 5
  }, this);
}, create_default = CreateLibrary;

// app/routes/__app/libraries/index.tsx
var libraries_exports = {};
__export(libraries_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  action: () => action5,
  default: () => libraries_default,
  loader: () => loader5
});

// ../../packages/ui/components/Table/TableContainer.tsx
var import_TableBody = __toESM(require("@mui/material/TableBody")), import_TableCell2 = __toESM(require("@mui/material/TableCell")), import_TablePagination = __toESM(require("@mui/material/TablePagination")), import_TableHead = __toESM(require("@mui/material/TableHead")), import_TableContainer = __toESM(require("@mui/material/TableContainer"));

// ../../packages/ui/components/Table/Table.style.tsx
var import_styles12 = require("@mui/material/styles"), import_Table = __toESM(require("@mui/material/Table")), import_TableCell = __toESM(require("@mui/material/TableCell")), import_TableRow = __toESM(require("@mui/material/TableRow")), StyledHeaderRow = (0, import_styles12.styled)(import_TableRow.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    "td, th": { border: 0, whiteSpace: "nowrap" }
  })
), StyledBodyRow = (0, import_styles12.styled)(import_TableRow.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    "td, th": { border: 0, whiteSpace: "nowrap" },
    borderTop: `1px solid ${colorPalette_default.grey.lighter}`,
    borderRight: "1px solid transparent",
    borderLeft: "1px solid transparent",
    "&:last-child": { borderBottom: "1px solid transparent" },
    "&:hover": {
      border: `1px solid ${colorPalette_default.primary.base}`,
      cursor: "pointer"
    }
  })
), EmptyBodyRow = (0, import_styles12.styled)(import_TableRow.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    "td, th": { border: 0, whiteSpace: "nowrap" },
    borderTop: `1px solid ${colorPalette_default.grey.lighter}`,
    borderRight: "1px solid transparent",
    borderLeft: "1px solid transparent"
  })
), StyledTable = (0, import_styles12.styled)(import_Table.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    minWidth: 600,
    marginBottom: "20px"
  })
), StyledTableCell = (0, import_styles12.styled)(import_TableCell.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    fontWeight: 600,
    fontSize: "16px"
  })
);

// ../../packages/ui/components/Table/components/TableActions.tsx
var import_IconButton3 = __toESM(require("@mui/material/IconButton")), import_DeleteOutline = __toESM(require("@mui/icons-material/DeleteOutline")), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), TableActions = ({ onDelete }) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_IconButton3.default, { onClick: (event) => {
  event.stopPropagation(), onDelete();
}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_DeleteOutline.default, {}, void 0, !1, {
  fileName: "../../packages/ui/components/Table/components/TableActions.tsx",
  lineNumber: 13,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "../../packages/ui/components/Table/components/TableActions.tsx",
  lineNumber: 12,
  columnNumber: 5
}, this), TableActions_default = TableActions;

// ../../packages/ui/components/Table/TableContainer.tsx
var import_react22 = require("@remix-run/react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), PaginatedTableContainer = ({
  columns,
  rows,
  count,
  page,
  onPageChange,
  onDelete
}) => {
  let navigate = (0, import_react22.useNavigate)(), location = (0, import_react22.useLocation)(), handleChangePage = (event, newPage) => {
    onPageChange(newPage + 1);
  }, handleEditRow = (rowId) => {
    navigate(`${location.pathname}/${rowId}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_TableContainer.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(StyledTable, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_TableHead.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(StyledHeaderRow, { children: [
        columns.map((column, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(StyledTableCell, { children: column.value }, index, !1, {
          fileName: "../../packages/ui/components/Table/TableContainer.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(StyledTableCell, { align: "right", width: "50px", children: "Delete" }, void 0, !1, {
          fileName: "../../packages/ui/components/Table/TableContainer.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "../../packages/ui/components/Table/TableContainer.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "../../packages/ui/components/Table/TableContainer.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_TableBody.default, { children: rows.map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        StyledBodyRow,
        {
          onClick: () => handleEditRow(row.id),
          children: [
            columns.map((column, columnIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_TableCell2.default, { children: row[column.name] || "-" }, columnIndex, !1, {
              fileName: "../../packages/ui/components/Table/TableContainer.tsx",
              lineNumber: 63,
              columnNumber: 19
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_TableCell2.default, { align: "right", width: "50px", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(TableActions_default, { onDelete: () => onDelete(row.id) }, void 0, !1, {
              fileName: "../../packages/ui/components/Table/TableContainer.tsx",
              lineNumber: 69,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "../../packages/ui/components/Table/TableContainer.tsx",
              lineNumber: 68,
              columnNumber: 17
            }, this)
          ]
        },
        rowIndex,
        !0,
        {
          fileName: "../../packages/ui/components/Table/TableContainer.tsx",
          lineNumber: 58,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "../../packages/ui/components/Table/TableContainer.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      rows.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(EmptyBodyRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_TableCell2.default, { colSpan: 12, align: "center", children: "No data" }, void 0, !1, {
        fileName: "../../packages/ui/components/Table/TableContainer.tsx",
        lineNumber: 77,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "../../packages/ui/components/Table/TableContainer.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "../../packages/ui/components/Table/TableContainer.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "../../packages/ui/components/Table/TableContainer.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      import_TablePagination.default,
      {
        rowsPerPageOptions: [],
        component: "div",
        count,
        rowsPerPage: 5,
        page: page - 1,
        onPageChange: handleChangePage
      },
      void 0,
      !1,
      {
        fileName: "../../packages/ui/components/Table/TableContainer.tsx",
        lineNumber: 85,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "../../packages/ui/components/Table/TableContainer.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}, TableContainer_default = PaginatedTableContainer;

// app/components/Libraries/Overview/LibrariesOverview.tsx
var import_Paper4 = __toESM(require("@mui/material/Paper"));
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), LibrariesOverview = ({
  libraries,
  page,
  filter,
  onPageChange,
  onSearchChange,
  onCityChange,
  onDelete,
  cities
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Paper4.default, { className: "overview-paper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ColumnFlex, { gap: "30px", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(StyledFilters, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      InputContainer_default,
      {
        placeholder: SearchPlaceholder,
        onChange: onSearchChange,
        width: "300px",
        value: filter.search
      },
      void 0,
      !1,
      {
        fileName: "app/components/Libraries/Overview/LibrariesOverview.tsx",
        lineNumber: 24,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      AutocompleteContainer_default,
      {
        onChange: onCityChange,
        options: cities,
        value: filter.city,
        placeholder: Cities,
        width: "200px"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Libraries/Overview/LibrariesOverview.tsx",
        lineNumber: 30,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Libraries/Overview/LibrariesOverview.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    TableContainer_default,
    {
      columns: librariesColumns,
      rows: libraries.data,
      count: libraries.count,
      page,
      onPageChange,
      onDelete
    },
    void 0,
    !1,
    {
      fileName: "app/components/Libraries/Overview/LibrariesOverview.tsx",
      lineNumber: 38,
      columnNumber: 9
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Libraries/Overview/LibrariesOverview.tsx",
  lineNumber: 22,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Libraries/Overview/LibrariesOverview.tsx",
  lineNumber: 21,
  columnNumber: 5
}, this), LibrariesOverview_default = LibrariesOverview;

// app/routes/__app/libraries/index.tsx
var import_react23 = require("@remix-run/react");
var import_react24 = require("react"), import_lodash8 = require("lodash"), import_node7 = require("@remix-run/node");
var import_react_router_dom = require("react-router-dom");
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node7.redirect)("/login");
  try {
    let url = new URL(request.url), page = url.searchParams.get("page"), search = url.searchParams.get("search") || "", city = url.searchParams.get("city") || "", pageNumber = 1;
    page && checkIfNumber(page) && (pageNumber = parseInt(page));
    let [libraries, cities] = await Promise.all([
      getPaginatedLibraries({
        page: pageNumber,
        search,
        city
      }),
      getCities()
    ]);
    return goodRequest({ libraries, cities });
  } catch (error) {
    throw new Error(error.message || ErrorMessage);
  }
}, ErrorBoundary4 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(ErrorInterface_default, {}, void 0, !1, {
  fileName: "app/routes/__app/libraries/index.tsx",
  lineNumber: 72,
  columnNumber: 10
}, this), action5 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node7.redirect)("/login");
  try {
    let formData = await request.formData();
    if (formData.get("intent") === "delete") {
      let libraryId = formData.get("libraryId");
      return (0, import_lodash8.isString)(libraryId) ? (await deleteLibrary({ libraryId }), goodRequest({
        message: SuccessDelete,
        success: !0
      })) : badRequest({
        message: ErrorDelete,
        success: !1
      });
    }
    return badRequest({
      message: ErrorMessage,
      success: !1
    });
  } catch (error) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: !1
    });
  }
}, PaginatedLibraries = () => {
  let navigate = (0, import_react23.useNavigate)(), location = (0, import_react23.useLocation)(), data = (0, import_react23.useLoaderData)(), submit = (0, import_react23.useSubmit)(), [searchParams, setSearchParams] = (0, import_react_router_dom.useSearchParams)(), page = searchParams.get("page"), search = searchParams.get("search") || "", city = searchParams.get("city") || "", pageNumber = 1;
  page && checkIfNumber(page) && (pageNumber = parseInt(page));
  let libraries = data.libraries, cities = data.cities, filterCities = cities.find(
    (item) => item.name === city
  ), [filter, setFilter] = (0, import_react24.useState)({
    search,
    city: (filterCities == null ? void 0 : filterCities.id) || ""
  }), handleCreateLibrary = () => {
    navigate(`${location.pathname}/create`);
  }, handleChangePage = (pageNumber2) => {
    setSearchParams((oldSearchParams) => ({
      ...oldSearchParams,
      page: pageNumber2.toString()
    }));
  }, debounceSearchChange = (0, import_react24.useCallback)(
    (0, import_lodash8.debounce)((value) => {
      let params = {};
      value && (params = { ...params, search: value }), city && (params = { ...params, city }), setSearchParams(params);
    }, 500),
    [city]
  ), handleSearchChange = (value) => {
    setFilter((oldValue) => ({ ...oldValue, search: value })), debounceSearchChange(value);
  }, handleCityChange = (value) => {
    setFilter((oldValue) => ({
      ...oldValue,
      city: (value == null ? void 0 : value.id) || ""
    }));
    let params = {};
    search && (params = { ...params, search }), value && (params = { ...params, city: (value == null ? void 0 : value.name) || "" }), setSearchParams(params);
  }, handleDelete = (id) => {
    submit(
      {
        libraryId: id,
        intent: "delete"
      },
      {
        method: "delete",
        action: `/libraries${location.search}`
      }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(ColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(LayoutTitle_default, { title: Libraries, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      ButtonContainer_default,
      {
        title: NewLibrary,
        variant: "contained" /* contained */,
        onClick: handleCreateLibrary
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/libraries/index.tsx",
        lineNumber: 202,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/__app/libraries/index.tsx",
      lineNumber: 201,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      LibrariesOverview_default,
      {
        libraries,
        page: pageNumber,
        onPageChange: handleChangePage,
        filter,
        onSearchChange: handleSearchChange,
        onCityChange: handleCityChange,
        onDelete: handleDelete,
        cities
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/libraries/index.tsx",
        lineNumber: 209,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app/libraries/index.tsx",
    lineNumber: 200,
    columnNumber: 5
  }, this);
}, libraries_default = PaginatedLibraries;

// app/routes/__app/readers/create.tsx
var create_exports2 = {};
__export(create_exports2, {
  ErrorBoundary: () => ErrorBoundary5,
  action: () => action6,
  default: () => create_default2,
  loader: () => loader6
});
var import_node8 = require("@remix-run/node"), import_react25 = require("@remix-run/react"), import_lodash9 = require("lodash"), import_react26 = require("react");
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), loader6 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node8.redirect)("/login");
  try {
    let cities = await getCities();
    return goodRequest({ cities });
  } catch (error) {
    throw new Error(error.message || ErrorMessage);
  }
}, action6 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node8.redirect)("/login");
  try {
    let formData = await request.formData();
    if (formData.get("intent") === "create") {
      let name = formData.get("name"), city = formData.get("city"), address = formData.get("address"), email = formData.get("email"), phone = formData.get("phone"), birthdate = formData.get("birthdate");
      if (!(0, import_lodash9.isString)(name) || !(0, import_lodash9.isString)(city) || !(0, import_lodash9.isString)(address) || !(0, import_lodash9.isString)(email) || !(0, import_lodash9.isString)(phone) || !(0, import_lodash9.isString)(birthdate))
        return badRequest({
          message: ErrorCreate2,
          success: !1
        });
      let fields = { name, city, address, email, phone, birthdate }, fieldErrors = handleReaderErrors(fields);
      return Object.values(fieldErrors).some(Boolean) ? badRequest({
        message: ErrorCreate2,
        success: !1
      }) : (await createReader(fields), goodRequest({
        message: SuccessCreate2,
        success: !0
      }));
    }
    return badRequest({
      message: ErrorMessage,
      success: !1
    });
  } catch (error) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: !1
    });
  }
}, ErrorBoundary5 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(ErrorInterface_default, {}, void 0, !1, {
  fileName: "app/routes/__app/readers/create.tsx",
  lineNumber: 115,
  columnNumber: 10
}, this), CreateReader = () => {
  let submit = (0, import_react25.useSubmit)(), actionData = (0, import_react25.useActionData)(), navigate = (0, import_react25.useNavigate)(), data = (0, import_react25.useLoaderData)(), [reader, setReader] = (0, import_react26.useState)(initialReader), cities = data.cities;
  return (0, import_react26.useEffect)(() => {
    actionData && (0, import_lodash9.isBoolean)(actionData.success) && navigate("/readers");
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(ColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(LayoutTitle_default, { title: CreateReaderTitle, backUrl: "/readers" }, void 0, !1, {
      fileName: "app/routes/__app/readers/create.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      ReadersForm_default,
      {
        onSubmit: ({ callback }) => {
          let fieldErrors = handleReaderErrors(reader);
          if (Object.values(fieldErrors).some(Boolean)) {
            callback(fieldErrors);
            return;
          }
          submit(
            {
              ...reader,
              intent: "create"
            },
            {
              method: "post",
              action: "/readers/create"
            }
          );
        },
        setReader,
        reader,
        cities
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/readers/create.tsx",
        lineNumber: 155,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app/readers/create.tsx",
    lineNumber: 153,
    columnNumber: 5
  }, this);
}, create_default2 = CreateReader;

// app/routes/__app/books/$bookId.tsx
var bookId_exports = {};
__export(bookId_exports, {
  ErrorBoundary: () => ErrorBoundary6,
  action: () => action7,
  default: () => bookId_default,
  loader: () => loader7
});
var import_node9 = require("@remix-run/node"), import_react29 = require("@remix-run/react"), import_lodash13 = require("lodash"), import_react30 = require("react");

// app/components/Books/Books.helper.tsx
var import_lodash10 = require("lodash");
var handleBookErrors = (formData) => {
  let errors = {}, {
    name,
    author,
    description,
    image,
    pagesNumber,
    category,
    publishHouse,
    releaseYear,
    language,
    bookLibraries
  } = formData;
  return (0, import_lodash10.isEmpty)(name) && (errors.name = RequiredField), (0, import_lodash10.isEmpty)(author) && (errors.author = RequiredField), (0, import_lodash10.isEmpty)(description) && (errors.description = RequiredField), (0, import_lodash10.isEmpty)(image) && (errors.image = RequiredField), (0, import_lodash10.isEmpty)(pagesNumber) ? errors.pagesNumber = RequiredField : checkIfNumber(pagesNumber) || (errors.pagesNumber = InvalidField), (0, import_lodash10.isEmpty)(category) && (errors.category = RequiredField), (0, import_lodash10.isEmpty)(publishHouse) && (errors.publishHouse = RequiredField), (0, import_lodash10.isEmpty)(releaseYear) ? errors.releaseYear = RequiredField : checkIfNumber(releaseYear) || (errors.releaseYear = InvalidField), (0, import_lodash10.isEmpty)(language) && (errors.language = RequiredField), (0, import_lodash10.isEmpty)(bookLibraries) || bookLibraries.map((item, index) => {
    let bookLibrariesErrors = {};
    (0, import_lodash10.isEmpty)(item.library) && (bookLibrariesErrors = {
      ...bookLibrariesErrors,
      library: RequiredField
    }), (0, import_lodash10.isEmpty)(item.sku) && (bookLibrariesErrors = {
      ...bookLibrariesErrors,
      sku: RequiredField
    }), (0, import_lodash10.isEmpty)(item.place) && (bookLibrariesErrors = {
      ...bookLibrariesErrors,
      place: RequiredField
    }), (0, import_lodash10.isEmpty)(bookLibrariesErrors) || (errors = {
      ...errors,
      bookLibraries: {
        ...errors.bookLibraries,
        [index]: bookLibrariesErrors
      }
    });
  }), errors;
};

// app/components/Books/Form/BooksForm.tsx
var import_Paper5 = __toESM(require("@mui/material/Paper"));
var import_react27 = require("react"), import_react28 = require("@remix-run/react");

// app/components/Books/Books.const.tsx
var Books = "Books", NewBook = "New book", CreateBookTitle = "Create book", UpdateBookTitle = "Update book", ErrorCreate3 = "There was a problem in creating the book", SuccessCreate3 = "Book created successfully", ErrorGetPaginated3 = "There was a problem in receiving books", ErrorGetSingle3 = "There was a problem in receiving book", ErrorDelete3 = "There was a problem in deleting the book", SuccessDelete3 = "Book deleted successfuly", ErrorUpdate3 = "There was a problem in updating the book", SuccessUpdate3 = "Book updated successfully", ErrorImageUpload = "Error on upload. Try again!", SearchPlaceholder3 = "Search for name, author or sku", Categories = "Categories", Details3 = "Book details", Libraries2 = "Libraries", Units = "Book units", initialBook = {
  name: "",
  author: "",
  description: "",
  image: "",
  pagesNumber: "",
  category: "",
  publishHouse: "",
  releaseYear: "",
  language: "",
  bookLibraries: []
}, initialBookLibrary = {
  library: "",
  sku: "",
  place: ""
}, booksColumns = [
  { name: "name", value: "Name" },
  { name: "category", value: "Category" },
  { name: "author", value: "Author" }
];

// app/components/Books/Form/BooksUnits.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), BooksUnits = ({
  bookLibrary,
  onChange,
  libraries,
  error,
  onRemoveClick
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(UnitsFlex, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    AutocompleteContainer_default,
    {
      label: "Library*",
      onChange: (value) => onChange((value == null ? void 0 : value.id) || "", "library" /* library */),
      errorMessage: error.library,
      options: libraries,
      value: bookLibrary.library
    },
    void 0,
    !1,
    {
      fileName: "app/components/Books/Form/BooksUnits.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    InputContainer_default,
    {
      label: "SKU*",
      errorMessage: error.sku,
      value: bookLibrary.sku,
      onChange: (value) => onChange(value, "sku" /* sku */)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Books/Form/BooksUnits.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    InputContainer_default,
    {
      label: "Place*",
      errorMessage: error.place,
      value: bookLibrary.place,
      onChange: (value) => onChange(value, "place" /* place */)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Books/Form/BooksUnits.tsx",
      lineNumber: 30,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(StyledRemoveFab, { color: "primary", onClick: onRemoveClick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(StyledRemoveIcon, {}, void 0, !1, {
    fileName: "app/components/Books/Form/BooksUnits.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Books/Form/BooksUnits.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Books/Form/BooksUnits.tsx",
  lineNumber: 14,
  columnNumber: 3
}, this), BooksUnits_default = BooksUnits;

// app/components/Books/Form/BooksForm.tsx
var import_Typography8 = __toESM(require("@mui/material/Typography")), import_Add = __toESM(require("@mui/icons-material/Add")), import_lodash11 = require("lodash");

// ../../packages/ui/components/ImageUploader/ImageUploader.const.tsx
var UploadImage = "Upload image";

// ../../packages/ui/components/ImageUploader/ImageUploader.style.tsx
var import_styled_components7 = __toESM(require("styled-components"));
var ImagePaper = (0, import_styled_components7.default)(ColumnFlex)`
  gap: 10px;
  padding: 10px;
  border: ${(props) => `1px solid ${props.error ? "#d32f2f" : colorPalette_default.grey.base}`};
  border-radius: 5px;
`, ImageBox = (0, import_styled_components7.default)(AlignedFlex)`
  margin: auto;
  flex: auto;
  min-height: 40px;
  max-height: 120px;
`, StyledImage = import_styled_components7.default.img`
  max-height: inherit;
  width: 100%;
`;

// ../../packages/ui/components/ImageUploader/ImageUploaderContainer.tsx
var import_Typography7 = __toESM(require("@mui/material/Typography"));
var import_FormHelperText = __toESM(require("@mui/material/FormHelperText"));
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), ImageUploaderContainer = ({
  onImageChange,
  errorMessage,
  image
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(ColumnFlex, { gap: "10px", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(ImagePaper, { error: !!errorMessage, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(ContainedButton, { component: "label", children: [
      UploadImage,
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("input", { type: "file", accept: "image/*", onChange: onImageChange, hidden: !0 }, void 0, !1, {
        fileName: "../../packages/ui/components/ImageUploader/ImageUploaderContainer.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "../../packages/ui/components/ImageUploader/ImageUploaderContainer.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(ImageBox, { children: image ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(StyledImage, { src: image }, void 0, !1, {
      fileName: "../../packages/ui/components/ImageUploader/ImageUploaderContainer.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Typography7.default, { variant: "h1", children: "No image" }, void 0, !1, {
      fileName: "../../packages/ui/components/ImageUploader/ImageUploaderContainer.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "../../packages/ui/components/ImageUploader/ImageUploaderContainer.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "../../packages/ui/components/ImageUploader/ImageUploaderContainer.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this),
  errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_FormHelperText.default, { error: !0, children: errorMessage }, void 0, !1, {
    fileName: "../../packages/ui/components/ImageUploader/ImageUploaderContainer.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "../../packages/ui/components/ImageUploader/ImageUploaderContainer.tsx",
  lineNumber: 14,
  columnNumber: 3
}, this), ImageUploaderContainer_default = ImageUploaderContainer;

// app/components/Books/Form/BooksForm.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), BooksForm = ({
  onSubmit,
  setBook,
  book,
  categories,
  libraries,
  publishHouses,
  languages
}) => {
  let navigate = (0, import_react28.useNavigate)(), urlParams = (0, import_react28.useParams)(), [errors, setErrors] = (0, import_react27.useState)({}), handleInputChange = (value, field) => {
    setBook((oldBook) => ({ ...oldBook, [field]: value })), errors[field] && setErrors((oldErrors) => (delete oldErrors[field], oldErrors));
  }, handleBookLibrariesChange = (value, field, index) => {
    setBook((oldBook) => {
      let bookLibraries = oldBook.bookLibraries.map((item, i) => i === index ? { ...item, [field]: value } : item);
      return { ...oldBook, bookLibraries };
    }), errors.bookLibraries && errors.bookLibraries[index][field] && setErrors((oldErrors) => (oldErrors.bookLibraries && delete oldErrors.bookLibraries[index][field], oldErrors));
  }, handleAddBookLibrary = () => {
    setBook((oldBook) => ({
      ...oldBook,
      bookLibraries: [...oldBook.bookLibraries, initialBookLibrary]
    })), (0, import_lodash11.isEmpty)(errors.bookLibraries) || setErrors((oldErrors) => (delete oldErrors.bookLibraries, oldErrors));
  }, handleRemoveBookLibrary = (index) => {
    setBook((oldBook) => {
      let newBookLibraries = oldBook.bookLibraries.filter(
        (item, i) => i !== index
      );
      return {
        ...oldBook,
        bookLibraries: newBookLibraries
      };
    }), (0, import_lodash11.isEmpty)(errors.bookLibraries) || setErrors((oldErrors) => (delete oldErrors.bookLibraries, oldErrors));
  }, handleImageChange = async (e) => {
    try {
      let file = e.target.files && e.target.files[0];
      if (!file) {
        setErrors((oldErrors) => ({
          ...oldErrors,
          image: ErrorImageUpload
        }));
        return;
      }
      let image = await readFileAsync(file);
      setBook((oldBook) => ({
        ...oldBook,
        image
      })), errors.image && setErrors((oldErrors) => {
        let { image: image2, ...rest } = oldErrors;
        return rest;
      });
    } catch {
      setErrors((oldErrors) => ({
        ...oldErrors,
        image: ErrorImageUpload
      }));
    }
  }, handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors) => setErrors(fieldErrors)
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_Paper5.default, { className: "overview-paper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(ColumnFlex, { gap: "40px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_Typography8.default, { variant: "h3", children: Details3 }, void 0, !1, {
        fileName: "app/components/Books/Form/BooksForm.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(ColumnFlex, { gap: "20px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(StyleFlex, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(StyledColumnFlex, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              InputContainer_default,
              {
                label: "Name*",
                errorMessage: errors.name,
                value: book.name,
                onChange: (value) => handleInputChange(value, "name" /* name */)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Books/Form/BooksForm.tsx",
                lineNumber: 159,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              InputContainer_default,
              {
                label: "Author*",
                errorMessage: errors.author,
                value: book.author,
                onChange: (value) => handleInputChange(value, "author" /* author */)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Books/Form/BooksForm.tsx",
                lineNumber: 167,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              AutocompleteContainer_default,
              {
                label: "Category*",
                onChange: (value) => handleInputChange((value == null ? void 0 : value.id) || "", "category" /* category */),
                errorMessage: errors.category,
                options: categories,
                value: book.category
              },
              void 0,
              !1,
              {
                fileName: "app/components/Books/Form/BooksForm.tsx",
                lineNumber: 175,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              AutocompleteContainer_default,
              {
                label: "Publish house*",
                onChange: (value) => handleInputChange((value == null ? void 0 : value.id) || "", "publishHouse" /* publishHouse */),
                errorMessage: errors.publishHouse,
                options: publishHouses,
                value: book.publishHouse
              },
              void 0,
              !1,
              {
                fileName: "app/components/Books/Form/BooksForm.tsx",
                lineNumber: 184,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              InputContainer_default,
              {
                label: "Release year*",
                type: "number" /* number */,
                errorMessage: errors.releaseYear,
                value: book.releaseYear,
                onChange: (value) => handleInputChange(value, "releaseYear" /* releaseYear */)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Books/Form/BooksForm.tsx",
                lineNumber: 193,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Books/Form/BooksForm.tsx",
            lineNumber: 158,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(StyledColumnFlex, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              AutocompleteContainer_default,
              {
                label: "Language*",
                onChange: (value) => handleInputChange((value == null ? void 0 : value.id) || "", "language" /* language */),
                errorMessage: errors.language,
                options: languages,
                value: book.language
              },
              void 0,
              !1,
              {
                fileName: "app/components/Books/Form/BooksForm.tsx",
                lineNumber: 205,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              InputContainer_default,
              {
                label: "Pages number*",
                type: "number" /* number */,
                errorMessage: errors.pagesNumber,
                value: book.pagesNumber,
                onChange: (value) => handleInputChange(value, "pagesNumber" /* pagesNumber */)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Books/Form/BooksForm.tsx",
                lineNumber: 214,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              ImageUploaderContainer_default,
              {
                onImageChange: handleImageChange,
                errorMessage: errors.image,
                image: book.image
              },
              void 0,
              !1,
              {
                fileName: "app/components/Books/Form/BooksForm.tsx",
                lineNumber: 223,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Books/Form/BooksForm.tsx",
            lineNumber: 204,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Books/Form/BooksForm.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(StyleFlex, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          InputContainer_default,
          {
            label: "Description*",
            errorMessage: errors.description,
            value: book.description,
            onChange: (value) => handleInputChange(value, "description" /* description */),
            multiline: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Books/Form/BooksForm.tsx",
            lineNumber: 232,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Books/Form/BooksForm.tsx",
          lineNumber: 231,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Books/Form/BooksForm.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(AlignedFlex, { gap: "20px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_Typography8.default, { variant: "h3", children: Units }, void 0, !1, {
          fileName: "app/components/Books/Form/BooksForm.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(StyledAddFab, { color: "primary", onClick: handleAddBookLibrary, children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_Add.default, {}, void 0, !1, {
          fileName: "app/components/Books/Form/BooksForm.tsx",
          lineNumber: 246,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Books/Form/BooksForm.tsx",
          lineNumber: 245,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Books/Form/BooksForm.tsx",
        lineNumber: 243,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(ColumnFlex, { gap: "20px", children: book.bookLibraries.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        BooksUnits_default,
        {
          bookLibrary: item,
          libraries,
          onChange: (value, field) => handleBookLibrariesChange(value, field, index),
          onRemoveClick: () => handleRemoveBookLibrary(index),
          error: errors.bookLibraries && errors.bookLibraries[index] || {}
        },
        index,
        !1,
        {
          fileName: "app/components/Books/Form/BooksForm.tsx",
          lineNumber: 252,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/Books/Form/BooksForm.tsx",
        lineNumber: 250,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Books/Form/BooksForm.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(StyledFlexButton, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        ButtonContainer_default,
        {
          title: "Cancel",
          variant: "outlined" /* outlined */,
          onClick: () => navigate("/books")
        },
        void 0,
        !1,
        {
          fileName: "app/components/Books/Form/BooksForm.tsx",
          lineNumber: 269,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        ButtonContainer_default,
        {
          type: "submit" /* submit */,
          title: urlParams.bookId ? "Update" : "Create",
          variant: "contained" /* contained */,
          onClick: handleOnSubmit
        },
        void 0,
        !1,
        {
          fileName: "app/components/Books/Form/BooksForm.tsx",
          lineNumber: 274,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Books/Form/BooksForm.tsx",
      lineNumber: 268,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Books/Form/BooksForm.tsx",
    lineNumber: 152,
    columnNumber: 5
  }, this);
}, BooksForm_default = BooksForm;

// app/server/categories.server.tsx
var getCategories = async () => {
  try {
    let categories = await connect_default.categories.findMany({
      select: {
        id: !0,
        name: !0
      }
    });
    if (!categories)
      throw new Error(ErrorMessage);
    return categories;
  } catch {
    throw new Error(ErrorMessage);
  }
};

// app/server/publishHouses.server.tsx
var getPublishHouses = async () => {
  try {
    let publishHouses = await connect_default.publishHouses.findMany({
      select: {
        id: !0,
        name: !0
      }
    });
    if (!publishHouses)
      throw new Error(ErrorMessage);
    return publishHouses;
  } catch {
    throw new Error(ErrorMessage);
  }
};

// app/transformers/books.transformer.tsx
var fromPaginatedBooksResponse = (books) => books.map((item) => ({
  ...item,
  category: item.category.name
})), fromBookLibraries = (bookLibraries) => bookLibraries.map((item) => ({
  id: item.id,
  library: item.libraryId,
  sku: item.SKU,
  place: item.place
})), fromSingleBookResponse = (book) => ({
  ...book,
  pagesNumber: book.pagesNumber.toString(),
  releaseYear: book.releaseYear.toString(),
  category: book.category.id,
  publishHouse: book.publishHouse.id,
  language: book.language.id,
  bookLibraries: fromBookLibraries(book.bookLibraries)
}), fromBookBySku = (bookBySku) => {
  let { id, book, library, SKU, place, deleted } = bookBySku;
  return {
    id,
    name: book.name,
    library: library.name,
    city: library.city.name,
    sku: SKU,
    place,
    deleted
  };
};

// app/server/books.server.tsx
var import_lodash12 = require("lodash");
var getPaginatedBooks = async ({
  page,
  search,
  category,
  library
}) => {
  try {
    let skip = page > 1 && (page - 1) * 5 || void 0;
    return await connect_default.$transaction(async (db) => {
      let count = await db.books.count({
        where: {
          deleted: !1,
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive"
              }
            },
            { author: { contains: search, mode: "insensitive" } },
            {
              bookLibraries: {
                some: {
                  deleted: !1,
                  SKU: { contains: search, mode: "insensitive" }
                }
              }
            }
          ],
          category: category && {
            name: category
          } || void 0,
          bookLibraries: library && {
            some: {
              deleted: !1,
              library: {
                name: library
              }
            }
          } || void 0
        },
        orderBy: {
          createdAt: "desc"
        }
      }), data = await db.books.findMany({
        skip,
        take: 5,
        where: {
          deleted: !1,
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive"
              }
            },
            { author: { contains: search, mode: "insensitive" } },
            {
              bookLibraries: {
                some: {
                  deleted: !1,
                  SKU: { contains: search, mode: "insensitive" }
                }
              }
            }
          ],
          category: category && {
            name: category
          } || void 0,
          bookLibraries: library && {
            some: {
              deleted: !1,
              library: {
                name: library
              }
            }
          } || void 0
        },
        select: {
          id: !0,
          name: !0,
          author: !0,
          description: !0,
          category: {
            select: {
              name: !0
            }
          }
        },
        orderBy: {
          createdAt: "desc"
        }
      });
      if (!data)
        throw new Error(ErrorGetPaginated3);
      return { count, data: fromPaginatedBooksResponse(data) };
    });
  } catch {
    throw new Error(ErrorGetPaginated3);
  }
}, deleteBook = async ({ bookId }) => {
  try {
    let book = await connect_default.books.update({
      where: {
        id: bookId
      },
      data: {
        deleted: !0,
        bookLibraries: {
          updateMany: {
            where: {
              deleted: !1
            },
            data: { deleted: !0 }
          }
        }
      }
    });
    if (!book)
      throw new Error(ErrorDelete3);
    return book;
  } catch {
    throw new Error(ErrorDelete3);
  }
}, forEachBookLibrary = async ({
  bookLibraries,
  bookId
}) => {
  let idList = [], skuList = [];
  bookLibraries.forEach((item) => {
    item.id && idList.push(item.id), item.sku && skuList.push(item.sku);
  });
  let skuDuplicates = toFindDuplicates(skuList);
  if (!await connect_default.bookLibraries.updateMany({
    where: {
      id: {
        notIn: idList
      },
      bookId,
      deleted: !1
    },
    data: {
      deleted: !0
    }
  }))
    throw new Error(ErrorMessage);
  let error = !1;
  for (let item of bookLibraries) {
    if (item.id) {
      if (await connect_default.bookLibraries.findFirst({
        where: {
          SKU: item.sku,
          deleted: !1,
          id: { not: item.id }
        },
        select: {
          id: !0
        }
      }) && !(0, import_lodash12.isEmpty)(skuDuplicates)) {
        error = !0;
        continue;
      }
      if (!await connect_default.bookLibraries.updateMany({
        where: {
          id: item.id,
          deleted: !1
        },
        data: {
          bookId,
          libraryId: item.library,
          SKU: item.sku,
          place: item.place
        }
      })) {
        error = !0;
        continue;
      }
      continue;
    }
    if (await connect_default.bookLibraries.findFirst({
      where: {
        SKU: item.sku,
        deleted: !1
      },
      select: {
        id: !0
      }
    })) {
      error = !0;
      continue;
    }
    if (!await connect_default.bookLibraries.create({
      data: {
        bookId,
        libraryId: item.library,
        SKU: item.sku,
        place: item.place
      }
    })) {
      error = !0;
      continue;
    }
  }
  if (error)
    throw new Error(ErrorMessage);
}, createBook = async ({
  name,
  author,
  description,
  image,
  pagesNumber,
  category,
  publishHouse,
  releaseYear,
  language,
  bookLibraries
}) => {
  try {
    if (await connect_default.books.findFirst({
      where: {
        name,
        deleted: !1
      },
      select: {
        id: !0
      }
    }))
      throw new Error(ErrorCreate3);
    let book = await connect_default.books.create({
      data: {
        name,
        author,
        description,
        image,
        pagesNumber: parseInt(pagesNumber),
        categoryId: category,
        publishHouseId: publishHouse,
        releaseYear: parseInt(releaseYear),
        languageId: language
      }
    });
    if (!book)
      throw new Error(ErrorCreate3);
    return await forEachBookLibrary({ bookLibraries, bookId: book.id }), book;
  } catch {
    throw new Error(ErrorCreate3);
  }
}, getSingleBook = async ({ bookId }) => {
  try {
    let book = await connect_default.$transaction(async (db) => {
      let book2 = await db.books.findFirst({
        where: {
          id: bookId,
          deleted: !1
        },
        select: {
          name: !0,
          author: !0,
          description: !0,
          image: !0,
          category: {
            select: {
              id: !0
            }
          },
          publishHouse: {
            select: {
              id: !0
            }
          },
          releaseYear: !0,
          pagesNumber: !0,
          language: {
            select: {
              id: !0
            }
          },
          bookLibraries: {
            where: { deleted: !1 },
            select: {
              id: !0,
              libraryId: !0,
              SKU: !0,
              place: !0
            }
          }
        }
      });
      if (!book2)
        throw new Error(ErrorGetSingle3);
      return book2;
    });
    return fromSingleBookResponse(book);
  } catch {
    throw new Error(ErrorGetSingle3);
  }
}, updateBook = async ({
  bookId,
  name,
  author,
  description,
  image,
  pagesNumber,
  category,
  publishHouse,
  releaseYear,
  language,
  bookLibraries
}) => {
  try {
    if (await connect_default.books.findFirst({
      where: {
        name,
        deleted: !1,
        id: { not: bookId }
      },
      select: {
        id: !0
      }
    }))
      throw new Error(ErrorUpdate3);
    let book = await connect_default.books.updateMany({
      where: {
        id: bookId,
        deleted: !1
      },
      data: {
        name,
        author,
        description,
        image,
        pagesNumber: parseInt(pagesNumber),
        categoryId: category,
        publishHouseId: publishHouse,
        releaseYear: parseInt(releaseYear),
        languageId: language
      }
    });
    if (!book)
      throw new Error(ErrorUpdate3);
    return await forEachBookLibrary({ bookLibraries, bookId }), book;
  } catch {
    throw new Error(ErrorUpdate3);
  }
}, getBookBySku = async ({ sku }) => {
  try {
    if (!sku)
      return null;
    let book = await connect_default.bookLibraries.findFirst({
      where: {
        deleted: !1,
        SKU: sku,
        NOT: [
          {
            loanBooks: {
              some: {
                bookLibrary: {
                  SKU: sku
                }
              }
            }
          }
        ]
      },
      select: {
        id: !0,
        book: {
          select: {
            name: !0
          }
        },
        library: {
          select: {
            name: !0,
            city: { select: { name: !0 } }
          }
        },
        SKU: !0,
        place: !0,
        deleted: !0
      }
    });
    return book ? fromBookBySku(book) : null;
  } catch {
    throw new Error(ErrorMessage);
  }
};

// app/server/media.server.tsx
var import_cloudinary = __toESM(require("cloudinary")), import_uuid = require("uuid");
import_cloudinary.default.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
var uploadImage = async (image) => {
  try {
    let { public_id } = await import_cloudinary.default.v2.uploader.upload(image, {
      public_id: (0, import_uuid.v4)()
    });
    return public_id;
  } catch {
    throw new Error(ErrorMessage);
  }
}, getImage = async (imageName) => {
  try {
    let { secure_url } = await import_cloudinary.default.v2.api.resource(imageName);
    return secure_url;
  } catch {
  }
};

// app/server/languages.server.tsx
var getLanguages = async () => {
  try {
    let languages = await connect_default.languages.findMany({
      select: {
        id: !0,
        name: !0
      }
    });
    if (!languages)
      throw new Error(ErrorMessage);
    return languages;
  } catch {
    throw new Error(ErrorMessage);
  }
};

// app/routes/__app/books/$bookId.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), loader7 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node9.redirect)("/login");
  try {
    let bookId = new URL(request.url).pathname.split("/").pop();
    if (!(0, import_lodash13.isString)(bookId))
      return badRequest({
        message: ErrorGetSingle3,
        success: !1
      });
    let [book, categories, publishHouses, libraries, languages] = await Promise.all([
      getSingleBook({
        bookId
      }),
      getCategories(),
      getPublishHouses(),
      getLibraries(),
      getLanguages()
    ]);
    return book.image && (book.image = await getImage(book.image)), goodRequest({
      book,
      categories,
      publishHouses,
      libraries,
      languages
    });
  } catch (error) {
    throw new Error(error.message || ErrorMessage);
  }
}, ErrorBoundary6 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ErrorInterface_default, {}, void 0, !1, {
  fileName: "app/routes/__app/books/$bookId.tsx",
  lineNumber: 83,
  columnNumber: 10
}, this), action7 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node9.redirect)("/login");
  try {
    let formData = await request.formData();
    if (formData.get("intent") === "update") {
      let name = formData.get("name"), author = formData.get("author"), description = formData.get("description"), image = formData.get("image"), category = formData.get("category"), publishHouse = formData.get("publishHouse"), releaseYear = formData.get("releaseYear"), pagesNumber = formData.get("pagesNumber"), language = formData.get("language"), bookLibraries = formData.get("bookLibraries"), bookId = new URL(request.url).pathname.split("/").pop();
      if (!(0, import_lodash13.isString)(bookId) || !(0, import_lodash13.isString)(name) || !(0, import_lodash13.isString)(author) || !(0, import_lodash13.isString)(description) || !(0, import_lodash13.isString)(image) || !(0, import_lodash13.isString)(category) || !(0, import_lodash13.isString)(publishHouse) || !(0, import_lodash13.isString)(releaseYear) || !(0, import_lodash13.isString)(pagesNumber) || !(0, import_lodash13.isString)(language) || !(0, import_lodash13.isString)(bookLibraries))
        return badRequest({
          message: ErrorUpdate3,
          success: !1
        });
      let objectBookLibraries = JSON.parse(bookLibraries), fields = {
        name,
        author,
        description,
        image,
        category,
        publishHouse,
        releaseYear,
        pagesNumber,
        language,
        bookLibraries: objectBookLibraries
      }, fieldErrors = handleBookErrors(fields);
      if (Object.values(fieldErrors).some(Boolean))
        return badRequest({
          message: ErrorUpdate3,
          success: !1
        });
      let imageId;
      return isValidUrl(image) || (imageId = await uploadImage(image)), await updateBook({ ...fields, bookId, image: imageId }), goodRequest({
        message: SuccessUpdate3,
        success: !0
      });
    }
    return badRequest({
      message: ErrorMessage,
      success: !1
    });
  } catch (error) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: !1
    });
  }
}, UpdateBook = () => {
  let submit = (0, import_react29.useSubmit)(), actionData = (0, import_react29.useActionData)(), navigate = (0, import_react29.useNavigate)(), data = (0, import_react29.useLoaderData)(), urlParams = (0, import_react29.useParams)(), [book, setBook] = (0, import_react30.useState)(data.book), categories = data.categories, publishHouses = data.publishHouses, libraries = data.libraries, languages = data.languages;
  return (0, import_react30.useEffect)(() => {
    actionData && (0, import_lodash13.isBoolean)(actionData.success) && navigate("/books");
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(LayoutTitle_default, { title: UpdateBookTitle, backUrl: "/books" }, void 0, !1, {
      fileName: "app/routes/__app/books/$bookId.tsx",
      lineNumber: 222,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
      BooksForm_default,
      {
        onSubmit: ({ callback }) => {
          let fieldErrors = handleBookErrors(book);
          if (Object.values(fieldErrors).some(Boolean)) {
            callback(fieldErrors);
            return;
          }
          let stringBookLibraries = JSON.stringify(book.bookLibraries);
          submit(
            {
              ...book,
              bookLibraries: stringBookLibraries,
              intent: "update"
            },
            {
              method: "post",
              action: `/books/${urlParams.bookId}`
            }
          );
        },
        setBook,
        book,
        categories,
        libraries,
        publishHouses,
        languages
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/books/$bookId.tsx",
        lineNumber: 223,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app/books/$bookId.tsx",
    lineNumber: 221,
    columnNumber: 5
  }, this);
}, bookId_default = UpdateBook;

// app/routes/__app/loans/$loanId.tsx
var loanId_exports = {};
__export(loanId_exports, {
  ErrorBoundary: () => ErrorBoundary7,
  action: () => action8,
  default: () => loanId_default,
  loader: () => loader8
});
var import_node10 = require("@remix-run/node"), import_react37 = require("@remix-run/react"), import_lodash18 = require("lodash"), import_react38 = require("react");

// app/components/Loans/Loans.const.tsx
var import_client2 = require("@prisma/client"), Loans = "Loans", NewLoan = "New loan", CreateLoanTitle = "Create loan", UpdateLoanTitle = "Update loan", ReservedLoanSubject = "Loan status reserved", BorrowedLoanSubject = "Loan status borrowed", CancelledLoanSubject = "Loan status cancelled", Reader = "Reader", Books2 = "Books", Penalty = "Penalty", Details4 = "Details", DaysNumber = "Days number", Amount = "Amount", Paid = "Paid", ReservedAt = "Reserved at", BorrowedAt = "Borrowed at", ReturnedAt = "Returned at", Add = "Add", Libraries3 = "Libraries", Status = "Status", ReaderPlaceholder = "Reader email", ErrorCreate4 = "There was a problem in creating the loan", SuccessCreate4 = "Loan created successfully", ErrorGetPaginated4 = "There was a problem in receiving loans", ErrorGetSingle4 = "There was a problem in receiving loan", ErrorDelete4 = "There was a problem in deleting the loan", SuccessDelete4 = "Loan deleted successfuly", ErrorUpdate4 = "There was a problem in updating the loan", SuccessUpdate4 = "Loan updated successfully", SearchPlaceholder4 = "Search for number, email or book sku", MandatoryReaderEmail = "You have to insert reader email", DeletedReader = "This reader no longer exists", NoReader = "We didn't find any reader with this email", DuplicatedReader = "You already have this reader in the loan", BookPlaceholder = "Book sku", MandatoryBookSku = "You have to insert book sku", DuplicatedBook = "You already have this book in the loan", DeletedBook = "This book no longer exists", NoBook = "We didn't find any available book with this sku", SameLibrary = "Books must belong to the same library", BooksDescription = "Books must belong to a single library", PenaltyDescription = "Penalties are calculated according to the number of delayed days multiplied by 0.1 EUR", readerColumns = [
  { name: "name", value: "Name" },
  { name: "email", value: "Email" },
  { name: "phone", value: "Phone" },
  { name: "city", value: "City" }
], bookColumns = [
  { name: "name", value: "Name" },
  { name: "sku", value: "Sku" },
  { name: "library", value: "Library" },
  { name: "city", value: "City" },
  { name: "place", value: "Place" }
], initialLoan = {
  status: import_client2.Status.BORROWED,
  reader: null,
  books: []
}, loansColumns = [
  { name: "number", value: "Number" },
  { name: "email", value: "Email" },
  { name: "status", value: "Status" },
  { name: "createdAt", value: "Created" }
], LoanStatuses = Object.keys(
  import_client2.Status
).map((item) => ({ id: item, name: item }));

// app/components/Loans/Forms/LoansForm.tsx
var import_Paper6 = __toESM(require("@mui/material/Paper")), import_react35 = require("react"), import_react36 = require("@remix-run/react");
var import_Typography10 = __toESM(require("@mui/material/Typography"));

// app/components/Loans/Forms/LoansReader.tsx
var import_react31 = require("react");
var import_material2 = require("@mui/material");

// app/components/Loans/Loans.style.tsx
var import_styled_components8 = __toESM(require("styled-components")), import_styles13 = require("@mui/material/styles"), import_FormHelperText2 = __toESM(require("@mui/material/FormHelperText")), import_IconButton4 = __toESM(require("@mui/material/IconButton")), import_Typography9 = __toESM(require("@mui/material/Typography")), StyledAutocomplete = (0, import_styled_components8.default)(Flex_default)`
  justify-content: end;
  gap: 20px;
  flex: 1;
`, StyledTableColumn = (0, import_styled_components8.default)(ColumnFlex)`
  border: 1px solid ${colorPalette_default.grey.base};
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
`, StyledTable2 = import_styled_components8.default.table`
  text-align: left;
  min-width: 600px;
  td {
    padding: 7px;
    white-space: nowrap;
  }
  th {
    padding: 0px 7px 7px 7px;
    white-space: nowrap;
  }
`, StyledRow = import_styled_components8.default.tr`
  background-color: ${colorPalette_default.grey.lighter};
  h2 {
    min-height: 20px;
  }
`, StyledSearch = (0, import_styled_components8.default)(Flex_default)`
  gap: 20px;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`, StyledFormHelperText = (0, import_styles13.styled)(
  import_FormHelperText2.default
)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    marginBottom: "5px"
  })
), StyledIconButton3 = (0, import_styles13.styled)(import_IconButton4.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    padding: "0"
  })
), EndFlex = (0, import_styled_components8.default)(Flex_default)`
  gap: 15px;
  align-items: baseline;
  background-color: ${colorPalette_default.grey.lighter};
  padding: 10px 20px;
`, StyleFlex2 = (0, import_styled_components8.default)(Flex_default)`
  gap: 20px;
  @media (max-width: 950px) {
    gap: 10px;
    flex-direction: column;
  }
`, DateColumnFlex = (0, import_styled_components8.default)(ColumnFlex)`
  gap: 10px;
  background-color: ${colorPalette_default.grey.lighter};
  padding: 10px 20px;
`, StyledTypography2 = (0, import_styles13.styled)(import_Typography9.default)(
  ({ theme: theme2 }) => theme2.unstable_sx({
    "&.MuiTypography-root": {
      fontSize: "16px"
    }
  })
);

// app/components/Loans/Forms/LoansReader.tsx
var import_react32 = require("@remix-run/react"), import_FormHelperText3 = __toESM(require("@mui/material/FormHelperText")), import_lodash14 = require("lodash");
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), LoansReader = ({
  setLoan,
  loan,
  error,
  setError
}) => {
  let fetcher = (0, import_react32.useFetcher)(), urlParams = (0, import_react32.useParams)(), { reader } = loan, [search, setSearch] = (0, import_react31.useState)(""), [searchError, setSearchError] = (0, import_react31.useState)(""), data = fetcher.data || {};
  (0, import_react31.useEffect)(() => {
    if ((0, import_lodash14.isNull)(data.reader)) {
      setSearchError(NoReader);
      return;
    }
    data.reader && (setLoan((oldLoan) => ({ ...oldLoan, reader: data.reader })), setSearch(""));
  }, [data.reader]);
  let onReaderSearch = () => {
    if (error.reader && setError((oldError) => {
      let { reader: reader2, ...rest } = oldError;
      return rest;
    }), !search) {
      setSearchError(MandatoryReaderEmail);
      return;
    }
    if ((reader == null ? void 0 : reader.email) === search) {
      setSearchError(DuplicatedReader);
      return;
    }
    fetcher.load(`/loans/${urlParams.loanId || "create"}?email=${search}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ColumnFlex, { gap: "20px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(StyledSearch, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
        InputContainer_default,
        {
          value: search,
          placeholder: ReaderPlaceholder,
          onChange: (value) => {
            setSearch(value), searchError && setSearchError("");
          },
          errorMessage: error.reader || searchError,
          width: "350px"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Loans/Forms/LoansReader.tsx",
          lineNumber: 84,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
        ButtonContainer_default,
        {
          type: "button" /* button */,
          title: Add,
          variant: "contained" /* contained */,
          onClick: onReaderSearch
        },
        void 0,
        !1,
        {
          fileName: "app/components/Loans/Forms/LoansReader.tsx",
          lineNumber: 91,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Loans/Forms/LoansReader.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    reader && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(StyledTableColumn, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(StyledTable2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("tr", { children: readerColumns.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("th", { children: item.value }, index, !1, {
        fileName: "app/components/Loans/Forms/LoansReader.tsx",
        lineNumber: 105,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/components/Loans/Forms/LoansReader.tsx",
        lineNumber: 103,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Loans/Forms/LoansReader.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("tbody", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(StyledRow, { children: readerColumns.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_material2.Typography, { variant: "h2", children: reader[item.name] }, void 0, !1, {
          fileName: "app/components/Loans/Forms/LoansReader.tsx",
          lineNumber: 113,
          columnNumber: 21
        }, this) }, index, !1, {
          fileName: "app/components/Loans/Forms/LoansReader.tsx",
          lineNumber: 112,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/components/Loans/Forms/LoansReader.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this),
        (reader == null ? void 0 : reader.deleted) && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_FormHelperText3.default, { error: !0, children: DeletedReader }, void 0, !1, {
          fileName: "app/components/Loans/Forms/LoansReader.tsx",
          lineNumber: 121,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Loans/Forms/LoansReader.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Loans/Forms/LoansReader.tsx",
      lineNumber: 101,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Loans/Forms/LoansReader.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Loans/Forms/LoansReader.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}, LoansReader_default = LoansReader;

// app/components/Loans/Forms/LoansBooks.tsx
var import_react33 = require("react");
var import_material3 = require("@mui/material");
var import_react34 = require("@remix-run/react"), import_lodash15 = require("lodash"), import_DeleteOutline2 = __toESM(require("@mui/icons-material/DeleteOutline"));
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), LoansBooks = ({
  setLoan,
  loan,
  error,
  setError
}) => {
  let fetcher = (0, import_react34.useFetcher)(), urlParams = (0, import_react34.useParams)(), { books } = loan, [search, setSearch] = (0, import_react33.useState)(""), [searchError, setSearchError] = (0, import_react33.useState)(""), data = fetcher.data || {};
  (0, import_react33.useEffect)(() => {
    if ((0, import_lodash15.isNull)(data.book)) {
      setSearchError(NoBook);
      return;
    }
    if (data.book) {
      let sameLoanLibrary = loan.books.find(
        (item) => item.library === data.book.library
      );
      if (!(0, import_lodash15.isEmpty)(loan.books) && !sameLoanLibrary) {
        setSearchError(SameLibrary);
        return;
      }
      setLoan((oldLoad) => ({
        ...oldLoad,
        books: [...oldLoad.books, data.book]
      })), setSearch("");
    }
  }, [data.book]);
  let onBookSearch = () => {
    if (error.books && setError((oldError) => {
      let { books: books2, ...rest } = oldError;
      return rest;
    }), !search) {
      setSearchError(MandatoryBookSku);
      return;
    }
    if (books.find((item) => item.sku === search)) {
      setSearchError(DuplicatedBook);
      return;
    }
    fetcher.load(`/loans/${urlParams.loanId || "create"}?sku=${search}`);
  }, onSkuChange = (value) => {
    setSearch(value), searchError && setSearchError("");
  }, onBookRemove = (bookId) => {
    setLoan((oldLoan) => {
      let newBooksLoan = oldLoan.books.filter((item) => item.id !== bookId);
      return {
        ...oldLoan,
        books: newBooksLoan
      };
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(ColumnFlex, { gap: "20px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(StyledSearch, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        InputContainer_default,
        {
          value: search,
          placeholder: BookPlaceholder,
          onChange: onSkuChange,
          errorMessage: error.books || searchError,
          width: "350px"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Loans/Forms/LoansBooks.tsx",
          lineNumber: 110,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        ButtonContainer_default,
        {
          type: "button" /* button */,
          title: Add,
          variant: "contained" /* contained */,
          onClick: onBookSearch
        },
        void 0,
        !1,
        {
          fileName: "app/components/Loans/Forms/LoansBooks.tsx",
          lineNumber: 118,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Loans/Forms/LoansBooks.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    !(0, import_lodash15.isEmpty)(books) && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(StyledTableColumn, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(StyledTable2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("tr", { children: bookColumns.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("th", { children: item.value }, index, !1, {
        fileName: "app/components/Loans/Forms/LoansBooks.tsx",
        lineNumber: 132,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/components/Loans/Forms/LoansBooks.tsx",
        lineNumber: 130,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Loans/Forms/LoansBooks.tsx",
        lineNumber: 129,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("tbody", { children: books.map((book, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_jsx_dev_runtime33.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(StyledRow, { children: bookColumns.map((column, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(SpaceBetweenCenterFlex, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_material3.Typography, { variant: "h2", children: book[column.name] }, void 0, !1, {
            fileName: "app/components/Loans/Forms/LoansBooks.tsx",
            lineNumber: 143,
            columnNumber: 27
          }, this),
          bookColumns.length === index2 + 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            StyledIconButton3,
            {
              onClick: () => onBookRemove(book.id),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_DeleteOutline2.default, {}, void 0, !1, {
                fileName: "app/components/Loans/Forms/LoansBooks.tsx",
                lineNumber: 151,
                columnNumber: 31
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Loans/Forms/LoansBooks.tsx",
              lineNumber: 148,
              columnNumber: 29
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Loans/Forms/LoansBooks.tsx",
          lineNumber: 142,
          columnNumber: 25
        }, this) }, index2, !1, {
          fileName: "app/components/Loans/Forms/LoansBooks.tsx",
          lineNumber: 141,
          columnNumber: 23
        }, this)) }, index, !1, {
          fileName: "app/components/Loans/Forms/LoansBooks.tsx",
          lineNumber: 139,
          columnNumber: 19
        }, this),
        (book == null ? void 0 : book.deleted) && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(StyledFormHelperText, { error: !0, children: DeletedBook }, void 0, !1, {
          fileName: "app/components/Loans/Forms/LoansBooks.tsx",
          lineNumber: 160,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Loans/Forms/LoansBooks.tsx",
        lineNumber: 138,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/components/Loans/Forms/LoansBooks.tsx",
        lineNumber: 136,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Loans/Forms/LoansBooks.tsx",
      lineNumber: 128,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Loans/Forms/LoansBooks.tsx",
      lineNumber: 127,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Loans/Forms/LoansBooks.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}, LoansBooks_default = LoansBooks;

// app/components/Loans/Forms/LoansPenalty.tsx
var import_material4 = require("@mui/material");
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), LoansPenalty = ({ penalty }) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(StyleFlex2, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(EndFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(StyledTypography2, { variant: "h3", children: DaysNumber }, void 0, !1, {
      fileName: "app/components/Loans/Forms/LoansPenalty.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_material4.Typography, { variant: "h2", children: penalty.days }, void 0, !1, {
      fileName: "app/components/Loans/Forms/LoansPenalty.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Loans/Forms/LoansPenalty.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(EndFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(StyledTypography2, { variant: "h3", children: Amount }, void 0, !1, {
      fileName: "app/components/Loans/Forms/LoansPenalty.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_material4.Typography, { variant: "h2", children: [
      penalty.amount,
      " EUR"
    ] }, void 0, !0, {
      fileName: "app/components/Loans/Forms/LoansPenalty.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Loans/Forms/LoansPenalty.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(EndFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(StyledTypography2, { variant: "h3", children: Paid }, void 0, !1, {
      fileName: "app/components/Loans/Forms/LoansPenalty.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_material4.Typography, { variant: "h2", children: penalty.paid ? "YES" : "NO" }, void 0, !1, {
      fileName: "app/components/Loans/Forms/LoansPenalty.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Loans/Forms/LoansPenalty.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Loans/Forms/LoansPenalty.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this), LoansPenalty_default = LoansPenalty;

// app/components/Loans/Forms/LoansDetails.tsx
var import_material5 = require("@mui/material");
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), LoansDetails = ({ loan }) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(StyleFlex2, { children: [
  loan.createdAt && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(DateColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(StyledTypography2, { variant: "h3", children: ReservedAt }, void 0, !1, {
      fileName: "app/components/Loans/Forms/LoansDetails.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_material5.Typography, { variant: "h2", children: loan.createdAt }, void 0, !1, {
      fileName: "app/components/Loans/Forms/LoansDetails.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Loans/Forms/LoansDetails.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this),
  loan.borrowedAt && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(DateColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(StyledTypography2, { variant: "h3", children: BorrowedAt }, void 0, !1, {
      fileName: "app/components/Loans/Forms/LoansDetails.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_material5.Typography, { variant: "h2", children: loan.borrowedAt }, void 0, !1, {
      fileName: "app/components/Loans/Forms/LoansDetails.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Loans/Forms/LoansDetails.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this),
  loan.returnedAt && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(DateColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(StyledTypography2, { variant: "h3", children: ReturnedAt }, void 0, !1, {
      fileName: "app/components/Loans/Forms/LoansDetails.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_material5.Typography, { variant: "h2", children: loan.returnedAt }, void 0, !1, {
      fileName: "app/components/Loans/Forms/LoansDetails.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Loans/Forms/LoansDetails.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Loans/Forms/LoansDetails.tsx",
  lineNumber: 8,
  columnNumber: 5
}, this), LoansDetails_default = LoansDetails;

// ../../packages/ui/components/Select/SelectContainer.tsx
var import_FormControl = __toESM(require("@mui/material/FormControl"));

// ../../packages/ui/components/Select/Select.style.tsx
var import_Select = __toESM(require("@mui/material/Select")), import_styles14 = require("@mui/material/styles"), StandardSelect = (0, import_styles14.styled)(import_Select.default)(
  ({ width, theme: theme2 }) => theme2.unstable_sx({
    flex: 1,
    maxWidth: { md: width, xs: "100%" }
  })
);

// ../../packages/ui/components/Select/SelectContainer.tsx
var import_MenuItem = __toESM(require("@mui/material/MenuItem")), import_InputLabel = __toESM(require("@mui/material/InputLabel")), import_FormHelperText4 = __toESM(require("@mui/material/FormHelperText")), import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), SelectContainer = ({
  label,
  value,
  options,
  errorMessage,
  onChange,
  width = "inherit",
  placeholder = ""
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_FormControl.default, { variant: "standard", error: !!errorMessage, children: [
  label && /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_InputLabel.default, { children: label }, void 0, !1, {
    fileName: "../../packages/ui/components/Select/SelectContainer.tsx",
    lineNumber: 23,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
    StandardSelect,
    {
      value,
      width,
      onChange: (event) => {
        onChange(event.target.value);
      },
      variant: "standard",
      placeholder,
      children: options.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_MenuItem.default, { value: item.value, children: item.name }, index, !1, {
        fileName: "../../packages/ui/components/Select/SelectContainer.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this))
    },
    void 0,
    !1,
    {
      fileName: "../../packages/ui/components/Select/SelectContainer.tsx",
      lineNumber: 24,
      columnNumber: 7
    },
    this
  ),
  errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_FormHelperText4.default, { children: errorMessage }, void 0, !1, {
    fileName: "../../packages/ui/components/Select/SelectContainer.tsx",
    lineNumber: 37,
    columnNumber: 24
  }, this)
] }, void 0, !0, {
  fileName: "../../packages/ui/components/Select/SelectContainer.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this), SelectContainer_default = SelectContainer;

// app/components/Loans/Loans.helper.tsx
var import_client3 = require("@prisma/client"), import_lodash16 = require("lodash");
var handleLoanErrors = (formData) => {
  let errors = {}, { reader, books, status } = formData;
  return (0, import_lodash16.isEmpty)(reader) && (errors.reader = RequiredField), (0, import_lodash16.isEmpty)(books) && (errors.books = RequiredField), (0, import_lodash16.isEmpty)(status) && (errors.status = RequiredField), errors;
}, LoanFilteredStatuses = (currentStatus) => {
  let statuses = Object.keys(import_client3.Status).map((item) => ({
    value: item,
    name: item
  }));
  switch (currentStatus) {
    case import_client3.Status.RESERVED:
      return statuses.filter((item) => (/* @__PURE__ */ new Set([
        import_client3.Status.RESERVED,
        import_client3.Status.BORROWED,
        import_client3.Status.CANCELLED
      ])).has(item.value));
    case import_client3.Status.BORROWED:
      return statuses.filter((item) => (/* @__PURE__ */ new Set([
        import_client3.Status.BORROWED,
        import_client3.Status.RETURNED
      ])).has(item.value));
    case import_client3.Status.RETURNED:
      return statuses.filter((item) => (/* @__PURE__ */ new Set([import_client3.Status.RETURNED])).has(item.value));
    case import_client3.Status.CANCELLED:
      return statuses.filter((item) => (/* @__PURE__ */ new Set([import_client3.Status.CANCELLED])).has(item.value));
    default:
      return statuses.filter((item) => (/* @__PURE__ */ new Set([
        import_client3.Status.RESERVED,
        import_client3.Status.BORROWED
      ])).has(item.value));
  }
};

// app/components/Loans/Forms/LoansForm.tsx
var import_client4 = require("@prisma/client"), import_jsx_dev_runtime37 = require("react/jsx-dev-runtime"), LoansForm = ({ onSubmit, setLoan, loan }) => {
  let navigate = (0, import_react36.useNavigate)(), urlParams = (0, import_react36.useParams)(), [currentStatus] = (0, import_react35.useState)(
    urlParams.loanId ? loan.status : void 0
  ), [errors, setErrors] = (0, import_react35.useState)({}), handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors) => setErrors(fieldErrors)
    });
  }, filteredStatuses = LoanFilteredStatuses(
    urlParams.loanId ? currentStatus : void 0
  ), changeStatus = (value) => {
    errors.status && setErrors((oldErrors) => {
      let { status, ...rest } = oldErrors;
      return rest;
    }), setLoan((oldLoan) => ({
      ...oldLoan,
      status: value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_Paper6.default, { className: "overview-paper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(ColumnFlex, { gap: "40px", maxWidth: "800px", children: [
      loan.status && /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(AlignedFlex, { gap: "20px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_Typography10.default, { variant: "h3", children: "Status" }, void 0, !1, {
          fileName: "app/components/Loans/Forms/LoansForm.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          SelectContainer_default,
          {
            value: loan.status,
            onChange: changeStatus,
            options: filteredStatuses,
            width: "140px",
            errorMessage: errors.status
          },
          void 0,
          !1,
          {
            fileName: "app/components/Loans/Forms/LoansForm.tsx",
            lineNumber: 64,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Loans/Forms/LoansForm.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      loan.createdAt && /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_jsx_dev_runtime37.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_Typography10.default, { variant: "h3", children: Details4 }, void 0, !1, {
          fileName: "app/components/Loans/Forms/LoansForm.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(LoansDetails_default, { loan }, void 0, !1, {
          fileName: "app/components/Loans/Forms/LoansForm.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Loans/Forms/LoansForm.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_Typography10.default, { variant: "h3", children: Reader }, void 0, !1, {
        fileName: "app/components/Loans/Forms/LoansForm.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
        LoansReader_default,
        {
          setLoan,
          loan,
          error: errors,
          setError: setErrors
        },
        void 0,
        !1,
        {
          fileName: "app/components/Loans/Forms/LoansForm.tsx",
          lineNumber: 82,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(ColumnFlex, { gap: "10px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_Typography10.default, { variant: "h3", children: Books2 }, void 0, !1, {
          fileName: "app/components/Loans/Forms/LoansForm.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_Typography10.default, { variant: "h1", children: BooksDescription }, void 0, !1, {
          fileName: "app/components/Loans/Forms/LoansForm.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Loans/Forms/LoansForm.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
        LoansBooks_default,
        {
          setLoan,
          loan,
          error: errors,
          setError: setErrors
        },
        void 0,
        !1,
        {
          fileName: "app/components/Loans/Forms/LoansForm.tsx",
          lineNumber: 93,
          columnNumber: 9
        },
        this
      ),
      loan.penalty && /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_jsx_dev_runtime37.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(ColumnFlex, { gap: "10px", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_Typography10.default, { variant: "h3", children: Penalty }, void 0, !1, {
            fileName: "app/components/Loans/Forms/LoansForm.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_Typography10.default, { variant: "h1", children: PenaltyDescription }, void 0, !1, {
            fileName: "app/components/Loans/Forms/LoansForm.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Loans/Forms/LoansForm.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(LoansPenalty_default, { penalty: loan.penalty }, void 0, !1, {
          fileName: "app/components/Loans/Forms/LoansForm.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Loans/Forms/LoansForm.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Loans/Forms/LoansForm.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(StyledFlexButton, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
        ButtonContainer_default,
        {
          title: "Cancel",
          variant: "outlined" /* outlined */,
          onClick: () => navigate("/books")
        },
        void 0,
        !1,
        {
          fileName: "app/components/Loans/Forms/LoansForm.tsx",
          lineNumber: 113,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
        ButtonContainer_default,
        {
          type: "submit" /* submit */,
          title: urlParams.loanId ? "Update" : "Create",
          variant: "contained" /* contained */,
          onClick: handleOnSubmit,
          disabled: currentStatus === import_client4.Status.RETURNED || currentStatus === import_client4.Status.CANCELLED
        },
        void 0,
        !1,
        {
          fileName: "app/components/Loans/Forms/LoansForm.tsx",
          lineNumber: 118,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Loans/Forms/LoansForm.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Loans/Forms/LoansForm.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}, LoansForm_default = LoansForm;

// app/transformers/loans.transformer.tsx
var fromPaginatedLoansResponse = (loans) => loans.map((item) => ({
  ...item,
  email: item.reader.email,
  createdAt: formatLoangDate(item.createdAt)
})), fromSingleLoanResponse = (loan) => {
  let reader = {
    ...loan.reader,
    city: loan.reader.city.name
  }, books = loan.books.map((loandBook) => {
    let { id, book, library, SKU, place, deleted } = loandBook.bookLibrary;
    return {
      id,
      name: book.name,
      library: library.name,
      city: library.city.name,
      sku: SKU,
      place,
      deleted
    };
  }), transformedLoan = {
    number: loan.number,
    status: loan.status,
    reader,
    books,
    createdAt: formatLoangDate(loan.createdAt)
  };
  return loan.penalty && (transformedLoan.penalty = loan.penalty), loan.borrowedAt && (transformedLoan.borrowedAt = formatLoangDate(loan.borrowedAt)), loan.returnedAt && (transformedLoan.returnedAt = formatLoangDate(loan.returnedAt)), transformedLoan;
};

// app/server/loans.server.tsx
var import_client5 = require("@prisma/client"), import_lodash17 = require("lodash");

// ../../packages/ui/templates/ReservedLoan.email.tsx
var ReservedLoanEmail = ({
  reader,
  number,
  byDate
}) => `<html>
<head>
  <meta charset="utf-8">
  <title>Loan status reserved</title>
</head>  
<body>
  <div style="text-align: center; margin: 30px 0; font-size: 15px">
    <h2 style="margin-bottom: 35px; font-size: 22px">Hi ${reader},</h2>
    <p>We inform you that your loan number <strong>${number}</strong> was successfully placed with status reserved. </p>
    <p>Please pick up the books within 2 days, by ${byDate}, otherwise we will have to cancel the loan.</p>
  </div>
</body>
</html>`;

// ../../packages/ui/templates/BorrowedLoan.email.tsx
var BorrowedLoanEmail = ({
  reader,
  number,
  byDate
}) => `<html>
<head>
  <meta charset="utf-8">
  <title>Loan status borrowed</title>
</head>  
<body>
  <div style="text-align: center; margin: 30px 0; font-size: 15px">
    <h2 style="margin-bottom: 35px; font-size: 22px">Hi ${reader},</h2>
    <p>We inform you that your loan number <strong>${number}</strong> was successfully placed with status borrowed. </p>
    <p>Please return the books within 30 days, by ${byDate}, otherwise we will have to add penalties.</p>
  </div>
</body>
</html>`;

// ../../packages/ui/templates/CancelledLoan.email.tsx
var CancelledLoanEmail = ({
  reader,
  number
}) => `<html>
<head>
  <meta charset="utf-8">
  <title>Loan status cancelled</title>
</head>  
<body>
  <div style="text-align: center; margin: 30px 0; font-size: 15px">
    <h2 style="margin-bottom: 35px; font-size: 22px">Hi ${reader},</h2>
    <p>We inform you that your loan number <strong>${number}</strong> was cancelled.</p>
  </div>
</body>
</html>`;

// app/server/loans.server.tsx
var getPaginatedLoans = async ({
  page,
  search,
  library,
  status
}) => {
  try {
    let skip = page && page > 1 && (page - 1) * 5 || void 0;
    return await connect_default.$transaction(async (db) => {
      let count = await db.loans.count({
        where: {
          OR: [
            {
              number: {
                contains: search,
                mode: "insensitive"
              }
            },
            {
              reader: {
                email: {
                  contains: search,
                  mode: "insensitive"
                }
              }
            },
            {
              books: {
                some: {
                  bookLibrary: {
                    SKU: {
                      contains: search,
                      mode: "insensitive"
                    }
                  }
                }
              }
            }
          ],
          books: library && {
            some: {
              bookLibrary: {
                library: {
                  name: library
                }
              }
            }
          } || void 0,
          status: status && import_client5.Status[status] || void 0
        },
        orderBy: {
          createdAt: "desc"
        }
      }), data = await db.loans.findMany({
        skip,
        take: 5,
        where: {
          OR: [
            {
              number: {
                contains: search,
                mode: "insensitive"
              }
            },
            {
              reader: {
                email: {
                  contains: search,
                  mode: "insensitive"
                }
              }
            },
            {
              books: {
                some: {
                  bookLibrary: {
                    SKU: {
                      contains: search,
                      mode: "insensitive"
                    }
                  }
                }
              }
            }
          ],
          books: library && {
            some: {
              bookLibrary: {
                library: {
                  name: library
                }
              }
            }
          } || void 0,
          status: status && import_client5.Status[status] || void 0
        },
        select: {
          id: !0,
          number: !0,
          reader: {
            select: {
              email: !0
            }
          },
          status: !0,
          createdAt: !0
        },
        orderBy: {
          createdAt: "desc"
        }
      });
      if (!data)
        throw new Error(ErrorGetPaginated4);
      return { count, data: fromPaginatedLoansResponse(data) };
    });
  } catch {
    throw new Error(ErrorGetPaginated4);
  }
}, getSingleLoan = async ({ loanId }) => {
  try {
    let loan = await connect_default.loans.findFirst({
      where: {
        id: loanId
      },
      select: {
        number: !0,
        reader: {
          select: {
            id: !0,
            name: !0,
            phone: !0,
            email: !0,
            city: { select: { name: !0 } },
            deleted: !0
          }
        },
        books: {
          select: {
            bookLibrary: {
              select: {
                id: !0,
                book: {
                  select: {
                    name: !0
                  }
                },
                library: {
                  select: {
                    name: !0,
                    city: { select: { name: !0 } }
                  }
                },
                SKU: !0,
                place: !0,
                deleted: !0
              }
            }
          }
        },
        status: !0,
        penalty: !0,
        borrowedAt: !0,
        returnedAt: !0,
        createdAt: !0
      }
    });
    if (!loan)
      throw new Error(ErrorGetSingle4);
    return fromSingleLoanResponse(loan);
  } catch {
    throw new Error(ErrorGetSingle4);
  }
}, forEachLoanBook = async ({ loanBooks, loanId }) => {
  await connect_default.loanBooks.deleteMany({
    where: {
      loanId,
      bookLibraryId: { notIn: loanBooks.map((item) => item.id) }
    }
  });
  let loanedBooks = await connect_default.loans.findFirst({
    where: {
      id: loanId
    },
    select: {
      books: {
        select: {
          bookLibraryId: !0,
          bookLibrary: { select: { libraryId: !0 } }
        }
      }
    }
  }), alreadyLoaned = new Set(
    loanedBooks == null ? void 0 : loanedBooks.books.map((item) => item.bookLibraryId)
  ), newBooks = loanBooks.filter((item) => !alreadyLoaned.has(item.id)).map((item) => ({
    bookLibraryId: item.id,
    loanId
  })), libraryId = (loanedBooks == null ? void 0 : loanedBooks.books) && !(0, import_lodash17.isEmpty)(loanedBooks.books) ? loanedBooks.books[0].bookLibrary.libraryId : "", error = !1;
  for (let item of newBooks) {
    if (await connect_default.loanBooks.findFirst({
      where: {
        bookLibraryId: item.bookLibraryId,
        loan: { status: { in: [import_client5.Status.BORROWED, import_client5.Status.RESERVED] } }
      },
      select: {
        id: !0
      }
    })) {
      error = !0;
      continue;
    }
    let libraryBook = await connect_default.bookLibraries.findFirst({
      where: {
        id: item.bookLibraryId,
        deleted: !1
      },
      select: {
        libraryId: !0
      }
    });
    if (!libraryBook) {
      error = !0;
      continue;
    }
    if (!libraryId)
      libraryId = libraryBook.libraryId;
    else if (libraryId !== libraryBook.libraryId) {
      error = !0;
      continue;
    }
    if (!await connect_default.loanBooks.create({
      data: item
    })) {
      error = !0;
      continue;
    }
  }
  if (error)
    throw new Error(ErrorMessage);
}, createLoan = async ({ reader, books, status }) => {
  try {
    if (!LoanFilteredStatuses().some((item) => item.value === status))
      throw new Error(ErrorCreate4);
    let lastLoan = await connect_default.loans.findFirst({
      take: 1,
      orderBy: {
        createdAt: "desc"
      },
      select: {
        number: !0
      }
    }), number = lastLoan && (parseInt(lastLoan.number) + 1).toString() || "1", loan = await connect_default.loans.create({
      data: {
        number,
        status,
        readerId: reader.id,
        borrowedAt: status === import_client5.Status.BORROWED ? new Date() : void 0
      }
    });
    if (!loan)
      throw new Error(ErrorCreate4);
    if (await forEachLoanBook({ loanBooks: books, loanId: loan.id }), status === import_client5.Status.RESERVED) {
      let byDate = addDateDays(2), data = {
        reader: reader.name,
        byDate: formatShortDate(byDate),
        number: loan.number
      };
      await sendEmail({
        to: reader.email,
        subject: ReservedLoanSubject,
        template: ReservedLoanEmail(data)
      });
    }
    if (status === import_client5.Status.BORROWED) {
      let byDate = addDateDays(30), data = {
        reader: reader.name,
        byDate: formatShortDate(byDate),
        number: loan.number
      };
      await sendEmail({
        to: reader.email,
        subject: BorrowedLoanSubject,
        template: BorrowedLoanEmail(data)
      });
    }
    return loan;
  } catch {
    throw new Error(ErrorCreate4);
  }
}, updateLoan = async ({
  loanId,
  reader,
  books,
  status
}) => {
  try {
    let currentLoan = await connect_default.loans.findFirst({
      where: {
        id: loanId
      },
      select: {
        status: !0,
        penalty: !0
      }
    });
    if (!currentLoan)
      throw new Error(ErrorUpdate4);
    if ((/* @__PURE__ */ new Set([
      import_client5.Status.RETURNED,
      import_client5.Status.CANCELLED
    ])).has(currentLoan.status))
      throw new Error(ErrorUpdate4);
    if (!LoanFilteredStatuses(currentLoan.status).some((item) => item.value === status))
      throw new Error(ErrorUpdate4);
    let penalty = currentLoan.penalty && status === import_client5.Status.RETURNED ? { ...currentLoan.penalty, paid: !0 } : void 0, loan = await connect_default.loans.update({
      where: {
        id: loanId
      },
      data: {
        status,
        readerId: reader.id,
        borrowedAt: status === import_client5.Status.BORROWED && status !== currentLoan.status ? new Date() : void 0,
        returnedAt: status === import_client5.Status.RETURNED && status !== currentLoan.status ? new Date() : void 0,
        penalty
      }
    });
    if (!loan)
      throw new Error(ErrorUpdate4);
    if (await forEachLoanBook({ loanBooks: books, loanId }), status === import_client5.Status.BORROWED && status !== currentLoan.status) {
      let byDate = addDateDays(30), data = {
        reader: reader.name,
        byDate: formatShortDate(byDate),
        number: loan.number
      };
      await sendEmail({
        to: reader.email,
        subject: BorrowedLoanSubject,
        template: BorrowedLoanEmail(data)
      });
    }
    if (status === import_client5.Status.CANCELLED && status !== currentLoan.status) {
      let data = {
        reader: reader.name,
        number: loan.number
      };
      await sendEmail({
        to: reader.email,
        subject: CancelledLoanSubject,
        template: CancelledLoanEmail(data)
      });
    }
    return loan;
  } catch {
    throw new Error(ErrorUpdate4);
  }
}, deleteLoan = async ({ loanId }) => {
  try {
    if (!await connect_default.loanBooks.deleteMany({
      where: {
        loanId
      }
    }))
      throw new Error(ErrorDelete4);
    let loan = await connect_default.loans.deleteMany({
      where: {
        id: loanId
      }
    });
    if (!loan)
      throw new Error(ErrorDelete4);
    return loan;
  } catch {
    throw new Error(ErrorDelete4);
  }
}, groupLoansRaport = async ({
  year,
  library,
  status
}) => {
  try {
    let newYear = getCorrectYear(year), loansRaport = await connect_default.loans.aggregateRaw({
      pipeline: [
        {
          $lookup: {
            from: "LoanBooks",
            localField: "_id",
            foreignField: "loanId",
            as: "loanBook"
          }
        },
        {
          $unwind: {
            path: "$loanBook",
            preserveNullAndEmptyArrays: !0
          }
        },
        {
          $lookup: {
            from: "BookLibraries",
            localField: "loanBook.bookLibraryId",
            foreignField: "_id",
            as: "loanBook.bookLibrary"
          }
        },
        {
          $unwind: {
            path: "$loanBook.bookLibrary",
            preserveNullAndEmptyArrays: !0
          }
        },
        {
          $lookup: {
            from: "Libraries",
            localField: "loanBook.bookLibrary.libraryId",
            foreignField: "_id",
            as: "loanBook.bookLibrary.library"
          }
        },
        {
          $unwind: {
            path: "$loanBook.bookLibrary.library",
            preserveNullAndEmptyArrays: !0
          }
        },
        {
          $project: {
            library: "$loanBook.bookLibrary.library.name",
            status: "$status",
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" }
          }
        },
        {
          $match: {
            year: newYear,
            library: library || void 0,
            status: status || void 0
          }
        },
        {
          $group: {
            _id: "$_id",
            name: { $first: "$library" },
            year: { $first: "$year" },
            month: { $first: "$month" }
          }
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 }
          }
        },
        {
          $project: {
            _id: 0,
            month: "$_id",
            total: "$total"
          }
        }
      ]
    });
    if (!loansRaport)
      throw new Error(ErrorMessage);
    return loansRaport;
  } catch {
    throw new Error(ErrorMessage);
  }
};

// app/routes/__app/loans/$loanId.tsx
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node10.redirect)("/login");
  try {
    let url = new URL(request.url), loanId = url.pathname.split("/").pop(), email = url.searchParams.get("email") || "", sku = url.searchParams.get("sku") || "";
    if (email) {
      let reader = await getReaderByEmail({ email });
      return goodRequest({ reader });
    }
    if (sku) {
      let book = await getBookBySku({ sku });
      return goodRequest({ book });
    }
    if (!(0, import_lodash18.isString)(loanId))
      return badRequest({
        message: ErrorGetSingle4,
        success: !1
      });
    let loan = await getSingleLoan({
      loanId
    });
    return goodRequest({ loan });
  } catch (error) {
    throw new Error(error.message || ErrorMessage);
  }
}, ErrorBoundary7 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(ErrorInterface_default, {}, void 0, !1, {
  fileName: "app/routes/__app/loans/$loanId.tsx",
  lineNumber: 77,
  columnNumber: 10
}, this), action8 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node10.redirect)("/login");
  try {
    let formData = await request.formData();
    if (formData.get("intent") === "update") {
      let status = formData.get("status"), reader = formData.get("reader"), books = formData.get("books"), loanId = new URL(request.url).pathname.split("/").pop();
      if (!(0, import_lodash18.isString)(loanId) || !(0, import_lodash18.isString)(status) || !(0, import_lodash18.isString)(reader) || !(0, import_lodash18.isString)(books))
        return badRequest({
          message: ErrorUpdate4,
          success: !1
        });
      let objectReader = JSON.parse(reader), objectBooks = JSON.parse(books), fields = {
        status,
        reader: objectReader,
        books: objectBooks
      }, fieldErrors = handleLoanErrors(fields);
      return Object.values(fieldErrors).some(Boolean) ? badRequest({
        message: ErrorUpdate4,
        success: !1
      }) : (await updateLoan({ ...fields, loanId }), goodRequest({
        message: SuccessUpdate4,
        success: !0
      }));
    }
    return badRequest({
      message: ErrorMessage,
      success: !1
    });
  } catch (error) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: !1
    });
  }
}, UpdateLoan = () => {
  let submit = (0, import_react37.useSubmit)(), data = (0, import_react37.useLoaderData)(), actionData = (0, import_react37.useActionData)(), navigate = (0, import_react37.useNavigate)(), urlParams = (0, import_react37.useParams)(), [loan, setLoan] = (0, import_react38.useState)(data.loan);
  return (0, import_react38.useEffect)(() => {
    actionData && (0, import_lodash18.isBoolean)(actionData.success) && navigate("/loans");
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(ColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(LayoutTitle_default, { title: UpdateLoanTitle, backUrl: "/loans" }, void 0, !1, {
      fileName: "app/routes/__app/loans/$loanId.tsx",
      lineNumber: 191,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(LoansForm_default, { onSubmit: ({ callback }) => {
      let fieldErrors = handleLoanErrors(loan);
      if (Object.values(fieldErrors).some(Boolean)) {
        callback(fieldErrors);
        return;
      }
      let stringReader = JSON.stringify(loan.reader), stringBooks = JSON.stringify(loan.books), stringPenalty = JSON.stringify(loan.penalty);
      submit(
        {
          ...loan,
          reader: stringReader,
          books: stringBooks,
          penalty: stringPenalty,
          intent: "update"
        },
        {
          method: "post",
          action: `/loans/${urlParams.loanId}`
        }
      );
    }, setLoan, loan }, void 0, !1, {
      fileName: "app/routes/__app/loans/$loanId.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app/loans/$loanId.tsx",
    lineNumber: 190,
    columnNumber: 5
  }, this);
}, loanId_default = UpdateLoan;

// app/routes/__app/readers/index.tsx
var readers_exports = {};
__export(readers_exports, {
  ErrorBoundary: () => ErrorBoundary8,
  action: () => action9,
  default: () => readers_default,
  loader: () => loader9
});

// app/components/Readers/Overview/ReadersOverview.tsx
var import_Paper7 = __toESM(require("@mui/material/Paper"));
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), ReadersOverview = ({
  readers,
  page,
  filter,
  onPageChange,
  onSearchChange,
  onCityChange,
  onDelete,
  cities
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_Paper7.default, { className: "overview-paper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(ColumnFlex, { gap: "30px", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(StyledFilters, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
      InputContainer_default,
      {
        placeholder: SearchPlaceholder2,
        onChange: onSearchChange,
        width: "300px",
        value: filter.search
      },
      void 0,
      !1,
      {
        fileName: "app/components/Readers/Overview/ReadersOverview.tsx",
        lineNumber: 24,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
      AutocompleteContainer_default,
      {
        onChange: onCityChange,
        options: cities,
        value: filter.city,
        placeholder: Cities2,
        width: "200px"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Readers/Overview/ReadersOverview.tsx",
        lineNumber: 30,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Readers/Overview/ReadersOverview.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
    TableContainer_default,
    {
      columns: readersColumns,
      rows: readers.data,
      count: readers.count,
      page,
      onPageChange,
      onDelete
    },
    void 0,
    !1,
    {
      fileName: "app/components/Readers/Overview/ReadersOverview.tsx",
      lineNumber: 39,
      columnNumber: 9
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Readers/Overview/ReadersOverview.tsx",
  lineNumber: 22,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Readers/Overview/ReadersOverview.tsx",
  lineNumber: 21,
  columnNumber: 5
}, this), ReadersOverview_default = ReadersOverview;

// app/routes/__app/readers/index.tsx
var import_react39 = require("@remix-run/react");
var import_react40 = require("react"), import_lodash19 = require("lodash"), import_node11 = require("@remix-run/node");
var import_react_router_dom2 = require("react-router-dom");
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime"), loader9 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node11.redirect)("/login");
  try {
    let url = new URL(request.url), page = url.searchParams.get("page"), search = url.searchParams.get("search") || "", city = url.searchParams.get("city") || "", pageNumber = 1;
    page && checkIfNumber(page) && (pageNumber = parseInt(page));
    let [readers, cities] = await Promise.all([
      getPaginatedReaders({
        page: pageNumber,
        search,
        city
      }),
      getCities()
    ]);
    return goodRequest({ readers, cities });
  } catch (error) {
    throw new Error(error.message || ErrorMessage);
  }
}, ErrorBoundary8 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(ErrorInterface_default, {}, void 0, !1, {
  fileName: "app/routes/__app/readers/index.tsx",
  lineNumber: 69,
  columnNumber: 10
}, this), action9 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node11.redirect)("/login");
  try {
    let formData = await request.formData();
    if (formData.get("intent") === "delete") {
      let readerId = formData.get("readerId");
      return (0, import_lodash19.isString)(readerId) ? (await deleteReader({ readerId }), goodRequest({
        message: SuccessDelete2,
        success: !0
      })) : badRequest({
        message: ErrorDelete2,
        success: !1
      });
    }
    return badRequest({
      message: ErrorMessage,
      success: !1
    });
  } catch (error) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: !1
    });
  }
}, PaginatedReaders = () => {
  let navigate = (0, import_react39.useNavigate)(), location = (0, import_react39.useLocation)(), data = (0, import_react39.useLoaderData)(), submit = (0, import_react39.useSubmit)(), [searchParams, setSearchParams] = (0, import_react_router_dom2.useSearchParams)(), page = searchParams.get("page"), search = searchParams.get("search") || "", city = searchParams.get("city") || "", pageNumber = 1;
  page && checkIfNumber(page) && (pageNumber = parseInt(page));
  let readers = data.readers, cities = data.cities, filterCities = cities.find(
    (item) => item.name === city
  ), [filter, setFilter] = (0, import_react40.useState)({
    search,
    city: (filterCities == null ? void 0 : filterCities.id) || ""
  }), handleCreateReader = () => {
    navigate(`${location.pathname}/create`);
  }, handleChangePage = (pageNumber2) => {
    setSearchParams((oldSearchParams) => ({
      ...oldSearchParams,
      page: pageNumber2.toString()
    }));
  }, debounceSearchChange = (0, import_react40.useCallback)(
    (0, import_lodash19.debounce)((value) => {
      let params = {};
      value && (params = { ...params, search: value }), city && (params = { ...params, city }), setSearchParams(params);
    }, 500),
    [city]
  ), handleSearchChange = (value) => {
    setFilter((oldValue) => ({ ...oldValue, search: value })), debounceSearchChange(value);
  }, handleCityChange = (value) => {
    setFilter((oldValue) => ({
      ...oldValue,
      city: (value == null ? void 0 : value.id) || ""
    }));
    let params = {};
    search && (params = { ...params, search }), value && (params = { ...params, city: (value == null ? void 0 : value.name) || "" }), setSearchParams(params);
  }, handleDelete = (id) => {
    submit(
      {
        readerId: id,
        intent: "delete"
      },
      {
        method: "delete",
        action: `/readers${location.search}`
      }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(ColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(LayoutTitle_default, { title: Readers, children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
      ButtonContainer_default,
      {
        title: NewReader,
        variant: "contained" /* contained */,
        onClick: handleCreateReader
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/readers/index.tsx",
        lineNumber: 199,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/__app/readers/index.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
      ReadersOverview_default,
      {
        readers,
        page: pageNumber,
        onPageChange: handleChangePage,
        filter,
        onSearchChange: handleSearchChange,
        onCityChange: handleCityChange,
        onDelete: handleDelete,
        cities
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/readers/index.tsx",
        lineNumber: 206,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app/readers/index.tsx",
    lineNumber: 197,
    columnNumber: 5
  }, this);
}, readers_default = PaginatedReaders;

// app/routes/__app/books/create.tsx
var create_exports3 = {};
__export(create_exports3, {
  ErrorBoundary: () => ErrorBoundary9,
  action: () => action10,
  default: () => create_default3,
  loader: () => loader10
});
var import_node12 = require("@remix-run/node"), import_react41 = require("@remix-run/react"), import_lodash20 = require("lodash"), import_react42 = require("react");
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime"), loader10 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node12.redirect)("/login");
  try {
    let [categories, publishHouses, libraries, languages] = await Promise.all(
      [getCategories(), getPublishHouses(), getLibraries(), getLanguages()]
    );
    return goodRequest({ categories, publishHouses, libraries, languages });
  } catch (error) {
    throw new Error(error.message || ErrorMessage);
  }
}, action10 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node12.redirect)("/login");
  try {
    let formData = await request.formData();
    if (formData.get("intent") === "create") {
      let name = formData.get("name"), author = formData.get("author"), description = formData.get("description"), category = formData.get("category"), image = formData.get("image"), publishHouse = formData.get("publishHouse"), releaseYear = formData.get("releaseYear"), pagesNumber = formData.get("pagesNumber"), language = formData.get("language"), bookLibraries = formData.get("bookLibraries");
      if (!(0, import_lodash20.isString)(name) || !(0, import_lodash20.isString)(author) || !(0, import_lodash20.isString)(description) || !(0, import_lodash20.isString)(category) || !(0, import_lodash20.isString)(image) || !(0, import_lodash20.isString)(publishHouse) || !(0, import_lodash20.isString)(releaseYear) || !(0, import_lodash20.isString)(pagesNumber) || !(0, import_lodash20.isString)(language) || !(0, import_lodash20.isString)(bookLibraries))
        return badRequest({
          message: ErrorCreate3,
          success: !1
        });
      let objectBookLibraries = JSON.parse(bookLibraries), fields = {
        name,
        author,
        description,
        category,
        image,
        publishHouse,
        releaseYear,
        pagesNumber,
        language,
        bookLibraries: objectBookLibraries
      }, fieldErrors = handleBookErrors(fields);
      if (Object.values(fieldErrors).some(Boolean))
        return badRequest({
          message: ErrorCreate3,
          success: !1
        });
      let imageId = await uploadImage(image);
      return await createBook({ ...fields, image: imageId }), goodRequest({
        message: SuccessCreate3,
        success: !0
      });
    }
    return badRequest({
      message: ErrorMessage,
      success: !1
    });
  } catch (error) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: !1
    });
  }
}, ErrorBoundary9 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(ErrorInterface_default, {}, void 0, !1, {
  fileName: "app/routes/__app/books/create.tsx",
  lineNumber: 143,
  columnNumber: 10
}, this), CreateBook = () => {
  let submit = (0, import_react41.useSubmit)(), actionData = (0, import_react41.useActionData)(), navigate = (0, import_react41.useNavigate)(), data = (0, import_react41.useLoaderData)(), [book, setBook] = (0, import_react42.useState)(initialBook), categories = data.categories, publishHouses = data.publishHouses, libraries = data.libraries, languages = data.languages;
  return (0, import_react42.useEffect)(() => {
    actionData && (0, import_lodash20.isBoolean)(actionData.success) && navigate("/books");
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(ColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(LayoutTitle_default, { title: CreateBookTitle, backUrl: "/books" }, void 0, !1, {
      fileName: "app/routes/__app/books/create.tsx",
      lineNumber: 188,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
      BooksForm_default,
      {
        onSubmit: ({ callback }) => {
          let fieldErrors = handleBookErrors(book);
          if (Object.values(fieldErrors).some(Boolean)) {
            callback(fieldErrors);
            return;
          }
          let stringBookLibraries = JSON.stringify(book.bookLibraries);
          submit(
            {
              ...book,
              bookLibraries: stringBookLibraries,
              intent: "create"
            },
            {
              method: "post",
              action: "/books/create"
            }
          );
        },
        setBook,
        book,
        categories,
        publishHouses,
        libraries,
        languages
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/books/create.tsx",
        lineNumber: 189,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app/books/create.tsx",
    lineNumber: 187,
    columnNumber: 5
  }, this);
}, create_default3 = CreateBook;

// app/routes/__app/loans/create.tsx
var create_exports4 = {};
__export(create_exports4, {
  ErrorBoundary: () => ErrorBoundary10,
  action: () => action11,
  default: () => create_default4,
  loader: () => loader11
});
var import_node13 = require("@remix-run/node"), import_react43 = require("@remix-run/react"), import_react44 = require("react");
var import_lodash21 = require("lodash"), import_jsx_dev_runtime42 = require("react/jsx-dev-runtime"), loader11 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node13.redirect)("/login");
  try {
    let url = new URL(request.url), email = url.searchParams.get("email") || "", sku = url.searchParams.get("sku") || "";
    if (email) {
      let reader = await getReaderByEmail({ email });
      return goodRequest({ reader });
    }
    if (sku) {
      let book = await getBookBySku({ sku });
      return goodRequest({ book });
    }
    return {};
  } catch (error) {
    throw new Error(error.message || ErrorMessage);
  }
}, action11 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node13.redirect)("/login");
  try {
    let formData = await request.formData();
    if (formData.get("intent") === "create") {
      let status = formData.get("status"), reader = formData.get("reader"), books = formData.get("books");
      if (!(0, import_lodash21.isString)(status) || !(0, import_lodash21.isString)(reader) || !(0, import_lodash21.isString)(books))
        return badRequest({
          message: ErrorCreate4,
          success: !1
        });
      let objectReader = JSON.parse(reader), objectBooks = JSON.parse(books), fields = {
        status,
        reader: objectReader,
        books: objectBooks
      }, fieldErrors = handleLoanErrors(fields);
      return Object.values(fieldErrors).some(Boolean) ? badRequest({
        message: ErrorCreate4,
        success: !1
      }) : (await createLoan(fields), goodRequest({
        message: SuccessCreate4,
        success: !0
      }));
    }
    return badRequest({
      message: ErrorMessage,
      success: !1
    });
  } catch (error) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: !1
    });
  }
}, ErrorBoundary10 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(ErrorInterface_default, {}, void 0, !1, {
  fileName: "app/routes/__app/loans/create.tsx",
  lineNumber: 120,
  columnNumber: 10
}, this), CreateLoan = () => {
  let submit = (0, import_react43.useSubmit)(), actionData = (0, import_react43.useActionData)(), navigate = (0, import_react43.useNavigate)(), [loan, setLoan] = (0, import_react44.useState)(initialLoan);
  return (0, import_react44.useEffect)(() => {
    actionData && (0, import_lodash21.isBoolean)(actionData.success) && navigate("/loans");
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(ColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(LayoutTitle_default, { title: CreateLoanTitle, backUrl: "/loans" }, void 0, !1, {
      fileName: "app/routes/__app/loans/create.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(LoansForm_default, { onSubmit: ({ callback }) => {
      let fieldErrors = handleLoanErrors(loan);
      if (Object.values(fieldErrors).some(Boolean)) {
        callback(fieldErrors);
        return;
      }
      let stringReader = JSON.stringify(loan.reader), stringBooks = JSON.stringify(loan.books), stringPenalty = JSON.stringify(loan.penalty);
      submit(
        {
          ...loan,
          reader: stringReader,
          books: stringBooks,
          penalty: stringPenalty,
          intent: "create"
        },
        {
          method: "post",
          action: "/loans/create"
        }
      );
    }, setLoan, loan }, void 0, !1, {
      fileName: "app/routes/__app/loans/create.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app/loans/create.tsx",
    lineNumber: 163,
    columnNumber: 5
  }, this);
}, create_default4 = CreateLoan;

// app/routes/__app/books/index.tsx
var books_exports = {};
__export(books_exports, {
  ErrorBoundary: () => ErrorBoundary11,
  action: () => action12,
  default: () => books_default,
  loader: () => loader12
});

// app/components/Books/Overview/BooksOverview.tsx
var import_Paper8 = __toESM(require("@mui/material/Paper"));
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime"), BooksOverview = ({
  books,
  page,
  filter,
  onPageChange,
  onSearchChange,
  onCategoryChange,
  onLibraryChange,
  onDelete,
  categories,
  libraries
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_Paper8.default, { className: "overview-paper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(ColumnFlex, { gap: "30px", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(StyledFilters, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
      InputContainer_default,
      {
        placeholder: SearchPlaceholder3,
        onChange: onSearchChange,
        width: "300px",
        value: filter.search
      },
      void 0,
      !1,
      {
        fileName: "app/components/Books/Overview/BooksOverview.tsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(StyledAutocomplete, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
        AutocompleteContainer_default,
        {
          onChange: onCategoryChange,
          options: categories,
          value: filter.category,
          placeholder: Categories,
          width: "200px"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Books/Overview/BooksOverview.tsx",
          lineNumber: 39,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
        AutocompleteContainer_default,
        {
          onChange: onLibraryChange,
          options: libraries,
          value: filter.library,
          placeholder: Libraries2,
          width: "200px"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Books/Overview/BooksOverview.tsx",
          lineNumber: 46,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Books/Overview/BooksOverview.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Books/Overview/BooksOverview.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
    TableContainer_default,
    {
      columns: booksColumns,
      rows: books.data,
      count: books.count,
      page,
      onPageChange,
      onDelete
    },
    void 0,
    !1,
    {
      fileName: "app/components/Books/Overview/BooksOverview.tsx",
      lineNumber: 56,
      columnNumber: 9
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Books/Overview/BooksOverview.tsx",
  lineNumber: 30,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Books/Overview/BooksOverview.tsx",
  lineNumber: 29,
  columnNumber: 5
}, this), BooksOverview_default = BooksOverview;

// app/routes/__app/books/index.tsx
var import_react45 = require("@remix-run/react");
var import_react46 = require("react"), import_lodash22 = require("lodash"), import_node14 = require("@remix-run/node");
var import_react_router_dom3 = require("react-router-dom");
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime"), loader12 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node14.redirect)("/login");
  try {
    let url = new URL(request.url), page = url.searchParams.get("page"), search = url.searchParams.get("search") || "", category = url.searchParams.get("category") || "", library = url.searchParams.get("library") || "", pageNumber = 1;
    page && checkIfNumber(page) && (pageNumber = parseInt(page));
    let [books, categories, libraries] = await Promise.all([
      getPaginatedBooks({
        page: pageNumber,
        search,
        category,
        library
      }),
      getCategories(),
      getLibraries()
    ]);
    return goodRequest({ books, categories, libraries });
  } catch (error) {
    throw new Error(error.message || ErrorMessage);
  }
}, ErrorBoundary11 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(ErrorInterface_default, {}, void 0, !1, {
  fileName: "app/routes/__app/books/index.tsx",
  lineNumber: 73,
  columnNumber: 10
}, this), action12 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node14.redirect)("/login");
  try {
    let formData = await request.formData();
    if (formData.get("intent") === "delete") {
      let bookId = formData.get("bookId");
      return (0, import_lodash22.isString)(bookId) ? (await deleteBook({ bookId }), goodRequest({
        message: SuccessDelete3,
        success: !0
      })) : badRequest({
        message: ErrorDelete3,
        success: !1
      });
    }
    return badRequest({
      message: ErrorMessage,
      success: !1
    });
  } catch (error) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: !1
    });
  }
}, PaginatedBooks = () => {
  let navigate = (0, import_react45.useNavigate)(), location = (0, import_react45.useLocation)(), data = (0, import_react45.useLoaderData)(), submit = (0, import_react45.useSubmit)(), [searchParams, setSearchParams] = (0, import_react_router_dom3.useSearchParams)(), page = searchParams.get("page"), search = searchParams.get("search") || "", category = searchParams.get("category") || "", library = searchParams.get("library") || "", pageNumber = 1;
  page && checkIfNumber(page) && (pageNumber = parseInt(page));
  let books = data.books, categories = data.categories, libraries = data.libraries, filterCategory = categories.find(
    (item) => item.name === category
  ), filterLibrary = libraries.find(
    (item) => item.name === library
  ), [filter, setFilter] = (0, import_react46.useState)({
    search,
    category: (filterCategory == null ? void 0 : filterCategory.id) || "",
    library: (filterLibrary == null ? void 0 : filterLibrary.id) || ""
  }), handleCreateBook = () => {
    navigate(`${location.pathname}/create`);
  }, handleChangePage = (pageNumber2) => {
    setSearchParams((oldSearchParams) => ({
      ...oldSearchParams,
      page: pageNumber2.toString()
    }));
  }, debounceSearchChange = (0, import_react46.useCallback)(
    (0, import_lodash22.debounce)((value) => {
      let params = {};
      value && (params = { ...params, search: value }), category && (params = { ...params, category }), library && (params = { ...params, library }), setSearchParams(params);
    }, 500),
    [category, library]
  ), handleSearchChange = (value) => {
    setFilter((oldValue) => ({ ...oldValue, search: value })), debounceSearchChange(value);
  }, handleCategoryChange = (value) => {
    setFilter((oldValue) => ({
      ...oldValue,
      category: (value == null ? void 0 : value.id) || ""
    }));
    let params = {};
    search && (params = { ...params, search }), library && (params = { ...params, library }), value && (params = { ...params, category: (value == null ? void 0 : value.name) || "" }), setSearchParams(params);
  }, handleLibraryChange = (value) => {
    setFilter((oldValue) => ({
      ...oldValue,
      library: (value == null ? void 0 : value.id) || ""
    }));
    let params = {};
    search && (params = { ...params, search }), category && (params = { ...params, category }), value && (params = { ...params, library: (value == null ? void 0 : value.name) || "" }), setSearchParams(params);
  }, handleDelete = (id) => {
    submit(
      {
        bookId: id,
        intent: "delete"
      },
      {
        method: "delete",
        action: `/books${location.search}`
      }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(ColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(LayoutTitle_default, { title: Books, children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
      ButtonContainer_default,
      {
        title: NewBook,
        variant: "contained" /* contained */,
        onClick: handleCreateBook
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/books/index.tsx",
        lineNumber: 226,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/__app/books/index.tsx",
      lineNumber: 225,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
      BooksOverview_default,
      {
        books,
        page: pageNumber,
        onPageChange: handleChangePage,
        filter,
        onSearchChange: handleSearchChange,
        onCategoryChange: handleCategoryChange,
        onLibraryChange: handleLibraryChange,
        onDelete: handleDelete,
        categories,
        libraries
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/books/index.tsx",
        lineNumber: 233,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app/books/index.tsx",
    lineNumber: 224,
    columnNumber: 5
  }, this);
}, books_default = PaginatedBooks;

// app/routes/__app/loans/index.tsx
var loans_exports = {};
__export(loans_exports, {
  ErrorBoundary: () => ErrorBoundary12,
  action: () => action13,
  default: () => loans_default,
  loader: () => loader13
});

// app/components/Loans/Overview/LoansOverview.tsx
var import_Paper9 = __toESM(require("@mui/material/Paper"));
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime"), LoansOverview = ({
  loans,
  page,
  filter,
  onPageChange,
  onSearchChange,
  onLibraryChange,
  onStatusChange,
  onDelete,
  libraries
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_Paper9.default, { className: "overview-paper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(ColumnFlex, { gap: "30px", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(StyledFilters, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
      InputContainer_default,
      {
        placeholder: SearchPlaceholder4,
        onChange: onSearchChange,
        width: "300px",
        value: filter.search
      },
      void 0,
      !1,
      {
        fileName: "app/components/Loans/Overview/LoansOverview.tsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(StyledAutocomplete, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
        AutocompleteContainer_default,
        {
          onChange: onStatusChange,
          options: LoanStatuses,
          value: filter.status,
          placeholder: Status,
          width: "200px"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Loans/Overview/LoansOverview.tsx",
          lineNumber: 39,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
        AutocompleteContainer_default,
        {
          onChange: onLibraryChange,
          options: libraries,
          value: filter.library,
          placeholder: Libraries3,
          width: "200px"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Loans/Overview/LoansOverview.tsx",
          lineNumber: 46,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Loans/Overview/LoansOverview.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Loans/Overview/LoansOverview.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
    TableContainer_default,
    {
      columns: loansColumns,
      rows: loans.data,
      count: loans.count,
      page,
      onPageChange,
      onDelete
    },
    void 0,
    !1,
    {
      fileName: "app/components/Loans/Overview/LoansOverview.tsx",
      lineNumber: 55,
      columnNumber: 9
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Loans/Overview/LoansOverview.tsx",
  lineNumber: 30,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Loans/Overview/LoansOverview.tsx",
  lineNumber: 29,
  columnNumber: 5
}, this), LoansOverview_default = LoansOverview;

// app/routes/__app/loans/index.tsx
var import_react47 = require("@remix-run/react");
var import_react48 = require("react"), import_lodash23 = require("lodash"), import_node15 = require("@remix-run/node");
var import_react_router_dom4 = require("react-router-dom");
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime"), loader13 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node15.redirect)("/login");
  try {
    let url = new URL(request.url), page = url.searchParams.get("page"), search = url.searchParams.get("search") || "", library = url.searchParams.get("library") || "", status = url.searchParams.get("status") || "", pageNumber = 1;
    page && checkIfNumber(page) && (pageNumber = parseInt(page));
    let [loans, libraries] = await Promise.all([
      getPaginatedLoans({
        page: pageNumber,
        search,
        library,
        status
      }),
      getLibraries()
    ]);
    return goodRequest({ loans, libraries });
  } catch (error) {
    throw new Error(error.message || ErrorMessage);
  }
}, ErrorBoundary12 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(ErrorInterface_default, {}, void 0, !1, {
  fileName: "app/routes/__app/loans/index.tsx",
  lineNumber: 72,
  columnNumber: 10
}, this), action13 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node15.redirect)("/login");
  try {
    let formData = await request.formData();
    if (formData.get("intent") === "delete") {
      let loanId = formData.get("loanId");
      return (0, import_lodash23.isString)(loanId) ? (await deleteLoan({ loanId }), goodRequest({
        message: SuccessDelete4,
        success: !0
      })) : badRequest({
        message: ErrorDelete4,
        success: !1
      });
    }
    return badRequest({
      message: ErrorMessage,
      success: !1
    });
  } catch (error) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: !1
    });
  }
}, PaginatedLoans = () => {
  let navigate = (0, import_react47.useNavigate)(), location = (0, import_react47.useLocation)(), data = (0, import_react47.useLoaderData)(), submit = (0, import_react47.useSubmit)(), [searchParams, setSearchParams] = (0, import_react_router_dom4.useSearchParams)(), page = searchParams.get("page"), search = searchParams.get("search") || "", library = searchParams.get("library") || "", status = searchParams.get("status") || "", pageNumber = 1;
  page && checkIfNumber(page) && (pageNumber = parseInt(page));
  let loans = data.loans, libraries = data.libraries, filterLibraries = libraries.find(
    (item) => item.name === library
  ), filterStatus = LoanStatuses.find(
    (item) => item.name === status
  ), [filter, setFilter] = (0, import_react48.useState)({
    search,
    library: (filterLibraries == null ? void 0 : filterLibraries.id) || "",
    status: (filterStatus == null ? void 0 : filterStatus.id) || ""
  }), handleCreateLoan = () => {
    navigate(`${location.pathname}/create`);
  }, handleChangePage = (pageNumber2) => {
    setSearchParams((oldSearchParams) => ({
      ...oldSearchParams,
      page: pageNumber2.toString()
    }));
  }, debounceSearchChange = (0, import_react48.useCallback)(
    (0, import_lodash23.debounce)((value) => {
      let params = {};
      value && (params = { ...params, search: value }), library && (params = { ...params, library }), status && (params = { ...params, status }), setSearchParams(params);
    }, 500),
    [library, status]
  ), handleSearchChange = (value) => {
    setFilter((oldValue) => ({ ...oldValue, search: value })), debounceSearchChange(value);
  }, handleLibraryChange = (value) => {
    setFilter((oldValue) => ({
      ...oldValue,
      library: (value == null ? void 0 : value.id) || ""
    }));
    let params = {};
    search && (params = { ...params, search }), status && (params = { ...params, status }), value && (params = { ...params, library: (value == null ? void 0 : value.name) || "" }), setSearchParams(params);
  }, handleStatusChange = (value) => {
    setFilter((oldValue) => ({
      ...oldValue,
      status: (value == null ? void 0 : value.id) || ""
    }));
    let params = {};
    search && (params = { ...params, search }), library && (params = { ...params, library }), value && (params = { ...params, status: (value == null ? void 0 : value.name) || "" }), setSearchParams(params);
  }, handleDelete = (id) => {
    submit(
      {
        loanId: id,
        intent: "delete"
      },
      {
        method: "delete",
        action: `/loans${location.search}`
      }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(ColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(LayoutTitle_default, { title: Loans, children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
      ButtonContainer_default,
      {
        title: NewLoan,
        variant: "contained" /* contained */,
        onClick: handleCreateLoan
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/loans/index.tsx",
        lineNumber: 225,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/__app/loans/index.tsx",
      lineNumber: 224,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
      LoansOverview_default,
      {
        loans,
        page: pageNumber,
        onPageChange: handleChangePage,
        filter,
        onSearchChange: handleSearchChange,
        onLibraryChange: handleLibraryChange,
        onStatusChange: handleStatusChange,
        onDelete: handleDelete,
        libraries
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/loans/index.tsx",
        lineNumber: 232,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app/loans/index.tsx",
    lineNumber: 223,
    columnNumber: 5
  }, this);
}, loans_default = PaginatedLoans;

// app/routes/__app/index.tsx
var app_exports2 = {};
__export(app_exports2, {
  ErrorBoundary: () => ErrorBoundary13,
  action: () => action14,
  default: () => app_default2,
  loader: () => loader14
});
var import_node16 = require("@remix-run/node");
var import_react49 = require("react");
var import_react50 = require("@remix-run/react");

// app/components/Dashboard/Raport/DashboardRaport.tsx
var import_Paper10 = __toESM(require("@mui/material/Paper"));
var import_chart = require("chart.js"), import_react_chartjs_2 = require("react-chartjs-2");

// app/components/Dashboard/Dashboard.const.tsx
var Libraries4 = "Libraries", Status5 = "Status", Dashboard = "Dashboard";

// app/components/Dashboard/Dashboard.style.tsx
var import_styled_components9 = __toESM(require("styled-components")), StyledFlex = (0, import_styled_components9.default)(Flex_default)`
  gap: 20px;
  align-items: end;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: inherit;
  }
`;

// app/components/Dashboard/Dashboard.helper.tsx
var RaportOptions = (year) => ({
  plugins: {
    legend: {
      display: !1
    },
    title: {
      display: !0,
      text: `Loans raport for ${year}`
    }
  }
});

// app/components/Dashboard/Raport/DashboardRaport.tsx
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
import_chart.Chart.register(
  import_chart.CategoryScale,
  import_chart.LinearScale,
  import_chart.BarElement,
  import_chart.Title,
  import_chart.Tooltip,
  import_chart.Legend
);
var DashboardRaport = ({
  filter,
  raport,
  libraries,
  onYearChange,
  onLibraryChange,
  onStatusChange
}) => {
  let dateKeyDown = (e) => {
    e.preventDefault();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Paper10.default, { className: "overview-paper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(ColumnFlex, { gap: "30px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(StyledFlex, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
        DatePickerContainer_default,
        {
          label: "Year",
          value: filter.year,
          views: ["year"],
          onChange: onYearChange,
          onKeyDown: dateKeyDown
        },
        void 0,
        !1,
        {
          fileName: "app/components/Dashboard/Raport/DashboardRaport.tsx",
          lineNumber: 47,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
        AutocompleteContainer_default,
        {
          onChange: onLibraryChange,
          options: libraries,
          value: filter.library,
          label: Libraries4,
          width: "200px"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Dashboard/Raport/DashboardRaport.tsx",
          lineNumber: 54,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
        AutocompleteContainer_default,
        {
          onChange: onStatusChange,
          options: LoanStatuses,
          value: filter.status,
          label: Status5,
          width: "200px"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Dashboard/Raport/DashboardRaport.tsx",
          lineNumber: 61,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard/Raport/DashboardRaport.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react_chartjs_2.Bar, { data: raport, options: RaportOptions(filter.year) }, void 0, !1, {
      fileName: "app/components/Dashboard/Raport/DashboardRaport.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard/Raport/DashboardRaport.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Dashboard/Raport/DashboardRaport.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}, DashboardRaport_default = DashboardRaport;

// app/routes/__app/index.tsx
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime"), loader14 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node16.redirect)("/login");
  try {
    let url = new URL(request.url), year = url.searchParams.get("year") || "", library = url.searchParams.get("library") || "", status = url.searchParams.get("status") || "", [loansRaport, libraries] = await Promise.all([
      groupLoansRaport({ year, library, status }),
      getLibraries()
    ]);
    return goodRequest({
      loansRaport,
      libraries
    });
  } catch (error) {
    throw new Error(error.message || ErrorMessage);
  }
}, ErrorBoundary13 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(ErrorInterface_default, {}, void 0, !1, {
  fileName: "app/routes/__app/index.tsx",
  lineNumber: 57,
  columnNumber: 10
}, this), action14 = async ({ request }) => {
  if (!await getUserId(request))
    return (0, import_node16.redirect)("/login");
  try {
    return (await request.formData()).get("intent") === "logout" ? removeUserSession(request) : badRequest({
      message: ErrorMessage,
      success: !1
    });
  } catch (error) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: !1
    });
  }
}, Dashboard2 = () => {
  let data = (0, import_react50.useLoaderData)(), [searchParams, setSearchParams] = (0, import_react50.useSearchParams)(), year = searchParams.get("year") || "", status = searchParams.get("status") || "", library = searchParams.get("library") || "", libraries = data.libraries, loansRaport = Months.map((item) => {
    let reportByMonth = data.loansRaport.find(
      (raport2) => raport2.month === item.value
    );
    return reportByMonth ? { month: item.name, total: reportByMonth.total } : { month: item.name, total: 0 };
  }), filterLibrary = libraries.find(
    (item) => item.name === library
  ), filterStatus = LoanStatuses.find(
    (item) => item.name === status
  ), [filter, setFilter] = (0, import_react49.useState)({
    year: getCorrectYear(year).toString(),
    library: (filterLibrary == null ? void 0 : filterLibrary.id) || "",
    status: (filterStatus == null ? void 0 : filterStatus.id) || ""
  }), raport = {
    labels: loansRaport.map((item) => item.month),
    datasets: [
      {
        data: loansRaport.map((item) => item.total),
        backgroundColor: colorPalette_default.secondary.lighter
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(ColumnFlex, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(LayoutTitle_default, { title: Dashboard }, void 0, !1, {
      fileName: "app/routes/__app/index.tsx",
      lineNumber: 179,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
      DashboardRaport_default,
      {
        filter,
        raport,
        libraries,
        onYearChange: (value) => {
          let newYear = getYearFromDate(value);
          setFilter((oldValue) => ({
            ...oldValue,
            year: newYear
          }));
          let params = {};
          library && (params = { ...params, library }), status && (params = { ...params, status }), newYear && (params = { ...params, year: newYear }), setSearchParams(params);
        },
        onLibraryChange: (value) => {
          setFilter((oldValue) => ({
            ...oldValue,
            library: (value == null ? void 0 : value.id) || ""
          }));
          let params = {};
          year && (params = { ...params, year }), status && (params = { ...params, status }), value && (params = { ...params, library: (value == null ? void 0 : value.name) || "" }), setSearchParams(params);
        },
        onStatusChange: (value) => {
          setFilter((oldValue) => ({
            ...oldValue,
            status: (value == null ? void 0 : value.id) || ""
          }));
          let params = {};
          year && (params = { ...params, year }), library && (params = { ...params, library }), value && (params = { ...params, status: (value == null ? void 0 : value.name) || "" }), setSearchParams(params);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__app/index.tsx",
        lineNumber: 181,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__app/index.tsx",
    lineNumber: 178,
    columnNumber: 5
  }, this);
}, app_default2 = Dashboard2;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "bb5640cc", entry: { module: "/build/entry.client-BC7PQSHE.js", imports: ["/build/_shared/chunk-GSHBVEWO.js", "/build/_shared/chunk-3B2IBYF3.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SKHZ6TSB.js", imports: ["/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app": { id: "routes/__app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__app-ETQ5BAXG.js", imports: ["/build/_shared/chunk-WTQ7ZNSM.js", "/build/_shared/chunk-QQXGTXZW.js", "/build/_shared/chunk-7PKIOFRA.js", "/build/_shared/chunk-B6URHK6P.js", "/build/_shared/chunk-Q3TUDAPQ.js", "/build/_shared/chunk-2WMF5VUO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/books/$bookId": { id: "routes/__app/books/$bookId", parentId: "routes/__app", path: "books/:bookId", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/books/$bookId-U52I2XPX.js", imports: ["/build/_shared/chunk-TJFUZ4CD.js", "/build/_shared/chunk-FZDZG2QZ.js", "/build/_shared/chunk-GEJQLBYA.js", "/build/_shared/chunk-2JLX4AUY.js", "/build/_shared/chunk-N6AILK7I.js", "/build/_shared/chunk-G233SAEU.js", "/build/_shared/chunk-HOAV5AQK.js", "/build/_shared/chunk-P7ZIGD3U.js", "/build/_shared/chunk-JI56O5Z6.js", "/build/_shared/chunk-UZZOWYSL.js", "/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__app/books/create": { id: "routes/__app/books/create", parentId: "routes/__app", path: "books/create", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/books/create-CFYTPMRM.js", imports: ["/build/_shared/chunk-TJFUZ4CD.js", "/build/_shared/chunk-FZDZG2QZ.js", "/build/_shared/chunk-GEJQLBYA.js", "/build/_shared/chunk-2JLX4AUY.js", "/build/_shared/chunk-N6AILK7I.js", "/build/_shared/chunk-G233SAEU.js", "/build/_shared/chunk-HOAV5AQK.js", "/build/_shared/chunk-P7ZIGD3U.js", "/build/_shared/chunk-JI56O5Z6.js", "/build/_shared/chunk-UZZOWYSL.js", "/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__app/books/index": { id: "routes/__app/books/index", parentId: "routes/__app", path: "books", index: !0, caseSensitive: void 0, module: "/build/routes/__app/books/index-JGWBQGI6.js", imports: ["/build/_shared/chunk-J66H7JR5.js", "/build/_shared/chunk-FZDZG2QZ.js", "/build/_shared/chunk-3JBJZKBU.js", "/build/_shared/chunk-N6V5D5WC.js", "/build/_shared/chunk-GEJQLBYA.js", "/build/_shared/chunk-2JLX4AUY.js", "/build/_shared/chunk-G233SAEU.js", "/build/_shared/chunk-HOAV5AQK.js", "/build/_shared/chunk-P7ZIGD3U.js", "/build/_shared/chunk-JI56O5Z6.js", "/build/_shared/chunk-UZZOWYSL.js", "/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__app/index": { id: "routes/__app/index", parentId: "routes/__app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__app/index-ROFJLJFS.js", imports: ["/build/_shared/chunk-6SLQPBYM.js", "/build/_shared/chunk-7XWRBZT2.js", "/build/_shared/chunk-X7LMFJAS.js", "/build/_shared/chunk-2JLX4AUY.js", "/build/_shared/chunk-376VDJGU.js", "/build/_shared/chunk-HOAV5AQK.js", "/build/_shared/chunk-P7ZIGD3U.js", "/build/_shared/chunk-UZZOWYSL.js", "/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__app/libraries/$libraryId": { id: "routes/__app/libraries/$libraryId", parentId: "routes/__app", path: "libraries/:libraryId", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/libraries/$libraryId-JQMUT6ON.js", imports: ["/build/_shared/chunk-SB37BDZN.js", "/build/_shared/chunk-H7M2G7JP.js", "/build/_shared/chunk-2JLX4AUY.js", "/build/_shared/chunk-376VDJGU.js", "/build/_shared/chunk-T3UYT2H7.js", "/build/_shared/chunk-N6AILK7I.js", "/build/_shared/chunk-G233SAEU.js", "/build/_shared/chunk-HOAV5AQK.js", "/build/_shared/chunk-P7ZIGD3U.js", "/build/_shared/chunk-JI56O5Z6.js", "/build/_shared/chunk-UZZOWYSL.js", "/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__app/libraries/create": { id: "routes/__app/libraries/create", parentId: "routes/__app", path: "libraries/create", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/libraries/create-WXP3FPTX.js", imports: ["/build/_shared/chunk-SB37BDZN.js", "/build/_shared/chunk-H7M2G7JP.js", "/build/_shared/chunk-2JLX4AUY.js", "/build/_shared/chunk-376VDJGU.js", "/build/_shared/chunk-T3UYT2H7.js", "/build/_shared/chunk-N6AILK7I.js", "/build/_shared/chunk-G233SAEU.js", "/build/_shared/chunk-HOAV5AQK.js", "/build/_shared/chunk-P7ZIGD3U.js", "/build/_shared/chunk-JI56O5Z6.js", "/build/_shared/chunk-UZZOWYSL.js", "/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__app/libraries/index": { id: "routes/__app/libraries/index", parentId: "routes/__app", path: "libraries", index: !0, caseSensitive: void 0, module: "/build/routes/__app/libraries/index-WX2AFIDF.js", imports: ["/build/_shared/chunk-J66H7JR5.js", "/build/_shared/chunk-N6V5D5WC.js", "/build/_shared/chunk-H7M2G7JP.js", "/build/_shared/chunk-2JLX4AUY.js", "/build/_shared/chunk-T3UYT2H7.js", "/build/_shared/chunk-G233SAEU.js", "/build/_shared/chunk-HOAV5AQK.js", "/build/_shared/chunk-P7ZIGD3U.js", "/build/_shared/chunk-JI56O5Z6.js", "/build/_shared/chunk-UZZOWYSL.js", "/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__app/loans/$loanId": { id: "routes/__app/loans/$loanId", parentId: "routes/__app", path: "loans/:loanId", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/loans/$loanId-XYV7IEYT.js", imports: ["/build/_shared/chunk-JGPE7SKD.js", "/build/_shared/chunk-6SLQPBYM.js", "/build/_shared/chunk-3JBJZKBU.js", "/build/_shared/chunk-N6V5D5WC.js", "/build/_shared/chunk-GEJQLBYA.js", "/build/_shared/chunk-MQNFYAYI.js", "/build/_shared/chunk-N6AILK7I.js", "/build/_shared/chunk-P7ZIGD3U.js", "/build/_shared/chunk-JI56O5Z6.js", "/build/_shared/chunk-UZZOWYSL.js", "/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__app/loans/create": { id: "routes/__app/loans/create", parentId: "routes/__app", path: "loans/create", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/loans/create-R3PSJRX3.js", imports: ["/build/_shared/chunk-JGPE7SKD.js", "/build/_shared/chunk-6SLQPBYM.js", "/build/_shared/chunk-3JBJZKBU.js", "/build/_shared/chunk-N6V5D5WC.js", "/build/_shared/chunk-GEJQLBYA.js", "/build/_shared/chunk-MQNFYAYI.js", "/build/_shared/chunk-N6AILK7I.js", "/build/_shared/chunk-P7ZIGD3U.js", "/build/_shared/chunk-JI56O5Z6.js", "/build/_shared/chunk-UZZOWYSL.js", "/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__app/loans/index": { id: "routes/__app/loans/index", parentId: "routes/__app", path: "loans", index: !0, caseSensitive: void 0, module: "/build/routes/__app/loans/index-VPRSYS7F.js", imports: ["/build/_shared/chunk-6SLQPBYM.js", "/build/_shared/chunk-J66H7JR5.js", "/build/_shared/chunk-3JBJZKBU.js", "/build/_shared/chunk-N6V5D5WC.js", "/build/_shared/chunk-2JLX4AUY.js", "/build/_shared/chunk-G233SAEU.js", "/build/_shared/chunk-HOAV5AQK.js", "/build/_shared/chunk-P7ZIGD3U.js", "/build/_shared/chunk-JI56O5Z6.js", "/build/_shared/chunk-UZZOWYSL.js", "/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__app/readers/$readerId": { id: "routes/__app/readers/$readerId", parentId: "routes/__app", path: "readers/:readerId", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/readers/$readerId-SBW6G7IP.js", imports: ["/build/_shared/chunk-E6MTVN4O.js", "/build/_shared/chunk-X7LMFJAS.js", "/build/_shared/chunk-R5U6GGLB.js", "/build/_shared/chunk-MQNFYAYI.js", "/build/_shared/chunk-376VDJGU.js", "/build/_shared/chunk-T3UYT2H7.js", "/build/_shared/chunk-N6AILK7I.js", "/build/_shared/chunk-G233SAEU.js", "/build/_shared/chunk-HOAV5AQK.js", "/build/_shared/chunk-P7ZIGD3U.js", "/build/_shared/chunk-JI56O5Z6.js", "/build/_shared/chunk-UZZOWYSL.js", "/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__app/readers/create": { id: "routes/__app/readers/create", parentId: "routes/__app", path: "readers/create", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/readers/create-PWJBD4YL.js", imports: ["/build/_shared/chunk-E6MTVN4O.js", "/build/_shared/chunk-X7LMFJAS.js", "/build/_shared/chunk-R5U6GGLB.js", "/build/_shared/chunk-MQNFYAYI.js", "/build/_shared/chunk-376VDJGU.js", "/build/_shared/chunk-T3UYT2H7.js", "/build/_shared/chunk-N6AILK7I.js", "/build/_shared/chunk-G233SAEU.js", "/build/_shared/chunk-HOAV5AQK.js", "/build/_shared/chunk-P7ZIGD3U.js", "/build/_shared/chunk-JI56O5Z6.js", "/build/_shared/chunk-UZZOWYSL.js", "/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__app/readers/index": { id: "routes/__app/readers/index", parentId: "routes/__app", path: "readers", index: !0, caseSensitive: void 0, module: "/build/routes/__app/readers/index-TNGOKRNJ.js", imports: ["/build/_shared/chunk-J66H7JR5.js", "/build/_shared/chunk-N6V5D5WC.js", "/build/_shared/chunk-R5U6GGLB.js", "/build/_shared/chunk-MQNFYAYI.js", "/build/_shared/chunk-T3UYT2H7.js", "/build/_shared/chunk-G233SAEU.js", "/build/_shared/chunk-HOAV5AQK.js", "/build/_shared/chunk-P7ZIGD3U.js", "/build/_shared/chunk-JI56O5Z6.js", "/build/_shared/chunk-UZZOWYSL.js", "/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__auth": { id: "routes/__auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__auth-DZWOZZVU.js", imports: ["/build/_shared/chunk-WTQ7ZNSM.js", "/build/_shared/chunk-B6URHK6P.js", "/build/_shared/chunk-2WMF5VUO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/login": { id: "routes/__auth/login", parentId: "routes/__auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/login-PWWULOKM.js", imports: ["/build/_shared/chunk-7XWRBZT2.js", "/build/_shared/chunk-QQXGTXZW.js", "/build/_shared/chunk-JI56O5Z6.js", "/build/_shared/chunk-UZZOWYSL.js", "/build/_shared/chunk-RERRPDCV.js", "/build/_shared/chunk-Q3TUDAPQ.js", "/build/_shared/chunk-CEGYRLZN.js", "/build/_shared/chunk-NEKFOY6V.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-BB5640CC.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/__auth": {
    id: "routes/__auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/__auth/login": {
    id: "routes/__auth/login",
    parentId: "routes/__auth",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/__app": {
    id: "routes/__app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  },
  "routes/__app/libraries/$libraryId": {
    id: "routes/__app/libraries/$libraryId",
    parentId: "routes/__app",
    path: "libraries/:libraryId",
    index: void 0,
    caseSensitive: void 0,
    module: libraryId_exports
  },
  "routes/__app/readers/$readerId": {
    id: "routes/__app/readers/$readerId",
    parentId: "routes/__app",
    path: "readers/:readerId",
    index: void 0,
    caseSensitive: void 0,
    module: readerId_exports
  },
  "routes/__app/libraries/create": {
    id: "routes/__app/libraries/create",
    parentId: "routes/__app",
    path: "libraries/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/__app/libraries/index": {
    id: "routes/__app/libraries/index",
    parentId: "routes/__app",
    path: "libraries",
    index: !0,
    caseSensitive: void 0,
    module: libraries_exports
  },
  "routes/__app/readers/create": {
    id: "routes/__app/readers/create",
    parentId: "routes/__app",
    path: "readers/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports2
  },
  "routes/__app/books/$bookId": {
    id: "routes/__app/books/$bookId",
    parentId: "routes/__app",
    path: "books/:bookId",
    index: void 0,
    caseSensitive: void 0,
    module: bookId_exports
  },
  "routes/__app/loans/$loanId": {
    id: "routes/__app/loans/$loanId",
    parentId: "routes/__app",
    path: "loans/:loanId",
    index: void 0,
    caseSensitive: void 0,
    module: loanId_exports
  },
  "routes/__app/readers/index": {
    id: "routes/__app/readers/index",
    parentId: "routes/__app",
    path: "readers",
    index: !0,
    caseSensitive: void 0,
    module: readers_exports
  },
  "routes/__app/books/create": {
    id: "routes/__app/books/create",
    parentId: "routes/__app",
    path: "books/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports3
  },
  "routes/__app/loans/create": {
    id: "routes/__app/loans/create",
    parentId: "routes/__app",
    path: "loans/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports4
  },
  "routes/__app/books/index": {
    id: "routes/__app/books/index",
    parentId: "routes/__app",
    path: "books",
    index: !0,
    caseSensitive: void 0,
    module: books_exports
  },
  "routes/__app/loans/index": {
    id: "routes/__app/loans/index",
    parentId: "routes/__app",
    path: "loans",
    index: !0,
    caseSensitive: void 0,
    module: loans_exports
  },
  "routes/__app/index": {
    id: "routes/__app/index",
    parentId: "routes/__app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_exports2
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
//# sourceMappingURL=index.js.map
