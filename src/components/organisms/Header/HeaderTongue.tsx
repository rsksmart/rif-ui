import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '../../atoms'
import { colors } from '../../../theme'
import { headerTongueImg } from '../../../assets/images'

export interface HeaderTongueProps {
  description: string
  titleLine1: string
  titleLine2: string
}

const useStyles = makeStyles((theme: Theme) => ({
  textContainer: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2, 0),
    width: '100%',
  },
  textContent: {
    color: colors.white,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '65%',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '55%',
    },
  },
  titleContent: {
    marginBottom: theme.spacing(2),
  },
  tongueImg: {
    width: '100%',
  },
}))

const HeaderTongue: FC<HeaderTongueProps> = ({ description, titleLine1, titleLine2 }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.textContainer}>
        <div className={classes.textContent}>
          <Typography className={classes.titleContent} variant="h3" weight="lightBold">
            {titleLine1}
            <br />
            {' '}
            {titleLine2}
          </Typography>
          <Typography variant="subtitle1">{description}</Typography>
        </div>
      </div>
      <img className={classes.tongueImg} src={headerTongueImg} alt="headerTongueImg" />
    </>
  )
}

export default HeaderTongue
