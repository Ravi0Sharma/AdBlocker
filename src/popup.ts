
type AdBlocker = boolean; 

const REGELSETETS = {
    id: "ads",
    key: "blockAds"
};

const buttonYesState=  document.querySelector<HTMLButtonElement>("#ButtenYes");
const buttonNoState =  document.querySelector<HTMLButtonElement>("#ButtenNo");
const statusText = document.querySelector<HTMLParagraphElement>("#StatusBlocker");

if (buttonYesState === null|| buttonNoState === null) throw new Error("Fick Null på en av knapparnas state");


function StatusBlock (blockerar: AdBlocker){
if (statusText === null) throw new Error("Status Text är null")
statusText.textContent = blockerar ? "Blockeras" : "Avstängd";
}

const result = await chrome.storage.local.get(REGELSETETS.key);
const sparat = result[REGELSETETS.key];
StatusBlock(typeof sparat === "boolean" ? sparat : true);

async function toggelBlock(status: AdBlocker): Promise<void> {
    // 1. Lägg valet i lådan "blockAds"
    await chrome.storage.local.set({ [REGELSETETS.key]: status });

    // 2. Slå på eller av regelsetet "ads"
    await chrome.declarativeNetRequest.updateEnabledRulesets(
        status
            ? { enableRulesetIds: [REGELSETETS.id] }
            : { disableRulesetIds: [REGELSETETS.id] }
    );
}

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
