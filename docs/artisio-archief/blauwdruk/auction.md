# Entiteit: Auction (veiling) — 87 velden

Endpoint: `/api/v1/auctions/` — "Auction List". In de UI heet dit **Sales**.

Verreweg de zwaarste entiteit. Een veiling is hier geen datum met kavels, maar een compleet contract: tarieven, termijnen, kijkdagen, ophaalvenster, verificatie-eisen en juridische teksten.

## Kern
| Veld | Type | Verplicht | RO | Bijzonderheden |
|---|---|---|---|---|
| uuid | string | | ✓ | |
| sale_no | string | | | max 55 — hét nummer waarop alles aanhaakt |
| title / description | field | | | |
| branch_uuid | field | | | |
| department_uuid | field | ✓ | | |
| category_uuid | field | | | |
| **type** | choice | ✓ | | `live` / `timed` |
| **purchase_type** | choice | | | `buy_now_only` / `bid_only` / `both` |
| **status** | choice | ✓ | | `draft` / `published` / `listed` / `completed` / `archived` |
| is_private | boolean | | | besloten veiling |
| featured | boolean | | | uitgelicht |
| dates | field | | | veilingdagen (meerdaags mogelijk) |
| start_date / end_date | datetime | | ✓ | afgeleid uit `dates` |
| after_sale_end_date | datetime | | | einde nazaal |
| strict_end_date | datetime | | | harde sluiting |
| created_at / updated_at | datetime | | ✓ | |

## Geld
| Veld | Type | Bijzonderheden |
|---|---|---|
| currency_uuid | field | |
| currency_exchanges / conversion_rate | field / decimal | meerdere valuta's tonen |
| **premiums** | field | opgeldstaffel (buyer's premium) |
| minimum_premium | decimal | |
| tax_rate | decimal | algemeen btw-tarief |
| hammer_tax_rate | decimal | btw over hamerslag |
| bp_tax_rate | decimal | btw over opgeld |
| tax_required | boolean | |
| **payment_terms** | integer | betaaltermijn koper (dagen) |
| **settlement_days** | integer | uitbetalingstermijn inbrenger (dagen) |
| eligible_for_online_payments | boolean | |
| hammer_target | decimal | omzetdoel |
| vendor_group_account / buyer_group_account | string | grootboekkoppeling, max 55 |

## Bied-mechaniek
| Veld | Type | Bijzonderheden |
|---|---|---|
| bid_cut_off_minutes | integer | sluitingsmoment biedingen |
| **bidding_extension** | integer | verlenging bij laat bod (anti-sniping) |
| has_delay / lot_delay_seconds / lot_delay_batch_size | boolean / integer | gefaseerde sluiting per blok kavels |
| max_total_delay | integer | plafond op de verlenging |
| **increment_calculation_source** | choice | `bid` / `reserve` — waar de bodstap op gebaseerd is |
| starting_paddle_number | integer | |
| buy_now_cut_off_days | integer | |
| telephone_bids_lot_spacing | integer | ruimte tussen telefoonkavels |
| telephone_bid_request_cut_off | integer | aanvraagdeadline telefonisch bieden |
| commission_bid_request_cut_off | integer | aanvraagdeadline schriftelijk bod |
| bidder_registration_cut_off | integer | registratiedeadline |

## Toegang & verificatie bieders
| Veld | Type | Bijzonderheden |
|---|---|---|
| manual_bidder_approval | boolean | handmatige goedkeuring |
| show_bidder_approval_status | boolean | |
| **initial_deposit_amount** | integer | borg vooraf |
| require_credit_card_verification | boolean | |
| require_identity_verification | boolean | |
| allow_webapp_condition_report_request | choice | `disabled` / `allow_registered` / `allow_all` |

## Kijken & ophalen
| Veld | Type | Bijzonderheden |
|---|---|---|
| viewing_date | string | vrije tekst |
| viewing_start_date / viewing_end_date | datetime | |
| private_viewing_start_date / private_viewing_end_date | datetime | besloten kijkdag |
| view_by_appointment | choice | `yes` / `no` / `yes_with_dates` |
| viewing_comment | string | |
| clearance_start_date / clearance_end_date | datetime | ophaalvenster |
| clearance_comment | string | |
| auction_location | field | |

## Teksten (juridisch / publicatie)
`important_information`, `payment_information`, `viewing_information`, `collection_information`, `terms_and_conditions`, `auction_contact_information`

> Dit zijn **eigen teksten van Inboedels B.V.** — archiveren onder `documenten/`.

## Rollen & organisatie
`auctioneers_uuids` (afslagers), `clerks_uuids` (medewerkers afslag), `account_managers_uuids`, `category_lot_ranges` (kavelnummerbereik per categorie)

## Live-koppeling
`live_id` (RO), `live_reference`, `live_url` — koppeling met extern live-biedplatform.

## Operationele status (read-only)
`is_paused`, `resume_date`, `pause_message`, `is_images_exported`, `use_images_from_lots`,
`auctioneers_sheet_status`, `auctioneers_sheet_no`, `after_sale_auctioneers_sheet_status`, `after_sale_auctioneers_sheet_no`

## Overig
`dynamic_fields` (nested object)

> **Voor nabouwen:** de veiling is de plek waar alle voorwaarden samenkomen die per verkoop kunnen verschillen — opgeld, btw-splitsing hamerslag/opgeld, betaal- én uitbetaaltermijn, borg, verificatie-eisen. Bouw dit niet als globale instelling; het hoort per veiling instelbaar te zijn.
>
> **Anti-sniping is hier geen gimmick maar kernlogica:** `bidding_extension` + `lot_delay_seconds` + `lot_delay_batch_size` + `max_total_delay` vormen samen het sluitingsmechanisme van een timed veiling. Dit viertal moet je in één keer goed hebben; het bepaalt of een online veiling eerlijk aanvoelt.
>
> **`settlement_days` naast `payment_terms`** is de cashflow van het huis: eerst de koper laten betalen, dan de inbrenger uitbetalen. Het verschil tussen die twee getallen is werkkapitaal.
