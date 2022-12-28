import { StyledEngineProvider } from '@mui/material/styles'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './Global.module.less'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
)
