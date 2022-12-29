import { useCallback, useContext } from 'react'

import random from 'lodash/random'

import { Button } from '@mui/material'
import React from 'react'
import { INITIAL_PAGINATION } from '../../../../src/contexts/constants'
import { CustomContext } from '../../../../src/contexts/customContext'
import { EQueryParams } from '../../../../src/contexts/enums'
import type { TPagination } from '../../../../src/contexts/types'

const PaginationControl = () => {
  const { state, setValue } = useContext(CustomContext)

  const handleAdd = useCallback(() => {
    const value: TPagination = { limit: random(1, 10), offset: random(1, 10) }
    setValue(EQueryParams.paginationSetting, value)
  }, [setValue])

  const handleClear = useCallback(() => {
    setValue(EQueryParams.paginationSetting, undefined)
  }, [setValue])

  const pagination = state[EQueryParams.paginationSetting] ?? INITIAL_PAGINATION

  return (
    <div>
      <div>
        <Button
          variant='outlined'
          onClick={handleAdd}
          style={{ width: 'min-content' }}
        >
          Add pagination
        </Button>
        <Button
          variant='outlined'
          onClick={handleClear}
          style={{ width: 'min-content' }}
        >
          Clear
        </Button>
      </div>
      <pre>{JSON.stringify(pagination, null, 2)}</pre>
    </div>
  )
}

export default PaginationControl
