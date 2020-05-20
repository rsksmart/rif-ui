import { FC } from 'react';
import { FAQSectionProps } from '../molecules/FAQSection';
export interface FAQPageTemplateProps {
    className?: string;
    mainTitle: string;
    questionsAndAnswers: FAQSectionProps[];
}
declare const FAQPageTemplate: FC<FAQPageTemplateProps>;
export default FAQPageTemplate;
