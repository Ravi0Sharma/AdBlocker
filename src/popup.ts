// popup.ts – logiken för rutan som öppnas när man klickar på tilläggets ikon.
// Byggs till: extension/js/popup.js (laddas av popup.html)


// BESLUT FÖRST: welcome.ts har redan koden för att spara valet och slå på/av blockeringen.
//   - Kopiera den hit (enkelt, men då har du samma kod på två ställen)
//   - Eller flytta den till src/shared.ts och använd export/import (bra övning!)
//     TIPS: I shared.ts:  export function ... / export type ... / export const ...
//     TIPS: Här:          import { ... } from "./shared.js";   ← .js, inte .ts!
//           (webbläsaren läser den BYGGDA filen, och tsc skriver inte om sökvägen)
//     TIPS: Kräver type="module" på <script>-taggen i HTML:en (det har du redan).



// TODO 1: Hämta på/av-reglaget (checkboxen) och statustexten från HTML:en.
//   TIPS: Samma som i welcome.ts – men vilken HTML...Element-typ har en <input>?



// TODO 2: Läs det sparade valet när popupen öppnas.
//   TIPS: const result = await chrome.storage.local.get(...)
//   TIPS: Top-level await (await utanför en funktion) fungerar eftersom filen är en modul.
//   TIPS: Hovra över `result` – är värdet `any` eller `unknown`? Är det `unknown` måste du
//         kontrollera det innan du använder det (t.ex. med === eller typeof).
//   TIPS: Vad ska hända om inget val är sparat än? Ett standardvärde?  värde ?? standard



// TODO 3: Sätt reglagets läge utifrån valet.
//   TIPS: checkbox.checked = true / false



// TODO 4: När reglaget ändras – spara och slå på/av blockeringen.
//   TIPS: Eventet för checkboxar heter "change", inte "click".
//   TIPS: Inne i callbacken ger checkbox.checked det NYA läget.



// TODO 5: Uppdatera statustexten ("Annonser blockeras" / "Annonser tillåts").
//   TIPS: Gör det till en egen liten funktion – du behöver den både i TODO 3 och TODO 4.
//   BESLUT: Ska färgen ändras också? classList.toggle("klass", villkor) slår på/av en klass.



// BONUS: Badge på ikonen – chrome.action.setBadgeText({ ... })
// BONUS: Vad är "sanningen" – värdet i storage, eller vad chrome.declarativeNetRequest.getEnabledRulesets() säger?
