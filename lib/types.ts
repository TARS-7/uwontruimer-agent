export interface AddressData {
  postcode: string
  huisnummer: string
  huisletter: string
  toevoeging: string
  straat: string
  woonplaats: string
  gemeente: string
  oppervlakte: number | null
  bouwjaar: number | null
  woningtype: string | null
  gebruiksdoel: string | null
  adresseerbaarobjectId: string | null
}

export interface OfferteOnderdeel {
  naam: string
  beschrijving: string
  bedragMin: number
  bedragMax: number
  isPM: boolean   // "prijs op aanvraag" — niet meegeteld in totaal
}

export interface Offerte {
  onderdelen: OfferteOnderdeel[]
  totaalMin: number
  totaalMax: number
  samenvatting: string
  geldigTot: string
  referentie: string
}

export interface WizardState {
  step: number

  // Stap 1 – type ontruiming
  ontruimingType: string | null

  // Stap 2 – woningtype + grootte
  woningType: string | null
  woningGrootte: string | null

  // Stap 3 – foto's
  fotos: File[]
  fotoUrls: string[]

  // Stap 4 – contactgegevens + adres
  address: AddressData | null
  naam: string
  email: string
  telefoon: string

  // Stap 5 – offerte cache
  offerte: Offerte | null
}

export const initialWizardState: WizardState = {
  step: 1,
  ontruimingType: null,
  woningType: null,
  woningGrootte: null,
  fotos: [],
  fotoUrls: [],
  address: null,
  naam: '',
  email: '',
  telefoon: '',
  offerte: null,
}
