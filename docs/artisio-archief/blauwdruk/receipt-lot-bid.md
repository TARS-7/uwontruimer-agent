# Entiteiten: Receipt, Lot, Bid, Pre-Bid

## Receipt (inbrengbon) — `/api/v1/receipts/`
De inbrengbon: één inbrenger levert een partij objecten aan. Hier staan de **commerciële voorwaarden** van die inbreng.

| Veld | Type | Verplicht | RO | Bijzonderheden |
|---|---|---|---|---|
| uuid | string | | ✓ | |
| branch_uuid | field | | | vestiging |
| date | date | ✓ | | inbrengdatum |
| receipt_no / receipt_prefix | string | | | max 10 / max 5 |
| last_item_no | string | | ✓ | laatst uitgegeven objectnummer |
| customer_uuid | field | ✓ | | de inbrenger |
| contact_customer_uuid | field | | | afwijkende contactpersoon |
| description | string | | | |
| **lot_handling_charge** | decimal | | | behandelkosten per kavel |
| **insurance_rate** | decimal | | | verzekeringspercentage |
| **insurance_value** | decimal | | | verzekerde waarde |
| **minimum_commission** | decimal | | | minimumcommissie |
| **rebate_rate** | decimal | | | kortingspercentage |
| **withdrawal_fee** | decimal | | | kosten bij terugtrekken |
| **unsold_fee** | decimal | | | kosten bij onverkocht |
| charges_uuids | field | | | gekoppelde kostenposten |
| recommended_by_uuid / recommended_by_user_uuid | field | | | aanbrenger (klant / medewerker) |
| received_by_uuid | field | | | ingenomen door |
| rep_user_uuid | field | | | verantwoordelijke medewerker |
| dropper_uuid | field | | | wie fysiek afleverde |
| specialists_uuids | field | | | toegewezen specialisten |
| department_uuid | field | | | afdeling |
| status | string | | | max 127 |
| receipt_type | string | | | max 32 |
| containers_count / container_type | integer / string | | | aantal + soort containers |
| dynamic_fields | nested object | | | vrij uitbreidbare velden |
| enable_multiple_locations | boolean | | | |
| is_default | boolean | | | |
| created_at / updated_at | datetime | | ✓ | |

> **Voor nabouwen:** het volledige verdienmodel richting inbrenger zit op receipt-niveau, niet per kavel. Commissie, verzekering, onverkocht-fee en terugtrekkosten worden bij inname afgesproken en gelden voor de hele partij.

## Lot (kavel) — `/api/v1/lots/`
Een inventory-object dat in een specifieke veiling wordt ingezet. Inventory ≠ Lot: hetzelfde object kan opnieuw gekaveld worden in een volgende veiling.

| Veld | Type | Verplicht | RO | Bijzonderheden |
|---|---|---|---|---|
| uuid | string | | ✓ | |
| inventory_uuid | field | ✓ | | het fysieke object |
| reservation_uuid | field | ✓ | | reservering in de veiling |
| auction_uuid | field | ✓ | | de veiling |
| auction_date_uuid | field | | | veilingdag |
| auction_collection_uuid | field | | | collectie binnen de veiling |
| lot_no | string | ✓ | | max 16 |
| lot_no_numeric | integer | | ✓ | numerieke sorteersleutel |
| **status** | choice | | | `lotted` / `sold` / `withdrawn` / `released` / `unsold` / `return_to_seller` |
| low / high | decimal | | | taxatiebandbreedte |
| **reserve** | decimal | | | limiet |
| **reserve_type** | choice | | | `strict` / `sell` / `auctioneers_discretion` / `net` / `wide_discretion` / `agreed` / `firm` / `brut` / `suggested` |
| reserve_per_unit | decimal | | | limiet per stuk |
| start_price | decimal | | | inzet |
| **hammer_price** | decimal | | | hamerslag |
| quantity | integer | | | |
| live_id | string | | | id op live-biedplatform |
| paddle_number | string | | | |
| telephone_bids_data | field | | | telefonische biedingen |
| hide_lot | boolean | | | |
| is_finished | field | | ✓ | |
| is_result_approved | boolean | | | resultaat goedgekeurd |
| sold_via_negotiation | boolean | | ✓ | nazaal verkocht |
| source_of_sale | string | | | max 25 — verkoopkanaal |
| use_images_for_auction_gallery | boolean | | | |
| can_update_financial_item | boolean | | | |
| skip_validation | boolean | | | |
| purchase_extra_data | field | | ✓ | |
| created_at / updated_at | datetime | | ✓ | |

> **Voor nabouwen:** `reserve_type` met 9 varianten is de kern van de onderhandeling met de inbrenger — van harde limiet (`strict`/`firm`) tot volledige vrijheid voor de afslager (`wide_discretion`). Dit is geen detail; het bepaalt of een kavel doorgaat onder de limiet. Ook `sold_via_negotiation` telt: nazaal-verkoop is een aparte route naast de afslag.

## Bid (bod) — `/api/v1/bids/`
| Veld | Type | Verplicht | RO | Bijzonderheden |
|---|---|---|---|---|
| uuid | string | | ✓ | |
| lot_uuid | field | ✓ | | |
| bidder_uuid | field | ✓ | | verwijst naar Bidder, niet Customer |
| date | datetime | | | |
| amount | decimal | ✓ | | |
| is_winner | boolean | | | |
| type | string | | | |
| source_of_sale | string | | | kanaal waar bod vandaan komt |
| comment | string | | | max 512 |
| send_to_timed_synchronously | boolean | | | sync naar timed-veiling |
| purchase_extra_data | field | | | |
| created_at / updated_at | datetime | | ✓ | |

## Pre-Bid (bod vooraf) — `/api/v1/pre-bids/`
| Veld | Type | Verplicht | RO | Bijzonderheden |
|---|---|---|---|---|
| uuid | string | | ✓ | |
| sale_no | string | ✓ | | max 55 |
| auction_uuid | field | | | |
| lot_no | string | ✓ | | max 16 |
| **type** | choice | ✓ | | `telephone` / `commission` / `max_bid` |
| **status** | choice | | | `pending` / `rejected` / `confirmed` |
| paddle_number | string | ✓ | | max 55 |
| amount | decimal | ✓ | | |
| date | datetime | | | |
| phone / phone2 | string | | | max 155 — voor telefonisch bieden |
| bid_uuid | field | | | het uitgevoerde bod |
| is_winner | field | | ✓ | |
| clerk_uuid | field | | | toegewezen medewerker |
| clerk_assignment_lock | boolean | | | |
| extra_step | integer | | | extra bodstap |
| description | string | | | |
| stop_notification_sending | boolean | | | |
| created_at / updated_at | datetime | | ✓ | |

> **Voor nabouwen:** pre-bids zijn drie wezenlijk verschillende dingen onder één noemer — telefonisch bieden (medewerker belt tijdens de afslag), schriftelijk/commissiebod (huis biedt namens klant tot max) en max_bid (automatisch opbieden). Alleen bij `telephone` is de clerk-toewijzing en het telefoonnummer relevant.
