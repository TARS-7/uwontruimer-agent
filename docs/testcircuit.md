# Testcircuit — elke rol hands-on spelen

*29 juli 2026. Eén Clerk-account heeft per app één rol; daarom heeft elke rol zijn eigen e-mailadres. Alle accounts zijn van Jurriën zelf.*

## De rollen en hun ingang

| # | Rol | Inloggen als | Waar | Wat je er test |
|---|---|---|---|---|
| 1 | **Admin dashboard** | jekuijper@gmail.com | app.uwontruimer.nl | opdrachten, objecten doorsturen naar Takaros, organisaties beheren |
| 2 | **Notaris** | jekuijper+notaris@gmail.com *(in te richten — zie overstap-stappen)* of info@vendulion.com | app.uwontruimer.nl/portaal (org "Notaris Vendulion") | nieuwe aanvraag, erfgenaam uitnodigen, veilingreis per object, dossier-PDF |
| 3 | **Erfgenaam** | *geen login* | publieke uitnodigingslink (maak je aan als rol 2) | zelf gegevens invullen, toestemming, foto's uploaden |
| 4 | **Consument** | *geen login* | uwontruimer.nl → offerte-wizard | wizard incl. foto's waardevolle spullen |
| 5 | **Admin Takaros** | jekuijper@gmail.com | takaros.com/admin | curatie, doorsturen, waardeoordeel, netwerkpagina, meekijk-knoppen |
| 6 | **Veilinghuis-expert** | jekuijper+expert@gmail.com (expert "Jurriën (test-expert)" bij huis "Vendulion") | takaros.com/sign-in → /portal | aanbod bekijken, interesse/afwijzen (+ veilingnaam/-datum), veilingresultaat invoeren |
| 7 | **Taxateur** | jekuijper+taxateur@gmail.com (of jurrien@vendulion.com = Taxateur01) | takaros.com/taxateur | opdrachten, mobiele opname, AI-concept, rapport |
| 8 | **Inbrenger Takaros** | *geen login* | takaros.com → inbreng / taxatie-landingspagina's | object aanmelden, bevestigingsmail |

Let op: hetzelfde adres heeft per app een andere rol — info@vendulion.com is notaris op het dashboard en expert op Takaros. Dat is bewust: zo speel je beide kanten van dezelfde keten.

## Overstap op plus-aliassen (29 jul) — eenmalige stappen

Alle rollen onder één inbox (jekuijper@gmail.com), via Gmail-plus-aliassen. Eenmalig per alias een account aanmaken (dat kan alleen Jurriën zelf):

1. **Expert:** open https://www.takaros.com/portal/uitnodiging/66bcdfa4-70eb-4a72-99bd-3d40368f130c → maak account aan met jekuijper+expert@gmail.com → klaar (rol wordt automatisch gezet, admin-mail "uitnodiging geaccepteerd" volgt).
2. **Taxateur:** ga naar takaros.com/sign-in → maak account aan met jekuijper+taxateur@gmail.com → meld "taxateur-account staat" aan Claude, die zet dan de rol (record ligt al klaar, koppelt automatisch op e-mail).
3. **Notaris:** ga naar app.uwontruimer.nl → maak account aan met jekuijper+notaris@gmail.com → meld "notaris-account staat" aan Claude, die koppelt het aan org "Notaris Vendulion".
4. **Inbrenger (optioneel):** publiek inbrengformulier werkt zonder account; vul daar jekuijper+inbrenger@gmail.com in als e-mail, dan landen ook die mails in je inbox.

De oude accounts (info@vendulion.com, jurrien@vendulion.com) blijven gewoon werken.

## De grote ronde (volledige pipeline, ±20 min)

1. **Als notaris (2):** maak in /portaal een erfgenaam-uitnodiging aan → kopieer de link
2. **Als erfgenaam (3):** open de link, vul in, geef toestemming, upload een objectfoto
3. **Als admin dashboard (1):** open de opdracht, stuur het object door naar Takaros
4. **Als admin Takaros (5):** curatie → goedkeuren → doorsturen naar veilinghuis **"Vendulion"** (je testhuis — niet het Zeeuws Veilinghuis)
5. **Als expert (6):** open /portal, reageer met interesse + taxatierange + beoogde veiling
6. **Als admin Takaros (5):** verstuur het waardeoordeel met akkoord-link
7. **Als erfgenaam (3):** klik akkoord in de mail
8. **Als expert (6):** voer het veilingresultaat (hamerprijs) in
9. **Als notaris (2):** controleer of de veilingreis per object klopt en download de dossier-PDF

Elke stap die hapert of onlogisch voelt = direct melden → verbeteren → ronde opnieuw. Dat is de lus: gebruiken, gebruiken, gebruiken en verbeteren, verbeteren, verbeteren.

## Stand van vandaag (eerste ronde, 29 jul)

- Stappen 1–3 gedaan (uitnodiging "Teststraat 1" → object doorgekomen tot in Takaros, status terug in portaal: "Veilinghuis geselecteerd") ✓
- Parallelle sessie bouwt de zichtbare veilingreis + veilinghuisSchatting/veilingdatum in het portaal (nog deels uncommitted)
- Nog niet getest in deze ronde: expertreactie → akkoord → hamerprijs → dossier-PDF (stap 5–9)
