# Concept — Gegevensverwerking bij het uitnodigingsmodel

_Uw Ontruimer · pre-flight document 2 van 3_

> ⚠️ **CONCEPT — NIET RECHTSGELDIG ZONDER JURIDISCHE TOETSING.** Dit is een werkdocument om het
> gesprek met een notariskantoor te voeren. Laat het vóór ondertekening controleren door een
> jurist/privacy-specialist. De juiste vorm (verwerkersovereenkomst vs. gegevensleverings-
> overeenkomst) hangt af van de gekozen rolverdeling — zie hieronder.

## 1. Uitgangspunt: wie is waarvoor verantwoordelijk

In het uitnodigingsmodel deelt het notariskantoor **geen** persoonsgegevens met Uw Ontruimer. De
notaris nodigt de erfgenaam uit via een link; de erfgenaam voert vervolgens **zelf** zijn gegevens
in en geeft toestemming. De erfgenaam is daarmee de klant/opdrachtgever van Uw Ontruimer.

Gevolg voor de AVG-rollen:
- **Uw Ontruimer** is **zelfstandig verwerkingsverantwoordelijke** voor de gegevens die de erfgenaam
  zelf invoert (naam, contactgegevens, adres, foto's/omschrijvingen van objecten).
- Het **notariskantoor** geeft géén persoonsgegevens door en is voor deze verwerking geen
  verwerker/verantwoordelijke.

Omdat er geen doorgifte door het kantoor plaatsvindt, is een klassieke verwerkersovereenkomst
strikt genomen niet nodig. Veel kantoren willen desondanks iets op papier voor hun dossier; dit
document dient dan als **gegevensleverings-/samenwerkingsafspraak** die vastlegt dat er géén
doorgifte is en hoe Uw Ontruimer met de gegevens omgaat.

## 2. Welke gegevens en waarvoor

| Categorie | Voorbeeld | Doel |
|---|---|---|
| Contactgegevens erfgenaam | naam, e-mail, telefoon | contact opnemen, afspraak plannen |
| Adresgegevens | adres/postcode/gemeente van de woning | uitvoeren ontruiming |
| Objectgegevens | foto's, omschrijvingen | inventarisatie + aanmelding bij veilinghuis |
| Toestemming | tijdstip + bevestiging | rechtmatigheidsgrondslag vastleggen |

Gegevens van de **overledene** vallen niet onder de AVG (die beschermt levende personen); gegevens
van erfgenamen zijn gewone persoonsgegevens.

## 3. Grondslag

Verwerking op basis van **toestemming** van de erfgenaam (die deze bij het invullen expliciet geeft)
en/of **uitvoering van de overeenkomst** tot ontruiming. De toestemming wordt in het systeem
vastgelegd met tijdstip.

## 4. Bewaren en verwijderen

Gegevens worden niet langer bewaard dan nodig voor de uitvoering en de wettelijke bewaarplichten.
Het systeem ondersteunt geplande verwijdering/anonimisering na afronding van een opdracht.

## 5. Beveiliging

- Toegang tot het portaal via geauthenticeerde accounts (Clerk); rolgebaseerde toegang.
- Foto's/documenten in privé-opslag met tijdelijk geldige (signed) toegangslinks.
- Versleutelde verbindingen; hosting bij gevestigde providers (Vercel/Supabase, EU-regio).

## 6. Rechten van betrokkenen

Erfgenamen kunnen inzage, correctie en verwijdering vragen bij Uw Ontruimer als zelfstandig
verwerkingsverantwoordelijke.

## 7. Wat dit document NIET is

Dit is geen definitieve juridische tekst. Vóór ondertekening met een kantoor moeten minimaal worden
ingevuld/gecontroleerd: exacte partijgegevens, bewaartermijnen, subverwerkers (hosting/mail/AI),
doorgifte buiten de EU (indien van toepassing), en de precieze rolkeuze (verwerker vs. zelfstandig
verantwoordelijke). Laat dit door een jurist afronden.
