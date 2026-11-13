// welcome.ts – logiken för välkomstfönstret.
// Byggs till: extension/js/welcome.js (laddas av welcome.html)


// TODO 1: Skapa en typ för användarens val.
//   TIPS: En "union type" av två strängar:  type Namn = "a" | "b";
//   BESLUT: Vad ska valen heta? Eller räcker en boolean (t.ex. `blockAds: boolean`)?
//           Fundera: vilket blir lättast att läsa om ett halvår?



// TODO 2: Skapa konstanter för regelsetets id och nyckeln du sparar valet under.
//   TIPS: Regelsetets id ska vara EXAKT samma sträng som `id` under rule_resources i manifest.json.
//   TIPS: Konvention: konstanter med fast värde skrivs ofta SCREAMING_SNAKE_CASE.



// TODO 3: Hämta knapparna (och elementen du vill ändra senare) från HTML:en.
//   TIPS: document.querySelector<HTMLButtonElement>("#ditt-id")
//         – <...> är en "generic" som talar om för TS vilken sorts element det är.
//   TIPS: Hovra över variabeln: typen är `HTMLButtonElement | null`. Varför null?
//   BESLUT: Hur hanterar du null?
//     - en if-sats som kastar ett fel / avbryter   (säkrast)
//     - `!` efter uttrycket ("non-null assertion") (kortast, men då lovar du TS att det aldrig är null)



// TODO 4: Skriv en async-funktion som sparar valet och slår på/av blockeringen.
//   TIPS: Signatur ungefär:  async function namn(param: DinTyp): Promise<void> { ... }
//   TIPS: Spara:      await chrome.storage.local.set({ nyckel: värde })
//         – vill du använda din konstant som nyckel? Kolla upp "computed property names": { [NYCKEL]: värde }
//   TIPS: Slå på/av:  await chrome.declarativeNetRequest.updateEnabledRulesets({ ... })
//         → fälten heter enableRulesetIds / disableRulesetIds och tar en array av strängar
//   TIPS: Ternary-operatorn kan vara smidig:  villkor ? A : B



// TODO 5: Koppla knapparna till funktionen.
//   TIPS: knapp.addEventListener("click", () => { ... })
//   TIPS: INTE onclick="..." i HTML:en – det blockeras i tillägg.
//   TIPS: Ska callbacken vara async så att du kan vänta (await) på att sparandet blev klart?



// TODO 6: Visa en bekräftelse när valet är gjort.
//   TIPS: element.classList.add("hidden") / .remove("hidden") – `hidden` är en Tailwind-klass.
//   TIPS: element.textContent = "..." för att byta text.
//   BESLUT: Olika text beroende på om man valde Ja eller Nej?



// TODO 7: Stäng fönstret efter en liten stund.
//   TIPS: setTimeout(() => { ... }, millisekunder)
//   TIPS: window.close()



// BONUS: Felhantering – vad händer om updateEnabledRulesets misslyckas? Testa try/catch och visa ett felmeddelande.
