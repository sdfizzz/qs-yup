import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import styles from './App.module.less'
import ControlsPanel from './components/ControlsPanel/ControlsPanel'
import QueryParamsPanel from './components/QueryParamsPanel/QueryParamsPanel'
import { CustomContext, customInitialState } from './contexts/customContext'
import { QueryParamsContextProvider } from './contexts/QueryParamsContext'
import { customSchema } from './contexts/schema'

export const App: React.FC = () => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <BrowserRouter>
      <QueryParamsContextProvider
        Context={CustomContext}
        initialState={customInitialState}
        schema={customSchema}
      >
        <div className={styles.container}>
          <ControlsPanel />
          <QueryParamsPanel />
        </div>
      </QueryParamsContextProvider>
    </BrowserRouter>
  </LocalizationProvider>
)
