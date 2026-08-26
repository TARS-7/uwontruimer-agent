# Entiteit: Inventory (voorraadobject)

Endpoint: `/api/v1/inventories/` — "Inventory List"
Records in productie (19-08-2026): **6.114**

Het fysieke object. Ontstaat onder een Receipt en kan daarna één of meer keer als Lot in een veiling worden gezet.

| Veld | Type | Verplicht | RO | Bijzonderheden |
|---|---|---|---|---|
| uuid | string | | ✓ | |
| receipt_uuid | field | ✓ | | de inbrengbon |
| customer_uuid | field | | | inbrenger |
| item_no | string | ✓ | | objectnummer |
| stock_no | string | | | max 55 |
| category_uuid | field | ✓ | | |
| department_uuid | field | ✓ | | |
| **dynamic_fields** | nested object | ✓ | | **de eigenlijke objectbeschrijving** — zie onder |
| short_description | field | | ✓ | afgeleid uit dynamic_fields |
| primary_image_uuid | field | | | hoofdfoto |
| quantity | integer | | | |
| **Waardering** | | | | |
| low / high | decimal | | | taxatiebandbreedte |
| estimate | field | | ✓ | afgeleide weergave |
| reserve | decimal | | | limiet |
| reserve_per_unit | decimal | | | limiet per stuk |
| reserve_type | choice | | | `strict`/`sell`/`auctioneers_discretion`/`net`/`wide_discretion`/`agreed`/`firm`/`brut`/`suggested` |
| net_reserve | boolean | | | limiet is netto (na kosten) |
| start_price | decimal | | | inzet |
| buy_now_price | decimal | | | direct-kopen prijs |
| currency_uuid | field | | | |
| **Kosten / commissie** | | | | |
| minimum_commission | decimal | | | |
| commission_tiers | field | | | staffel |
| rebate_rate | decimal | | | |
| insurance_fee / insurance_rate | decimal | | | |
| lot_handling_charge | decimal | | | |
| unsold_fee / withdrawal_fee | decimal | | | |
| tax_status_uuid / tax_rate | field / decimal | | | btw-regime (o.a. margeregeling) |
| financial_items_data | field | | | |
| **Locatie & logistiek** | | | | |
| item_location_uuid | field | ✓ | | plek in de loods (boomstructuur) |
| pre_release_item_location_uuid | string | | ✓ | |
| collected | boolean | | | opgehaald |
| collected_at | datetime | | | |
| collection_info_enabled | boolean | | | afwijkend ophaaladres |
| collection_info_* | string | | | first_name, last_name, address_1, address_2, city, state, municipality, zip_code, email, phone, notes |
| collection_info_full | field | | ✓ | |
| longitude / latitude | float | | | |
| receive_date | date | | | |
| **Proces / rollen** | | | | |
| rep_user_uuid | field | | | verantwoordelijke |
| expert_user_uuid | field | | | taxateur/expert |
| specialists_uuids | field | | | |
| account_managers_uuid | field | | | |
| **cataloguing_lifecycle** | string | | | max 255 — status catalogiseren |
| **photography_lifecycle** | string | | | max 255 — status fotografie |
| is_draft | boolean | | | |
| is_archived | field | | ✓ | |
| **Groeperen / klonen** | | | | |
| is_grouped_item | boolean | | | samengevoegde kavel |
| original_item_uuid | field | | | bron bij kloon |
| is_last_clone | boolean | | | |
| reservations_data | field | | | reserveringen in veilingen |
| created_at / updated_at | datetime | | ✓ | |

## Waar de objectbeschrijving zit
`dynamic_fields` is een **nested object en verplicht**. Artisio ondersteunt hier een per-afdeling
configureerbaar schema, maar **in de praktijk van Inboedels B.V. bevat het alleen `title` en
`description`, beide rich text, per taal (nl/en)** — gemeten over alle 6.114 objecten, alle 14
afdelingen gebruiken hetzelfde minimale schema. Zie
[objectschema-en-configuratie.md](objectschema-en-configuratie.md).

> **Voor nabouwen:** je hoeft géén configureerbare veldenmotor te bouwen. Twee rich-text velden per
> taal nemen de huidige praktijk één-op-één over. Er is geen gestructureerde vastlegging van
> afmetingen, kunstenaar, materiaal of herkomst — dat staat als vrije tekst in `description`.
> Wil je dat later wél structureren, dan is dat winst ten opzichte van Artisio, maar dan moeten de
> 6.114 bestaande beschrijvingen geparseerd worden.

> **Tweede les:** de commerciële voorwaarden staan zowel op Receipt als op Inventory
> (minimum_commission, rebate_rate, unsold_fee, withdrawal_fee, insurance_*, lot_handling_charge).
> De bon zet de standaard, het object kan afwijken. Die overerving moet expliciet in het model.

> **Derde les:** `cataloguing_lifecycle` en `photography_lifecycle` zijn losse statusmachines náást
> de kavelstatus. Catalogiseren en fotograferen zijn de doorlooptijd-bottlenecks; dat ze apart
> gevolgd worden is geen toeval.
