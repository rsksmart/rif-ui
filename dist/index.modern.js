import React, { useState, createContext, Component } from 'react';
import { Button as Button$1, makeStyles as makeStyles$1, createStyles, Checkbox as Checkbox$1, Typography as Typography$1, Modal as Modal$1, ExpansionPanel as ExpansionPanel$1, ExpansionPanelSummary as ExpansionPanelSummary$1, ExpansionPanelDetails as ExpansionPanelDetails$1, FormControlLabel, Grid, Input, Tabs, Tab, AppBar, Toolbar, IconButton, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles, createMuiTheme, createStyles as createStyles$1 } from '@material-ui/core/styles';
import { CheckBoxSharp, CheckBoxOutlineBlankSharp } from '@material-ui/icons';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Web3 from 'web3';
import Tooltip from '@material-ui/core/Tooltip';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';
import { yellow, green } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { NavLink } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const shortenAddress = address => `${address.substr(0, 6)}...${address.substr(address.length - 4)}`;
const removeEmptySpaces = str => str.replace(/\s/g, '');

const useStyles = makeStyles(() => ({
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
  className: _className = '',
  block,
  shadow,
  rounded,
  children,
  ...rest
}) => {
  const classes = useStyles();
  return React.createElement(Button$1, Object.assign({
    className: `${rounded ? classes.rounded : ''}
        ${shadow ? '' : classes.noShadow}
        ${block ? classes.block : ''} ${_className}`.trim()
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
const theme = createMuiTheme({
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

const useStyles$1 = makeStyles$1(() => createStyles({
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
  const [isChecked, setIsChecked] = useState(!!checked);

  const handleChange = (event, newChecked) => {
    setIsChecked(newChecked);
    const {
      onChange
    } = props;
    if (onChange) onChange(event, newChecked);
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

const useStyles$2 = makeStyles$1(() => ({
  root: {
    padding: 5,
    margin: 5,
    width: '100%'
  }
}));

const LoginOption = ({
  className: _className = '',
  onClick,
  text,
  ...rest
}) => {
  const classes = useStyles$2();
  return React.createElement(Button, Object.assign({
    className: `${classes.root} ${_className}`,
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

var Logo = React.forwardRef((props, ref) => {
  const {
    alt = 'RIF OS',
    ...other
  } = props;
  return React.createElement("img", Object.assign({
    src: logoFullWhite,
    alt: alt,
    ref: ref
  }, other));
});

var LogoNavbar = React.forwardRef((props, ref) => {
  const {
    alt = 'RIF OS',
    height = '44px',
    ...other
  } = props;
  return React.createElement("img", Object.assign({
    src: logoFullWhite,
    alt: alt,
    height: height,
    ref: ref
  }, other));
});

const useStyles$3 = makeStyles(() => ({
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
  weight: _weight = 'normal',
  className: _className = '',
  children,
  ...rest
}) => {
  const classes = useStyles$3();
  return React.createElement(Typography$1, Object.assign({
    className: `${classes[_weight]} ${_className}`.trim()
  }, rest), children);
};

const useStyles$4 = makeStyles(theme => ({
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
  return React.createElement(Modal$1, Object.assign({}, rest), React.createElement("div", {
    className: classes.paper
  }, children));
};

const useStyles$5 = makeStyles(() => ({
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
  className: _className = ''
}) => {
  const classes = useStyles$5();
  return React.createElement("div", {
    className: `${classes.root} ${_className}`.trim()
  }, children);
};

const ModalTitle = ({
  children,
  ...rest
}) => React.createElement(Typography, Object.assign({
  variant: "h5"
}, rest), children);

const useStyles$6 = makeStyles(theme => ({
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
  className: _className = ''
}) => {
  const classes = useStyles$6();
  return React.createElement("div", {
    className: `${classes.root} ${_className}`.trim()
  }, children);
};

const useStyles$7 = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
    width: '100%'
  }
}));

const ModalBody = ({
  children,
  className: _className = ''
}) => {
  const classes = useStyles$7();
  return React.createElement("div", {
    className: `${classes.root} ${_className}`.trim()
  }, children);
};

const useStyles$8 = makeStyles(theme => createStyles$1({
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
  const [isExpanded, setIsExpanded] = useState(!!expanded);

  const onChange = () => setIsExpanded(!isExpanded);

  return React.createElement(ExpansionPanel, {
    className: classes.root,
    expanded: isExpanded,
    onChange: onChange
  }, React.createElement(ExpansionPanelSummary, {
    className: classes.expansionPanelSummary,
    expandIcon: React.createElement(ExpandMoreIcon, null),
    "aria-controls": `panel-${id}-content`,
    id: id
  }, React.createElement(Typography, {
    className: classes.heading
  }, title)), React.createElement(ExpansionPanelDetails, null, children));
};

var EProvider;

(function (EProvider) {
  EProvider["METAMASK"] = "Metamask";
  EProvider["LEDGER"] = "Ledger";
  EProvider["TREZOR"] = "Trezor";
  EProvider["LOCAL"] = "Localhost";
})(EProvider || (EProvider = {}));

function getWeb3(provider = EProvider.METAMASK) {
  return new Promise((resolve, reject) => {
    switch (provider) {
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

const AccountModal = ({
  setProvider,
  providers,
  open,
  handleClose,
  onProviderSet
}) => React.createElement(Modal, {
  open: open,
  onClose: handleClose,
  "aria-labelledby": "account-modal-title",
  "aria-describedby": "account-modal-description"
}, React.createElement(React.Fragment, null, React.createElement(ModalHeader, null, React.createElement(ModalTitle, null, "Connect a wallet to get started")), React.createElement(ModalBody, null, (providers || [EProvider.METAMASK, EProvider.LOCAL]).map(provider => React.createElement(LoginOption, {
  key: provider,
  text: provider,
  onClick: async () => {
    await setProvider(provider, onProviderSet);
  }
}))), React.createElement(ModalFooter, null, React.createElement(Button, {
  variant: "outlined",
  color: "secondary",
  block: true,
  onClick: handleClose
}, "Close"))));

const defaultOnRightNetworkMessage = 'You are on the right network';
const deaulftOnWrongNetworkMessage = 'You are on the wrong network';
const defaultNoNetworkMessage = 'You are not connected to any network';
var NetworkStatus;

(function (NetworkStatus) {
  NetworkStatus[NetworkStatus["NO_NETWORK"] = 1] = "NO_NETWORK";
  NetworkStatus[NetworkStatus["NETWORK_MISSMATCH"] = 2] = "NETWORK_MISSMATCH";
  NetworkStatus[NetworkStatus["RIGHT_NETWORK"] = 3] = "RIGHT_NETWORK";
})(NetworkStatus || (NetworkStatus = {}));

const getNetworkStatus = (currentNetwork, requiredNetwork) => {
  if (currentNetwork) {
    if (currentNetwork === requiredNetwork) {
      return NetworkStatus.RIGHT_NETWORK;
    }

    return NetworkStatus.NETWORK_MISSMATCH;
  }

  return NetworkStatus.NO_NETWORK;
};

const NetworkIndicator = ({
  iconClassName: _iconClassName = '',
  currentNetwork,
  requiredNetwork,
  onRightNetworkMessage,
  onWrongNetworkMessage,
  noNetworkMessage
}) => {
  const networkStatus = getNetworkStatus(currentNetwork, requiredNetwork);
  const iconPerNetworkStatus = new Map();
  iconPerNetworkStatus.set(NetworkStatus.NO_NETWORK, React.createElement(Tooltip, {
    title: noNetworkMessage || defaultNoNetworkMessage
  }, React.createElement(WarningIcon, {
    className: _iconClassName,
    style: {
      color: yellow[800]
    }
  })));
  iconPerNetworkStatus.set(NetworkStatus.NETWORK_MISSMATCH, React.createElement(Tooltip, {
    title: onWrongNetworkMessage || deaulftOnWrongNetworkMessage
  }, React.createElement(ErrorIcon, {
    className: _iconClassName,
    color: 'error'
  })));
  iconPerNetworkStatus.set(NetworkStatus.RIGHT_NETWORK, React.createElement(Tooltip, {
    title: onRightNetworkMessage || defaultOnRightNetworkMessage
  }, React.createElement(CheckCircleOutlineOutlinedIcon, {
    className: _iconClassName,
    style: {
      color: green[300]
    }
  })));
  return iconPerNetworkStatus.get(networkStatus);
};

const useStyles$9 = makeStyles(theme => ({
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
  providers,
  currentNetwork,
  requiredNetwork,
  onRightNetworkMessage,
  onWrongNetworkMessage,
  noNetworkMessage
}) => {
  const classes = useStyles$9();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return React.createElement(React.Fragment, null, React.createElement(Button, {
    onClick: handleOpen,
    className: classes.button,
    variant: "contained",
    color: "primary",
    rounded: true
  }, React.createElement(NetworkIndicator, {
    iconClassName: classes.networkIndicator,
    currentNetwork: currentNetwork,
    requiredNetwork: requiredNetwork,
    onRightNetworkMessage: onRightNetworkMessage,
    onWrongNetworkMessage: onWrongNetworkMessage,
    noNetworkMessage: noNetworkMessage
  }), React.createElement(Typography, {
    className: classes.accountText
  }, !web3 && 'Connect wallet', web3 && networkName, web3 && account && shortenAddress(account))), React.createElement(AccountModal, {
    open: open,
    handleClose: handleClose,
    networkName: networkName,
    web3: web3,
    onProviderSet: handleClose,
    setProvider: setProvider,
    providers: providers
  }));
};

const useStyles$a = makeStyles(theme => ({
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
  className: _className = '',
  initiallyExpanded,
  question,
  answer
}) => {
  const classes = useStyles$a();
  const [isExpanded, setIsExpanded] = useState(!!initiallyExpanded);

  const onChange = () => setIsExpanded(!isExpanded);

  return React.createElement(ExpansionPanel$1, {
    className: `${classes.root} ${_className}`.trim(),
    expanded: isExpanded,
    onChange: onChange
  }, React.createElement(ExpansionPanelSummary$1, {
    expandIcon: isExpanded ? React.createElement(RemoveIcon, null) : React.createElement(AddIcon, null)
  }, React.createElement(Typography, {
    className: `${classes.heading} ${isExpanded ? classes.headingExpanded : classes.headingCollapsed}`.trim()
  }, question)), React.createElement(ExpansionPanelDetails$1, {
    className: classes.panelDetails
  }, React.createElement("div", {
    className: classes.answerContainer
  }, React.createElement(Typography, {
    className: classes.answerText
  }, answer))));
};

const useStyles$b = makeStyles(() => ({
  root: {
    color: colors.gray4,
    width: '100%'
  }
}));

const LabeledCheckbox = ({
  labelText,
  labelClassName: _labelClassName = '',
  ...rest
}) => {
  const classes = useStyles$b();
  return React.createElement(FormControlLabel, {
    className: `${classes.root} ${_labelClassName.trim()}`,
    label: labelText,
    control: React.createElement(Checkbox, Object.assign({}, rest))
  });
};

const FilterCheckboxCard = ({
  className: _className = '',
  onClick,
  items
}) => React.createElement("div", {
  className: _className
}, items.map((item, i) => React.createElement(LabeledCheckbox, Object.assign({
  onClick: onClick,
  key: `labeledCheckbox-${item.id}` || `labeledCheckbox-${i}-${_className}`.trim(),
  labelClassName: item.labelClassName
}, item))));

const useStyles$c = makeStyles(() => ({
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
  className: _className = ''
}) => {
  const classes = useStyles$c();
  return React.createElement("div", {
    className: `${classes.root} ${_className}`.trim()
  }, React.createElement(Typography, {
    className: classes.footerTitle,
    variant: "subtitle1",
    color: "primary"
  }, title), links.map(link => {
    const key = removeEmptySpaces(link.title);

    if (link.isExternal) {
      const href = (link.to || '#').toString();
      return React.createElement("a", {
        className: classes.footerLink,
        target: link.target,
        color: "secondary",
        key: key,
        href: href
      }, link.title);
    }

    return React.createElement(NavLink, {
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
}) => React.createElement(Modal, Object.assign({}, props), React.createElement(React.Fragment, null, React.createElement(ModalHeader, null, React.createElement(ModalTitle, null, title)), React.createElement(ModalBody, null, children), React.createElement(ModalFooter, null, footer)));

const useStyles$d = makeStyles(theme => ({
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
      step,
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

const useStyles$e = makeStyles(() => ({
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

  return React.createElement("div", {
    className: `${classes.root} ${className}`.trim()
  }, React.createElement(Slider, Object.assign({
    value: [startValue, endValue]
  }, rest, {
    onChange: handleSliderChange
  })), React.createElement("div", {
    className: classes.inputsContainer
  }, React.createElement(UnitsInput, Object.assign({
    handleOnBlur: handleStartValueBlur,
    handleOnChange: handleStartInputChange
  }, getCommonInputValues(), {
    value: startValue
  })), React.createElement(Typography, {
    className: classes.toContainer,
    weight: "bold"
  }, "to"), React.createElement(UnitsInput, Object.assign({
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

const useStyles$f = makeStyles(() => ({
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

const useStyles$g = makeStyles(theme => ({
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
  className: _className = '',
  copyrightText,
  linksColumns,
  ...rest
}) => {
  const classes = useStyles$g();
  return React.createElement("footer", Object.assign({
    className: `${classes.root} ${_className}`.trim()
  }, rest), React.createElement("div", {
    className: classes.tongue
  }), React.createElement("div", {
    className: classes.footerContainer
  }, React.createElement("div", {
    className: classes.footerContent
  }, React.createElement(Grid, {
    container: true,
    direction: "row"
  }, React.createElement(Grid, {
    className: classes.logoColumn,
    item: true,
    xs: 12,
    md: 3,
    lg: 3
  }, React.createElement("img", {
    src: logoBlackAndBlue,
    height: "75px",
    alt: "logo"
  })), linksColumns.map(linkColumn => React.createElement(Grid, {
    key: `fc-${removeEmptySpaces(linkColumn.title)}`,
    item: true,
    xs: 12,
    sm: 12,
    md: 2,
    lg: 2
  }, React.createElement(FooterColumn, Object.assign({
    className: classes.linksColumn
  }, linkColumn))))), React.createElement("div", {
    className: classes.copyright
  }, React.createElement(Typography, {
    className: classes.copyrightContent
  }, copyrightText)))));
};

const useStyles$h = makeStyles(theme => ({
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
  return React.createElement(AppBar, {
    position: "fixed",
    className: classes.root
  }, React.createElement(Toolbar, null, React.createElement(NavLink, {
    to: hreflogo
  }, React.createElement(LogoNavbar, null)), React.createElement("div", {
    className: classes.itemsContainer
  }, !!items.length && items.map(navItem => React.createElement(Typography, {
    className: classes.navLinkContainer,
    key: `hi-${removeEmptySpaces(navItem.title)}`
  }, React.createElement(NavLink, Object.assign({
    className: classes.navLink,
    activeClassName: classes.activeNavlink
  }, navItem), navItem.title)))), React.createElement("div", {
    className: classes.loginContainer
  }, React.createElement(Login, null))));
};

const drawerWidth = 240;
const useStyles$i = makeStyles(theme => createStyles$1({
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
  const [open, setOpen] = useState(false);
  const Login = login;

  const toggleDrawer = isOpen => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(isOpen);
  };

  return React.createElement("div", {
    role: "presentation",
    onKeyDown: toggleDrawer(false)
  }, React.createElement(AppBar, {
    position: "fixed",
    className: `${classes.mobileAppBar} ${open ? classes.mobileAppBarShift : ''}`.trim()
  }, React.createElement(Toolbar, null, !open && React.createElement(React.Fragment, null, React.createElement(IconButton, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer(true)
  }, React.createElement(MenuIcon, null)), React.createElement(NavLink, {
    to: hreflogo
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
  }, React.createElement(ChevronLeftIcon, null))), React.createElement(Divider, null), React.createElement(List, null, !!items.length && items.map(headerItem => React.createElement(ListItem, {
    button: true,
    key: `him-${removeEmptySpaces(headerItem.title)}`
  }, React.createElement(NavLink, {
    to: headerItem.to,
    className: classes.mobileNavLink,
    activeClassName: classes.mobileNavLinkActive
  }, React.createElement(ListItemIcon, null, headerItem.icon), React.createElement(ListItemText, {
    primary: headerItem.title
  })))))));
};

const Header = ({
  hreflogo,
  items,
  login
}) => React.createElement(React.Fragment, null, React.createElement(Hidden, {
  smDown: true
}, React.createElement(HeaderDesktop, {
  hreflogo: hreflogo,
  items: items,
  login: login
})), React.createElement(Hidden, {
  mdUp: true
}, React.createElement(HeaderMobile, {
  hreflogo: hreflogo,
  items: items,
  login: login
})));

const useStyles$j = makeStyles(theme => ({
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
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: classes.textContainer
  }, React.createElement("div", {
    className: classes.textContent
  }, React.createElement(Typography, {
    className: classes.titleContent,
    variant: "h3",
    weight: "lightBold"
  }, titleLine1, React.createElement("br", null), ' ', titleLine2), React.createElement(Typography, {
    variant: "subtitle1"
  }, description))), React.createElement("img", {
    className: classes.tongueImg,
    src: headerTongueImg,
    alt: "headerTongueImg"
  }));
};

const useStyles$k = makeStyles(theme => ({
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
  className: _className = '',
  mainTitle,
  questionsAndAnswers
}) => {
  const classes = useStyles$k();
  return React.createElement("div", {
    className: `${classes.root} ${_className}`.trim()
  }, React.createElement("div", {
    className: classes.container
  }, React.createElement(Typography, {
    className: classes.mainTitle,
    variant: "h1",
    color: "primary"
  }, mainTitle), React.createElement("div", {
    className: classes.questionsSection
  }, questionsAndAnswers.map((qAndA, i) => React.createElement(FAQSection, Object.assign({
    className: `${i % 2 === 0 ? classes.grayBackground : ''}`,
    key: `faq-${removeEmptySpaces(qAndA.question)}`
  }, qAndA))))));
};

const useStyles$l = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(globalConstants.headerHeight),
    width: '100%'
  }
}));

const PageTemplate = ({
  children,
  className: _className = '',
  ...props
}) => {
  const classes = useStyles$l();
  return React.createElement("div", Object.assign({
    className: `${classes.root} ${_className}`.trim()
  }, props), children);
};

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
	}
];

const getNetworkInfo = async (networkId, chainId) => networksData.find(n => chainId ? n.networkId === networkId && n.chainId === chainId : n.networkId === networkId);

const defaultState = {
  provider: undefined,
  web3: undefined,
  account: undefined,
  networkInfo: undefined
};
const Web3Store = createContext({
  state: defaultState,
  actions: {
    setProvider: () => Promise.resolve(),
    registerOnAccountsChange: handleOnAccountsChange => {}
  }
});

const getAccountFromAccountsEth = accounts => {
  let account;
  if (Array.isArray(accounts)) [account] = accounts;else account = accounts;
  return account;
};

class Web3Provider extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.setProvider = this.setProvider.bind(this);
    this.registerOnAccountsChange = this.registerOnAccountsChange.bind(this);
  }

  async setProvider(provider, onStateChanged) {
    const web3 = await getWeb3(provider);
    const accounts = await web3.eth.getAccounts();
    const account = getAccountFromAccountsEth(accounts);
    let networkId;
    let chainId;

    try {
      networkId = await web3.eth.net.getId();

      if (networkId) {
        chainId = await web3.eth.getChainId();
      }
    } catch (error) {}

    let networkInfo;

    if (networkId) {
      try {
        networkInfo = await getNetworkInfo(networkId, chainId);
      } catch (error) {}
    }

    this.setState({
      web3,
      provider,
      account,
      networkInfo
    }, () => onStateChanged && onStateChanged(account));
  }

  registerOnAccountsChange(handleOnAccountsChange) {
    window.ethereum.on('accountsChanged', accounts => {
      const account = getAccountFromAccountsEth(accounts);

      if (account) {
        this.setState({
          account
        }, () => handleOnAccountsChange());
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
      registerOnAccountsChange
    } = this;
    const {
      children
    } = this.props;
    return React.createElement(Web3Store.Provider, {
      value: {
        actions: {
          setProvider,
          registerOnAccountsChange
        },
        state: {
          provider,
          web3,
          account,
          networkInfo
        }
      }
    }, children);
  }

}

var Web3Provider$1 = {
  Consumer: Web3Store.Consumer,
  Provider: Web3Provider
};

export { Accordion, Account, AccountModal, Button, Checkbox, EProvider, FAQPageTemplate, FAQSection, FilterCheckboxCard, Footer, FooterColumn, Header, HeaderTongue, LabeledCheckbox, LoginOption, Logo, LogoNavbar, Modal, ModalBody, ModalDialogue, ModalFooter, ModalHeader, ModalTitle, PageTemplate, RangeSliderWithInputs, SwitchTabs, Typography, UnitsInput, Web3Provider$1 as Web3Provider, Web3Store, colors, doneThumbsUp as doneThumbsUpImg, fonts, footerTongue as footerTongueImg, getNetworkInfo, getWeb3, globalConstants, headerTongueImg, logoBlackAndBlue, logoFullWhite, nameService as nameServiceImg, rifCom as rifComImg, rifDir as rifDirImg, rifGat as rifGatImg, rifMar as rifMarImg, rifPay as rifPayImg, rifSto as rifStoImg, rskLogo, shortenAddress, storage as storageImg, theme, tickWide as tickWideImg };
//# sourceMappingURL=index.modern.js.map
