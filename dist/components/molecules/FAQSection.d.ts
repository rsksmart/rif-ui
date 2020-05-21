import { FC } from 'react';
export interface FAQSectionProps {
    answer: string;
    initiallyExpanded?: boolean;
    question: string;
    className?: string;
}
declare const FAQSection: FC<FAQSectionProps>;
export default FAQSection;
