import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '../atoms';
import FooterColumn, { FooterColumnProps } from '../molecules/FooterColumn';
import { colors, fonts } from '../../theme';
import { footerTongueImg, logoBlackAndBlue } from '../../assets/images';

export interface FooterProps {
  copyrightText: string;
  linksColumns: FooterColumnProps[];
};

const useStyles = makeStyles((theme: Theme) => ({
  copyright: {
    display: 'flex',
    justifyContent: 'center',
  },
  copyrightContent: {
    color: colors.gray4,
    fontSize: fonts.size.tiny,
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
  img: {
    height: '75px',
    width: '100%',
  },
  root: {
    backgroundImage: `url(${footerTongueImg})`,
    backgroundPositionX: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(12, 0, 8, 0),
    width: '100%',
  },
}));


const Footer: FC<FooterProps> = ({ copyrightText, linksColumns }) => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.footerContent}>
        <Grid container direction='row'>
          <Grid className={classes.logoColumn} item xs={12} md={12} lg={3}>
            <img src={logoBlackAndBlue} height='75px' alt="logo" />
          </Grid>
          {
            linksColumns.map((linkColumn: FooterColumnProps, i) => (
              <Grid item xs={12} md={12} lg={2}>
                <FooterColumn className={classes.linksColumn} {...linkColumn} />
              </Grid>
            ))
          }
        </Grid>
        <div className={classes.copyright}>
          <Typography className={classes.copyrightContent}>{copyrightText}</Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
