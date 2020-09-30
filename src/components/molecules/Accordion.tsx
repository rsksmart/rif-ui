import React, { FC, useState } from 'react'
import { Accordion as MUIAccordion, AccordionProps as MUIAccordionProps } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { colors } from '../../theme'

interface AccordionProps extends MUIAccordionProps {
  id: string
  title?: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    boxShadow: 'none',
    color: colors.gray4,
    width: '100%',
  },
  heading: {
    color: colors.gray4,
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    width: '100%',
  },
  accordionSummary: {
    borderBottom: `1px solid ${colors.gray2}`,
  },
}))

const Accordion: FC<AccordionProps> = ({
  children, expanded, id, title,
}) => {
  const classes = useStyles()
  const [isExpanded, setIsExpanded] = useState<boolean>(!!expanded)

  const onChange = (): void => setIsExpanded(!isExpanded)

  return (
    <MUIAccordion
      className={classes.root}
      expanded={isExpanded}
      onChange={onChange}
    >
      <AccordionSummary
        className={classes.accordionSummary}
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${id}-content`}
        id={id}
      >
        <Typography className={classes.heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </MUIAccordion>
  )
}

export default Accordion
