# Weg bij Sales Wizard – overdracht (november 2026)

Sales Wizard (support@saleswizard.nl, 088-7709999) stuurde op 11 nov 2026 de mail "Verhuis overdracht"
naar jurrien@uwontruimer.nl met verhuiscodes en inloggegevens. Codes en wachtwoorden staan alleen in die
mail, niet hier.

## Wat stond er nog bij Sales Wizard

| Domein | Wat staat er bij Sales Wizard | Wat staat elders |
|---|---|---|
| **uwontruimer.nl** | alleen de **domeinregistratie** (registrar mijn.host) | DNS bij Cloudflare, site op Vercel, mail bij Google |
| vendugroup.com | registratie, DNS, WordPress-site (vps-sw4), mailbox (mail01.saleswizard.nl) | – |
| kiesontruimer.nl | registratie, DNS, WordPress-site (vps-sw3), mail (mail01.saleswizard.nl) | – |

Let op: de DNS-tabel die Sales Wizard onder "vendugroup.com" meestuurde is van een andere klant
(bouwbedrijfdewinter.nl). De echte records zijn op 11 nov zelf uitgelezen.

## uwontruimer.nl – het belangrijkste domein
Site en mail draaien niet bij Sales Wizard, maar het domein is daar wel geregistreerd. Bij de verhuizing
moeten de **nameservers op Cloudflare blijven staan**: `reese.ns.cloudflare.com` en `robin.ns.cloudflare.com`.
Worden die bij de verhuizing vervangen door die van de nieuwe partij, dan liggen site en mail eruit.

## kiesontruimer.nl – doorverwijzing
Regels in `uwontruimer-site/next.config.ts` (blok "Kiesontruimer.nl"). Kopie: `~/archief/kiesontruimer/2026/`.

| Oude pagina | Gaat naar |
|---|---|
| `/algemene-voorwaarden/` | uwontruimer.nl/algemene-voorwaarden/ |
| `/privacy-verklaring/`, `/privacybeleid/` | uwontruimer.nl/privacy/ |
| al het overige (home, offerte aanvragen, aanmelden als ontruimer) | uwontruimer.nl/offerte/ |

## vendugroup.com – doorverwijzing
Zie `~/work/takaros/takaros-v2/docs/vendugroup-doorverwijzing-2026-11.md`. Kopie: `~/archief/vendugroup/2026/`.

## Stappen
1. Kopieën in het archief en doorverwijzingen gebouwd (11 nov).
2. Drie domeinen verhuizen naar Oxilion (Jurriën bestelt en vult de verhuiscodes in).
3. Na verhuizing: DNS van vendugroup.com en kiesontruimer.nl → A `@` en `www` 216.150.1.1, AAAA weg.
   uwontruimer.nl: niets wijzigen, alleen controleren dat de Cloudflare-nameservers er nog staan.
4. Sales Wizard laten weten dat alles weg mag.
