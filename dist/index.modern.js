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
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';
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
}) => {
  return React.createElement(Modal, {
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
};

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
  currentNetwork,
  requiredNetwork,
  onRightNetworkMessage,
  onWrongNetworkMessage,
  noNetworkMessage
}) => {
  console.log('****************************************************************');
  console.log('current network: ', currentNetwork);
  console.log('****************************************************************');
  const networkStatus = getNetworkStatus(currentNetwork, requiredNetwork);
  const iconPerNetworkStatus = {};
  iconPerNetworkStatus[NetworkStatus.NO_NETWORK] = React.createElement(Tooltip, {
    title: noNetworkMessage || defaultNoNetworkMessage
  }, React.createElement(WarningIcon, null));
  iconPerNetworkStatus[NetworkStatus.NETWORK_MISSMATCH] = React.createElement(Tooltip, {
    title: onWrongNetworkMessage || deaulftOnWrongNetworkMessage
  }, React.createElement(ErrorIcon, null));
  iconPerNetworkStatus[NetworkStatus.RIGHT_NETWORK] = React.createElement(Tooltip, {
    title: onRightNetworkMessage || defaultOnRightNetworkMessage
  }, React.createElement(CheckIcon, null));
  return iconPerNetworkStatus[networkStatus];
};

const useStyles$9 = makeStyles(() => ({
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
  providers,
  currentNetwork,
  requiredNetwork
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
    currentNetwork: currentNetwork,
    requiredNetwork: requiredNetwork
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

const defaultState = {
  provider: undefined,
  web3: undefined,
  account: undefined,
  networkName: undefined,
  networkId: undefined,
  chainId: undefined
};
const Web3Store = createContext({
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
      return undefined;
  }
};

class Web3Provider extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.setProvider = this.setProvider.bind(this);
  }

  async setProvider(provider, onStateChanged) {
    const web3 = await getWeb3(provider);
    const accounts = await web3.eth.getAccounts();
    let account;
    if (Array.isArray(accounts)) [account] = accounts;else account = accounts;
    let networkId;
    let chainId;

    try {
      networkId = await web3.eth.net.getId();

      if (networkId) {
        chainId = await web3.eth.getChainId();
      }
    } catch (error) {}

    this.setState({
      web3,
      provider,
      account,
      networkName: getNetworkName(networkId),
      networkId,
      chainId
    }, () => onStateChanged && onStateChanged(account));
  }

  render() {
    const {
      provider,
      web3,
      account,
      networkName,
      networkId,
      chainId
    } = this.state;
    const {
      setProvider
    } = this;
    const {
      children
    } = this.props;
    return React.createElement(Web3Store.Provider, {
      value: {
        actions: {
          setProvider
        },
        state: {
          provider,
          web3,
          account,
          networkName,
          networkId,
          chainId
        }
      }
    }, children);
  }

}

var Web3Provider$1 = {
  Consumer: Web3Store.Consumer,
  Provider: Web3Provider
};

export { Accordion, Account, AccountModal, Button, Checkbox, EProvider, FAQPageTemplate, FAQSection, FilterCheckboxCard, Footer, FooterColumn, Header, HeaderTongue, LabeledCheckbox, LoginOption, Logo, LogoNavbar, Modal, ModalBody, ModalDialogue, ModalFooter, ModalHeader, ModalTitle, PageTemplate, RangeSliderWithInputs, SwitchTabs, Typography, UnitsInput, Web3Provider$1 as Web3Provider, Web3Store, colors, doneThumbsUp as doneThumbsUpImg, fonts, footerTongue as footerTongueImg, getWeb3, globalConstants, headerTongueImg, logoBlackAndBlue, logoFullWhite, nameService as nameServiceImg, rifCom as rifComImg, rifDir as rifDirImg, rifGat as rifGatImg, rifMar as rifMarImg, rifPay as rifPayImg, rifSto as rifStoImg, rskLogo, shortenAddress, storage as storageImg, theme, tickWide as tickWideImg };
//# sourceMappingURL=index.modern.js.map
