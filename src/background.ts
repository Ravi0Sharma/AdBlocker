

// Lyssna på när tillägget installeras eller uppdateras/laddas om
chrome.runtime.onInstalled.addListener(async (details) => {

    // 2. Gör bara något vid en NY installation 
    if (details.reason !== chrome.runtime.OnInstalledReason.INSTALL) return;

    try {
        await chrome.action.openPopup();
    } catch (error) {
        console.error("Kunde inte öppna popupen automatiskt:", error);
    }
});
