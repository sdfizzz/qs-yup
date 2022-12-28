import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import styles from './App.module.less'
import ControlsPanel from './components/ControlsPanel/ControlsPanel'
import QueryParamsPanel from './components/QueryParamsPanel/QueryParamsPanel'

export const App: React.FC = () => (
  <BrowserRouter>
    <div className={styles.container}>
      <ControlsPanel />
      <QueryParamsPanel />
    </div>
  </BrowserRouter>
)
