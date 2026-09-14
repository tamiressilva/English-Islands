/* ============================================================
   English Islands — App Engine (Premium Refactor)
   Plain JS, no framework. Phosphor Icons throughout.
   ============================================================ */

const STORAGE_KEY = "englishIslandsState_v1";

const App = (function () {

  // ---------------------------------------------------------
  // ICON HELPER
  // ---------------------------------------------------------

  function icon(name, weight) {
    const w = weight || "regular";
    return `<i class="ph ph-${name}${w === "fill" ? "-fill" : ""}" aria-hidden="true"></i>`;
  }

  // ---------------------------------------------------------
  // STATE
  // ---------------------------------------------------------

  function defaultIslandState(unlocked) {
    return {
      unlocked: unlocked,
      mastered: false,
      progress: { vocabulary: 0, sentences: 0, listening: 0, speaking: 0 },
      wordsKnown: {},
      questionsKnown: {},
      exerciseStats: { correct: 0, total: 0 },
      challengeScore: null,
      lastActivity: null
    };
  }

  function freshState() {
    const islands = {};
    ISLANDS.forEach((isl, i) => {
      islands[isl.id] = defaultIslandState(isl.unlockedByDefault || i === 0);
    });
    return {
      settings: {
        voiceURI: null,
        accent: "US",
        rate: 1,
        showPronunciation: true,
        showTranslation: true,
        allUnlocked: false
      },
      xp: 0,
      islands: islands,
      reviewCards: {}
    };
  }

  let state = load();

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return freshState();
      const parsed = JSON.parse(raw);
      const fresh = freshState();
      parsed.islands = Object.assign({}, fresh.islands, parsed.islands || {});
      parsed.settings = Object.assign({}, fresh.settings, parsed.settings || {});
      parsed.reviewCards = parsed.reviewCards || {};
      parsed.xp = parsed.xp || 0;
      return parsed;
    } catch (e) {
      console.warn("Could not read saved progress, starting fresh.", e);
      return freshState();
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Could not save progress.", e);
    }
  }

  function getIsland(id) { return ISLANDS.find(i => i.id === id); }
  function getIslandState(id) { return state.islands[id]; }

  function touchActivity(islandId) {
    state.islands[islandId].lastActivity = Date.now();
  }

  // ---------------------------------------------------------
  // XP / LEVEL
  // ---------------------------------------------------------

  function addXP(amount, label) {
    state.xp += amount;
    save();
    toast(`+${amount} XP${label ? " — " + label : ""}`);
    const pill = document.getElementById("xp-pill-value");
    if (pill) pill.textContent = state.xp;
    if (currentView === "home" || currentView === "progress") render();
  }

  function levelFromXP(xp) {
    return Math.floor(xp / 150) + 1;
  }

  // ---------------------------------------------------------
  // PROGRESS MATH
  // ---------------------------------------------------------

  function islandPercent(islandId) {
    const p = getIslandState(islandId).progress;
    const avg = (p.vocabulary + p.sentences + p.listening + p.speaking) / 4;
    return Math.round(avg);
  }

  function overallSkillPercent(skill) {
    const ids = Object.keys(state.islands);
    const sum = ids.reduce((acc, id) => acc + state.islands[id].progress[skill], 0);
    return Math.round(sum / ids.length);
  }

  function overallPercent() {
    const skills = ["vocabulary", "sentences", "listening", "speaking"];
    const avg = skills.reduce((a, s) => a + overallSkillPercent(s), 0) / skills.length;
    return Math.round(avg);
  }

  function bumpProgress(islandId, skill, amount) {
    const p = getIslandState(islandId).progress;
    p[skill] = Math.max(0, Math.min(100, p[skill] + amount));
    touchActivity(islandId);
    save();
  }

  function isUnlocked(islandId) {
    if (state.settings.allUnlocked) return true;
    return !!getIslandState(islandId).unlocked;
  }

  function maybeUnlockNext(islandId) {
    const idx = ISLANDS.findIndex(i => i.id === islandId);
    const next = ISLANDS[idx + 1];
    if (next && !state.islands[next.id].unlocked) {
      state.islands[next.id].unlocked = true;
      save();
      toast(`${icon("lock-simple-open")} ${next.name} unlocked!`);
    }
  }

  // ---------------------------------------------------------
  // SPEECH SYNTHESIS
  // ---------------------------------------------------------

  let voicesCache = [];
  function refreshVoices() {
    if (!("speechSynthesis" in window)) return;
    voicesCache = window.speechSynthesis.getVoices();
  }
  if ("speechSynthesis" in window) {
    refreshVoices();
    window.speechSynthesis.onvoiceschanged = refreshVoices;
  }

  function pickVoice() {
    if (!voicesCache.length) refreshVoices();
    if (state.settings.voiceURI) {
      const chosen = voicesCache.find(v => v.voiceURI === state.settings.voiceURI);
      if (chosen) return chosen;
    }
    const langPref = state.settings.accent === "UK" ? "en-GB" : "en-US";
    return voicesCache.find(v => v.lang === langPref) ||
           voicesCache.find(v => v.lang && v.lang.startsWith("en")) ||
           voicesCache[0] || null;
  }

  function speak(text, slow) {
    if (!("speechSynthesis" in window)) {
      toast("Speech isn't available in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    const voice = pickVoice();
    if (voice) utter.voice = voice;
    utter.rate = (slow ? 0.6 : 1) * (state.settings.rate || 1);
    window.speechSynthesis.speak(utter);
  }

  function speechSupported() { return "speechSynthesis" in window; }

  // ---------------------------------------------------------
  // SPEECH RECOGNITION
  // ---------------------------------------------------------

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognizer = null;
  let recognizing = false;

  function recognitionSupported() { return !!SR; }

  function startRecognition(onResult, onEnd) {
    if (!SR) { toast("Speech recognition isn't available in this browser."); return; }
    if (recognizing) return;
    recognizer = new SR();
    recognizer.lang = state.settings.accent === "UK" ? "en-GB" : "en-US";
    recognizer.interimResults = false;
    recognizer.maxAlternatives = 1;
    recognizing = true;
    recognizer.onresult = (e) => {
      const text = e.results[0][0].transcript;
      onResult(text);
    };
    recognizer.onerror = () => { recognizing = false; if (onEnd) onEnd(); };
    recognizer.onend = () => { recognizing = false; if (onEnd) onEnd(); };
    recognizer.start();
  }

  function stopRecognition() {
    if (recognizer && recognizing) recognizer.stop();
  }

  function compareWords(target, said) {
    const norm = s => s.toLowerCase().replace(/[.,!?]/g, "").trim().split(/\s+/);
    const t = norm(target), s = norm(said);
    let matches = 0;
    const diffs = [];
    for (let i = 0; i < t.length; i++) {
      if (s[i] && s[i] === t[i]) matches++;
      else if (s[i]) diffs.push(`${t[i]} → ${s[i]}`);
      else diffs.push(`${t[i]} → (missing)`);
    }
    return { matches, totalWords: t.length, diffs };
  }

  // ---------------------------------------------------------
  // REVIEW / SIMPLE SRS
  // ---------------------------------------------------------

  function addReviewCard(cardId, text, translation, tag) {
    state.reviewCards[cardId] = state.reviewCards[cardId] || {
      text, translation, tag: tag || "review", timesShown: 0, addedAt: Date.now()
    };
    state.reviewCards[cardId].tag = tag || state.reviewCards[cardId].tag;
    save();
  }

  function tagWeight(tag) { return tag === "difficult" ? 3 : tag === "review" ? 2 : 1; }

  function dueReviewCards() {
    const ids = Object.keys(state.reviewCards);
    const cards = ids.map(id => Object.assign({ id }, state.reviewCards[id]));
    cards.sort((a, b) => tagWeight(b.tag) - tagWeight(a.tag));
    return cards;
  }

  // ---------------------------------------------------------
  // THEME (Dark / Light)
  // ---------------------------------------------------------

  const THEME_KEY = "englishIslandsTheme";

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark") {
      document.body.classList.add("dark");
    }
    updateThemeIcon();
  }

  function toggleTheme() {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    updateThemeIcon();
  }

  function updateThemeIcon() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    const isDark = document.body.classList.contains("dark");
    btn.innerHTML = isDark
      ? '<i class="ph ph-moon" aria-hidden="true"></i>'
      : '<i class="ph ph-sun" aria-hidden="true"></i>';
  }

  // ---------------------------------------------------------
  // TOAST
  // ---------------------------------------------------------

  let toastTimer = null;
  function toast(msg) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }

  // ---------------------------------------------------------
  // ROUTER
  // ---------------------------------------------------------

  let currentView = "home";
  let currentParams = {};

  function navigate(view, params) {
    currentView = view;
    currentParams = params || {};
    window.scrollTo(0, 0);
    render();
  }

  const NAV_ICONS = {
    home:     { regular: "house",          fill: "house-fill" },
    islands:  { regular: "island",         fill: "island-fill" },
    review:   { regular: "arrows-clockwise", fill: "arrows-clockwise-fill" },
    speaking: { regular: "microphone",     fill: "microphone-fill" },
    progress: { regular: "chart-bar",      fill: "chart-bar-fill" },
    settings: { regular: "gear",           fill: "gear-fill" }
  };

  function render() {
    const active = navSection(currentView);

    document.querySelectorAll("#bottom-nav button").forEach(b => {
      const section = b.dataset.nav;
      const isActive = section === active;
      b.classList.toggle("active", isActive);
      const ic = b.querySelector(".ic i");
      if (ic && NAV_ICONS[section]) {
        const variant = isActive ? NAV_ICONS[section].fill : NAV_ICONS[section].regular;
        ic.className = `ph ph-${variant}`;
      }
    });

    const el = document.getElementById("view");
    el.classList.remove("no-anim");
    // Force reflow to restart animation
    void el.offsetWidth;
    el.innerHTML = Views[currentView] ? Views[currentView](currentParams) : Views.home();
    afterRender();
  }

  function navSection(view) {
    if (view === "home") return "home";
    if (view === "islands" || view === "islandDetail") return "islands";
    if (view === "review") return "review";
    if (view === "speaking") return "speaking";
    if (view === "progress") return "progress";
    if (view === "settings") return "settings";
    return "home";
  }

  function afterRender() {
    document.getElementById("xp-pill-value").textContent = state.xp;
  }

  // ---------------------------------------------------------
  // VIEW HELPERS
  // ---------------------------------------------------------

  function waveBar(pct) {
    return `<div class="wave-bar"><i style="width:${pct}%"></i></div>`;
  }

  function esc(str) {
    return String(str).replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, "&quot;");
  }

  // ---------------------------------------------------------
  // VIEWS
  // ---------------------------------------------------------

  const Views = {};

  Views.home = function () {
    const overall = overallPercent();
    const vocab = overallSkillPercent("vocabulary");
    const sent = overallSkillPercent("sentences");
    const listen = overallSkillPercent("listening");
    const speak_ = overallSkillPercent("speaking");
    const nextIslands = ISLANDS.filter(i => isUnlocked(i.id) && !getIslandState(i.id).mastered).slice(0, 2);

    return `
      <div class="overall-progress">
        <div class="big-number">${overall}%</div>
        <div class="big-label">My English Progress</div>
        <div class="stack">
          ${skillRow("Vocabulary", vocab)}
          ${skillRow("Sentences", sent)}
          ${skillRow("Listening", listen)}
          ${skillRow("Speaking", speak_)}
        </div>
      </div>

      <div class="section-heading">
        <h2>Continue exploring</h2>
        <span class="meta">Level ${levelFromXP(state.xp)}</span>
      </div>
      <div class="island-list">
        ${nextIslands.length ? nextIslands.map(islandCardHTML).join("") : `
          <div class="empty-state">
            ${icon("confetti")}
            All unlocked islands are mastered — amazing!
          </div>`}
      </div>

      <div class="section-heading">
        <h2>Quick actions</h2>
      </div>
      <div class="row flex-wrap">
        <button class="btn" onclick="App.navigate('review')">${icon("arrows-clockwise")} Review</button>
        <button class="btn" onclick="App.navigate('speaking')">${icon("microphone")} Speaking</button>
        <button class="btn" onclick="App.openConnect()">${icon("bridge")} Connect Islands</button>
        <button class="btn" onclick="App.openConversation()">${icon("chats")} Conversation Mode</button>
      </div>
    `;
  };

  function skillRow(label, pct) {
    return `<div class="skill-row"><span>${label}</span>${waveBar(pct)}<span>${pct}%</span></div>`;
  }

  function islandCardHTML(isl) {
    const st = getIslandState(isl.id);
    const unlocked = isUnlocked(isl.id);
    const pct = islandPercent(isl.id);
    let statusBadge = `<span class="badge">${icon("lock-simple")} Locked</span>`;
    if (unlocked && st.mastered) statusBadge = `<span class="badge mastered">${icon("check-circle")} Mastered</span>`;
    else if (unlocked) statusBadge = `<span class="badge progress">${icon("spinner")} In progress</span>`;

    return `
      <div class="island-card ${unlocked ? "" : "locked"}">
        <div class="row-top">
          <span class="num">${String(isl.number).padStart(2, "0")}</span>
          <h3>${icon("island")} ${isl.name}</h3>
        </div>
        <div class="desc">${isl.description}</div>
        ${unlocked ? waveBar(pct) : ""}
        <div class="status-line">
          ${unlocked ? `<span class="pct">${pct}%</span>` : `<span>${icon("lock-simple")} Locked</span>`}
          ${statusBadge}
        </div>
        <div class="actions">
          ${unlocked
            ? `<button class="btn primary small" onclick="App.navigate('islandDetail',{id:'${isl.id}'})">${pct > 0 ? "Continue" : "Start"}</button>
               ${pct > 0 ? `<button class="btn small" onclick="App.navigate('islandDetail',{id:'${isl.id}', tab:'sentences'})">Review</button>` : ""}`
            : `<button class="btn small" disabled>${icon("lock-simple")} Locked</button>`}
        </div>
      </div>`;
  }

  Views.islands = function () {
    return `
      <div class="section-heading"><h2>${icon("island")} My English Islands</h2></div>
      <div class="island-list">${ISLANDS.map(islandCardHTML).join("")}</div>
    `;
  };

  // ---- Island detail ----

  Views.islandDetail = function (params) {
    const isl = getIsland(params.id);
    if (!isl) return `<div class="empty-state">${icon("warning-circle")} Island not found.</div>`;
    if (!isUnlocked(isl.id)) return `<div class="empty-state">${icon("lock-simple")} This island is still locked.</div>`;
    const tab = params.tab || "vocabulary";
    const tabs = [
      ["vocabulary", "Vocabulary"], ["sentences", "Sentences"], ["patterns", "Patterns"],
      ["questions", "Questions"], ["exercises", "Exercises"], ["speaking", "Speak"],
      ["shadowing", "Shadowing"], ["talk", "Talk 2 min"], ["challenge", "Challenge"]
    ];

    let body = "";
    if (!isl.vocabulary.length) {
      body = `<div class="empty-state">Content for this island hasn't been written yet.<br>Add it in <code>data/islands.js</code> following Island 01's structure.</div>`;
    } else {
      if (tab === "vocabulary") body = vocabularyTab(isl);
      else if (tab === "sentences") body = sentencesTab(isl);
      else if (tab === "patterns") body = patternsTab(isl);
      else if (tab === "questions") body = questionsTab(isl);
      else if (tab === "exercises") body = exercisesTab(isl);
      else if (tab === "speaking") body = speakingTab(isl);
      else if (tab === "shadowing") body = shadowingTab(isl);
      else if (tab === "talk") body = talkTab(isl);
      else if (tab === "challenge") body = challengeTab(isl);
    }

    return `
      <button class="back-link" onclick="App.navigate('islands')">${icon("caret-left")} All islands</button>
      <div class="island-header">
        <h2>${icon("island")} ${isl.name}</h2>
      </div>
      <div class="tab-bar">
        ${tabs.map(([id, label]) => `<button class="${tab === id ? "active" : ""}" onclick="App.navigate('islandDetail',{id:'${isl.id}',tab:'${id}'})">${label}</button>`).join("")}
      </div>
      <div id="tab-body">${body}</div>
    `;
  };

  function vocabularyTab(isl) {
    const known = getIslandState(isl.id).wordsKnown;
    return isl.vocabulary.map((w, i) => `
      <div class="item-card vocab-item">
        <div class="en">${w.en}</div>
        <div class="pt">${w.pt}</div>
        ${state.settings.showPronunciation ? `<div class="approx">"${w.approx}"</div>` : ""}
        <div class="ipa hidden" id="ipa-${isl.id}-${i}">${w.ipa}</div>
        <div class="audio-row">
          <button class="icon-btn" onclick="App.speak('${esc(w.en)}',false)">${icon("speaker-high")} Listen</button>
          <button class="icon-btn" onclick="App.speak('${esc(w.en)}',true)">${icon("turtle")} Slow</button>
          <button class="icon-btn" onclick="App.toggleIPA('${isl.id}',${i})">IPA</button>
          <button class="icon-btn" onclick="App.markWordKnown('${isl.id}',${i}, this)">${known[i] ? icon("check-circle-fill") + " Known" : "Mark known"}</button>
        </div>
      </div>
    `).join("");
  }

  function sentencesTab(isl) {
    return isl.coreSentences.map((s, i) => `
      <div class="item-card sentence-item">
        <div class="en">${s.en}</div>
        <div class="pt hidden" id="pt-${isl.id}-${i}">${s.pt}</div>
        <div class="audio-row">
          <button class="icon-btn" onclick="App.speak('${esc(s.en)}',false)">${icon("speaker-high")} Listen</button>
          <button class="icon-btn" onclick="App.speak('${esc(s.en)}',true)">${icon("turtle")} Slow</button>
          <button class="icon-btn" onclick="App.toggleTranslation('${isl.id}',${i})">${icon("translate")} Translation</button>
          <button class="icon-btn" onclick="App.tagCard('${isl.id}-sent-${i}','${esc(s.en)}','${esc(s.pt)}','easy',this)">${icon("star")}</button>
          <button class="icon-btn" onclick="App.tagCard('${isl.id}-sent-${i}','${esc(s.en)}','${esc(s.pt)}','difficult',this)">${icon("flag")}</button>
        </div>
      </div>
    `).join("") + patternsVariationsBlock(isl);
  }

  function patternsVariationsBlock(isl) {
    if (!isl.variations.length) return "";
    return `<div class="section-heading"><h2 style="font-size:15px">Variations</h2></div>` +
      isl.variations.map(v => `
        <div class="item-card">
          <div class="en" style="margin-bottom:8px">${v.base}</div>
          ${variationRow("Affirmative", v.affirmative)}
          ${variationRow("Negative", v.negative)}
          ${variationRow("Question", v.question)}
          ${variationRow("Past", v.past)}
          ${variationRow("Future", v.future)}
        </div>
      `).join("");
  }

  function variationRow(tag, text) {
    if (!text) return `<div class="variation-row"><span class="tag">${tag}</span><span class="empty">not applicable here</span></div>`;
    return `<div class="variation-row"><span class="tag">${tag}</span><span>${text} <button class="icon-btn" style="padding:2px 8px" onclick="App.speak('${esc(text)}',false)">${icon("speaker-high")}</button></span></div>`;
  }

  function patternsTab(isl) {
    if (!isl.patterns.length) return `<div class="empty-state">${icon("pattern")} No patterns yet for this island.</div>`;
    return isl.patterns.map((p, i) => `
      <div class="item-card pattern-card">
        <div class="title">${icon("lightbulb")} ${p.title}</div>
        <ul>${p.examples.map(e => `<li>${e} <button class="icon-btn" style="padding:2px 8px" onclick="App.speak('${esc(e)}',false)">${icon("speaker-high")}</button></li>`).join("")}</ul>
        <button class="btn small" onclick="App.generateVariation('${isl.id}',${i})">${icon("arrows-clockwise")} Generate variation</button>
        <div class="variation-out" id="var-out-${isl.id}-${i}"></div>
      </div>
    `).join("");
  }

  function questionsTab(isl) {
    const known = getIslandState(isl.id).questionsKnown;
    return isl.questions.map((q, i) => `
      <div class="item-card question-card">
        <div class="q">${icon("question")} ${q.q}</div>
        <div class="audio-row">
          <button class="icon-btn" onclick="App.speak('${esc(q.q)}',false)">${icon("speaker-high")} Listen</button>
        </div>
        <textarea placeholder="Type your answer..." id="ans-${isl.id}-${i}"></textarea>
        <div class="row2">
          <button class="btn small" onclick="App.toggleSampleAnswer('${isl.id}',${i})">${icon("eye")} Show sample answer</button>
          <button class="btn small" onclick="App.markQuestionKnown('${isl.id}',${i}, this)">${known[i] ? icon("check-circle-fill") + " I know it" : "I know it"}</button>
        </div>
        <div class="answer-reveal hidden" id="sample-${isl.id}-${i}">${q.sample}</div>
      </div>
    `).join("");
  }

  function exercisesTab(isl) {
    return `
      ${exerciseTranslateBlock(isl)}
      ${exerciseFillBlankBlock(isl)}
      ${exerciseMultipleChoiceBlock(isl)}
      ${exerciseRearrangeBlock(isl)}
      ${exerciseListeningBlock(isl)}
    `;
  }

  function exerciseTranslateBlock(isl) {
    if (!isl.exercises.translate.length) return "";
    return `<div class="exercise-block"><h4>${icon("translate")} A — Portuguese → English</h4>${isl.exercises.translate.map((ex, i) => `
      <div class="ex-item">
        <div class="prompt">"${ex.pt}"</div>
        <input type="text" id="tr-${isl.id}-${i}" placeholder="Type in English..." />
        <button class="btn small" onclick="App.checkTranslate('${isl.id}',${i})">Check</button>
        <div class="feedback" id="tr-fb-${isl.id}-${i}"></div>
      </div>`).join("")}</div>`;
  }

  function exerciseFillBlankBlock(isl) {
    if (!isl.exercises.fillBlank.length) return "";
    return `<div class="exercise-block"><h4>${icon("text-b")} B — Complete the sentence</h4>${isl.exercises.fillBlank.map((ex, i) => `
      <div class="ex-item">
        <div class="prompt">${ex.sentence}</div>
        <div class="option-grid" id="fb-${isl.id}-${i}">
          ${ex.options.map(o => `<button onclick="App.checkFillBlank('${isl.id}',${i},'${esc(o)}',this)">${o}</button>`).join("")}
        </div>
      </div>`).join("")}</div>`;
  }

  function exerciseMultipleChoiceBlock(isl) {
    if (!isl.exercises.multipleChoice.length) return "";
    return `<div class="exercise-block"><h4>${icon("list-checks")} C — Multiple choice</h4>${isl.exercises.multipleChoice.map((ex, i) => `
      <div class="ex-item">
        <div class="prompt">${ex.q}</div>
        <div class="option-grid" id="mc-${isl.id}-${i}">
          ${ex.options.map(o => `<button onclick="App.checkMultipleChoice('${isl.id}',${i},'${esc(o)}',this)">${o}</button>`).join("")}
        </div>
      </div>`).join("")}</div>`;
  }

  function exerciseRearrangeBlock(isl) {
    if (!isl.exercises.rearrange.length) return "";
    return `<div class="exercise-block"><h4>${icon("sort-ascending")} D — Rearrange</h4>${isl.exercises.rearrange.map((ex, i) => {
      const shuffled = [...ex.scrambled].sort(() => Math.random() - 0.5);
      return `
      <div class="ex-item">
        <div class="scramble-answer" id="rea-ans-${isl.id}-${i}" data-answer="${esc(ex.answer)}"></div>
        <div class="scramble-row" id="rea-bank-${isl.id}-${i}">
          ${shuffled.map(w => `<button class="chip" onclick="App.rearrangeClick('${isl.id}',${i},this)">${w}</button>`).join("")}
        </div>
        <button class="btn small" onclick="App.checkRearrange('${isl.id}',${i})">${icon("check")} Check</button>
        <button class="btn small ghost" onclick="App.resetRearrange('${isl.id}',${i})">${icon("arrow-u-up-left")} Reset</button>
        <div class="feedback" id="rea-fb-${isl.id}-${i}"></div>
      </div>`;
    }).join("")}</div>`;
  }

  function exerciseListeningBlock(isl) {
    if (!isl.exercises.listening.length) return "";
    return `<div class="exercise-block"><h4>${icon("headphones")} E — Listening</h4>${isl.exercises.listening.map((ex, i) => `
      <div class="ex-item">
        <button class="btn small" onclick="App.speak('${esc(ex.audio)}',false)">${icon("play")} Play sentence</button>
        <div class="option-grid" style="margin-top:10px" id="li-${isl.id}-${i}">
          ${ex.options.map(o => `<button onclick="App.checkListening('${isl.id}',${i},'${esc(o)}',this)">${o}</button>`).join("")}
        </div>
      </div>`).join("")}</div>`;
  }

  function speakingTab(isl) {
    if (!isl.speakingSentences.length) return `<div class="empty-state">${icon("microphone")} No speaking sentences yet.</div>`;
    return `
      <div class="speak-card">
        <div class="target" id="speak-target">${isl.speakingSentences[0]}</div>
        <div class="row" style="justify-content:center">
          <button class="icon-btn" onclick="App.speak(document.getElementById('speak-target').textContent,false)">${icon("speaker-high")} Listen</button>
        </div>
        <button class="record-btn" id="record-btn" onclick="App.doRecord('${isl.id}')" aria-label="Record speaking">
          ${icon("microphone", "fill")}
        </button>
        <div class="said" id="speak-said"></div>
        <div class="note">This is an approximate comparison based on your browser's speech recognition — not an official pronunciation score.</div>
        <div class="mt row" style="justify-content:center">
          <button class="btn small" onclick="App.nextSpeakingSentence('${isl.id}')">Next sentence ${icon("caret-right")}</button>
        </div>
      </div>
    `;
  }

  let speakingIndices = {};

  function shadowingTab(isl) {
    if (!isl.speakingSentences.length) return `<div class="empty-state">${icon("microphone")} Nothing to shadow yet.</div>`;
    return `
      <div class="speak-card">
        <div class="target" id="shadow-target">${isl.speakingSentences[0]}</div>
        <ol style="text-align:left; font-size:12px; color:var(--foam-dim)">
          <li>Listen to the sentence</li>
          <li>Repeat it out loud</li>
          <li>Record your voice</li>
          <li>Compare the recognized text</li>
          <li>Repeat until it matches</li>
        </ol>
        <div class="row" style="justify-content:center">
          <button class="icon-btn" onclick="App.speak(document.getElementById('shadow-target').textContent,false)">${icon("play")} Listen</button>
          <button class="icon-btn" onclick="App.speak(document.getElementById('shadow-target').textContent,true)">${icon("turtle")} Slow</button>
        </div>
        <button class="record-btn" id="shadow-record-btn" onclick="App.doShadowRecord('${isl.id}')" aria-label="Record shadowing">
          ${icon("microphone", "fill")}
        </button>
        <div class="said" id="shadow-said"></div>
        <button class="btn small mt" onclick="App.nextShadowSentence('${isl.id}')">Next sentence ${icon("caret-right")}</button>
      </div>
    `;
  }

  function talkTab(isl) {
    if (!isl.talkPrompts.length) return `<div class="empty-state">${icon("chat-dots")} No talk prompts yet.</div>`;
    return `
      <div class="speak-card">
        <h3>${icon("timer")} Talk for 2 minutes</h3>
        <p class="muted">Use these prompts as triggers — build your own answer, don't recite a memorized script.</p>
        <div class="timer-display" id="talk-timer">02:00</div>
        <div class="row" style="justify-content:center">
          <button class="btn primary" id="talk-start" onclick="App.startTalkTimer('${isl.id}')">Start</button>
          <button class="btn" id="talk-stop" onclick="App.stopTalkTimer()">Stop</button>
        </div>
        <ul class="prompt-list">
          ${isl.talkPrompts.map(p => `<li>${p} <button class="icon-btn" style="padding:2px 8px" onclick="App.speak('${esc(p)}',false)">${icon("speaker-high")}</button></li>`).join("")}
        </ul>
      </div>
    `;
  }

  function challengeTab(isl) {
    const st = getIslandState(isl.id);
    if (st.challengeScore !== null) {
      return challengeResultHTML(isl, st.challengeScore);
    }
    return `
      <div class="speak-card">
        <h3>${icon("trophy")} Island Challenge</h3>
        <p class="muted">A short mix of vocabulary, sentences, listening and speaking from this island.</p>
        <button class="btn primary block mt" onclick="App.runChallenge('${isl.id}')">Start challenge</button>
      </div>
    `;
  }

  function challengeResultHTML(isl, score) {
    const passed = score.overall >= 80;
    return `
      <div class="speak-card">
        <div class="score-ring">${score.overall}/100</div>
        <div class="score-breakdown">
          ${skillRow("Vocabulary", score.vocabulary)}
          ${skillRow("Grammar", score.grammar)}
          ${skillRow("Listening", score.listening)}
          ${skillRow("Speaking", score.speaking)}
        </div>
        <div class="result-banner ${passed ? "mastered" : "retry"}">${passed ? icon("island") + " Island Mastered" : icon("arrows-clockwise") + " Keep practicing"}</div>
        <button class="btn small mt" onclick="App.retryChallenge('${isl.id}')">Try again</button>
      </div>
    `;
  }

  // ---- Review ----

  Views.review = function () {
    const cards = dueReviewCards();
    if (!cards.length) {
      return `<div class="section-heading"><h2>${icon("arrows-clockwise")} Review</h2></div><div class="empty-state">${icon("notebook")} Nothing to review yet. Mark sentences or questions with ${icon("star")} / ${icon("flag")} as you study, and they'll show up here.</div>`;
    }
    return `
      <div class="section-heading"><h2>${icon("arrows-clockwise")} Review</h2><span class="meta">${cards.length} card(s)</span></div>
      ${cards.map(c => `
        <div class="item-card">
          <div class="en">${c.text}</div>
          ${state.settings.showTranslation ? `<div class="pt">${c.translation}</div>` : ""}
          <div class="audio-row">
            <button class="icon-btn" onclick="App.speak('${esc(c.text)}',false)">${icon("speaker-high")} Listen</button>
          </div>
          <div class="review-tag-row">
            <button class="btn small ${c.tag === "easy" ? "primary" : ""}" onclick="App.setCardTag('${c.id}','easy')">${icon("star")} Easy</button>
            <button class="btn small ${c.tag === "review" ? "primary" : ""}" onclick="App.setCardTag('${c.id}','review')">${icon("circle-dashed")} Review</button>
            <button class="btn small ${c.tag === "difficult" ? "primary" : ""}" onclick="App.setCardTag('${c.id}','difficult')">${icon("flag")} Difficult</button>
          </div>
        </div>
      `).join("")}
    `;
  };

  // ---- Speaking hub ----

  Views.speaking = function () {
    const unlocked = ISLANDS.filter(i => isUnlocked(i.id) && i.speakingSentences.length);
    return `
      <div class="section-heading"><h2>${icon("microphone")} Speaking</h2></div>
      ${!recognitionSupported() ? `<div class="empty-state">${icon("warning-circle")} Your browser doesn't support speech recognition. You can still listen and practice out loud — recording just won't be compared automatically.</div>` : ""}
      <div class="island-list">
        ${unlocked.map(isl => `
          <div class="island-card">
            <h3>${icon("island")} ${isl.name}</h3>
            <div class="actions">
              <button class="btn small primary" onclick="App.navigate('islandDetail',{id:'${isl.id}',tab:'speaking'})">Speak</button>
              <button class="btn small" onclick="App.navigate('islandDetail',{id:'${isl.id}',tab:'shadowing'})">Shadowing</button>
              <button class="btn small" onclick="App.navigate('islandDetail',{id:'${isl.id}',tab:'talk'})">Talk 2min</button>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  };

  // ---- Progress ----

  Views.progress = function () {
    return `
      <div class="section-heading"><h2>${icon("chart-bar")} Progress</h2></div>
      <div class="overall-progress">
        <div class="big-number">${overallPercent()}%</div>
        <div class="big-label">My English Progress</div>
        <div class="stack">
          ${skillRow("Vocabulary", overallSkillPercent("vocabulary"))}
          ${skillRow("Sentences", overallSkillPercent("sentences"))}
          ${skillRow("Listening", overallSkillPercent("listening"))}
          ${skillRow("Speaking", overallSkillPercent("speaking"))}
        </div>
      </div>
      <div class="section-heading"><h2>Per island</h2></div>
      ${ISLANDS.map(isl => `
        <div class="item-card">
          <div class="spread"><strong>${icon("island")} ${isl.name}</strong><span>${isUnlocked(isl.id) ? islandPercent(isl.id) + "%" : icon("lock-simple")}</span></div>
          ${isUnlocked(isl.id) ? waveBar(islandPercent(isl.id)) : ""}
        </div>
      `).join("")}
      <div class="section-heading"><h2>Level</h2></div>
      <div class="item-card spread">
        <span>${icon("ruler")} Level ${levelFromXP(state.xp)}</span>
        <span>${icon("star")} ${state.xp} XP</span>
      </div>
    `;
  };

  // ---- Settings ----

  Views.settings = function () {
    const voices = voicesCache.filter(v => v.lang && v.lang.startsWith("en"));
    return `
      <div class="section-heading"><h2>${icon("gear")} Settings</h2></div>

      <div class="settings-row">
        <div><div class="label">Voice</div><div class="sub">Used for all audio playback</div></div>
        <select onchange="App.setVoice(this.value)">
          <option value="">Auto</option>
          ${voices.map(v => `<option value="${v.voiceURI}" ${state.settings.voiceURI === v.voiceURI ? "selected" : ""}>${v.name}</option>`).join("")}
        </select>
      </div>

      <div class="settings-row">
        <div><div class="label">Accent preference</div><div class="sub">Used when "Auto" is selected</div></div>
        <select onchange="App.setAccent(this.value)">
          <option value="US" ${state.settings.accent === "US" ? "selected" : ""}>English — US</option>
          <option value="UK" ${state.settings.accent === "UK" ? "selected" : ""}>English — UK</option>
        </select>
      </div>

      <div class="settings-row">
        <div><div class="label">Playback speed</div><div class="sub">${state.settings.rate.toFixed(1)}x</div></div>
        <input type="range" min="0.6" max="1.3" step="0.1" value="${state.settings.rate}" oninput="App.setRate(this.value)" />
      </div>

      <div class="settings-row">
        <div><div class="label">Show pronunciation hints</div></div>
        <div class="switch ${state.settings.showPronunciation ? "on" : ""}" onclick="App.toggleSetting('showPronunciation')" onkeydown="if(event.key===' '||event.key==='Enter'){event.preventDefault();App.toggleSetting('showPronunciation')}" role="switch" aria-checked="${state.settings.showPronunciation}" tabindex="0"><i></i></div>
      </div>

      <div class="settings-row">
        <div><div class="label">Show translations by default</div></div>
        <div class="switch ${state.settings.showTranslation ? "on" : ""}" onclick="App.toggleSetting('showTranslation')" onkeydown="if(event.key===' '||event.key==='Enter'){event.preventDefault();App.toggleSetting('showTranslation')}" role="switch" aria-checked="${state.settings.showTranslation}" tabindex="0"><i></i></div>
      </div>

      <div class="settings-row">
        <div><div class="label">Unlock all islands</div><div class="sub">Ignore progression order</div></div>
        <div class="switch ${state.settings.allUnlocked ? "on" : ""}" onclick="App.toggleSetting('allUnlocked')" onkeydown="if(event.key===' '||event.key==='Enter'){event.preventDefault();App.toggleSetting('allUnlocked')}" role="switch" aria-checked="${state.settings.allUnlocked}" tabindex="0"><i></i></div>
      </div>

      <div class="settings-row">
        <div><div class="label">Reset progress</div><div class="sub">This cannot be undone</div></div>
        <button class="btn" onclick="App.resetProgress()">${icon("trash")} Reset</button>
      </div>
    `;
  };

  // ---- Connect islands ----

  Views.connect = function () {
    const available = CONNECTIONS.filter(c => c.islands.every(id => isUnlocked(id)));
    return `
      <div class="section-heading"><h2>${icon("bridge")} Connect the Islands</h2></div>
      ${!available.length ? `<div class="empty-state">${icon("lock-simple")} Unlock more islands to connect them together.</div>` : available.map(c => {
        const names = c.islands.map(id => getIsland(id).name).join(" + ");
        return `
          <div class="item-card">
            <div class="en" style="margin-bottom:8px">${names}</div>
            ${c.prompts.map(p => `<div class="pt" style="margin-bottom:6px">${p} <button class="icon-btn" style="padding:2px 8px" onclick="App.speak('${esc(p)}',false)">${icon("speaker-high")}</button></div>`).join("")}
          </div>`;
      }).join("")}
    `;
  };

  // ---- Conversation mode ----

  let convoPool = [];
  let convoIndex = 0;

  Views.conversation = function () {
    if (!convoPool.length) buildConvoPool();
    if (!convoPool.length) return `<div class="empty-state">${icon("chats")} Study a few questions first, then come back for Conversation Mode.</div>`;
    const q = convoPool[convoIndex % convoPool.length];
    return `
      <div class="section-heading"><h2>${icon("chats")} Conversation Mode</h2></div>
      <div class="convo-bubble">${q}</div>
      <div class="row">
        <button class="icon-btn" onclick="App.speak('${esc(q)}',false)">${icon("speaker-high")} Listen</button>
        <button class="btn primary" onclick="App.nextConvo()">Next question ${icon("caret-right")}</button>
      </div>
    `;
  };

  function buildConvoPool() {
    convoPool = [];
    ISLANDS.forEach(isl => { if (isUnlocked(isl.id)) isl.questions.forEach(q => convoPool.push(q.q)); });
    convoPool.sort(() => Math.random() - 0.5);
  }

  // ---------------------------------------------------------
  // ACTIONS (called from markup)
  // ---------------------------------------------------------

  function markWordKnown(islandId, idx, btn) {
    const st = getIslandState(islandId);
    const already = !!st.wordsKnown[idx];
    st.wordsKnown[idx] = !already;
    const isl = getIsland(islandId);
    const pctStep = 100 / isl.vocabulary.length;
    bumpProgress(islandId, "vocabulary", already ? -pctStep : pctStep);
    if (!already) addXP(10, "vocabulary");
    if (btn) btn.innerHTML = st.wordsKnown[idx] ? icon("check-circle-fill") + " Known" : "Mark known";
  }

  function markQuestionKnown(islandId, idx, btn) {
    const st = getIslandState(islandId);
    const already = !!st.questionsKnown[idx];
    st.questionsKnown[idx] = !already;
    save();
    if (!already) addXP(10, "question");
    if (btn) btn.innerHTML = st.questionsKnown[idx] ? icon("check-circle-fill") + " I know it" : "I know it";
  }

  function toggleIPA(islandId, idx) {
    document.getElementById(`ipa-${islandId}-${idx}`).classList.toggle("hidden");
  }

  function toggleTranslation(islandId, idx) {
    const el = document.getElementById(`pt-${islandId}-${idx}`);
    el.classList.toggle("hidden");
    if (!el.classList.contains("hidden")) bumpProgress(islandId, "sentences", 2);
  }

  function toggleSampleAnswer(islandId, idx) {
    document.getElementById(`sample-${islandId}-${idx}`).classList.toggle("hidden");
  }

  function tagCard(cardId, text, translation, tag, btn) {
    addReviewCard(cardId, text, translation, tag);
    toast(tag === "easy" ? "Marked as easy" : "Added to difficult review");
  }

  function setCardTag(cardId, tag) {
    if (state.reviewCards[cardId]) {
      state.reviewCards[cardId].tag = tag;
      save();
      navigate("review");
    }
  }

  function generateVariation(islandId, patternIdx) {
    const isl = getIsland(islandId);
    const bank = isl.patterns[patternIdx].variationBank;
    if (!bank || !bank.length) return;
    const pick = bank[Math.floor(Math.random() * bank.length)];
    document.getElementById(`var-out-${islandId}-${patternIdx}`).textContent = pick;
  }

  // exercises

  function checkTranslate(islandId, idx) {
    const isl = getIsland(islandId);
    const ex = isl.exercises.translate[idx];
    const input = document.getElementById(`tr-${islandId}-${idx}`).value.trim();
    const fb = document.getElementById(`tr-fb-${islandId}-${idx}`);
    if (fb.textContent) return;
    const correct = normalize(input) === normalize(ex.en);
    reportExerciseResult(islandId, correct, fb, `Correct answer: "${ex.en}"`, "grammar");
  }

  function normalize(s) { return s.toLowerCase().replace(/[.,!?]/g, "").trim(); }

  function checkFillBlank(islandId, idx, chosen, btn) {
    const isl = getIsland(islandId);
    const ex = isl.exercises.fillBlank[idx];
    const correct = chosen === ex.answer;
    markOptionButtons(`fb-${islandId}-${idx}`, chosen, ex.answer);
    scoreExercise(islandId, correct, "grammar");
  }

  function checkMultipleChoice(islandId, idx, chosen, btn) {
    const isl = getIsland(islandId);
    const ex = isl.exercises.multipleChoice[idx];
    const correct = chosen === ex.answer;
    markOptionButtons(`mc-${islandId}-${idx}`, chosen, ex.answer);
    scoreExercise(islandId, correct, "vocabulary");
  }

  function checkListening(islandId, idx, chosen, btn) {
    const isl = getIsland(islandId);
    const ex = isl.exercises.listening[idx];
    const correct = chosen === ex.answer;
    markOptionButtons(`li-${islandId}-${idx}`, chosen, ex.answer);
    scoreExercise(islandId, correct, "listening");
  }

  function markOptionButtons(containerId, chosen, answer) {
    const container = document.getElementById(containerId);
    Array.from(container.children).forEach(b => {
      if (b.textContent === answer) b.classList.add("chosen-correct");
      else if (b.textContent === chosen) b.classList.add("chosen-wrong");
      b.disabled = true;
    });
  }

  function scoreExercise(islandId, correct, skillHint) {
    const st = getIslandState(islandId);
    st.exerciseStats.total++;
    if (correct) st.exerciseStats.correct++;
    const skill = skillHint === "listening" ? "listening" : "sentences";
    bumpProgress(islandId, skill, correct ? 4 : 1);
    if (correct) addXP(10, "exercise"); else toast("Not quite — keep going!");
    save();
  }

  function reportExerciseResult(islandId, correct, fbEl, correctionText, skillHint) {
    fbEl.innerHTML = correct ? `${icon("check-circle")} Correct!` : `${icon("x-circle")} ${correctionText}`;
    fbEl.className = "feedback " + (correct ? "correct" : "wrong");
    scoreExercise(islandId, correct, skillHint);
  }

  // rearrange

  function rearrangeClick(islandId, idx, btn) {
    const answerBox = document.getElementById(`rea-ans-${islandId}-${idx}`);
    answerBox.appendChild(btn);
    btn.disabled = false;
    btn.onclick = function () {
      document.getElementById(`rea-bank-${islandId}-${idx}`).appendChild(btn);
    };
  }

  function checkRearrange(islandId, idx) {
    const answerBox = document.getElementById(`rea-ans-${islandId}-${idx}`);
    const words = Array.from(answerBox.children).map(c => c.textContent).join(" ");
    const answer = answerBox.dataset.answer;
    const correct = normalize(words) === normalize(answer);
    const fb = document.getElementById(`rea-fb-${islandId}-${idx}`);
    fb.innerHTML = correct ? `${icon("check-circle")} Correct!` : `${icon("x-circle")} Correct order: "${answer}"`;
    fb.className = "feedback " + (correct ? "correct" : "wrong");
    scoreExercise(islandId, correct, "grammar");
  }

  function resetRearrange(islandId, idx) {
    const answerBox = document.getElementById(`rea-ans-${islandId}-${idx}`);
    const bank = document.getElementById(`rea-bank-${islandId}-${idx}`);
    Array.from(answerBox.children).forEach(c => bank.appendChild(c));
    document.getElementById(`rea-fb-${islandId}-${idx}`).textContent = "";
  }

  // speaking

  function doRecord(islandId) {
    const btn = document.getElementById("record-btn");
    const target = document.getElementById("speak-target").textContent;
    const saidEl = document.getElementById("speak-said");
    btn.classList.add("recording");
    saidEl.textContent = "Listening...";
    startRecognition(
      (text) => {
        const cmp = compareWords(target, text);
        saidEl.innerHTML = `Target: ${target}<br>You said: ${text}<br>${icon("check-circle")} Words recognized: ${cmp.matches}/${cmp.totalWords}` +
          (cmp.diffs.length ? `<br>${icon("warning")} Possible difference: ${cmp.diffs.join(", ")}` : "");
        bumpProgress(islandId, "speaking", 8);
        addXP(15, "speaking");
      },
      () => btn.classList.remove("recording")
    );
  }

  function nextSpeakingSentence(islandId) {
    const isl = getIsland(islandId);
    speakingIndices[islandId] = (speakingIndices[islandId] || 0) + 1;
    if (speakingIndices[islandId] >= isl.speakingSentences.length) speakingIndices[islandId] = 0;
    document.getElementById("speak-target").textContent = isl.speakingSentences[speakingIndices[islandId]];
    document.getElementById("speak-said").textContent = "";
  }

  let shadowIndices = {};
  function doShadowRecord(islandId) {
    const btn = document.getElementById("shadow-record-btn");
    const target = document.getElementById("shadow-target").textContent;
    const saidEl = document.getElementById("shadow-said");
    btn.classList.add("recording");
    saidEl.textContent = "Listening...";
    startRecognition(
      (text) => {
        const cmp = compareWords(target, text);
        saidEl.innerHTML = `You said: ${text}<br>${icon("check-circle")} ${cmp.matches}/${cmp.totalWords} words matched`;
        bumpProgress(islandId, "speaking", 6);
        addXP(10, "shadowing");
      },
      () => btn.classList.remove("recording")
    );
  }

  function nextShadowSentence(islandId) {
    const isl = getIsland(islandId);
    shadowIndices[islandId] = (shadowIndices[islandId] || 0) + 1;
    if (shadowIndices[islandId] >= isl.speakingSentences.length) shadowIndices[islandId] = 0;
    document.getElementById("shadow-target").textContent = isl.speakingSentences[shadowIndices[islandId]];
    document.getElementById("shadow-said").textContent = "";
  }

  // talk timer

  let talkInterval = null;
  function startTalkTimer(islandId) {
    let seconds = 120;
    const display = document.getElementById("talk-timer");
    if (!display) return;
    clearInterval(talkInterval);
    talkInterval = setInterval(() => {
      seconds--;
      const m = String(Math.floor(seconds / 60)).padStart(2, "0");
      const s = String(seconds % 60).padStart(2, "0");
      display.textContent = `${m}:${s}`;
      if (seconds <= 0) {
        clearInterval(talkInterval);
        addXP(20, "talk challenge");
        bumpProgress(islandId, "speaking", 10);
        toast("Time's up — great job speaking!");
      }
    }, 1000);
  }

  function stopTalkTimer() {
    clearInterval(talkInterval);
  }

  // challenge

  function runChallenge(islandId) {
    const isl = getIsland(islandId);
    const st = getIslandState(islandId);

    const knownCount = Object.values(st.wordsKnown).filter(Boolean).length;
    const vocabulary = isl.vocabulary.length ? Math.round((knownCount / isl.vocabulary.length) * 100) : 70;

    const totalEx = st.exerciseStats.total || 1;
    const accuracy = Math.round((st.exerciseStats.correct / totalEx) * 100);
    const grammar = st.exerciseStats.total ? accuracy : 65;
    const listening = Math.round((st.progress.listening + grammar) / 2) || 65;

    const speaking = st.progress.speaking ? Math.min(100, Math.round(st.progress.speaking)) : 60;

    const overall = Math.round((vocabulary + grammar + listening + speaking) / 4);
    const score = { vocabulary, grammar, listening, speaking, overall };
    st.challengeScore = score;
    save();

    if (overall >= 80) {
      st.mastered = true;
      save();
      addXP(50, "island mastered");
      maybeUnlockNext(islandId);
    }
    navigate("islandDetail", { id: islandId, tab: "challenge" });
  }

  function retryChallenge(islandId) {
    getIslandState(islandId).challengeScore = null;
    save();
    navigate("islandDetail", { id: islandId, tab: "challenge" });
  }

  // settings actions

  function setVoice(uri) { state.settings.voiceURI = uri || null; save(); }
  function setAccent(val) { state.settings.accent = val; save(); }
  function setRate(val) { state.settings.rate = parseFloat(val); save(); render(); }
  function toggleSetting(key) { state.settings[key] = !state.settings[key]; save(); render(); }

  function resetProgress() {
    if (!confirm("This will erase all your progress and start over. Are you sure?")) return;
    state = freshState();
    save();
    toast("Progress reset.");
    navigate("home");
  }

  function openConnect() { navigate("connect"); }
  function openConversation() { convoPool = []; navigate("conversation"); }
  function nextConvo() { convoIndex++; render(); }

  // ---------------------------------------------------------
  // INIT
  // ---------------------------------------------------------

  function init() {
    initTheme();
    document.querySelectorAll("#bottom-nav button").forEach(btn => {
      btn.addEventListener("click", () => navigate(btn.dataset.view));
    });
    render();
  }

  return {
    init, navigate, render, speak, toggleTheme,
    markWordKnown, markQuestionKnown, toggleIPA, toggleTranslation, toggleSampleAnswer,
    tagCard, setCardTag, generateVariation,
    checkTranslate, checkFillBlank, checkMultipleChoice, checkListening,
    rearrangeClick, checkRearrange, resetRearrange,
    doRecord, nextSpeakingSentence, doShadowRecord, nextShadowSentence,
    startTalkTimer, stopTalkTimer,
    runChallenge, retryChallenge,
    setVoice, setAccent, setRate, toggleSetting, resetProgress,
    openConnect, openConversation, nextConvo
  };
})();

document.addEventListener("DOMContentLoaded", () => App.init());
