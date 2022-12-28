import type { IParseOptions, IStringifyOptions } from 'qs'

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
