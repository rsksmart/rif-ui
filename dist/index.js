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
var Web3 = _interopDefault(require('web3'));
var Toolbar = _interopDefault(require('@material-ui/core/Toolbar'));
var reactRouterDom = require('react-router-dom');
var AddIcon = _interopDefault(require('@material-ui/icons/Add'));
var RemoveIcon = _interopDefault(require('@material-ui/icons/Remove'));
var AppBar$1 = _interopDefault(require('@material-ui/core/AppBar'));
var Divider = _interopDefault(require('@material-ui/core/Divider'));
var Drawer = _interopDefault(require('@material-ui/core/Drawer'));
var Hidden = _interopDefault(require('@material-ui/core/Hidden'));
var IconButton$1 = _interopDefault(require('@material-ui/core/IconButton'));
var ListItem = _interopDefault(require('@material-ui/core/ListItem'));
var ListItemIcon = _interopDefault(require('@material-ui/core/ListItemIcon'));
var ListItemText = _interopDefault(require('@material-ui/core/ListItemText'));
var ChevronLeftIcon = _interopDefault(require('@material-ui/icons/ChevronLeft'));
var MenuIcon = _interopDefault(require('@material-ui/icons/Menu'));

var shortenAddress = function shortenAddress(address) {
  return address.substr(0, 6) + "..." + address.substr(address.length - 4 - 1, 4);
};

var CircularProgress = function CircularProgress(props) {
  return React__default.createElement(core.CircularProgress, Object.assign({}, props));
};

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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
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

var doneThumbsUp = require("./doneThumbsUp~MEdZiDXb.svg");

var footerTongue = require("./footerTongue~bbJNSCWG.svg");

var headerTongueImg = require("./headerTongue~VLlRBGMc.svg");

var tickWide = require("./tickWide~bmvsBAER.svg");

var nameService = require("./nameService~UWbtQqmT.svg");

var rifCom = require("./rifCom~udwpaCym.png");

var rifDir = require("./rifDir~bottaDNJ.png");

var rifGat = require("./rifGat~balFpEzC.png");

var rifMar = require("./rifMar~IDqKMWpK.png");

var rifPay = require("./rifPay~bdtOAceT.png");

var rifSto = require("./rifSto~fMRetflo.png");

var storage = require("./storage~fCGkZtHN.svg");

var logoBlackAndBlue = require("./logoBlackAndBlue~bjZFbjOq.svg");

var logoFullWhite = require("./logoFullWhite~lLumzPXG.svg");

var rskLogo = require("./rskLogo~bdMEZSPk.svg");

var Logo = React__default.forwardRef(function LogoFooter(props, ref) {
  var _props$alt = props.alt,
      alt = _props$alt === void 0 ? 'RIF OS' : _props$alt,
      other = _objectWithoutPropertiesLoose(props, ["alt"]);

  return React__default.createElement("img", Object.assign({
    src: logoFullWhite,
    alt: alt,
    ref: ref
  }, other));
});

var LogoNavbar = React__default.forwardRef(function LogoFooter(props, ref) {
  var _props$alt = props.alt,
      alt = _props$alt === void 0 ? 'RIF OS' : _props$alt,
      _props$height = props.height,
      height = _props$height === void 0 ? '44px' : _props$height,
      other = _objectWithoutPropertiesLoose(props, ["alt", "height"]);

  return React__default.createElement("img", Object.assign({
    src: logoFullWhite,
    alt: alt,
    height: height,
    ref: ref
  }, other));
});

var IconButton = function IconButton(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(core.IconButton, Object.assign({}, rest), children);
};

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
    medium: 16,
    subtitleSmall: 18,
    subtitleBig: 22
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
const _Pact = /*#__PURE__*/(function() {
	function _Pact() {}
	_Pact.prototype.then = function(onFulfilled, onRejected) {
		const result = new _Pact();
		const state = this.s;
		if (state) {
			const callback = state & 1 ? onFulfilled : onRejected;
			if (callback) {
				try {
					_settle(result, 1, callback(this.v));
				} catch (e) {
					_settle(result, 2, e);
				}
				return result;
			} else {
				return this;
			}
		}
		this.o = function(_this) {
			try {
				const value = _this.v;
				if (_this.s & 1) {
					_settle(result, 1, onFulfilled ? onFulfilled(value) : value);
				} else if (onRejected) {
					_settle(result, 1, onRejected(value));
				} else {
					_settle(result, 2, value);
				}
			} catch (e) {
				_settle(result, 2, e);
			}
		};
		return result;
	};
	return _Pact;
})();

// Settles a pact synchronously
function _settle(pact, state, value) {
	if (!pact.s) {
		if (value instanceof _Pact) {
			if (value.s) {
				if (state & 1) {
					state = value.s;
				}
				value = value.v;
			} else {
				value.o = _settle.bind(null, pact, state);
				return;
			}
		}
		if (value && value.then) {
			value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
			return;
		}
		pact.s = state;
		pact.v = value;
		const observer = pact.o;
		if (observer) {
			observer(pact);
		}
	}
}

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously implement a switch statement
function _switch(discriminant, cases) {
	var dispatchIndex = -1;
	var awaitBody;
	outer: {
		for (var i = 0; i < cases.length; i++) {
			var test = cases[i][0];
			if (test) {
				var testValue = test();
				if (testValue && testValue.then) {
					break outer;
				}
				if (testValue === discriminant) {
					dispatchIndex = i;
					break;
				}
			} else {
				// Found the default case, set it as the pending dispatch case
				dispatchIndex = i;
			}
		}
		if (dispatchIndex !== -1) {
			do {
				var body = cases[dispatchIndex][1];
				while (!body) {
					dispatchIndex++;
					body = cases[dispatchIndex][1];
				}
				var result = body();
				if (result && result.then) {
					awaitBody = true;
					break outer;
				}
				var fallthroughCheck = cases[dispatchIndex][2];
				dispatchIndex++;
			} while (fallthroughCheck && !fallthroughCheck());
			return result;
		}
	}
	const pact = new _Pact();
	const reject = _settle.bind(null, pact, 2);
	(awaitBody ? result.then(_resumeAfterBody) : testValue.then(_resumeAfterTest)).then(void 0, reject);
	return pact;
	function _resumeAfterTest(value) {
		for (;;) {
			if (value === discriminant) {
				dispatchIndex = i;
				break;
			}
			if (++i === cases.length) {
				if (dispatchIndex !== -1) {
					break;
				} else {
					_settle(pact, 1, result);
					return;
				}
			}
			test = cases[i][0];
			if (test) {
				value = test();
				if (value && value.then) {
					value.then(_resumeAfterTest).then(void 0, reject);
					return;
				}
			} else {
				dispatchIndex = i;
			}
		}
		do {
			var body = cases[dispatchIndex][1];
			while (!body) {
				dispatchIndex++;
				body = cases[dispatchIndex][1];
			}
			var result = body();
			if (result && result.then) {
				result.then(_resumeAfterBody).then(void 0, reject);
				return;
			}
			var fallthroughCheck = cases[dispatchIndex][2];
			dispatchIndex++;
		} while (fallthroughCheck && !fallthroughCheck());
		_settle(pact, 1, result);
	}
	function _resumeAfterBody(result) {
		for (;;) {
			var fallthroughCheck = cases[dispatchIndex][2];
			if (!fallthroughCheck || fallthroughCheck()) {
				break;
			}
			dispatchIndex++;
			var body = cases[dispatchIndex][1];
			while (!body) {
				dispatchIndex++;
				body = cases[dispatchIndex][1];
			}
			result = body();
			if (result && result.then) {
				result.then(_resumeAfterBody).then(void 0, reject);
				return;
			}
		}
		_settle(pact, 1, result);
	}
}

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

(function (EProvider) {
  EProvider["METAMASK"] = "Metamask";
  EProvider["LEDGER"] = "Ledger";
  EProvider["TREZOR"] = "Trezor";
  EProvider["LOCAL"] = "Localhost";
})(exports.EProvider || (exports.EProvider = {}));

function getWeb3(provider) {
  if (provider === void 0) {
    provider = exports.EProvider.METAMASK;
  }

  return new Promise(function (resolve, reject) {
    try {
      var _temp4 = _switch(provider, [[function () {
        return exports.EProvider.METAMASK;
      }, function () {
        {
          var _temp5 = function () {
            if (window.ethereum) {
              var web3 = new Web3(window.ethereum);

              var _temp6 = _catch(function () {
                return Promise.resolve(window.ethereum.enable()).then(function () {
                  resolve(web3);
                });
              }, function (error) {
                reject(error);
              });

              if (_temp6 && _temp6.then) return _temp6.then(function () {});
            } else if (window.web3) {
                resolve(new Web3(window.web3.currentProvider));
              } else reject(new Error('No injected web3 found'));
          }();

          return _temp5 && _temp5.then ? _temp5.then(function () {}) : void 0;
        }
      }], [function () {
        return exports.EProvider.LOCAL;
      }, function () {
        {
          var _provider = new Web3.providers.HttpProvider("'http://127.0.0.1:4444'");

          resolve(new Web3(_provider));
          return;
        }
      }], [void 0, function () {
        {
          reject(new Error("Provider not implemented or unknown. Chosen provider " + provider));
          return;
        }
      }]]);

      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  });
}

var AccountModal = function AccountModal(_ref) {
  var setProvider = _ref.setProvider,
      providers = _ref.providers,
      open = _ref.open,
      handleClose = _ref.handleClose;
  return React__default.createElement(Modal, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "account-modal-title",
    "aria-describedby": "account-modal-description"
  }, React__default.createElement(React__default.Fragment, null, React__default.createElement(ModalHeader, null, React__default.createElement(ModalTitle, null, "Connect a wallet to get started")), React__default.createElement(ModalBody, null, (providers || [exports.EProvider.METAMASK, exports.EProvider.LOCAL]).map(function (provider) {
    return React__default.createElement(LoginOption, {
      key: provider,
      text: provider,
      onClick: function () {
        try {
          return Promise.resolve(setProvider(provider)).then(function () {
            handleClose();
          });
        } catch (e) {
          return Promise.reject(e);
        }
      }
    });
  })), React__default.createElement(ModalFooter, null, React__default.createElement(Button, {
    variant: 'outlined',
    color: 'secondary',
    block: true,
    onClick: handleClose
  }, "Close"))));
};

var useStyles$b = styles.makeStyles(function (theme) {
  return {
    accountText: {
      fontSize: fonts.size.tiny,
      textAlign: 'center'
    },
    button: {
      border: "1px solid " + colors.white,
      '&:hover': {
        border: "1px solid " + colors.transparent
      }
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

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(Button, {
    onClick: handleOpen,
    className: classes.button,
    variant: 'contained',
    color: 'primary',
    rounded: true
  }, React__default.createElement(Typography, {
    className: classes.accountText
  }, !web3 && 'Connect wallet', web3 && networkName, web3 && account && shortenAddress(account))), React__default.createElement(AccountModal, {
    open: open,
    handleClose: handleClose,
    networkName: networkName,
    web3: web3,
    setProvider: setProvider,
    providers: providers
  }));
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
    },
    root: {
      boxShadow: 'none',
      height: theme.spacing(8)
    }
  };
});

var AppBar = function AppBar(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      items = _ref.items,
      login = _ref.login,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "items", "login"]);

  var classes = useStyles$c();
  var Login = login;
  return React__default.createElement(core.AppBar, Object.assign({
    position: 'fixed',
    className: (classes.root + " " + className).trim()
  }, rest), React__default.createElement(Toolbar, null, React__default.createElement(reactRouterDom.NavLink, {
    to: rest.hreflogo
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

var useStyles$d = styles.makeStyles(function (theme) {
  var _answerContainer;

  return {
    root: {
      boxShadow: 'none',
      color: colors.gray4,
      width: '100%'
    },
    heading: {
      display: 'flex',
      justifyContent: 'center',
      color: colors.gray5,
      fontSize: fonts.size.subtitleSmall,
      width: '100%'
    },
    headingExpanded: {
      color: colors.primary
    },
    headingCollapsed: {
      fontWeight: fonts.weight.lightBold
    },
    panelDetails: {
      display: 'flex',
      justifyContent: 'center'
    },
    answerContainer: (_answerContainer = {}, _answerContainer[theme.breakpoints.up('md')] = {
      maxWidth: '80%'
    }, _answerContainer),
    answerText: {
      color: colors.gray5
    }
  };
});

var FAQSection = function FAQSection(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      initiallyExpanded = _ref.initiallyExpanded,
      question = _ref.question,
      answer = _ref.answer,
      id = _ref.id;
  var classes = useStyles$d();

  var _useState = React.useState(!!initiallyExpanded),
      isExpanded = _useState[0],
      setIsExpanded = _useState[1];

  var onChange = function onChange() {
    return setIsExpanded(!isExpanded);
  };

  return React__default.createElement(core.ExpansionPanel, {
    className: (classes.root + " " + className).trim(),
    expanded: isExpanded,
    onChange: onChange
  }, React__default.createElement(core.ExpansionPanelSummary, {
    expandIcon: isExpanded ? React__default.createElement(RemoveIcon, null) : React__default.createElement(AddIcon, null),
    "aria-controls": "panel-" + id + "-content",
    id: id
  }, React__default.createElement(Typography, {
    className: (classes.heading + " " + (isExpanded ? classes.headingExpanded : classes.headingCollapsed)).trim()
  }, question)), React__default.createElement(core.ExpansionPanelDetails, {
    className: classes.panelDetails
  }, React__default.createElement("div", {
    className: classes.answerContainer
  }, React__default.createElement(Typography, {
    className: classes.answerText
  }, answer))));
};

var useStyles$e = core.makeStyles(function () {
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

  var classes = useStyles$e();
  return React__default.createElement(core.FormControlLabel, Object.assign({
    className: (classes.root + " " + className + " ").trim()
  }, rest));
};

var useStyles$f = core.makeStyles(function (theme) {
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

  var classes = useStyles$f();
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

var useStyles$g = styles.makeStyles(function (theme) {
  return {
    root: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
    },
    footerLink: {
      color: colors.gray4,
      fontWeight: fonts.weight.normal,
      textDecoration: 'none',
      '&:hover': {
        fontWeight: fonts.weight.lightBold
      }
    },
    footerTitle: {
      fontSize: fonts.size.subtitleBig,
      textAlign: 'center'
    }
  };
});

var FooterColumn = function FooterColumn(_ref) {
  var title = _ref.title,
      links = _ref.links,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  var classes = useStyles$g();
  return React__default.createElement("div", {
    className: (classes.root + " " + className).trim()
  }, React__default.createElement(Typography, {
    className: classes.footerTitle,
    variant: 'subtitle1',
    color: 'primary'
  }, title), links.map(function (link, i) {
    if (link.isExternal) {
      var href = (link.to || '#').toString();
      return React__default.createElement("a", {
        className: classes.footerLink,
        target: link.target,
        color: 'secondary',
        key: i,
        href: href
      }, link.title);
    }

    return React__default.createElement(reactRouterDom.NavLink, {
      className: classes.footerLink,
      target: link.target,
      color: 'secondary',
      key: i,
      to: link.to
    }, link.title);
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

var useStyles$h = styles.makeStyles(function (theme) {
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
  var classes = useStyles$h();
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

var useStyles$i = styles.makeStyles(function () {
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
  var _ref$values = _ref.values,
      startValue = _ref$values.start,
      endValue = _ref$values.end,
      unit = _ref.unit,
      handleChange = _ref.handleChange,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, ["values", "unit", "handleChange", "className"]);

  var classes = useStyles$i();
  var maxValue = rest.max || endValue;
  var minValue = rest.min || startValue;
  var step = rest.step || 1;

  var handleStartInputChange = function handleStartInputChange(event) {
    var newStartValue = event.target.value === '' ? startValue : Number(event.target.value);
    handleChange({
      min: newStartValue,
      max: endValue
    });
  };

  var handleEndInputChange = function handleEndInputChange(event) {
    var newEndValue = event.target.value === '' ? endValue : Number(event.target.value);
    handleChange({
      min: startValue,
      max: newEndValue
    });
  };

  var handleSliderChange = function handleSliderChange(_, newSliderValue) {
    handleChange({
      min: newSliderValue[0],
      max: newSliderValue[1]
    });
  };

  var handleStartValueBlur = function handleStartValueBlur() {
    if (startValue < minValue) {
      handleChange({
        min: minValue,
        max: endValue
      });
    } else if (startValue > endValue) {
      handleChange({
        min: endValue,
        max: endValue
      });
    }
  };

  var handleEndValueBlur = function handleEndValueBlur() {
    if (endValue < startValue) {
      handleChange({
        min: minValue,
        max: startValue
      });
    } else if (endValue > maxValue) {
      handleChange({
        min: minValue,
        max: maxValue
      });
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
    value: [startValue, endValue]
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

var useStyles$j = styles.makeStyles(function (theme) {
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
  var classes = useStyles$j();

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

var useStyles$k = styles.makeStyles(function (theme) {
  return {
    copyright: {
      display: 'flex',
      justifyContent: 'center'
    },
    copyrightContent: {
      color: colors.gray4,
      fontSize: fonts.size.tiny
    },
    footerContainer: {
      backgroundColor: colors.gray2,
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: theme.spacing(2),
      width: '100%'
    },
    footerContent: {
      marginTop: theme.spacing(2),
      maxWidth: '80%',
      width: '100%'
    },
    linksColumn: {
      marginBottom: theme.spacing(1)
    },
    logoColumn: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(5)
    },
    root: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: theme.spacing(4),
      width: '100%'
    },
    tongue: {
      backgroundColor: colors.gray2,
      borderTopLeftRadius: '50% 80%',
      borderTopRightRadius: '50% 80%',
      height: theme.spacing(10),
      width: '100%'
    }
  };
});

var Footer = function Footer(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      copyrightText = _ref.copyrightText,
      linksColumns = _ref.linksColumns,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "copyrightText", "linksColumns"]);

  var classes = useStyles$k();
  return React__default.createElement("footer", Object.assign({
    className: (classes.root + " " + className).trim()
  }, rest), React__default.createElement("div", {
    className: classes.tongue
  }), React__default.createElement("div", {
    className: classes.footerContainer
  }, React__default.createElement("div", {
    className: classes.footerContent
  }, React__default.createElement(Grid, {
    container: true,
    direction: 'row'
  }, React__default.createElement(Grid, {
    className: classes.logoColumn,
    item: true,
    xs: 12,
    md: 3,
    lg: 3
  }, React__default.createElement("img", {
    src: logoBlackAndBlue,
    height: '75px',
    alt: "logo"
  })), linksColumns.map(function (linkColumn, i) {
    return React__default.createElement(Grid, {
      key: "fc-" + i,
      item: true,
      xs: 12,
      sm: 12,
      md: 2,
      lg: 2
    }, React__default.createElement(FooterColumn, Object.assign({
      className: classes.linksColumn
    }, linkColumn)));
  })), React__default.createElement("div", {
    className: classes.copyright
  }, React__default.createElement(Typography, {
    className: classes.copyrightContent
  }, copyrightText)))));
};

var drawerWidth = 240;
var useStyles$l = styles.makeStyles(function (theme) {
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
      boxShadow: 'none',
      height: theme.spacing(8),
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
  var classes = useStyles$l();

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

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(Hidden, {
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
    position: "fixed",
    className: (classes.mobileAppBar + " " + (open ? classes.mobileAppBarShift : '')).trim()
  }, React__default.createElement(Toolbar, null, !open && React__default.createElement(React__default.Fragment, null, React__default.createElement(IconButton$1, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer(true)
  }, React__default.createElement(MenuIcon, null)), React__default.createElement(reactRouterDom.NavLink, {
    to: hreflogo
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
  }, React__default.createElement(IconButton$1, {
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

var useStyles$m = styles.makeStyles(function (theme) {
  var _textContent;

  return {
    textContainer: {
      alignItems: 'center',
      backgroundColor: colors.primary,
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(2, 0),
      width: '100%'
    },
    textContent: (_textContent = {
      color: colors.white,
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    }, _textContent[theme.breakpoints.down('sm')] = {
      maxWidth: '90%'
    }, _textContent[theme.breakpoints.up('md')] = {
      maxWidth: '65%'
    }, _textContent[theme.breakpoints.up('xl')] = {
      maxWidth: '55%'
    }, _textContent),
    titleContent: {
      marginBottom: theme.spacing(2)
    },
    tongueImg: {
      width: '100%'
    }
  };
});

var HeaderTongue = function HeaderTongue(_ref) {
  var description = _ref.description,
      titleLine1 = _ref.titleLine1,
      titleLine2 = _ref.titleLine2;
  var classes = useStyles$m();
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: classes.textContainer
  }, React__default.createElement("div", {
    className: classes.textContent
  }, React__default.createElement(Typography, {
    className: classes.titleContent,
    variant: 'h3',
    weight: 'lightBold'
  }, titleLine1, React__default.createElement("br", null), " ", titleLine2), React__default.createElement(Typography, {
    variant: 'subtitle1'
  }, description))), React__default.createElement("img", {
    className: classes.tongueImg,
    src: headerTongueImg,
    alt: "headerTongueImg"
  }));
};

var useStyles$n = styles.makeStyles(function (theme) {
  var _container;

  return {
    root: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(3)
    },
    container: (_container = {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
    }, _container[theme.breakpoints.up('md')] = {
      maxWidth: '80%'
    }, _container)
  };
});

var FAQPageTemplate = function FAQPageTemplate(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children;
  var classes = useStyles$n();
  return React__default.createElement("div", {
    className: (classes.root + " " + className).trim()
  }, React__default.createElement("div", {
    className: classes.container
  }, children));
};

var useStyles$o = styles.makeStyles(function (theme) {
  return {
    root: {
      marginTop: theme.spacing(8),
      width: '100%'
    }
  };
});

var PageTemplate = function PageTemplate(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  var classes = useStyles$o();
  return React__default.createElement("div", Object.assign({
    className: (classes.root + " " + className).trim()
  }, props), children);
};

var defaultState = {
  provider: null,
  web3: null,
  account: null,
  networkName: null
};
var Web3Store = React.createContext({
  state: defaultState,
  actions: {
    setProvider: function () {
      return Promise.resolve();
    }
  }
});

var getNetworkName = function getNetworkName(networkId) {
  switch (networkId) {
    case 1:
      return 'Ethereum';

    case 3:
      return 'Ropsten';

    case 4:
      return 'Rinkeby';

    case 5:
      return 'Goerli';

    case 30:
      return 'RSK MainNet';

    case 31:
      return 'RSK TestNet';

    case 42:
      return 'Kovan';

    case 61:
      return 'Ethereum Classic';

    case 99:
      return 'POA Core';

    case 100:
      return 'xDai';

    default:
      return null;
  }
};

var Web3Provider = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Web3Provider, _Component);

  function Web3Provider(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = defaultState;
    _this.setProvider = _this.setProvider.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Web3Provider.prototype;

  _proto.setProvider = function setProvider(provider) {
    try {
      var _this3 = this;

      return Promise.resolve(_catch(function () {
        return Promise.resolve(getWeb3(provider)).then(function (web3) {
          return Promise.resolve(web3.eth.getAccounts()).then(function (accounts) {
            var account;
            if (Array.isArray(accounts)) account = accounts[0];else account = accounts;
            return Promise.resolve(web3.eth.net.getId()).then(function (networkId) {
              function _temp2() {
                _this3.setState({
                  web3: web3,
                  provider: provider,
                  account: account,
                  networkName: getNetworkName(networkId)
                });
              }

              var _temp = function () {
                if (networkId === 1) return Promise.resolve(web3.eth.getChainId()).then(function (_web3$eth$getChainId) {
                  networkId = _web3$eth$getChainId;
                });
              }();

              return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
            });
          });
        });
      }, function (e) {
        throw e;
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.render = function render() {
    var _this$state = this.state,
        provider = _this$state.provider,
        web3 = _this$state.web3,
        account = _this$state.account,
        networkName = _this$state.networkName;
    var setProvider = this.setProvider;
    return React__default.createElement(Web3Store.Provider, {
      value: {
        actions: {
          setProvider: setProvider
        },
        state: {
          provider: provider,
          web3: web3,
          account: account,
          networkName: networkName
        }
      }
    }, this.props.children);
  };

  return Web3Provider;
}(React.Component);

var Web3Provider$1 = {
  Consumer: Web3Store.Consumer,
  Provider: Web3Provider
};

exports.Accordion = Accordion;
exports.Account = Account;
exports.AccountModal = AccountModal;
exports.AppBar = AppBar;
exports.Button = Button;
exports.Card = Card;
exports.CardActions = CardActions;
exports.CardContent = CardContent;
exports.CardHeader = CardHeader;
exports.Checkbox = Checkbox;
exports.CircularProgress = CircularProgress;
exports.FAQPageTemplate = FAQPageTemplate;
exports.FAQSection = FAQSection;
exports.FilterCheckboxCard = FilterCheckboxCard;
exports.Footer = Footer;
exports.FooterColumn = FooterColumn;
exports.FormControl = FormControl;
exports.FormGroup = FormGroup;
exports.Grid = Grid;
exports.Header = Header;
exports.HeaderTongue = HeaderTongue;
exports.IconButton = IconButton;
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
exports.PageTemplate = PageTemplate;
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
exports.Web3Provider = Web3Provider$1;
exports.Web3Store = Web3Store;
exports.colors = colors;
exports.doneThumbsUpImg = doneThumbsUp;
exports.fonts = fonts;
exports.footerTongueImg = footerTongue;
exports.getWeb3 = getWeb3;
exports.headerTongueImg = headerTongueImg;
exports.logoBlackAndBlue = logoBlackAndBlue;
exports.logoFullWhite = logoFullWhite;
exports.nameServiceImg = nameService;
exports.rifComImg = rifCom;
exports.rifDirImg = rifDir;
exports.rifGatImg = rifGat;
exports.rifMarImg = rifMar;
exports.rifPayImg = rifPay;
exports.rifStoImg = rifSto;
exports.rskLogo = rskLogo;
exports.shortenAddress = shortenAddress;
exports.storageImg = storage;
exports.theme = theme;
exports.tickWideImg = tickWide;
//# sourceMappingURL=index.js.map
