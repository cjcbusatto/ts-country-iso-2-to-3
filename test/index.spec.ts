import { describe, expect, it } from 'vitest'
import { getCountryISO3 } from '../src/index'

describe('getCountryISO3', () => {
  it("should return 'USA' when 'US' is passed", () => {
    expect(getCountryISO3('US')).toBe('USA')
  })

  it("should return 'BRA' when 'BR' is passed", () => {
    expect(getCountryISO3('BR')).toBe('BRA')
  })

  it("should throw an error when 'XX' is passed", () => {
    expect(() => getCountryISO3('XX')).toThrowError(
      'No ISO3 reference was found for ISO2 "XX"'
    )
  })
})
