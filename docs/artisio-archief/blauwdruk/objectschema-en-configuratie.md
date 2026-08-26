# Objectschema en configuratie (zoals werkelijk in gebruik)

Afgeleid uit de geëxporteerde data van Inboedels B.V. op 19-08-2026, niet uit documentatie.

## Het objectschema is minimaal

Artisio ondersteunt een per-afdeling configureerbaar objectschema (`dynamic_fields_template`).
**Alle 14 afdelingen gebruiken exact hetzelfde, minimale schema:**

| Veld | Type | Verplicht | Positie |
|---|---|---|---|
| `title` | ckeditor (rich text) | ✓ | 1 |
| `description` | ckeditor (rich text) | ✓ | 2 |

Per taal opgeslagen: `dynamic_fields = { "nl": {title, description}, "en": {title, description} }`.
Gemeten over alle 6.114 objecten: 100 % heeft nl én en, en er komt geen enkel ander veld voor.

> **Dit is de belangrijkste correctie op een eerste indruk.** De flexibele veldenmotor is aanwezig maar wordt niet benut. Er is geen gestructureerde vastlegging van afmetingen, kunstenaar, periode, materiaal, herkomst of conditie — dat zit allemaal als vrije tekst in `description`.
>
> **Gevolg voor nabouwen:** je hoeft geen configureerbare veldenmotor te bouwen. Twee rich-text velden per taal volstaan om de huidige praktijk één-op-één over te nemen. Bouw je later wél gestructureerde kenmerken, dan is dat een verbetering ten opzichte van Artisio, geen inhaalslag — maar besef dat de 6.114 bestaande beschrijvingen dan geparseerd moeten worden, want die structuur bestaat nu niet.

## Afgeleide beschrijvingen (Django-templates)
Per afdeling staan twee templates die uit de dynamic_fields een korte en lange omschrijving samenstellen:

- `short_description_template` — pakt alleen het veld met key `title`
- `description_template` — pakt alle velden behálve `title`

Beide in Django-templatesyntax, met `autoescape off` (HTML uit de editor wordt doorgelaten).

## Afdelingen (14)
Apparatuur (`tools`), Kunst, Boeken en Strips, Auto's en vervoer, Huis en inrichting,
Speelgoed en Modellen, Muziek en Instrumenten, Bedrijfsinventaris, Tuin en terras,
Multimedia, Militaria, Decoratieve Kunst, Mode, Sieraden en horloges

Elke afdeling heeft: `uuid`, `name` (nl/en), `key`, `dynamic_fields_template`,
`description_template`, `short_description_template`, `thumbnail_image_uuid`,
`marketing_group_uuid`, `ai_image_generation_enabled` (overal `false`).

## Categorieën (112)
Hangen onder een afdeling. Voorbeeld onder Apparatuur: Zaagmachines, Hulpmiddelen,
Koelkasten en ijskasten, Wasmachines, Drogers, Vrieskasten, Boormachines, Computers,
Airco's, Elektronica, Installatiemateriaal, Verlichting en Schakelmateriaal, Sport en Fitness.

Volledige lijst in `~/Artisio-archief/data/artisio-categories.json`.

## Overige configuratie in het archief
| Bestand | Inhoud |
|---|---|
| `artisio-branches.json` | 1 vestiging (Inboedels B.V.), 82 instelvelden |
| `artisio-settings.json` | accountinstellingen, rechten, talen, valuta, klanttitels, trust levels |
| `artisio-item-locations.json` | locatieboom van de loods (3 hoofdknopen) |
| `artisio-tax-statuses.json` | 3 btw-regimes |
| `artisio-users.json` | 3 gebruikers |
| `artisio-vendor-charges.json` | 22 kostenposten |

## Foto's — bewust niet gearchiveerd
38.615 foto's over 6.063 objecten, beschikbaar in vijf formaten (thumb/sm/lg/xlg/original,
samen circa 59 GB) via publieke URL's op `media.app.artisio.co`.
Besluit Jurriën 19-08-2026: **niet archiveren** — het pand is eind augustus 2026 leeg,
alle producten zijn dan weg, dus de foto's hebben geen restwaarde.
De URL's zitten wel in `artisio-inventories.json` (veld `images[].data.<formaat>.url`),
dus zolang Artisio actief is kan dit besluit worden teruggedraaid.
