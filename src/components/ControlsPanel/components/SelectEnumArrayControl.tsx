import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { useContext } from 'react'

import { CustomContext } from '../../../../src/contexts/customContext'
import { EQueryParams } from '../../../../src/contexts/enums'
import { SELECT_OPTIONS } from '../../../contexts/constants'

const SelectEnumArrayControl = () => {
  const { state, setValue } = useContext(CustomContext)

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    console.log('event', event)

    const {
      target: { value },
    } = event
    console.log('value', value)

    setValue(
      EQueryParams.statuses,
      typeof value === 'string' ? value.split(',') : value
    )
  }

  const selected = state[EQueryParams.statuses] ?? []

  return (
    <div>
      <Select
        label='Enum multi'
        multiple
        value={selected}
        onChange={handleChange}
      >
        {SELECT_OPTIONS.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      <br />
      <span>statuses: {JSON.stringify(selected)}</span>
    </div>
  )
}

export default SelectEnumArrayControl
