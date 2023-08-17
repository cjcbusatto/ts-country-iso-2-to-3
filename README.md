# ts-country-iso-2-to-3

> Convert a country code ISO 3166-1 Alpha-2 to ISO 3166-1 Alpha-3... with types!

## Introduction

This is a fork of [country-iso-2-to-3](https://github.com/vtex/country-iso-2-to-3).

## Install

```sh
$ npm install ts-country-iso-2-to-3
```

## Usage

```ts
import { getCountryISO3 } from 'ts-country-iso-2-to-3'

console.log(getCountryISO3('BR')) // BRA
console.log(getCountryISO3('US')) // USA
console.log(getCountryISO3('INVALID_ISO2')) // Error: No ISO3 reference was found for ISO2: "INVALID_ISO2"
```

## API

### getCountryISO3(countryCode: string): string

**Parameter**:
A string with a country code in ISO 3166-1 Alpha-2

**Return**:
A string with the country code in ISO 3166-1 Alpha-3

---

## License

MIT © Balcony207
