# Testchecklist — notaris-portaal & alle flows

_App: https://app.uwontruimer.nl · Notaris-testaccount: **info@vendulion.com** (organisatie "Notaris
Vendulion", rol EXTERN). Je hebt het Clerk-wachtwoord van dit account nodig._

> Tip: houd twee browservensters open — één ingelogd als notaris, en één **incognito** (uitgelogd)
> voor de erfgenaam-link. Dat bootst de echte situatie na (notaris ≠ erfgenaam).

---

## Flow 0 — Inloggen als notaris
1. Ga naar https://app.uwontruimer.nl en log in met **info@vendulion.com**.
2. **Verwacht:** je komt op `/portaal` met de kop "Notaris Vendulion" en een lijst opdrachten.
   Rechtsboven staan twee knoppen: **"Erfgenaam uitnodigen"** en **"Nieuwe aanvraag"**.

---

## Flow 1 — Erfgenaam uitnodigen (het nieuwe uitnodigingsmodel) ⭐
Dit is de belangrijkste nieuwe flow.

1. Klik **"Erfgenaam uitnodigen"**.
2. Vul alleen in: adres (bijv. "Teststraat 1"), postcode, gemeente, en een dossierkenmerk (bijv.
   "TEST-001"). **Laat het e-mailadres leeg** (dan gaat er geen echte mail uit).
3. Klik **"Uitnodiging aanmaken"**.
4. **Verwacht:** een groen scherm met een **deelbare link** en een "Kopieer"-knop.
5. Kopieer de link. Open die in je **incognito-venster** (uitgelogd).
6. **Verwacht:** een publieke pagina "Uw gegevens invullen" met de naam "Notaris Vendulion" erin,
   géén loginscherm.
7. Vul de erfgenaam-gegevens in (naam, e-mail, telefoon; adres is voor-ingevuld). Scroll naar de
   **keuzevrijheidsclausule** en het **toestemmingsvinkje**.
8. Test eerst zónder het vinkje op "Verzenden" → **verwacht:** melding dat toestemming verplicht is.
9. Zet het vinkje en klik "Verzenden".
10. **Verwacht:** groen "Bedankt, uw gegevens zijn ontvangen"-scherm.
11. Ga terug naar het notaris-venster, ververs `/portaal`.
12. **Verwacht:** er staat een **nieuwe opdracht** in de lijst met het test-adres.

**Extra check (link-beveiliging):** open dezelfde link nóg een keer → **verwacht:** "Al ingevuld".

---

## Flow 2 — Nieuwe aanvraag (notaris voert zelf in)
1. `/portaal` → **"Nieuwe aanvraag"**.
2. Vul adres/postcode/gemeente/telefoon + type in → **Versturen**.
3. **Verwacht:** je keert terug naar `/portaal` en de opdracht staat in de lijst.

---

## Flow 3 — Object toevoegen + boedelbeschrijving (de nieuwe velden) ⭐
1. Klik in `/portaal` op een opdracht (bijv. de zojuist aangemaakte).
2. Scroll naar **"💎 Waardevolle objecten"** → "Object toevoegen".
3. Kies een foto (galerij), vul een omschrijving in (bijv. "Schilderij"), en vul de nieuwe velden:
   **Categorie** (bijv. "schilderij") en **Geschatte waarde €** (bijv. "1500").
4. Klik "Toevoegen".
5. **Verwacht:** het object verschijnt met de foto, en eronder "schilderij · ± € 1.500,00", plus
   een statusbadge "Aangemeld".

---

## Flow 4 — Dossier-PDF downloaden ⭐
1. Op dezelfde opdracht-detailpagina, blok **"Documenten"**.
2. Klik **"Dossier downloaden (PDF)"**.
3. **Verwacht:** een PDF met (a) gegevens, (b) — als de erfgenaam via een uitnodiging invulde —
   een regel "Toestemming vastgelegd", (c) een **boedelbeschrijving-tabel** met foto, omschrijving,
   categorie, **geschatte waarde** en status, plus een **"Totaal geschatte waarde"**-regel, en (d)
   de opmerking dat opbrengstbedragen niet in het dossier staan.

---

## Flow 5 — Objectstatus (veiling-terugkoppeling)
De statusbadges (Aangemeld → In beoordeling → Veilinghuis geselecteerd → Geveild → Afgewezen) worden
bijgewerkt vanuit Takaros via de webhook. Dit test je pas volledig als een object aan de Takaros-kant
een statuswijziging krijgt. Voor nu: **verwacht** dat een nieuw object op "Aangemeld" staat.

---

## Wat je NIET in deze omgeving test
- **E-mails**: als je bij Flow 1 wél een erfgenaam-e-mail invult, gaat er een echte mail uit
  (Resend). Notificaties van nieuwe aanvragen gaan naar info@uwontruimer.nl.
- **Takaros-admin** (takaros.com): de "Geveild registreren"-stap en hamerprijs zijn handmatig en
  wonen in de aparte Takaros-omgeving.

---

## Kort meldingsformat als iets misgaat
Noteer per stap: welke flow + stapnummer, wat je verwachtte, wat er gebeurde, en (indien zichtbaar)
de foutmelding. Dan kan ik het gericht fixen.
