import React from 'react'
import { useLocation } from 'react-router-dom'

const QueryParamsPanel = () => {
  //   const navigate = useNavigate();
  const location = useLocation()

  const params = location.search.slice(1).split('&')

  return (
    <div>
      <h2>Query params:</h2>
      <pre>{JSON.stringify(params)}</pre>
    </div>
  )
}

export default QueryParamsPanel
