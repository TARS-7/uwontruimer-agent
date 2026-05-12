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

  // Step 1
  address: AddressData | null

  // Step 2
  aantalKamers: number | null
  staatWoning: 'goed' | 'redelijk' | 'slecht' | null
  opleveringsdatum: string
  eigendomstype: 'huur' | 'koop' | null

  // Step 3 (huurwoning only)
  inspectierapportNaam: string | null
  inspectieWerkzaamheden: string[]

  // Step 3b – handmatige werkzaamheden (alleen als geen inspectierapport)
  geselecteerdeWerkzaamheden: string[]

  // Step 5 – photos (File[] voor thumbnails bij terug-navigatie)
  fotos: File[]
  fotosWaardevol: File[]
  // geüploade Storage URLs
  fotoUrls: string[]
  fotosWaardevollUrls: string[]

  // Step 5
  offerte: Offerte | null

  // Step 6
  naam: string
  email: string
  telefoon: string
}

export const initialWizardState: WizardState = {
  step: 1,
  address: null,
  aantalKamers: null,
  staatWoning: null,
  opleveringsdatum: '',
  eigendomstype: null,
  inspectierapportNaam: null,
  inspectieWerkzaamheden: [],
  geselecteerdeWerkzaamheden: [],
  fotos: [],
  fotosWaardevol: [],
  fotoUrls: [],
  fotosWaardevollUrls: [],
  offerte: null,
  naam: '',
  email: '',
  telefoon: '',
}
