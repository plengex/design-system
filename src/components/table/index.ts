import defu from 'defu'
import {
  startCase,
  isNil,
  omit,
} from 'lodash-es'
import { HTMLAttributes } from 'vue-demi'
import { LiteralUnion } from 'type-fest'

type KeyType<T> = LiteralUnion<keyof T & string, string>

type LabelType<T> = LiteralUnion<Capitalize<keyof T & string>, string>

export type ApperanceVariant = 'card' | 'table'

export interface TableField<T = Record<string, unknown>> {
  /**
   * Field's key
   */
  key: KeyType<T>,
  /**
   * Field's Label
   */
  label?: LabelType<T>,
  /**
   * field width, value in percent
   */
  width?: number | string,
  /**
   * Function for transforming value in
   */
  formatter?: (value: unknown, item: T) => string,

  tdClass?: HTMLAttributes['class'],

  thClass?: HTMLAttributes['class'],
}

export function baseFormatter (value: unknown): string {
  return isNil(value) ? '-' : String(value)
}

function normalizeField<T> (field: TableField<T>): TableField<T> {
  return defu(field, {
    label    : startCase(field.key),
    formatter: baseFormatter,
  })
}

export function defineTable<T> (fields: Array<TableField<T>> | string[]): Array<TableField<T>> {
  return fields.map((field: TableField<T> | string) => {
    return typeof field === 'string'
      ? normalizeField<T>({ key: field })
      : normalizeField<T>(field)
  })
}

export function withKey (item: Record<string, unknown>) {
  return defu(item, { _key: Symbol('item-key') })
}

export function withoutKey (item: Record<string, unknown>) {
  return omit(item, '_key')
}

/**
 * Add unit to unitless value
 * @param value value
 * @param unit default unit
 */
export function withUnit (value?: number | string | undefined, unit = '%') {
  if (!value)
    return

  if (Number.isFinite(Number(value)))
    return `${value}${unit}`

  return value
}
