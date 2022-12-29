import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'

const QueryParamsPanel = () => {
  const location = useLocation()
  const params = location.search.slice(1).split('&')

  return (
    <div>
      <h2>Query params:</h2>
      <pre>
        {params.map((p) => (
          <Fragment key={p}>
            {JSON.stringify(p)}
            <br />
          </Fragment>
        ))}
      </pre>
    </div>
  )
}

export default QueryParamsPanel
