import { iso2ToIso3Map } from './iso2-to-iso3-map'

export function getCountryISO3(countryCode: string): string {
  if (!countryCode) {
    throw new Error('Country code is required')
  }

  if (typeof countryCode !== 'string') {
    throw new Error('Country code should be a string')
  }

  if (countryCode.length !== 2) {
    throw new Error('Country code should be 2 characters long')
  }

  const iso3Code = iso2ToIso3Map[countryCode.toUpperCase()]
  if (iso3Code === undefined) {
    throw new Error(`No ISO3 reference was found for ISO2 "${countryCode}"`)
  }

  return iso3Code
}
