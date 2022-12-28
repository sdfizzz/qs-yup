import React, { useState } from 'react'
import CustomInput from './components/CustomInput'
import styles from './ControlsPanel.module.less'

const ControlsPanel = () => {
  // controls
  const [search, setSearch] = useState('')

  return (
    <div className={styles.container}>
      <h2>Controls</h2>
      <CustomInput value={search} onChange={setSearch} />
    </div>
  )
}

export default ControlsPanel
