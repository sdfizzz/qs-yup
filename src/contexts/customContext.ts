import { INITIAL_PAGINATION } from './constants'
import type { EStatus } from './enums'
import { EQueryParams } from './enums'
import { createQueryParamsContext } from './QueryParamsContext'
import type { TPagination } from './types'

export type TCustomState = {
  [EQueryParams.paginationSetting]: TPagination
  [EQueryParams.search]?: string
  [EQueryParams.numberValue]?: number
  [EQueryParams.selectedIds]?: number[]
  [EQueryParams.status]?: EStatus
  [EQueryParams.statuses]?: EStatus[]
  [EQueryParams.date]?: string
  [EQueryParams.dateRange]?: string[]
}

export const customInitialState = {
  [EQueryParams.paginationSetting]: INITIAL_PAGINATION,
}

export const CustomContext =
  createQueryParamsContext<TCustomState>(customInitialState)
