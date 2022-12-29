import { MenuItem, Select } from '@mui/material'
import React, { useCallback, useContext } from 'react'

import { CustomContext } from '../../../../src/contexts/customContext'
import { EQueryParams } from '../../../../src/contexts/enums'
import { SELECT_NUMBER_OPTIONS } from '../../../contexts/constants'

const SelectIdsControl = () => {
  const { state, setValue } = useContext(CustomContext)

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const values = event.target.value
      setValue(
        EQueryParams.selectedIds,
        values && values.length > 0 ? values : undefined
      )
    },
    [setValue]
  )

  const selected = state[EQueryParams.selectedIds] ?? []

  return (
    <div>
      <Select
        label='select multi'
        placeholder='select multi'
        onChange={handleChange}
        multiple
        value={selected}
      >
        {SELECT_NUMBER_OPTIONS.map(({ label, value }) => (
          <MenuItem key={`number_${value}`} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      <br />
      <span>selected ids: {JSON.stringify(selected)}</span>
    </div>
  )
}

export default SelectIdsControl
