# Sluitingsmechanisme van een timed veiling (anti-sniping)

Afgeleid uit de instellingen én het werkelijke biedgedrag van Inboedels B.V., 19-08-2026.

## Uitgangspunt: er zijn alleen timed veilingen
Alle **146** veilingen in het archief hebben `type = timed`. Er is nooit een live-veiling gedraaid.
De hele live-afslagmodule van Artisio (Auction Console, afslagers, clerks, paddle-nummers aan de zaal)
is in deze praktijk ongebruikt gebleven. **Bij nabouwen kan die module vervallen.**

## De parameters, met de waarden zoals daadwerkelijk gebruikt

| Parameter | Waarde | Werking |
|---|---|---|
| `lot_delay_seconds` | **20** (144 van 146) | interval tussen twee opeenvolgende kavelsluitingen |
| `lot_delay_batch_size` | **1** (144 van 146) | aantal kavels dat per interval sluit |
| `has_delay` | **true** (146 van 146) | gefaseerd sluiten aan |
| `bidding_extension` | **120** (143 van 146) | seconden verlenging bij een laat bod |
| `max_total_delay` | **null** (146 van 146) | **geen plafond op verlenging** |
| `bid_cut_off_minutes` | **null** (146 van 146) | geen harde biedstop |
| `strict_end_date` | **null** (146 van 146) | geen harde einddatum |
| `increment_calculation_source` | **bid** (146 van 146) | bodstap over huidig bod, niet over limiet |

Afwijkingen: 2 veilingen met `bidding_extension` 180, 1 met 30; 1 met `lot_delay_seconds` 120,
1 met 10; 1 met `batch_size` 2, 1 met 10. Verder overal identiek.

## Hoe het werkt

1. **Gefaseerd sluiten.** Kavels sluiten niet gelijktijdig maar één per 20 seconden, op kavelnummer.
   Bij 264 kavels is dat ruim 1,5 uur uitbellen.
2. **Verlenging per kavel.** Een bod vlak vóór sluiting schuift alléén die kavel 120 seconden op.
   De overige kavels houden hun eigen schema.
3. **Geen plafond.** Omdat `max_total_delay` leeg is, kan een betwiste kavel onbeperkt blijven
   verlengen zolang er geboden wordt.

## Empirische bevestiging — veiling 235 (264 kavels, 827 biedingen)

Laatste biedingen van de sluitingsavond, op tijd gesorteerd:

| Tijd | Kavel | Δ vorige | Biedingen |
|---|---|---|---|
| 18:25:36 | 79 | — | 4 |
| 18:32:00 | 263 | +384s | 1 |
| 18:32:12 | 264 | +12s | 1 |
| 18:35:22 | 110 | +190s | 2 |
| 18:37:06 | 116 | +104s | 3 |
| 18:39:26 | 246 | +140s | 3 |
| 18:41:00 | 124 | +95s | 6 |
| 18:43:42 | 139 | +161s | **23** |
| 19:00:39 | 217 | +1017s | **15** |
| 19:04:42 | 216 | +243s | 2 |
| 19:06:29 | 201 | +108s | 8 |
| 19:11:29 | 220 | +191s | **25** |
| 19:25:16 | 258 | +570s | 3 |

**De kavelnummers lopen volstrekt door elkaar.** Dat is het bewijs dat het mechanisme werkt:
onbetwiste kavels sluiten op hun geplande 20-secondenslot, betwiste kavels verlengen en zakken naar
achteren. De kavels met 23, 15 en 25 biedingen zijn precies degene die het verst zijn opgeschoven.
De staart liep circa een uur door na het geplande einde.

Dit bevestigt ook de eenheid: gaten van 95–190 seconden passen bij een verlenging in **seconden**.
Waren het minuten geweest, dan had de staart uren geduurd.

## Ontwerpbeslissing bij nabouwen

> **Niet één veilingtimer, maar N onafhankelijke kaveltimers.** Elke kavel heeft een eigen
> sluitingstijdstip dat tijdens de veiling kan verschuiven, terwijl de rest zijn schema volgt.
> Wie dit als één centrale eindtijd bouwt, kan gefaseerd sluiten niet meer toevoegen.

> **`max_total_delay` is de eerlijkheid-versus-planbaarheid knop.** Leeg = elk bod krijgt altijd
> antwoord, maar je weet niet hoe laat je klaar bent. Gevuld = harde eindtijd, maar de laatste bieder
> kan buiten de boot vallen. Inboedels koos onbeperkt en dat is 146 veilingen goed gegaan.

> **`increment_calculation_source = bid`** houdt de limiet verborgen voor bieders. De alternatieve
> instelling (`reserve`) berekent de bodstap over de limiet en lekt daarmee informatie over wat de
> inbrenger minimaal wil hebben.
