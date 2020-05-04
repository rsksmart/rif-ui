import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from './typography';
import { colors } from '../../theme'
import { headerTongueImg } from '../../assets/images';

export interface HeaderTongueProps {
  description: string;
  title: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2, 0, 2, 0),
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
      maxWidth: '70%',
    },
  },
  tongueImgContainer: {
    overflow: 'hidden',
  },
  tongueImg: {
    // in order to not show the intersection between the image and the div we make it bigger and then hide the overflow
    marginLeft: theme.spacing(-1),
    [theme.breakpoints.down('sm')]: {
      width: '108%',
    },
    [theme.breakpoints.up('md')]: {
      width: '102%',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(-2),
    }
  }
}))

const HeaderTongue: FC<HeaderTongueProps> = ({ description, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <div className={classes.textContent}>
          <Typography variant='h3'>{title}</Typography>
          <Typography variant='subtitle1'>{description}</Typography>
        </div>
      </div>
      <div className={classes.tongueImgContainer}>
        <img className={classes.tongueImg} src={headerTongueImg} alt="headerTongueImg" />
      </div>
    </div>
  );
};

export default HeaderTongue;
