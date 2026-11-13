# 🛡️ AdBlocker – TODO

Mål: ett eget Chrome-tillägg (Manifest V3) som frågar **"Vill du se annonser?"** och blockerar dem om du svarar nej.

Du skriver all kod själv. Varje steg har:

- **TODO** – vad som ska göras
- **💡 Tips** – vilket API/vilken syntax du behöver (inte lösningen)
- **🤔 Beslut** – något du väljer själv, det finns inget rätt svar

Filerna i `src/` och `extension/` innehåller bara kommentarer med TODO:s. Skriv koden under dem, rad för rad.
Radera kommentarerna när du är klar med dem (eller behåll dem som anteckningar).

---

## Struktur

```
adBlocker/
├── package.json          ← skapas i steg 0
├── tsconfig.json         ← skapas i steg 0
├── TODO.md               ← den här filen
├── src/                  ← HÄR skriver du TypeScript + Tailwind-CSS
│   ├── background.ts
│   ├── popup.ts
│   └── styles.css
└── extension/            ← DET HÄR är mappen Chrome laddar
    ├── manifest.json     ← skapar du i steg 1
    ├── rules.json        ← skapar du i steg 1
    ├── popup.html
    ├── js/               ← byggs av tsc (rör inte)
    └── css/              ← byggs av Tailwind (rör inte)
```

**Varför två mappar?** Chrome vägrar ladda ett tillägg som innehåller filer vars namn börjar med `_`,
och `node_modules/typescript` har sådana. Därför laddar Chrome bara `extension/`, och dina byggda filer hamnar där.

---

## Steg 1 – Blockeringen fungerar (utan UI)

- [x] Skapa `extension/manifest.json`. Den behöver:
  - `manifest_version` (siffran 3), `name`, `version` (t.ex. `"0.1.0"`), `description`
  - `permissions` → `declarativeNetRequest` och `storage`
  - `background` → `service_worker` med sökvägen till den **byggda** filen (`js/...`), plus `"type": "module"`
  - `action` → `default_popup` → `popup.html`
  - `declarative_net_request` → `rule_resources` → en array med ett objekt: `id` (ett namn du väljer), `enabled`, `path`

- [x] Skapa `extension/rules.json` – en array av regler. Varje regel har formen
  `{ id, priority, action: { type }, condition: { urlFilter, resourceTypes } }`
  - `id` → ett unikt heltal ≥ 1
  - `priority` → `1` räcker
  - `action.type` → `"block"`
  - `urlFilter` → `"||domän.com^"` (`||` = domänen + alla subdomäner, `^` = här slutar domännamnet)
  - `resourceTypes` → en array, t.ex. `"script"`, `"image"`, `"sub_frame"`, `"xmlhttprequest"`
  - 🤔 Beslut: vilka domäner? Förslag att börja med: `doubleclick.net`, `googlesyndication.com`,
    `googleadservices.com`, `adservice.google.com`, `amazon-adsystem.com`, `taboola.com`, `outbrain.com`

- [x] Kör `npm run watch:ts` en gång så att `extension/js/background.js` finns (även om den är tom än)
- [x] Ladda: `chrome://extensions` → slå på **Developer mode** → **Load unpacked** → välj mappen `extension/`
- [x] Testa: öppna en nyhetssajt → DevTools → fliken **Network**. Blockerade anrop syns i rött med `ERR_BLOCKED_BY_CLIENT`.

---

## Steg 2 – Popupen (bara utseende)

- [x] `src/styles.css` – följ TODO:s i filen
- [x] `extension/popup.html` – följ TODO:s i filen
- [x] Testa: klicka på tilläggets ikon (pusselbiten → fäst AdBlocker så att den syns i verktygsfältet)
- 🤔 Beslut: frågans formulering. "Vill du se annonser?" (där **Nej** = blockera) eller "Vill du blockera annonser?"
  (där **Ja** = blockera)? Den första är roligare, den andra tydligare.
- 🤔 Beslut: accentfärg, hur runda hörn, ljust/mörkt läge.

---

## Steg 3 – background.ts öppnar popupen vid installation

- [ ] `src/background.ts` – följ TODO:s i filen
- [ ] Testa: ta bort tillägget och ladda in det igen. Popupen ska dyka upp direkt.
- [ ] Öppnas den inte? Kolla konsolen under **"service worker"** på tilläggskortet.
- 🤔 Beslut: `chrome.action.openPopup()` är inte lika pålitlig som en flik. Räcker det att användaren
  kan klicka på ikonen om den inte öppnas av sig själv?

---

## Steg 4 – popup.ts: knapparna gör något

- [x] `src/popup.ts` – följ TODO:s i filen
- [x] 🤔 Beslut: ska blockeringen vara på eller av innan användaren har valt? Sätt `enabled` i `manifest.json` därefter.
- [x] Testa: klicka **Nej** → Network-fliken visar blockeringar. Öppna popupen igen → klicka **Ja** → inga blockeringar.
- [x] Testa: stäng och öppna popupen. Visar statustexten rätt val?

---

## Steg 5 – Bonus

- [ ] Byt knapparna mot ett på/av-reglage (se BONUS i `popup.html`)
- [ ] Badge "ON"/"OFF" på ikonen: `chrome.action.setBadgeText(...)` + `setBadgeBackgroundColor(...)`
- [ ] Fler domäner i `rules.json`
- [ ] Animation när valet är gjort (`@keyframes` i styles.css)
- [ ] Fråga vid varje webbläsarstart: `chrome.runtime.onStartup`
- [ ] Egen ikon: `icons` i manifest.json, PNG i 16, 48 och 128 px

---

## Felsökning

| Problem | Lösning |
|---|---|
| Ändrat `manifest.json` eller `background.ts` | Klicka på reload-pilen på tilläggskortet i `chrome://extensions` |
| Ändrat HTML, CSS eller `popup.ts` | Räcker att öppna popupen igen |
| Var är konsolen för background? | Länken **"service worker"** på tilläggskortet |
| Var är konsolen för popupen? | Högerklicka i popupen → **Inspektera** |
| Knappen gör ingenting | `onclick="..."` i HTML och kod direkt i `<script>` blockeras. Använd `addEventListener` i .ts-filen |
| Tailwind-klass syns inte | Kör `watch:css`? Är klassnamnet skrivet i sin helhet (inte `"bg-" + färg`)? |
| `chrome` är okänt i VSCode | `types: ["chrome"]` i tsconfig + `@types/chrome` installerat? Starta om TS-servern |
| Röda TS-fel | Bra! Läs dem, de är din lärare. Hovra över variabler för att se deras typ |
