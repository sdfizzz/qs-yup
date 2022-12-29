import type { IParseOptions, IStringifyOptions } from 'qs'
import { EStatus } from './enums'
import { IOption } from './types'

export const PAGINATION_OPTIONS = [10, 30, 50, 100] as const

export const INITIAL_PAGINATION = {
  offset: 0,
  limit: PAGINATION_OPTIONS[1],
} as const

/** Настройки для модуля qs */
export const STRINGIFY_QS_BASE_PARAMS: IStringifyOptions = {
  allowDots: true,
  encode: false,
  arrayFormat: 'comma',
}

export const PARSE_QS_BASE_PARAMS: IParseOptions = {
  allowDots: true,
  ignoreQueryPrefix: true,
  arrayLimit: 100,
  comma: true,
}

export const AXIOS_QS_BASE_PARAMS: IStringifyOptions = { allowDots: true }

export const SELECT_OPTIONS: IOption<EStatus>[] = [
  {
    value: EStatus.Arrived,
    label: 'Arrived',
  },
  {
    value: EStatus.Created,
    label: 'Created',
  },
  {
    value: EStatus.Deleted,
    label: 'Deleted',
  },
  {
    value: EStatus.Depart,
    label: 'Depart',
  },
  {
    value: EStatus.Expired,
    label: 'Expired',
  },
]

const ids = [1, 2, 3, 4, 5]
export const SELECT_NUMBER_OPTIONS: IOption<number>[] = ids.map((id) => ({
  value: id,
  label: `Value ${id}`,
}))
