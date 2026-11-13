// background.ts – tilläggets "service worker".
// Körs i bakgrunden och har INGEN sida: `document` och `window` finns inte här.
// Byggs till: extension/js/background.js


// TODO 1: Lyssna på när tillägget installeras.
//   TIPS: chrome.runtime.onInstalled.addListener(...) tar emot en callback-funktion.
//   TIPS: Skriv callbacken som en arrow function: (parameter) => { ... }
//   TIPS: Hovra över `addListener` i VSCode – vilken typ har parametern?



// TODO 2: Gör bara något om det är en NY installation (inte en uppdatering).
//   TIPS: Parametern har egenskapen `reason`. Jämför med `===`.
//   TIPS: Värdena finns som enum: chrome.runtime.OnInstalledReason
//   TIPS: När du testar räcker inte reload-pilen (den ger reason "update").
//         Ta bort tillägget och ladda in det igen – eller tillåt tillfälligt båda.



// TODO 3: Öppna popupen.
//   TIPS: chrome.action.openPopup() – öppnar samma popup som när man klickar på ikonen.
//   TIPS: Den returnerar ett Promise. Testa att göra callbacken `async` och använda `await`.
//   TIPS: Den kan misslyckas (t.ex. om inget webbläsarfönster har fokus). Vad händer då?
//         Fånga felet med try/catch och logga det med console.error – syns under "service worker".
//   BESLUT: Om den inte öppnas vid installationen – räcker det att användaren klickar på ikonen själv?



// BONUS: Visa antal blockerade på ikonen – chrome.declarativeNetRequest.setExtensionActionOptions(...)
// BONUS: Fråga vid varje webbläsarstart – chrome.runtime.onStartup
