/* ============================================================
   English Islands — Island Data
   Add new islands by pushing a new object into the ISLANDS array.
   Each island is self-contained: vocabulary, sentences, patterns,
   questions, exercises, speaking prompts and a final challenge.
   Content is intentionally kept SEPARATE from app.js (the engine).
   ============================================================ */

const ISLANDS = [
  {
    id: "island01",
    number: 1,
    name: "About Me",
    emoji: "🏝️",
    description: "Talk about who you are, where you're from and what you like.",
    unlockedByDefault: true,

    vocabulary: [
      { en: "name", pt: "nome", approx: "néim", ipa: "/neɪm/" },
      { en: "age", pt: "idade", approx: "eidj", ipa: "/eɪdʒ/" },
      { en: "from", pt: "de / originário de", approx: "fróm", ipa: "/frʌm/" },
      { en: "country", pt: "país", approx: "cân-tri", ipa: "/ˈkʌntri/" },
      { en: "state", pt: "estado", approx: "steit", ipa: "/steɪt/" },
      { en: "to live", pt: "morar, viver", approx: "liv", ipa: "/lɪv/" },
      { en: "to study", pt: "estudar", approx: "stá-di", ipa: "/ˈstʌdi/" },
      { en: "to work", pt: "trabalhar", approx: "uôrk", ipa: "/wɜːrk/" },
      { en: "quality", pt: "qualidade", approx: "cuó-li-ti", ipa: "/ˈkwɒləti/" },
      { en: "technology", pt: "tecnologia", approx: "tek-nó-lo-dji", ipa: "/tekˈnɒlədʒi/" },
      { en: "psychology", pt: "psicologia", approx: "sai-kó-lo-dji", ipa: "/saɪˈkɒlədʒi/" },
      { en: "to learn", pt: "aprender", approx: "lérn", ipa: "/lɜːrn/" },
      { en: "movie", pt: "filme", approx: "mú-vi", ipa: "/ˈmuːvi/" },
      { en: "series", pt: "série", approx: "sí-riz", ipa: "/ˈsɪəriːz/" },
      { en: "suspense", pt: "suspense", approx: "sas-péns", ipa: "/səˈspens/" },
      { en: "story", pt: "história", approx: "stó-ri", ipa: "/ˈstɔːri/" },
      { en: "music", pt: "música", approx: "miú-zik", ipa: "/ˈmjuːzɪk/" },
      { en: "astronomy", pt: "astronomia", approx: "as-trô-no-mi", ipa: "/əˈstrɒnəmi/" },
      { en: "science", pt: "ciência", approx: "sái-ens", ipa: "/ˈsaɪəns/" },
      { en: "favorite", pt: "favorito", approx: "féi-vo-rit", ipa: "/ˈfeɪvərɪt/" },
      { en: "group", pt: "grupo", approx: "grúp", ipa: "/ɡruːp/" },
      { en: "small", pt: "pequeno", approx: "smól", ipa: "/smɔːl/" },
      { en: "confidence", pt: "confiança", approx: "cón-fi-dens", ipa: "/ˈkɒnfɪdəns/" },
      { en: "naturally", pt: "naturalmente", approx: "ná-tchu-ra-li", ipa: "/ˈnætʃrəli/" },
      { en: "pronunciation", pt: "pronúncia", approx: "pro-nân-si-êi-xon", ipa: "/prəˌnʌnsiˈeɪʃn/" }
    ],

    coreSentences: [
      { en: "My name is Tatá.", pt: "Meu nome é Tatá." },
      { en: "I am 23 years old.", pt: "Eu tenho 23 anos." },
      { en: "I am from Brazil.", pt: "Eu sou do Brasil." },
      { en: "I live in Bahia.", pt: "Eu moro na Bahia." },
      { en: "I studied Systems Analysis and Development.", pt: "Eu estudei Análise e Desenvolvimento de Sistemas." },
      { en: "I work with quality and documentation.", pt: "Eu trabalho com qualidade e documentação." },
      { en: "I like technology and psychology.", pt: "Eu gosto de tecnologia e psicologia." },
      { en: "I enjoy learning new things.", pt: "Eu gosto de aprender coisas novas." },
      { en: "I like watching movies and series.", pt: "Eu gosto de assistir filmes e séries." },
      { en: "I really like suspense stories.", pt: "Eu gosto muito de histórias de suspense." },
      { en: "I like intelligent stories.", pt: "Eu gosto de histórias inteligentes." },
      { en: "My favorite movie is Interstellar.", pt: "Meu filme favorito é Interestelar." },
      { en: "I like music.", pt: "Eu gosto de música." },
      { en: "I'm interested in astronomy and science.", pt: "Eu me interesso por astronomia e ciência." },
      { en: "I prefer small groups.", pt: "Eu prefiro grupos pequenos." },
      { en: "I don't like big groups.", pt: "Eu não gosto de grupos grandes." },
      { en: "I want to speak English naturally.", pt: "Eu quero falar inglês naturalmente." },
      { en: "I want to improve my pronunciation.", pt: "Eu quero melhorar minha pronúncia." },
      { en: "I want to understand spoken English better.", pt: "Eu quero entender melhor o inglês falado." },
      { en: "I want to feel confident speaking English.", pt: "Eu quero me sentir confiante falando inglês." }
    ],

    patterns: [
      {
        title: "I like + noun / verb-ing",
        examples: [
          "I like technology.",
          "I like watching movies.",
          "I like learning new things.",
          "I like music."
        ],
        variationBank: [
          "I like series.",
          "I like suspense stories.",
          "I like astronomy.",
          "I like small groups.",
          "I like studying at night.",
          "I like intelligent stories."
        ]
      },
      {
        title: "I am from + country / I live in + place",
        examples: [
          "I am from Brazil.",
          "I live in Bahia."
        ],
        variationBank: [
          "I am from Bahia.",
          "I live in Brazil.",
          "I am originally from Brazil."
        ]
      },
      {
        title: "I want to + verb",
        examples: [
          "I want to speak English naturally.",
          "I want to improve my pronunciation.",
          "I want to feel confident speaking English."
        ],
        variationBank: [
          "I want to understand movies without subtitles.",
          "I want to travel and speak English.",
          "I want to use English at work.",
          "I want to stop translating in my head."
        ]
      }
    ],

    variations: [
      {
        base: "I usually study English at night.",
        affirmative: "I usually study English at night.",
        negative: "I don't usually study English at night.",
        question: "Do you usually study English at night?",
        past: "I studied English last night.",
        future: "I'm going to study English tonight."
      },
      {
        base: "I like watching movies.",
        affirmative: "I like watching movies.",
        negative: "I don't like watching movies alone.",
        question: "Do you like watching movies?",
        past: null,
        future: null
      }
    ],

    questions: [
      { q: "What is your name?", sample: "My name is Tatá." },
      { q: "How old are you?", sample: "I am 23 years old." },
      { q: "Where are you from?", sample: "I am from Brazil." },
      { q: "Where do you live?", sample: "I live in Bahia." },
      { q: "What did you study?", sample: "I studied Systems Analysis and Development." },
      { q: "What do you do?", sample: "I work with quality and documentation." },
      { q: "What do you like?", sample: "I like technology, psychology and learning new things." },
      { q: "What kind of movies do you like?", sample: "I like suspense and intelligent stories." },
      { q: "What is your favorite movie?", sample: "My favorite movie is Interstellar." },
      { q: "Why do you like Interstellar?", sample: "Because it has an intelligent and emotional story." },
      { q: "What are you interested in?", sample: "I'm interested in astronomy and science." },
      { q: "Do you prefer small groups or big groups?", sample: "I prefer small groups." },
      { q: "Why are you learning English?", sample: "I want to speak naturally and feel confident." },
      { q: "What do you want to improve?", sample: "I want to improve my pronunciation." },
      { q: "Do you like music?", sample: "Yes, I like music a lot." },
      { q: "What do you do in your free time?", sample: "I watch movies, series, and learn new things." }
    ],

    exercises: {
      translate: [
        { pt: "Eu moro na Bahia.", en: "I live in Bahia." },
        { pt: "Eu tenho 23 anos.", en: "I am 23 years old." },
        { pt: "Eu gosto de tecnologia.", en: "I like technology." },
        { pt: "Eu prefiro grupos pequenos.", en: "I prefer small groups." },
        { pt: "Meu filme favorito é Interestelar.", en: "My favorite movie is Interstellar." }
      ],
      fillBlank: [
        { sentence: "I usually ___ English at night.", options: ["study", "eat", "go", "watch"], answer: "study" },
        { sentence: "I am ___ Brazil.", options: ["from", "in", "on", "at"], answer: "from" },
        { sentence: "I ___ in Bahia.", options: ["live", "am", "do", "have"], answer: "live" },
        { sentence: "I am interested ___ astronomy.", options: ["in", "on", "at", "for"], answer: "in" }
      ],
      multipleChoice: [
        { q: 'What does "usually" mean?', options: ["nunca", "geralmente", "ontem", "amanhã"], answer: "geralmente" },
        { q: 'What does "confidence" mean?', options: ["confiança", "confusão", "conforto", "conflito"], answer: "confiança" },
        { q: 'What does "favorite" mean?', options: ["favorito", "favor", "fávula", "fama"], answer: "favorito" }
      ],
      rearrange: [
        { scrambled: ["Bahia", "in", "I", "live"], answer: "I live in Bahia" },
        { scrambled: ["technology", "like", "I"], answer: "I like technology" },
        { scrambled: ["23", "am", "old", "I", "years"], answer: "I am 23 years old" }
      ],
      listening: [
        { audio: "I am from Brazil.", options: ["I am from Brazil.", "I am from France.", "I am from Bahia."], answer: "I am from Brazil." },
        { audio: "I like watching movies.", options: ["I like watching movies.", "I like watching the news.", "I like watching series."], answer: "I like watching movies." },
        { audio: "My favorite movie is Interstellar.", options: ["My favorite movie is Interstellar.", "My favorite series is Interstellar.", "My favorite story is Interstellar."], answer: "My favorite movie is Interstellar." }
      ]
    },

    speakingSentences: [
      "I usually wake up late.",
      "I live in Bahia.",
      "I like technology and psychology.",
      "My favorite movie is Interstellar.",
      "I want to speak English naturally."
    ],

    talkPrompts: [
      "Who are you?",
      "Where are you from?",
      "What do you do?",
      "What do you like?",
      "What are you learning?",
      "Why are you learning English?"
    ]
  },

  // -------------------------------------------------------------
  // Islands 02–10: structured and locked, ready to receive content.
  // Fill vocabulary / coreSentences / patterns / questions / exercises
  // following the exact same shape as Island 01 above.
  // -------------------------------------------------------------
  // ── Island 02: My Family ──────────────────────────────
  {
    id: "island02", number: 2, name: "My Family", emoji: "👨‍👩‍👧",
    description: "Talk about your family, relatives and the people close to you.",
    unlockedByDefault: false,

    vocabulary: [
      { en: "family", pt: "família", approx: "fá-mi-li", ipa: "/ˈfæməli/" },
      { en: "mother", pt: "mãe", approx: "má-der", ipa: "/ˈmʌðər/" },
      { en: "father", pt: "pai", approx: "fá-der", ipa: "/ˈfɑːðər/" },
      { en: "sister", pt: "irmã", approx: "sís-ter", ipa: "/ˈsɪstər/" },
      { en: "brother", pt: "irmão", approx: "bró-der", ipa: "/ˈbrʌðər/" },
      { en: "grandmother", pt: "avó", approx: "grán-mó-der", ipa: "/ˈɡrænmʌðər/" },
      { en: "grandfather", pt: "avô", approx: "grán-fá-der", ipa: "/ˈɡrænfɑːðər/" },
      { en: "cousin", pt: "primo / prima", approx: "có-zin", ipa: "/ˈkʌzɪn/" },
      { en: "aunt", pt: "tia", approx: "ánt", ipa: "/ɑːnt/" },
      { en: "uncle", pt: "tio", approx: "ún-cou", ipa: "/ˈʌŋkl/" },
      { en: "son", pt: "filho", approx: "són", ipa: "/sʌn/" },
      { en: "daughter", pt: "filha", approx: "dó-ter", ipa: "/ˈdɔːtər/" },
      { en: "husband", pt: "marido", approx: "ház-band", ipa: "/ˈhʌzbənd/" },
      { en: "wife", pt: "esposa", approx: "uáif", ipa: "/waɪf/" },
      { en: "parent", pt: "pais", approx: "pé-rents", ipa: "/ˈpeərənt/" },
      { en: "child", pt: "criança / filho", approx: "tcháild", ipa: "/tʃaɪld/" },
      { en: "sibling", pt: "irmão / irmã", approx: "sí-bling", ipa: "/ˈsɪblɪŋ/" },
      { en: "relative", pt: "parente", approx: "ré-lê-tiv", ipa: "/ˈrelətɪv/" },
      { en: "together", pt: "juntos", approx: "tu-gé-der", ipa: "/təˈɡeðər/" },
      { en: "support", pt: "apoiar / apoio", approx: "su-pórt", ipa: "/səˈpɔːrt/" },
      { en: "close", pt: "próximo / próximo(a)", approx: "clóz", ipa: "/kləʊz/" },
      { en: "relationship", pt: "relacionamento", approx: "ri-lêi-xon-ship", ipa: "/rɪˈleɪʃnʃɪp/" },
      { en: "reunion", pt: "encontro", approx: "riú-nion", ipa: "/riːˈjuːnjən/" },
      { en: "to visit", pt: "visitar", approx: "ví-zit", ipa: "/ˈvɪzɪt/" },
      { en: "to support", pt: "apoiar", approx: "su-pórt", ipa: "/səˈpɔːrt/" }
    ],

    coreSentences: [
      { en: "My mother lives in Bahia.", pt: "Minha mãe mora na Bahia." },
      { en: "My father works in Salvador.", pt: "Meu pai trabalha em Salvador." },
      { en: "I have one sister.", pt: "Eu tenho uma irmã." },
      { en: "My sister is younger than me.", pt: "Minha irmã é mais nova que eu." },
      { en: "My grandmother is very sweet.", pt: "Minha avó é muito carinhosa." },
      { en: "My grandfather tells great stories.", pt: "Meu avô conta ótimas histórias." },
      { en: "I have two cousins.", pt: "Eu tenho dois primos." },
      { en: "My cousins live in São Paulo.", pt: "Meus primos moram em São Paulo." },
      { en: "We have family reunions on holidays.", pt: "Nós temos encontros de família em feriados." },
      { en: "My family is very important to me.", pt: "Minha família é muito importante para mim." },
      { en: "I am close to my mother.", pt: "Eu sou próximo da minha mãe." },
      { en: "My brother likes technology too.", pt: "Meu irmão também gosta de tecnologia." },
      { en: "We spend time together on weekends.", pt: "Nós passamos tempo juntos nos fins de semana." },
      { en: "My family supports my decisions.", pt: "Minha família apoia minhas decisões." },
      { en: "I visit my grandmother every month.", pt: "Eu visito minha avó todo mês." },
      { en: "My aunt cooks amazing food.", pt: "Minha tia cozinha comida maravilhosa." },
      { en: "My uncle is very funny.", pt: "Meu tio é muito engraçado." },
      { en: "Family is everything to me.", pt: "Família é tudo para mim." },
      { en: "We always eat dinner together.", pt: "Nós sempre jantamos juntos." },
      { en: "My father taught me to be honest.", pt: "Meu pai me ensinou a ser honesto." }
    ],

    patterns: [
      {
        title: "I have + number + family member",
        examples: [
          "I have one sister.",
          "I have two cousins.",
          "I have a big family.",
          "I have a small family."
        ],
        variationBank: [
          "I have three aunts.",
          "I have one brother and one sister.",
          "I have a lot of relatives.",
          "I have a close family."
        ]
      },
      {
        title: "My [family member] + verb",
        examples: [
          "My mother lives in Bahia.",
          "My father works in Salvador.",
          "My sister is younger than me.",
          "My brother likes technology."
        ],
        variationBank: [
          "My grandmother tells stories.",
          "My cousins live in São Paulo.",
          "My aunt cooks amazing food.",
          "My uncle is very funny."
        ]
      },
      {
        title: "I am close to + person",
        examples: [
          "I am close to my mother.",
          "I am close to my grandmother.",
          "I am close to my sister."
        ],
        variationBank: [
          "I am very close to my family.",
          "I am not that close to my cousins.",
          "I am closer to my mother than my father."
        ]
      }
    ],

    variations: [
      {
        base: "My mother lives in Bahia.",
        affirmative: "My mother lives in Bahia.",
        negative: "My mother doesn't live in São Paulo.",
        question: "Does your mother live in Bahia?",
        past: "My mother lived in Salvador before.",
        future: "My mother is going to visit me next month."
      },
      {
        base: "I have one sister.",
        affirmative: "I have one sister.",
        negative: "I don't have any brothers.",
        question: "Do you have any siblings?",
        past: "I had two cousins living here before.",
        future: null
      },
      {
        base: "We always eat dinner together.",
        affirmative: "We always eat dinner together.",
        negative: "We don't always eat together.",
        question: "Do you always eat dinner together?",
        past: "We always ate dinner together when I was young.",
        future: "We are going to eat dinner together tonight."
      }
    ],

    questions: [
      { q: "Do you have brothers or sisters?", sample: "I have one sister. She is younger than me." },
      { q: "How many cousins do you have?", sample: "I have two cousins. They live in São Paulo." },
      { q: "Who do you live with?", sample: "I live with my mother right now." },
      { q: "Are you close to your family?", sample: "Yes, I am very close to my family." },
      { q: "Who is the funniest person in your family?", sample: "My uncle is the funniest person in my family." },
      { q: "What does your mother do?", sample: "My mother works in a school." },
      { q: "What does your father do?", sample: "My father works in Salvador." },
      { q: "Do you visit your family often?", sample: "Yes, I visit my grandmother every month." },
      { q: "Who taught you the most important things?", sample: "My father taught me to be honest." },
      { q: "Do you have family reunions?", sample: "Yes, we have family reunions on holidays." },
      { q: "Who cooks in your family?", sample: "My aunt cooks amazing food." },
      { q: "Do you spend time with your family on weekends?", sample: "Yes, we spend time together on weekends." },
      { q: "Is your family big or small?", sample: "My family is small but very close." },
      { q: "Who is the oldest person in your family?", sample: "My grandmother is the oldest person in my family." },
      { q: "Does your family support your decisions?", sample: "Yes, my family supports all my decisions." }
    ],

    exercises: {
      translate: [
        { pt: "Minha mãe mora na Bahia.", en: "My mother lives in Bahia." },
        { pt: "Eu tenho uma irmã.", en: "I have one sister." },
        { pt: "Minha família é muito importante para mim.", en: "My family is very important to mim." },
        { pt: "Nós sempre jantamos juntos.", en: "We always eat dinner together." },
        { pt: "Eu visito minha avó todo mês.", en: "I visit my grandmother every month." },
        { pt: "Meu pai me ensinou a ser honesto.", en: "My father taught me to be honest." }
      ],
      fillBlank: [
        { sentence: "I have one ___.", options: ["sister", "car", "house", "book"], answer: "sister" },
        { sentence: "My mother ___ in Bahia.", options: ["lives", "live", "living", "lived"], answer: "lives" },
        { sentence: "We always eat dinner ___.", options: ["together", "alone", "fast", "slowly"], answer: "together" },
        { sentence: "I am close ___ my grandmother.", options: ["to", "in", "on", "at"], answer: "to" },
        { sentence: "My father ___ me to be honest.", options: ["taught", "teach", "teaches", "teaching"], answer: "taught" }
      ],
      multipleChoice: [
        { q: 'What does "relative" mean?', options: ["parente", "amigo", "vizinho", "colega"], answer: "parente" },
        { q: 'What does "sibling" mean?', options: ["irmão/irmã", "pai", "mãe", "primo"], answer: "irmão/irmã" },
        { q: 'What does "reunion" mean?', options: ["encontro", "viagem", "comida", "trabalho"], answer: "encontro" }
      ],
      rearrange: [
        { scrambled: ["lives", "mother", "My", "Bahia", "in"], answer: "My mother lives in Bahia" },
        { scrambled: ["have", "I", "sister", "one"], answer: "I have one sister" },
        { scrambled: ["family", "is", "My", "important", "very"], answer: "My family is very important" },
        { scrambled: ["dinner", "eat", "We", "together", "always"], answer: "We always eat dinner together" }
      ],
      listening: [
        { audio: "My mother lives in Bahia.", options: ["My mother lives in Bahia.", "My father lives in Bahia.", "My sister lives in Bahia."], answer: "My mother lives in Bahia." },
        { audio: "I have one sister.", options: ["I have one sister.", "I have two sisters.", "I have one brother."], answer: "I have one sister." },
        { audio: "My family is very important.", options: ["My family is very important.", "My work is very important.", "My friends are very important."], answer: "My family is very important." }
      ]
    },

    speakingSentences: [
      "I have one sister.",
      "My mother lives in Bahia.",
      "We always eat dinner together.",
      "My family is very important to me.",
      "I visit my grandmother every month."
    ],

    talkPrompts: [
      "Do you have brothers or sisters?",
      "Who do you live with?",
      "Are you close to your family?",
      "What does your mother do?",
      "Do you visit your family often?",
      "Who is the funniest person in your family?"
    ]
  },

  // ── Island 03: My Daily Routine ──────────────────────
  {
    id: "island03", number: 3, name: "My Daily Routine", emoji: "⏰",
    description: "Your daily routine, from morning to night.",
    unlockedByDefault: false,

    vocabulary: [
      { en: "to wake up", pt: "acordar", approx: "uéik ap", ipa: "/weɪk ʌp/" },
      { en: "to get up", pt: "levantar", approx: "guét ap", ipa: "/ɡet ʌp/" },
      { en: "morning", pt: "manhã", approx: "mór-ning", ipa: "/ˈmɔːrnɪŋ/" },
      { en: "afternoon", pt: "tarde", approx: "áf-ter-nún", ipa: "/ˌɑːftərˈnuːn/" },
      { en: "night", pt: "noite", approx: "náit", ipa: "/naɪt/" },
      { en: "breakfast", pt: "café da manhã", approx: "bré-fest", ipa: "/ˈbrekfəst/" },
      { en: "lunch", pt: "almoço", approx: "lónch", ipa: "/lʌntʃ/" },
      { en: "dinner", pt: "jantar", approx: "dí-ner", ipa: "/ˈdɪnər/" },
      { en: "to shower", pt: "tomar banho", approx: "shá-uer", ipa: "/ˈʃaʊər/" },
      { en: "to commute", pt: "ir de / ir para", approx: "comiúti", ipa: "/kəˈmjuːt/" },
      { en: "to arrive", pt: "chegar", approx: "u-ráiv", ipa: "/əˈraɪv/" },
      { en: "to leave", pt: "sair / ir embora", approx: "líiv", ipa: "/liːv/" },
      { en: "schedule", pt: "horário / agenda", approx: "shé-djul", ipa: "/ˈʃedjuːl/" },
      { en: "routine", pt: "rotina", approx: "ru-tí-na", ipa: "/ruːˈtiːn/" },
      { en: "always", pt: "sempre", approx: "ól-ueis", ipa: "/ˈɔːlweɪz/" },
      { en: "sometimes", pt: "às vezes", approx: "sóms-táims", ipa: "/ˈsʌmtaɪmz/" },
      { en: "never", pt: "nunca", approx: "né-ver", ipa: "/ˈnevər/" },
      { en: "usually", pt: "geralmente", approx: "iú-ju-ali", ipa: "/ˈjuːʒuəli/" },
      { en: "early", pt: "cedo", approx: "ér-li", ipa: "/ˈɜːrli/" },
      { en: "late", pt: "atrasado / tarde", approx: "léit", ipa: "/leɪt/" },
      { en: "ready", pt: "pronto", approx: "ré-di", ipa: "/ˈredi/" },
      { en: "to work", pt: "trabalhar", approx: "uórk", ipa: "/wɜːrk/" },
      { en: "to study", pt: "estudar", approx: "stá-di", ipa: "/ˈstʌdi/" },
      { en: "to sleep", pt: "dormir", approx: "slíp", ipa: "/sliːp/" },
      { en: "tired", pt: "cansado", approx: "tái-erd", ipa: "/ˈtaɪərd/" }
    ],

    coreSentences: [
      { en: "I usually wake up at 7 AM.", pt: "Eu geralmente acordo às 7 da manhã." },
      { en: "I get up and take a shower.", pt: "Eu levanto e tomo banho." },
      { en: "I have breakfast at 7:30.", pt: "Eu tomo café da manhã às 7:30." },
      { en: "I leave home at 8 AM.", pt: "Eu saio de casa às 8 da manhã." },
      { en: "I arrive at work at 9 AM.", pt: "Eu chego no trabalho às 9 da manhã." },
      { en: "I work from 9 to 6.", pt: "Eu trabalho das 9 às 6." },
      { en: "I have lunch at noon.", pt: "Eu almoço ao meio-dia." },
      { en: "I usually eat rice and beans for lunch.", pt: "Eu geralmente como arroz e feijão no almoço." },
      { en: "I get off work at 6 PM.", pt: "Eu saio do trabalho às 6 da tarde." },
      { en: "I study English at night.", pt: "Eu estudo inglês à noite." },
      { en: "I usually study for two hours.", pt: "Eu geralmente estudo por duas horas." },
      { en: "I have dinner at 8 PM.", pt: "Eu janto às 8 da noite." },
      { en: "I watch series before sleeping.", pt: "Eu assisto séries antes de dormir." },
      { en: "I usually go to bed at 11 PM.", pt: "Eu geralmente vou dormir às 11 da noite." },
      { en: "I am usually tired at night.", pt: "Eu geralmente estou cansado à noite." },
      { en: "On weekends, I wake up late.", pt: "Nos fins de semana, eu acordo tarde." },
      { en: "I never skip breakfast.", pt: "Eu nunca pulo o café da manhã." },
      { en: "Sometimes I study in the morning.", pt: "Às vezes eu estudo de manhã." },
      { en: "I always drink coffee before work.", pt: "Eu sempre tomo café antes do trabalho." },
      { en: "My routine is very busy.", pt: "Minha rotina é muito corrida." }
    ],

    patterns: [
      {
        title: "I usually/always/never + verb",
        examples: [
          "I usually wake up at 7 AM.",
          "I always drink coffee before work.",
          "I never skip breakfast.",
          "I sometimes study in the morning."
        ],
        variationBank: [
          "I usually eat rice and beans for lunch.",
          "I always take a shower in the morning.",
          "I never eat junk food.",
          "I sometimes watch series at night."
        ]
      },
      {
        title: "I + verb + at + time",
        examples: [
          "I have breakfast at 7:30.",
          "I leave home at 8 AM.",
          "I arrive at work at 9 AM.",
          "I have dinner at 8 PM."
        ],
        variationBank: [
          "I wake up at 7 AM.",
          "I go to bed at 11 PM.",
          "I get off work at 6 PM.",
          "I study at night."
        ]
      },
      {
        title: "I + verb + for + duration",
        examples: [
          "I usually study for two hours.",
          "I work for eight hours a day.",
          "I sleep for seven hours."
        ],
        variationBank: [
          "I commute for one hour.",
          "I exercise for thirty minutes.",
          "I study English for two hours."
        ]
      }
    ],

    variations: [
      {
        base: "I usually wake up at 7 AM.",
        affirmative: "I usually wake up at 7 AM.",
        negative: "I don't usually wake up early.",
        question: "Do you usually wake up at 7 AM?",
        past: "I usually woke up at 6 AM last year.",
        future: "I'm going to wake up at 6 AM tomorrow."
      },
      {
        base: "I study English at night.",
        affirmative: "I study English at night.",
        negative: "I don't study English at night.",
        question: "Do you study English at night?",
        past: "I studied English at night last week.",
        future: "I'm going to study English tonight."
      },
      {
        base: "I always drink coffee before work.",
        affirmative: "I always drink coffee before work.",
        negative: "I don't always drink coffee.",
        question: "Do you always drink coffee before work?",
        past: "I always drank coffee before work.",
        future: null
      }
    ],

    questions: [
      { q: "What time do you usually wake up?", sample: "I usually wake up at 7 AM." },
      { q: "What is the first thing you do in the morning?", sample: "The first thing I do is take a shower." },
      { q: "What do you usually have for breakfast?", sample: "I usually have coffee and bread." },
      { q: "What time do you leave home?", sample: "I leave home at 8 AM." },
      { q: "How do you get to work?", sample: "I commute by bus." },
      { q: "What time do you start work?", sample: "I start work at 9 AM." },
      { q: "What do you usually have for lunch?", sample: "I usually have rice and beans for lunch." },
      { q: "What time do you get off work?", sample: "I get off work at 6 PM." },
      { q: "What do you do at night?", sample: "I study English at night." },
      { q: "What time do you go to bed?", sample: "I usually go to bed at 11 PM." },
      { q: "Do you always eat breakfast?", sample: "Yes, I never skip breakfast." },
      { q: "Do you study on weekends?", sample: "Sometimes I study on weekends." },
      { q: "Are you a morning person or a night person?", sample: "I am more of a night person." },
      { q: "Do you exercise regularly?", sample: "Sometimes I exercise in the morning." },
      { q: "How many hours do you sleep?", sample: "I sleep for about seven hours." },
      { q: "What is the busiest part of your day?", sample: "The afternoon is the busiest part of my day." }
    ],

    exercises: {
      translate: [
        { pt: "Eu geralmente acordo às 7 da manhã.", en: "I usually wake up at 7 AM." },
        { pt: "Eu sempre tomo café antes do trabalho.", en: "I always drink coffee before work." },
        { pt: "Eu nunca pulo o café da manhã.", en: "I never skip breakfast." },
        { pt: "Eu estudo inglês à noite.", en: "I study English at night." },
        { pt: "Minha rotina é muito corrida.", en: "My routine is very busy." }
      ],
      fillBlank: [
        { sentence: "I usually ___ up at 7 AM.", options: ["wake", "work", "eat", "sleep"], answer: "wake" },
        { sentence: "I always ___ coffee before work.", options: ["drink", "eat", "make", "buy"], answer: "drink" },
        { sentence: "I never ___ breakfast.", options: ["skip", "eat", "have", "drink"], answer: "skip" },
        { sentence: "I study English ___ night.", options: ["at", "in", "on", "for"], answer: "at" },
        { sentence: "I ___ home at 8 AM.", options: ["leave", "leave", "left", "leaving"], answer: "leave" }
      ],
      multipleChoice: [
        { q: 'What does "commute" mean?', options: ["ir de um lugar para outro", "trabalhar", "estudar", "dormir"], answer: "ir de um lugar para outro" },
        { q: 'What does "routine" mean?', options: ["rotina", "reunião", "viagem", "comida"], answer: "rotina" },
        { q: 'What does "skip" mean here?', options: ["pular / não fazer", "pular corda", "correr", "andar"], answer: "pular / não fazer" }
      ],
      rearrange: [
        { scrambled: ["usually", "I", "at", "wake", "7", "up", "AM"], answer: "I usually wake up at 7 AM" },
        { scrambled: ["always", "I", "before", "drink", "coffee", "work"], answer: "I always drink coffee before work" },
        { scrambled: ["English", "I", "at", "study", "night"], answer: "I study English at night" },
        { scrambled: ["breakfast", "I", "never", "skip"], answer: "I never skip breakfast" }
      ],
      listening: [
        { audio: "I usually wake up at 7 AM.", options: ["I usually wake up at 7 AM.", "I usually wake up at 8 AM.", "I usually wake up at 6 AM."], answer: "I usually wake up at 7 AM." },
        { audio: "I always drink coffee before work.", options: ["I always drink coffee before work.", "I sometimes drink coffee before work.", "I never drink coffee before work."], answer: "I always drink coffee before work." },
        { audio: "I study English at night.", options: ["I study English at night.", "I study English in the morning.", "I study English at noon."], answer: "I study English at night." }
      ]
    },

    speakingSentences: [
      "I usually wake up at 7 AM.",
      "I always drink coffee before work.",
      "I study English at night.",
      "I never skip breakfast.",
      "My routine is very busy."
    ],

    talkPrompts: [
      "What time do you usually wake up?",
      "What do you usually have for breakfast?",
      "What time do you get off work?",
      "What do you do at night?",
      "Are you a morning person or a night person?",
      "How many hours do you sleep?"
    ]
  },

  // ── Island 04: Likes & Dislikes ──────────────────────
  {
    id: "island04", number: 4, name: "Likes & Dislikes", emoji: "💜",
    description: "Preferences, tastes, and things you don't enjoy.",
    unlockedByDefault: false,

    vocabulary: [
      { en: "to love", pt: "amar / adorar", approx: "láv", ipa: "/lʌv/" },
      { en: "to enjoy", pt: "apreciar / gostar", approx: "en-djói", ipa: "/ɪnˈdʒɔɪ/" },
      { en: "to hate", pt: "odeiar", approx: "héit", ipa: "/heɪt/" },
      { en: "to prefer", pt: "preferir", approx: "pri-fér", ipa: "/prɪˈfɜːr/" },
      { en: "to mind", pt: "importar-se", approx: "máind", ipa: "/maɪnd/" },
      { en: "boring", pt: "chato / entediante", approx: "bó-ring", ipa: "/ˈbɔːrɪŋ/" },
      { en: "exciting", pt: "empolgante", approx: "ek-sáiting", ipa: "/ɪkˈsaɪtɪŋ/" },
      { en: "relaxing", pt: "relaxante", approx: "ri-lá-king", ipa: "/rɪˈlæksɪŋ/" },
      { en: "challenging", pt: "desafiador", approx: "chá-lin-djing", ipa: "/ˈtʃælɪndʒɪŋ/" },
      { en: "amazing", pt: "incrível", approx: "u-méi-zing", ipa: "/əˈmeɪzɪŋ/" },
      { en: "terrible", pt: "terrível", approx: "té-ri-boul", ipa: "/ˈterəbl/" },
      { en: "favorite", pt: "favorito", approx: "féi-vo-rit", ipa: "/ˈfeɪvərɪt/" },
      { en: "taste", pt: "gosto", approx: "teist", ipa: "/teɪst/" },
      { en: "opinion", pt: "opinião", approx: "o-pi-nion", ipa: "/əˈpɪnjən/" },
      { en: "into", pt: "gostar muito de", approx: "ín-tu", ipa: "/ˈɪntu/" },
      { en: "fan", pt: "fã", approx: "fán", ipa: "/fæn/" },
      { en: "obsessed", pt: "obcecado", approx: "ob-sés-t", ipa: "/əbˈsest/" },
      { en: "can't stand", pt: "não suporto", approx: "cánt stand", ipa: "/kɑːnt stænd/" },
      { en: "stupid", pt: "estúpido", approx: "stiú-pid", ipa: "/ˈstjuːpɪd/" },
      { en: "pointless", pt: "sem sentido", approx: "póint-less", ipa: "/ˈpɔɪntləs/" },
      { en: "awesome", pt: "incrível / demais", approx: "ó-som", ipa: "/ˈɔːsəm/" },
      { en: "awful", pt: "horrível", approx: "ó-foul", ipa: "/ˈɔːfl/" },
      { en: "really", pt: "realmente", approx: "rí-li", ipa: "/ˈriːəli/" },
      { en: "honestly", pt: "honestamente", approx: "ó-nest-li", ipa: "/ˈɒnɪstli/" },
      { en: "although", pt: "embora", approx: "ól-dó", ipa: "/ɔːlˈðəʊ/" }
    ],

    coreSentences: [
      { en: "I love learning new things.", pt: "Eu adoro aprender coisas novas." },
      { en: "I enjoy watching suspense movies.", pt: "Eu gosto de assistir filmes de suspense." },
      { en: "I really like astronomy.", pt: "Eu realmente gosto de astronomia." },
      { en: "I am into technology.", pt: "Eu sou fã de tecnologia." },
      { en: "I am a big fan of Interstellar.", pt: "Eu sou grande fã de Interestelar." },
      { en: "I am obsessed with psychology.", pt: "Eu sou obcecado por psicologia." },
      { en: "I prefer small groups.", pt: "Eu prefiro grupos pequenos." },
      { en: "I don't like big groups.", pt: "Eu não gosto de grupos grandes." },
      { en: "I can't stand stupid movies.", pt: "Eu não suporto filmes estúpidos." },
      { en: "I think that movie is boring.", pt: "Eu acho que esse filme é chato." },
      { en: "I don't mind studying at night.", pt: "Não me importo de estudar à noite." },
      { en: "Honestly, I don't like cooking.", pt: "Honestamente, eu não gosto de cozinhar." },
      { en: "I love intelligent stories.", pt: "Eu adoro histórias inteligentes." },
      { en: "I hate waking up early.", pt: "Eu odeio acordar cedo." },
      { en: "I enjoy learning about science.", pt: "Eu gosto de aprender sobre ciência." },
      { en: "I really like music.", pt: "Eu realmente gosto de música." },
      { en: "I am not a fan of horror movies.", pt: "Eu não sou fã de filmes de terror." },
      { en: "I think astronomy is amazing.", pt: "Eu acho astronomia incrível." },
      { en: "I love watching series at night.", pt: "Eu adoro assistir séries à noite." },
      { en: "I don't like pointless conversations.", pt: "Eu não gosto de conversas sem sentido." }
    ],

    patterns: [
      {
        title: "I love / enjoy / like + verb-ing",
        examples: [
          "I love learning new things.",
          "I enjoy watching suspense movies.",
          "I like intelligent stories.",
          "I love astronomy."
        ],
        variationBank: [
          "I love listening to music.",
          "I enjoy reading about science.",
          "I like learning about psychology.",
          "I love watching Interstellar."
        ]
      },
      {
        title: "I can't stand + verb-ing / noun",
        examples: [
          "I can't stand stupid movies.",
          "I can't stand waking up early.",
          "I can't stand big groups.",
          "I can't stand boring stories."
        ],
        variationBank: [
          "I can't stand horror movies.",
          "I can't stand bad pronunciation.",
          "I can't stand pointless conversations.",
          "I can't stand waking up late."
        ]
      },
      {
        title: "I am into + noun / I am a fan of + noun",
        examples: [
          "I am into technology.",
          "I am a big fan of Interstellar.",
          "I am a fan of suspense.",
          "I am into astronomy."
        ],
        variationBank: [
          "I am into psychology.",
          "I am a fan of intelligent stories.",
          "I am really into science fiction.",
          "I am a big fan of learning."
        ]
      }
    ],

    variations: [
      {
        base: "I love learning new things.",
        affirmative: "I love learning new things.",
        negative: "I don't love studying grammar.",
        question: "Do you love learning new things?",
        past: "I loved that movie.",
        future: "I'm going to love this series."
      },
      {
        base: "I can't stand stupid movies.",
        affirmative: "I can't stand stupid movies.",
        negative: null,
        question: "What kind of movies can't you stand?",
        past: "I couldn't stand that class.",
        future: "I'm not going to stand boring meetings."
      },
      {
        base: "I prefer small groups.",
        affirmative: "I prefer small groups.",
        negative: "I don't prefer big groups.",
        question: "Do you prefer small groups or big groups?",
        past: "I preferred working alone before.",
        future: null
      }
    ],

    questions: [
      { q: "What do you love doing?", sample: "I love learning new things and watching movies." },
      { q: "What kind of movies do you enjoy?", sample: "I enjoy suspense and intelligent stories." },
      { q: "What are you really into?", sample: "I am really into technology and psychology." },
      { q: "Are you a fan of anything?", sample: "I am a big fan of Interstellar." },
      { q: "What can't you stand?", sample: "I can't stand stupid movies." },
      { q: "Do you prefer small groups or big groups?", sample: "I prefer small groups." },
      { q: "What do you think about horror movies?", sample: "I am not a fan of horror movies." },
      { q: "Do you enjoy studying?", sample: "Yes, I enjoy studying English at night." },
      { q: "What is your favorite genre of movie?", sample: "My favorite genre is suspense." },
      { q: "Do you mind studying alone?", sample: "No, I don't mind studying alone." },
      { q: "What do you honestly dislike?", sample: "Honestly, I don't like cooking." },
      { q: "What is amazing to you?", sample: "I think astronomy is amazing." },
      { q: "Do you like music?", sample: "Yes, I really like music." },
      { q: "What do you hate doing?", sample: "I hate waking up early." },
      { q: "Do you enjoy learning about science?", sample: "Yes, I enjoy learning about science." }
    ],

    exercises: {
      translate: [
        { pt: "Eu adoro aprender coisas novas.", en: "I love learning new things." },
        { pt: "Eu não suporto filmes estúpidos.", en: "I can't stand stupid movies." },
        { pt: "Eu prefiro grupos pequenos.", en: "I prefer small groups." },
        { pt: "Eu sou obcecado por psicologia.", en: "I am obsessed with psychology." },
        { pt: "Honestamente, eu não gosto de cozinhar.", en: "Honestly, I don't like cooking." }
      ],
      fillBlank: [
        { sentence: "I ___ learning new things.", options: ["love", "hate", "am", "have"], answer: "love" },
        { sentence: "I can't ___ stupid movies.", options: ["stand", "watch", "like", "enjoy"], answer: "stand" },
        { sentence: "I am really ___ technology.", options: ["into", "in", "on", "at"], answer: "into" },
        { sentence: "I ___ small groups.", options: ["prefer", "like", "hate", "love"], answer: "prefer" },
        { sentence: "I am not ___ fan of horror.", options: ["a", "the", "an", "my"], answer: "a" }
      ],
      multipleChoice: [
        { q: 'What does "can\'t stand" mean?', options: ["não suporto", "gosto muito", "não importa", "não sei"], answer: "não suporto" },
        { q: 'What does "obsessed" mean?', options: ["obcecado", "interessado", "cansado", "feliz"], answer: "obcecado" },
        { q: 'What does "pointless" mean?', options: ["sem sentido", "interessante", "divertido", "importante"], answer: "sem sentido" }
      ],
      rearrange: [
        { scrambled: ["love", "I", "learning", "new", "things"], answer: "I love learning new things" },
        { scrambled: ["stand", "can't", "I", "stupid", "movies"], answer: "I can't stand stupid movies" },
        { scrambled: ["prefer", "I", "groups", "small"], answer: "I prefer small groups" },
        { scrambled: ["into", "am", "I", "technology"], answer: "I am into technology" }
      ],
      listening: [
        { audio: "I love learning new things.", options: ["I love learning new things.", "I hate learning new things.", "I don't mind learning new things."], answer: "I love learning new things." },
        { audio: "I can't stand stupid movies.", options: ["I can't stand stupid movies.", "I love stupid movies.", "I don't mind stupid movies."], answer: "I can't stand stupid movies." },
        { audio: "I prefer small groups.", options: ["I prefer small groups.", "I prefer big groups.", "I don't prefer any groups."], answer: "I prefer small groups." }
      ]
    },

    speakingSentences: [
      "I love learning new things.",
      "I can't stand stupid movies.",
      "I prefer small groups.",
      "I am obsessed with psychology.",
      "I really like astronomy."
    ],

    talkPrompts: [
      "What do you love doing?",
      "What kind of movies do you enjoy?",
      "What can't you stand?",
      "Are you into technology?",
      "Do you prefer small groups or big groups?",
      "What do you honestly dislike?"
    ]
  },

  // ── Island 05: My Home ──────────────────────────────
  {
    id: "island05", number: 5, name: "My Home", emoji: "🏠",
    description: "Your house, room, and belongings.",
    unlockedByDefault: false,

    vocabulary: [
      { en: "apartment", pt: "apartamento", approx: "a-part-ment", ipa: "/əˈpɑːrtmənt/" },
      { en: "house", pt: "casa", approx: "háus", ipa: "/haʊs/" },
      { en: "room", pt: "quarto", approx: "rúm", ipa: "/ruːm/" },
      { en: "kitchen", pt: "cozinha", approx: "quí-tchen", ipa: "/ˈkɪtʃɪn/" },
      { en: "bathroom", pt: "banheiro", approx: "báz-rúm", ipa: "/ˈbɑːθruːm/" },
      { en: "bedroom", pt: "quarto", approx: "béd-rúm", ipa: "/ˈbedruːm/" },
      { en: "living room", pt: "sala", approx: "lí-ving rúm", ipa: "/ˈlɪvɪŋ ruːm/" },
      { en: "balcony", pt: "varanda", approx: "bál-co-ni", ipa: "/ˈbælkəni/" },
      { en: "furniture", pt: "móveis", approx: "fér-ni-ter", ipa: "/ˈfɜːrnɪtʃər/" },
      { en: "bed", pt: "cama", approx: "béd", ipa: "/bed/" },
      { en: "sofa", pt: "sofá", approx: "só-fa", ipa: "/ˈsoʊfə/" },
      { en: "table", pt: "mesa", approx: "téi-boul", ipa: "/ˈteɪbl/" },
      { en: "chair", pt: "cadeira", approx: "tchéir", ipa: "/tʃeər/" },
      { en: "window", pt: "janela", approx: "uín-dou", ipa: "/ˈwɪndoʊ/" },
      { en: "door", pt: "porta", approx: "dór", ipa: "/dɔːr/" },
      { en: "floor", pt: "chão", approx: "flór", ipa: "/flɔːr/" },
      { en: "wall", pt: "parede", approx: "uól", ipa: "/wɔːl/" },
      { en: "neighborhood", pt: "bairro", approx: "néi-ber-hud", ipa: "/ˈneɪbərhʊd/" },
      { en: "building", pt: "prédio", approx: "bíl-ding", ipa: "/ˈbɪldɪŋ/" },
      { en: "elevator", pt: "elevador", approx: "é-le-vei-ter", ipa: "/ˈelɪveɪtər/" },
      { en: "rent", pt: "aluguel", approx: "rént", ipa: "/rent/" },
      { en: "comfortable", pt: "confortável", approx: "cóm-fer-ta-boul", ipa: "/ˈkʌmftəbl/" },
      { en: "spacious", pt: "amplo / espaçoso", approx: "spéi-xos", ipa: "/ˈspeɪʃəs/" },
      { en: "quiet", pt: "silencioso", approx: "cuá-et", ipa: "/ˈkwaɪət/" },
      { en: "clean", pt: "limpo", approx: "clín", ipa: "/kliːn/" }
    ],

    coreSentences: [
      { en: "I live in an apartment.", pt: "Eu moro em um apartamento." },
      { en: "My apartment has two bedrooms.", pt: "Meu apartamento tem dois quartos." },
      { en: "I have a small kitchen.", pt: "Eu tenho uma cozinha pequena." },
      { en: "My bedroom is very comfortable.", pt: "Meu quarto é muito confortável." },
      { en: "I have a balcony with a nice view.", pt: "Eu tenho uma varanda com uma vista legal." },
      { en: "The living room is spacious.", pt: "A sala é ampla." },
      { en: "My apartment is in a quiet neighborhood.", pt: "Meu apartamento fica num bairro tranquilo." },
      { en: "The building has an elevator.", pt: "O prédio tem elevador." },
      { en: "I pay rent every month.", pt: "Eu pago aluguel todo mês." },
      { en: "I need to buy more furniture.", pt: "Eu preciso comprar mais móveis." },
      { en: "My room has a big window.", pt: "Meu quarto tem uma janela grande." },
      { en: "I like keeping my home clean.", pt: "Eu gosto de manter minha casa limpa." },
      { en: "There is a table in the kitchen.", pt: "Tem uma mesa na cozinha." },
      { en: "I have a sofa in the living room.", pt: "Eu tenho um sofá na sala." },
      { en: "The walls are white.", pt: "As paredes são brancas." },
      { en: "I live on the third floor.", pt: "Eu moro no terceiro andar." },
      { en: "My neighborhood is very safe.", pt: "Meu bairro é muito seguro." },
      { en: "I love my apartment.", pt: "Eu amo meu apartamento." },
      { en: "There is a bed and a desk in my room.", pt: "Tem uma cama e uma mesa no meu quarto." },
      { en: "My home is very cozy.", pt: "Minha casa é muito aconchegante." }
    ],

    patterns: [
      {
        title: "There is / There are + noun",
        examples: [
          "There is a table in the kitchen.",
          "There is a bed in my room.",
          "There are two bedrooms.",
          "There is a balcony."
        ],
        variationBank: [
          "There is a sofa in the living room.",
          "There are big windows.",
          "There is an elevator in the building.",
          "There are three chairs."
        ]
      },
      {
        title: "I have + adjective + noun",
        examples: [
          "I have a small kitchen.",
          "I have a big window.",
          "I have a comfortable bed.",
          "I have a nice view."
        ],
        variationBank: [
          "I have a spacious living room.",
          "I have a clean bathroom.",
          "I have a quiet neighborhood.",
          "I have a cozy apartment."
        ]
      },
      {
        title: "My + noun + is + adjective",
        examples: [
          "My bedroom is very comfortable.",
          "My apartment is in a quiet neighborhood.",
          "My neighborhood is very safe.",
          "My home is very cozy."
        ],
        variationBank: [
          "My kitchen is small but clean.",
          "My living room is spacious.",
          "My balcony has a nice view.",
          "My apartment is on the third floor."
        ]
      }
    ],

    variations: [
      {
        base: "I live in an apartment.",
        affirmative: "I live in an apartment.",
        negative: "I don't live in a house.",
        question: "Do you live in an apartment?",
        past: "I lived in a house before.",
        future: "I'm going to live in a bigger apartment."
      },
      {
        base: "My apartment has two bedrooms.",
        affirmative: "My apartment has two bedrooms.",
        negative: "My apartment doesn't have a balcony.",
        question: "Does your apartment have a balcony?",
        past: "My apartment had one bedroom before.",
        future: null
      },
      {
        base: "I pay rent every month.",
        affirmative: "I pay rent every month.",
        negative: "I don't pay rent.",
        question: "Do you pay rent?",
        past: "I paid rent last month.",
        future: "I'm going to pay rent next week."
      }
    ],

    questions: [
      { q: "Do you live in an apartment or a house?", sample: "I live in an apartment." },
      { q: "How many bedrooms does your apartment have?", sample: "My apartment has two bedrooms." },
      { q: "Is your neighborhood quiet?", sample: "Yes, my neighborhood is very quiet and safe." },
      { q: "What is your favorite room?", sample: "My bedroom is my favorite room." },
      { q: "Do you have a balcony?", sample: "Yes, I have a balcony with a nice view." },
      { q: "What floor do you live on?", sample: "I live on the third floor." },
      { q: "Do you have an elevator in your building?", sample: "Yes, the building has an elevator." },
      { q: "Do you pay rent?", sample: "Yes, I pay rent every month." },
      { q: "Is your home comfortable?", sample: "Yes, my home is very cozy and comfortable." },
      { q: "What furniture do you have?", sample: "I have a bed, a sofa, a table, and chairs." },
      { q: "Do you like keeping your home clean?", sample: "Yes, I like keeping my home clean." },
      { q: "What would you like to change about your home?", sample: "I would like to have more space." },
      { q: "Do you live alone?", sample: "No, I live with my family." },
      { q: "Is your kitchen big or small?", sample: "My kitchen is small but functional." },
      { q: "What color are the walls?", sample: "The walls are white." }
    ],

    exercises: {
      translate: [
        { pt: "Eu moro em um apartamento.", en: "I live in an apartment." },
        { pt: "Meu quarto é muito confortável.", en: "My bedroom is very comfortable." },
        { pt: "Tem uma mesa na cozinha.", en: "There is a table in the kitchen." },
        { pt: "Eu pago aluguel todo mês.", en: "I pay rent every month." },
        { pt: "Minha casa é muito aconchegante.", en: "My home is very cozy." },
        { pt: "Meu bairro é muito seguro.", en: "My neighborhood is very safe." }
      ],
      fillBlank: [
        { sentence: "I live ___ an apartment.", options: ["in", "on", "at", "to"], answer: "in" },
        { sentence: "There ___ a table in the kitchen.", options: ["is", "are", "has", "have"], answer: "is" },
        { sentence: "My bedroom is very ___.", options: ["comfortable", "furniture", "kitchen", "balcony"], answer: "comfortable" },
        { sentence: "I ___ rent every month.", options: ["pay", "pay", "paying", "paid"], answer: "pay" },
        { sentence: "The building has an ___.", options: ["elevator", "apartment", "bedroom", "kitchen"], answer: "elevator" }
      ],
      multipleChoice: [
        { q: 'What does "spacious" mean?', options: ["amplo / espaçoso", "pequeno", "escuro", "barato"], answer: "amplo / espaçoso" },
        { q: 'What does "neighborhood" mean?', options: ["bairro", "apartamento", "cidade", "rua"], answer: "bairro" },
        { q: 'What does "furniture" mean?', options: ["móveis", "comida", "roupas", "livros"], answer: "móveis" }
      ],
      rearrange: [
        { scrambled: ["in", "live", "I", "apartment", "an"], answer: "I live in an apartment" },
        { scrambled: ["a", "There", "table", "is", "kitchen", "in", "the"], answer: "There is a table in the kitchen" },
        { scrambled: ["bedroom", "My", "comfortable", "is", "very"], answer: "My bedroom is very comfortable" },
        { scrambled: ["every", "I", "rent", "month", "pay"], answer: "I pay rent every month" }
      ],
      listening: [
        { audio: "I live in an apartment.", options: ["I live in an apartment.", "I live in a house.", "I live in a hotel."], answer: "I live in an apartment." },
        { audio: "There is a table in the kitchen.", options: ["There is a table in the kitchen.", "There is a bed in the kitchen.", "There is a sofa in the kitchen."], answer: "There is a table in the kitchen." },
        { audio: "My neighborhood is very safe.", options: ["My neighborhood is very safe.", "My neighborhood is very noisy.", "My neighborhood is very big."], answer: "My neighborhood is very safe." }
      ]
    },

    speakingSentences: [
      "I live in an apartment.",
      "My bedroom is very comfortable.",
      "There is a table in the kitchen.",
      "My neighborhood is very safe.",
      "I love my apartment."
    ],

    talkPrompts: [
      "Do you live in an apartment or a house?",
      "Is your neighborhood quiet?",
      "What is your favorite room?",
      "Do you have a balcony?",
      "What furniture do you have?",
      "What would you like to change about your home?"
    ]
  },

  // ── Island 06: Food & Drinks ─────────────────────────
  {
    id: "island06", number: 6, name: "Food & Drinks", emoji: "🍽️",
    description: "Food, drinks and eating habits.",
    unlockedByDefault: false,

    vocabulary: [
      { en: "meal", pt: "refeição", approx: "míl", ipa: "/miːl/" },
      { en: "snack", pt: "lanchinho", approx: "snék", ipa: "/snæk/" },
      { en: "rice", pt: "arroz", approx: "ráis", ipa: "/raɪs/" },
      { en: "beans", pt: "feijão", approx: "bíns", ipa: "/biːnz/" },
      { en: "meat", pt: "carne", approx: "mít", ipa: "/miːt/" },
      { en: "chicken", pt: "frango", approx: "chí-ken", ipa: "/ˈtʃɪkɪn/" },
      { en: "fish", pt: "peixe", approx: "físh", ipa: "/fɪʃ/" },
      { en: "salad", pt: "salada", approx: "sá-led", ipa: "/səˈlɑːd/" },
      { en: "fruit", pt: "fruta", approx: "frút", ipa: "/fruːt/" },
      { en: "bread", pt: "pão", approx: "bréd", ipa: "/bred/" },
      { en: "coffee", pt: "café", approx: "có-fi", ipa: "/ˈkɒfi/" },
      { en: "water", pt: "água", approx: "ó-ter", ipa: "/ˈwɔːtər/" },
      { en: "juice", pt: "suco", approx: "djúss", ipa: "/dʒuːs/" },
      { en: "milk", pt: "leite", approx: "mílk", ipa: "/mɪlk/" },
      { en: "sweet", pt: "doce", approx: "suít", ipa: "/swiːt/" },
      { en: "salty", pt: "salgado", approx: "sól-ti", ipa: "/ˈsɔːlti/" },
      { en: "spicy", pt: "apimentado", approx: "spáis-si", ipa: "/ˈspaɪsi/" },
      { en: "hungry", pt: "com fome", approx: "hún-gri", ipa: "/ˈhʌŋɡri/" },
      { en: "thirsty", pt: "com sede", approx: "thérs-ti", ipa: "/ˈθɜːrsti/" },
      { en: "to cook", pt: "cozinhar", approx: "cúc", ipa: "/kʊk/" },
      { en: "to order", pt: "pedir", approx: "ór-der", ipa: "/ˈɔːrdər/" },
      { en: "restaurant", pt: "restaurante", approx: "rés-tu-rant", ipa: "/ˈrestərɒnt/" },
      { en: "breakfast", pt: "café da manhã", approx: "bré-fest", ipa: "/ˈbrekfəst/" },
      { en: "lunch", pt: "almoço", approx: "lónch", ipa: "/lʌntʃ/" },
      { en: "dinner", pt: "jantar", approx: "dí-ner", ipa: "/ˈdɪnər/" }
    ],

    coreSentences: [
      { en: "I usually have rice and beans for lunch.", pt: "Eu geralmente como arroz e feijão no almoço." },
      { en: "I love eating chicken.", pt: "Eu adoro comer frango." },
      { en: "I am not a big fan of fish.", pt: "Eu não sou muito fã de peixe." },
      { en: "I usually have coffee in the morning.", pt: "Eu geralmente tomo café de manhã." },
      { en: "I drink a lot of water.", pt: "Eu bebo muita água." },
      { en: "I like sweet food.", pt: "Eu gosto de comida doce." },
      { en: "I don't like very salty food.", pt: "Eu não gosto de comida muito salgada." },
      { en: "I can't eat very spicy food.", pt: "Eu não consigo comer comida muito apimentada." },
      { en: "I am hungry right now.", pt: "Eu estou com fome agora." },
      { en: "I am thirsty.", pt: "Eu estou com sede." },
      { en: "I cook dinner three times a week.", pt: "Eu cozinho o jantar três vezes por semana." },
      { en: "I usually order food online.", pt: "Eu geralmente peço comida online." },
      { en: "I like trying new restaurants.", pt: "Eu gosto de experimentar novos restaurantes." },
      { en: "My favorite food is rice with beans.", pt: "Minha comida favorita é arroz com feijão." },
      { en: "I usually have a snack at 4 PM.", pt: "Eu geralmente como um lanche às 4 da tarde." },
      { en: "I like eating fruit for breakfast.", pt: "Eu gosto de comer fruta no café da manhã." },
      { en: "I don't eat meat every day.", pt: "Eu não como carne todo dia." },
      { en: "I love Brazilian food.", pt: "Eu adoro comida brasileira." },
      { en: "I usually eat salad for lunch.", pt: "Eu geralmente como salada no almoço." },
      { en: "I prefer homemade food.", pt: "Eu prefiro comida caseira." }
    ],

    patterns: [
      {
        title: "I usually + verb + for + meal",
        examples: [
          "I usually have rice and beans for lunch.",
          "I usually have coffee in the morning.",
          "I usually eat salad for dinner.",
          "I usually have a snack at 4 PM."
        ],
        variationBank: [
          "I usually eat fruit for breakfast.",
          "I usually cook dinner at night.",
          "I usually order lunch at work.",
          "I usually have juice for breakfast."
        ]
      },
      {
        title: "I like / don't like + noun",
        examples: [
          "I like sweet food.",
          "I don't like very salty food.",
          "I like trying new restaurants.",
          "I don't eat meat every day."
        ],
        variationBank: [
          "I like homemade food.",
          "I don't like spicy food.",
          "I like eating chicken.",
          "I don't like fish."
        ]
      },
      {
        title: "I am + hungry / thirsty",
        examples: [
          "I am hungry right now.",
          "I am thirsty.",
          "I am not hungry yet.",
          "I am so hungry."
        ],
        variationBank: [
          "I am very thirsty.",
          "I am starving.",
          "I am not thirsty.",
          "I am a little hungry."
        ]
      }
    ],

    variations: [
      {
        base: "I usually have rice and beans for lunch.",
        affirmative: "I usually have rice and beans for lunch.",
        negative: "I don't usually have rice for dinner.",
        question: "Do you usually have rice and beans for lunch?",
        past: "I usually had rice and beans for lunch.",
        future: "I'm going to have rice and beans for lunch."
      },
      {
        base: "I cook dinner three times a week.",
        affirmative: "I cook dinner three times a week.",
        negative: "I don't cook very often.",
        question: "How often do you cook?",
        past: "I cooked dinner every day before.",
        future: "I'm going to cook dinner tonight."
      },
      {
        base: "I am hungry right now.",
        affirmative: "I am hungry right now.",
        negative: "I am not hungry.",
        question: "Are you hungry?",
        past: "I was hungry this morning.",
        future: "I'm going to be hungry later."
      }
    ],

    questions: [
      { q: "What do you usually have for breakfast?", sample: "I usually have coffee and bread." },
      { q: "What do you usually have for lunch?", sample: "I usually have rice and beans for lunch." },
      { q: "Do you like cooking?", sample: "Yes, I like cooking dinner." },
      { q: "How often do you cook?", sample: "I cook three times a week." },
      { q: "Do you prefer homemade food or restaurant food?", sample: "I prefer homemade food." },
      { q: "Do you like spicy food?", sample: "No, I can't eat very spicy food." },
      { q: "Do you eat meat?", sample: "Yes, but not every day." },
      { q: "What is your favorite food?", sample: "My favorite food is rice with beans." },
      { q: "Do you like sweet food?", sample: "Yes, I like sweet food." },
      { q: "Are you a good cook?", sample: "I am okay. I can cook basic things." },
      { q: "Do you usually eat at a restaurant?", sample: "No, I usually eat at home." },
      { q: "Do you drink coffee?", sample: "Yes, I usually have coffee in the morning." },
      { q: "How much water do you drink?", sample: "I drink a lot of water every day." },
      { q: "What kind of food do you want to try?", sample: "I want to try Japanese food." },
      { q: "Do you prefer sweet or salty?", sample: "I prefer sweet food." }
    ],

    exercises: {
      translate: [
        { pt: "Eu geralmente como arroz e feijão no almoço.", en: "I usually have rice and beans for lunch." },
        { pt: "Eu adoro comer frango.", en: "I love eating chicken." },
        { pt: "Eu estou com fome agora.", en: "I am hungry right now." },
        { pt: "Eu prefiro comida caseira.", en: "I prefer homemade food." },
        { pt: "Eu não consigo comer comida muito apimentada.", en: "I can't eat very spicy food." },
        { pt: "Eu bebo muita água.", en: "I drink a lot of water." }
      ],
      fillBlank: [
        { sentence: "I usually have rice ___ beans for lunch.", options: ["and", "or", "but", "with"], answer: "and" },
        { sentence: "I ___ hungry right now.", options: ["am", "is", "are", "was"], answer: "am" },
        { sentence: "I like ___ food.", options: ["sweet", "salty", "spicy", "all"], answer: "sweet" },
        { sentence: "I ___ dinner three times a week.", options: ["cook", "eat", "make", "drink"], answer: "cook" },
        { sentence: "I prefer ___ food.", options: ["homemade", "frozen", "fast", "raw"], answer: "homemade" }
      ],
      multipleChoice: [
        { q: 'What does "thirsty" mean?', options: ["com sede", "com fome", "cansado", "feliz"], answer: "com sede" },
        { q: 'What does "spicy" mean?', options: ["apimentado", "doce", "salgado", "frio"], answer: "apimentado" },
        { q: 'What does "homemade" mean?', options: ["caseiro", "de restaurante", "congelado", "importado"], answer: "caseiro" }
      ],
      rearrange: [
        { scrambled: ["have", "I", "rice", "usually", "beans", "and"], answer: "I usually have rice and beans" },
        { scrambled: ["hungry", "am", "I", "right", "now"], answer: "I am hungry right now" },
        { scrambled: ["like", "I", "eating", "chicken"], answer: "I like eating chicken" },
        { scrambled: ["cook", "I", "three", "week", "times", "a"], answer: "I cook three times a week" }
      ],
      listening: [
        { audio: "I usually have rice and beans for lunch.", options: ["I usually have rice and beans for lunch.", "I usually have pasta for lunch.", "I usually have salad for lunch."], answer: "I usually have rice and beans for lunch." },
        { audio: "I am hungry right now.", options: ["I am hungry right now.", "I am thirsty right now.", "I am tired right now."], answer: "I am hungry right now." },
        { audio: "I prefer homemade food.", options: ["I prefer homemade food.", "I prefer restaurant food.", "I prefer fast food."], answer: "I prefer homemade food." }
      ]
    },

    speakingSentences: [
      "I usually have rice and beans for lunch.",
      "I love eating chicken.",
      "I am hungry right now.",
      "I prefer homemade food.",
      "I drink a lot of water."
    ],

    talkPrompts: [
      "What do you usually have for lunch?",
      "Do you like cooking?",
      "Do you prefer homemade food or restaurant food?",
      "Do you like spicy food?",
      "What is your favorite food?",
      "Do you prefer sweet or salty?"
    ]
  },

  // ── Island 07: My Work & Studies ─────────────────────
  {
    id: "island07", number: 7, name: "My Work & Studies", emoji: "💼",
    description: "Talk about your job, studies, and professional life.",
    unlockedByDefault: false,

    vocabulary: [
      { en: "to work", pt: "trabalhar", approx: "uórk", ipa: "/wɜːrk/" },
      { en: "office", pt: "escritório", approx: "ó-fis", ipa: "/ˈɒfɪs/" },
      { en: "meeting", pt: "reunião", approx: "mí-ting", ipa: "/ˈmiːtɪŋ/" },
      { en: "project", pt: "projeto", approx: "pró-djet", ipa: "/ˈprɒdʒekt/" },
      { en: "deadline", pt: "prazo", approx: "déd-láin", ipa: "/ˈdedlaɪn/" },
      { en: "colleague", pt: "colega", approx: "có-lig", ipa: "/ˈkɒliːɡ/" },
      { en: "boss", pt: "chefe", approx: "bóss", ipa: "/bɒs/" },
      { en: "manager", pt: "gerente", approx: "má-ni-djer", ipa: "/ˈmænɪdʒər/" },
      { en: "documentation", pt: "documentação", approx: "doc-iu-men-téi-xon", ipa: "/ˌdɒkjumenˈteɪʃn/" },
      { en: "quality", pt: "qualidade", approx: "cuó-li-ti", ipa: "/ˈkwɒləti/" },
      { en: "system", pt: "sistema", approx: "sís-tem", ipa: "/ˈsɪstəm/" },
      { en: "database", pt: "banco de dados", approx: "déi-ta-béiss", ipa: "/ˈdeɪtəbeɪs/" },
      { en: "analysis", pt: "análise", approx: "u-ná-li-sis", ipa: "/əˈnæləsɪs/" },
      { en: "report", pt: "relatório", approx: "ri-pórt", ipa: "/rɪˈpɔːrt/" },
      { en: "task", pt: "tarefa", approx: "tásq", ipa: "/tɑːsk/" },
      { en: "certificate", pt: "certificado", approx: "ser-ti-fi-cát", ipa: "/sərˈtɪfɪkət/" },
      { en: "course", pt: "curso", approx: "córs", ipa: "/kɔːrs/" },
      { en: "university", pt: "universidade", approx: "iu-ni-ver-si-dá-di", ipa: "/ˌjuːnɪˈvɜːrsəti/" },
      { en: "semester", pt: "semestre", approx: "si-més-ter", ipa: "/sɪˈmestər/" },
      { en: "assignment", pt: "trabalho / atividade", approx: "u-sáin-ment", ipa: "/əˈsaɪnmənt/" },
      { en: "career", pt: "carreira", approx: "ká-rír", ipa: "/kəˈrɪər/" },
      { en: "professional", pt: "profissional", approx: "pro-fe-xo-nal", ipa: "/prəˈfeʃənl/" },
      { en: "experience", pt: "experiência", approx: "eks-pí-ri-ens", ipa: "/ɪkˈspɪəriəns/" },
      { en: "to apply", pt: "candidatar-se / aplicar", approx: "u-plái", ipa: "/əˈplaɪ/" },
      { en: "to interview", pt: "entrevistar", approx: "ín-ter-viu", ipa: "/ˈɪntərvjuː/" }
    ],

    coreSentences: [
      { en: "I work with quality and documentation.", pt: "Eu trabalho com qualidade e documentação." },
      { en: "I studied Systems Analysis and Development.", pt: "Eu estudei Análise e Desenvolvimento de Sistemas." },
      { en: "I work in an office.", pt: "Eu trabalho em um escritório." },
      { en: "I have a lot of meetings during the week.", pt: "Eu tenho muitas reuniões durante a semana." },
      { en: "My boss is very demanding.", pt: "Meu chefe é muito exigente." },
      { en: "I work with databases and systems.", pt: "Eu trabalho com bancos de dados e sistemas." },
      { en: "I need to finish this report by Friday.", pt: "Eu preciso terminar este relatório até sexta." },
      { en: "I have a big project this month.", pt: "Eu tenho um projeto grande este mês." },
      { en: "I am studying English to improve my career.", pt: "Eu estou estudando inglês para melhorar minha carreira." },
      { en: "I got a certificate in quality management.", pt: "Eu consegui um certificado em gestão da qualidade." },
      { en: "I studied at a university in Bahia.", pt: "Eu estudei em uma universidade na Bahia." },
      { en: "I am a professional in quality management.", pt: "Eu sou profissional em gestão da qualidade." },
      { en: "I want to work with technology.", pt: "Eu quero trabalhar com tecnologia." },
      { en: "I have experience with documentation.", pt: "Eu tenho experiência com documentação." },
      { en: "I applied for a new job last week.", pt: "Eu me candidatei a um novo emprego na semana passada." },
      { en: "I had an interview yesterday.", pt: "Eu tive uma entrevista ontem." },
      { en: "I like my job, but I want more challenges.", pt: "Eu gosto do meu trabalho, mas quero mais desafios." },
      { en: "My colleagues are very nice.", pt: "Meus colegas são muito legais." },
      { en: "I usually work from 9 to 6.", pt: "Eu geralmente trabalho das 9 às 6." },
      { en: "I am taking a course in data analysis.", pt: "Estou fazendo um curso de análise de dados." }
    ],

    patterns: [
      {
        title: "I work with + topic / tool",
        examples: [
          "I work with quality and documentation.",
          "I work with databases and systems.",
          "I work with reports and analysis.",
          "I work with technology."
        ],
        variationBank: [
          "I work with projects and deadlines.",
          "I work with colleagues in São Paulo.",
          "I work with Excel and Word.",
          "I work with quality management."
        ]
      },
      {
        title: "I studied + subject",
        examples: [
          "I studied Systems Analysis and Development.",
          "I studied at a university in Bahia.",
          "I studied quality management.",
          "I studied English."
        ],
        variationBank: [
          "I studied computer science.",
          "I studied at night.",
          "I studied for five years.",
          "I studied with great professors."
        ]
      },
      {
        title: "I want to + verb (career goals)",
        examples: [
          "I want to work with technology.",
          "I want to improve my career.",
          "I want to learn more about databases.",
          "I want to get a better job."
        ],
        variationBank: [
          "I want to study more.",
          "I want to work from home.",
          "I want to be a manager.",
          "I want to learn English for work."
        ]
      }
    ],

    variations: [
      {
        base: "I work with quality and documentation.",
        affirmative: "I work with quality and documentation.",
        negative: "I don't work with sales.",
        question: "What do you work with?",
        past: "I worked with IT support before.",
        future: "I'm going to work with technology soon."
      },
      {
        base: "I studied Systems Analysis and Development.",
        affirmative: "I studied Systems Analysis and Development.",
        negative: "I didn't study business.",
        question: "What did you study?",
        past: "I studied at a university in Bahia.",
        future: null
      },
      {
        base: "I am taking a course in data analysis.",
        affirmative: "I am taking a course in data analysis.",
        negative: "I am not taking any courses right now.",
        question: "Are you taking any courses?",
        past: "I took a course in quality last year.",
        future: "I'm going to take a course in Python."
      }
    ],

    questions: [
      { q: "What do you do for work?", sample: "I work with quality and documentation." },
      { q: "What did you study?", sample: "I studied Systems Analysis and Development." },
      { q: "Where did you study?", sample: "I studied at a university in Bahia." },
      { q: "Do you like your job?", sample: "Yes, but I want more challenges." },
      { q: "Who is your boss?", sample: "My boss is very demanding but fair." },
      { q: "Do you have a lot of meetings?", sample: "Yes, I have meetings during the week." },
      { q: "Do you work with technology?", sample: "Yes, I work with databases and systems." },
      { q: "Are you taking any courses?", sample: "Yes, I am taking a course in data analysis." },
      { q: "Do you have experience with documentation?", sample: "Yes, I have a lot of experience." },
      { q: "What is your biggest project right now?", sample: "I have a quality management project." },
      { q: "Do you want to change jobs?", sample: "I want to work with technology." },
      { q: "What certificate do you have?", sample: "I have a certificate in quality management." },
      { q: "Did you have an interview recently?", sample: "Yes, I had an interview last week." },
      { q: "Do you work from home?", sample: "No, I usually work in the office." },
      { q: "What time do you start work?", sample: "I usually start work at 9 AM." }
    ],

    exercises: {
      translate: [
        { pt: "Eu trabalho com qualidade e documentação.", en: "I work with quality and documentation." },
        { pt: "Eu estudei Análise e Desenvolvimento de Sistemas.", en: "I studied Systems Analysis and Development." },
        { pt: "Eu quero trabalhar com tecnologia.", en: "I want to work with technology." },
        { pt: "Estou fazendo um curso de análise de dados.", en: "I am taking a course in data analysis." },
        { pt: "Eu tive uma entrevista ontem.", en: "I had an interview yesterday." },
        { pt: "Meus colegas são muito legais.", en: "My colleagues are very nice." }
      ],
      fillBlank: [
        { sentence: "I work ___ quality and documentation.", options: ["with", "in", "on", "at"], answer: "with" },
        { sentence: "I studied ___ a university.", options: ["at", "in", "on", "to"], answer: "at" },
        { sentence: "I want ___ work with technology.", options: ["to", "in", "on", "for"], answer: "to" },
        { sentence: "I am ___ a course in data analysis.", options: ["taking", "making", "doing", "having"], answer: "taking" },
        { sentence: "I ___ a certificate in quality.", options: ["have", "has", "having", "had"], answer: "have" }
      ],
      multipleChoice: [
        { q: 'What does "deadline" mean?', options: ["prazo", "projeto", "reunião", "tarefa"], answer: "prazo" },
        { q: 'What does "colleague" mean?', options: ["colega", "chefe", "gerente", "cliente"], answer: "colega" },
        { q: 'What does "documentation" mean?', options: ["documentação", "projeto", "reunião", "sistema"], answer: "documentação" }
      ],
      rearrange: [
        { scrambled: ["with", "work", "quality", "I", "documentation", "and"], answer: "I work with quality and documentation" },
        { scrambled: ["studied", "I", "Systems", "Analysis", "and", "Development"], answer: "I studied Systems Analysis and Development" },
        { scrambled: ["want", "I", "to", "work", "technology", "with"], answer: "I want to work with technology" },
        { scrambled: ["taking", "am", "I", "a", "course", "data", "in", "analysis"], answer: "I am taking a course in data analysis" }
      ],
      listening: [
        { audio: "I work with quality and documentation.", options: ["I work with quality and documentation.", "I work with sales and marketing.", "I work with design and art."], answer: "I work with quality and documentation." },
        { audio: "I studied Systems Analysis and Development.", options: ["I studied Systems Analysis and Development.", "I studied Business Administration.", "I studied Psychology."], answer: "I studied Systems Analysis and Development." },
        { audio: "I want to work with technology.", options: ["I want to work with technology.", "I want to work with food.", "I want to work with animals."], answer: "I want to work with technology." }
      ]
    },

    speakingSentences: [
      "I work with quality and documentation.",
      "I studied Systems Analysis and Development.",
      "I want to work with technology.",
      "I am taking a course in data analysis.",
      "My colleagues are very nice."
    ],

    talkPrompts: [
      "What do you do for work?",
      "What did you study?",
      "Do you like your job?",
      "Are you taking any courses?",
      "What is your biggest project right now?",
      "Do you want to change jobs?"
    ]
  },

  // ── Island 08: My Past & Experiences ─────────────────
  {
    id: "island08", number: 8, name: "My Past & Experiences", emoji: "🕰️",
    description: "Talk about things that happened in your past.",
    unlockedByDefault: false,

    vocabulary: [
      { en: "experience", pt: "experiência", approx: "eks-pí-ri-ens", ipa: "/ɪkˈspɪəriəns/" },
      { en: "memory", pt: "memória", approx: "má-mó-ri", ipa: "/ˈmeməri/" },
      { en: "childhood", pt: "infância", approx: "tcháild-hud", ipa: "/ˈtʃaɪldhʊd/" },
      { en: "to remember", pt: "lembrar", approx: "ri-mém-ber", ipa: "/rɪˈmembər/" },
      { en: "to forget", pt: "esquecer", approx: "for-guét", ipa: "/fərˈɡet/" },
      { en: "before", pt: "antes", approx: "bi-fór", ipa: "/bɪˈfɔːr/" },
      { en: "ago", pt: "atrás", approx: "u-gó", ipa: "/əˈɡəʊ/" },
      { en: "already", pt: "já", approx: "ól-re-di", ipa: "/ɔːlˈredi/" },
      { en: "yet", pt: "ainda", approx: "iét", ipa: "/jet/" },
      { en: "moment", pt: "momento", approx: "mó-ment", ipa: "/ˈməʊmənt/" },
      { en: "important", pt: "importante", approx: "im-por-tant", ipa: "/ɪmˈpɔːrtənt/" },
      { en: "special", pt: "especial", approx: "spe-xo", ipa: "/speˈʃəl/" },
      { en: "difficult", pt: "difícil", approx: "dí-fi-cil", ipa: "/ˈdɪfɪkl/" },
      { en: "decision", pt: "decisão", approx: "di-sí-xon", ipa: "/dɪˈsɪʒn/" },
      { en: "to change", pt: "mudar", approx: "tchéindj", ipa: "/tʃeɪndʒ/" },
      { en: "to grow", pt: "crescer", approx: "gró", ipa: "/ɡrəʊ/" },
      { en: "to discover", pt: "descobrir", approx: "dis-cu-vér", ipa: "/dɪsˈkʌvər/" },
      { en: "journey", pt: "jornada", approx: "jór-ney", ipa: "/ˈdʒɜːrni/" },
      { en: "challenge", pt: "desafio", approx: "chá-linj", ipa: "/ˈtʃælɪndʒ/" },
      { en: "to overcome", pt: "superar", approx: "ó-ver-cam", ipa: "/ˌəʊvərˈkʌm/" },
      { en: "milestone", pt: "marco", approx: "mái-l-stóun", ipa: "/ˈmaɪlstəʊn/" },
      { en: "proud", pt: "orgulhoso", approx: "práud", ipa: "/praʊd/" },
      { en: "regret", pt: "arrependimento", approx: "ri-guét", ipa: "/rɪˈɡret/" },
      { en: "mistake", pt: "erro", approx: "mi-stéik", ipa: "/mɪˈsteɪk/" },
      { en: "lesson", pt: "lição", approx: "lé-son", ipa: "/ˈlesn/" }
    ],

    coreSentences: [
      { en: "I remember learning English as a child.", pt: "Eu lembro de ter aprendido inglês quando criança." },
      { en: "I grew up in Bahia.", pt: "Eu cresci na Bahia." },
      { en: "I studied at a university in Salvador.", pt: "Eu estudei em uma universidade em Salvador." },
      { en: "I made an important decision last year.", pt: "Eu tomei uma decisão importante no ano passado." },
      { en: "I changed jobs two years ago.", pt: "Eu mudei de emprego dois anos atrás." },
      { en: "I already have experience with quality management.", pt: "Já tenho experiência com gestão da qualidade." },
      { en: "I haven't finished my data analysis course yet.", pt: "Ainda não terminei meu curso de análise de dados." },
      { en: "I overcame many challenges in my career.", pt: "Eu superei muitos desafios na minha carreira." },
      { en: "I am proud of my journey.", pt: "Eu sou orgulhoso da minha jornada." },
      { en: "I learned an important lesson from my mistakes.", pt: "Eu aprendi uma lição importante com meus erros." },
      { en: "I discovered my passion for technology.", pt: "Eu descobri minha paixão por tecnologia." },
      { en: "I had a special moment with my family.", pt: "Eu tive um momento especial com minha família." },
      { en: "I forgot my keys at home yesterday.", pt: "Esqueci minhas chaves em casa ontem." },
      { en: "I already finished that project.", pt: "Eu já terminei aquele projeto." },
      { en: "I haven't traveled abroad yet.", pt: "Ainda não viajei para fora." },
      { en: "I started studying English three months ago.", pt: "Comecei a estudar inglês três meses atrás." },
      { en: "I worked with quality management for five years.", pt: "Trabalhei com gestão da qualidade por cinco anos." },
      { en: "I made many friends at university.", pt: "Fiz muitos amigos na universidade." },
      { en: "I decided to learn English for my career.", pt: "Decidi aprender inglês para minha carreira." },
      { en: "That was a difficult but important experience.", pt: "Aquela foi uma experiência difícil, mas importante." }
    ],

    patterns: [
      {
        title: "I remember + verb-ing",
        examples: [
          "I remember learning English as a child.",
          "I remember studying at night.",
          "I remember making that decision.",
          "I remember the first day at work."
        ],
        variationBank: [
          "I remember going to university.",
          "I remember meeting my boss.",
          "I remember the important lesson.",
          "I remember growing up in Bahia."
        ]
      },
      {
        title: "I already / yet / still",
        examples: [
          "I already have experience with quality management.",
          "I haven't finished my course yet.",
          "I still study English at night.",
          "I haven't traveled abroad yet."
        ],
        variationBank: [
          "I already finished that project.",
          "I haven't learned Python yet.",
          "I still work with documentation.",
          "I haven't visited São Paulo yet."
        ]
      },
      {
        title: "I + past simple + time expression",
        examples: [
          "I changed jobs two years ago.",
          "I started studying English three months ago.",
          "I made an important decision last year.",
          "I grew up in Bahia."
        ],
        variationBank: [
          "I graduated five years ago.",
          "I moved to this apartment last year.",
          "I learned a lot last semester.",
          "I met my colleagues at work."
        ]
      }
    ],

    variations: [
      {
        base: "I changed jobs two years ago.",
        affirmative: "I changed jobs two years ago.",
        negative: "I didn't change jobs.",
        question: "Did you change jobs?",
        past: "I changed jobs two years ago.",
        future: "I'm going to change jobs next year."
      },
      {
        base: "I remember learning English.",
        affirmative: "I remember learning English.",
        negative: "I don't remember learning that.",
        question: "Do you remember learning English?",
        past: "I remembered the lesson later.",
        future: null
      },
      {
        base: "I haven't finished my course yet.",
        affirmative: "I haven't finished my course yet.",
        negative: null,
        question: "Have you finished your course yet?",
        past: "I hadn't finished by December.",
        future: "I will have finished by next month."
      }
    ],

    questions: [
      { q: "What do you remember about your childhood?", sample: "I remember playing outside with friends." },
      { q: "Where did you grow up?", sample: "I grew up in Bahia." },
      { q: "What did you study at university?", sample: "I studied Systems Analysis and Development." },
      { q: "What important decision did you make?", sample: "I decided to learn English for my career." },
      { q: "Did you change jobs recently?", sample: "Yes, I changed jobs two years ago." },
      { q: "What experience do you already have?", sample: "I already have experience with quality management." },
      { q: "Is there anything you haven't done yet?", sample: "I haven't traveled abroad yet." },
      { q: "What challenges have you overcome?", sample: "I overcame many challenges in my career." },
      { q: "Are you proud of your journey?", sample: "Yes, I am proud of my journey." },
      { q: "What lesson have you learned?", sample: "I learned that mistakes help us grow." },
      { q: "What have you discovered about yourself?", sample: "I discovered my passion for technology." },
      { q: "Do you have any regrets?", sample: "I don't have many regrets." },
      { q: "When did you start studying English?", sample: "I started three months ago." },
      { q: "What was your first job?", sample: "My first job was in quality documentation." },
      { q: "What was a special moment in your life?", sample: "Graduating from university was very special." }
    ],

    exercises: {
      translate: [
        { pt: "Eu cresci na Bahia.", en: "I grew up in Bahia." },
        { pt: "Eu mudei de emprego dois anos atrás.", en: "I changed jobs two years ago." },
        { pt: "Ainda não viajei para fora.", en: "I haven't traveled abroad yet." },
        { pt: "Eu decidi aprender inglês para minha carreira.", en: "I decided to learn English for my career." },
        { pt: "Eu já tenho experiência com gestão da qualidade.", en: "I already have experience with quality management." },
        { pt: "Eu lembro de ter aprendido inglês quando criança.", en: "I remember learning English as a child." }
      ],
      fillBlank: [
        { sentence: "I remember ___ English as a child.", options: ["learning", "learn", "learned", "to learn"], answer: "learning" },
        { sentence: "I changed jobs two years ___.", options: ["ago", "before", "after", "last"], answer: "ago" },
        { sentence: "I haven't finished ___ yet.", options: ["my course", "my course", "I course", "a course"], answer: "my course" },
        { sentence: "I am proud ___ my journey.", options: ["of", "in", "on", "at"], answer: "of" },
        { sentence: "I ___ an important decision.", options: ["made", "make", "did", "took"], answer: "made" }
      ],
      multipleChoice: [
        { q: 'What does "milestone" mean?', options: ["marco / conquesta", "erro", "problema", "lição"], answer: "marco / conquesta" },
        { q: 'What does "overcome" mean?', options: ["superar", "esquecer", "mudar", "aprender"], answer: "superar" },
        { q: 'What does "regret" mean?', options: ["arrependimento", "orgulho", "lembrança", "decisão"], answer: "arrependimento" }
      ],
      rearrange: [
        { scrambled: ["grew", "I", "Bahia", "in", "up"], answer: "I grew up in Bahia" },
        { scrambled: ["changed", "I", "two", "jobs", "years", "ago"], answer: "I changed jobs two years ago" },
        { scrambled: ["remember", "I", "learning", "English"], answer: "I remember learning English" },
        { scrambled: ["haven't", "I", "traveled", "abroad", "yet"], answer: "I haven't traveled abroad yet" }
      ],
      listening: [
        { audio: "I grew up in Bahia.", options: ["I grew up in Bahia.", "I grew up in São Paulo.", "I grew up in Rio."], answer: "I grew up in Bahia." },
        { audio: "I changed jobs two years ago.", options: ["I changed jobs two years ago.", "I changed jobs last year.", "I changed jobs five years ago."], answer: "I changed jobs two years ago." },
        { audio: "I remember learning English.", options: ["I remember learning English.", "I remember studying math.", "I remember working there."], answer: "I remember learning English." }
      ]
    },

    speakingSentences: [
      "I grew up in Bahia.",
      "I remember learning English as a child.",
      "I changed jobs two years ago.",
      "I haven't traveled abroad yet.",
      "I am proud of my journey."
    ],

    talkPrompts: [
      "Where did you grow up?",
      "What do you remember about your childhood?",
      "What important decision did you make?",
      "What challenges have you overcome?",
      "Are you proud of your journey?",
      "What lesson have you learned from your mistakes?"
    ]
  },

  // ── Island 09: Travel & Future Plans ─────────────────
  {
    id: "island09", number: 9, name: "Travel & Future Plans", emoji: "✈️",
    description: "Talk about travel, dreams, and your plans for the future.",
    unlockedByDefault: false,

    vocabulary: [
      { en: "to travel", pt: "viajar", approx: "tri-vel", ipa: "/ˈtrævl/" },
      { en: "trip", pt: "viagem", approx: "tríp", ipa: "/trɪp/" },
      { en: "vacation", pt: "férias", approx: "vei-xon", ipa: "/veɪˈkeɪʃn/" },
      { en: "airport", pt: "aeroporto", approx: "éi-ru-pór", ipa: "/ˈeərpɔːrt/" },
      { en: "plane", pt: "avião", approx: "pléin", ipa: "/pleɪn/" },
      { en: "hotel", pt: "hotel", approx: "hoú-tel", ipa: "/həʊˈtel/" },
      { en: "reservation", pt: "reserva", approx: "ré-zer-vei-xon", ipa: "/ˌrezərˈveɪʃn/" },
      { en: "passport", pt: "passaporte", approx: "pá-sa-pórt", ipa: "/ˈpɑːspɔːrt/" },
      { en: "luggage", pt: "bagagem", approx: "lá-gu-idj", ipa: "/ˈlʌɡɪdʒ/" },
      { en: "destination", pt: "destino", approx: "des-tí-nou", ipa: "/desˈtɪnəʃn/" },
      { en: "country", pt: "país", approx: "cán-tri", ipa: "/ˈkʌntri/" },
      { en: "city", pt: "cidade", approx: "sí-ti", ipa: "/ˈsɪti/" },
      { en: "tourist", pt: "turista", approx: "tú-rist", ipa: "/ˈtʊərɪst/" },
      { en: "culture", pt: "cultura", approx: "cól-ter", ipa: "/ˈkʌltʃər/" },
      { en: "to book", pt: "reservar", approx: "búk", ipa: "/bʊk/" },
      { en: "to visit", pt: "visitar", approx: "ví-zit", ipa: "/ˈvɪzɪt/" },
      { en: "to explore", pt: "explorar", ex: "iks-plór", ipa: "/ɪkˈsplɔːr/" },
      { en: "dream", pt: "sonho", approx: "drím", ipa: "/driːm/" },
      { en: "plan", pt: "plano", approx: "plán", ipa: "/plæn/" },
      { en: "to save", pt: "economizar", approx: "séiv", ipa: "/seɪv/" },
      { en: "budget", pt: "orçamento", approx: "bá-djet", ipa: "/ˈbʌdʒɪt/" },
      { en: "abroad", pt: "no exterior", approx: "a-bród", ipa: "/əˈbrɔːd/" },
      { en: "international", pt: "internacional", approx: "in-ter-na-xo-nal", ipa: "/ˌɪntərˈnæʃnəl/" },
      { en: "tourism", pt: "turismo", approx: "tú-rism", ipa: "/ˈtʊərɪzəm/" },
      { en: "experience", pt: "experiência", approx: "eks-pí-ri-ens", ipa: "/ɪkˈspɪəriəns/" }
    ],

    coreSentences: [
      { en: "I want to travel abroad.", pt: "Eu quero viajar para fora." },
      { en: "My dream is to visit Florianópolis.", pt: "Meu sonho é visitar Florianópolis." },
      { en: "I am planning a trip next year.", pt: "Estou planejando uma viagem para o ano que vem." },
      { en: "I need to save money for the trip.", pt: "Preciso economizar dinheiro para a viagem." },
      { en: "I want to experience different cultures.", pt: "Eu quero experimentar culturas diferentes." },
      { en: "I am going to book a hotel soon.", pt: "Vou reservar um hotel em breve." },
      { en: "I need to renew my passport.", pt: "Preciso renovar meu passaporte." },
      { en: "I want to visit at least five countries.", pt: "Eu quero visitar pelo menos cinco países." },
      { en: "I am planning my budget for the trip.", pt: "Estou planejando meu orçamento para a viagem." },
      { en: "I want to travel with my family.", pt: "Eu quero viajar com minha família." },
      { en: "I am going to learn English before I travel.", pt: "Vou aprender inglês antes de viajar." },
      { en: "I want to explore new cities.", pt: "Eu quero explorar novas cidades." },
      { en: "I am saving money every month.", pt: "Estou economizando dinheiro todo mês." },
      { en: "I want to be an international tourist.", pt: "Eu quero ser um turista internacional." },
      { en: "I plan to visit Natal one day.", pt: "Planejo visitar Natal um dia." },
      { en: "I am going to take a plane for the first time.", pt: "Vou pegar um avião pela primeira vez." },
      { en: "My biggest dream is to travel the world.", pt: "Meu maior sonho é viajar pelo mundo." },
      { en: "I want to have many travel experiences.", pt: "Eu quero ter muitas experiências de viagem." },
      { en: "I am going to start saving next month.", pt: "Vou começar a economizar no mês que vem." },
      { en: "I want to visit countries where people speak English.", pt: "Eu quero visitar países onde as pessoas falam inglês." }
    ],

    patterns: [
      {
        title: "I want to + verb (future desires)",
        examples: [
          "I want to travel abroad.",
          "I want to experience different cultures.",
          "I want to visit Florianópolis.",
          "I want to explore new cities."
        ],
        variationBank: [
          "I want to learn English abroad.",
          "I want to stay in a good hotel.",
          "I want to take many photos.",
          "I want to try new food abroad."
        ]
      },
      {
        title: "I am going to + verb (planned future)",
        examples: [
          "I am going to book a hotel soon.",
          "I am going to learn English before I travel.",
          "I am going to take a plane for the first time.",
          "I am going to start saving next month."
        ],
        variationBank: [
          "I am going to visit Natal next year.",
          "I am going to renew my passport.",
          "I am going to plan my budget.",
          "I am going to travel with my family."
        ]
      },
      {
        title: "I plan to + verb / My dream is to + verb",
        examples: [
          "I plan to visit Natal one day.",
          "My dream is to visit Florianópolis.",
          "My biggest dream is to travel the world.",
          "I plan to save money for the trip."
        ],
        variationBank: [
          "I plan to learn English abroad.",
          "My dream is to live in another country.",
          "My dream is to meet people from other cultures.",
          "I plan to travel next year."
        ]
      }
    ],

    variations: [
      {
        base: "I want to travel abroad.",
        affirmative: "I want to travel abroad.",
        negative: "I don't want to travel alone.",
        question: "Do you want to travel abroad?",
        past: "I wanted to travel last year.",
        future: "I'm going to travel abroad soon."
      },
      {
        base: "I am going to book a hotel.",
        affirmative: "I am going to book a hotel.",
        negative: "I am not going to book a hotel.",
        question: "Are you going to book a hotel?",
        past: "I was going to book a hotel but I didn't.",
        future: null
      },
      {
        base: "I plan to visit Natal one day.",
        affirmative: "I plan to visit Natal one day.",
        negative: "I don't plan to travel alone.",
        question: "Do you plan to visit Natal?",
        past: "I planned to visit last year.",
        future: "I will plan the trip next month."
      }
    ],

    questions: [
      { q: "Do you want to travel abroad?", sample: "Yes, I want to travel abroad." },
      { q: "What is your dream destination?", sample: "My dream is to visit Florianópolis." },
      { q: "Are you planning any trips?", sample: "Yes, I am planning a trip next year." },
      { q: "Do you need to save money for travel?", sample: "Yes, I need to save money for the trip." },
      { q: "How many countries do you want to visit?", sample: "I want to visit at least five countries." },
      { q: "Have you ever been on a plane?", sample: "No, I am going to take a plane for the first time." },
      { q: "What do you want to experience abroad?", sample: "I want to experience different cultures." },
      { q: "Do you want to travel with your family?", sample: "Yes, I want to travel with my family." },
      { q: "What is your biggest dream?", sample: "My biggest dream is to travel the world." },
      { q: "Are you saving money for a trip?", sample: "Yes, I am saving money every month." },
      { q: "Do you want to visit countries where people speak English?", sample: "Yes, I want to practice my English." },
      { q: "What city do you want to visit?", sample: "I want to visit Aracaju." },
      { q: "Do you like planning trips?", sample: "Yes, I enjoy planning my trips." },
      { q: "What do you need before traveling?", sample: "I need a passport and to save money." },
      { q: "When do you plan to travel?", sample: "I plan to travel next year." }
    ],

    exercises: {
      translate: [
        { pt: "Eu quero viajar para fora.", en: "I want to travel abroad." },
        { pt: "Meu sonho é visitar Florianópolis.", en: "My dream is to visit Florianópolis." },
        { pt: "Estou economizando dinheiro todo mês.", en: "I am saving money every month." },
        { pt: "Vou reservar um hotel em breve.", en: "I am going to book a hotel soon." },
        { pt: "Preciso renovar meu passaporte.", en: "I need to renew my passport." },
        { pt: "Planejo visitar Natal um dia.", en: "I plan to visit Natal one day." }
      ],
      fillBlank: [
        { sentence: "I want ___ travel abroad.", options: ["to", "in", "on", "at"], answer: "to" },
        { sentence: "I am ___ to book a hotel.", options: ["going", "go", "goes", "went"], answer: "going" },
        { sentence: "I need to ___ my passport.", options: ["renew", "return", "remove", "repeat"], answer: "renew" },
        { sentence: "I plan ___ visit Natal.", options: ["to", "in", "on", "for"], answer: "to" },
        { sentence: "I am ___ money every month.", options: ["saving", "save", "saved", "saves"], answer: "saving" }
      ],
      multipleChoice: [
        { q: 'What does "abroad" mean?', options: ["no exterior", "em casa", "na escola", "no trabalho"], answer: "no exterior" },
        { q: 'What does "destination" mean?', options: ["destino", "partida", "viagem", "hotel"], answer: "destino" },
        { q: 'What does "budget" mean?', options: ["orçamento", "passaporte", "bagagem", "reserva"], answer: "orçamento" }
      ],
      rearrange: [
        { scrambled: ["to", "want", "I", "abroad", "travel"], answer: "I want to travel abroad" },
        { scrambled: ["is", "My", "dream", "to", "visit", "Florianópolis"], answer: "My dream is to visit Florianópolis" },
        { scrambled: ["am", "I", "saving", "money", "every", "month"], answer: "I am saving money every month" },
        { scrambled: ["going", "am", "I", "to", "book", "hotel", "a"], answer: "I am going to book a hotel" }
      ],
      listening: [
        { audio: "I want to travel abroad.", options: ["I want to travel abroad.", "I want to travel domestically.", "I don't want to travel."], answer: "I want to travel abroad." },
        { audio: "My dream is to visit Florianópolis.", options: ["My dream is to visit Florianópolis.", "My dream is to visit Natal.", "My dream is to visit Asia."], answer: "My dream is to visit Florianópolis." },
        { audio: "I am saving money every month.", options: ["I am saving money every month.", "I am spending money every month.", "I am earning money every month."], answer: "I am saving money every month." }
      ]
    },

    speakingSentences: [
      "I want to travel abroad.",
      "My dream is to visit Florianópolis.",
      "I am saving money every month.",
      "I am going to book a hotel soon.",
      "My biggest dream is to travel the world."
    ],

    talkPrompts: [
      "Do you want to travel abroad?",
      "What is your dream destination?",
      "Are you planning any trips?",
      "How many countries do you want to visit?",
      "What is your biggest dream?",
      "When do you plan to travel?"
    ]
  },

  // ── Island 10: Opinions & Small Talk ─────────────────
  {
    id: "island10", number: 10, name: "Opinions & Small Talk", emoji: "💬",
    description: "Share your opinions and make everyday conversation.",
    unlockedByDefault: false,

    vocabulary: [
      { en: "opinion", pt: "opinião", approx: "o-pi-nion", ipa: "/əˈpɪnjən/" },
      { en: "to agree", pt: "concordar", approx: "u-grí", ipa: "/əˈɡriː/" },
      { en: "to disagree", pt: "discordar", approx: "dis-u-grí", ipa: "/ˌdɪsəˈɡriː/" },
      { en: "to think", pt: "achar / pensar", approx: "singk", ipa: "/θɪŋk/" },
      { en: "to believe", pt: "acreditar", approx: "bi-lív", ipa: "/bɪˈliːv/" },
      { en: "probably", pt: "provavelmente", approx: "pró-ba-bli", ipa: "/ˈprɒbəbli/" },
      { en: "definitely", pt: "definitivamente", approx: "dé-fi-nit-li", ipa: "/ˈdefɪnətli/" },
      { en: "maybe", pt: "talvez", approx: "méi-bi", ipa: "/ˈmeɪbi/" },
      { en: "actually", pt: "na verdade", approx: "ác-tchu-a-li", ipa: "/ˈæktʃuəli/" },
      { en: "honestly", pt: "honestamente", approx: "ó-nest-li", ipa: "/ˈɒnɪstli/" },
      { en: "in my view", pt: "na minha visão", approx: "in mai viu", ipa: "/ɪn maɪ vjuː/" },
      { en: "as far as I know", pt: "que eu saiba", approx: "ez fár ez ai nóu", ipa: "/æz fɑːr æz aɪ nəʊ/" },
      { en: "by the way", pt: "a propósito", approx: "bai dei uéi", ipa: "/baɪ ðə weɪ/" },
      { en: "weather", pt: "tempo / clima", approx: "ué-der", ipa: "/ˈweðər/" },
      { en: "traffic", pt: "trânsito", approx: "tré-fic", ipa: "/ˈtræfɪk/" },
      { en: "news", pt: "notícias", approx: "niúz", ipa: "/njuːz/" },
      { en: "social media", pt: "redes sociais", approx: "só-xo mí-di-a", ipa: "/ˌsəʊʃəlˈmiːdiə/" },
      { en: "technology", pt: "tecnologia", approx: "tek-nó-lo-dji", ipa: "/tekˈnɒlədʒi/" },
      { en: "environment", pt: "meio ambiente", approx: "en-vái-ron-ment", ipa: "/ɪnˈvaɪrənmənt/" },
      { en: "society", pt: "sociedade", approx: "só-sai-e-ti", ipa: "/səˈsaɪəti/" },
      { en: "generation", pt: "geração", approx: "dje-ne-réi-xon", ipa: "/ˌdʒenəˈreɪʃn/" },
      { en: "lifestyle", pt: "estilo de vida", approx: "lái-f-stáil", ipa: "/ˈlaɪfstaɪl/" },
      { en: "trend", pt: "tendência", approx: "trénd", ipa: "/trend/" },
      { en: "interesting", pt: "interessante", approx: "ín-te-res-ting", ipa: "/ˈɪntrəstɪŋ/" },
      { en: "important", pt: "importante", approx: "im-por-tant", ipa: "/ɪmˈpɔːrtənt/" }
    ],

    coreSentences: [
      { en: "I think technology is very important.", pt: "Eu acho que tecnologia é muito importante." },
      { en: "In my view, learning English is essential.", pt: "Na minha visão, aprender inglês é essencial." },
      { en: "I agree with you about that.", pt: "Eu concordo com você sobre isso." },
      { en: "I don't agree with that opinion.", pt: "Eu não concordo com essa opinião." },
      { en: "Honestly, I think the weather is great today.", pt: "Honestamente, eu acho que o tempo está ótimo hoje." },
      { en: "Actually, I prefer working from home.", pt: "Na verdade, eu prefiro trabalhar em casa." },
      { en: "Maybe you are right about that.", pt: "Talvez você esteja certo sobre isso." },
      { en: "I definitely think we should learn English.", pt: "Definitivamente, eu acho que devemos aprender inglês." },
      { en: "Probably the traffic is bad right now.", pt: "Provavelmente o trânsito está ruim agora." },
      { en: "As far as I know, the class is at 7 PM.", pt: "Que eu saiba, a aula é às 7 da noite." },
      { en: "By the way, how is your English class?", pt: "A propósito, como está sua aula de inglês?" },
      { en: "I think social media is both good and bad.", pt: "Eu acho que redes sociais são boas e ruins." },
      { en: "I believe the environment is very important.", pt: "Eu acredito que o meio ambiente é muito importante." },
      { en: "In my opinion, our generation has many challenges.", pt: "Na minha opinião, nossa geração tem muitos desafios." },
      { en: "I think technology has changed our lifestyle.", pt: "Eu acho que tecnologia mudou nosso estilo de vida." },
      { en: "That's an interesting point.", pt: "Esse é um ponto interessante." },
      { en: "I don't think that's necessarily true.", pt: "Eu não acho que isso seja necessariamente verdade." },
      { en: "What do you think about that?", sample: "O que você acha sobre isso?" },
      { en: "I think so too.", pt: "Eu acho que sim também." },
      { en: "That makes sense to me.", pt: "Isso faz sentido para mim." }
    ],

    patterns: [
      {
        title: "I think / believe + clause",
        examples: [
          "I think technology is very important.",
          "I believe the environment is very important.",
          "I think social media is both good and bad.",
          "I think so too."
        ],
        variationBank: [
          "I think learning English is important.",
          "I believe our generation has many challenges.",
          "I think the weather is great today.",
          "I believe technology has changed our lives."
        ]
      },
      {
        title: "In my view / In my opinion + clause",
        examples: [
          "In my view, learning English is essential.",
          "In my opinion, our generation has many challenges.",
          "In my view, technology is helpful.",
          "In my opinion, the traffic is a problem."
        ],
        variationBank: [
          "In my view, we should study more.",
          "In my opinion, social media is useful.",
          "In my view, the environment needs attention.",
          "In my opinion, working from home is great."
        ]
      },
      {
        title: "I agree / I disagree with + noun",
        examples: [
          "I agree with you about that.",
          "I don't agree with that opinion.",
          "I completely agree with you.",
          "I disagree about that topic."
        ],
        variationBank: [
          "I agree with your idea.",
          "I don't agree with the teacher.",
          "I partly agree with you.",
          "I disagree about technology."
        ]
      }
    ],

    variations: [
      {
        base: "I think technology is very important.",
        affirmative: "I think technology is very important.",
        negative: "I don't think technology is always good.",
        question: "Do you think technology is important?",
        past: "I thought that was important before.",
        future: "I will think about that later."
      },
      {
        base: "I agree with you about that.",
        affirmative: "I agree with you about that.",
        negative: "I don't agree with you about that.",
        question: "Do you agree with me?",
        past: "I agreed with you before.",
        future: null
      },
      {
        base: "By the way, how is your English class?",
        affirmative: "By the way, how is your English class?",
        negative: null,
        question: "By the way, how is your English class?",
        past: null,
        future: null
      }
    ],

    questions: [
      { q: "What do you think about technology?", sample: "I think technology is very important." },
      { q: "Do you agree that learning English is essential?", sample: "Yes, I definitely agree with that." },
      { q: "What is your opinion about social media?", sample: "I think social media is both good and bad." },
      { q: "Do you prefer working from home or in an office?", sample: "Actually, I prefer working from home." },
      { q: "What do you think about the weather today?", sample: "Honestly, I think the weather is great." },
      { q: "Do you think our generation has many challenges?", sample: "Yes, I believe our generation has many challenges." },
      { q: "What do you think about the environment?", sample: "I believe the environment is very important." },
      { q: "Do you think technology has changed our lifestyle?", sample: "Yes, I think technology has changed our lifestyle." },
      { q: "What do you think about learning English?", sample: "I definitely think we should learn English." },
      { q: "What is your opinion about traffic?", sample: "I think traffic is a big problem in Brazil." },
      { q: "Do you think online learning is effective?", sample: "Yes, I think online learning can be very effective." },
      { q: "What do you think about the news?", sample: "I try to watch the news every day." },
      { q: "Do you think our lifestyle is healthy?", sample: "I think we need to take better care of ourselves." },
      { q: "What is an interesting trend you've noticed?", sample: "I think remote work is a big trend." },
      { q: "By the way, what do you do in your free time?", sample: "I usually watch movies and study English." }
    ],

    exercises: {
      translate: [
        { pt: "Eu acho que tecnologia é muito importante.", en: "I think technology is very important." },
        { pt: "Na minha visão, aprender inglês é essencial.", en: "In my view, learning English is essential." },
        { pt: "Eu concordo com você sobre isso.", en: "I agree with you about that." },
        { pt: "Honestamente, eu acho que o tempo está ótimo hoje.", en: "Honestly, I think the weather is great today." },
        { pt: "A propósito, como está sua aula de inglês?", en: "By the way, how is your English class?" },
        { pt: "Definitivamente, eu acho que devemos aprender inglês.", en: "I definitely think we should learn English." }
      ],
      fillBlank: [
        { sentence: "I ___ technology is very important.", options: ["think", "think", "thinks", "thinking"], answer: "think" },
        { sentence: "I agree ___ you about that.", options: ["with", "in", "on", "at"], answer: "with" },
        { sentence: "___ my view, learning English is essential.", options: ["In", "On", "At", "By"], answer: "In" },
        { sentence: "___ the way, how is your class?", options: ["By", "In", "On", "At"], answer: "By" },
        { sentence: "I ___ think we should learn English.", options: ["definitely", "maybe", "probably", "actually"], answer: "definitely" }
      ],
      multipleChoice: [
        { q: 'What does "in my view" mean?', options: ["na minha visão", "no meu trabalho", "na minha casa", "na minha opinião"], answer: "na minha opinião" },
        { q: 'What does "by the way" mean?', options: ["a propósito", "pelo caminho", "de repente", "às vezes"], answer: "a propósito" },
        { q: 'What does "as far as I know" mean?', options: ["que eu saiba", "tão longe quanto", "por mais que", "apesar de"], answer: "que eu saiba" }
      ],
      rearrange: [
        { scrambled: ["think", "I", "technology", "is", "important", "very"], answer: "I think technology is very important" },
        { scrambled: ["agree", "I", "with", "you", "that", "about"], answer: "I agree with you about that" },
        { scrambled: ["my", "In", "English", "view", "learning", "is", "essential"], answer: "In my view learning English is essential" },
        { scrambled: ["way", "By", "how", "the", "your", "is", "class"], answer: "By the way how is your class" }
      ],
      listening: [
        { audio: "I think technology is very important.", options: ["I think technology is very important.", "I think technology is not important.", "I don't think about technology."], answer: "I think technology is very important." },
        { audio: "I agree with you about that.", options: ["I agree with you about that.", "I don't agree with you.", "I have no opinion."], answer: "I agree with you about that." },
        { audio: "By the way, how is your English class?", options: ["By the way, how is your English class?", "By the way, where is your English class?", "By the way, when is your English class?"], answer: "By the way, how is your English class?" }
      ]
    },

    speakingSentences: [
      "I think technology is very important.",
      "In my view, learning English is essential.",
      "I agree with you about that.",
      "Honestly, I think the weather is great today.",
      "By the way, how is your English class?"
    ],

    talkPrompts: [
      "What do you think about technology?",
      "Do you agree that learning English is essential?",
      "What is your opinion about social media?",
      "What do you think about the environment?",
      "Do you think our generation has many challenges?",
      "By the way, what do you do in your free time?"
    ]
  }
];

// Connections used by the "Connect the Islands" feature.
// Each entry mixes questions from two islands once both have content.
const CONNECTIONS = [
  { islands: ["island01", "island02"], prompts: [
    "What do you usually do with your family?",
    "Does your family like technology too?"
  ] },
  { islands: ["island01", "island03"], prompts: [
    "What do you usually do at night?",
    "Do you study English every day?"
  ] },
  { islands: ["island02", "island05"], prompts: [
    "Does your family visit your home often?",
    "Who do you live with in your apartment?"
  ] },
  { islands: ["island03", "island06"], prompts: [
    "What do you usually have for breakfast?",
    "Do you cook during your daily routine?"
  ] },
  { islands: ["island04", "island08"], prompts: [
    "What did you love doing as a child?",
    "Has your taste in movies changed over time?"
  ] },
  { islands: ["island05", "island09"], prompts: [
    "Do you want to live in another country?",
    "What would you miss most about your home?"
  ] },
  { islands: ["island06", "island10"], prompts: [
    "What do you think about Brazilian food?",
    "Do you like trying food from other cultures?"
  ] },
  { islands: ["island07", "island08"], prompts: [
    "What was your first job?",
    "How has your career changed over time?"
  ] },
  { islands: ["island07", "island09"], prompts: [
    "Do you want to work in another country?",
    "How can English help your career?"
  ] },
  { islands: ["island08", "island10"], prompts: [
    "What important lesson have you learned?",
    "Do you think the past shapes who we are?"
  ] },
  { islands: ["island09", "island10"], prompts: [
    "What do you think about tourism?",
    "Is it important to learn about other cultures?"
  ] }
];

if (typeof module !== "undefined") module.exports = { ISLANDS, CONNECTIONS };
