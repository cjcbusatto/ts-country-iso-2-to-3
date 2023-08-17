import { iso2ToIso3Map } from './iso2-to-iso3-map'

export function getCountryISO3(countryCode: string): string {
  const iso3Code = iso2ToIso3Map[countryCode]
  if (iso3Code === undefined) {
    throw new Error(`No ISO3 reference was found for ISO2 "${countryCode}"`)
  }

  return iso3Code
}
