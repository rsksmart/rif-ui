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
  img: {
    height: '75px',
    width: '100%',
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(4),
    width: '100%',
  },
}));


const Footer: FC<FooterProps> = ({ copyrightText, linksColumns }) => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <img style={{ width: '100%' }} src={footerTongueImg} alt="footer tongue image" />
      <div className={classes.footerContainer}>
        <div className={classes.footerContent}>
          <Grid container direction='row'>
            <Grid className={classes.logoColumn} item xs={12} md={12} lg={3}>
              <img src={logoBlackAndBlue} height='75px' alt="logo" />
            </Grid>
            {
              linksColumns.map((linkColumn: FooterColumnProps, i) => (
                <Grid key={`fc-${i}`} item xs={12} md={12} lg={2}>
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
  );
};

export default Footer;
