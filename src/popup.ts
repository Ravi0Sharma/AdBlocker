
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
    await chrome.tabs.reload();
}

buttonYesState.addEventListener("click", async () => {
    await toggelBlock(true);
    StatusBlock(true);
});

buttonNoState.addEventListener("click", async () => {
    await toggelBlock(false);
    StatusBlock(false);
});


// BONUS: Felhantering – vad händer om updateEnabledRulesets misslyckas? Testa try/catch och visa ett felmeddelande.
// BONUS: Badge på ikonen – chrome.action.setBadgeText({ ... })
// BONUS: Vad är "sanningen" – värdet i storage, eller vad chrome.declarativeNetRequest.getEnabledRulesets() säger?
