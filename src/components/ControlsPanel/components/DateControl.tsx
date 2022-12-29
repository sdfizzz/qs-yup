import { TextField, TextFieldProps } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
import React, { useCallback, useContext } from 'react'

import { CustomContext } from '../../../../src/contexts/customContext'
import { EQueryParams } from '../../../../src/contexts/enums'

const DateControl = () => {
  const { state, setValue } = useContext(CustomContext)

  const handleChange = useCallback(
    (value: Dayjs) => {
      setValue(EQueryParams.date, value.toISOString())
    },
    [setValue]
  )

  const value = state[EQueryParams.date]

  return (
    <div>
      <DesktopDatePicker
        label='Date'
        inputFormat='DD.MM.YYYY'
        value={value}
        onChange={handleChange}
        renderInput={(params: TextFieldProps) => <TextField {...params} />}
      />
      <br />
      <span>date: {value}</span>
    </div>
  )
}

export default DateControl
