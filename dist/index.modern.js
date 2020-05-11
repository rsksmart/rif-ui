import React, { useState, createContext, Component } from 'react';
import { CircularProgress as CircularProgress$1, Grid as Grid$1, Link as Link$1, Button as Button$1, makeStyles as makeStyles$1, Card as Card$1, CardActions as CardActions$1, CardContent as CardContent$1, CardHeader as CardHeader$1, createStyles, Checkbox as Checkbox$1, FormControl as FormControl$1, FormGroup as FormGroup$1, Input as Input$1, InputAdornment as InputAdornment$1, InputLabel as InputLabel$1, Switch as Switch$1, TextField as TextField$1, MenuItem as MenuItem$1, Select as Select$1, Modal as Modal$1, Typography as Typography$1, Table as Table$1, TableBody as TableBody$1, TableCell as TableCell$1, TableHead as TableHead$1, TableRow as TableRow$1, AppBar as AppBar$1, FormControlLabel as FormControlLabel$1, List as List$1, Tabs, Tab } from '@material-ui/core';
import { makeStyles, createMuiTheme, createStyles as createStyles$1 } from '@material-ui/core/styles';
import { CheckBoxSharp, CheckBoxOutlineBlankSharp } from '@material-ui/icons';
import Slider from '@material-ui/core/Slider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Web3 from 'web3';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';
import AppBar$2 from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

var shortenAddress = function shortenAddress(address) {
  return address.substr(0, 6) + "..." + address.substr(address.length - 4 - 1, 4);
};

var CircularProgress = function CircularProgress(props) {
  return React.createElement(CircularProgress$1, Object.assign({}, props));
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

  return React.createElement(Grid$1, Object.assign({}, rest), children);
};

var Link = function Link(props) {
  return React.createElement(Link$1, Object.assign({}, props));
};

var useStyles = makeStyles(function (theme) {
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
  return React.createElement(Button$1, Object.assign({
    className: ((rounded ? classes.rounded : '') + "\n        " + (shadow ? '' : classes.noShadow) + "\n        " + (block ? classes.block : '') + " " + className).trim()
  }, rest), children);
};

var useStyles$1 = makeStyles$1(function () {
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
  return React.createElement(Button, Object.assign({
    className: classes.root + " " + className,
    block: true,
    rounded: true,
    variant: 'outlined',
    color: 'primary',
    onClick: onClick
  }, rest), text);
};

var doneThumbsUp = require("./doneThumbsUp~MEdZiDXb.svg");

var footerTongueImg = require("./footerTongue~bbJNSCWG.svg");

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

var Logo = React.forwardRef(function LogoFooter(props, ref) {
  var _props$alt = props.alt,
      alt = _props$alt === void 0 ? 'RIF OS' : _props$alt,
      other = _objectWithoutPropertiesLoose(props, ["alt"]);

  return React.createElement("img", Object.assign({
    src: logoFullWhite,
    alt: alt,
    ref: ref
  }, other));
});

var LogoNavbar = React.forwardRef(function LogoFooter(props, ref) {
  var _props$alt = props.alt,
      alt = _props$alt === void 0 ? 'RIF OS' : _props$alt,
      _props$height = props.height,
      height = _props$height === void 0 ? '44px' : _props$height,
      other = _objectWithoutPropertiesLoose(props, ["alt", "height"]);

  return React.createElement("img", Object.assign({
    src: logoFullWhite,
    alt: alt,
    height: height,
    ref: ref
  }, other));
});

var Card = function Card(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(Card$1, Object.assign({}, rest), children);
};

var CardActions = function CardActions(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(CardActions$1, Object.assign({}, rest), children);
};

var CardContent = function CardContent(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(CardContent$1, Object.assign({}, rest), children);
};

var CardHeader = function CardHeader(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(CardHeader$1, Object.assign({}, rest), children);
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
var theme = createMuiTheme({
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

var useStyles$2 = makeStyles$1(function () {
  return createStyles({
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

  var _useState = useState(!!props.checked),
      isChecked = _useState[0],
      setIsChecked = _useState[1];

  var handleChange = function handleChange(event, checked) {
    setIsChecked(checked);
    var onChange = props.onChange;
    !!onChange && onChange(event, checked);
  };

  return React.createElement(Checkbox$1, Object.assign({
    checkedIcon: React.createElement(CheckBoxSharp, {
      className: classes.checkedIcon
    }),
    icon: React.createElement(CheckBoxOutlineBlankSharp, {
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

  return React.createElement(FormControl$1, Object.assign({}, rest), children);
};

var FormGroup = function FormGroup(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(FormGroup$1, Object.assign({}, rest), children);
};

var Input = function Input(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(Input$1, Object.assign({}, rest), children);
};

var InputAdornment = function InputAdornment(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(InputAdornment$1, Object.assign({}, rest), children);
};

var InputLabel = function InputLabel(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(InputLabel$1, Object.assign({}, rest), children);
};

var useStyles$3 = makeStyles(function () {
  return createStyles$1({
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

  return React.createElement(Slider, Object.assign({
    classes: classes,
    onChange: onChange
  }, rest));
};

var Switch = function Switch(_ref) {
  var rest = _extends({}, _ref);

  return React.createElement(Switch$1, Object.assign({}, rest));
};

var useStyles$4 = makeStyles$1(function () {
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
  return React.createElement(TextField$1, Object.assign({
    className: (classes.root + " " + className).trim()
  }, rest));
};

var MenuItem = function MenuItem(_ref) {
  var rest = _extends({}, _ref);

  return React.createElement(MenuItem$1, Object.assign({}, rest));
};

var Select = function Select(_ref) {
  var rest = _extends({}, _ref);

  return React.createElement(Select$1, Object.assign({}, rest));
};

var useStyles$5 = makeStyles(function (theme) {
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
  return React.createElement(Modal$1, Object.assign({}, rest), React.createElement("div", {
    className: classes.paper
  }, children));
};

var useStyles$6 = makeStyles(function (theme) {
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
  return React.createElement("div", {
    className: (classes.root + " " + className).trim()
  }, children);
};

var useStyles$7 = makeStyles(function (theme) {
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
  return React.createElement(Typography$1, Object.assign({
    className: (classes[weight] + " " + className).trim()
  }, rest), children);
};

var ModalTitle = function ModalTitle(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(Typography, Object.assign({
    variant: 'h5'
  }, rest), children);
};

var useStyles$8 = makeStyles(function (theme) {
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
  return React.createElement("div", {
    className: (classes.root + " " + className).trim()
  }, children);
};

var useStyles$9 = makeStyles(function (theme) {
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
  return React.createElement("div", {
    className: (classes.root + " " + className).trim()
  }, children);
};

var Table = function Table(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(Table$1, Object.assign({}, rest), children);
};

var TableBody = function TableBody(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(TableBody$1, Object.assign({}, rest), children);
};

var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(TableCell$1, Object.assign({}, rest), children);
};

var TableHead = function TableHead(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(TableHead$1, Object.assign({}, rest), children);
};

var TableRow = function TableRow(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(TableRow$1, Object.assign({}, rest), children);
};

var useStyles$a = makeStyles(function (theme) {
  return createStyles$1({
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

  var _useState = useState(!!expanded),
      isExpanded = _useState[0],
      setIsExpanded = _useState[1];

  var onChange = function onChange() {
    return setIsExpanded(!isExpanded);
  };

  return React.createElement(ExpansionPanel, {
    className: classes.root,
    expanded: isExpanded,
    onChange: onChange
  }, React.createElement(ExpansionPanelSummary, {
    className: classes.expansionPanelSummary,
    expandIcon: React.createElement(ExpandMoreIcon, null),
    "aria-controls": "panel-" + id + "-content",
    id: id
  }, React.createElement(Typography, {
    className: classes.heading
  }, title)), React.createElement(ExpansionPanelDetails, null, children));
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

var EProvider;

(function (EProvider) {
  EProvider["METAMASK"] = "Metamask";
  EProvider["LEDGER"] = "Ledger";
  EProvider["TREZOR"] = "Trezor";
  EProvider["LOCAL"] = "Localhost";
})(EProvider || (EProvider = {}));

function getWeb3(provider) {
  if (provider === void 0) {
    provider = EProvider.METAMASK;
  }

  return new Promise(function (resolve, reject) {
    try {
      var _temp4 = _switch(provider, [[function () {
        return EProvider.METAMASK;
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
        return EProvider.LOCAL;
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
  return React.createElement(Modal, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "account-modal-title",
    "aria-describedby": "account-modal-description"
  }, React.createElement(React.Fragment, null, React.createElement(ModalHeader, null, React.createElement(ModalTitle, null, "Connect a wallet to get started")), React.createElement(ModalBody, null, (providers || [EProvider.METAMASK, EProvider.LOCAL]).map(function (provider) {
    return React.createElement(LoginOption, {
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
  })), React.createElement(ModalFooter, null, React.createElement(Button, {
    variant: 'outlined',
    color: 'secondary',
    block: true,
    onClick: handleClose
  }, "Close"))));
};

var useStyles$b = makeStyles(function (theme) {
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

  var _useState = useState(false),
      open = _useState[0],
      setOpen = _useState[1];

  var handleClose = function handleClose() {
    return setOpen(false);
  };

  var handleOpen = function handleOpen() {
    return setOpen(true);
  };

  return React.createElement(React.Fragment, null, React.createElement(Button, {
    onClick: handleOpen,
    className: classes.button,
    variant: 'contained',
    color: 'primary',
    rounded: true
  }, React.createElement(Typography, {
    className: classes.accountText
  }, !web3 && 'Connect wallet', web3 && networkName, web3 && account && shortenAddress(account))), React.createElement(AccountModal, {
    open: open,
    handleClose: handleClose,
    networkName: networkName,
    web3: web3,
    setProvider: setProvider,
    providers: providers
  }));
};

var useStyles$c = makeStyles(function (theme) {
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
  return React.createElement(AppBar$1, Object.assign({
    position: 'fixed',
    className: (classes.root + " " + className).trim()
  }, rest), React.createElement(Toolbar, null, React.createElement(Link, {
    href: rest.hreflogo
  }, React.createElement(LogoNavbar, null)), React.createElement("div", {
    className: classes.itemsContainer
  }, !!items.length && items.map(function (navItem, i) {
    return React.createElement(Typography, {
      className: classes.navLinkContainer,
      key: navItem.title + "-" + i
    }, React.createElement(NavLink, Object.assign({
      className: classes.navLink,
      activeClassName: classes.activeNavlink
    }, navItem), navItem.title));
  })), React.createElement("div", {
    className: classes.loginContainer
  }, React.createElement(Login, null))));
};

var useStyles$d = makeStyles$1(function () {
  return createStyles({
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
  return React.createElement(FormControlLabel$1, Object.assign({
    className: (classes.root + " " + className + " ").trim()
  }, rest));
};

var useStyles$e = makeStyles$1(function (theme) {
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
  return React.createElement(FormControlLabel, {
    className: classes.root + " " + labelClassName.trim(),
    label: labelText,
    control: React.createElement(Checkbox, Object.assign({}, rest))
  });
};

var FilterCheckboxCard = function FilterCheckboxCard(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      onClick = _ref.onClick,
      items = _ref.items;
  return React.createElement("div", {
    className: className
  }, items.map(function (item, i) {
    return React.createElement(LabeledCheckbox, Object.assign({
      onClick: onClick,
      key: "labeledCheckbox-" + item.id || ("labeledCheckbox-" + i + "-" + className).trim(),
      labelClassName: item.labelClassName
    }, item));
  }));
};

var useStyles$f = makeStyles(function (theme) {
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
  var classes = useStyles$f();
  return React.createElement("div", {
    className: (classes.root + " " + className).trim()
  }, React.createElement(Typography, {
    className: classes.footerTitle,
    variant: 'subtitle1',
    color: 'primary'
  }, title), links.map(function (link, i) {
    if (link.isExternal) {
      var href = (link.to || '#').toString();
      return React.createElement("a", {
        className: classes.footerLink,
        target: link.target,
        color: 'secondary',
        key: i,
        href: href
      }, link.title);
    }

    return React.createElement(NavLink, {
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

  return React.createElement(List$1, Object.assign({}, rest), children);
};

var ModalDialogue = function ModalDialogue(_ref) {
  var title = _ref.title,
      footer = _ref.footer,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["title", "footer", "children"]);

  return React.createElement(Modal, Object.assign({}, props), React.createElement(React.Fragment, null, React.createElement(ModalHeader, null, React.createElement(ModalTitle, null, title)), React.createElement(ModalBody, null, children), React.createElement(ModalFooter, null, footer)));
};

var useStyles$g = makeStyles(function (theme) {
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
  var classes = useStyles$g();
  return React.createElement(React.Fragment, null, React.createElement(Grid, {
    className: classes.root,
    container: true,
    spacing: 1
  }, React.createElement(Grid, {
    className: classes.inputContainer,
    item: true,
    xs: 8
  }, React.createElement(Input, {
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
  })), React.createElement(Grid, {
    item: true,
    xs: 4,
    className: classes.unitsContainer
  }, React.createElement(Typography, {
    className: classes.units
  }, units))));
};

var useStyles$h = makeStyles(function () {
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

  var classes = useStyles$h();
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

  return React.createElement("div", {
    className: (classes.root + " " + className).trim()
  }, React.createElement(RangeSlider, Object.assign({
    value: [startValue, endValue]
  }, rest, {
    handleChange: handleSliderChange
  })), React.createElement("div", {
    className: classes.inputsContainer
  }, React.createElement(UnitsInput, Object.assign({
    handleOnBlur: handleStartValueBlur,
    handleOnChange: handleStartInputChange
  }, getCommonInputValues(), {
    value: startValue
  })), React.createElement(Typography, {
    className: classes.toContainer,
    weight: 'bold'
  }, "to"), React.createElement(UnitsInput, Object.assign({
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

var useStyles$i = makeStyles(function (theme) {
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
  var classes = useStyles$i();

  var handleChange = function handleChange(event, newValue) {
    onChange(event, newValue);
  };

  return React.createElement("div", {
    className: classes.root
  }, React.createElement(Tabs, {
    "aria-label": "tabs switch",
    className: classes.tabContainer,
    onChange: handleChange,
    TabIndicatorProps: {
      className: classes.tabIndicator
    },
    value: controlledValue,
    variant: "fullWidth"
  }, React.createElement(Tab, Object.assign({}, a11yProps(0), {
    classes: {
      selected: classes.tabSelected
    },
    className: classes.tab,
    label: label1
  })), React.createElement(Tab, Object.assign({}, a11yProps(1), {
    classes: {
      selected: classes.tabSelected
    },
    className: classes.tab,
    label: label2
  }))));
};

var useStyles$j = makeStyles(function (theme) {
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
    img: {
      width: '100%'
    },
    root: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: theme.spacing(4),
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

  var classes = useStyles$j();
  return React.createElement("footer", Object.assign({
    className: (classes.root + " " + className).trim()
  }, rest), React.createElement("img", {
    className: classes.img,
    src: footerTongueImg,
    alt: "footer tongue image"
  }), React.createElement("div", {
    className: classes.footerContainer
  }, React.createElement("div", {
    className: classes.footerContent
  }, React.createElement(Grid, {
    container: true,
    direction: 'row'
  }, React.createElement(Grid, {
    className: classes.logoColumn,
    item: true,
    xs: 12,
    md: 3,
    lg: 3
  }, React.createElement("img", {
    src: logoBlackAndBlue,
    height: '75px',
    alt: "logo"
  })), linksColumns.map(function (linkColumn, i) {
    return React.createElement(Grid, {
      key: "fc-" + i,
      item: true,
      xs: 12,
      sm: 12,
      md: 2,
      lg: 2
    }, React.createElement(FooterColumn, Object.assign({
      className: classes.linksColumn
    }, linkColumn)));
  })), React.createElement("div", {
    className: classes.copyright
  }, React.createElement(Typography, {
    className: classes.copyrightContent
  }, copyrightText)))));
};

var drawerWidth = 240;
var useStyles$k = makeStyles(function (theme) {
  return createStyles$1({
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
  var classes = useStyles$k();

  var _useState = useState(false),
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

  return React.createElement(React.Fragment, null, React.createElement(Hidden, {
    smDown: true
  }, React.createElement(AppBar, {
    hreflogo: hreflogo,
    items: items,
    login: login
  })), React.createElement(Hidden, {
    mdUp: true
  }, React.createElement("div", {
    role: "presentation",
    onKeyDown: toggleDrawer(false)
  }, React.createElement(AppBar$2, {
    position: "fixed",
    className: (classes.mobileAppBar + " " + (open ? classes.mobileAppBarShift : '')).trim()
  }, React.createElement(Toolbar, null, !open && React.createElement(React.Fragment, null, React.createElement(IconButton, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer(true)
  }, React.createElement(MenuIcon, null)), React.createElement(Link, {
    href: hreflogo
  }, React.createElement(LogoNavbar, null)), React.createElement("div", {
    className: classes.loginContainer
  }, React.createElement(Login, null))))), React.createElement(Drawer, {
    anchor: "left",
    open: open,
    onClose: toggleDrawer(false),
    classes: {
      paper: classes.drawerPaper
    },
    onClick: toggleDrawer(false)
  }, React.createElement("div", {
    className: classes.drawerHeader
  }, React.createElement(IconButton, {
    onClick: toggleDrawer(false)
  }, React.createElement(ChevronLeftIcon, null))), React.createElement(Divider, null), React.createElement(List, null, !!items.length && items.map(function (headerItem, i) {
    return React.createElement(ListItem, {
      button: true,
      key: headerItem.title + "-" + i
    }, React.createElement(NavLink, {
      to: headerItem.to,
      className: classes.mobileNavLink,
      activeClassName: classes.mobileNavLinkActive
    }, React.createElement(ListItemIcon, null, headerItem.icon), React.createElement(ListItemText, {
      primary: headerItem.title
    })));
  }))))));
};

var useStyles$l = makeStyles(function (theme) {
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
  var classes = useStyles$l();
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: classes.textContainer
  }, React.createElement("div", {
    className: classes.textContent
  }, React.createElement(Typography, {
    className: classes.titleContent,
    variant: 'h3',
    weight: 'lightBold'
  }, titleLine1, React.createElement("br", null), " ", titleLine2), React.createElement(Typography, {
    variant: 'subtitle1'
  }, description))), React.createElement("img", {
    className: classes.tongueImg,
    src: headerTongueImg,
    alt: "headerTongueImg"
  }));
};

var useStyles$m = makeStyles(function (theme) {
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

  var classes = useStyles$m();
  return React.createElement("div", Object.assign({
    className: (classes.root + " " + className).trim()
  }, props), children);
};

var defaultState = {
  provider: null,
  web3: null,
  account: null,
  networkName: null
};
var Web3Store = createContext({
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
    return React.createElement(Web3Store.Provider, {
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
}(Component);

var Web3Provider$1 = {
  Consumer: Web3Store.Consumer,
  Provider: Web3Provider
};

export { Accordion, Account, AccountModal, AppBar, Button, Card, CardActions, CardContent, CardHeader, Checkbox, CircularProgress, EProvider, FilterCheckboxCard, Footer, FooterColumn, FormControl, FormGroup, Grid, Header, HeaderTongue, Input, InputAdornment, InputLabel, LabeledCheckbox, Link, List, LoginOption, Logo, LogoNavbar, MenuItem, Modal, ModalBody, ModalDialogue, ModalFooter, ModalHeader, ModalTitle, PageTemplate, RangeSlider, RangeSliderWithInputs, Select, Switch, SwitchTabs, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography, UnitsInput, Web3Provider$1 as Web3Provider, Web3Store, colors, doneThumbsUp as doneThumbsUpImg, fonts, footerTongueImg, getWeb3, headerTongueImg, logoBlackAndBlue, logoFullWhite, nameService as nameServiceImg, rifCom as rifComImg, rifDir as rifDirImg, rifGat as rifGatImg, rifMar as rifMarImg, rifPay as rifPayImg, rifSto as rifStoImg, rskLogo, shortenAddress, storage as storageImg, theme, tickWide as tickWideImg };
//# sourceMappingURL=index.modern.js.map
