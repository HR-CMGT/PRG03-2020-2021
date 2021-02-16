# Setup

- Project klaarzetten in localhost
- Webstorm layout (optioneel)

<br>
<br>


# Localhost

Maak een nieuw `index.html` bestand en open het in webstorm. Typ `!` + TAB. Je krijgt nu automatisch een leeg default html bestand.

## XAMPP

Start XAMPP en plaats je project in de `htdocs` folder. Je kan nu je `index.html` bekijken door je project te openen in ***Localhost***. Je url is dan bijvoobeeld:

```
http://localhost/prg03/test/index.html
```

⚠️ Let op! Open je project nooit via `file://c:/mijn documenten/index.html`!

## Webstorm Localhost

In webstorm kan je een ***quick preview*** openen met de browser buttons rechtsbovenin beeld.

![quick](./images/quick.png)

De url ziet er dan zo uit. Dit werkt alleen zo lang webstorm open staat.

```
http://localhost:8000/
```

Maak een nieuw `style.css` en `script.js` bestand en laad deze in je html:

```html
<head>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <script src="./js/script.js"></script>
</body>
```

## Browser console

Klik met rechts in het browservenster en kies **inspect**. Open de console tab. 

---
<br>
<br>
<br>
<br>

# Webstorm settings

🖖 Deze instellingen zijn optioneel! Kijk zelf wat je een prettige manier vindt om in je code editor te werken.

<br>

## Disable function parameter hints 

![disable](./images/disable.png)

<br>

## Zoom met muiswiel

![zoom](./images/mouse.png)

<br>

## Code font ligatures

![ligatures](./images/ligatures.png)

<br>

## Cleaner code view

- Toon ***Project Files*** in plaats van ***Project***
- Verberg vensters die je niet gebruikt onder ***View > Appearance***

![projectfiles](./images/projectfiles.png)

![cleanview](./images/cleanview.png)

<br>

## Weg met die verticale lijn

![vertical](./images/verticalline.png)

<br>

## Material UI theme

Installeer de Google Material UI theme via Settings > Plugins

![material](./images/material.png)

https://plugins.jetbrains.com/plugin/8006-material-theme-ui

<br>

## Live update

Als je je updates in HTML, CSS, Javascript live in de browser wil zien, zonder steeds F5 in te drukken, dan kan je via de terminal een `live-server` installeren:

```bash
sudo npm install -g live-server
```
Nu kan je via de terminal in je projectmap een server starten die **live** je updates laat zien:
```bash
live-server
```

## Puntkomma aan einde van de regel

Deze voorkeur kan je instellen. Wil je met of zonder puntkomma's werken?

![semicolon](./images/semicolon.png)