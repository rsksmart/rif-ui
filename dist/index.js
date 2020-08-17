function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var styles = require('@material-ui/core/styles');
var icons = require('@material-ui/icons');
var AccordionDetails = _interopDefault(require('@material-ui/core/AccordionDetails'));
var AccordionSummary = _interopDefault(require('@material-ui/core/AccordionSummary'));
var ExpandMoreIcon = _interopDefault(require('@material-ui/icons/ExpandMore'));
var Tooltip = _interopDefault(require('@material-ui/core/Tooltip'));
var CheckCircleOutlineOutlinedIcon = _interopDefault(require('@material-ui/icons/CheckCircleOutlineOutlined'));
var ErrorIcon = _interopDefault(require('@material-ui/icons/Error'));
var WarningIcon = _interopDefault(require('@material-ui/icons/Warning'));
var colors$1 = require('@material-ui/core/colors');
var FileCopyIcon = _interopDefault(require('@material-ui/icons/FileCopy'));
var AddIcon = _interopDefault(require('@material-ui/icons/Add'));
var RemoveIcon = _interopDefault(require('@material-ui/icons/Remove'));
var reactRouterDom = require('react-router-dom');
var Slider = _interopDefault(require('@material-ui/core/Slider'));
var Hidden = _interopDefault(require('@material-ui/core/Hidden'));
var MenuIcon = _interopDefault(require('@material-ui/icons/Menu'));
var ChevronLeftIcon = _interopDefault(require('@material-ui/icons/ChevronLeft'));
var Web3 = _interopDefault(require('web3'));

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

var doneThumbsUp = require("./doneThumbsUp~bbkTwQsx.svg");

var footerTongue = require("./footerTongue~bbJNSCWG.svg");

var headerTongueImg = require("./headerTongue~VLlRBGMc.svg");

var tickWide = require("./tickWide~bmvsBAER.svg");

var metaMaskIconImg = require("./metaMask~bnTqJLxK.svg");

var nameService = require("./nameService~UWbtQqmT.svg");

var niftyIconImg = require("./nifty~RMIWdZeg.png");

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

var EProvider;

(function (EProvider) {
  EProvider["METAMASK"] = "Metamask";
  EProvider["NIFTY"] = "Nifty";
  EProvider["LEDGER"] = "Ledger";
  EProvider["TREZOR"] = "Trezor";
  EProvider["TRUST"] = "Trust";
  EProvider["LOCAL"] = "Localhost";
  EProvider["GO_WALLET"] = "GoWallet";
  EProvider["ALPHA_WALLET"] = "AlphaWallet";
  EProvider["STATUS"] = "status";
  EProvider["CIPHER"] = "cipher";
  EProvider["COINBASE"] = "coinbase";
  EProvider["MIST"] = "mist";
  EProvider["PARITY"] = "parity";
  EProvider["INFURA"] = "infura";
})(EProvider || (EProvider = {}));

const getProviderInfo = eProvider => {
  switch (eProvider) {
    case EProvider.METAMASK:
      return {
        name: 'MetaMask',
        eProvider,
        iconImg: metaMaskIconImg
      };

    case EProvider.NIFTY:
      return {
        name: 'Nifty',
        eProvider,
        iconImg: niftyIconImg
      };

    case EProvider.LEDGER:
      return {
        name: 'Ledger',
        eProvider
      };

    case EProvider.TREZOR:
      return {
        name: 'Trezor',
        eProvider
      };

    case EProvider.TRUST:
      return {
        name: 'Trust',
        eProvider
      };

    case EProvider.GO_WALLET:
      return {
        name: 'Go Wallet',
        eProvider
      };

    case EProvider.ALPHA_WALLET:
      return {
        name: 'Alpha Wallet',
        eProvider
      };

    case EProvider.STATUS:
      return {
        name: 'Status',
        eProvider
      };

    case EProvider.COINBASE:
      return {
        name: 'Coinbase',
        eProvider
      };

    case EProvider.MIST:
      return {
        name: 'Mist',
        eProvider
      };

    case EProvider.PARITY:
      return {
        name: 'Parity',
        eProvider
      };

    case EProvider.INFURA:
      return {
        name: 'Infura',
        eProvider
      };

    case EProvider.LOCAL:
      return {
        name: 'Localhost',
        eProvider
      };

    default:
      {
        throw new Error(`EProvider not implemented or unknown. Chosen provider ${eProvider}`);
      }
  }
};

const useStyles$2 = core.makeStyles(theme => ({
  root: {
    padding: 5,
    margin: 5,
    width: '100%'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxHeight: theme.spacing(5),
    justifyContent: 'center'
  },
  imageWrapper: {
    maxHeight: theme.spacing(4),
    marginRight: theme.spacing(2)
  }
}));

const LoginOption = ({
  className = '',
  onClick,
  providerInfo,
  ...rest
}) => {
  const classes = useStyles$2();
  const providerContent = React__default.createElement("div", {
    className: classes.content
  }, (providerInfo === null || providerInfo === void 0 ? void 0 : providerInfo.iconImg) && React__default.createElement("img", {
    className: classes.imageWrapper,
    src: providerInfo === null || providerInfo === void 0 ? void 0 : providerInfo.iconImg,
    alt: `${providerInfo === null || providerInfo === void 0 ? void 0 : providerInfo.name} icon`
  }), providerInfo === null || providerInfo === void 0 ? void 0 : providerInfo.name);

  const handleOnClick = () => {
    if (onClick) {
      return onClick();
    }

    return window.open('https://www.poa.network/for-users/nifty-wallet/getting-started', '_blank');
  };

  return React__default.createElement(Button, Object.assign({
    className: `${classes.root} ${className}`,
    block: true,
    rounded: true,
    variant: "outlined",
    color: "primary",
    onClick: handleOnClick
  }, rest), !!providerInfo && providerInfo.eProvider === EProvider.NIFTY && React__default.createElement(core.Tooltip, {
    arrow: true,
    title: "Please, make sure you only have one browser wallet enabled."
  }, providerContent), !!providerInfo && providerInfo.eProvider !== EProvider.NIFTY && providerContent, !providerInfo && React__default.createElement("div", {
    className: classes.content
  }, React__default.createElement("img", {
    className: classes.imageWrapper,
    src: niftyIconImg,
    alt: "Nifty wallet icon"
  }), "Install Nifty wallet"));
};

const Logo = ({
  alt = 'RIF OS logo',
  ...rest
}) => React__default.createElement("img", Object.assign({
  src: logoFullWhite,
  alt: alt
}, rest));

const LogoNavbar = ({
  alt = 'navbar logo',
  height = '44px',
  ...rest
}) => React__default.createElement("img", Object.assign({
  src: logoFullWhite,
  alt: alt,
  height: height
}, rest));

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
  accordionSummary: {
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

  return React__default.createElement(core.Accordion, {
    className: classes.root,
    expanded: isExpanded,
    onChange: onChange
  }, React__default.createElement(AccordionSummary, {
    className: classes.accordionSummary,
    expandIcon: React__default.createElement(ExpandMoreIcon, null),
    "aria-controls": `panel-${id}-content`,
    id: id
  }, React__default.createElement(Typography, {
    className: classes.heading
  }, title)), React__default.createElement(AccordionDetails, null, children));
};

var shortenString = function shortenString(str, largerThan, charsShownCount) {
  if (largerThan === void 0) {
    largerThan = 16;
  }

  if (charsShownCount === void 0) {
    charsShownCount = 6;
  }

  return str.length > largerThan ? str.substr(0, charsShownCount) + "..." + str.substr(str.length - 4) : str;
};

var removeEmptySpaces = function removeEmptySpaces(str) {
  return str.replace(/\s/g, '');
};

var maxSupportedNumber = 99999999999999;
var minSupportedNumber = 0.000001;

var validatedNumber = function validatedNumber(num) {
  if (num > 0) {
    if (num > maxSupportedNumber) return maxSupportedNumber;
    if (num < minSupportedNumber) return minSupportedNumber;
  }

  if (num < 0) {
    if (num < -maxSupportedNumber) return -maxSupportedNumber;
    if (num > -minSupportedNumber) return -minSupportedNumber;
  }

  return num;
};

const AccountModal = ({
  setProvider,
  availableProviders,
  open,
  handleClose,
  onProviderSet
}) => React__default.createElement(Modal, {
  open: open,
  onClose: handleClose,
  "aria-labelledby": "account-modal-title",
  "aria-describedby": "account-modal-description"
}, React__default.createElement(React__default.Fragment, null, React__default.createElement(ModalHeader, null, React__default.createElement(ModalTitle, null, "Connect a wallet to get started")), React__default.createElement(ModalBody, null, availableProviders && availableProviders.length && availableProviders.map(providerInfo => React__default.createElement(LoginOption, {
  providerInfo: providerInfo,
  key: providerInfo.eProvider,
  onClick: function () {
    try {
      return Promise.resolve(setProvider(providerInfo.eProvider, onProviderSet)).then(function () {});
    } catch (e) {
      return Promise.reject(e);
    }
  }
})), !availableProviders && React__default.createElement(LoginOption, null)), React__default.createElement(ModalFooter, null, React__default.createElement(Button, {
  variant: "outlined",
  color: "secondary",
  block: true,
  onClick: handleClose
}, "Close"))));

const defaultonCorrectNetworkMessage = 'You are on the right network';
const deaulftonNetworkMismatchMessage = 'You are on the wrong network';
const defaultNoNetworkMessage = 'You are not connected to any network';
var NetworkStatus;

(function (NetworkStatus) {
  NetworkStatus[NetworkStatus["NO_NETWORK"] = 1] = "NO_NETWORK";
  NetworkStatus[NetworkStatus["NETWORK_MISSMATCH"] = 2] = "NETWORK_MISSMATCH";
  NetworkStatus[NetworkStatus["CORRECT_NETWORK"] = 3] = "CORRECT_NETWORK";
})(NetworkStatus || (NetworkStatus = {}));

const getNetworkStatus = (currentNetworkId, requiredNetworkId) => {
  if (!currentNetworkId) return NetworkStatus.NO_NETWORK;
  if (currentNetworkId === requiredNetworkId) return NetworkStatus.CORRECT_NETWORK;
  return NetworkStatus.NETWORK_MISSMATCH;
};

const NetworkIndicator = ({
  iconClassName = '',
  currentNetworkId,
  requiredNetworkId,
  onCorrectNetworkMessage,
  onNetworkMismatchMessage,
  noNetworkMessage
}) => {
  const networkStatus = getNetworkStatus(currentNetworkId, requiredNetworkId);
  const iconPerNetworkStatus = new Map();
  iconPerNetworkStatus.set(NetworkStatus.NO_NETWORK, React__default.createElement(Tooltip, {
    title: noNetworkMessage || defaultNoNetworkMessage
  }, React__default.createElement(WarningIcon, {
    className: iconClassName,
    style: {
      color: colors$1.yellow[800]
    }
  })));
  iconPerNetworkStatus.set(NetworkStatus.NETWORK_MISSMATCH, React__default.createElement(Tooltip, {
    title: onNetworkMismatchMessage || deaulftonNetworkMismatchMessage
  }, React__default.createElement(ErrorIcon, {
    className: iconClassName,
    color: "error"
  })));
  iconPerNetworkStatus.set(NetworkStatus.CORRECT_NETWORK, React__default.createElement(Tooltip, {
    title: onCorrectNetworkMessage || defaultonCorrectNetworkMessage
  }, React__default.createElement(CheckCircleOutlineOutlinedIcon, {
    className: iconClassName,
    style: {
      color: colors$1.green[300]
    }
  })));
  return iconPerNetworkStatus.get(networkStatus);
};

const useStyles$9 = styles.makeStyles(theme => ({
  accountText: {
    fontSize: fonts.size.tiny,
    textAlign: 'center'
  },
  button: {
    border: `1px solid ${colors.white}`,
    '&:hover': {
      border: `1px solid ${colors.transparent}`
    }
  },
  networkIndicator: {
    marginRight: theme.spacing(1)
  }
}));

const Account = ({
  web3,
  networkName,
  account,
  setProvider,
  availableProviders,
  currentNetworkId,
  requiredNetworkId,
  onCorrectNetworkMessage,
  onNetworkMismatchMessage,
  noNetworkMessage
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
  }, !!requiredNetworkId && React__default.createElement(NetworkIndicator, {
    iconClassName: classes.networkIndicator,
    currentNetworkId: currentNetworkId,
    requiredNetworkId: requiredNetworkId,
    onCorrectNetworkMessage: onCorrectNetworkMessage,
    onNetworkMismatchMessage: onNetworkMismatchMessage,
    noNetworkMessage: noNetworkMessage
  }), React__default.createElement(Typography, {
    className: classes.accountText
  }, !web3 && 'Connect wallet', web3 && networkName, web3 && !account && 'Wrong Network', web3 && account && shortenString(account))), React__default.createElement(AccountModal, {
    open: open,
    handleClose: handleClose,
    networkName: networkName,
    web3: web3,
    onProviderSet: handleClose,
    setProvider: setProvider,
    availableProviders: availableProviders
  }));
};

const useStyles$a = core.makeStyles(() => ({
  tooltipTitle: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const CopyTextTooltip = ({
  displayElement,
  fullText
}) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const classes = useStyles$a();
  const tooltipContent = React__default.createElement("div", {
    className: classes.tooltipTitle
  }, React__default.createElement(FileCopyIcon, null), React__default.createElement(core.Typography, {
    variant: "body2"
  }, fullText));
  return React__default.createElement(Tooltip, {
    interactive: true,
    title: isCopied ? React__default.createElement(core.Typography, {
      variant: "body2"
    }, "Copied!") : tooltipContent,
    onClick: () => {
      navigator.clipboard.writeText(fullText).then(() => {
        setIsCopied(true);
      });
    },
    onClose: () => {
      setIsCopied(false);
    }
  }, displayElement);
};

const useStyles$b = styles.makeStyles(theme => ({
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
  const classes = useStyles$b();
  const [isExpanded, setIsExpanded] = React.useState(!!initiallyExpanded);

  const onChange = () => setIsExpanded(!isExpanded);

  return React__default.createElement(core.Accordion, {
    className: `${classes.root} ${className}`.trim(),
    expanded: isExpanded,
    onChange: onChange
  }, React__default.createElement(core.AccordionSummary, {
    expandIcon: isExpanded ? React__default.createElement(RemoveIcon, null) : React__default.createElement(AddIcon, null)
  }, React__default.createElement(Typography, {
    className: `${classes.heading} ${isExpanded ? classes.headingExpanded : classes.headingCollapsed}`.trim()
  }, question)), React__default.createElement(core.AccordionDetails, {
    className: classes.panelDetails
  }, React__default.createElement("div", {
    className: classes.answerContainer
  }, React__default.createElement(Typography, {
    className: classes.answerText
  }, answer))));
};

const useStyles$c = styles.makeStyles(() => ({
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
  const classes = useStyles$c();
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

const useStyles$d = styles.makeStyles(() => ({
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
  const classes = useStyles$d();
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

const useStyles$e = styles.makeStyles(theme => ({
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

const UnitsInput = ({
  maxValue,
  minValue,
  units,
  value,
  step = 1,
  handleOnBlur,
  handleOnChange,
  ...rest
}) => {
  const classes = useStyles$e();

  const handleChange = event => {
    const {
      target: {
        value: newValue
      }
    } = event;
    const numberValue = Number(newValue);
    if (numberValue || numberValue === 0) handleOnChange(event);
  };

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(core.Grid, {
    className: classes.root,
    container: true,
    spacing: 1
  }, React__default.createElement(core.Grid, {
    className: classes.inputContainer,
    item: true,
    xs: 8
  }, React__default.createElement(core.Input, Object.assign({
    className: classes.input,
    classes: {
      input: classes.input
    },
    value: value,
    onChange: handleChange,
    onBlur: handleOnBlur,
    inputProps: {
      step,
      min: minValue,
      max: maxValue,
      'aria-labelledby': 'input-slider'
    }
  }, rest))), React__default.createElement(core.Grid, {
    item: true,
    xs: 4,
    className: classes.unitsContainer
  }, React__default.createElement(Typography, {
    className: classes.units
  }, units))));
};

const useStyles$f = styles.makeStyles(() => ({
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
  const classes = useStyles$f();
  const maxValue = rest.max || endValue;
  const minValue = rest.min || startValue;
  const step = rest.step || 1;

  const handleStartInputChange = event => {
    const newStartValue = validatedNumber(Number(event.target.value)) || minValue;
    handleChange({
      min: newStartValue,
      max: endValue
    });
  };

  const handleEndInputChange = event => {
    const newEndValue = validatedNumber(Number(event.target.value)) || endValue;
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

const useStyles$g = styles.makeStyles(() => ({
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
  const classes = useStyles$g();

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

const useStyles$h = styles.makeStyles(theme => ({
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
  const classes = useStyles$h();
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

const useStyles$i = styles.makeStyles(theme => ({
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
  const classes = useStyles$i();
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
const useStyles$j = styles.makeStyles(theme => styles.createStyles({
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
  const classes = useStyles$j();
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

const useStyles$k = styles.makeStyles(theme => ({
  textContainer: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    display: 'flex',
    justifyContent: 'center',
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
    marginBottom: theme.spacing(1),
    fontSize: theme.spacing(5)
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
  const classes = useStyles$k();
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

const useStyles$l = styles.makeStyles(theme => ({
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
  const classes = useStyles$l();
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

const useStyles$m = styles.makeStyles(theme => ({
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
  const classes = useStyles$m();
  return React__default.createElement("div", Object.assign({
    className: `${classes.root} ${className}`.trim()
  }, props), children);
};

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

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

var networksData = [
	{
		name: "Ethereum Mainnet",
		chainId: 1,
		shortName: "eth",
		chain: "ETH",
		network: "mainnet",
		networkId: 1,
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18
		},
		rpc: [
			"https://mainnet.infura.io/v3/${INFURA_API_KEY}",
			"https://api.mycryptoapi.com/eth"
		],
		faucets: [
		],
		infoURL: "https://ethereum.org"
	},
	{
		name: "xDAI Chain",
		chainId: 100,
		shortName: "xdai",
		chain: "XDAI",
		network: "mainnet",
		networkId: 100,
		nativeCurrency: {
			name: "xDAI",
			symbol: "xDAI",
			decimals: 18
		},
		rpc: [
			"https://dai.poa.network"
		],
		faucets: [
		],
		infoURL: "https://forum.poa.network/c/xdai-chain"
	},
	{
		name: "EtherInc",
		chainId: 101,
		shortName: "eti",
		chain: "ETI",
		network: "mainnet",
		networkId: 1,
		nativeCurrency: {
			name: "EtherInc Ether",
			symbol: "ETI",
			decimals: 18
		},
		rpc: [
			"https://api.einc.io/jsonrpc/mainnet"
		],
		faucets: [
		],
		infoURL: "https://einc.io"
	},
	{
		name: "ThunderCore Mainnet",
		chainId: 108,
		shortName: "TT",
		chain: "TT",
		network: "mainnet",
		networkId: 108,
		nativeCurrency: {
			name: "ThunderCore Mainnet Ether",
			symbol: "TT",
			decimals: 18
		},
		rpc: [
			"https://mainnet-rpc.thundercore.com"
		],
		faucets: [
			"https://faucet.thundercore.com"
		],
		infoURL: "https://thundercore.com"
	},
	{
		name: "Metadium Mainnet",
		chainId: 11,
		shortName: "meta",
		chain: "META",
		network: "mainnet",
		networkId: 11,
		nativeCurrency: {
			name: "Metadium Mainnet Ether",
			symbol: "META",
			decimals: 18
		},
		rpc: [
			"https://api.metadium.com/prod"
		],
		faucets: [
		],
		infoURL: "https://metadium.com"
	},
	{
		name: "IPOS Network",
		chainId: 1122334455,
		shortName: "ipos",
		chain: "IPOS",
		network: "mainnet",
		networkId: 1122334455,
		nativeCurrency: {
			name: "IPOS Network Ether",
			symbol: "IPOS",
			decimals: 18
		},
		rpc: [
			"https://rpc.iposlab.com",
			"https://rpc2.iposlab.com"
		],
		faucets: [
		],
		infoURL: "https://iposlab.com"
	},
	{
		name: "Metadium Testnet",
		chainId: 12,
		shortName: "kal",
		chain: "META",
		network: "testnet",
		networkId: 12,
		nativeCurrency: {
			name: "Metadium Testnet Ether",
			symbol: "KAL",
			decimals: 18
		},
		rpc: [
			"https://api.metadium.com/dev"
		],
		faucets: [
		],
		infoURL: "https://metadium.com"
	},
	{
		name: "Fuse Mainnet",
		chainId: 122,
		shortName: "fuse",
		chain: "FUSE",
		network: "mainnet",
		networkId: 122,
		nativeCurrency: {
			name: "Fuse",
			symbol: "FUSE",
			decimals: 18
		},
		rpc: [
			"https://rpc.fuse.io"
		],
		faucets: [
		],
		infoURL: "https://fuse.io/"
	},
	{
		name: "Ether-1",
		chainId: 1313114,
		shortName: "etho",
		chain: "ETHO",
		network: "mainnet",
		networkId: 1313114,
		nativeCurrency: {
			name: "Ether-1 Ether",
			symbol: "ETHO",
			decimals: 18
		},
		rpc: [
			"https://rpc.ether1.org"
		],
		faucets: [
		],
		infoURL: "https://ether1.org"
	},
	{
		name: "Xerom",
		chainId: 1313500,
		shortName: "xero",
		chain: "XERO",
		network: "mainnet",
		networkId: 1313500,
		nativeCurrency: {
			name: "Xerom Ether",
			symbol: "XERO",
			decimals: 18
		},
		rpc: [
			"https://rpc.xerom.org"
		],
		faucets: [
		],
		infoURL: "https://xerom.org"
	},
	{
		name: "PepChain Churchill",
		chainId: 13371337,
		shortName: "tpep",
		chain: "PEP",
		network: "testnet",
		networkId: 13371337,
		nativeCurrency: {
			name: "PepChain Churchill Ether",
			symbol: "TPEP",
			decimals: 18
		},
		rpc: [
			"https://churchill-rpc.pepchain.io"
		],
		faucets: [
		],
		infoURL: "https://pepchain.io"
	},
	{
		name: "Lightstreams Testnet",
		chainId: 162,
		shortName: "tpht",
		chain: "PHT",
		network: "sirius",
		networkId: 162,
		nativeCurrency: {
			name: "Lightstreams PHT",
			symbol: "PHT",
			decimals: 18
		},
		rpc: [
			"https://node.sirius.lightstreams.io"
		],
		faucets: [
			"https://discuss.lightstreams.network/t/request-test-tokens"
		],
		infoURL: "https://explorer.sirius.lightstreams.io"
	},
	{
		name: "Atheios",
		chainId: 1620,
		shortName: "ath",
		chain: "ATH",
		network: "mainnet",
		networkId: 11235813,
		nativeCurrency: {
			name: "Atheios Ether",
			symbol: "ATH",
			decimals: 18
		},
		rpc: [
			"https://wallet.atheios.com:8797"
		],
		faucets: [
		],
		infoURL: "https://atheios.com"
	},
	{
		name: "Lightstreams Mainnet",
		chainId: 163,
		shortName: "pht",
		chain: "PHT",
		network: "mainnet",
		networkId: 163,
		nativeCurrency: {
			name: "Lightstreams PHT",
			symbol: "PHT",
			decimals: 18
		},
		rpc: [
			"https://node.mainnet.lightstreams.io"
		],
		faucets: [
		],
		infoURL: "https://explorer.lightstreams.io"
	},
	{
		name: "ThunderCore Testnet",
		chainId: 18,
		shortName: "TST",
		chain: "TST",
		network: "testnet",
		networkId: 18,
		nativeCurrency: {
			name: "ThunderCore Testnet Ether",
			symbol: "TST",
			decimals: 18
		},
		rpc: [
			"https://testnet-rpc.thundercore.com"
		],
		faucets: [
			"https://faucet-testnet.thundercore.com"
		],
		infoURL: "https://thundercore.com"
	},
	{
		name: "IOLite",
		chainId: 18289463,
		shortName: "ilt",
		chain: "ILT",
		network: "mainnet",
		networkId: 18289463,
		nativeCurrency: {
			name: "IOLite Ether",
			symbol: "ILT",
			decimals: 18
		},
		rpc: [
			"https://net.iolite.io"
		],
		faucets: [
		],
		infoURL: "https://iolite.io"
	},
	{
		name: "Teslafunds",
		chainId: 1856,
		shortName: "tsf",
		chain: "TSF",
		network: "mainnet",
		networkId: 1,
		nativeCurrency: {
			name: "Teslafunds Ether",
			symbol: "TSF",
			decimals: 18
		},
		rpc: [
			"https://tsfapi.europool.me"
		],
		faucets: [
		],
		infoURL: "https://teslafunds.io"
	},
	{
		name: "EtherGem",
		chainId: 1987,
		shortName: "egem",
		chain: "EGEM",
		network: "mainnet",
		networkId: 1987,
		nativeCurrency: {
			name: "EtherGem Ether",
			symbol: "EGEM",
			decimals: 18
		},
		rpc: [
			"https://jsonrpc.egem.io/custom"
		],
		faucets: [
		],
		infoURL: "https://egem.io"
	},
	{
		name: "Expanse Network",
		chainId: 2,
		shortName: "exp",
		chain: "EXP",
		network: "mainnet",
		networkId: 1,
		nativeCurrency: {
			name: "Expanse Network Ether",
			symbol: "EXP",
			decimals: 18
		},
		rpc: [
			"https://node.expanse.tech"
		],
		faucets: [
		],
		infoURL: "https://expanse.tech"
	},
	{
		name: "ELA-ETH-Sidechain Mainnet",
		chainId: 20,
		shortName: "ELAETHSC",
		chain: "ETH",
		network: "mainnet",
		networkId: 1,
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18
		},
		rpc: [
			"https://mainrpc.elaeth.io"
		],
		faucets: [
		],
		infoURL: "https://www.elastos.org/"
	},
	{
		name: "Akaroma",
		chainId: 200625,
		shortName: "aka",
		chain: "AKA",
		network: "mainnet",
		networkId: 200625,
		nativeCurrency: {
			name: "Akaroma Ether",
			symbol: "AKA",
			decimals: 18
		},
		rpc: [
			"https://remote.akroma.io"
		],
		faucets: [
		],
		infoURL: "https://akroma.io"
	},
	{
		name: "ELA-ETH-Sidechain Testnet",
		chainId: 21,
		shortName: "ELAETHSC",
		chain: "ETH",
		network: "testnet",
		networkId: 2,
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18
		},
		rpc: [
			"https://rpc.elaeth.io"
		],
		faucets: [
			"https://faucet.elaeth.io/"
		],
		infoURL: "https://elaeth.io/"
	},
	{
		name: "Freight Trust Network",
		chainId: 211,
		shortName: "EDI",
		chain: "EDI",
		network: "freight & trade network",
		networkId: 0,
		nativeCurrency: {
			name: "Freight Trust Native",
			symbol: "0xF",
			decimals: 18
		},
		rpc: [
			"http://13.57.207.168:3435",
			"https://app.freighttrust.net/ftn/${API_KEY}"
		],
		faucets: [
			"http://faucet.freight.sh"
		],
		infoURL: "https://freighttrust.com"
	},
	{
		name: "Webchain",
		chainId: 24484,
		shortName: "web",
		chain: "WEB",
		network: "mainnet",
		networkId: 37129,
		nativeCurrency: {
			name: "Webchain Ether",
			symbol: "WEB",
			decimals: 18
		},
		rpc: [
			"https://node1.webchain.network"
		],
		faucets: [
		],
		infoURL: "https://webchain.network"
	},
	{
		name: "ARTIS sigma1",
		chainId: 246529,
		shortName: "ats",
		chain: "ARTIS",
		network: "sigma1",
		networkId: 246529,
		nativeCurrency: {
			name: "ARTIS sigma1 Ether",
			symbol: "ATS",
			decimals: 18
		},
		rpc: [
			"https://rpc.sigma1.artis.network"
		],
		faucets: [
		],
		infoURL: "https://artis.eco"
	},
	{
		name: "ARTIS tau1",
		chainId: 246785,
		shortName: "ats",
		chain: "ARTIS",
		network: "tau1",
		networkId: 246785,
		nativeCurrency: {
			name: "ARTIS tau1 Ether",
			symbol: "ATS",
			decimals: 18
		},
		rpc: [
			"https://rpc.tau1.artis.network"
		],
		faucets: [
		],
		infoURL: "https://artis.network"
	},
	{
		name: "Fantom Opera",
		chainId: 250,
		shortName: "ftm",
		chain: "FTM",
		network: "mainnet",
		networkId: 250,
		nativeCurrency: {
			name: "Fantom",
			symbol: "FTM",
			decimals: 18
		},
		rpc: [
			"https://rpc.fantom.network",
			"https://fantomscan.io/rpc"
		],
		faucets: [
		],
		infoURL: "https://fantom.foundation"
	},
	{
		name: "High Performance Blockchain",
		chainId: 269,
		shortName: "hpb",
		chain: "HPB",
		network: "mainnet",
		networkId: 100,
		nativeCurrency: {
			name: "High Performance Blockchain Ether",
			symbol: "HPB",
			decimals: 18
		},
		rpc: [
			"https://node.hpb.blue"
		],
		faucets: [
		],
		infoURL: "https://hpb.io"
	},
	{
		name: "Auxilium Network Mainnet",
		chainId: 28945486,
		shortName: "aux",
		chain: "AUX",
		network: "mainnet",
		networkId: 28945486,
		nativeCurrency: {
			name: "Auxilium coin",
			symbol: "AUX",
			decimals: 18
		},
		rpc: [
			"https://rpc.auxilium.global"
		],
		faucets: [
		],
		infoURL: "https://auxilium.global"
	},
	{
		name: "Ethereum Testnet Ropsten",
		chainId: 3,
		shortName: "rop",
		chain: "ETH",
		network: "ropsten",
		networkId: 3,
		nativeCurrency: {
			name: "Ropsten Ether",
			symbol: "ROP",
			decimals: 18
		},
		rpc: [
			"https://ropsten.infura.io/v3/${INFURA_API_KEY}"
		],
		faucets: [
			"https://faucet.ropsten.be?${ADDRESS}"
		],
		infoURL: "https://github.com/ethereum/ropsten"
	},
	{
		name: "RSK Mainnet",
		chainId: 30,
		shortName: "rsk",
		chain: "RSK",
		network: "mainnet",
		networkId: 30,
		nativeCurrency: {
			name: "RSK Mainnet Ether",
			symbol: "RSK",
			decimals: 18
		},
		rpc: [
			"https://public-node.rsk.co",
			"https://mycrypto.rsk.co"
		],
		faucets: [
		],
		infoURL: "https://rsk.co"
	},
	{
		name: "RSK Testnet",
		chainId: 31,
		shortName: "trsk",
		chain: "RSK",
		network: "testnet",
		networkId: 31,
		nativeCurrency: {
			name: "RSK Testnet Ether",
			symbol: "TRSK",
			decimals: 18
		},
		rpc: [
			"https://public-node.testnet.rsk.co",
			"https://mycrypto.testnet.rsk.co"
		],
		faucets: [
			"https://faucet.testnet.rsk.co"
		],
		infoURL: "https://rsk.co"
	},
	{
		name: "Ethersocial Network",
		chainId: 31102,
		shortName: "esn",
		chain: "ESN",
		network: "mainnet",
		networkId: 1,
		nativeCurrency: {
			name: "Ethersocial Network Ether",
			symbol: "ESN",
			decimals: 18
		},
		rpc: [
			"https://api.esn.gonspool.com"
		],
		faucets: [
		],
		infoURL: "https://ethersocial.org"
	},
	{
		name: "Pirl",
		chainId: 3125659152,
		shortName: "pirl",
		chain: "PIRL",
		network: "mainnet",
		networkId: 3125659152,
		nativeCurrency: {
			name: "Pirl Ether",
			symbol: "PIRL",
			decimals: 18
		},
		rpc: [
			"https://wallrpc.pirl.io"
		],
		faucets: [
		],
		infoURL: "https://pirl.io"
	},
	{
		name: "Lisinski",
		chainId: 385,
		shortName: "lisinski",
		chain: "CRO",
		network: "mainnet",
		networkId: 385,
		nativeCurrency: {
			name: "Lisinski Ether",
			symbol: "LISINSKI",
			decimals: 18
		},
		rpc: [
			"https://rpc-bitfalls1.lisinski.online"
		],
		faucets: [
			"https://pipa.lisinski.online"
		],
		infoURL: "https://lisinski.online"
	},
	{
		name: "Energi Mainnet",
		chainId: 39797,
		shortName: "nrg",
		chain: "NRG",
		network: "mainnet",
		networkId: 39797,
		nativeCurrency: {
			name: "Energi",
			symbol: "NRG",
			decimals: 18
		},
		rpc: [
			"https://nodeapi.gen3.energi.network"
		],
		faucets: [
		],
		infoURL: "https://www.energi.world/"
	},
	{
		name: "Ethereum Testnet Rinkeby",
		chainId: 4,
		shortName: "rin",
		chain: "ETH",
		network: "rinkeby",
		networkId: 4,
		nativeCurrency: {
			name: "Rinkeby Ether",
			symbol: "RIN",
			decimals: 18
		},
		rpc: [
			"https://rinkeby.infura.io/v3/${INFURA_API_KEY}"
		],
		faucets: [
			"https://faucet.rinkeby.io"
		],
		infoURL: "https://www.rinkeby.io"
	},
	{
		name: "Ethereum Testnet Kovan",
		chainId: 42,
		shortName: "kov",
		chain: "ETH",
		network: "kovan",
		networkId: 42,
		nativeCurrency: {
			name: "Kovan Ether",
			symbol: "KOV",
			decimals: 18
		},
		rpc: [
			"https://kovan.infura.io/v3/${INFURA_API_KEY}"
		],
		faucets: [
			"https://faucet.kovan.network",
			"https://gitter.im/kovan-testnet/faucet"
		],
		infoURL: "https://kovan-testnet.github.io/website"
	},
	{
		name: "Athereum",
		chainId: 43110,
		shortName: "ath",
		chain: "ATH",
		network: "athereum",
		networkId: 43110,
		nativeCurrency: {
			name: "Athereum Ether",
			symbol: "ATH",
			decimals: 18
		},
		rpc: [
			"https://ava.network:21015/ext/evm/rpc"
		],
		faucets: [
			"http://athfaucet.ava.network//?address=${ADDRESS}"
		],
		infoURL: "https://athereum.ava.network"
	},
	{
		name: "Energi Testnet",
		chainId: 49797,
		shortName: "tnrg",
		chain: "NRG",
		network: "testnet",
		networkId: 49797,
		nativeCurrency: {
			name: "Energi",
			symbol: "tNRG",
			decimals: 18
		},
		rpc: [
			"https://nodeapi.test3.energi.network"
		],
		faucets: [
		],
		infoURL: "https://www.energi.world/"
	},
	{
		name: "Ethereum Testnet Görli",
		chainId: 5,
		shortName: "gor",
		chain: "ETH",
		network: "goerli",
		networkId: 5,
		nativeCurrency: {
			name: "Görli Ether",
			symbol: "GOR",
			decimals: 18
		},
		rpc: [
			"https://rpc.goerli.mudit.blog/",
			"https://rpc.slock.it/goerli ",
			"https://goerli.prylabs.net/"
		],
		faucets: [
			"https://goerli-faucet.slock.it/?address=${ADDRESS}",
			"https://faucet.goerli.mudit.blog"
		],
		infoURL: "https://goerli.net/#about"
	},
	{
		name: "Ethereum Classic Testnet Kotti",
		chainId: 6,
		shortName: "kot",
		chain: "ETC",
		network: "kotti",
		networkId: 6,
		nativeCurrency: {
			name: "Kotti Ether",
			symbol: "KOT",
			decimals: 18
		},
		rpc: [
		],
		faucets: [
		],
		infoURL: "https://explorer.jade.builders/?network=kotti"
	},
	{
		name: "GoChain",
		chainId: 60,
		shortName: "go",
		chain: "GO",
		network: "mainnet",
		networkId: 60,
		nativeCurrency: {
			name: "GoChain Ether",
			symbol: "GO",
			decimals: 18
		},
		rpc: [
			"https://rpc.gochain.io"
		],
		faucets: [
		],
		infoURL: "https://gochain.io"
	},
	{
		name: "Ethereum Classic Mainnet",
		chainId: 61,
		shortName: "etc",
		chain: "ETC",
		network: "mainnet",
		networkId: 1,
		nativeCurrency: {
			name: "Ethereum Classic Ether",
			symbol: "ETC",
			decimals: 18
		},
		rpc: [
			"https://ethereumclassic.network"
		],
		faucets: [
		],
		infoURL: "https://ethereumclassic.org"
	},
	{
		name: "Aquachain",
		chainId: 61717561,
		shortName: "aqua",
		chain: "AQUA",
		network: "mainnet",
		networkId: 61717561,
		nativeCurrency: {
			name: "Aquachain Ether",
			symbol: "AQUA",
			decimals: 18
		},
		rpc: [
			"https://c.onical.org",
			"https://tx.aquacha.in/api"
		],
		faucets: [
			"https://aquacha.in/faucet"
		],
		infoURL: "https://aquachain.github.io"
	},
	{
		name: "Ethereum Classic Testnet Morden",
		chainId: 62,
		shortName: "tetc",
		chain: "ETC",
		network: "testnet",
		networkId: 2,
		nativeCurrency: {
			name: "Ethereum Classic Testnet Ether",
			symbol: "TETC",
			decimals: 18
		},
		rpc: [
		],
		faucets: [
		],
		infoURL: "https://ethereumclassic.org"
	},
	{
		name: "Ethereum Classic Testnet Mordor",
		chainId: 63,
		shortName: "metc",
		chain: "ETC",
		network: "testnet",
		networkId: 7,
		nativeCurrency: {
			name: "Mordor Classic Testnet Ether",
			symbol: "METC",
			decimals: 18
		},
		rpc: [
		],
		faucets: [
		],
		infoURL: "https://github.com/eth-classic/mordor/"
	},
	{
		name: "Ellaism",
		chainId: 64,
		shortName: "ella",
		chain: "ELLA",
		network: "mainnet",
		networkId: 64,
		nativeCurrency: {
			name: "Ellaism Ether",
			symbol: "ELLA",
			decimals: 18
		},
		rpc: [
			"https://jsonrpc.ellaism.org"
		],
		faucets: [
		],
		infoURL: "https://ellaism.org"
	},
	{
		name: "ThaiChain",
		chainId: 7,
		shortName: "tch",
		chain: "TCH",
		network: "mainnet",
		networkId: 7,
		nativeCurrency: {
			name: "ThaiChain Ether",
			symbol: "TCH",
			decimals: 18
		},
		rpc: [
			"https://rpc.dome.cloud"
		],
		faucets: [
		],
		infoURL: "https://thaichain.io"
	},
	{
		name: "Mix",
		chainId: 76,
		shortName: "mix",
		chain: "MIX",
		network: "mainnet",
		networkId: 76,
		nativeCurrency: {
			name: "Mix Ether",
			symbol: "MIX",
			decimals: 18
		},
		rpc: [
			"https://rpc2.mix-blockchain.org:8647"
		],
		faucets: [
		],
		infoURL: "https://mix-blockchain.org"
	},
	{
		name: "POA Network Sokol",
		chainId: 77,
		shortName: "poa",
		chain: "POA",
		network: "sokol",
		networkId: 77,
		nativeCurrency: {
			name: "POA Sokol Ether",
			symbol: "POA",
			decimals: 18
		},
		rpc: [
			"https://sokol.poa.network"
		],
		faucets: [
			"https://faucet-sokol.herokuapp.com"
		],
		infoURL: "https://poa.network"
	},
	{
		name: "Musicoin",
		chainId: 7762959,
		shortName: "music",
		chain: "MUSIC",
		network: "mainnet",
		networkId: 7762959,
		nativeCurrency: {
			name: "Musicoin",
			symbol: "MUSIC",
			decimals: 18
		},
		rpc: [
			"https://mewapi.musicoin.tw"
		],
		faucets: [
		],
		infoURL: "https://musicoin.tw"
	},
	{
		name: "Firenze test network",
		chainId: 78110,
		shortName: "firenze",
		chain: "ETH",
		network: "testnet",
		networkId: 78110,
		nativeCurrency: {
			name: "Firenze Ether",
			symbol: "FIN",
			decimals: 18
		},
		rpc: [
			"https://ethnode.primusmoney.com/firenze"
		],
		faucets: [
		],
		infoURL: "https://primusmoney.com"
	},
	{
		name: "Ubiq Network Mainnet",
		chainId: 8,
		shortName: "ubq",
		chain: "UBQ",
		network: "mainnet",
		networkId: 88,
		nativeCurrency: {
			name: "Ubiq Ether",
			symbol: "UBQ",
			decimals: 18
		},
		rpc: [
			"https://rpc.octano.dev",
			"https://pyrus2.ubiqscan.io"
		],
		faucets: [
		],
		infoURL: "https://ubiqsmart.com"
	},
	{
		name: "Callisto Mainnet",
		chainId: 820,
		shortName: "clo",
		chain: "CLO",
		network: "mainnet",
		networkId: 1,
		nativeCurrency: {
			name: "Callisto Mainnet Ether",
			symbol: "CLO",
			decimals: 18
		},
		rpc: [
			"https://clo-geth.0xinfra.com"
		],
		faucets: [
		],
		infoURL: "https://callisto.network"
	},
	{
		name: "Callisto Testnet",
		chainId: 821,
		shortName: "tclo",
		chain: "CLO",
		network: "testnet",
		networkId: 2,
		nativeCurrency: {
			name: "Callisto Testnet Ether",
			symbol: "TCLO",
			decimals: 18
		},
		rpc: [
		],
		faucets: [
		],
		infoURL: "https://callisto.network"
	},
	{
		name: "TomoChain",
		chainId: 88,
		shortName: "tomo",
		chain: "TOMO",
		network: "mainnet",
		networkId: 88,
		nativeCurrency: {
			name: "TomoChain Ether",
			symbol: "TOMO",
			decimals: 18
		},
		rpc: [
			"https://core.tomocoin.io"
		],
		faucets: [
		],
		infoURL: "https://tomocoin.io"
	},
	{
		name: "Ubiq Network Testnet",
		chainId: 9,
		shortName: "tubq",
		chain: "UBQ",
		network: "mainnet",
		networkId: 2,
		nativeCurrency: {
			name: "Ubiq Testnet Ether",
			symbol: "TUBQ",
			decimals: 18
		},
		rpc: [
		],
		faucets: [
		],
		infoURL: "https://ethersocial.org"
	},
	{
		name: "Nepal Blockchain Network",
		chainId: 977,
		shortName: "yeti",
		chain: "YETI",
		network: "mainnet",
		networkId: 977,
		nativeCurrency: {
			name: "Nepal Blockchain Network Ether",
			symbol: "YETI",
			decimals: 18
		},
		rpc: [
			"https://api.nepalblockchain.dev",
			"https://api.nepalblockchain.network"
		],
		faucets: [
			"https://faucet.nepalblockchain.network"
		],
		infoURL: "https://nepalblockchain.network"
	},
	{
		name: "POA Network Core",
		chainId: 99,
		shortName: "skl",
		chain: "POA",
		network: "core",
		networkId: 99,
		nativeCurrency: {
			name: "POA Network Core Ether",
			symbol: "SKL",
			decimals: 18
		},
		rpc: [
			"https://core.poa.network"
		],
		faucets: [
		],
		infoURL: "https://poa.network"
	},
	{
		name: "Local Tests",
		chainId: 1337,
		shortName: "test",
		chain: "localtests",
		network: "localTests",
		networkId: 8545,
		nativeCurrency: {
			name: "Local Tests Ether",
			symbol: "LT",
			decimals: 18
		},
		rpc: [
			"http://localhost:8545"
		],
		faucets: [
			"http://localhost:8545"
		],
		infoURL: "http://localhost:8545"
	}
];

function getWeb3(provider = EProvider.METAMASK) {
  return new Promise((resolve, reject) => {
    switch (provider) {
      case EProvider.NIFTY:
      case EProvider.METAMASK:
        {
          if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            window.ethereum.enable().then(() => resolve(web3)).catch(reject);
          } else if (window.web3) {
            resolve(new Web3(window.web3.currentProvider));
          } else reject(new Error('No injected web3 found'));

          break;
        }

      case EProvider.LOCAL:
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
const getNetworkInfo = (networkId, chainId) => networksData.find(n => chainId ? n.networkId === networkId && n.chainId === chainId : n.networkId === networkId);
const getNetworkInfoFromWeb3 = function (web3) {
  try {
    function _temp3() {
      let networkInfo;

      if (networkId) {
        try {
          networkInfo = getNetworkInfo(networkId, chainId);
        } catch (error) {}
      }

      return networkInfo;
    }

    let networkId;
    let chainId;

    const _temp2 = _catch(function () {
      return Promise.resolve(web3.eth.net.getId()).then(function (_web3$eth$net$getId) {
        networkId = _web3$eth$net$getId;

        const _temp = function () {
          if (networkId) {
            return Promise.resolve(web3.eth.getChainId()).then(function (_web3$eth$getChainId) {
              chainId = _web3$eth$getChainId;
            });
          }
        }();

        if (_temp && _temp.then) return _temp.then(function () {});
      });
    }, function () {});

    return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(_temp3) : _temp3(_temp2));
  } catch (e) {
    return Promise.reject(e);
  }
};
const getAvailableProviders = () => {
  const result = [];
  if (!window.web3) return undefined;
  const currentProvider = window.web3.currentProvider;

  if (currentProvider.isMetaMask) {
    result.push(currentProvider.isNiftyWallet ? getProviderInfo(EProvider.NIFTY) : getProviderInfo(EProvider.METAMASK));
  }

  if (currentProvider.isTrust) result.push(getProviderInfo(EProvider.TRUST));
  if (currentProvider.isGoWallet) result.push(getProviderInfo(EProvider.GO_WALLET));
  if (currentProvider.isAlphaWallet) result.push(getProviderInfo(EProvider.ALPHA_WALLET));
  if (currentProvider.isStatus) result.push(getProviderInfo(EProvider.STATUS));
  if (currentProvider.isToshi) result.push(getProviderInfo(EProvider.COINBASE));
  if (typeof window.__CIPHER__ !== 'undefined') result.push(getProviderInfo(EProvider.CIPHER));
  if (currentProvider.constructor.name === 'EthereumProvider') result.push(getProviderInfo(EProvider.MIST));
  if (currentProvider.constructor.name === 'Web3FrameProvider') result.push(getProviderInfo(EProvider.PARITY));
  if (currentProvider.host && currentProvider.host.indexOf('infura') !== -1) result.push(getProviderInfo(EProvider.INFURA));
  if (currentProvider.host && currentProvider.host.indexOf('localhost') !== -1) result.push(getProviderInfo(EProvider.LOCAL));
  return result;
};

const defaultState = {
  provider: undefined,
  web3: undefined,
  account: undefined,
  networkInfo: undefined
};
const Web3Store = React.createContext({
  state: defaultState,
  actions: {
    setProvider: () => Promise.resolve(),
    onConnectedNetworkChange: () => 0,
    onConnectedAccountChange: () => 0
  },
  requiredNetworkId: undefined,
  requiredChainId: undefined
});

const getAccountFromEthAccounts = accounts => {
  let account;
  if (Array.isArray(accounts)) [account] = accounts;else account = accounts;
  return account;
};

const shouldReadAccount = (requiredNetworkId, requiredChainId, networkInfo) => {
  if (!requiredNetworkId) return true;

  if (requiredNetworkId === (networkInfo === null || networkInfo === void 0 ? void 0 : networkInfo.networkId)) {
    if (requiredChainId) return requiredChainId === (networkInfo === null || networkInfo === void 0 ? void 0 : networkInfo.chainId);
    return true;
  }

  return false;
};

class Web3Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.requiredNetworkId = props.requiredNetworkId;
    this.requiredChainId = props.requiredChainId;
    this.onConnectedNetworkChange = props.actions.onConnectedNetworkChange;
    this.onConnectedAccountChange = props.actions.onConnectedAccountChange;
    this.setProvider = this.setProvider.bind(this);
    this.initialize();
  }

  setProvider(provider, onStateChanged) {
    try {
      const _this = this;

      return Promise.resolve(getWeb3(provider)).then(function (web3) {
        return Promise.resolve(web3.eth.getAccounts()).then(function (accounts) {
          return Promise.resolve(getNetworkInfoFromWeb3(web3)).then(function (networkInfo) {
            const shouldSetAccount = shouldReadAccount(_this.requiredNetworkId, _this.requiredChainId, networkInfo);
            const account = shouldSetAccount ? getAccountFromEthAccounts(accounts) : undefined;

            _this.setState({
              web3,
              provider,
              account,
              networkInfo
            }, () => onStateChanged && onStateChanged(account));
          });
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }

  initialize() {
    const _this2 = this;

    if (!window.ethereum) {
      return;
    }

    this.availableProviders = getAvailableProviders();
    window.ethereum.autoRefreshOnNetworkChange = false;
    window.ethereum.on('networkChanged', function (_netId) {
      try {
        const {
          networkInfo
        } = _this2.state;
        if (!networkInfo) return Promise.resolve();
        const {
          provider
        } = _this2.state;
        return Promise.resolve(getWeb3(provider)).then(function (web3) {
          return Promise.resolve(web3.eth.getAccounts()).then(function (accounts) {
            return Promise.resolve(getNetworkInfoFromWeb3(web3)).then(function (newNetworkInfo) {
              const shouldSetAccount = shouldReadAccount(_this2.requiredNetworkId, _this2.requiredChainId, newNetworkInfo);
              const account = shouldSetAccount ? getAccountFromEthAccounts(accounts) : undefined;

              _this2.setState({
                networkInfo: newNetworkInfo,
                account
              }, () => _this2.onConnectedNetworkChange && _this2.onConnectedNetworkChange());
            });
          });
        });
      } catch (e) {
        return Promise.reject(e);
      }
    });
    window.ethereum.on('accountsChanged', accounts => {
      const {
        networkInfo
      } = this.state;
      if (!networkInfo) return;
      const shouldSetAccount = shouldReadAccount(this.requiredNetworkId, this.requiredChainId, networkInfo);

      if (shouldSetAccount) {
        const account = getAccountFromEthAccounts(accounts);

        if (account) {
          this.setState({
            account
          }, () => this.onConnectedAccountChange && this.onConnectedAccountChange());
        }
      }
    });
  }

  render() {
    const {
      provider,
      web3,
      account,
      networkInfo
    } = this.state;
    const {
      setProvider,
      onConnectedNetworkChange,
      onConnectedAccountChange,
      availableProviders
    } = this;
    const {
      children
    } = this.props;
    return React__default.createElement(Web3Store.Provider, {
      value: {
        actions: {
          setProvider,
          onConnectedNetworkChange,
          onConnectedAccountChange
        },
        state: {
          provider,
          web3,
          account,
          networkInfo
        },
        availableProviders
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
exports.CopyTextTooltip = CopyTextTooltip;
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
exports.globalConstants = globalConstants;
exports.headerTongueImg = headerTongueImg;
exports.logoBlackAndBlue = logoBlackAndBlue;
exports.logoFullWhite = logoFullWhite;
exports.maxSupportedNumber = maxSupportedNumber;
exports.metaMaskIconImg = metaMaskIconImg;
exports.minSupportedNumber = minSupportedNumber;
exports.nameServiceImg = nameService;
exports.niftyIconImg = niftyIconImg;
exports.removeEmptySpaces = removeEmptySpaces;
exports.rifComImg = rifCom;
exports.rifDirImg = rifDir;
exports.rifGatImg = rifGat;
exports.rifMarImg = rifMar;
exports.rifPayImg = rifPay;
exports.rifStoImg = rifSto;
exports.rskLogo = rskLogo;
exports.shortenString = shortenString;
exports.storageImg = storage;
exports.theme = theme;
exports.tickWideImg = tickWide;
exports.validatedNumber = validatedNumber;
//# sourceMappingURL=index.js.map
