import { FC } from 'react';
import { AccordionProps as MUIAccordionProps } from '@material-ui/core';
interface AccordionProps extends MUIAccordionProps {
    id: string;
    title?: string;
}
declare const Accordion: FC<AccordionProps>;
export default Accordion;
