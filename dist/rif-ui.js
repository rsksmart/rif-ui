function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var styles = require('@material-ui/core/styles');
var icons = require('@material-ui/icons');
var Slider = _interopDefault(require('@material-ui/core/Slider'));
var ExpansionPanel = _interopDefault(require('@material-ui/core/ExpansionPanel'));
var ExpansionPanelDetails = _interopDefault(require('@material-ui/core/ExpansionPanelDetails'));
var ExpansionPanelSummary = _interopDefault(require('@material-ui/core/ExpansionPanelSummary'));
var ExpandMoreIcon = _interopDefault(require('@material-ui/icons/ExpandMore'));
require('web3');
var Toolbar = _interopDefault(require('@material-ui/core/Toolbar'));
var reactRouterDom = require('react-router-dom');
var AppBar$1 = _interopDefault(require('@material-ui/core/AppBar'));
var Divider = _interopDefault(require('@material-ui/core/Divider'));
var Drawer = _interopDefault(require('@material-ui/core/Drawer'));
var Hidden = _interopDefault(require('@material-ui/core/Hidden'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var ListItem = _interopDefault(require('@material-ui/core/ListItem'));
var ListItemIcon = _interopDefault(require('@material-ui/core/ListItemIcon'));
var ListItemText = _interopDefault(require('@material-ui/core/ListItemText'));
var ChevronLeftIcon = _interopDefault(require('@material-ui/icons/ChevronLeft'));
var MenuIcon = _interopDefault(require('@material-ui/icons/Menu'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var Grid = function Grid(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.Grid, Object.assign({}, rest), children);
};

var Link = function Link(props) {
  return React__default.createElement(core.Link, Object.assign({}, props));
};

var useStyles = styles.makeStyles(function (theme) {
  return {
    block: {
      width: '100%'
    },
    noShadow: {
      boxShadow: 'none'
    },
    rounded: {
      borderRadius: 50
    }
  };
});

var Button = function Button(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      block = _ref.block,
      shadow = _ref.shadow,
      rounded = _ref.rounded,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "block", "shadow", "rounded", "children"]);

  var classes = useStyles();
  return React__default.createElement(core.Button, Object.assign({
    className: ((rounded ? classes.rounded : '') + "\n        " + (shadow ? '' : classes.noShadow) + "\n        " + (block ? classes.block : '') + " " + className).trim()
  }, rest), children);
};

var useStyles$1 = core.makeStyles(function () {
  return {
    root: {
      padding: 5,
      margin: 5,
      width: '100%'
    }
  };
});

var LoginOption = function LoginOption(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      onClick = _ref.onClick,
      text = _ref.text,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "onClick", "text"]);

  var classes = useStyles$1();
  return React__default.createElement(Button, Object.assign({
    className: classes.root + " " + className,
    block: true,
    rounded: true,
    variant: 'outlined',
    color: 'primary',
    onClick: onClick
  }, rest), text);
};

var logo_white_full = require("./logo_white_full~lLumzPXG.svg");

var Logo = React__default.forwardRef(function LogoFooter(props, ref) {
  var _props$alt = props.alt,
      alt = _props$alt === void 0 ? 'RIF OS' : _props$alt,
      other = _objectWithoutPropertiesLoose(props, ["alt"]);

  return React__default.createElement("img", Object.assign({
    src: logo_white_full,
    alt: alt,
    ref: ref
  }, other));
});

var LogoNavbar = React__default.forwardRef(function LogoFooter(props, ref) {
  var _props$alt = props.alt,
      alt = _props$alt === void 0 ? 'RIF OS' : _props$alt,
      _props$height = props.height,
      height = _props$height === void 0 ? '40px' : _props$height,
      other = _objectWithoutPropertiesLoose(props, ["alt", "height"]);

  return React__default.createElement("img", Object.assign({
    src: logo_white_full,
    alt: alt,
    height: height,
    ref: ref
  }, other));
});

var Card = function Card(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.Card, Object.assign({}, rest), children);
};

var CardActions = function CardActions(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.CardActions, Object.assign({}, rest), children);
};

var CardContent = function CardContent(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.CardContent, Object.assign({}, rest), children);
};

var CardHeader = function CardHeader(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.CardHeader, Object.assign({}, rest), children);
};

var colors = {
  black: '#000000',
  primary: '#008FF7',
  darkBlue: '#197DC6',
  gray1: '#F8F7F7',
  gray2: '#E5E5E5',
  gray3: '#C4C4C4',
  gray4: '#919191',
  gray5: '#4D4C4C',
  gray6: '#15171B',
  transparent: '#FFFFFF00',
  white: '#FFFFFF'
};
var fonts = {
  family: 'Rubik',
  size: {
    tiny: 10,
    small: 12,
    normal: 14,
    medium: 16
  },
  weight: {
    normal: 300,
    lightBold: 500,
    bold: 700,
    superBold: 900
  }
};
var theme = styles.createMuiTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.gray4
    }
  },
  typography: {
    fontFamily: fonts.family,
    button: {
      textTransform: 'none'
    },
    fontWeightRegular: fonts.weight.normal
  },
  props: {},
  overrides: {
    MuiButton: {
      root: {
        fontWeight: fonts.weight.normal
      }
    }
  }
});

var useStyles$2 = core.makeStyles(function () {
  return core.createStyles({
    unCheckedIcon: {
      color: colors.gray4
    },
    checkedIcon: {
      color: colors.primary
    }
  });
});

var Checkbox = function Checkbox(props) {
  var classes = useStyles$2();

  var _useState = React.useState(!!props.checked),
      isChecked = _useState[0],
      setIsChecked = _useState[1];

  var handleChange = function handleChange(event, checked) {
    setIsChecked(checked);
    var onChange = props.onChange;
    !!onChange && onChange(event, checked);
  };

  return React__default.createElement(core.Checkbox, Object.assign({
    checkedIcon: React__default.createElement(icons.CheckBoxSharp, {
      className: classes.checkedIcon
    }),
    icon: React__default.createElement(icons.CheckBoxOutlineBlankSharp, {
      className: classes.unCheckedIcon
    })
  }, props, {
    checked: isChecked,
    onChange: handleChange
  }));
};

var FormControl = function FormControl(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.FormControl, Object.assign({}, rest), children);
};

var FormGroup = function FormGroup(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.FormGroup, Object.assign({}, rest), children);
};

var Input = function Input(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.Input, Object.assign({}, rest), children);
};

var InputAdornment = function InputAdornment(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.InputAdornment, Object.assign({}, rest), children);
};

var InputLabel = function InputLabel(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.InputLabel, Object.assign({}, rest), children);
};

var useStyles$3 = styles.makeStyles(function () {
  return styles.createStyles({
    root: {
      width: "100%",
      color: colors.primary,
      height: 4
    },
    rail: {
      color: colors.gray3,
      height: 4,
      opacity: 1
    },
    track: {
      height: 4
    },
    thumb: {
      marginLeft: -4,
      height: 14,
      width: 14
    }
  });
});

var RangeSlider = function RangeSlider(_ref) {
  var handleChange = _ref.handleChange,
      rest = _objectWithoutPropertiesLoose(_ref, ["handleChange"]);

  var classes = useStyles$3();

  var onChange = function onChange(event, newValue) {
    handleChange(event, newValue);
  };

  return React__default.createElement(Slider, Object.assign({
    classes: classes,
    onChange: onChange
  }, rest));
};

var Switch = function Switch(_ref) {
  var rest = _extends({}, _ref);

  return React__default.createElement(core.Switch, Object.assign({}, rest));
};

var useStyles$4 = core.makeStyles(function () {
  return {
    root: {
      color: colors.gray3,
      '&:hover': {
        color: colors.gray2
      }
    }
  };
});

var TextField = function TextField(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      rest = _objectWithoutPropertiesLoose(_ref, ["className"]);

  var classes = useStyles$4();
  return React__default.createElement(core.TextField, Object.assign({
    className: (classes.root + " " + className).trim()
  }, rest));
};

var MenuItem = function MenuItem(_ref) {
  var rest = _extends({}, _ref);

  return React__default.createElement(core.MenuItem, Object.assign({}, rest));
};

var Select = function Select(_ref) {
  var rest = _extends({}, _ref);

  return React__default.createElement(core.Select, Object.assign({}, rest));
};

var useStyles$5 = styles.makeStyles(function (theme) {
  return {
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid " + colors.primary,
      boxShadow: theme.shadows[5],
      left: '50%',
      minWidth: 400,
      padding: theme.spacing(2, 4, 3),
      position: 'absolute',
      top: '50%',
      transform: "translate(-50%, -50%)"
    }
  };
});

var Modal = function Modal(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  var classes = useStyles$5();
  return React__default.createElement(core.Modal, Object.assign({}, rest), React__default.createElement("div", {
    className: classes.paper
  }, children));
};

var useStyles$6 = styles.makeStyles(function (theme) {
  return {
    root: {
      borderBottom: "1px solid " + colors.gray2,
      color: colors.primary,
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    }
  };
});

var ModalHeader = function ModalHeader(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  var classes = useStyles$6();
  return React__default.createElement("div", {
    className: (classes.root + " " + className).trim()
  }, children);
};

var useStyles$7 = styles.makeStyles(function (theme) {
  return {
    normal: {
      fontWeight: fonts.weight.normal
    },
    lightBold: {
      fontWeight: fonts.weight.lightBold
    },
    bold: {
      fontWeight: fonts.weight.bold
    },
    superBold: {
      fontWeight: fonts.weight.superBold
    }
  };
});

var Typography = function Typography(_ref) {
  var _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 'normal' : _ref$weight,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["weight", "className", "children"]);

  var classes = useStyles$7();
  return React__default.createElement(core.Typography, Object.assign({
    className: (classes[weight] + " " + className).trim()
  }, rest), children);
};

var ModalTitle = function ModalTitle(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(Typography, Object.assign({
    variant: 'h5'
  }, rest), children);
};

var useStyles$8 = styles.makeStyles(function (theme) {
  return {
    root: {
      borderTop: "1px solid " + colors.gray2,
      display: 'flex',
      justifyContent: 'center',
      paddingTop: theme.spacing(1),
      width: '100%'
    }
  };
});

var ModalFooter = function ModalFooter(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  var classes = useStyles$8();
  return React__default.createElement("div", {
    className: (classes.root + " " + className).trim()
  }, children);
};

var useStyles$9 = styles.makeStyles(function (theme) {
  return {
    root: {
      padding: theme.spacing(3, 0),
      width: '100%'
    }
  };
});

var ModalBody = function ModalBody(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  var classes = useStyles$9();
  return React__default.createElement("div", {
    className: (classes.root + " " + className).trim()
  }, children);
};

var Table = function Table(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.Table, Object.assign({}, rest), children);
};

var TableBody = function TableBody(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.TableBody, Object.assign({}, rest), children);
};

var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.TableCell, Object.assign({}, rest), children);
};

var TableHead = function TableHead(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.TableHead, Object.assign({}, rest), children);
};

var TableRow = function TableRow(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.TableRow, Object.assign({}, rest), children);
};

var useStyles$a = styles.makeStyles(function (theme) {
  return styles.createStyles({
    root: {
      boxShadow: 'none',
      color: colors.gray4,
      width: '100%'
    },
    heading: {
      color: colors.gray4,
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightBold,
      width: '100%'
    },
    expansionPanelSummary: {
      borderBottom: "1px solid " + colors.gray2
    }
  });
});

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      expanded = _ref.expanded,
      id = _ref.id,
      title = _ref.title,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "expanded", "id", "title"]);

  var classes = useStyles$a();

  var _useState = React.useState(!!expanded),
      isExpanded = _useState[0],
      setIsExpanded = _useState[1];

  var onChange = function onChange() {
    return setIsExpanded(!isExpanded);
  };

  return React__default.createElement(ExpansionPanel, {
    className: classes.root,
    expanded: isExpanded,
    onChange: onChange
  }, React__default.createElement(ExpansionPanelSummary, {
    className: classes.expansionPanelSummary,
    expandIcon: React__default.createElement(ExpandMoreIcon, null),
    "aria-controls": "panel-" + id + "-content",
    id: id
  }, React__default.createElement(Typography, {
    className: classes.heading
  }, title)), React__default.createElement(ExpansionPanelDetails, null, children));
};

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

var EProvider;

(function (EProvider) {
  EProvider["METAMASK"] = "Metamask";
  EProvider["LEDGER"] = "Ledger";
  EProvider["TREZOR"] = "Trezor";
  EProvider["LOCAL"] = "Localhost";
})(EProvider || (EProvider = {}));

var shortenAddress = function shortenAddress(address) {
  return address.substr(0, 6) + "..." + address.substr(address.length - 4 - 1, 4);
};

var useStyles$b = styles.makeStyles(function (theme) {
  return {
    accountText: {
      fontSize: fonts.size.tiny,
      textAlign: 'center'
    },
    root: {
      alignItems: 'center',
      border: '1px solid white',
      borderRadius: 50,
      color: colors.gray1,
      cursor: 'pointer',
      display: 'flex',
      flexWrap: 'nowrap',
      fontSize: fonts.size.small,
      height: '100%',
      justifyContent: 'center',
      padding: theme.spacing(1),
      width: '100%'
    }
  };
});

var Account = function Account(_ref) {
  var web3 = _ref.web3,
      networkName = _ref.networkName,
      account = _ref.account,
      setProvider = _ref.setProvider,
      providers = _ref.providers;
  var classes = useStyles$b();

  var _useState = React.useState(false),
      open = _useState[0],
      setOpen = _useState[1];

  var handleClose = function handleClose() {
    return setOpen(false);
  };

  var handleOpen = function handleOpen() {
    return setOpen(true);
  };

  return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    onClick: handleOpen,
    className: classes.root
  }, React__default.createElement(Typography, {
    className: classes.accountText
  }, !web3 && 'Connect wallet', web3 && networkName, web3 && account && shortenAddress(account))), React__default.createElement(Modal, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "account-modal-title",
    "aria-describedby": "account-modal-description"
  }, React__default.createElement(React__default.Fragment, null, React__default.createElement(ModalHeader, null, React__default.createElement(ModalTitle, null, "Connect a wallet to get started")), React__default.createElement(ModalBody, null, (providers || [EProvider.METAMASK, EProvider.LOCAL]).map(function (provider) {
    return React__default.createElement(LoginOption, {
      key: provider,
      text: provider,
      onClick: function onClick() {
        setProvider(provider);
        handleClose();
      }
    });
  })), React__default.createElement(ModalFooter, null, React__default.createElement(Button, {
    variant: 'outlined',
    color: 'secondary',
    block: true,
    onClick: handleClose
  }, "Close")))));
};

var useStyles$c = styles.makeStyles(function (theme) {
  return {
    activeNavlink: {
      color: colors.white + " !important",
      fontWeight: fonts.weight.lightBold
    },
    itemsContainer: {
      display: 'flex'
    },
    loginContainer: {
      display: 'flex',
      marginLeft: 'auto'
    },
    navLink: {
      alignItems: 'center',
      color: colors.white,
      display: 'flex',
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      textAlign: 'center',
      textDecoration: 'none',
      '&:hover': {
        color: colors.gray5,
        textDecoration: 'none'
      }
    },
    navLinkContainer: {
      display: 'flex'
    }
  };
});

var AppBar = function AppBar(_ref) {
  var items = _ref.items,
      login = _ref.login,
      rest = _objectWithoutPropertiesLoose(_ref, ["items", "login"]);

  var classes = useStyles$c();
  var Login = login;
  return React__default.createElement(core.AppBar, Object.assign({
    position: 'static'
  }, rest), React__default.createElement(Toolbar, null, React__default.createElement(Link, {
    href: rest.hreflogo
  }, React__default.createElement(LogoNavbar, null)), React__default.createElement("div", {
    className: classes.itemsContainer
  }, !!items.length && items.map(function (navItem, i) {
    return React__default.createElement(Typography, {
      className: classes.navLinkContainer,
      key: navItem.title + "-" + i
    }, React__default.createElement(reactRouterDom.NavLink, Object.assign({
      className: classes.navLink,
      activeClassName: classes.activeNavlink
    }, navItem), navItem.title));
  })), React__default.createElement("div", {
    className: classes.loginContainer
  }, React__default.createElement(Login, null))));
};

var useStyles$d = core.makeStyles(function () {
  return core.createStyles({
    root: {
      color: colors.gray3
    }
  });
});

var FormControlLabel = function FormControlLabel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      rest = _objectWithoutPropertiesLoose(_ref, ["className"]);

  var classes = useStyles$d();
  return React__default.createElement(core.FormControlLabel, Object.assign({
    className: (classes.root + " " + className + " ").trim()
  }, rest));
};

var useStyles$e = core.makeStyles(function (theme) {
  return {
    root: {
      color: colors.gray4,
      width: "100%"
    }
  };
});

var LabeledCheckbox = function LabeledCheckbox(_ref) {
  var labelText = _ref.labelText,
      _ref$labelClassName = _ref.labelClassName,
      labelClassName = _ref$labelClassName === void 0 ? '' : _ref$labelClassName,
      rest = _objectWithoutPropertiesLoose(_ref, ["labelText", "labelClassName"]);

  var classes = useStyles$e();
  return React__default.createElement(FormControlLabel, {
    className: classes.root + " " + labelClassName.trim(),
    label: labelText,
    control: React__default.createElement(Checkbox, Object.assign({}, rest))
  });
};

var FilterCheckboxCard = function FilterCheckboxCard(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      onClick = _ref.onClick,
      items = _ref.items;
  return React__default.createElement("div", {
    className: className
  }, items.map(function (item, i) {
    return React__default.createElement(LabeledCheckbox, Object.assign({
      onClick: onClick,
      key: "labeledCheckbox-" + item.id || ("labeledCheckbox-" + i + "-" + className).trim(),
      labelClassName: item.labelClassName
    }, item));
  }));
};

var List = function List(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.List, Object.assign({}, rest), children);
};

var ModalDialogue = function ModalDialogue(_ref) {
  var title = _ref.title,
      footer = _ref.footer,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["title", "footer", "children"]);

  return React__default.createElement(Modal, Object.assign({}, props), React__default.createElement(React__default.Fragment, null, React__default.createElement(ModalHeader, null, React__default.createElement(ModalTitle, null, title)), React__default.createElement(ModalBody, null, children), React__default.createElement(ModalFooter, null, footer)));
};

var useStyles$f = styles.makeStyles(function (theme) {
  return {
    root: {
      color: colors.gray4,
      display: 'flex'
    },
    input: {
      color: colors.gray4,
      paddingLeft: theme.spacing(0.1),
      textAlign: 'center',
      '&::before': {
        borderBottom: "1px solid " + colors.gray4
      }
    },
    inputContainer: {
      paddingRight: '0 !important'
    },
    units: {
      color: colors.gray4,
      display: 'flex',
      fontSize: fonts.size.tiny
    },
    unitsContainer: {
      alignSelf: 'center',
      color: colors.gray4,
      display: 'flex',
      fontSize: fonts.size.normal,
      paddingLeft: '0 !important'
    }
  };
});

var UnitsInput = function UnitsInput(props) {
  var handleOnBlur = props.handleOnBlur,
      handleOnChange = props.handleOnChange,
      maxValue = props.maxValue,
      minValue = props.minValue,
      units = props.units,
      value = props.value,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step;
  var classes = useStyles$f();
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(Grid, {
    className: classes.root,
    container: true,
    spacing: 1
  }, React__default.createElement(Grid, {
    className: classes.inputContainer,
    item: true,
    xs: 8
  }, React__default.createElement(Input, {
    className: classes.input,
    classes: {
      input: classes.input
    },
    value: value,
    onChange: handleOnChange,
    onBlur: handleOnBlur,
    inputProps: {
      step: step,
      min: minValue,
      max: maxValue,
      'aria-labelledby': 'input-slider'
    }
  })), React__default.createElement(Grid, {
    item: true,
    xs: 4,
    className: classes.unitsContainer
  }, React__default.createElement(Typography, {
    className: classes.units
  }, units))));
};

var useStyles$g = styles.makeStyles(function () {
  return {
    root: {
      width: "100%"
    },
    inputsContainer: {
      alignSelf: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    },
    toContainer: {
      alignSelf: 'center',
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    }
  };
});

var RangeSliderWithInputs = function RangeSliderWithInputs(_ref) {
  var values = _ref.values,
      unit = _ref.unit,
      handleChange = _ref.handleChange,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["values", "unit", "handleChange", "className"]);

  var classes = useStyles$g();
  var maxValue = rest.max || values.end;
  var minValue = rest.min || values.start;
  var step = rest.step || 1;

  var _useState = React.useState(values.start),
      startValue = _useState[0],
      setStartValue = _useState[1];

  var _useState2 = React.useState(values.end),
      endValue = _useState2[0],
      setEndValue = _useState2[1];

  var _useState3 = React.useState([startValue, endValue]),
      sliderRangeValues = _useState3[0],
      setSliderRangeValues = _useState3[1];

  var handleStartInputChange = function handleStartInputChange(event) {
    var newStartValue = event.target.value === '' ? values.start : Number(event.target.value);

    if (newStartValue <= endValue) {
      setStartValue(newStartValue);
      setSliderRangeValues([newStartValue, sliderRangeValues[1]]);
    }

    handleChange({
      min: startValue,
      max: endValue
    });
  };

  var handleEndInputChange = function handleEndInputChange(event) {
    var newEndValue = event.target.value === '' ? values.end : Number(event.target.value);

    if (newEndValue >= startValue) {
      setSliderRangeValues([sliderRangeValues[0], newEndValue]);
      setEndValue(newEndValue);
    }

    handleChange({
      min: startValue,
      max: endValue
    });
  };

  var handleSliderChange = function handleSliderChange(event, newSliderValue) {
    setEndValue(newSliderValue[1]);
    setStartValue(newSliderValue[0]);
    setSliderRangeValues(newSliderValue);
    handleChange({
      min: startValue,
      max: endValue
    });
  };

  var handleStartValueBlur = function handleStartValueBlur() {
    if (startValue < minValue) {
      setStartValue(minValue);
    } else if (startValue > endValue) {
      setStartValue(endValue);
    }
  };

  var handleEndValueBlur = function handleEndValueBlur() {
    if (endValue < startValue) {
      setEndValue(startValue);
    } else if (endValue > maxValue) {
      setEndValue(maxValue);
    }
  };

  var getCommonInputValues = function getCommonInputValues() {
    return {
      maxValue: maxValue,
      minValue: minValue,
      step: step,
      units: unit
    };
  };

  return React__default.createElement("div", {
    className: (classes.root + " " + className).trim()
  }, React__default.createElement(RangeSlider, Object.assign({
    value: sliderRangeValues
  }, rest, {
    handleChange: handleSliderChange
  })), React__default.createElement("div", {
    className: classes.inputsContainer
  }, React__default.createElement(UnitsInput, Object.assign({
    handleOnBlur: handleStartValueBlur,
    handleOnChange: handleStartInputChange
  }, getCommonInputValues(), {
    value: startValue
  })), React__default.createElement(Typography, {
    className: classes.toContainer,
    weight: 'bold'
  }, "to"), React__default.createElement(UnitsInput, Object.assign({
    handleOnBlur: handleEndValueBlur,
    handleOnChange: handleEndInputChange
  }, getCommonInputValues(), {
    value: endValue
  }))));
};

var a11yProps = function a11yProps(index) {
  return {
    id: "full-width-tab-" + index,
    'aria-controls': "full-width-tabpanel-" + index
  };
};

var useStyles$h = styles.makeStyles(function (theme) {
  return {
    root: {
      backgroundColor: colors.white,
      minHeight: 20,
      width: '100%',
      border: colors.primary + " solid 1px",
      borderRadius: 50,
      overflow: 'hidden'
    },
    tabContainer: {
      minHeight: 20,
      width: '100%'
    },
    tab: {
      "&:hover": {
        color: colors.primary
      },
      borderRadius: 50,
      color: colors.gray3,
      fontWeight: fonts.weight.normal,
      maxWidth: '50%',
      minHeight: '100%',
      minWidth: '50%',
      outlineStyle: 'none',
      padding: 0,
      textTransform: 'capitalize',
      zIndex: 1,
      '&:focus': {
        outlineStyle: 'none'
      }
    },
    tabIndicator: {
      backgroundColor: colors.primary,
      borderRadius: 50,
      height: '100%'
    },
    tabSelected: {
      backgroundColor: colors.primary + " !important",
      color: colors.white + " !important"
    }
  };
});

var SwitchTabs = function SwitchTabs(_ref) {
  var label1 = _ref.label1,
      label2 = _ref.label2,
      controlledValue = _ref.value,
      onChange = _ref.onChange;
  var classes = useStyles$h();

  var handleChange = function handleChange(event, newValue) {
    onChange(event, newValue);
  };

  return React__default.createElement("div", {
    className: classes.root
  }, React__default.createElement(core.Tabs, {
    "aria-label": "tabs switch",
    className: classes.tabContainer,
    onChange: handleChange,
    TabIndicatorProps: {
      className: classes.tabIndicator
    },
    value: controlledValue,
    variant: "fullWidth"
  }, React__default.createElement(core.Tab, Object.assign({}, a11yProps(0), {
    classes: {
      selected: classes.tabSelected
    },
    className: classes.tab,
    label: label1
  })), React__default.createElement(core.Tab, Object.assign({}, a11yProps(1), {
    classes: {
      selected: classes.tabSelected
    },
    className: classes.tab,
    label: label2
  }))));
};

var drawerWidth = 240;
var useStyles$i = styles.makeStyles(function (theme) {
  return styles.createStyles({
    activeNavlink: {
      color: colors.white + " !important",
      fontWeight: fonts.weight.bold
    },
    itemsContainer: {
      display: 'flex'
    },
    loginContainer: {
      display: 'flex',
      marginLeft: 'auto'
    },
    navLink: {
      alignItems: 'center',
      color: colors.white,
      display: 'flex',
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      textAlign: 'center',
      textDecoration: 'none',
      '&:hover': {
        color: colors.gray5,
        textDecoration: 'none'
      }
    },
    navLinkContainer: {
      display: 'flex'
    },
    drawerHeader: _extends({
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar, {
      justifyContent: 'flex-end'
    }),
    drawerPaper: {
      width: drawerWidth
    },
    mobileAppBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    mobileAppBarShift: {
      width: "calc(100% - " + drawerWidth + "px)",
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    mobileNavLink: {
      alignItems: 'center',
      color: colors.gray4,
      display: 'flex',
      textDecoration: 'none',
      width: '100%',
      '&:hover': {
        color: colors.gray5,
        textDecoration: 'none'
      }
    },
    mobileNavLinkActive: {
      color: colors.primary + " !important"
    }
  });
});

var Header = function Header(_ref) {
  var hreflogo = _ref.hreflogo,
      items = _ref.items,
      login = _ref.login;
  var classes = useStyles$i();

  var _useState = React.useState(false),
      open = _useState[0],
      setOpen = _useState[1];

  var Login = login;

  var toggleDrawer = function toggleDrawer(isOpen) {
    return function (event) {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setOpen(isOpen);
    };
  };

  return React__default.createElement(reactRouterDom.BrowserRouter, null, React__default.createElement(Hidden, {
    smDown: true
  }, React__default.createElement(AppBar, {
    hreflogo: hreflogo,
    items: items,
    login: login
  })), React__default.createElement(Hidden, {
    mdUp: true
  }, React__default.createElement("div", {
    role: "presentation",
    onKeyDown: toggleDrawer(false)
  }, React__default.createElement(AppBar$1, {
    position: "static",
    className: classes.mobileAppBar + " " + (open ? classes.mobileAppBarShift : '')
  }, React__default.createElement(Toolbar, null, !open && React__default.createElement(React__default.Fragment, null, React__default.createElement(IconButton, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer(true)
  }, React__default.createElement(MenuIcon, null)), React__default.createElement(Link, {
    href: hreflogo
  }, React__default.createElement(LogoNavbar, null)), React__default.createElement("div", {
    className: classes.loginContainer
  }, React__default.createElement(Login, null))))), React__default.createElement(Drawer, {
    anchor: "left",
    open: open,
    onClose: toggleDrawer(false),
    classes: {
      paper: classes.drawerPaper
    },
    onClick: toggleDrawer(false)
  }, React__default.createElement("div", {
    className: classes.drawerHeader
  }, React__default.createElement(IconButton, {
    onClick: toggleDrawer(false)
  }, React__default.createElement(ChevronLeftIcon, null))), React__default.createElement(Divider, null), React__default.createElement(List, null, !!items.length && items.map(function (headerItem, i) {
    return React__default.createElement(ListItem, {
      button: true,
      key: headerItem.title + "-" + i
    }, React__default.createElement(reactRouterDom.NavLink, {
      to: headerItem.to,
      className: classes.mobileNavLink,
      activeClassName: classes.mobileNavLinkActive
    }, React__default.createElement(ListItemIcon, null, headerItem.icon), React__default.createElement(ListItemText, {
      primary: headerItem.title
    })));
  }))))));
};

Object.defineProperty(exports, 'ThemeProvider', {
  enumerable: true,
  get: function () {
    return styles.ThemeProvider;
  }
});
exports.Accordion = Accordion;
exports.Account = Account;
exports.AppBar = AppBar;
exports.Button = Button;
exports.Card = Card;
exports.CardActions = CardActions;
exports.CardContent = CardContent;
exports.CardHeader = CardHeader;
exports.Checkbox = Checkbox;
exports.FilterCheckboxCard = FilterCheckboxCard;
exports.FormControl = FormControl;
exports.FormGroup = FormGroup;
exports.Grid = Grid;
exports.Header = Header;
exports.Input = Input;
exports.InputAdornment = InputAdornment;
exports.InputLabel = InputLabel;
exports.LabeledCheckbox = LabeledCheckbox;
exports.Link = Link;
exports.List = List;
exports.LoginOption = LoginOption;
exports.Logo = Logo;
exports.LogoNavbar = LogoNavbar;
exports.MenuItem = MenuItem;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalDialogue = ModalDialogue;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.ModalTitle = ModalTitle;
exports.RangeSlider = RangeSlider;
exports.RangeSliderWithInputs = RangeSliderWithInputs;
exports.Select = Select;
exports.Switch = Switch;
exports.SwitchTabs = SwitchTabs;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCell = TableCell;
exports.TableHead = TableHead;
exports.TableRow = TableRow;
exports.TextField = TextField;
exports.Typography = Typography;
exports.UnitsInput = UnitsInput;
exports.colors = colors;
exports.fonts = fonts;
exports.theme = theme;
//# sourceMappingURL=rif-ui.js.map
