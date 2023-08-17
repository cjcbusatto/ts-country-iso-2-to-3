import { describe, expect, it } from 'vitest'
import { getCountryISO3 } from '../src/index'
import { ibanDotComList } from './fixtures/iban.com-list'

describe('getCountryISO3', () => {
  it("should return 'USA' when 'US' is passed", () => {
    expect(getCountryISO3('US')).toBe('USA')
  })

  it("should return 'BRA' when 'BR' is passed", () => {
    expect(getCountryISO3('BR')).toBe('BRA')
  })

  it("should return 'CUW when 'CW' is passed", () => {
    expect(getCountryISO3('CW')).toBe('CUW')
  })

  it("should return 'BES' when 'BQ' is passed", () => {
    expect(getCountryISO3('BQ')).toBe('BES')
  })

  it("should return 'SXM' when 'SX' is passed", () => {
    expect(getCountryISO3('SX')).toBe('SXM')
  })

  it('should support the list of countries from iban.com', () => {
    ibanDotComList.forEach((iso2) => {
      expect(getCountryISO3(iso2)).toBeDefined()
    })
  })

  it("should throw an error when an invalid code ('XX') is passed", () => {
    expect(() => getCountryISO3('XX')).toThrowError(
      'No ISO3 reference was found for ISO2 "XX"'
    )
  })
})
