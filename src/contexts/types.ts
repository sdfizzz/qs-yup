export interface TPagination {
  /**
   * Указывает количество получаемых данных.
   */
  limit: number
  /**
   * Указывает смещение.
   */
  offset?: number
}

export interface IOption<TValue = string> {
  value: TValue
  label: string
}
