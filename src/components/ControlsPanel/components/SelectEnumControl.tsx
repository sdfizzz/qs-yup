import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useCallback, useContext } from 'react'

import { CustomContext } from '../../../../src/contexts/customContext'
import { EQueryParams } from '../../../../src/contexts/enums'
import { SELECT_OPTIONS } from '../../../contexts/constants'

const SELECT_LABEL = 'Single enum'

const SelectEnumControl = () => {
  const { state, setValue } = useContext(CustomContext)

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(EQueryParams.status, event.target.value)
    },
    [setValue]
  )

  const selected = state[EQueryParams.status]

  return (
    <FormControl>
      <InputLabel id='enum-select-label'>{SELECT_LABEL}</InputLabel>
      <Select
        onChange={handleChange}
        value={selected ?? ''}
        label={SELECT_LABEL}
        labelId='enum-select-label'
      >
        {SELECT_OPTIONS.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      <br />
      <span>status: {JSON.stringify(selected)}</span>
    </FormControl>
  )
}

export default SelectEnumControl
