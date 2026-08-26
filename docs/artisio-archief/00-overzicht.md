# Artisio-archief — Inboedels B.V. / Vendulion

Vastgelegd: 19 augustus 2026
Bron: app.artisio.co (AMS v2.25.23), account Kuijper Jurriën, branch Inboedels B.V.
Doel: volledige eigen data + functionele blauwdruk veiligstellen vóór opzegging SaaS-abonnement.

## Scope-afspraak
- WEL: eigen data, eigen documenten/teksten, functionele specificatie (schermen, velden, statussen, workflows), API-datamodel van het eigen account.
- NIET: broncode, bundles of assets van Artisio zelf.

## Architectuur (waargenomen)
- Frontend SPA: `app.artisio.co` (Vue, versie-label v2.25.23)
- REST API: `https://api.artisio.co/api/v1/` — Django REST Framework
  - Paginatie: `?limit=&page=&total=` → respons `{count, next, previous, results[]}`
  - Relaties via `?expand=` (komma-gescheiden, dot-notatie voor nested: `customer.billing_address.country`)
  - Sortering: `?ordering=-veld`
  - Auth: Bearer-token
  - Alle records hebben een `uuid` als primaire sleutel; relaties heten `<entiteit>_uuid`
  - `OPTIONS <endpoint>` geeft volledig veldmodel (type, required, read_only, label)

## Modulestructuur (navigatie)
| Menu | Route | Omschrijving |
|---|---|---|
| Stock | `/inventory` | Voorraad / in te brengen objecten |
| Stock | `/temporary` | Tijdelijke objecten |
| Stock | `/condition-report-requests` | Aanvragen conditierapport |
| Stock | `/transfer-notes` | Overdrachtsbonnen |
| Receipts | `/receipts` | Inbrengbonnen (inname bij inbrenger) |
| Sales | `/sales` | Veilingen |
| Auction Console | `/start-sale` | Live-veilingconsole (afslag) |
| LLP | `/llp-sales` | Live Lot Player-verkopen |
| Marketing | `/marketing` | Audiences / campagnes |
| Customers | `/customers` | Klanten (kopers + inbrengers) |
| Finance | `/invoices` | Facturen (kopers) |
| Finance | `/settlements` | Afrekeningen (inbrengers) |
| Finance | `/shipping` | Verzending |
| Finance | `/invoice-payments` | Betalingen op facturen |
| Finance | `/settlement-payments` | Uitbetalingen aan inbrengers |
| Reports | `/reports` | Rapportages |
| — | `/notification-activity` | Verzonden notificaties |
| Setup | `/branches` | Vestigingen |
| Setup | `/categories` | Categorieën |
| Setup | `/departments` | Afdelingen |
| Setup | `/users` | Gebruikers |
| Setup | `/templates` | Mail-/documenttemplates (triggered) |
| Setup | `/dependent-fields` | Afhankelijke velden |
| Setup | `/custom-lot-sequence` | Eigen kavelnummering (CLS) |
| — | `/profile` | Eigen profiel |
| — | `/feature-requests` | Feature requests |

## Bevestigde API-endpoints en omvang veldmodel
| Endpoint | Naam | Velden (POST-schema) |
|---|---|---|
| `/inventories/` | Inventory List | 66 |
| `/receipts/` | Receipt List | 33 |
| `/auctions/` | Auction List | 87 |
| `/lots/` | Lot List | 31 |
| `/bids/` | Bid List | 13 |
| `/pre-bids/` | Pre Bid List | 20 |
| `/bidders/` | Bidder List | 35 |
| `/customers/` | Customer List | 54 |
| `/invoices/` | Invoice List | 75 |
| `/settlements/` | Settlement List | 54 |
| `/payments/` | Payment List | 16 |
| `/vendor-charges/` | Vendor Charge List | 10 |
| `/branches/` | Branch List | 82 |
| `/categories/` | Category List | 28 |
| `/departments/` | Department List | 13 |
| `/users/` | User List | 28 |
| `/templates/` | Template List | 17 |
| `/tax-statuses/` | Tax Status List | 10 |
| `/reports/` | Reports List | 9 |
| `/settings/` | Settings List | — |
| `/branches/item-locations/compact-tree/` | Locatieboom | — |
| `/dashboard/settlements/` | Settlements-dashboard | — |
| `/settlements/compact-list/` | Settlements compact | — |

## Waar staat wat
- **Blauwdruk + documentatie:** deze map, in de git-repo
- **Data (361 MB):** `~/Artisio-archief/data/` — buiten de repo, te groot voor git
- **Mailtemplates (leesbaar):** `~/Artisio-archief/documenten/`

## Geëxporteerde data (19-08-2026, volledig)
| Dataset | Records | Bestand |
|---|---|---|
| Klanten | 3.564 | `artisio-customers.json` |
| Voorraadobjecten | 6.114 | `artisio-inventories.json` |
| Kavels | 11.947 | `artisio-lots.json` |
| Biedingen | 23.459 | `artisio-bids.json` |
| Bieders | 8.514 | `artisio-bidders.json` |
| Biedingen vooraf | 2.135 | `artisio-pre-bids.json` |
| Facturen | 1.933 | `artisio-invoices.json` |
| Betalingen | 1.576 | `artisio-payments.json` |
| Afrekeningen | 313 | `artisio-settlements.json` |
| Veilingen | 146 | `artisio-auctions.json` |
| Inbrengbonnen | 54 | `artisio-receipts.json` |
| Categorieën | 112 | `artisio-categories.json` |
| Mailtemplates | 55 | `artisio-templates.json` |
| Verzonden notificaties | 10.409 | `artisio-notification-activity.json` |
| Marketing-audiences | 2 | `artisio-audiences.json` |
| Rapportdefinities | 2 | `artisio-reports.json` |
| Kostenposten | 22 | `artisio-vendor-charges.json` |
| Afdelingen | 14 | `artisio-departments.json` |
| Btw-regimes | 3 | `artisio-tax-statuses.json` |
| Gebruikers | 3 | `artisio-users.json` |
| Locatieboom | 3 | `artisio-item-locations.json` |
| Vestiging | 1 | `artisio-branches.json` |
| Accountinstellingen | object | `artisio-settings.json` |

**Foto's: bewust niet gearchiveerd.** 38.615 stuks, circa 59 GB over vijf formaten.
Besluit 19-08-2026: pand is eind augustus leeg, producten weg, geen restwaarde.
URL's zitten in `artisio-inventories.json` mocht dit herzien worden.

**Let op:** de ingebouwde exportknop van Artisio levert slechts 9 van de 54 klantvelden.
Alles hierboven is via de API opgehaald en dus compleet. Zie
`data/voorbeeld-ingebouwde-export-klanten.csv` voor het verschil.

## Kernbegrippen datamodel
- **Receipt** = inbrengbon: één inbrenger levert objecten aan
- **Inventory** = fysiek object in voorraad, hangt aan een receipt
- **Lot** = kavel: een inventory-item ingezet in een specifieke auction
- **Auction** (Sale) = veiling, met `sale_no`
- **Bid / Pre-Bid** = bod tijdens veiling / vooraf uitgebracht bod
- **Bidder** = klant geregistreerd als bieder op een veiling
- **Invoice** = factuur aan koper
- **Settlement** = afrekening richting inbrenger (vendor), met vendor charges


## Blauwdruk-documenten
| Document | Inhoud |
|---|---|
| `blauwdruk/customer.md` | klant, 54 velden |
| `blauwdruk/inventory.md` | voorraadobject, 66 velden |
| `blauwdruk/receipt-lot-bid.md` | inbrengbon, kavel, bod, bod-vooraf |
| `blauwdruk/auction.md` | veiling, 87 velden |
| `blauwdruk/financieel.md` | factuur, afrekening, betaling, kostenpost, bieder |
| `blauwdruk/objectschema-en-configuratie.md` | dynamic_fields, afdelingen, categorieën |
| `blauwdruk/sluitingsmechanisme.md` | anti-sniping, gefaseerd sluiten, met meetgegevens |
| `blauwdruk/modules-en-notificaties.md` | marketing, reports, shipping, LLP, werkelijk mailgebruik |

## Wat je bij nabouwen kunt overslaan
Gemeten, niet gegokt:
- **Auction Console (live afslag)** — alle 146 veilingen zijn `timed`, nooit gebruikt
- **LLP (Live Lot Performance)** — leeg
- **46 van de 55 mailtemplates** — nooit gevuurd; 9 zijn genoeg, 3 dekken 96 % van het volume
- **Configureerbare veldenmotor** — alle 14 afdelingen gebruiken hetzelfde schema van titel + beschrijving
- **SMS** — nooit gebruikt
- **Verzending als apart domein** — 34 verzendingen op 1.933 facturen; het zijn velden op de factuur
