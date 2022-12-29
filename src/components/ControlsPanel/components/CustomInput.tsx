import { Box, TextField } from '@mui/material'
import React, { FC, useCallback } from 'react'
import { BaseControlProps } from './types'

type SearchInputProps = BaseControlProps<string>

const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value)
    },
    [onChange]
  )

  return (
    <Box component='form' autoComplete='off'>
      <TextField
        id='outlined-basic'
        label='search'
        variant='standard'
        value={value}
        onChange={handleChange}
      />
    </Box>
  )
}

export default SearchInput
