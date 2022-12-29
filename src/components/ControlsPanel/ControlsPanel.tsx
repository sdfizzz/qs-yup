import { Divider } from '@mui/material'
import React, { useContext } from 'react'
import { CustomContext } from '../../contexts/customContext'
import { EQueryParams } from '../../contexts/enums'
import ClearControl from './components/ClearControl'
import SearchInput from './components/CustomInput'
import DateControl from './components/DateControl'
import DateRangeControl from './components/DateRangeControl'
import NumberControl from './components/NumberControl'
import PaginationControl from './components/PaginationControl'
import SelectEnumArrayControl from './components/SelectEnumArrayControl'
import SelectEnumControl from './components/SelectEnumControl'
import SelectIdsControl from './components/SelectIdsControl'
import styles from './ControlsPanel.module.less'

const ControlsPanel = () => {
  const { state, setValue } = useContext(CustomContext)

  return (
    <div className={styles.container}>
      <h2>Controls</h2>
      <ClearControl />
      <Divider />
      <SearchInput
        value={state[EQueryParams.search]}
        onChange={(v) => setValue(EQueryParams.search, v)}
      />
      <Divider />
      <DateControl />
      <Divider />
      <DateRangeControl />
      <Divider />
      <NumberControl />
      <Divider />
      <PaginationControl />
      <Divider />
      <SelectEnumArrayControl />
      <Divider />
      <SelectEnumControl />
      <Divider />
      <SelectIdsControl />
    </div>
  )
}

export default ControlsPanel
