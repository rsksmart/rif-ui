import React from 'react';
import { Typography, HeaderTongue, nameServiceImg, storageImg } from '@rsksmart/rif-ui';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2, 0),
    width: '100%',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2)
  },
  servicesContainer: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%'
    }
  },
  serviceContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  iconImage: {
    height: theme.spacing(40),
  },
  iconTitle: {
    display: 'flex',
    justifyContent: 'center',
  }
}))

const LandingPage = () => {

  const classes = useStyles();

  const headerTongueProps = {
    titleLine1: 'Your marketplace',
    titleLine2: 'for decentralized services',
    description: 'RIF Marketplace provides a digital catalog with a wide range of decentralized service listings, allowing providers to publish their services and engage with users in a secure and efficient way.'
  }

  return (
    <React.Fragment>
      <HeaderTongue {...headerTongueProps} />
      <div className={classes.root}>
        <div className={classes.titleContainer}>
          <Typography color='primary' variant='h4'>RIF Marketplace services</Typography>
        </div>
        <Grid container className={classes.servicesContainer}>
          <Grid className={classes.serviceContent} item xs={12} lg={6}>
            <img className={classes.iconImage} src={nameServiceImg} alt='name services icon' />
            <Typography className={classes.iconTitle} variant='h6' color='primary'>Name Services</Typography>
          </Grid>
          <Grid className={classes.serviceContent} item xs={12} lg={6}>
            <img className={classes.iconImage} src={storageImg} alt='storage icon' />
            <Typography className={classes.iconTitle} variant='h6' color='primary'>Storage</Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
