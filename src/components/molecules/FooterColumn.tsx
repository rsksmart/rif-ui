import React, { FC } from 'react'
import { NavLinkProps, NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '../atoms'
import { colors, fonts } from '../../theme'
import { removeEmptySpaces } from '../../utils'

export interface FooterColumnProps {
  className?: string
  links: FooterLinkProps[]
  title: string
}

export interface FooterLinkProps extends NavLinkProps {
  isExternal?: boolean
  title: string
}

const useStyles = makeStyles(() => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  footerLink: {
    color: colors.gray4,
    fontWeight: fonts.weight.normal,
    textDecoration: 'none',
    '&:hover': {
      fontWeight: fonts.weight.lightBold,
    },
  },
  footerTitle: {
    fontSize: fonts.size.subtitleBig,
    textAlign: 'center',
  },
}))

const FooterColumn: FC<FooterColumnProps> = ({ title, links, className = '' }) => {
  const classes = useStyles()

  return (
    <div className={`${classes.root} ${className}`.trim()}>
      <Typography className={classes.footerTitle} variant="subtitle1" color="primary">{title}</Typography>
      {
        links.map((link: FooterLinkProps) => {
          const key = removeEmptySpaces(link.title)

          if (link.isExternal) {
            const href = (link.to || '#').toString()
            return (
              <a
                className={classes.footerLink}
                target={link.target}
                color="secondary"
                key={key}
                href={href}
              >
                {link.title}
              </a>
            )
          }
          return (
            <NavLink
              className={classes.footerLink}
              target={link.target}
              color="secondary"
              key={key}
              to={link.to}
            >
              {link.title}
            </NavLink>
          )
        })
      }
    </div>
  )
}

export default FooterColumn
