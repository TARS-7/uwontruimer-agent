# Financiële entiteiten: Invoice, Settlement, Payment, Vendor Charge, Bidder

Twee gescheiden geldstromen: **Invoice** naar de koper, **Settlement** naar de inbrenger. Ze raken elkaar alleen via de kavel.

---

## Invoice (koopfactuur) — `/api/v1/invoices/` — 75 velden

### Bedragen (allemaal read-only, dus **berekend door het systeem**)
| Veld | Betekenis |
|---|---|
| hammer_price / hammer_vat | hamerslag + btw |
| premium / premium_vat | opgeld + btw |
| miscellaneous_charge / miscellaneous_vat | diverse kosten + btw |
| extra_charge / extra_charge_vat | extra kosten + btw |
| extra_charge_data / miscellaneous_data | specificatie |
| total_buyer_vat | totale btw koper |
| shipping_amount / shipping_vat | verzending |
| total_amount / paid_amount | totaal / betaald |
| outstanding_amount | openstaand |

> De opbouw hamerslag → opgeld → diverse → extra → verzending, elk met eigen btw-regel, is de kern van de factuurmotor. Dat `premium_vat` losstaat van `hammer_vat` is geen luxe: bij margegoederen gelden verschillende regimes over hamerslag en opgeld.

### Type & status
| Veld | Waarden |
|---|---|
| type | `auction` / `manual` / `deposit` / `credit_note` / `service` |
| status | read-only, systeemgestuurd |
| complaint_status | `pending` / `resolved` |
| is_credit_note / is_credited | afgeleid |
| approved, is_processed, is_legacy, is_not_editable | procesvlaggen |

### Overige velden
`auction_uuid`, `customer_uuid`, `paddle_number`, `invoice_no` (RO), `s_no`, `date`, `paid_at`,
`currency_uuid` (RO) / `display_currency_uuid` / `currency_exchanges`,
`is_tax_applied`, `is_registered_business`, `invoice_tax_rate`, `tax_rate` (RO),
`is_tax_rate_set_from_shipping_address`, `shipping_address_tax_data`, `shipping_address_uuid`, `invoice_addresses`,
`shipping_taxable`, `shipping_auto_calculation`, `shipping_tracking_code`, `is_dispatched`, `is_pickup`,
`deposit_amount`, `deposit_reservations`, `deposit_sale_no` (RO), `deposit_invoice_payment_amount`, `deposit_invoice_payment_type`,
`day_count_since_raise` (RO), `overdue_days_count` (RO), `send_unpaid_invoice_notification`,
`overdue_notification_send_at`, `unpaid_notification_send_at`, `collection_appointment_notification_sent_at`,
`is_collected_by_third_party`, `collector`, `collector_note`,
`eligible_for_online_payments`, `exclude_from_auto_payments`, `is_exported`, `last_synced_at`,
`single_generation`, `financial_items_data`, `data`, `extra_info`, `comment`, `preferred_language_code`

> **Voor nabouwen:** btw wordt afgeleid uit het **verzendadres** (`is_tax_rate_set_from_shipping_address`). Bij grensoverschrijdende verkoop is dat verplicht en het is een klassieke bron van fouten. Bouw dit in vanaf dag één, niet achteraf.
>
> De incassoketen zit in het model verankerd: `overdue_notification_send_at` → `unpaid_notification_send_at` → `is_collected_by_third_party` + `collector`. Wanbetaling is bij veilingen structureel, geen uitzondering.

---

## Settlement (afrekening inbrenger) — `/api/v1/settlements/` — 54 velden

### Bedragen
| Veld | Betekenis |
|---|---|
| hammer_price (RO) / full_hammer_price (RO) / full_hammer_vat (RO) | hamerslag |
| hammer_adjustment / hammer_adjustment_vat | correctie op hamerslag |
| hammer_vat | btw hamerslag |
| commission / commission_vat | commissie huis |
| rebate / rebate_vat | korting |
| insurance_fee / insurance_vat | verzekering |
| lot_handling_charge / lot_handling_vat | behandelkosten |
| miscellaneous (RO) / miscellaneous_vat | diversen |
| shipping_amount / shipping_vat | verzending |
| sub_total (RO) / total_amount / paid_amount | |
| **net** (RO) | **wat de inbrenger overhoudt** |

### Type & status
| Veld | Waarden |
|---|---|
| status | `paid` / `unpaid` / `cancelled` / `debited` |
| type | `manual` / `auction` / `auction_introductory` / `manual_introductory` / `debit_note` |

`debited` + `debit_note` = de inbrenger moet júist betalen (kosten hoger dan opbrengst, bv. alles onverkocht). Dat is bij ontruimingen een reëel scenario en moet in het model zitten.

### Overige velden
`customer_uuid` (verplicht), `auction_uuid`, `settlement_no` (RO), `date`,
`miscellaneous_item_uuids` (verplicht), `financial_items_data`, `unsettled_financial_items_data`,
`settlement_charges_data`, `unsaved_charges`, `total_financial_items` (RO),
`is_paid`, `notification_sent_at`, `settlement_addresses`, `additional_page`,
`skip_pdf_generation`, `skip_processed`, `is_exported`, `is_processed` (RO), `is_legacy` (RO), `is_not_editable` (RO),
`last_synced_at`, `preferred_language_code`, `shipping_tracking_code`, `shipping_taxable`,
`data`, `extra_info`, `comment`

> `unsettled_financial_items_data` is belangrijk: kavels die nog niet zijn afgerekend blijven zichtbaar. Een inbrenger met spullen in drie veilingen krijgt niet drie losse afrekeningen tenzij je dat wilt.

---

## Payment (betaling) — `/api/v1/payments/`
`uuid` (RO), `amount`, `currency_uuid`, `date`, `description`, **`method`** (verplicht, max 32),
`type` (`refund` / `payment`), `accounting_code`, `reference_number` (max 11), `bank_account`,
`beneficiary_relation_uuid`, `reconciled`, `exchange_rate`, `fee_percent`, `created_at`/`updated_at`

> Eén Payment-entiteit bedient zowel inkomende betalingen (facturen) als uitgaande (afrekeningen), gekoppeld via `/invoice-payments/` en `/settlement-payments/`. `reconciled` + `accounting_code` zijn de haakjes naar de boekhouding.

---

## Vendor Charge (kostenpost inbrenger) — `/api/v1/vendor-charges/`
`uuid` (RO), **`name`** (verplicht, max 255), `level` (RO), `data` (RO),
en de koppelvelden: `branch_uuid`, `customer_uuid`, `receipt_uuid`, `inventory_uuid`, `lot_uuid`, `source_uuid`

> **Voor nabouwen:** `level` is read-only en afgeleid uit wélk koppelveld gevuld is. Een kostenpost kan hangen op branch-, klant-, bon-, object- of kavelniveau, met overerving van grof naar fijn. Dat is een elegant patroon en waard om over te nemen.

---

## Bidder (bieder in een veiling) — `/api/v1/bidders/` — 35 velden
Een Customer wordt per veiling een Bidder. Bods verwijzen naar `bidder_uuid`, niet naar `customer_uuid`.

| Veld | Type | Bijzonderheden |
|---|---|---|
| auction_uuid / customer_uuid | field | beide verplicht |
| paddle_number | string | max 10 |
| **status** | choice | `approved` / `pending` / `rejected` / `awaiting_deposit` |
| approved_at | datetime | |
| **credit_limit** | integer | |
| **credit_limit_type** | choice | `auction` / `lot` |
| total_spent (RO) / left_credit_limit (RO) | decimal | live bewaking van de limiet |
| skip_auction_deposit_requirement | boolean | |
| skip_credit_card_verification | boolean | |
| skip_identity_verification | boolean | |
| create_deposit_invoice | boolean | |
| bidding_url / bidding_url_expire_date | string / datetime | persoonlijke biedlink |
| preferred_clerk_uuid | field | vaste medewerker |
| contact_number, reference, company_id, language_uuid | | |
| pre_approve_commission_bids | boolean | |
| pre_approve_telephone_bids | boolean | |
| total_commission_bids (RO) / total_telephone_bids (RO) | field | |
| watchlist (RO) | field | volglijst |
| negotiation_bidder | boolean | nazaal-onderhandelaar |
| is_pickup | boolean | |
| created_manually | boolean | |
| live_id / third_party_status | string | externe koppeling |
| date, created_at, updated_at | datetime | |

> **Voor nabouwen:** `credit_limit` met `left_credit_limit` als live-berekend veld is een echte risicobeheersing — een bieder kan niet voor meer kopen dan is goedgekeurd. Bij ontruimingsveilingen met onbekende kopers is dit het verschil tussen een vlotte afwikkeling en een stapel oninbare facturen. De drie `skip_*`-vlaggen zijn de ontsnappingsroute voor vaste klanten.
