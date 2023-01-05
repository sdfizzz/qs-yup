import dayjs from 'dayjs'
import * as yup from 'yup'

import type { TCustomState } from './customContext'
import { EQueryParams, EStatus } from './enums'
import type { TPagination } from './types'

export type ConditionalSchema<T> = T extends string
  ? yup.StringSchema
  : T extends number
  ? yup.NumberSchema
  : T extends boolean
  ? yup.BooleanSchema
  : // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends Record<any, any>
  ? yup.AnyObjectSchema
  : // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends Array<any>
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    yup.ArraySchema<any, any>
  : yup.AnySchema

export type Shape<Fields> = {
  [Key in keyof Fields]: ConditionalSchema<Fields[Key]>
}

const paginationSchema = yup
  .object()
  .shape<Shape<TPagination>>({
    limit: yup.number(),
    offset: yup.number(),
  })
  .default(undefined)

const searchSchema = yup.string().optional().default(undefined)

const numberSchema = yup
  .number()
  .optional()
  .default(undefined)
  .transform((value) => (Number.isInteger(value) ? Number(value) : undefined))

const numberArraySchema = yup
  .array()
  .of(yup.number())
  .when({
    is: (value: unknown) => typeof value === 'string',
    then: (schema) => schema.transform((_, original) => [Number(original)]),
  })
  .optional()
  .default(undefined)
  .transform((value: unknown[]) => value ?? [])

const statusSchema = yup
  .mixed<EStatus>()
  .oneOf(Object.values(EStatus))
  .optional()
  .default(undefined)

const statusesSchema = yup
  .array()
  .of(yup.mixed().oneOf(Object.values(EStatus)))
  .when({
    is: (value: unknown) => value && typeof value === 'string',
    then: (schema) =>
      schema.when({
        is: (value: string) => value.includes(','),
        then: (schema) => schema.transform((_, value) => value.split(',')),
        otherwise: (schema) => schema.transform((_, value: EStatus) => [value]),
      }),
  })
  .optional()
  .default(undefined)

const dateSchema = yup
  .string()
  .test((value) => !value || dayjs(value).isValid())
  .optional()
  .default(undefined)

const dateRangeSchema = yup
  .array()
  .of(yup.string().test((value) => !value || dayjs(value).isValid()))
  .when({
    is: (value: unknown) => value && typeof value === 'string',
    then: (schema) =>
      schema.when({
        is: (value: string) => value.includes(','),
        then: (schema) => schema.transform((_, value) => value.split(',')),
        otherwise: (schema) => schema.transform((_, value) => [value]),
      }),
  })
  .optional()
  .default(undefined)

export const customSchema = yup.object<Shape<TCustomState>>({
  [EQueryParams.paginationSetting]: paginationSchema,
  [EQueryParams.search]: searchSchema,
  [EQueryParams.numberValue]: numberSchema,
  [EQueryParams.selectedIds]: numberArraySchema,
  [EQueryParams.status]: statusSchema,
  [EQueryParams.statuses]: statusesSchema,
  [EQueryParams.date]: dateSchema,
  [EQueryParams.dateRange]: dateRangeSchema,
})
