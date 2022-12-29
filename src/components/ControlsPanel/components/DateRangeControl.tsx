import { Box, TextField, TextFieldProps } from '@mui/material'
import {
  DateRange,
  DateRangePicker,
} from '@mui/x-date-pickers-pro/DateRangePicker'
import dayjs, { Dayjs } from 'dayjs'
import React, { useCallback, useContext, useMemo } from 'react'

import { CustomContext } from '../../../../src/contexts/customContext'
import { EQueryParams } from '../../../../src/contexts/enums'

const DateRangeControl = () => {
  const { state, setValue } = useContext(CustomContext)

  const currentValue = useMemo<DateRange<dayjs.Dayjs>>(
    () =>
      state.dateRange && state.dateRange.length === 2
        ? [dayjs(state.dateRange[0]), dayjs(state.dateRange[1])]
        : [null, null],
    [state.dateRange]
  )

  const handleChange = useCallback(
    (value: DateRange<Dayjs>) => {
      setValue(
        EQueryParams.dateRange,
        value.map((v) => v?.toISOString() ?? undefined)
      )
    },
    [setValue]
  )

  return (
    <div>
      <DateRangePicker
        value={currentValue}
        onChange={handleChange}
        renderInput={(startProps: TextFieldProps, endProps: TextFieldProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
      <span>dateRange: {JSON.stringify(currentValue, null, 2)}</span>
    </div>
  )
}

export default DateRangeControl
