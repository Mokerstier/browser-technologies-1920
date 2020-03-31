# Browser Technologies @cmda-minor-web 1920
- Ik heb deze repo nog niet live
- Ik werk in een andere [branch](https://github.com/Mokerstier/browser-technologies-1920/tree/enquete/app) (ik weet het vervelend)

## USECASE #1 
Ik wil een enquete kunnen invullen over de minor Web Development, met verschillende antwoord mogelijkheden. Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

### Concept
Ik breek het formulier op per vraag zodat ik de hele tijd per vraag de data kan oplsaan, zodat deze op een ander moment weer beschikbaar is.
ik doe dit onder andere door de state bij te houden (waar is de gebruiker gebeleven, dit moet ik nog verder uitwerken).

### Wireframe
![Wireflow](https://github.com/Mokerstier/browser-technologies-1920/blob/master/img/20200318_134203.jpg?raw=true)
Bovenkant is pleasureable (Css & JS de hele mikmak)
Onderkant is functional (rauwe HTML)

### Code structuur
Ik gebruik in dit project Controllers/getter om het formulier uit te lezen en in te vullen. De data uit het formulier sla ik op als JSON in controllers/data/data.JSON.
Ik gebruik views (EJS) om pagina's te templaten.
Ik gebruik routes om mijn routes te defineren (blijft de app.js lekker clean).


ik had nog wat andere ideeën Database etc. maar om het project simpel te houden ben ik daar vanaf gestapt.
(vond het alweer ingewikkeld genoeg)

## Hier Feedback week2 A.U.B!
~~Ik zit een beetje klem met mijn laatste pagina [views/pages/outro.ejs](https://github.com/Mokerstier/browser-technologies-1920/blob/enquete/app/views/pages/outro.ejs) hoe krijg ik die checkboxes nu weer aangevinkt?~~ 

### Trots!
Ik geef mijn user object door met res.locals Express dingetje `res.locals.user = req.body` dan is hij in de volgende functie weer beschikbaar als `const user = res.locals.user` HANDIG!
waardoor je dus weer door het object heen kan springen met dotnotation `console.log(user.fname) // Wouter (in mijn geval)`

# Enhancement
## Feedback
De inputs van de gebruiker worden gecontroleerd als de value niet voldoet aan de gevraagde waarde krijgt de user feedback met een error state.
Door `required` mee te geven aan een input kan de valid state worden afgevangen.
Vervolgens wordt met css styling toegevoegd op de error message:
```input:invalid ~ .invalid{
  color: red;
  max-height: 2rem;
  opacity: 1;
}```

# Feature Detection
## JS FETCH
Ik controleer of de browser beschikt over de fetch functie dit doe ik door `(typeof fetch !== "undefined")` deze returned true als `fetch`beschikbaar is.
Als fetch beschikbaar is haal ik de volgende (fieldsets) vragen op en zet ze in het form.
Hierdoor kan de gebruiker de enquete voortzetten zonder dat hij een nieuwe pagina hoeft te laden.
Op de submit button zet ik een `preventDefault()` zodat het formulier niet word gesubmit.
Ook verander ik de classes van de eerder opgehaalde fieldset en hou bij op welke state de gebruiker is met een count.

In een switch kijk ik vervolgens op welke 'state'de gebruiker is en toggle verschillende classes om de fieldsets te laten verschijnen.

Als de fetch niet beschikbaar is kan de gebruiker iedere keer zijn huidige antwoorden posten en deze worden meteen op de server opgeslagen.
Waarna de nieuwe pagina laadt met een nieuwe vraag.

# 
## CSS @supports
Met `@supports` wordt er gekeken naar `(transform-style: preserve-3d)` als de browser dit ondersteunt dan zullen de buttons gekke styling krijgen die bijdragen aan de user delight.

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
