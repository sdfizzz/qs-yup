import { Button } from '@mui/material'
import React, { useCallback, useContext } from 'react'

import { CustomContext } from '../../../../src/contexts/customContext'
import { EQueryParams } from '../../../../src/contexts/enums'

const values = [3, 5, 6]

const NumberControl = () => {
  const { state, setValue } = useContext(CustomContext)

  const handleChange = useCallback(
    (value?: number) => {
      setValue(EQueryParams.numberValue, value)
    },
    [setValue]
  )

  const numberValue = state[EQueryParams.numberValue]

  return (
    <div>
      <div style={{ display: 'flex', gap: '12px' }}>
        {values.map((v) => (
          <Button
            key={`key${v}`}
            variant='outlined'
            onClick={() => handleChange(v)}
          >
            set {v}
          </Button>
        ))}
        <Button variant='outlined' onClick={() => handleChange()}>
          clear number value
        </Button>
      </div>
      <span>numberValue: {numberValue}</span>
    </div>
  )
}

export default NumberControl
