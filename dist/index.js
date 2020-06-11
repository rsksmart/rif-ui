function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var styles = require('@material-ui/core/styles');
var icons = require('@material-ui/icons');
var ExpansionPanel = _interopDefault(require('@material-ui/core/ExpansionPanel'));
var ExpansionPanelDetails = _interopDefault(require('@material-ui/core/ExpansionPanelDetails'));
var ExpansionPanelSummary = _interopDefault(require('@material-ui/core/ExpansionPanelSummary'));
var ExpandMoreIcon = _interopDefault(require('@material-ui/icons/ExpandMore'));
var Web3 = _interopDefault(require('web3'));
var AddIcon = _interopDefault(require('@material-ui/icons/Add'));
var RemoveIcon = _interopDefault(require('@material-ui/icons/Remove'));
var reactRouterDom = require('react-router-dom');
var Slider = _interopDefault(require('@material-ui/core/Slider'));
var Hidden = _interopDefault(require('@material-ui/core/Hidden'));
var MenuIcon = _interopDefault(require('@material-ui/icons/Menu'));
var ChevronLeftIcon = _interopDefault(require('@material-ui/icons/ChevronLeft'));

const shortenAddress = address => `${address.substr(0, 6)}...${address.substr(address.length - 4)}`;
const removeEmptySpaces = str => str.replace(/\s/g, '');

const useStyles = styles.makeStyles(() => ({
  block: {
    width: '100%'
  },
  noShadow: {
    boxShadow: 'none'
  },
  rounded: {
    borderRadius: 50
  }
}));

const Button = ({
  className = '',
  block,
  shadow,
  rounded,
  children,
  ...rest
}) => {
  const classes = useStyles();
  return React__default.createElement(core.Button, Object.assign({
    className: `${rounded ? classes.rounded : ''}
        ${shadow ? '' : classes.noShadow}
        ${block ? classes.block : ''} ${className}`.trim()
  }, rest), children);
};

const colors = {
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
const fonts = {
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
const globalConstants = {
  headerHeight: 8
};
const theme = styles.createMuiTheme({
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
    },
    MuiFormControlLabel: {
      root: {
        color: colors.gray3
      }
    },
    MuiSlider: {
      rail: {
        color: colors.gray3,
        height: 4,
        opacity: 1
      },
      root: {
        width: '100%',
        color: colors.primary,
        height: 4
      },
      track: {
        height: 4
      },
      thumb: {
        marginLeft: -4,
        height: 14,
        width: 14
      }
    },
    MuiTextField: {
      root: {
        color: colors.gray3,
        '&:hover': {
          color: colors.gray2
        }
      }
    }
  }
});

const useStyles$1 = core.makeStyles(() => core.createStyles({
  unCheckedIcon: {
    color: colors.gray4
  },
  checkedIcon: {
    color: colors.primary
  }
}));

const Checkbox = props => {
  const classes = useStyles$1();
  const {
    checked
  } = props;
  const [isChecked, setIsChecked] = React.useState(!!checked);

  const handleChange = (event, newChecked) => {
    setIsChecked(newChecked);
    const {
      onChange
    } = props;
    if (onChange) onChange(event, newChecked);
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

const useStyles$2 = core.makeStyles(() => ({
  root: {
    padding: 5,
    margin: 5,
    width: '100%'
  }
}));

const LoginOption = ({
  className = '',
  onClick,
  text,
  ...rest
}) => {
  const classes = useStyles$2();
  return React__default.createElement(Button, Object.assign({
    className: `${classes.root} ${className}`,
    block: true,
    rounded: true,
    variant: "outlined",
    color: "primary",
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

var Logo = React__default.forwardRef((props, ref) => {
  const {
    alt = 'RIF OS',
    ...other
  } = props;
  return React__default.createElement("img", Object.assign({
    src: logoFullWhite,
    alt: alt,
    ref: ref
  }, other));
});

var LogoNavbar = React__default.forwardRef((props, ref) => {
  const {
    alt = 'RIF OS',
    height = '44px',
    ...other
  } = props;
  return React__default.createElement("img", Object.assign({
    src: logoFullWhite,
    alt: alt,
    height: height,
    ref: ref
  }, other));
});

const useStyles$3 = styles.makeStyles(() => ({
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
}));

const Typography = ({
  weight = 'normal',
  className = '',
  children,
  ...rest
}) => {
  const classes = useStyles$3();
  return React__default.createElement(core.Typography, Object.assign({
    className: `${classes[weight]} ${className}`.trim()
  }, rest), children);
};

const useStyles$4 = styles.makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${colors.primary}`,
    boxShadow: theme.shadows[5],
    left: '50%',
    minWidth: 400,
    padding: theme.spacing(2, 4, 3),
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
}));

const Modal = ({
  children,
  ...rest
}) => {
  const classes = useStyles$4();
  return React__default.createElement(core.Modal, Object.assign({}, rest), React__default.createElement("div", {
    className: classes.paper
  }, children));
};

const useStyles$5 = styles.makeStyles(() => ({
  root: {
    borderBottom: `1px solid ${colors.gray2}`,
    color: colors.primary,
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }
}));

const ModalHeader = ({
  children,
  className = ''
}) => {
  const classes = useStyles$5();
  return React__default.createElement("div", {
    className: `${classes.root} ${className}`.trim()
  }, children);
};

const ModalTitle = ({
  children,
  ...rest
}) => React__default.createElement(Typography, Object.assign({
  variant: "h5"
}, rest), children);

const useStyles$6 = styles.makeStyles(theme => ({
  root: {
    borderTop: `1px solid ${colors.gray2}`,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(1),
    width: '100%'
  }
}));

const ModalFooter = ({
  children,
  className = ''
}) => {
  const classes = useStyles$6();
  return React__default.createElement("div", {
    className: `${classes.root} ${className}`.trim()
  }, children);
};

const useStyles$7 = styles.makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
    width: '100%'
  }
}));

const ModalBody = ({
  children,
  className = ''
}) => {
  const classes = useStyles$7();
  return React__default.createElement("div", {
    className: `${classes.root} ${className}`.trim()
  }, children);
};

const useStyles$8 = styles.makeStyles(theme => styles.createStyles({
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
    borderBottom: `1px solid ${colors.gray2}`
  }
}));

const Accordion = ({
  children,
  expanded,
  id,
  title
}) => {
  const classes = useStyles$8();
  const [isExpanded, setIsExpanded] = React.useState(!!expanded);

  const onChange = () => setIsExpanded(!isExpanded);

  return React__default.createElement(ExpansionPanel, {
    className: classes.root,
    expanded: isExpanded,
    onChange: onChange
  }, React__default.createElement(ExpansionPanelSummary, {
    className: classes.expansionPanelSummary,
    expandIcon: React__default.createElement(ExpandMoreIcon, null),
    "aria-controls": `panel-${id}-content`,
    id: id
  }, React__default.createElement(Typography, {
    className: classes.heading
  }, title)), React__default.createElement(ExpansionPanelDetails, null, children));
};

(function (EProvider) {
  EProvider["METAMASK"] = "Metamask";
  EProvider["LEDGER"] = "Ledger";
  EProvider["TREZOR"] = "Trezor";
  EProvider["LOCAL"] = "Localhost";
})(exports.EProvider || (exports.EProvider = {}));

function getWeb3(provider = exports.EProvider.METAMASK) {
  return new Promise((resolve, reject) => {
    switch (provider) {
      case exports.EProvider.METAMASK:
        {
          if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            window.ethereum.enable().then(() => resolve(web3)).catch(reject);
          } else if (window.web3) {
            resolve(new Web3(window.web3.currentProvider));
          } else reject(new Error('No injected web3 found'));

          break;
        }

      case exports.EProvider.LOCAL:
        {
          const localhostProvider = new Web3.providers.HttpProvider("'http://127.0.0.1:4444'");
          resolve(new Web3(localhostProvider));
          break;
        }

      default:
        {
          reject(new Error(`Provider not implemented or unknown. Chosen provider ${provider}`));
          break;
        }
    }
  });
}

const AccountModal = ({
  setProvider,
  providers,
  open,
  handleClose,
  onProviderSet
}) => React__default.createElement(Modal, {
  open: open,
  onClose: handleClose,
  "aria-labelledby": "account-modal-title",
  "aria-describedby": "account-modal-description"
}, React__default.createElement(React__default.Fragment, null, React__default.createElement(ModalHeader, null, React__default.createElement(ModalTitle, null, "Connect a wallet to get started")), React__default.createElement(ModalBody, null, (providers || [exports.EProvider.METAMASK, exports.EProvider.LOCAL]).map(provider => React__default.createElement(LoginOption, {
  key: provider,
  text: provider,
  onClick: function () {
    try {
      return Promise.resolve(setProvider(provider, onProviderSet)).then(function () {});
    } catch (e) {
      return Promise.reject(e);
    }
  }
}))), React__default.createElement(ModalFooter, null, React__default.createElement(Button, {
  variant: "outlined",
  color: "secondary",
  block: true,
  onClick: handleClose
}, "Close"))));

const useStyles$9 = styles.makeStyles(() => ({
  accountText: {
    fontSize: fonts.size.tiny,
    textAlign: 'center'
  },
  button: {
    border: `1px solid ${colors.white}`,
    '&:hover': {
      border: `1px solid ${colors.transparent}`
    }
  }
}));

const Account = ({
  web3,
  networkName,
  account,
  setProvider,
  providers
}) => {
  const classes = useStyles$9();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(Button, {
    onClick: handleOpen,
    className: classes.button,
    variant: "contained",
    color: "primary",
    rounded: true
  }, React__default.createElement(Typography, {
    className: classes.accountText
  }, !web3 && 'Connect wallet', web3 && networkName, web3 && account && shortenAddress(account))), React__default.createElement(AccountModal, {
    open: open,
    handleClose: handleClose,
    networkName: networkName,
    web3: web3,
    onProviderSet: handleClose,
    setProvider: setProvider,
    providers: providers
  }));
};

const useStyles$a = styles.makeStyles(theme => ({
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
  answerContainer: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%'
    }
  },
  answerText: {
    color: colors.gray5
  }
}));

const FAQSection = ({
  className = '',
  initiallyExpanded,
  question,
  answer
}) => {
  const classes = useStyles$a();
  const [isExpanded, setIsExpanded] = React.useState(!!initiallyExpanded);

  const onChange = () => setIsExpanded(!isExpanded);

  return React__default.createElement(core.ExpansionPanel, {
    className: `${classes.root} ${className}`.trim(),
    expanded: isExpanded,
    onChange: onChange
  }, React__default.createElement(core.ExpansionPanelSummary, {
    expandIcon: isExpanded ? React__default.createElement(RemoveIcon, null) : React__default.createElement(AddIcon, null)
  }, React__default.createElement(Typography, {
    className: `${classes.heading} ${isExpanded ? classes.headingExpanded : classes.headingCollapsed}`.trim()
  }, question)), React__default.createElement(core.ExpansionPanelDetails, {
    className: classes.panelDetails
  }, React__default.createElement("div", {
    className: classes.answerContainer
  }, React__default.createElement(Typography, {
    className: classes.answerText
  }, answer))));
};

const useStyles$b = styles.makeStyles(() => ({
  root: {
    color: colors.gray4,
    width: '100%'
  }
}));

const LabeledCheckbox = ({
  labelText,
  labelClassName = '',
  ...rest
}) => {
  const classes = useStyles$b();
  return React__default.createElement(core.FormControlLabel, {
    className: `${classes.root} ${labelClassName.trim()}`,
    label: labelText,
    control: React__default.createElement(Checkbox, Object.assign({}, rest))
  });
};

const FilterCheckboxCard = ({
  className = '',
  onClick,
  items
}) => React__default.createElement("div", {
  className: className
}, items.map((item, i) => React__default.createElement(LabeledCheckbox, Object.assign({
  onClick: onClick,
  key: `labeledCheckbox-${item.id}` || `labeledCheckbox-${i}-${className}`.trim(),
  labelClassName: item.labelClassName
}, item))));

const useStyles$c = styles.makeStyles(() => ({
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
}));

const FooterColumn = ({
  title,
  links,
  className = ''
}) => {
  const classes = useStyles$c();
  return React__default.createElement("div", {
    className: `${classes.root} ${className}`.trim()
  }, React__default.createElement(Typography, {
    className: classes.footerTitle,
    variant: "subtitle1",
    color: "primary"
  }, title), links.map(link => {
    const key = removeEmptySpaces(link.title);

    if (link.isExternal) {
      const href = (link.to || '#').toString();
      return React__default.createElement("a", {
        className: classes.footerLink,
        target: link.target,
        color: "secondary",
        key: key,
        href: href
      }, link.title);
    }

    return React__default.createElement(reactRouterDom.NavLink, {
      className: classes.footerLink,
      target: link.target,
      color: "secondary",
      key: key,
      to: link.to
    }, link.title);
  }));
};

const ModalDialogue = ({
  title,
  footer,
  children,
  ...props
}) => React__default.createElement(Modal, Object.assign({}, props), React__default.createElement(React__default.Fragment, null, React__default.createElement(ModalHeader, null, React__default.createElement(ModalTitle, null, title)), React__default.createElement(ModalBody, null, children), React__default.createElement(ModalFooter, null, footer)));

const useStyles$d = styles.makeStyles(theme => ({
  root: {
    color: colors.gray4,
    display: 'flex'
  },
  input: {
    color: colors.gray4,
    paddingLeft: theme.spacing(0.1),
    textAlign: 'center',
    '&::before': {
      borderBottom: `1px solid ${colors.gray4}`
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
}));

const UnitsInput = props => {
  const {
    handleOnBlur,
    handleOnChange,
    maxValue,
    minValue,
    units,
    value,
    step = 1
  } = props;
  const classes = useStyles$d();
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(core.Grid, {
    className: classes.root,
    container: true,
    spacing: 1
  }, React__default.createElement(core.Grid, {
    className: classes.inputContainer,
    item: true,
    xs: 8
  }, React__default.createElement(core.Input, {
    className: classes.input,
    classes: {
      input: classes.input
    },
    value: value,
    onChange: handleOnChange,
    onBlur: handleOnBlur,
    inputProps: {
      step,
      min: minValue,
      max: maxValue,
      'aria-labelledby': 'input-slider'
    }
  })), React__default.createElement(core.Grid, {
    item: true,
    xs: 4,
    className: classes.unitsContainer
  }, React__default.createElement(Typography, {
    className: classes.units
  }, units))));
};

const useStyles$e = styles.makeStyles(() => ({
  root: {
    width: '100%'
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
}));

const RangeSliderWithInputs = ({
  values: {
    start: startValue,
    end: endValue
  },
  unit,
  handleChange,
  className,
  ...rest
}) => {
  const classes = useStyles$e();
  const maxValue = rest.max || endValue;
  const minValue = rest.min || startValue;
  const step = rest.step || 1;

  const handleStartInputChange = event => {
    const newStartValue = event.target.value === '' ? startValue : Number(event.target.value);
    handleChange({
      min: newStartValue,
      max: endValue
    });
  };

  const handleEndInputChange = event => {
    const newEndValue = event.target.value === '' ? endValue : Number(event.target.value);
    handleChange({
      min: startValue,
      max: newEndValue
    });
  };

  const handleSliderChange = (_, newSliderValue) => {
    handleChange({
      min: newSliderValue[0],
      max: newSliderValue[1]
    });
  };

  const handleStartValueBlur = () => {
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

  const handleEndValueBlur = () => {
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

  const getCommonInputValues = () => ({
    maxValue,
    minValue,
    step,
    units: unit
  });

  return React__default.createElement("div", {
    className: `${classes.root} ${className}`.trim()
  }, React__default.createElement(Slider, Object.assign({
    value: [startValue, endValue]
  }, rest, {
    onChange: handleSliderChange
  })), React__default.createElement("div", {
    className: classes.inputsContainer
  }, React__default.createElement(UnitsInput, Object.assign({
    handleOnBlur: handleStartValueBlur,
    handleOnChange: handleStartInputChange
  }, getCommonInputValues(), {
    value: startValue
  })), React__default.createElement(Typography, {
    className: classes.toContainer,
    weight: "bold"
  }, "to"), React__default.createElement(UnitsInput, Object.assign({
    handleOnBlur: handleEndValueBlur,
    handleOnChange: handleEndInputChange
  }, getCommonInputValues(), {
    value: endValue
  }))));
};

const a11yProps = index => ({
  id: `full-width-tab-${index}`,
  'aria-controls': `full-width-tabpanel-${index}`
});

const useStyles$f = styles.makeStyles(() => ({
  root: {
    backgroundColor: colors.white,
    minHeight: 20,
    width: '100%',
    border: `${colors.primary} solid 1px`,
    borderRadius: 50,
    overflow: 'hidden'
  },
  tabContainer: {
    minHeight: 20,
    width: '100%'
  },
  tab: {
    '&:hover': {
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
    backgroundColor: `${colors.primary} !important`,
    color: `${colors.white} !important`
  }
}));

const SwitchTabs = ({
  label1,
  label2,
  value: controlledValue,
  onChange
}) => {
  const classes = useStyles$f();

  const handleChange = (event, newValue) => {
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

const useStyles$g = styles.makeStyles(theme => ({
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
}));

const Footer = ({
  className = '',
  copyrightText,
  linksColumns,
  ...rest
}) => {
  const classes = useStyles$g();
  return React__default.createElement("footer", Object.assign({
    className: `${classes.root} ${className}`.trim()
  }, rest), React__default.createElement("div", {
    className: classes.tongue
  }), React__default.createElement("div", {
    className: classes.footerContainer
  }, React__default.createElement("div", {
    className: classes.footerContent
  }, React__default.createElement(core.Grid, {
    container: true,
    direction: "row"
  }, React__default.createElement(core.Grid, {
    className: classes.logoColumn,
    item: true,
    xs: 12,
    md: 3,
    lg: 3
  }, React__default.createElement("img", {
    src: logoBlackAndBlue,
    height: "75px",
    alt: "logo"
  })), linksColumns.map(linkColumn => React__default.createElement(core.Grid, {
    key: `fc-${removeEmptySpaces(linkColumn.title)}`,
    item: true,
    xs: 12,
    sm: 12,
    md: 2,
    lg: 2
  }, React__default.createElement(FooterColumn, Object.assign({
    className: classes.linksColumn
  }, linkColumn))))), React__default.createElement("div", {
    className: classes.copyright
  }, React__default.createElement(Typography, {
    className: classes.copyrightContent
  }, copyrightText)))));
};

const useStyles$h = styles.makeStyles(theme => ({
  activeNavlink: {
    color: `${colors.white} !important`,
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
    height: theme.spacing(globalConstants.headerHeight)
  }
}));

const HeaderDesktop = ({
  hreflogo,
  items,
  login
}) => {
  const classes = useStyles$h();
  const Login = login;
  return React__default.createElement(core.AppBar, {
    position: "fixed",
    className: classes.root
  }, React__default.createElement(core.Toolbar, null, React__default.createElement(reactRouterDom.NavLink, {
    to: hreflogo
  }, React__default.createElement(LogoNavbar, null)), React__default.createElement("div", {
    className: classes.itemsContainer
  }, !!items.length && items.map(navItem => React__default.createElement(Typography, {
    className: classes.navLinkContainer,
    key: `hi-${removeEmptySpaces(navItem.title)}`
  }, React__default.createElement(reactRouterDom.NavLink, Object.assign({
    className: classes.navLink,
    activeClassName: classes.activeNavlink
  }, navItem), navItem.title)))), React__default.createElement("div", {
    className: classes.loginContainer
  }, React__default.createElement(Login, null))));
};

const drawerWidth = 240;
const useStyles$i = styles.makeStyles(theme => styles.createStyles({
  loginContainer: {
    display: 'flex',
    marginLeft: 'auto'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  drawerPaper: {
    width: drawerWidth
  },
  mobileAppBar: {
    boxShadow: 'none',
    height: theme.spacing(globalConstants.headerHeight),
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  mobileAppBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
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
    color: `${colors.primary} !important`
  }
}));

const HeaderMobile = ({
  hreflogo,
  items,
  login
}) => {
  const classes = useStyles$i();
  const [open, setOpen] = React.useState(false);
  const Login = login;

  const toggleDrawer = isOpen => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(isOpen);
  };

  return React__default.createElement("div", {
    role: "presentation",
    onKeyDown: toggleDrawer(false)
  }, React__default.createElement(core.AppBar, {
    position: "fixed",
    className: `${classes.mobileAppBar} ${open ? classes.mobileAppBarShift : ''}`.trim()
  }, React__default.createElement(core.Toolbar, null, !open && React__default.createElement(React__default.Fragment, null, React__default.createElement(core.IconButton, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer(true)
  }, React__default.createElement(MenuIcon, null)), React__default.createElement(reactRouterDom.NavLink, {
    to: hreflogo
  }, React__default.createElement(LogoNavbar, null)), React__default.createElement("div", {
    className: classes.loginContainer
  }, React__default.createElement(Login, null))))), React__default.createElement(core.Drawer, {
    anchor: "left",
    open: open,
    onClose: toggleDrawer(false),
    classes: {
      paper: classes.drawerPaper
    },
    onClick: toggleDrawer(false)
  }, React__default.createElement("div", {
    className: classes.drawerHeader
  }, React__default.createElement(core.IconButton, {
    onClick: toggleDrawer(false)
  }, React__default.createElement(ChevronLeftIcon, null))), React__default.createElement(core.Divider, null), React__default.createElement(core.List, null, !!items.length && items.map(headerItem => React__default.createElement(core.ListItem, {
    button: true,
    key: `him-${removeEmptySpaces(headerItem.title)}`
  }, React__default.createElement(reactRouterDom.NavLink, {
    to: headerItem.to,
    className: classes.mobileNavLink,
    activeClassName: classes.mobileNavLinkActive
  }, React__default.createElement(core.ListItemIcon, null, headerItem.icon), React__default.createElement(core.ListItemText, {
    primary: headerItem.title
  })))))));
};

const Header = ({
  hreflogo,
  items,
  login
}) => React__default.createElement(React__default.Fragment, null, React__default.createElement(Hidden, {
  smDown: true
}, React__default.createElement(HeaderDesktop, {
  hreflogo: hreflogo,
  items: items,
  login: login
})), React__default.createElement(Hidden, {
  mdUp: true
}, React__default.createElement(HeaderMobile, {
  hreflogo: hreflogo,
  items: items,
  login: login
})));

const useStyles$j = styles.makeStyles(theme => ({
  textContainer: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2, 0),
    width: '100%'
  },
  textContent: {
    color: colors.white,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%'
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '65%'
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '55%'
    }
  },
  titleContent: {
    marginBottom: theme.spacing(2)
  },
  tongueImg: {
    width: '100%'
  }
}));

const HeaderTongue = ({
  description,
  titleLine1,
  titleLine2
}) => {
  const classes = useStyles$j();
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: classes.textContainer
  }, React__default.createElement("div", {
    className: classes.textContent
  }, React__default.createElement(Typography, {
    className: classes.titleContent,
    variant: "h3",
    weight: "lightBold"
  }, titleLine1, React__default.createElement("br", null), ' ', titleLine2), React__default.createElement(Typography, {
    variant: "subtitle1"
  }, description))), React__default.createElement("img", {
    className: classes.tongueImg,
    src: headerTongueImg,
    alt: "headerTongueImg"
  }));
};

const useStyles$k = styles.makeStyles(theme => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(3)
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%'
    }
  },
  grayBackground: {
    backgroundColor: colors.gray1
  },
  mainTitle: {
    fontSize: theme.typography.pxToRem(50),
    margin: theme.spacing(2, 0)
  },
  questionsSection: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2)
  }
}));

const FAQPageTemplate = ({
  className = '',
  mainTitle,
  questionsAndAnswers
}) => {
  const classes = useStyles$k();
  return React__default.createElement("div", {
    className: `${classes.root} ${className}`.trim()
  }, React__default.createElement("div", {
    className: classes.container
  }, React__default.createElement(Typography, {
    className: classes.mainTitle,
    variant: "h1",
    color: "primary"
  }, mainTitle), React__default.createElement("div", {
    className: classes.questionsSection
  }, questionsAndAnswers.map((qAndA, i) => React__default.createElement(FAQSection, Object.assign({
    className: `${i % 2 === 0 ? classes.grayBackground : ''}`,
    key: `faq-${removeEmptySpaces(qAndA.question)}`
  }, qAndA))))));
};

const useStyles$l = styles.makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(globalConstants.headerHeight),
    width: '100%'
  }
}));

const PageTemplate = ({
  children,
  className = '',
  ...props
}) => {
  const classes = useStyles$l();
  return React__default.createElement("div", Object.assign({
    className: `${classes.root} ${className}`.trim()
  }, props), children);
};

const defaultState = {
  provider: null,
  web3: null,
  account: null,
  networkName: null
};
const Web3Store = React.createContext({
  state: defaultState,
  actions: {
    setProvider: () => Promise.resolve()
  }
});

const getNetworkName = networkId => {
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

class Web3Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.setProvider = this.setProvider.bind(this);
  }

  setProvider(provider, onStateChanged) {
    try {
      const _this = this;

      return Promise.resolve(getWeb3(provider)).then(function (web3) {
        return Promise.resolve(web3.eth.getAccounts()).then(function (accounts) {
          let account;
          if (Array.isArray(accounts)) [account] = accounts;else account = accounts;
          return Promise.resolve(web3.eth.net.getId()).then(function (networkId) {
            function _temp2() {
              _this.setState({
                web3,
                provider,
                account,
                networkName: getNetworkName(networkId)
              }, () => onStateChanged && onStateChanged(account));
            }

            const _temp = function () {
              if (networkId === 1) return Promise.resolve(web3.eth.getChainId()).then(function (_web3$eth$getChainId) {
                networkId = _web3$eth$getChainId;
              });
            }();

            return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
          });
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }

  render() {
    const {
      provider,
      web3,
      account,
      networkName
    } = this.state;
    const {
      setProvider
    } = this;
    const {
      children
    } = this.props;
    return React__default.createElement(Web3Store.Provider, {
      value: {
        actions: {
          setProvider
        },
        state: {
          provider,
          web3,
          account,
          networkName
        }
      }
    }, children);
  }

}

var Web3Provider$1 = {
  Consumer: Web3Store.Consumer,
  Provider: Web3Provider
};

exports.Accordion = Accordion;
exports.Account = Account;
exports.AccountModal = AccountModal;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.FAQPageTemplate = FAQPageTemplate;
exports.FAQSection = FAQSection;
exports.FilterCheckboxCard = FilterCheckboxCard;
exports.Footer = Footer;
exports.FooterColumn = FooterColumn;
exports.Header = Header;
exports.HeaderTongue = HeaderTongue;
exports.LabeledCheckbox = LabeledCheckbox;
exports.LoginOption = LoginOption;
exports.Logo = Logo;
exports.LogoNavbar = LogoNavbar;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalDialogue = ModalDialogue;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.ModalTitle = ModalTitle;
exports.PageTemplate = PageTemplate;
exports.RangeSliderWithInputs = RangeSliderWithInputs;
exports.SwitchTabs = SwitchTabs;
exports.Typography = Typography;
exports.UnitsInput = UnitsInput;
exports.Web3Provider = Web3Provider$1;
exports.Web3Store = Web3Store;
exports.colors = colors;
exports.doneThumbsUpImg = doneThumbsUp;
exports.fonts = fonts;
exports.footerTongueImg = footerTongue;
exports.getWeb3 = getWeb3;
exports.globalConstants = globalConstants;
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
