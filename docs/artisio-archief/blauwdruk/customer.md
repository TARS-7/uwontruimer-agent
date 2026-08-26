# Entiteit: Customer (klant)

Endpoint: `GET/POST /api/v1/customers/` — "Customer List"
Records in productie (19-08-2026): **3.564**

Eén record dient zowel als koper (`is_buyer`) als inbrenger/vendor (`is_vendor`) — geen aparte tabellen.

| Veld | Type | Verplicht | Read-only | Bijzonderheden |
|---|---|---|---|---|
| uuid | string | | ✓ | primaire sleutel |
| customer_no | field | | ✓ | weergavenummer (bv. 00005205) |
| no | integer | | ✓ | oplopend nummer |
| title | string | | | max 55 |
| first_name | string | ✓ | | max 155 |
| middle_name | string | | | max 155 (tussenvoegsel) |
| last_name | string | ✓ | | max 155 |
| display_name | field | | ✓ | afgeleid |
| display_name_with_company | field | | ✓ | afgeleid |
| company_name | string | | | max 155 |
| companies | field | | | gekoppelde bedrijven |
| personal_id | string | | | max 45 |
| is_company | boolean | | | |
| is_buyer | boolean | | | |
| is_vendor | boolean | | | inbrenger |
| email | string | ✓ | | |
| email2 | string | | | |
| phone | string | | | |
| primary_phone | field | | ✓ | |
| mobile | string | | ✓ | |
| status | choice | | | `active` / `pending` / `blocked` |
| tags | string | | | max 2056, vrij tekstveld |
| optin | boolean | | | e-mailmarketing |
| sms_optin | boolean | | | |
| no_email | boolean | | | |
| email_opt_out | boolean | | | |
| enable_estimate_request | boolean | | | mag taxatieverzoek doen |
| acquisition_source | string | | | max 1023 — herkomst lead |
| client_tier | string | | | UI-keuzes: `premier` / `preferred` / `select` / `core` |
| interest_categories_uuids | field | | | interessegebieden (categorieën) |
| interest_departments_uuids | field | | | interessegebieden (afdelingen) |
| logo_uuid | field | | | |
| created_at / updated_at | datetime | | ✓ | |
| company | string | | ✓ | |
| skip_auction_deposit_requirement | boolean | | | geen borg vereist |
| preferred_language_code | string | | | |
| account_managers_uuid | field | | | |
| birth_date | date | | | |
| initials | string | | | max 55 |
| is_default | boolean | | | |
| gender | choice | | | `male` / `female` / `other` |
| send_account_creation_notification | boolean | | | |
| type | string | | | UI-keuzes: `private` / `trader` / `notary` / `museum` / `estate_settlement` / `auction_house` / `supplier` |
| intermediary_type | string | | | max 55 |
| deceased | boolean | | | relevant voor nalatenschappen |
| credit_card_verified_at | datetime | | | |
| timezone | string | | | max 64 |
| buyer_lead_status | choice | | | `unqualified` / `qualified` / `converted` |
| vendor_lead_status | choice | | | `unqualified` / `qualified` / `converted` |
| default_audience | boolean | | | |
| correspondence | string | | | max 1280 |
| block_requesting_condition_reports | boolean | | | |
| live_id | string | | | max 55 — koppeling live-biedplatform |

## Gerelateerde objecten (via `?expand=`)
`billing_address`, `shipping_address`, `identification` (KYC), `account_manager`, `companies`

## Filters in de UI
Customer no, First/Last name, Company, Email, Phone, Address, Tags, Account Manager, Post Code, Gender, Type, Accounting Code, Created At, Updated At, Created By, Updated By, Client Tier, Live ID, Optin, Vendor, Identity Verification (`verified`/`pending`/`unverified`), Account/KYC Verification (idem), Exclude from Auto-Payments

## Let op bij nabouwen
- Lead-status is er apart voor koper én inbrenger — dat is een bewuste splitsing, één persoon kan aan beide kanten in een ander stadium zitten.
- `deceased` + type `estate_settlement` + `intermediary_type` vormen samen de nalatenschapsroute (notaris/executeur als tussenpersoon).
- De ingebouwde CSV-export geeft slechts 9 van deze 54 velden — niet bruikbaar als archief.
