import React, { useContext } from 'react'

import { Button } from '@mui/material'
import { CustomContext } from '../../../contexts/customContext'

const ClearControl = () => {
  const { clear } = useContext(CustomContext)

  return (
    <div>
      <Button variant='outlined' onClick={clear}>Clear all</Button>
    </div>
  )
}

export default ClearControl
