# English Islands — Language Islands Method

Your personal English study environment. Pure HTML/CSS/JS, no build step, no server required.

## 1. How to run

Unzip the folder anywhere and double-click `index.html` (or open it from your browser: File → Open).
Everything runs locally in the browser — no installation needed.

For voice features to work best, use Chrome or Edge (they have the most complete Web Speech API support). Safari and Firefox will still run the rest of the app if speech isn't available.

## 2. Where to add new islands

Open `data/islands.js`. Each island is one object inside the `ISLANDS` array. Islands 02–10 are already stubbed out with the correct shape (empty arrays). Fill them in following the exact structure used by **Island 01 — About Me** (which is fully built and acts as the template):

- `vocabulary`: list of `{ en, pt, approx, ipa }`
- `coreSentences`: list of `{ en, pt }`
- `patterns`: list of `{ title, examples[], variationBank[] }`
- `variations`: list of `{ base, affirmative, negative, question, past, future }` (use `null` for past/future when it doesn't make sense)
- `questions`: list of `{ q, sample }`
- `exercises.translate / .fillBlank / .multipleChoice / .rearrange / .listening`
- `speakingSentences`: array of strings
- `talkPrompts`: array of strings

To add an **Island 11**, just push a new object onto the array with a unique `id` (e.g. `"island11"`). The app automatically picks it up — no other code changes needed. Unlocking is sequential by array order unless "Unlock all islands" is on in Settings.

## 3. Where to change content

- **Island content** (words, sentences, questions, exercises): `data/islands.js`
- **App logic** (navigation, exercises engine, XP, speech, review system): `app.js`
- **Visual design** (colors, layout, fonts): `style.css`
- **Page shell / menu**: `index.html`

## 4. How progress is saved

Everything is stored in the browser's `localStorage` under the key `englishIslandsState_v1`: island progress, XP, vocabulary/question "known" marks, review cards, challenge scores, and settings. Nothing is sent anywhere — it all stays on your device. Closing the tab or browser doesn't erase anything. Clearing your browser data, or using a different browser/device, will start fresh. `Settings → Reset progress` wipes it deliberately (with a confirmation).

## 5. Features that depend on the browser

- **🔊 Audio (text-to-speech)** uses the built-in `SpeechSynthesis` API. Voice options in Settings come from whatever voices your OS/browser expose — this varies by device. If unavailable, the app shows a toast and the rest of the app keeps working.
- **🎙️ Speaking & Shadowing (speech-to-text)** use `SpeechRecognition` (`webkitSpeechRecognition`). This is well supported in Chrome/Edge, poorly or not at all in Firefox/Safari. If it's missing, the app tells you and disables just that feature — everything else stays usable. Word-matching comparisons are approximate, not a certified pronunciation score.
- Both features may ask for **microphone permission** (speaking only) the first time you use them.

## Project structure

```
index.html          — page shell, menu, view container
style.css            — visual design (ocean/islands theme)
app.js               — app engine: state, routing, speech, exercises, XP, SRS
data/islands.js       — all island content (edit this to add/change islands)
```

Enjoy exploring your islands! 🏝️
# English-Islands
