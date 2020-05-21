import React, { FC, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Typography } from '../atoms';
import { colors, fonts } from '../../theme';

export interface FAQSectionProps {
  answer: string;
  // id: string;
  initiallyExpanded?: boolean;
  question: string;
  className?: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: 'none',
    color: colors.gray4,
    width: '100%',
  },
  heading: {
    display: 'flex',
    justifyContent: 'center',
    color: colors.gray5,
    fontSize: fonts.size.subtitleSmall,
    width: '100%'
  },
  headingExpanded: {
    color: colors.primary,
  },
  headingCollapsed: {
    fontWeight: fonts.weight.lightBold
  },
  panelDetails: {
    display: 'flex',
    justifyContent: 'center',
  },
  answerContainer: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%',
    },
  },
  answerText: {
    color: colors.gray5
  }
}));

const FAQSection: FC<FAQSectionProps> = ({ className = '', initiallyExpanded, question, answer }) => {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(!!initiallyExpanded);

  const onChange = () => setIsExpanded(!isExpanded);

  return (
    <ExpansionPanel className={`${classes.root} ${className}`.trim()} expanded={isExpanded} onChange={onChange}>
      <ExpansionPanelSummary
        expandIcon={isExpanded ? <RemoveIcon /> : <AddIcon />}
        // aria-controls={`panel-${id}-content`}
      // id={id}
      >
        <Typography className={`${classes.heading} ${isExpanded ? classes.headingExpanded : classes.headingCollapsed}`.trim()}>{question}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelDetails}>
        <div className={classes.answerContainer}>
          <Typography className={classes.answerText}>{answer}</Typography>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default FAQSection;
