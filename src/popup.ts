
type AdBlocker = boolean; 

const REGELSETETS = {
    id: "ads",
    key: "blockAds"
};

const buttonYesState=  document.querySelector<HTMLButtonElement>("#ButtenYes");
const buttonNoState =  document.querySelector<HTMLButtonElement>("#ButtenNo");

if (buttonYesState === null|| buttonNoState === null) throw new Error("Fick Null på en av knapparnas state");


// TODO 4: Skriv en liten funktion som uppdaterar statustexten utifrån valet.
//   TIPS: element.textContent = "..."
//   TIPS: Du behöver den både i TODO 5 (när popupen öppnas) och TODO 7 (efter ett klick).
//   BESLUT: Ska färgen ändras också? classList.toggle("klass", villkor) slår på/av en klass.



// TODO 5: Läs det sparade valet när popupen öppnas och visa det.
//   TIPS: const result = await chrome.storage.local.get(...)
//   TIPS: Top-level await (await utanför en funktion) fungerar eftersom filen är en modul.
//   TIPS: Hovra över `result` – är värdet `any` eller `unknown`? Är det `unknown` måste du
//         kontrollera det innan du använder det (t.ex. med === eller typeof).
//   TIPS: Vad ska hända om inget val är sparat än? Ett standardvärde?  värde ?? standard



// TODO 6: Skriv en async-funktion som sparar valet och slår på/av blockeringen.
//   TIPS: Signatur ungefär:  async function namn(param: DinTyp): Promise<void> { ... }
//   TIPS: Spara:      await chrome.storage.local.set({ nyckel: värde })
//         – vill du använda din konstant som nyckel? Kolla upp "computed property names": { [NYCKEL]: värde }
//   TIPS: Slå på/av:  await chrome.declarativeNetRequest.updateEnabledRulesets({ ... })
//         → fälten heter enableRulesetIds / disableRulesetIds och tar en array av strängar
//   TIPS: Ternary-operatorn kan vara smidig:  villkor ? A : B



// TODO 7: Koppla knapparna till funktionen.
//   TIPS: knapp.addEventListener("click", () => { ... })
//   TIPS: INTE onclick="..." i HTML:en – det blockeras i tillägg.
//   TIPS: Ska callbacken vara async så att du kan vänta (await) på att sparandet blev klart?
//   TIPS: Efter sparandet: anropa funktionen från TODO 4.



// TODO 8 (valfritt): Stäng popupen efter en liten stund.
//   TIPS: setTimeout(() => { ... }, millisekunder)
//   TIPS: window.close()
//   BESLUT: Vill du ens det? Popupen stängs ju av sig själv när man klickar utanför.



// BONUS: Felhantering – vad händer om updateEnabledRulesets misslyckas? Testa try/catch och visa ett felmeddelande.
// BONUS: Badge på ikonen – chrome.action.setBadgeText({ ... })
// BONUS: Vad är "sanningen" – värdet i storage, eller vad chrome.declarativeNetRequest.getEnabledRulesets() säger?
