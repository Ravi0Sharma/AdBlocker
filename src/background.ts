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



// TODO 3: Bygg den fullständiga adressen till välkomstsidan.
//   TIPS: chrome.runtime.getURL("...") – sökvägen är relativ till extension/-mappen.
//   TIPS: Spara i en `const`. Behöver du skriva typen själv, eller räknar TS ut den? (hovra!)



// TODO 4: Öppna sidan.
//   BESLUT: Ny flik eller ett riktigt litet fönster?
//     - Flik:    chrome.tabs.create({ ... })
//     - Fönster: chrome.windows.create({ ... })  → kolla fälten `type`, `width`, `height`
//   TIPS: Båda returnerar ett Promise. Testa att göra callbacken `async` och använda `await`.



// BONUS: Visa antal blockerade på ikonen – chrome.declarativeNetRequest.setExtensionActionOptions(...)
// BONUS: Fråga vid varje webbläsarstart – chrome.runtime.onStartup
