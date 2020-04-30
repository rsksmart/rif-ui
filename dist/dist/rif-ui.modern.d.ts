export { ThemeProvider } from "@material-ui/core/styles";
export function Accordion(_ref: any): any;
export function Account(_ref: any): React.FunctionComponentElement<{}>;
export function AppBar(_ref: any): any;
export function Button(_ref: any): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<import("@material-ui/core").ExtendButtonBaseTypeMap<import("@material-ui/core").ButtonTypeMap<{}, "button">>>>;
export function Card(_ref: any): React.FunctionComponentElement<import("@material-ui/core").CardProps>;
export function CardActions(_ref: any): React.FunctionComponentElement<import("@material-ui/core").CardActionsProps>;
export function CardContent(_ref: any): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<import("@material-ui/core").CardContentTypeMap<{}, "div">>>;
export function CardHeader(_ref: any): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<import("@material-ui/core").CardHeaderTypeMap<{}, "div", "span", "span">>>;
export function Checkbox(props: any): React.FunctionComponentElement<import("@material-ui/core").CheckboxProps>;
export function FilterCheckboxCard(_ref: any): React.DetailedReactHTMLElement<{
    className: any;
}, HTMLElement>;
export function FormControl(_ref: any): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<import("@material-ui/core").FormControlTypeMap<{}, "div">>>;
export function FormGroup(_ref: any): React.FunctionComponentElement<import("@material-ui/core").FormGroupProps>;
export function Grid(_ref: any): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<import("@material-ui/core").GridTypeMap<{}, "div">>>;
export function Header(_ref: any): React.CElement<import("react-router-dom").BrowserRouterProps, BrowserRouter>;
export function Input(_ref: any): React.FunctionComponentElement<import("@material-ui/core").InputProps>;
export function InputAdornment(_ref: any): any;
export function InputLabel(_ref: any): React.FunctionComponentElement<import("@material-ui/core").InputLabelProps>;
export function LabeledCheckbox(_ref: any): React.FunctionComponentElement<{
    className: string;
    label: any;
    control: React.FunctionComponentElement<{}>;
}>;
export function Link(props: any): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<import("@material-ui/core").LinkTypeMap<{}, "a">>>;
export function List(_ref: any): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<import("@material-ui/core").ListTypeMap<{}, "ul">>>;
export function LoginOption(_ref: any): React.FunctionComponentElement<{
    className: string;
    block: boolean;
    rounded: boolean;
    variant: string;
    color: string;
    onClick: any;
}>;
export var Logo: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
export var LogoNavbar: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
export function MenuItem(_ref: any): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<import("@material-ui/core").ExtendButtonBaseTypeMap<import("@material-ui/core").MenuItemTypeMap<{
    button?: true | undefined;
}, "li">>>>;
export function Modal(_ref: any): any;
export function ModalBody(_ref: any): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
export function ModalDialogue(_ref: any): React.FunctionComponentElement<{}>;
export function ModalFooter(_ref: any): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
export function ModalHeader(_ref: any): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
export function ModalTitle(_ref: any): React.FunctionComponentElement<{
    variant: string;
}>;
export function RangeSlider(_ref: any): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<import("@material-ui/core").SliderTypeMap<{}, "span">>>;
export function RangeSliderWithInputs(_ref: any): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
export function Select(_ref: any): React.FunctionComponentElement<import("@material-ui/core").SelectProps>;
export function Switch(_ref: any): React.FunctionComponentElement<import("@material-ui/core").SwitchProps>;
export function SwitchTabs(_ref: any): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
export function Table(_ref: any): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<import("@material-ui/core").TableTypeMap<{}, "table">>>;
export function TableBody(_ref: any): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<import("@material-ui/core").TableBodyTypeMap<{}, "tbody">>>;
export function TableCell(_ref: any): React.FunctionComponentElement<import("@material-ui/core").TableCellProps>;
export function TableHead(_ref: any): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<import("@material-ui/core").TableHeadTypeMap<{}, "thead">>>;
export function TableRow(_ref: any): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<import("@material-ui/core").TableRowTypeMap<{}, "tr">>>;
export function TextField(_ref: any): React.FunctionComponentElement<import("@material-ui/core").TextFieldProps>;
export function Typography(_ref: any): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<import("@material-ui/core").TypographyTypeMap<{}, "span">>>;
export function UnitsInput(props: any): React.FunctionComponentElement<{}>;
export namespace colors {
    export const black: string;
    export const primary: string;
    export const darkBlue: string;
    export const gray1: string;
    export const gray2: string;
    export const gray3: string;
    export const gray4: string;
    export const gray5: string;
    export const gray6: string;
    export const transparent: string;
    export const white: string;
}
export namespace fonts {
    export const family: string;
    export namespace size {
        export const tiny: number;
        export const small: number;
        export const normal: number;
        export const medium: number;
    }
    export namespace weight {
        const normal_1: number;
        export { normal_1 as normal };
        export const lightBold: number;
        export const bold: number;
        export const superBold: number;
    }
}
export var theme: import("@material-ui/core").Theme;
import React from "react";
import { BrowserRouter } from "react-router-dom";
