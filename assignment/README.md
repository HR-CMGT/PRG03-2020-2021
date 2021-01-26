# Case "Magazine"

Een ondernemer wil een digitale ‘foodmagazine for students’ op de markt brengen. In dit magazine laten studenten van
over de hele wereld zijn of haar favoriete gerechten zien om elkaar te inspireren goed, lekker en gezellig te eten.

Jullie gaan aan de slag met het ontwikkelen van een eigen magazine binnen een dynamische frontend. Deze opdracht is
verdeeld in de volgende deelopdrachten om dit stap voor stap te ontwikkelen. Je mag elke vorm van een magazine maken,
zolang de randvoorwaarden
(technisch, functioneel) in basis gelijk zijn aan het foodmagazine. Als je niets weet mag je het foodmagazine maken.
Alle opdrachten hieronder zijn beschreven in de context van het foodmagazine, maar **mogen** dus in een andere context
worden gebouwd.

## Opdracht 1

- Gebruik phpStorm (of Visual Studio Code op eigen verantwoordelijkheid) voor het aanmaken van een nieuw project waarin
  je deze opdracht maakt. Plaats dit project in je htdocs map van XAMPP, zodat je het
  via **http://localhost/<projectnaam>** kunt benaderen.
- Zorg ervoor dat je de [initiële code](../week1/assignment-start) lokaal op kopieert naar dit nieuwe project, zodat je
  kunt starten met de opdracht.
- Pas de gerechten en tags aan om eigen gerechten te bevatten die voor jouw eigen magazine relevant zijn. Voeg er ook
  meer toe dan de 5 die erin staan.
- Test je JSON output in de browser via de
  [Chrome plugin](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en).

## Opdracht 2 (zonder AJAX)

- **Belangrijk**: Gebruik voor Opdracht 2/3/4 eigen teksten en plaatjes, omdat we pas in Opdracht 5 de koppeling naar de
  JSON uit week 1 gaan maken.
- Schrijf je eerste HTML/CSS voor het magazine. Gebruik hiervoor het
  [design](./design_voorbeeld.png) wat in deze map zit bijgevoegd. Je hoeft in deze fase alleen het overzicht met
  gerechten op te zetten (nog zonder detailweergave!)
- Test je output in de browser door zowel desktop als [mobile](./design_voorbeeld_mobile.png)
  te bekijken. Gebruik hiervoor de Google Chrome (of Firefox) developer tools.

## Opdracht 3 (zonder AJAX)

- Maak je opdracht dynamisch door click events toe te voegen aan je gerechten. Na een click op een gerecht opent de
  detailweergave. Als je een ander gerecht aanklikt, wordt de detailweergave (tags van het gerecht) vervangen door het
  andere aangeklikte gerecht.
- Maak de HTML/CSS voor de detailweergave van je gerecht.

## Opdracht 4 (zonder AJAX)

- Ontwikkel de functionaliteit om gerechten als favoriet toe te voegen. Dit doe je door de favorieten in je localstorage
  op te slaan. Voeg in het overzicht per gerecht een "voeg toe als favoriet knop" toe om het aan deze functionaliteit
  via een click event werkend te maken.
- Zorg met CSS dat de favoriet een andere kleur heeft. Deze kleur moet ook na het herladen van de pagina blijven staan
  door je local storage te raadplegen.
- Zorg ervoor dat de gerechten die favoriet zijn een knop krijgen om ze weer te verwijderen uit je favorieten. Uiteraard
  dient de kleur dan weer teruggezet te worden en de localstorage geüpdatet te worden.

## Opdracht 5

- Koppel de ontwikkelde functionaliteit aan de webservice die in opdracht 1 is gemaakt, zodat zowel gerechten als tags
  vanuit de PHP via AJAX worden ingeladen en met Javascript op je scherm komen.
- **Belangrijk**: Bij het inladen van je pagina staat er nog niets op je scherm, omdat AJAX nodig is om de gerechten in
  te laden.
- Maak de getoonde plaatjes dynamisch door op basis van de naam van het gerecht
  de [Unsplash API](https://source.unsplash.com/) te gebruiken. Een URL van een plaatje ziet er dan bv. zo
  uit: https://source.unsplash.com/1600x900/?pizza

## Opdracht 6 (Bonus opties voor mogelijk extra punt)

- Verander de backend zo dat de PHP arrays uit een database komen. Gebruik hiervoor het [ERD](./optioneel_erd.png)
- Haal de foto's op uit de Instagram of Flickr API om een complexere API te gebruiken dan de eenvoudigere unsplash API.
- Maak een uitgebreidere HTML/CSS variant waarin je bijvoorbeeld een SCSS gebruikt, of een specifiek HTML of CSS
  framework.
- Schrijf je PHP backend volledig OOP op basis van opgedane kennis tijdens de Advanced PHP lessen.
- Schrijf de Javascript op een professionelere manier via objecten, en pas technieken zoals arrow functions en/of
  promises toe.
