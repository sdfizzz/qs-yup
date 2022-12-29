import { MenuItem, Select } from '@mui/material'
import React, { useCallback, useContext } from 'react'

import { CustomContext } from '../../../../src/contexts/customContext'
import { EQueryParams } from '../../../../src/contexts/enums'
import { SELECT_OPTIONS } from '../../../contexts/constants'

const SelectEnumControl = () => {
  const { state, setValue } = useContext(CustomContext)

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      // console.log(event.target.value)
      setValue(EQueryParams.status, event.target.value)
      // setValue(
      //   EQueryParams.status,
      //   values && values.length > 0 ? values : undefined
      // )
    },
    [setValue]
  )

  const selected = state[EQueryParams.status]

  return (
    <div>
      <Select onChange={handleChange} value={selected} label='Single enum'>
        {SELECT_OPTIONS.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      <br />
      <span>status: {JSON.stringify(selected)}</span>
    </div>
  )
}

export default SelectEnumControl
