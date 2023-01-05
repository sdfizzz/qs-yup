import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { useEventCallback } from '@mui/material'
import isEqual from 'lodash/isEqual'
import noop from 'lodash/noop'
import qs from 'qs'
import { useLocation, useNavigate } from 'react-router-dom'
import type { ObjectSchema } from 'yup'
import { PARSE_QS_BASE_PARAMS, STRINGIFY_QS_BASE_PARAMS } from './constants'
import { Shape } from './schema'

export type TContextState<TState extends Record<string, unknown>> = {
  state: TState
  setValue: (key: keyof TState, value: unknown) => void
  clear: () => void
}

const createQueryParamsContext = <TQueryParams extends Record<string, unknown>>(
  initialState: TQueryParams
) => {
  const initialContextState: TContextState<TQueryParams> = {
    state: initialState,
    setValue: noop,
    clear: noop,
  }

  return React.createContext(initialContextState)
}

type QueryParamsContextProviderProps<TState extends Record<string, unknown>> =
  PropsWithChildren<{
    Context: React.Context<TContextState<TState>>
    initialState: TState
    schema: ObjectSchema<Shape<TState>>
  }>

const QueryParamsContextProvider = <TState extends Record<string, unknown>>({
  children,
  Context,
  initialState,
  schema,
}: QueryParamsContextProviderProps<TState>) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [state, setState] = useState<TState>()

  const queryParams = useMemo(
    () => qs.parse(location.search, PARSE_QS_BASE_PARAMS),
    [location.search]
  )

  const setQueryParams = useEventCallback((params: unknown) => {
    const queryParamsString = qs.stringify(params, STRINGIFY_QS_BASE_PARAMS)
    navigate(`${location.pathname}?${queryParamsString}`)
  })

  useEffect(() => {
    try {
      const state = schema.validateSync(queryParams, {
        abortEarly: false,
        stripUnknown: true,
      })
      setState(state as TState)
    } catch (e) {
      setQueryParams(initialState)
      console.error(e)
    }
  }, [initialState, navigate, queryParams, schema, setQueryParams])

  const clear = useCallback(() => {
    navigate(location.pathname)
  }, [location.pathname, navigate])

  const setValue = useCallback(
    (key: keyof TState, value: unknown) => {
      const newState = { ...(state ?? initialState), [key]: value || undefined }

      if (!isEqual(state, newState)) {
        setQueryParams(newState)
      }
    },
    [state, initialState, setQueryParams]
  )

  return (
    <Context.Provider
      value={{ state: state ?? { ...initialState }, setValue, clear }}
    >
      {children}
    </Context.Provider>
  )
}

export { createQueryParamsContext, QueryParamsContextProvider }
