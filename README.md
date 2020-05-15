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

# Functional
De functionele laag werkt op alle browsers.
  - Basic HTML formulier dat op elke browser werkt
  - Formulieren worden op de server afgehandeld
  - Na elke vraag wordt een nieuwe pagina geladen met de volgende vraag
  - progress-bar geeft de gebruiker een indicatie hoever hij in het process is

![Functional laag](https://github.com/Mokerstier/browser-technologies-1920/blob/master/repo-img/localhost_8080_.png?raw=true)

# Usable
De usable laag enhanced door styling en JS

![Usable laag](https://github.com/Mokerstier/browser-technologies-1920/blob/master/repo-img/localhost_8080_(1).png?raw=true)

# Pleasurable
Door Fetch te gebruiken in de client kan de ervaring van het formulier worden enhanced met transitions tussen de "paginas"

![Pleasurable laag](https://github.com/Mokerstier/browser-technologies-1920/blob/master/repo-img/browsertechno.herokuapp.com_q1(2).png)
# Enhancement
## Feedback

### HTML + CSS
De inputs van de gebruiker worden gecontroleerd als de value niet voldoet aan de gevraagde waarde krijgt de user feedback met een error state.
Door `required` mee te geven aan een input kan de valid state worden afgevangen.
Vervolgens wordt met css styling toegevoegd op de error message:
```
input:invalid ~ .invalid{
  color: red;
  max-height: 2rem;
  opacity: 1;
}
```
![Voorbeeld Error msg](https://github.com/Mokerstier/browser-technologies-1920/blob/master/repo-img/localhost_8080_(1).png?raw=true)

### Enhanced by JS

#### Diabled state
![Disabled](https://github.com/Mokerstier/browser-technologies-1920/blob/master/repo-img/browsertechno.herokuapp.com_q1.png)
#### Enabled state
![Enabled](https://github.com/Mokerstier/browser-technologies-1920/blob/master/repo-img/browsertechno.herokuapp.com_q1(1).png?raw=true)

Door met JS te kijken naar de input fields in het form wordt een submit button active en enabled.

Ook zal de progress bar meebewegen met een transition naar de volgende state.*

* Deze transitions zijn een vorm van enhancement want oudere browsers zoals ie 6-9 en Opera Mini ondersteunen deze niet bron: [Can i use](https://caniuse.com/#feat=css-transitions)

```
if (checked > 0) {
        if(progress){
            progress.value = progress.value + 2;
        }
      return true;
```

# Feature Detection
## JS FETCH
Ik controleer of de browser beschikt over de fetch functie dit doe ik door `(typeof fetch !== "undefined")` deze returned true als `fetch`beschikbaar is.
Als fetch beschikbaar is zet ik een `preventDefault()` op de submit button en haal ik de volgende (fieldsets) vragen op en zet ze in het form.
Hierdoor kan de gebruiker de enquete voortzetten zonder dat hij een nieuwe pagina hoeft te laden.
Ook verander ik de classes van de eerder opgehaalde fieldset en hou bij op welke state de gebruiker is met een count.

In een switch kijk ik vervolgens op welke 'state'de gebruiker is en toggle verschillende classes om de fieldsets te laten verschijnen.

Als de fetch niet beschikbaar is kan de gebruiker iedere keer zijn huidige antwoorden posten en deze worden meteen op de server opgeslagen.
Waarna de nieuwe pagina laadt met een nieuwe vraag.

## CSS @supports
Ik maak bewust geen gebruik van prefixes:
Dit doe ik omdat ik de styling die ik toepas met bijv: `animation` zie als een enhancement.
Browsers die dit zonder prefix niet begrijpen krijgen daardoor een minder delightfull experience desalniettemin werkt de applicatie nog wel!
Met `@supports` wordt er gekeken naar `(transform-style: preserve-3d)` als de browser dit ondersteunt dan zullen de buttons gekke styling krijgen die bijdragen aan de user delight.

### SideNote
#### Progressive deterioration
~~Na het invoeren van fetch op de clientside is een bug ontstaan waardoor het formulier na vraag 3 niet wordt gesubmit hierdoor kloppen de antwoorden in de controleer stap niet meer.
Als ik meer tijd heb ga ik proberen om dit nog te fixen.~~ (Gefixt!)

## Conclusie Browser-Technologies
Aan de hand van deze opdracht is het voor mij duidelijk dat de beste ervaring op het web samen gaat met onderzoek naar feutures.
Want als dit onderzoek niet wordt gedaan verandert de beste ervaring voor sommige mensen in helemaal geen ervaring. Dit komt doordat oudere browsers sommige technologieën niet ondersteuenen waardoor de website voor een X aantal gebruikers compleet in het water valt. Denk aan js FETCH bijv. niet alle browser ondersteuenen deze feature dus wanneer er geen fallback voor ontworpen is is er voor sommige mesnen geen mogelijkheid om de website te gebruiken.
