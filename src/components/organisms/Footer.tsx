import React, { FC, HTMLAttributes } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '../atoms'
import FooterColumn, { FooterColumnProps } from '../molecules/FooterColumn'
import { colors, fonts } from '../../theme'
import { logoBlackAndBlue } from '../../assets/images'
import { removeEmptySpaces } from '../../utils'

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  className?: string
  copyrightText: string
  linksColumns: FooterColumnProps[]
}

const useStyles = makeStyles((theme: Theme) => ({
  copyright: {
    display: 'flex',
    justifyContent: 'center',
  },
  copyrightContent: {
    color: colors.gray4,
    fontSize: fonts.size.tiny,
  },
  footerContainer: {
    backgroundColor: colors.gray2,
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(2),
    width: '100%',
  },
  footerContent: {
    marginTop: theme.spacing(2),
    maxWidth: '80%',
    width: '100%',
  },
  linksColumn: {
    marginBottom: theme.spacing(1),
  },
  logoColumn: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(5),
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(4),
    width: '100%',
  },
  tongue: {
    backgroundColor: colors.gray2,
    borderTopLeftRadius: '50% 80%',
    borderTopRightRadius: '50% 80%',
    height: theme.spacing(10),
    width: '100%',
  },
}))

const Footer: FC<FooterProps> = ({
  className = '', copyrightText, linksColumns, ...rest
}) => {
  const classes = useStyles()

  return (
    <footer className={`${classes.root} ${className}`.trim()} {...rest}>
      <div className={classes.tongue} />
      <div className={classes.footerContainer}>
        <div className={classes.footerContent}>
          <Grid container direction="row">
            <Grid className={classes.logoColumn} item xs={12} md={3} lg={3}>
              <img src={logoBlackAndBlue} height="75px" alt="logo" />
            </Grid>
            {
              linksColumns.map((linkColumn: FooterColumnProps) => (
                <Grid key={`fc-${removeEmptySpaces(linkColumn.title)}`} item xs={12} sm={12} md={2} lg={2}>
                  <FooterColumn className={classes.linksColumn} {...linkColumn} />
                </Grid>
              ))
            }
          </Grid>
          <div className={classes.copyright}>
            <Typography className={classes.copyrightContent}>{copyrightText}</Typography>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
