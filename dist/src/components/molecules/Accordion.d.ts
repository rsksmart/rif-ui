import { FC } from 'react';
import { ExpansionPanelProps } from '@material-ui/core/ExpansionPanel';
interface AccordionProps extends ExpansionPanelProps {
    id: string;
    title?: string;
}
declare const Accordion: FC<AccordionProps>;
export default Accordion;
