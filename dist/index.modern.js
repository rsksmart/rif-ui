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

const shortenAddress = address => `${address.substr(0, 6)}...${address.substr(address.length - 4 - 1, 4)}`;

const CircularProgress = props => {
  return React.createElement(CircularProgress$1, Object.assign({}, props));
};

const Grid = ({
  children,
  ...rest
}) => {
  return React.createElement(Grid$1, Object.assign({}, rest), children);
};

const Link = props => {
  return React.createElement(Link$1, Object.assign({}, props));
};

const useStyles = makeStyles(theme => ({
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

const useStyles$1 = makeStyles$1(() => ({
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
  const classes = useStyles$1();
  return React.createElement(Button, Object.assign({
    className: `${classes.root} ${_className}`,
    block: true,
    rounded: true,
    variant: 'outlined',
    color: 'primary',
    onClick: onClick
  }, rest), text);
};

var logo_white_full = require("./logo_white_full~lLumzPXG.svg");

var Logo = React.forwardRef(function LogoFooter(props, ref) {
  const {
    alt = 'RIF OS',
    ...other
  } = props;
  return React.createElement("img", Object.assign({
    src: logo_white_full,
    alt: alt,
    ref: ref
  }, other));
});

var LogoNavbar = React.forwardRef(function LogoFooter(props, ref) {
  const {
    alt = 'RIF OS',
    height = '40px',
    ...other
  } = props;
  return React.createElement("img", Object.assign({
    src: logo_white_full,
    alt: alt,
    height: height,
    ref: ref
  }, other));
});

const Card = ({
  children,
  ...rest
}) => {
  return React.createElement(Card$1, Object.assign({}, rest), children);
};

const CardActions = ({
  children,
  ...rest
}) => {
  return React.createElement(CardActions$1, Object.assign({}, rest), children);
};

const CardContent = ({
  children,
  ...rest
}) => {
  return React.createElement(CardContent$1, Object.assign({}, rest), children);
};

const CardHeader = ({
  children,
  ...rest
}) => {
  return React.createElement(CardHeader$1, Object.assign({}, rest), children);
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
    medium: 16
  },
  weight: {
    normal: 300,
    lightBold: 500,
    bold: 700,
    superBold: 900
  }
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
    }
  }
});

const useStyles$2 = makeStyles$1(() => createStyles({
  unCheckedIcon: {
    color: colors.gray4
  },
  checkedIcon: {
    color: colors.primary
  }
}));

const Checkbox = props => {
  const classes = useStyles$2();
  const [isChecked, setIsChecked] = useState(!!props.checked);

  const handleChange = (event, checked) => {
    setIsChecked(checked);
    const {
      onChange
    } = props;
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

const FormControl = ({
  children,
  ...rest
}) => {
  return React.createElement(FormControl$1, Object.assign({}, rest), children);
};

const FormGroup = ({
  children,
  ...rest
}) => {
  return React.createElement(FormGroup$1, Object.assign({}, rest), children);
};

const Input = ({
  children,
  ...rest
}) => {
  return React.createElement(Input$1, Object.assign({}, rest), children);
};

const InputAdornment = ({
  children,
  ...rest
}) => {
  return React.createElement(InputAdornment$1, Object.assign({}, rest), children);
};

const InputLabel = ({
  children,
  ...rest
}) => {
  return React.createElement(InputLabel$1, Object.assign({}, rest), children);
};

const useStyles$3 = makeStyles(() => createStyles$1({
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
}));

const RangeSlider = ({
  handleChange,
  ...rest
}) => {
  const classes = useStyles$3();

  const onChange = (event, newValue) => {
    handleChange(event, newValue);
  };

  return React.createElement(Slider, Object.assign({
    classes: classes,
    onChange: onChange
  }, rest));
};

const Switch = ({ ...rest
}) => {
  return React.createElement(Switch$1, Object.assign({}, rest));
};

const useStyles$4 = makeStyles$1(() => ({
  root: {
    color: colors.gray3,
    '&:hover': {
      color: colors.gray2
    }
  }
}));

const TextField = ({
  className: _className = '',
  ...rest
}) => {
  const classes = useStyles$4();
  return React.createElement(TextField$1, Object.assign({
    className: `${classes.root} ${_className}`.trim()
  }, rest));
};

const MenuItem = ({ ...rest
}) => {
  return React.createElement(MenuItem$1, Object.assign({}, rest));
};

const Select = ({ ...rest
}) => {
  return React.createElement(Select$1, Object.assign({}, rest));
};

const useStyles$5 = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${colors.primary}`,
    boxShadow: theme.shadows[5],
    left: '50%',
    minWidth: 400,
    padding: theme.spacing(2, 4, 3),
    position: 'absolute',
    top: '50%',
    transform: `translate(-50%, -50%)`
  }
}));

const Modal = ({
  children,
  ...rest
}) => {
  const classes = useStyles$5();
  return React.createElement(Modal$1, Object.assign({}, rest), React.createElement("div", {
    className: classes.paper
  }, children));
};

const useStyles$6 = makeStyles(theme => ({
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
  className: _className = '',
  ...rest
}) => {
  const classes = useStyles$6();
  return React.createElement("div", {
    className: `${classes.root} ${_className}`.trim()
  }, children);
};

const useStyles$7 = makeStyles(theme => ({
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
  const classes = useStyles$7();
  return React.createElement(Typography$1, Object.assign({
    className: `${classes[_weight]} ${_className}`.trim()
  }, rest), children);
};

const ModalTitle = ({
  children,
  ...rest
}) => {
  return React.createElement(Typography, Object.assign({
    variant: 'h5'
  }, rest), children);
};

const useStyles$8 = makeStyles(theme => ({
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
  className: _className = '',
  ...rest
}) => {
  const classes = useStyles$8();
  return React.createElement("div", {
    className: `${classes.root} ${_className}`.trim()
  }, children);
};

const useStyles$9 = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
    width: '100%'
  }
}));

const ModalBody = ({
  children,
  className: _className = '',
  ...rest
}) => {
  const classes = useStyles$9();
  return React.createElement("div", {
    className: `${classes.root} ${_className}`.trim()
  }, children);
};

const Table = ({
  children,
  ...rest
}) => React.createElement(Table$1, Object.assign({}, rest), children);

const TableBody = ({
  children,
  ...rest
}) => React.createElement(TableBody$1, Object.assign({}, rest), children);

const TableCell = ({
  children,
  ...rest
}) => React.createElement(TableCell$1, Object.assign({}, rest), children);

const TableHead = ({
  children,
  ...rest
}) => React.createElement(TableHead$1, Object.assign({}, rest), children);

const TableRow = ({
  children,
  ...rest
}) => React.createElement(TableRow$1, Object.assign({}, rest), children);

const useStyles$a = makeStyles(theme => createStyles$1({
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
  title,
  ...rest
}) => {
  const classes = useStyles$a();
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
  return new Promise(async (resolve, reject) => {
    switch (provider) {
      case EProvider.METAMASK:
        {
          if (window.ethereum) {
            const web3 = new Web3(window.ethereum);

            try {
              await window.ethereum.enable();
              resolve(web3);
            } catch (error) {
              reject(error);
            }
          } else if (window.web3) {
              resolve(new Web3(window.web3.currentProvider));
            } else reject(new Error('No injected web3 found'));

          break;
        }

      case EProvider.LOCAL:
        {
          const provider = new Web3.providers.HttpProvider("'http://127.0.0.1:4444'");
          resolve(new Web3(provider));
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

const useStyles$b = makeStyles(theme => ({
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
}));

const Account = ({
  web3,
  networkName,
  account,
  setProvider,
  providers
}) => {
  const classes = useStyles$b();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return React.createElement(React.Fragment, null, React.createElement("div", {
    onClick: handleOpen,
    className: classes.root
  }, React.createElement(Typography, {
    className: classes.accountText
  }, !web3 && 'Connect wallet', web3 && networkName, web3 && account && shortenAddress(account))), React.createElement(Modal, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "account-modal-title",
    "aria-describedby": "account-modal-description"
  }, React.createElement(React.Fragment, null, React.createElement(ModalHeader, null, React.createElement(ModalTitle, null, "Connect a wallet to get started")), React.createElement(ModalBody, null, (providers || [EProvider.METAMASK, EProvider.LOCAL]).map(provider => React.createElement(LoginOption, {
    key: provider,
    text: provider,
    onClick: () => {
      setProvider(provider);
      handleClose();
    }
  }))), React.createElement(ModalFooter, null, React.createElement(Button, {
    variant: 'outlined',
    color: 'secondary',
    block: true,
    onClick: handleClose
  }, "Close")))));
};

const useStyles$c = makeStyles(theme => ({
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
  }
}));

const AppBar = ({
  items,
  login,
  ...rest
}) => {
  const classes = useStyles$c();
  const Login = login;
  return React.createElement(AppBar$1, Object.assign({
    position: 'static'
  }, rest), React.createElement(Toolbar, null, React.createElement(Link, {
    href: rest.hreflogo
  }, React.createElement(LogoNavbar, null)), React.createElement("div", {
    className: classes.itemsContainer
  }, !!items.length && items.map((navItem, i) => React.createElement(Typography, {
    className: classes.navLinkContainer,
    key: `${navItem.title}-${i}`
  }, React.createElement(NavLink, Object.assign({
    className: classes.navLink,
    activeClassName: classes.activeNavlink
  }, navItem), navItem.title)))), React.createElement("div", {
    className: classes.loginContainer
  }, React.createElement(Login, null))));
};

const useStyles$d = makeStyles$1(() => createStyles({
  root: {
    color: colors.gray3
  }
}));

const FormControlLabel = ({
  className: _className = '',
  ...rest
}) => {
  const classes = useStyles$d();
  return React.createElement(FormControlLabel$1, Object.assign({
    className: `${classes.root} ${_className} `.trim()
  }, rest));
};

const useStyles$e = makeStyles$1(theme => ({
  root: {
    color: colors.gray4,
    width: "100%"
  }
}));

const LabeledCheckbox = ({
  labelText,
  labelClassName: _labelClassName = '',
  ...rest
}) => {
  const classes = useStyles$e();
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
}) => {
  return React.createElement("div", {
    className: _className
  }, items.map((item, i) => React.createElement(LabeledCheckbox, Object.assign({
    onClick: onClick,
    key: `labeledCheckbox-${item.id}` || `labeledCheckbox-${i}-${_className}`.trim(),
    labelClassName: item.labelClassName
  }, item))));
};

const List = ({
  children,
  ...rest
}) => {
  return React.createElement(List$1, Object.assign({}, rest), children);
};

const ModalDialogue = ({
  title,
  footer,
  children,
  ...props
}) => {
  return React.createElement(Modal, Object.assign({}, props), React.createElement(React.Fragment, null, React.createElement(ModalHeader, null, React.createElement(ModalTitle, null, title)), React.createElement(ModalBody, null, children), React.createElement(ModalFooter, null, footer)));
};

const useStyles$f = makeStyles(theme => ({
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
  const classes = useStyles$f();
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

const useStyles$g = makeStyles(() => ({
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
}));

const RangeSliderWithInputs = ({
  values,
  unit,
  handleChange,
  className,
  ...rest
}) => {
  const classes = useStyles$g();
  const maxValue = rest.max || values.end;
  const minValue = rest.min || values.start;
  const step = rest.step || 1;
  const [startValue, setStartValue] = useState(values.start);
  const [endValue, setEndValue] = useState(values.end);
  const [sliderRangeValues, setSliderRangeValues] = useState([startValue, endValue]);

  const handleStartInputChange = event => {
    const newStartValue = event.target.value === '' ? values.start : Number(event.target.value);

    if (newStartValue <= endValue) {
      setStartValue(newStartValue);
      setSliderRangeValues([newStartValue, sliderRangeValues[1]]);
    }

    handleChange({
      min: startValue,
      max: endValue
    });
  };

  const handleEndInputChange = event => {
    const newEndValue = event.target.value === '' ? values.end : Number(event.target.value);

    if (newEndValue >= startValue) {
      setSliderRangeValues([sliderRangeValues[0], newEndValue]);
      setEndValue(newEndValue);
    }

    handleChange({
      min: startValue,
      max: endValue
    });
  };

  const handleSliderChange = (event, newSliderValue) => {
    setEndValue(newSliderValue[1]);
    setStartValue(newSliderValue[0]);
    setSliderRangeValues(newSliderValue);
    handleChange({
      min: startValue,
      max: endValue
    });
  };

  const handleStartValueBlur = () => {
    if (startValue < minValue) {
      setStartValue(minValue);
    } else if (startValue > endValue) {
      setStartValue(endValue);
    }
  };

  const handleEndValueBlur = () => {
    if (endValue < startValue) {
      setEndValue(startValue);
    } else if (endValue > maxValue) {
      setEndValue(maxValue);
    }
  };

  const getCommonInputValues = () => {
    return {
      maxValue: maxValue,
      minValue: minValue,
      step: step,
      units: unit
    };
  };

  return React.createElement("div", {
    className: `${classes.root} ${className}`.trim()
  }, React.createElement(RangeSlider, Object.assign({
    value: sliderRangeValues
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

const a11yProps = index => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
};

const useStyles$h = makeStyles(theme => ({
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
  const classes = useStyles$h();

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

const drawerWidth = 240;
const useStyles$i = makeStyles(theme => createStyles$1({
  activeNavlink: {
    color: `${colors.white} !important`,
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

const Header = ({
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
    position: "static",
    className: `${classes.mobileAppBar} ${open ? classes.mobileAppBarShift : ''}`
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
  }, React.createElement(ChevronLeftIcon, null))), React.createElement(Divider, null), React.createElement(List, null, !!items.length && items.map((headerItem, i) => React.createElement(ListItem, {
    button: true,
    key: `${headerItem.title}-${i}`
  }, React.createElement(NavLink, {
    to: headerItem.to,
    className: classes.mobileNavLink,
    activeClassName: classes.mobileNavLinkActive
  }, React.createElement(ListItemIcon, null, headerItem.icon), React.createElement(ListItemText, {
    primary: headerItem.title
  })))))))));
};

var done_img = require("./done_img~MEdZiDXb.svg");

var rifCom = require("./rifCom~udwpaCym.png");

var rifDir = require("./rifDir~bottaDNJ.png");

var rifGat = require("./rifGat~balFpEzC.png");

var rifMar = require("./rifMar~IDqKMWpK.png");

var rifPay = require("./rifPay~bdtOAceT.png");

var rifSto = require("./rifSto~fMRetflo.png");

var tickWide = require("./tickWide~bmvsBAER.svg");

const defaultState = {
  provider: null,
  web3: null,
  account: null,
  networkName: null
};
const Web3Store = createContext({
  state: defaultState,
  actions: {
    setProvider: () => {}
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

class Web3Provider extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.setProvider = this.setProvider.bind(this);
  }

  async setProvider(provider) {
    try {
      const web3 = await getWeb3(provider);
      const accounts = await web3.eth.getAccounts();
      let account;
      if (Array.isArray(accounts)) account = accounts[0];else account = accounts;
      let networkId = await web3.eth.net.getId();
      if (networkId === 1) networkId = await web3.eth.getChainId();
      this.setState({
        web3,
        provider,
        account,
        networkName: getNetworkName(networkId)
      });
    } catch (e) {
      throw e;
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
    return React.createElement(Web3Store.Provider, {
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
    }, this.props.children);
  }

}

var Web3Provider$1 = {
  Consumer: Web3Store.Consumer,
  Provider: Web3Provider
};

export { Accordion, Account, AppBar, Button, Card, CardActions, CardContent, CardHeader, Checkbox, CircularProgress, EProvider, FilterCheckboxCard, FormControl, FormGroup, Grid, Header, Input, InputAdornment, InputLabel, LabeledCheckbox, Link, List, LoginOption, Logo, LogoNavbar, MenuItem, Modal, ModalBody, ModalDialogue, ModalFooter, ModalHeader, ModalTitle, RangeSlider, RangeSliderWithInputs, Select, Switch, SwitchTabs, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography, UnitsInput, Web3Provider$1 as Web3Provider, Web3Store, colors, done_img as doneImg, fonts, getWeb3, rifCom as rifComImg, rifDir as rifDirImg, rifGat as rifGatImg, rifMar as rifMarImg, rifPay as rifPayImg, rifSto as rifStoImg, shortenAddress, theme, tickWide as tickWideImg };
//# sourceMappingURL=index.modern.js.map
