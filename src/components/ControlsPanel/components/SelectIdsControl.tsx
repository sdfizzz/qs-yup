import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useCallback, useContext } from 'react'

import { CustomContext } from '../../../../src/contexts/customContext'
import { EQueryParams } from '../../../../src/contexts/enums'
import { SELECT_NUMBER_OPTIONS } from '../../../contexts/constants'

const SELECT_LABEL = 'select multi'

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
    <FormControl>
      <InputLabel id='ids-select-label'>{SELECT_LABEL}</InputLabel>
      <Select
        label={SELECT_LABEL}
        labelId='ids-select-label'
        onChange={handleChange}
        multiple
        value={selected}
        defaultValue={[]}
      >
        {SELECT_NUMBER_OPTIONS.map(({ label, value }) => (
          <MenuItem key={`number_${value}`} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      <br />
      <span>selected ids: {JSON.stringify(selected)}</span>
    </FormControl>
  )
}

export default SelectIdsControl
