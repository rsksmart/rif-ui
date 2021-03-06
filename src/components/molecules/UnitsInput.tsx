import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Input, { InputProps } from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { colors, fonts } from '../../theme'

export interface UnitsInputProps extends InputProps {
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleOnBlur?: () => void
  maxValue?: number
  minValue?: number
  step?: number
  units?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: colors.gray4,
    display: 'flex',
  },
  input: {
    color: colors.gray4,
    paddingLeft: theme.spacing(0.1),
    textAlign: 'center',
    '&::before': {
      borderBottom: `1px solid ${colors.gray4}`,
    },
  },
  inputContainer: {
    paddingRight: '0 !important',
  },
  units: {
    color: colors.gray4,
    display: 'flex',
    fontSize: fonts.size.tiny,
  },
  unitsContainer: {
    alignSelf: 'center',
    color: colors.gray4,
    display: 'flex',
    fontSize: fonts.size.normal,
    paddingLeft: '0 !important',
  },
}))

const UnitsInput: FC<UnitsInputProps> = ({
  maxValue,
  minValue,
  units,
  value,
  step = 1,
  handleOnBlur,
  handleOnChange,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid className={classes.root} container spacing={1}>
        <Grid className={classes.inputContainer} item xs={8}>
          <Input
            className={classes.input}
            classes={{ input: classes.input }}
            value={value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            type="number"
            fullWidth
            inputProps={{
              step,
              min: minValue,
              max: maxValue,
              'aria-labelledby': 'input-slider',
            }}
            {...rest}
          />
        </Grid>
        <Grid item xs={4} className={classes.unitsContainer}>
          <Typography className={classes.units}>
            {units}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default UnitsInput
