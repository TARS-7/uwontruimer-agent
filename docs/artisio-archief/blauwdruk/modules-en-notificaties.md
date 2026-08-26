# Overige modules en het werkelijke notificatiegebruik

Vastgelegd 19-08-2026, uit de live-omgeving van Inboedels B.V.

## Welke mails vuren écht af

Er staan **55 templates** geconfigureerd. Uit 10.409 verzonden notificaties (2023 t/m 2026) blijkt
dat er ooit **9** zijn gebruikt:

| Template | Verzonden | Aandeel |
|---|---:|---:|
| `winning_notification_with_reserve_met` | 5.000 | 48 % |
| `account_creation_notification` | 3.499 | 34 % |
| `invoice_paid_notification` | 1.475 | 14 % |
| `unpaid_invoice_notification` | 248 | 2,4 % |
| `overdue_invoice_notification` | 108 | 1,0 % |
| `settlement_notification` | 66 | 0,6 % |
| `credit_note_notification` | 7 | |
| `second_overdue_invoice_notification` | 4 | |
| `third_overdue_invoice_notification` | 2 | |

Alles is **e-mail**; SMS is nergens gebruikt.

Volume per jaar: 2023 → 786, 2024 → 3.871, 2025 → 4.692, 2026 → 1.060 (t/m augustus).

> **Voor nabouwen — dit scheelt enorm.** Je hebt geen notificatiemotor met 55 sjablonen nodig maar
> negen mails, en feitelijk drie die er echt toe doen: *je hebt gewonnen*, *je account is aangemaakt*,
> *je betaling is ontvangen*. Samen 96 % van al het mailverkeer.
>
> De incassotrap (`unpaid` → `overdue` → `second_overdue` → `third_overdue`) loopt van 248 naar 108
> naar 4 naar 2. Dat is een gezond trechterbeeld: verreweg de meeste mensen betalen na de eerste
> herinnering. Bouw de trap wel, maar hij hoeft niet ingewikkeld te zijn.
>
> Opvallend: `winning_notification_with_reserve_not_met` is nooit verstuurd. Onder de limiet verkopen
> gebeurt wel (`sold_via_negotiation`), maar daar gaat kennelijk geen automatische mail overheen.

## Marketing — `/marketing`
Twee tabbladen: **Audiences** en **Customer Navigator**.
Endpoint: `/api/v1/marketing/audiences/`

Bestaande audiences (2):
| Naam | Onderwerp | Leden | Uitgeschreven | Aangemaakt |
|---|---|---:|---:|---|
| Ophaal datums | Laatste ophaalkans | 60 | 0 | 2026-08-17 |
| Vintage | Vintage bidders | 0 | 0 | 2024-04-19 |

Kolommen: Audience, Subject, Subscribers, Unsubscribed, Created At, Created By.

**Customer Navigator** is de enige plek met veilingfilters op klanten (veld `Sale No` + checkbox
`Is Winning Bidder` / `Is Buyer`) — daar selecteer je winnaars van een veiling en voeg je ze via
*Add All to Audience* toe aan een audience.

> **Belangrijke beperking:** Artisio kan zelf géén bulkmail versturen. In een audience zijn de enige
> acties *Unsubscribe* en *Remove From Audience*, plus een Export-knop. Alle 55 templates zijn
> **triggered** — ze vuren op een systeemgebeurtenis. Een eenmalige mededeling aan een groep klanten
> moet dus buiten Artisio verstuurd worden. Dit is een echt gat in het product en een goede reden om
> het bij nabouwen wél in te bouwen.

## Reports — `/reports`
Endpoint: `/api/v1/reports/?active=true`. Slechts **2** rapporten:
- Standard Invoicing Report
- Standard Settlement Report

Per rapport twee knoppen: downloaden en instellen.

> Het rapportagedeel is minimaal. Wie hier iets wil weten over doorlooptijd, opbrengst per categorie,
> of prestaties per inbrenger, moet het zelf uit de data halen. Bij nabouwen is dit dus geen last maar
> een kans — de lat ligt laag.

## Shipping — `/shipping`
**Geen eigen entiteit.** Het is een gefilterde weergave op `/api/v1/invoices/` met
`shipping_status=paid,unpaid,cancelled`. 34 records.

Kolommen: Invoice, Type, Sale, Buyer, Buyer VAT, Items, Status, Raised, Shipping.
Bulkacties: *Mark as Dispatched* / *Unmark as Dispatched*.
De verzendgegevens zitten als velden op de factuur: `shipping_amount`, `shipping_vat`,
`shipping_tracking_code`, `shipping_taxable`, `shipping_auto_calculation`, `is_dispatched`,
`is_pickup`, `shipping_address_uuid`.

> **Voor nabouwen:** verzending is hier geen apart domein maar een handvol velden op de factuur plus
> één statusfilter. Met 34 verzendingen op 1.933 facturen is dat ook terecht — vrijwel alles wordt
> opgehaald, niet verstuurd.

## LLP (Live Lot Performance) — `/llp-sales`
Endpoint: `/api/v1/auctions/llp/`. **Leeg — nooit gebruikt.**
Kolommen zouden zijn: Sale, Title, Start/End Date, No. of Bidders, Approved/Pending/Rejected Bidders,
Number of Lots, Total Sold, Total Unsold, Total Over Reserve, Total Under Reserve.

## Auction Console — `/start-sale`
De live-afslagmodule. **Nooit gebruikt:** alle 146 veilingen zijn `timed`.

> Samen met LLP is dit het grootste deel van Artisio dat je kunt overslaan bij nabouwen.

## Finance-submenu
`/invoices`, `/settlements`, `/shipping`, `/invoice-payments`, `/settlement-payments`

## Stock-submenu
`/inventory`, `/temporary`, `/condition-report-requests`, `/transfer-notes`

## Setup-submenu
`/branches`, `/categories`, `/departments`, `/users`, `/templates`, `/dependent-fields`,
`/custom-lot-sequence` (CLS)
