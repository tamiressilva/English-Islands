/* English Islands — Personalized curriculum for Tamires */
const ISLANDS = [
  {
    "id": "island01",
    "number": 1,
    "name": "Who I Am",
    "emoji": "🏝️",
    "description": "Talk about yourself, your interests, background and goals.",
    "unlockedByDefault": true,
    "goal": "Introduce yourself and keep a basic conversation going.",
    "vocabulary": [
      {
        "en": "name",
        "pt": "nome",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "age",
        "pt": "idade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "country",
        "pt": "país",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "city",
        "pt": "cidade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "hometown",
        "pt": "cidade natal",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "state",
        "pt": "estado",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to live",
        "pt": "morar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to work",
        "pt": "trabalhar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to study",
        "pt": "estudar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "degree",
        "pt": "formação/diploma",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "career",
        "pt": "carreira",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "hobby",
        "pt": "hobby",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "interest",
        "pt": "interesse",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "goal",
        "pt": "objetivo",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "dream",
        "pt": "sonho",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "plan",
        "pt": "plano",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "future",
        "pt": "futuro",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "personality",
        "pt": "personalidade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "favorite",
        "pt": "favorito",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "usually",
        "pt": "geralmente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "especially",
        "pt": "especialmente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "currently",
        "pt": "atualmente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "recently",
        "pt": "recentemente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "experience",
        "pt": "experiência",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "project",
        "pt": "projeto",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to enjoy",
        "pt": "gostar/aproveitar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to learn",
        "pt": "aprender",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to improve",
        "pt": "melhorar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to prefer",
        "pt": "preferir",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to hope",
        "pt": "esperar/ter esperança",
        "approx": "",
        "ipa": ""
      }
    ],
    "coreSentences": [
      {
        "en": "My name is Tamires.",
        "pt": "Meu nome é Tamires."
      },
      {
        "en": "I'm 23 years old.",
        "pt": "Eu tenho 23 anos."
      },
      {
        "en": "I'm from Brazil.",
        "pt": "Eu sou do Brasil."
      },
      {
        "en": "I live in Bahia.",
        "pt": "Eu moro na Bahia."
      },
      {
        "en": "I work with quality management.",
        "pt": "Eu trabalho com gestão da qualidade."
      },
      {
        "en": "I have a degree in Systems Analysis and Development.",
        "pt": "Eu sou formada em Análise e Desenvolvimento de Sistemas."
      },
      {
        "en": "I'm interested in technology and artificial intelligence.",
        "pt": "Eu me interesso por tecnologia e inteligência artificial."
      },
      {
        "en": "I also like psychology and philosophy.",
        "pt": "Eu também gosto de psicologia e filosofia."
      },
      {
        "en": "I enjoy learning new things.",
        "pt": "Eu gosto de aprender coisas novas."
      },
      {
        "en": "I'm currently improving my English.",
        "pt": "Atualmente estou melhorando meu inglês."
      },
      {
        "en": "I want to speak English without translating everything.",
        "pt": "Quero falar inglês sem traduzir tudo."
      },
      {
        "en": "I like talking to people from other countries.",
        "pt": "Gosto de conversar com pessoas de outros países."
      },
      {
        "en": "I prefer small groups.",
        "pt": "Prefiro grupos pequenos."
      },
      {
        "en": "I'm a little shy about making mistakes in English.",
        "pt": "Fico um pouco tímida em cometer erros em inglês."
      },
      {
        "en": "But I really want to improve.",
        "pt": "Mas eu realmente quero melhorar."
      },
      {
        "en": "I like intelligent stories.",
        "pt": "Gosto de histórias inteligentes."
      },
      {
        "en": "My favorite movie is Interstellar.",
        "pt": "Meu filme favorito é Interestelar."
      },
      {
        "en": "I like suspense and science fiction.",
        "pt": "Gosto de suspense e ficção científica."
      },
      {
        "en": "I'm curious about how things work.",
        "pt": "Tenho curiosidade sobre como as coisas funcionam."
      },
      {
        "en": "I like creating projects.",
        "pt": "Gosto de criar projetos."
      },
      {
        "en": "I'm learning how to use AI tools.",
        "pt": "Estou aprendendo a usar ferramentas de IA."
      },
      {
        "en": "One of my goals is to work internationally.",
        "pt": "Um dos meus objetivos é trabalhar internacionalmente."
      },
      {
        "en": "I want to travel and meet people from different cultures.",
        "pt": "Quero viajar e conhecer pessoas de culturas diferentes."
      },
      {
        "en": "I have many interests.",
        "pt": "Tenho muitos interesses."
      },
      {
        "en": "I'm still figuring out exactly what I want to do.",
        "pt": "Ainda estou descobrindo exatamente o que quero fazer."
      }
    ],
    "patterns": [
      {
        "title": "I'm + [information]",
        "examples": [
          "I'm from Brazil.",
          "Where are you from?"
        ],
        "variationBank": [
          "I'm from Brazil.",
          "I'm not from...",
          "Where are you from?"
        ]
      },
      {
        "title": "I work/study + [area]",
        "examples": [
          "I work in quality.",
          "What do you do?"
        ],
        "variationBank": [
          "I work in quality.",
          "I don't work in...",
          "What do you do?"
        ]
      },
      {
        "title": "I'm interested in + [topic]",
        "examples": [
          "I'm interested in AI.",
          "What are you interested in?"
        ],
        "variationBank": [
          "I'm interested in AI.",
          "I'm not interested in...",
          "What are you interested in?"
        ]
      },
      {
        "title": "I like + [activity]",
        "examples": [
          "I like watching series.",
          "What do you like doing?"
        ],
        "variationBank": [
          "I like watching series.",
          "I don't like...",
          "What do you like doing?"
        ]
      },
      {
        "title": "I want to + [verb]",
        "examples": [
          "I want to travel.",
          "What do you want to do?"
        ],
        "variationBank": [
          "I want to travel.",
          "I don't want to...",
          "What do you want to do?"
        ]
      },
      {
        "title": "I'm learning + [thing]",
        "examples": [
          "I'm learning English.",
          "What are you learning?"
        ],
        "variationBank": [
          "I'm learning English.",
          "I'm not learning...",
          "What are you learning?"
        ]
      },
      {
        "title": "One of my goals is to + [verb]",
        "examples": [
          "One of my goals is to work internationally.",
          "What are your goals?"
        ],
        "variationBank": [
          "One of my goals is to work internationally.",
          "One of my goals isn't to...",
          "What are your goals?"
        ]
      },
      {
        "title": "I prefer + [noun/activity]",
        "examples": [
          "I prefer small groups.",
          "What do you prefer?"
        ],
        "variationBank": [
          "I prefer small groups.",
          "I don't prefer...",
          "What do you prefer?"
        ]
      }
    ],
    "variations": [
      {
        "base": "I'm from Brazil.",
        "affirmative": "I'm from Brazil.",
        "negative": "I'm not from...",
        "question": "Where are you from?",
        "past": "",
        "future": ""
      },
      {
        "base": "I work in quality.",
        "affirmative": "I work in quality.",
        "negative": "I don't work in...",
        "question": "What do you do?",
        "past": "",
        "future": ""
      },
      {
        "base": "I'm interested in AI.",
        "affirmative": "I'm interested in AI.",
        "negative": "I'm not interested in...",
        "question": "What are you interested in?",
        "past": "",
        "future": ""
      },
      {
        "base": "I like watching series.",
        "affirmative": "I like watching series.",
        "negative": "I don't like...",
        "question": "What do you like doing?",
        "past": "",
        "future": ""
      },
      {
        "base": "I want to travel.",
        "affirmative": "I want to travel.",
        "negative": "I don't want to...",
        "question": "What do you want to do?",
        "past": "",
        "future": ""
      }
    ],
    "questions": [
      {
        "q": "What's your name?",
        "sample": "My name is Tamires."
      },
      {
        "q": "Where are you from?",
        "sample": "I'm 23 years old."
      },
      {
        "q": "Where do you live?",
        "sample": "I'm from Brazil."
      },
      {
        "q": "What do you do?",
        "sample": "I live in Bahia."
      },
      {
        "q": "What are you interested in?",
        "sample": "I work with quality management."
      },
      {
        "q": "What do you like doing in your free time?",
        "sample": "I have a degree in Systems Analysis and Development."
      },
      {
        "q": "What kind of movies do you like?",
        "sample": "I'm interested in technology and artificial intelligence."
      },
      {
        "q": "Why are you learning English?",
        "sample": "I also like psychology and philosophy."
      },
      {
        "q": "What are your goals?",
        "sample": "I enjoy learning new things."
      },
      {
        "q": "What would you like to do internationally?",
        "sample": "I'm currently improving my English."
      },
      {
        "q": "What is something you are learning right now?",
        "sample": "I want to speak English without translating everything."
      },
      {
        "q": "What kind of people do you enjoy talking to?",
        "sample": "I like talking to people from other countries."
      },
      {
        "q": "What is something you want to improve?",
        "sample": "I prefer small groups."
      },
      {
        "q": "What makes you curious?",
        "sample": "I'm a little shy about making mistakes in English."
      },
      {
        "q": "Tell me something interesting about yourself.",
        "sample": "But I really want to improve."
      }
    ],
    "exercises": {
      "translate": [
        {
          "pt": "Meu nome é Tamires.",
          "answer": "My name is Tamires."
        },
        {
          "pt": "Eu tenho 23 anos.",
          "answer": "I'm 23 years old."
        },
        {
          "pt": "Eu sou do Brasil.",
          "answer": "I'm from Brazil."
        },
        {
          "pt": "Eu moro na Bahia.",
          "answer": "I live in Bahia."
        },
        {
          "pt": "Eu trabalho com gestão da qualidade.",
          "answer": "I work with quality management."
        },
        {
          "pt": "Eu sou formada em Análise e Desenvolvimento de Sistemas.",
          "answer": "I have a degree in Systems Analysis and Development."
        },
        {
          "pt": "Eu me interesso por tecnologia e inteligência artificial.",
          "answer": "I'm interested in technology and artificial intelligence."
        },
        {
          "pt": "Eu também gosto de psicologia e filosofia.",
          "answer": "I also like psychology and philosophy."
        }
      ],
      "fillBlank": [
        {
          "sentence": "I enjoy ___ new things.",
          "options": [
            "learning",
            "work",
            "like",
            "know"
          ],
          "answer": "learning"
        },
        {
          "sentence": "I'm currently ___ my English.",
          "options": [
            "improving",
            "work",
            "like",
            "know"
          ],
          "answer": "improving"
        },
        {
          "sentence": "I want ___ speak English without translating everything.",
          "options": [
            "to",
            "work",
            "like",
            "know"
          ],
          "answer": "to"
        },
        {
          "sentence": "I like ___ to people from other countries.",
          "options": [
            "talking",
            "work",
            "like",
            "know"
          ],
          "answer": "talking"
        },
        {
          "sentence": "I'm a ___ shy about making mistakes in English.",
          "options": [
            "little",
            "work",
            "like",
            "know"
          ],
          "answer": "little"
        },
        {
          "sentence": "But I ___ want to improve.",
          "options": [
            "really",
            "work",
            "like",
            "know"
          ],
          "answer": "really"
        }
      ],
      "multipleChoice": [
        {
          "q": "What does \"My favorite movie is Interstellar.\" mean?",
          "options": [
            "Meu filme favorito é Interestelar.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Meu filme favorito é Interestelar."
        },
        {
          "q": "What does \"I like suspense and science fiction.\" mean?",
          "options": [
            "Gosto de suspense e ficção científica.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Gosto de suspense e ficção científica."
        },
        {
          "q": "What does \"I'm curious about how things work.\" mean?",
          "options": [
            "Tenho curiosidade sobre como as coisas funcionam.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Tenho curiosidade sobre como as coisas funcionam."
        },
        {
          "q": "What does \"I like creating projects.\" mean?",
          "options": [
            "Gosto de criar projetos.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Gosto de criar projetos."
        },
        {
          "q": "What does \"I'm learning how to use AI tools.\" mean?",
          "options": [
            "Estou aprendendo a usar ferramentas de IA.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Estou aprendendo a usar ferramentas de IA."
        },
        {
          "q": "What does \"One of my goals is to work internationally.\" mean?",
          "options": [
            "Um dos meus objetivos é trabalhar internacionalmente.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Um dos meus objetivos é trabalhar internacionalmente."
        },
        {
          "q": "What does \"I want to travel and meet people from different cultures.\" mean?",
          "options": [
            "Quero viajar e conhecer pessoas de culturas diferentes.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Quero viajar e conhecer pessoas de culturas diferentes."
        },
        {
          "q": "What does \"I have many interests.\" mean?",
          "options": [
            "Tenho muitos interesses.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Tenho muitos interesses."
        }
      ],
      "rearrange": [
        {
          "scrambled": [
            "Tamires",
            "is",
            "name",
            "My"
          ],
          "answer": "My name is Tamires"
        },
        {
          "scrambled": [
            "old",
            "years",
            "23",
            "I'm"
          ],
          "answer": "I'm 23 years old"
        },
        {
          "scrambled": [
            "Bahia",
            "in",
            "live",
            "I"
          ],
          "answer": "I live in Bahia"
        },
        {
          "scrambled": [
            "management",
            "quality",
            "with",
            "work",
            "I"
          ],
          "answer": "I work with quality management"
        },
        {
          "scrambled": [
            "Development",
            "and",
            "Analysis",
            "Systems",
            "in",
            "degree",
            "a",
            "have",
            "I"
          ],
          "answer": "I have a degree in Systems Analysis and Development"
        },
        {
          "scrambled": [
            "intelligence",
            "artificial",
            "and",
            "technology",
            "in",
            "interested",
            "I'm"
          ],
          "answer": "I'm interested in technology and artificial intelligence"
        },
        {
          "scrambled": [
            "philosophy",
            "and",
            "psychology",
            "like",
            "also",
            "I"
          ],
          "answer": "I also like psychology and philosophy"
        }
      ],
      "listening": [
        {
          "audio": "My name is Tamires.",
          "options": [
            "My name is Tamires.",
            "I'm 23 years old.",
            "I'm from Brazil."
          ],
          "answer": "My name is Tamires."
        },
        {
          "audio": "I'm 23 years old.",
          "options": [
            "I'm 23 years old.",
            "I'm from Brazil.",
            "I live in Bahia."
          ],
          "answer": "I'm 23 years old."
        },
        {
          "audio": "I'm from Brazil.",
          "options": [
            "I'm from Brazil.",
            "I live in Bahia.",
            "I work with quality management."
          ],
          "answer": "I'm from Brazil."
        },
        {
          "audio": "I live in Bahia.",
          "options": [
            "I live in Bahia.",
            "I work with quality management.",
            "I have a degree in Systems Analysis and Development."
          ],
          "answer": "I live in Bahia."
        },
        {
          "audio": "I work with quality management.",
          "options": [
            "I work with quality management.",
            "I have a degree in Systems Analysis and Development.",
            "I'm interested in technology and artificial intelligence."
          ],
          "answer": "I work with quality management."
        },
        {
          "audio": "I have a degree in Systems Analysis and Development.",
          "options": [
            "I have a degree in Systems Analysis and Development.",
            "I'm interested in technology and artificial intelligence.",
            "I also like psychology and philosophy."
          ],
          "answer": "I have a degree in Systems Analysis and Development."
        },
        {
          "audio": "I'm interested in technology and artificial intelligence.",
          "options": [
            "I'm interested in technology and artificial intelligence.",
            "I also like psychology and philosophy.",
            "I enjoy learning new things."
          ],
          "answer": "I'm interested in technology and artificial intelligence."
        },
        {
          "audio": "I also like psychology and philosophy.",
          "options": [
            "I also like psychology and philosophy.",
            "I enjoy learning new things.",
            "I'm currently improving my English."
          ],
          "answer": "I also like psychology and philosophy."
        }
      ]
    },
    "speakingSentences": [
      "My name is Tamires.",
      "I'm 23 years old.",
      "I'm from Brazil.",
      "I live in Bahia.",
      "I work with quality management.",
      "I have a degree in Systems Analysis and Development.",
      "I'm interested in technology and artificial intelligence.",
      "I also like psychology and philosophy."
    ],
    "talkPrompts": [
      "What's your name?",
      "Where are you from?",
      "Where do you live?",
      "What do you do?",
      "What are you interested in?",
      "What do you like doing in your free time?",
      "What kind of movies do you like?",
      "Why are you learning English?"
    ],
    "reading": []
  },
  {
    "id": "island02",
    "number": 2,
    "name": "My Everyday Life",
    "emoji": "🌅",
    "description": "Describe your routine, habits, schedule and everyday situations.",
    "unlockedByDefault": false,
    "goal": "Describe your routine and everyday activities.",
    "vocabulary": [
      {
        "en": "routine",
        "pt": "rotina",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "morning",
        "pt": "manhã",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "afternoon",
        "pt": "tarde",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "evening",
        "pt": "noite/início da noite",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "night",
        "pt": "noite",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "wake up",
        "pt": "acordar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "get up",
        "pt": "levantar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "sleep",
        "pt": "dormir",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "breakfast",
        "pt": "café da manhã",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "lunch",
        "pt": "almoço",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "dinner",
        "pt": "jantar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "snack",
        "pt": "lanche",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "hungry",
        "pt": "com fome",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "tired",
        "pt": "cansado",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "busy",
        "pt": "ocupado",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "free time",
        "pt": "tempo livre",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "usually",
        "pt": "geralmente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "sometimes",
        "pt": "às vezes",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "often",
        "pt": "frequentemente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "rarely",
        "pt": "raramente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "early",
        "pt": "cedo",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "late",
        "pt": "tarde",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "right now",
        "pt": "agora",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "already",
        "pt": "já",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "yet",
        "pt": "ainda/já",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "break",
        "pt": "pausa",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "housework",
        "pt": "tarefas de casa",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "relax",
        "pt": "relaxar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "schedule",
        "pt": "horário/agenda",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "habit",
        "pt": "hábito",
        "approx": "",
        "ipa": ""
      }
    ],
    "coreSentences": [
      {
        "en": "I usually wake up late.",
        "pt": "Geralmente acordo tarde."
      },
      {
        "en": "I have coffee in the morning.",
        "pt": "Tomo café de manhã."
      },
      {
        "en": "I usually eat breakfast at home.",
        "pt": "Geralmente tomo café da manhã em casa."
      },
      {
        "en": "What are you doing right now?",
        "pt": "O que você está fazendo agora?"
      },
      {
        "en": "I'm working on my computer.",
        "pt": "Estou trabalhando no computador."
      },
      {
        "en": "I'm taking a break.",
        "pt": "Estou fazendo uma pausa."
      },
      {
        "en": "I haven't eaten yet.",
        "pt": "Ainda não comi."
      },
      {
        "en": "I'm hungry, but I don't feel like cooking.",
        "pt": "Estou com fome, mas não estou com vontade de cozinhar."
      },
      {
        "en": "I usually study at night.",
        "pt": "Geralmente estudo à noite."
      },
      {
        "en": "I sometimes stay up late.",
        "pt": "Às vezes fico acordada até tarde."
      },
      {
        "en": "I need to fix my sleep schedule.",
        "pt": "Preciso consertar meu horário de sono."
      },
      {
        "en": "I have a lot to do today.",
        "pt": "Tenho muita coisa para fazer hoje."
      },
      {
        "en": "I'm busy right now.",
        "pt": "Estou ocupada agora."
      },
      {
        "en": "I'm free this evening.",
        "pt": "Estou livre esta noite."
      },
      {
        "en": "I usually take a break after lunch.",
        "pt": "Geralmente faço uma pausa depois do almoço."
      },
      {
        "en": "I'm feeling tired today.",
        "pt": "Estou me sentindo cansada hoje."
      },
      {
        "en": "I don't have much energy today.",
        "pt": "Não estou com muita energia hoje."
      },
      {
        "en": "I like having a quiet morning.",
        "pt": "Gosto de ter uma manhã tranquila."
      },
      {
        "en": "I spend a lot of time on my computer.",
        "pt": "Passo muito tempo no computador."
      },
      {
        "en": "I usually watch something before bed.",
        "pt": "Geralmente assisto a alguma coisa antes de dormir."
      },
      {
        "en": "What time do you usually go to bed?",
        "pt": "Que horas você geralmente vai dormir?"
      },
      {
        "en": "I haven't finished it yet.",
        "pt": "Ainda não terminei."
      },
      {
        "en": "I'll do it later.",
        "pt": "Vou fazer isso mais tarde."
      },
      {
        "en": "I'm just relaxing.",
        "pt": "Só estou relaxando."
      },
      {
        "en": "That's part of my routine.",
        "pt": "Isso faz parte da minha rotina."
      }
    ],
    "patterns": [
      {
        "title": "I usually + verb",
        "examples": [
          "I usually study at night.",
          "What do you usually do?"
        ],
        "variationBank": [
          "I usually study at night.",
          "I don't usually...",
          "What do you usually do?"
        ]
      },
      {
        "title": "I'm + -ing",
        "examples": [
          "I'm working right now.",
          "What are you doing?"
        ],
        "variationBank": [
          "I'm working right now.",
          "I'm not working right now.",
          "What are you doing?"
        ]
      },
      {
        "title": "I haven't + past participle + yet",
        "examples": [
          "I haven't eaten yet.",
          "Have you finished yet?"
        ],
        "variationBank": [
          "I haven't eaten yet.",
          "I haven't finished yet.",
          "Have you finished yet?"
        ]
      },
      {
        "title": "I need to + verb",
        "examples": [
          "I need to study.",
          "What do you need to do?"
        ],
        "variationBank": [
          "I need to study.",
          "I don't need to...",
          "What do you need to do?"
        ]
      },
      {
        "title": "I have to + verb",
        "examples": [
          "I have to work.",
          "What do you have to do?"
        ],
        "variationBank": [
          "I have to work.",
          "I don't have to...",
          "What do you have to do?"
        ]
      },
      {
        "title": "I like + -ing",
        "examples": [
          "I like watching shows.",
          "What do you like doing?"
        ],
        "variationBank": [
          "I like watching shows.",
          "I don't like...",
          "What do you like doing?"
        ]
      },
      {
        "title": "I often/sometimes/rarely + verb",
        "examples": [
          "I sometimes stay up late.",
          "How often do you...?"
        ],
        "variationBank": [
          "I sometimes stay up late.",
          "I rarely...",
          "How often do you...?"
        ]
      },
      {
        "title": "What time do you + verb?",
        "examples": [
          "What time do you wake up?",
          "What time do you usually...?"
        ],
        "variationBank": [
          "What time do you wake up?",
          "What time don't you...?",
          "What time do you usually...?"
        ]
      }
    ],
    "variations": [
      {
        "base": "I usually study at night.",
        "affirmative": "I usually study at night.",
        "negative": "I don't usually...",
        "question": "What do you usually do?",
        "past": "",
        "future": ""
      },
      {
        "base": "I'm working right now.",
        "affirmative": "I'm working right now.",
        "negative": "I'm not working right now.",
        "question": "What are you doing?",
        "past": "",
        "future": ""
      },
      {
        "base": "I haven't eaten yet.",
        "affirmative": "I haven't eaten yet.",
        "negative": "I haven't finished yet.",
        "question": "Have you finished yet?",
        "past": "",
        "future": ""
      },
      {
        "base": "I need to study.",
        "affirmative": "I need to study.",
        "negative": "I don't need to...",
        "question": "What do you need to do?",
        "past": "",
        "future": ""
      },
      {
        "base": "I have to work.",
        "affirmative": "I have to work.",
        "negative": "I don't have to...",
        "question": "What do you have to do?",
        "past": "",
        "future": ""
      }
    ],
    "questions": [
      {
        "q": "What time do you usually wake up?",
        "sample": "I usually wake up late."
      },
      {
        "q": "What do you usually do in the morning?",
        "sample": "I have coffee in the morning."
      },
      {
        "q": "What do you eat for breakfast?",
        "sample": "I usually eat breakfast at home."
      },
      {
        "q": "What are you doing right now?",
        "sample": "What are you doing right now?"
      },
      {
        "q": "What do you usually do at night?",
        "sample": "I'm working on my computer."
      },
      {
        "q": "What time do you usually go to bed?",
        "sample": "I'm taking a break."
      },
      {
        "q": "How often do you study English?",
        "sample": "I haven't eaten yet."
      },
      {
        "q": "What do you do when you're tired?",
        "sample": "I'm hungry, but I don't feel like cooking."
      },
      {
        "q": "What do you do when you're bored?",
        "sample": "I usually study at night."
      },
      {
        "q": "What is your favorite part of the day?",
        "sample": "I sometimes stay up late."
      },
      {
        "q": "Do you prefer mornings or nights? Why?",
        "sample": "I need to fix my sleep schedule."
      },
      {
        "q": "What habit would you like to change?",
        "sample": "I have a lot to do today."
      },
      {
        "q": "How do you organize your day?",
        "sample": "I'm busy right now."
      },
      {
        "q": "What do you usually do on weekends?",
        "sample": "I'm free this evening."
      },
      {
        "q": "Describe a normal day in your life.",
        "sample": "I usually take a break after lunch."
      }
    ],
    "exercises": {
      "translate": [
        {
          "pt": "Geralmente acordo tarde.",
          "answer": "I usually wake up late."
        },
        {
          "pt": "Tomo café de manhã.",
          "answer": "I have coffee in the morning."
        },
        {
          "pt": "Geralmente tomo café da manhã em casa.",
          "answer": "I usually eat breakfast at home."
        },
        {
          "pt": "O que você está fazendo agora?",
          "answer": "What are you doing right now?"
        },
        {
          "pt": "Estou trabalhando no computador.",
          "answer": "I'm working on my computer."
        },
        {
          "pt": "Estou fazendo uma pausa.",
          "answer": "I'm taking a break."
        },
        {
          "pt": "Ainda não comi.",
          "answer": "I haven't eaten yet."
        },
        {
          "pt": "Estou com fome, mas não estou com vontade de cozinhar.",
          "answer": "I'm hungry, but I don't feel like cooking."
        }
      ],
      "fillBlank": [
        {
          "sentence": "I usually ___ at night.",
          "options": [
            "study",
            "work",
            "like",
            "know"
          ],
          "answer": "study"
        },
        {
          "sentence": "I sometimes ___ up late.",
          "options": [
            "stay",
            "work",
            "like",
            "know"
          ],
          "answer": "stay"
        },
        {
          "sentence": "I need ___ fix my sleep schedule.",
          "options": [
            "to",
            "work",
            "like",
            "know"
          ],
          "answer": "to"
        },
        {
          "sentence": "I have ___ lot to do today.",
          "options": [
            "a",
            "work",
            "like",
            "know"
          ],
          "answer": "a"
        },
        {
          "sentence": "I usually ___ a break after lunch.",
          "options": [
            "take",
            "work",
            "like",
            "know"
          ],
          "answer": "take"
        }
      ],
      "multipleChoice": [
        {
          "q": "What does \"I don't have much energy today.\" mean?",
          "options": [
            "Não estou com muita energia hoje.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Não estou com muita energia hoje."
        },
        {
          "q": "What does \"I like having a quiet morning.\" mean?",
          "options": [
            "Gosto de ter uma manhã tranquila.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Gosto de ter uma manhã tranquila."
        },
        {
          "q": "What does \"I spend a lot of time on my computer.\" mean?",
          "options": [
            "Passo muito tempo no computador.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Passo muito tempo no computador."
        },
        {
          "q": "What does \"I usually watch something before bed.\" mean?",
          "options": [
            "Geralmente assisto a alguma coisa antes de dormir.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Geralmente assisto a alguma coisa antes de dormir."
        },
        {
          "q": "What does \"What time do you usually go to bed?\" mean?",
          "options": [
            "Que horas você geralmente vai dormir?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Que horas você geralmente vai dormir?"
        },
        {
          "q": "What does \"I haven't finished it yet.\" mean?",
          "options": [
            "Ainda não terminei.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Ainda não terminei."
        },
        {
          "q": "What does \"I'll do it later.\" mean?",
          "options": [
            "Vou fazer isso mais tarde.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Vou fazer isso mais tarde."
        },
        {
          "q": "What does \"I'm just relaxing.\" mean?",
          "options": [
            "Só estou relaxando.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Só estou relaxando."
        }
      ],
      "rearrange": [
        {
          "scrambled": [
            "late",
            "up",
            "wake",
            "usually",
            "I"
          ],
          "answer": "I usually wake up late"
        },
        {
          "scrambled": [
            "morning",
            "the",
            "in",
            "coffee",
            "have",
            "I"
          ],
          "answer": "I have coffee in the morning"
        },
        {
          "scrambled": [
            "home",
            "at",
            "breakfast",
            "eat",
            "usually",
            "I"
          ],
          "answer": "I usually eat breakfast at home"
        },
        {
          "scrambled": [
            "now",
            "right",
            "doing",
            "you",
            "are",
            "What"
          ],
          "answer": "What are you doing right now"
        },
        {
          "scrambled": [
            "computer",
            "my",
            "on",
            "working",
            "I'm"
          ],
          "answer": "I'm working on my computer"
        },
        {
          "scrambled": [
            "break",
            "a",
            "taking",
            "I'm"
          ],
          "answer": "I'm taking a break"
        },
        {
          "scrambled": [
            "yet",
            "eaten",
            "haven't",
            "I"
          ],
          "answer": "I haven't eaten yet"
        },
        {
          "scrambled": [
            "cooking",
            "like",
            "feel",
            "don't",
            "I",
            "but",
            "hungry",
            "I'm"
          ],
          "answer": "I'm hungry, but I don't feel like cooking"
        }
      ],
      "listening": [
        {
          "audio": "I usually wake up late.",
          "options": [
            "I usually wake up late.",
            "I have coffee in the morning.",
            "I usually eat breakfast at home."
          ],
          "answer": "I usually wake up late."
        },
        {
          "audio": "I have coffee in the morning.",
          "options": [
            "I have coffee in the morning.",
            "I usually eat breakfast at home.",
            "What are you doing right now?"
          ],
          "answer": "I have coffee in the morning."
        },
        {
          "audio": "I usually eat breakfast at home.",
          "options": [
            "I usually eat breakfast at home.",
            "What are you doing right now?",
            "I'm working on my computer."
          ],
          "answer": "I usually eat breakfast at home."
        },
        {
          "audio": "What are you doing right now?",
          "options": [
            "What are you doing right now?",
            "I'm working on my computer.",
            "I'm taking a break."
          ],
          "answer": "What are you doing right now?"
        },
        {
          "audio": "I'm working on my computer.",
          "options": [
            "I'm working on my computer.",
            "I'm taking a break.",
            "I haven't eaten yet."
          ],
          "answer": "I'm working on my computer."
        },
        {
          "audio": "I'm taking a break.",
          "options": [
            "I'm taking a break.",
            "I haven't eaten yet.",
            "I'm hungry, but I don't feel like cooking."
          ],
          "answer": "I'm taking a break."
        },
        {
          "audio": "I haven't eaten yet.",
          "options": [
            "I haven't eaten yet.",
            "I'm hungry, but I don't feel like cooking.",
            "I usually study at night."
          ],
          "answer": "I haven't eaten yet."
        },
        {
          "audio": "I'm hungry, but I don't feel like cooking.",
          "options": [
            "I'm hungry, but I don't feel like cooking.",
            "I usually study at night.",
            "I sometimes stay up late."
          ],
          "answer": "I'm hungry, but I don't feel like cooking."
        }
      ]
    },
    "speakingSentences": [
      "I usually wake up late.",
      "I have coffee in the morning.",
      "I usually eat breakfast at home.",
      "What are you doing right now?",
      "I'm working on my computer.",
      "I'm taking a break.",
      "I haven't eaten yet.",
      "I'm hungry, but I don't feel like cooking."
    ],
    "talkPrompts": [
      "What time do you usually wake up?",
      "What do you usually do in the morning?",
      "What do you eat for breakfast?",
      "What are you doing right now?",
      "What do you usually do at night?",
      "What time do you usually go to bed?",
      "How often do you study English?",
      "What do you do when you're tired?"
    ],
    "reading": []
  },
  {
    "id": "island03",
    "number": 3,
    "name": "Friends & Discord",
    "emoji": "🎧",
    "description": "Start, maintain and repair conversations with international friends.",
    "unlockedByDefault": false,
    "goal": "Survive and enjoy a 1-hour Discord conversation.",
    "vocabulary": [
      {
        "en": "Discord",
        "pt": "Discord",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "friend",
        "pt": "amigo",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "voice channel",
        "pt": "canal de voz",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "chat",
        "pt": "conversa/chat",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "conversation",
        "pt": "conversa",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to join",
        "pt": "entrar/participar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to leave",
        "pt": "sair",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to hang out",
        "pt": "passar tempo junto",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "what's up",
        "pt": "e aí",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "not much",
        "pt": "nada demais",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "by the way",
        "pt": "a propósito",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "really",
        "pt": "sério/realmente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "actually",
        "pt": "na verdade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "exactly",
        "pt": "exatamente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "maybe",
        "pt": "talvez",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "I mean",
        "pt": "quer dizer",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "I guess",
        "pt": "acho que",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to understand",
        "pt": "entender",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to repeat",
        "pt": "repetir",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to explain",
        "pt": "explicar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "to catch",
        "pt": "entender/captar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "slowly",
        "pt": "devagar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "faster",
        "pt": "mais rápido",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "awkward",
        "pt": "constrangedor",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "funny",
        "pt": "engraçado",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "joke",
        "pt": "piada",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "random",
        "pt": "aleatório",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "topic",
        "pt": "assunto",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "conversation starter",
        "pt": "iniciador de conversa",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "follow-up",
        "pt": "pergunta de continuação",
        "approx": "",
        "ipa": ""
      }
    ],
    "coreSentences": [
      {
        "en": "Hey, what's up?",
        "pt": "E aí, tudo bem?"
      },
      {
        "en": "Not much. What about you?",
        "pt": "Nada demais. E você?"
      },
      {
        "en": "I'm just chilling.",
        "pt": "Só estou de boa."
      },
      {
        "en": "I just joined the server.",
        "pt": "Acabei de entrar no servidor."
      },
      {
        "en": "Nice to meet you.",
        "pt": "Prazer em conhecer você."
      },
      {
        "en": "How's your day going?",
        "pt": "Como está seu dia?"
      },
      {
        "en": "What have you been up to?",
        "pt": "O que você tem feito?"
      },
      {
        "en": "What are you guys talking about?",
        "pt": "Sobre o que vocês estão falando?"
      },
      {
        "en": "I didn't catch that.",
        "pt": "Não entendi/captei isso."
      },
      {
        "en": "Could you say that again?",
        "pt": "Pode falar isso de novo?"
      },
      {
        "en": "Could you speak a little slower?",
        "pt": "Pode falar um pouco mais devagar?"
      },
      {
        "en": "What does that mean?",
        "pt": "O que isso significa?"
      },
      {
        "en": "I'm still learning English.",
        "pt": "Ainda estou aprendendo inglês."
      },
      {
        "en": "I understand, but you speak really fast.",
        "pt": "Eu entendo, mas você fala muito rápido."
      },
      {
        "en": "Give me a second.",
        "pt": "Me dá um segundo."
      },
      {
        "en": "I know what you mean.",
        "pt": "Eu sei o que você quer dizer."
      },
      {
        "en": "That makes sense.",
        "pt": "Isso faz sentido."
      },
      {
        "en": "Really? Tell me more.",
        "pt": "Sério? Me conta mais."
      },
      {
        "en": "No way!",
        "pt": "Não acredito!"
      },
      {
        "en": "That's funny.",
        "pt": "Isso é engraçado."
      },
      {
        "en": "By the way, where are you from?",
        "pt": "A propósito, de onde você é?"
      },
      {
        "en": "What do you usually do for fun?",
        "pt": "O que você costuma fazer para se divertir?"
      },
      {
        "en": "Do you play any games?",
        "pt": "Você joga algum jogo?"
      },
      {
        "en": "I'm going to grab some water.",
        "pt": "Vou pegar um pouco de água."
      },
      {
        "en": "I'll be back in a minute.",
        "pt": "Já volto em um minuto."
      }
    ],
    "patterns": [
      {
        "title": "What's up? + response",
        "examples": [
          "Not much. What about you?",
          "What's up?"
        ],
        "variationBank": [
          "Not much. What about you?",
          "Not much.",
          "What's up?"
        ]
      },
      {
        "title": "I'm + -ing",
        "examples": [
          "I'm just chilling.",
          "What are you doing?"
        ],
        "variationBank": [
          "I'm just chilling.",
          "I'm not...",
          "What are you doing?"
        ]
      },
      {
        "title": "I didn't + verb",
        "examples": [
          "I didn't catch that.",
          "What did you say?"
        ],
        "variationBank": [
          "I didn't catch that.",
          "I didn't understand.",
          "What did you say?"
        ]
      },
      {
        "title": "Could you + verb?",
        "examples": [
          "Could you say that again?",
          "Could you help me?"
        ],
        "variationBank": [
          "Could you say that again?",
          "Could you not...?",
          "Could you help me?"
        ]
      },
      {
        "title": "What does + word + mean?",
        "examples": [
          "What does that mean?",
          "What does X mean?"
        ],
        "variationBank": [
          "What does that mean?",
          "I don't know what it means.",
          "What does X mean?"
        ]
      },
      {
        "title": "By the way, + question",
        "examples": [
          "By the way, where are you from?",
          "By the way, ...?"
        ],
        "variationBank": [
          "By the way, where are you from?",
          "—",
          "By the way, ...?"
        ]
      },
      {
        "title": "I know what you mean.",
        "examples": [
          "I know what you mean.",
          "Do you know what I mean?"
        ],
        "variationBank": [
          "I know what you mean.",
          "I don't know what you mean.",
          "Do you know what I mean?"
        ]
      },
      {
        "title": "That sounds + adjective",
        "examples": [
          "That sounds interesting.",
          "How does it sound?"
        ],
        "variationBank": [
          "That sounds interesting.",
          "That doesn't sound...",
          "How does it sound?"
        ]
      }
    ],
    "variations": [
      {
        "base": "Not much. What about you?",
        "affirmative": "Not much. What about you?",
        "negative": "Not much.",
        "question": "What's up?",
        "past": "",
        "future": ""
      },
      {
        "base": "I'm just chilling.",
        "affirmative": "I'm just chilling.",
        "negative": "I'm not...",
        "question": "What are you doing?",
        "past": "",
        "future": ""
      },
      {
        "base": "I didn't catch that.",
        "affirmative": "I didn't catch that.",
        "negative": "I didn't understand.",
        "question": "What did you say?",
        "past": "",
        "future": ""
      },
      {
        "base": "Could you say that again?",
        "affirmative": "Could you say that again?",
        "negative": "Could you not...?",
        "question": "Could you help me?",
        "past": "",
        "future": ""
      },
      {
        "base": "What does that mean?",
        "affirmative": "What does that mean?",
        "negative": "I don't know what it means.",
        "question": "What does X mean?",
        "past": "",
        "future": ""
      }
    ],
    "questions": [
      {
        "q": "What's up?",
        "sample": "Hey, what's up?"
      },
      {
        "q": "How's your day going?",
        "sample": "Not much. What about you?"
      },
      {
        "q": "Where are you from?",
        "sample": "I'm just chilling."
      },
      {
        "q": "What have you been up to?",
        "sample": "I just joined the server."
      },
      {
        "q": "What are you guys talking about?",
        "sample": "Nice to meet you."
      },
      {
        "q": "How did you find this server?",
        "sample": "How's your day going?"
      },
      {
        "q": "What do you usually do for fun?",
        "sample": "What have you been up to?"
      },
      {
        "q": "Do you play any games?",
        "sample": "What are you guys talking about?"
      },
      {
        "q": "What kind of music do you like?",
        "sample": "I didn't catch that."
      },
      {
        "q": "What shows are you watching?",
        "sample": "Could you say that again?"
      },
      {
        "q": "What does that word mean?",
        "sample": "Could you speak a little slower?"
      },
      {
        "q": "Could you say that again?",
        "sample": "What does that mean?"
      },
      {
        "q": "Why did you decide to learn English?",
        "sample": "I'm still learning English."
      },
      {
        "q": "What do you usually talk about with your friends?",
        "sample": "I understand, but you speak really fast."
      },
      {
        "q": "How would you keep a conversation going for ten minutes?",
        "sample": "Give me a second."
      }
    ],
    "exercises": {
      "translate": [
        {
          "pt": "E aí, tudo bem?",
          "answer": "Hey, what's up?"
        },
        {
          "pt": "Nada demais. E você?",
          "answer": "Not much. What about you?"
        },
        {
          "pt": "Só estou de boa.",
          "answer": "I'm just chilling."
        },
        {
          "pt": "Acabei de entrar no servidor.",
          "answer": "I just joined the server."
        },
        {
          "pt": "Prazer em conhecer você.",
          "answer": "Nice to meet you."
        },
        {
          "pt": "Como está seu dia?",
          "answer": "How's your day going?"
        },
        {
          "pt": "O que você tem feito?",
          "answer": "What have you been up to?"
        },
        {
          "pt": "Sobre o que vocês estão falando?",
          "answer": "What are you guys talking about?"
        }
      ],
      "fillBlank": [
        {
          "sentence": "Could you ___ that again?",
          "options": [
            "say",
            "work",
            "like",
            "know"
          ],
          "answer": "say"
        },
        {
          "sentence": "Could you ___ a little slower?",
          "options": [
            "speak",
            "work",
            "like",
            "know"
          ],
          "answer": "speak"
        },
        {
          "sentence": "I understand, ___ you speak really fast.",
          "options": [
            "but",
            "work",
            "like",
            "know"
          ],
          "answer": "but"
        },
        {
          "sentence": "I know ___ you mean.",
          "options": [
            "what",
            "work",
            "like",
            "know"
          ],
          "answer": "what"
        }
      ],
      "multipleChoice": [
        {
          "q": "What does \"That makes sense.\" mean?",
          "options": [
            "Isso faz sentido.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Isso faz sentido."
        },
        {
          "q": "What does \"Really? Tell me more.\" mean?",
          "options": [
            "Sério? Me conta mais.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Sério? Me conta mais."
        },
        {
          "q": "What does \"No way!\" mean?",
          "options": [
            "Não acredito!",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Não acredito!"
        },
        {
          "q": "What does \"That's funny.\" mean?",
          "options": [
            "Isso é engraçado.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Isso é engraçado."
        },
        {
          "q": "What does \"By the way, where are you from?\" mean?",
          "options": [
            "A propósito, de onde você é?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "A propósito, de onde você é?"
        },
        {
          "q": "What does \"What do you usually do for fun?\" mean?",
          "options": [
            "O que você costuma fazer para se divertir?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "O que você costuma fazer para se divertir?"
        },
        {
          "q": "What does \"Do you play any games?\" mean?",
          "options": [
            "Você joga algum jogo?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Você joga algum jogo?"
        },
        {
          "q": "What does \"I'm going to grab some water.\" mean?",
          "options": [
            "Vou pegar um pouco de água.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Vou pegar um pouco de água."
        }
      ],
      "rearrange": [
        {
          "scrambled": [
            "you",
            "about",
            "What",
            "much",
            "Not"
          ],
          "answer": "Not much. What about you"
        },
        {
          "scrambled": [
            "server",
            "the",
            "joined",
            "just",
            "I"
          ],
          "answer": "I just joined the server"
        },
        {
          "scrambled": [
            "you",
            "meet",
            "to",
            "Nice"
          ],
          "answer": "Nice to meet you"
        },
        {
          "scrambled": [
            "going",
            "day",
            "your",
            "How's"
          ],
          "answer": "How's your day going"
        },
        {
          "scrambled": [
            "to",
            "up",
            "been",
            "you",
            "have",
            "What"
          ],
          "answer": "What have you been up to"
        },
        {
          "scrambled": [
            "about",
            "talking",
            "guys",
            "you",
            "are",
            "What"
          ],
          "answer": "What are you guys talking about"
        }
      ],
      "listening": [
        {
          "audio": "Hey, what's up?",
          "options": [
            "Hey, what's up?",
            "Not much. What about you?",
            "I'm just chilling."
          ],
          "answer": "Hey, what's up?"
        },
        {
          "audio": "Not much. What about you?",
          "options": [
            "Not much. What about you?",
            "I'm just chilling.",
            "I just joined the server."
          ],
          "answer": "Not much. What about you?"
        },
        {
          "audio": "I'm just chilling.",
          "options": [
            "I'm just chilling.",
            "I just joined the server.",
            "Nice to meet you."
          ],
          "answer": "I'm just chilling."
        },
        {
          "audio": "I just joined the server.",
          "options": [
            "I just joined the server.",
            "Nice to meet you.",
            "How's your day going?"
          ],
          "answer": "I just joined the server."
        },
        {
          "audio": "Nice to meet you.",
          "options": [
            "Nice to meet you.",
            "How's your day going?",
            "What have you been up to?"
          ],
          "answer": "Nice to meet you."
        },
        {
          "audio": "How's your day going?",
          "options": [
            "How's your day going?",
            "What have you been up to?",
            "What are you guys talking about?"
          ],
          "answer": "How's your day going?"
        },
        {
          "audio": "What have you been up to?",
          "options": [
            "What have you been up to?",
            "What are you guys talking about?",
            "I didn't catch that."
          ],
          "answer": "What have you been up to?"
        },
        {
          "audio": "What are you guys talking about?",
          "options": [
            "What are you guys talking about?",
            "I didn't catch that.",
            "Could you say that again?"
          ],
          "answer": "What are you guys talking about?"
        }
      ]
    },
    "speakingSentences": [
      "Hey, what's up?",
      "Not much. What about you?",
      "I'm just chilling.",
      "I just joined the server.",
      "Nice to meet you.",
      "How's your day going?",
      "What have you been up to?",
      "What are you guys talking about?"
    ],
    "talkPrompts": [
      "What's up?",
      "How's your day going?",
      "Where are you from?",
      "What have you been up to?",
      "What are you guys talking about?",
      "How did you find this server?",
      "What do you usually do for fun?",
      "Do you play any games?"
    ],
    "reading": []
  },
  {
    "id": "island04",
    "number": 4,
    "name": "Stories & Experiences",
    "emoji": "📖",
    "description": "Tell stories, describe experiences and talk about what happened.",
    "unlockedByDefault": false,
    "goal": "Tell clear stories about past experiences.",
    "vocabulary": [
      {
        "en": "story",
        "pt": "história",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "experience",
        "pt": "experiência",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "memory",
        "pt": "memória/lembrança",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "childhood",
        "pt": "infância",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "past",
        "pt": "passado",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "once",
        "pt": "uma vez",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "suddenly",
        "pt": "de repente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "then",
        "pt": "então/depois",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "while",
        "pt": "enquanto",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "before",
        "pt": "antes",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "after",
        "pt": "depois",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "first",
        "pt": "primeiro",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "finally",
        "pt": "finalmente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "happen",
        "pt": "acontecer",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "happened",
        "pt": "aconteceu",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "feel",
        "pt": "sentir",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "felt",
        "pt": "sentiu",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "realize",
        "pt": "perceber",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "decide",
        "pt": "decidir",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "try",
        "pt": "tentar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "fail",
        "pt": "falhar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "succeed",
        "pt": "ter sucesso",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "remember",
        "pt": "lembrar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "forget",
        "pt": "esquecer",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "learn",
        "pt": "aprender",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "mistake",
        "pt": "erro",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "lesson",
        "pt": "lição",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "challenge",
        "pt": "desafio",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "unexpected",
        "pt": "inesperado",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "embarrassing",
        "pt": "constrangedor",
        "approx": "",
        "ipa": ""
      }
    ],
    "coreSentences": [
      {
        "en": "Last year, I worked on a big project.",
        "pt": "No ano passado, trabalhei em um projeto grande."
      },
      {
        "en": "Something unexpected happened.",
        "pt": "Algo inesperado aconteceu."
      },
      {
        "en": "At first, I didn't know what to do.",
        "pt": "No começo, eu não sabia o que fazer."
      },
      {
        "en": "Then I realized I had a problem.",
        "pt": "Então percebi que tinha um problema."
      },
      {
        "en": "I decided to ask for help.",
        "pt": "Decidi pedir ajuda."
      },
      {
        "en": "We talked about the problem.",
        "pt": "Nós conversamos sobre o problema."
      },
      {
        "en": "In the end, we found a solution.",
        "pt": "No fim, encontramos uma solução."
      },
      {
        "en": "I learned a lot from that experience.",
        "pt": "Aprendi muito com essa experiência."
      },
      {
        "en": "When I was younger, I liked different things.",
        "pt": "Quando eu era mais nova, eu gostava de coisas diferentes."
      },
      {
        "en": "I remember that day very clearly.",
        "pt": "Lembro daquele dia com muita clareza."
      },
      {
        "en": "I made a mistake, but I learned from it.",
        "pt": "Cometi um erro, mas aprendi com ele."
      },
      {
        "en": "I've had some difficult experiences.",
        "pt": "Já tive algumas experiências difíceis."
      },
      {
        "en": "One of the funniest things happened by accident.",
        "pt": "Uma das coisas mais engraçadas aconteceu por acidente."
      },
      {
        "en": "I didn't expect that to happen.",
        "pt": "Eu não esperava que aquilo acontecesse."
      },
      {
        "en": "Suddenly, everything changed.",
        "pt": "De repente, tudo mudou."
      },
      {
        "en": "After that, I became more careful.",
        "pt": "Depois disso, fiquei mais cuidadosa."
      },
      {
        "en": "Before that, I had never done it.",
        "pt": "Antes disso, eu nunca tinha feito aquilo."
      },
      {
        "en": "I've never forgotten that experience.",
        "pt": "Nunca esqueci aquela experiência."
      },
      {
        "en": "It was embarrassing at the time.",
        "pt": "Foi constrangedor na época."
      },
      {
        "en": "Now I can laugh about it.",
        "pt": "Agora consigo rir disso."
      },
      {
        "en": "What happened next?",
        "pt": "O que aconteceu depois?"
      },
      {
        "en": "What did you learn from it?",
        "pt": "O que você aprendeu com isso?"
      },
      {
        "en": "Have you ever experienced something similar?",
        "pt": "Você já passou por algo parecido?"
      },
      {
        "en": "That reminds me of something that happened to me.",
        "pt": "Isso me lembra algo que aconteceu comigo."
      },
      {
        "en": "Let me tell you what happened.",
        "pt": "Deixa eu te contar o que aconteceu."
      }
    ],
    "patterns": [
      {
        "title": "First, + event",
        "examples": [
          "First, I arrived at work.",
          "What happened first?"
        ],
        "variationBank": [
          "First, I arrived at work.",
          "First, I didn't...",
          "What happened first?"
        ]
      },
      {
        "title": "Then, + event",
        "examples": [
          "Then, we found a problem.",
          "What happened then?"
        ],
        "variationBank": [
          "Then, we found a problem.",
          "Then, we didn't...",
          "What happened then?"
        ]
      },
      {
        "title": "Suddenly, + event",
        "examples": [
          "Suddenly, the lights went out.",
          "What happened suddenly?"
        ],
        "variationBank": [
          "Suddenly, the lights went out.",
          "—",
          "What happened suddenly?"
        ]
      },
      {
        "title": "I realized + clause",
        "examples": [
          "I realized I had a problem.",
          "When did you realize it?"
        ],
        "variationBank": [
          "I realized I had a problem.",
          "I didn't realize...",
          "When did you realize it?"
        ]
      },
      {
        "title": "I decided to + verb",
        "examples": [
          "I decided to ask for help.",
          "What did you decide?"
        ],
        "variationBank": [
          "I decided to ask for help.",
          "I decided not to...",
          "What did you decide?"
        ]
      },
      {
        "title": "In the end, + result",
        "examples": [
          "In the end, we solved it.",
          "What happened in the end?"
        ],
        "variationBank": [
          "In the end, we solved it.",
          "In the end, we didn't...",
          "What happened in the end?"
        ]
      },
      {
        "title": "I learned + lesson",
        "examples": [
          "I learned a lot from it.",
          "What did you learn?"
        ],
        "variationBank": [
          "I learned a lot from it.",
          "I didn't learn...",
          "What did you learn?"
        ]
      },
      {
        "title": "Have you ever + past participle?",
        "examples": [
          "Have you ever traveled abroad?",
          "Have you ever...?"
        ],
        "variationBank": [
          "Have you ever traveled abroad?",
          "I've never...",
          "Have you ever...?"
        ]
      }
    ],
    "variations": [
      {
        "base": "First, I arrived at work.",
        "affirmative": "First, I arrived at work.",
        "negative": "First, I didn't...",
        "question": "What happened first?",
        "past": "",
        "future": ""
      },
      {
        "base": "Then, we found a problem.",
        "affirmative": "Then, we found a problem.",
        "negative": "Then, we didn't...",
        "question": "What happened then?",
        "past": "",
        "future": ""
      },
      {
        "base": "Suddenly, the lights went out.",
        "affirmative": "Suddenly, the lights went out.",
        "negative": "",
        "question": "What happened suddenly?",
        "past": "",
        "future": ""
      },
      {
        "base": "I realized I had a problem.",
        "affirmative": "I realized I had a problem.",
        "negative": "I didn't realize...",
        "question": "When did you realize it?",
        "past": "",
        "future": ""
      },
      {
        "base": "I decided to ask for help.",
        "affirmative": "I decided to ask for help.",
        "negative": "I decided not to...",
        "question": "What did you decide?",
        "past": "",
        "future": ""
      }
    ],
    "questions": [
      {
        "q": "What happened?",
        "sample": "Last year, I worked on a big project."
      },
      {
        "q": "What happened next?",
        "sample": "Something unexpected happened."
      },
      {
        "q": "What did you do?",
        "sample": "At first, I didn't know what to do."
      },
      {
        "q": "How did you feel?",
        "sample": "Then I realized I had a problem."
      },
      {
        "q": "What did you learn?",
        "sample": "I decided to ask for help."
      },
      {
        "q": "Have you ever made a big mistake?",
        "sample": "We talked about the problem."
      },
      {
        "q": "Have you ever had an embarrassing moment?",
        "sample": "In the end, we found a solution."
      },
      {
        "q": "What's a funny memory from your childhood?",
        "sample": "I learned a lot from that experience."
      },
      {
        "q": "What was your first job like?",
        "sample": "When I was younger, I liked different things."
      },
      {
        "q": "What was the most difficult experience you've had at work?",
        "sample": "I remember that day very clearly."
      },
      {
        "q": "What is something unexpected that happened to you?",
        "sample": "I made a mistake, but I learned from it."
      },
      {
        "q": "Have you ever changed your mind about something important?",
        "sample": "I've had some difficult experiences."
      },
      {
        "q": "What experience taught you the most?",
        "sample": "One of the funniest things happened by accident."
      },
      {
        "q": "What would you do differently?",
        "sample": "I didn't expect that to happen."
      },
      {
        "q": "Tell me a story that you remember clearly.",
        "sample": "Suddenly, everything changed."
      }
    ],
    "exercises": {
      "translate": [
        {
          "pt": "No ano passado, trabalhei em um projeto grande.",
          "answer": "Last year, I worked on a big project."
        },
        {
          "pt": "Algo inesperado aconteceu.",
          "answer": "Something unexpected happened."
        },
        {
          "pt": "No começo, eu não sabia o que fazer.",
          "answer": "At first, I didn't know what to do."
        },
        {
          "pt": "Então percebi que tinha um problema.",
          "answer": "Then I realized I had a problem."
        },
        {
          "pt": "Decidi pedir ajuda.",
          "answer": "I decided to ask for help."
        },
        {
          "pt": "Nós conversamos sobre o problema.",
          "answer": "We talked about the problem."
        },
        {
          "pt": "No fim, encontramos uma solução.",
          "answer": "In the end, we found a solution."
        },
        {
          "pt": "Aprendi muito com essa experiência.",
          "answer": "I learned a lot from that experience."
        }
      ],
      "fillBlank": [
        {
          "sentence": "When I ___ younger, I liked different things.",
          "options": [
            "was",
            "work",
            "like",
            "know"
          ],
          "answer": "was"
        },
        {
          "sentence": "I remember ___ day very clearly.",
          "options": [
            "that",
            "work",
            "like",
            "know"
          ],
          "answer": "that"
        },
        {
          "sentence": "I made ___ mistake, but I learned from it.",
          "options": [
            "a",
            "work",
            "like",
            "know"
          ],
          "answer": "a"
        },
        {
          "sentence": "I've had ___ difficult experiences.",
          "options": [
            "some",
            "work",
            "like",
            "know"
          ],
          "answer": "some"
        },
        {
          "sentence": "One of ___ funniest things happened by accident.",
          "options": [
            "the",
            "work",
            "like",
            "know"
          ],
          "answer": "the"
        },
        {
          "sentence": "I didn't ___ that to happen.",
          "options": [
            "expect",
            "work",
            "like",
            "know"
          ],
          "answer": "expect"
        },
        {
          "sentence": "After that, ___ became more careful.",
          "options": [
            "I",
            "work",
            "like",
            "know"
          ],
          "answer": "I"
        }
      ],
      "multipleChoice": [
        {
          "q": "What does \"Before that, I had never done it.\" mean?",
          "options": [
            "Antes disso, eu nunca tinha feito aquilo.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Antes disso, eu nunca tinha feito aquilo."
        },
        {
          "q": "What does \"I've never forgotten that experience.\" mean?",
          "options": [
            "Nunca esqueci aquela experiência.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Nunca esqueci aquela experiência."
        },
        {
          "q": "What does \"It was embarrassing at the time.\" mean?",
          "options": [
            "Foi constrangedor na época.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Foi constrangedor na época."
        },
        {
          "q": "What does \"Now I can laugh about it.\" mean?",
          "options": [
            "Agora consigo rir disso.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Agora consigo rir disso."
        },
        {
          "q": "What does \"What happened next?\" mean?",
          "options": [
            "O que aconteceu depois?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "O que aconteceu depois?"
        },
        {
          "q": "What does \"What did you learn from it?\" mean?",
          "options": [
            "O que você aprendeu com isso?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "O que você aprendeu com isso?"
        },
        {
          "q": "What does \"Have you ever experienced something similar?\" mean?",
          "options": [
            "Você já passou por algo parecido?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Você já passou por algo parecido?"
        },
        {
          "q": "What does \"That reminds me of something that happened to me.\" mean?",
          "options": [
            "Isso me lembra algo que aconteceu comigo.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Isso me lembra algo que aconteceu comigo."
        }
      ],
      "rearrange": [
        {
          "scrambled": [
            "project",
            "big",
            "a",
            "on",
            "worked",
            "I",
            "year",
            "Last"
          ],
          "answer": "Last year, I worked on a big project"
        },
        {
          "scrambled": [
            "do",
            "to",
            "what",
            "know",
            "didn't",
            "I",
            "first",
            "At"
          ],
          "answer": "At first, I didn't know what to do"
        },
        {
          "scrambled": [
            "problem",
            "a",
            "had",
            "I",
            "realized",
            "I",
            "Then"
          ],
          "answer": "Then I realized I had a problem"
        },
        {
          "scrambled": [
            "help",
            "for",
            "ask",
            "to",
            "decided",
            "I"
          ],
          "answer": "I decided to ask for help"
        },
        {
          "scrambled": [
            "problem",
            "the",
            "about",
            "talked",
            "We"
          ],
          "answer": "We talked about the problem"
        },
        {
          "scrambled": [
            "solution",
            "a",
            "found",
            "we",
            "end",
            "the",
            "In"
          ],
          "answer": "In the end, we found a solution"
        },
        {
          "scrambled": [
            "experience",
            "that",
            "from",
            "lot",
            "a",
            "learned",
            "I"
          ],
          "answer": "I learned a lot from that experience"
        }
      ],
      "listening": [
        {
          "audio": "Last year, I worked on a big project.",
          "options": [
            "Last year, I worked on a big project.",
            "Something unexpected happened.",
            "At first, I didn't know what to do."
          ],
          "answer": "Last year, I worked on a big project."
        },
        {
          "audio": "Something unexpected happened.",
          "options": [
            "Something unexpected happened.",
            "At first, I didn't know what to do.",
            "Then I realized I had a problem."
          ],
          "answer": "Something unexpected happened."
        },
        {
          "audio": "At first, I didn't know what to do.",
          "options": [
            "At first, I didn't know what to do.",
            "Then I realized I had a problem.",
            "I decided to ask for help."
          ],
          "answer": "At first, I didn't know what to do."
        },
        {
          "audio": "Then I realized I had a problem.",
          "options": [
            "Then I realized I had a problem.",
            "I decided to ask for help.",
            "We talked about the problem."
          ],
          "answer": "Then I realized I had a problem."
        },
        {
          "audio": "I decided to ask for help.",
          "options": [
            "I decided to ask for help.",
            "We talked about the problem.",
            "In the end, we found a solution."
          ],
          "answer": "I decided to ask for help."
        },
        {
          "audio": "We talked about the problem.",
          "options": [
            "We talked about the problem.",
            "In the end, we found a solution.",
            "I learned a lot from that experience."
          ],
          "answer": "We talked about the problem."
        },
        {
          "audio": "In the end, we found a solution.",
          "options": [
            "In the end, we found a solution.",
            "I learned a lot from that experience.",
            "When I was younger, I liked different things."
          ],
          "answer": "In the end, we found a solution."
        },
        {
          "audio": "I learned a lot from that experience.",
          "options": [
            "I learned a lot from that experience.",
            "When I was younger, I liked different things.",
            "I remember that day very clearly."
          ],
          "answer": "I learned a lot from that experience."
        }
      ]
    },
    "speakingSentences": [
      "Last year, I worked on a big project.",
      "Something unexpected happened.",
      "At first, I didn't know what to do.",
      "Then I realized I had a problem.",
      "I decided to ask for help.",
      "We talked about the problem.",
      "In the end, we found a solution.",
      "I learned a lot from that experience."
    ],
    "talkPrompts": [
      "What happened?",
      "What happened next?",
      "What did you do?",
      "How did you feel?",
      "What did you learn?",
      "Have you ever made a big mistake?",
      "Have you ever had an embarrassing moment?",
      "What's a funny memory from your childhood?"
    ],
    "reading": []
  },
  {
    "id": "island05",
    "number": 5,
    "name": "Travel & Culture",
    "emoji": "✈️",
    "description": "Handle travel situations and talk about Brazil and other cultures.",
    "unlockedByDefault": false,
    "goal": "Handle travel situations and discuss cultures.",
    "vocabulary": [
      {
        "en": "trip",
        "pt": "viagem",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "travel",
        "pt": "viajar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "airport",
        "pt": "aeroporto",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "flight",
        "pt": "voo",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "passport",
        "pt": "passaporte",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "boarding pass",
        "pt": "cartão de embarque",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "luggage",
        "pt": "bagagem",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "hotel",
        "pt": "hotel",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "reservation",
        "pt": "reserva",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "room",
        "pt": "quarto",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "check-in",
        "pt": "check-in",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "checkout",
        "pt": "check-out",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "ticket",
        "pt": "bilhete/passagem",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "station",
        "pt": "estação",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "bus",
        "pt": "ônibus",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "train",
        "pt": "trem",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "restaurant",
        "pt": "restaurante",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "menu",
        "pt": "cardápio",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "bill",
        "pt": "conta",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "beach",
        "pt": "praia",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "culture",
        "pt": "cultura",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "custom",
        "pt": "costume",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "local",
        "pt": "local",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "tourist",
        "pt": "turista",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "language",
        "pt": "idioma",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "country",
        "pt": "país",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "abroad",
        "pt": "no exterior",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "nearby",
        "pt": "por perto",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "direction",
        "pt": "direção",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "landmark",
        "pt": "ponto turístico",
        "approx": "",
        "ipa": ""
      }
    ],
    "coreSentences": [
      {
        "en": "I'd like to travel abroad.",
        "pt": "Eu gostaria de viajar para o exterior."
      },
      {
        "en": "I've never been to the United States.",
        "pt": "Nunca fui aos Estados Unidos."
      },
      {
        "en": "Where is the nearest hotel?",
        "pt": "Onde fica o hotel mais próximo?"
      },
      {
        "en": "I have a reservation.",
        "pt": "Eu tenho uma reserva."
      },
      {
        "en": "I'd like to check in.",
        "pt": "Gostaria de fazer check-in."
      },
      {
        "en": "Could you help me with my luggage?",
        "pt": "Pode me ajudar com minha bagagem?"
      },
      {
        "en": "Where is the train station?",
        "pt": "Onde fica a estação de trem?"
      },
      {
        "en": "How much is a ticket?",
        "pt": "Quanto custa uma passagem?"
      },
      {
        "en": "How long does it take?",
        "pt": "Quanto tempo leva?"
      },
      {
        "en": "Is there a bus nearby?",
        "pt": "Tem um ônibus por perto?"
      },
      {
        "en": "Could you recommend a restaurant?",
        "pt": "Pode recomendar um restaurante?"
      },
      {
        "en": "Could I see the menu, please?",
        "pt": "Posso ver o cardápio, por favor?"
      },
      {
        "en": "Could I have the bill, please?",
        "pt": "Pode trazer a conta, por favor?"
      },
      {
        "en": "I'm looking for this address.",
        "pt": "Estou procurando este endereço."
      },
      {
        "en": "Could you tell me how to get there?",
        "pt": "Pode me dizer como chegar lá?"
      },
      {
        "en": "I'm visiting Brazil for the first time.",
        "pt": "Estou visitando o Brasil pela primeira vez."
      },
      {
        "en": "Bahia has beautiful beaches and natural areas.",
        "pt": "A Bahia tem praias e áreas naturais lindas."
      },
      {
        "en": "Brazil is a very diverse country.",
        "pt": "O Brasil é um país muito diverso."
      },
      {
        "en": "Every region has its own culture.",
        "pt": "Cada região tem sua própria cultura."
      },
      {
        "en": "What is your country like?",
        "pt": "Como é o seu país?"
      },
      {
        "en": "What should I visit there?",
        "pt": "O que eu deveria visitar lá?"
      },
      {
        "en": "What is the local food like?",
        "pt": "Como é a comida local?"
      },
      {
        "en": "I'd love to learn about your culture.",
        "pt": "Eu adoraria aprender sobre sua cultura."
      },
      {
        "en": "I want to experience everyday life, not just tourist attractions.",
        "pt": "Quero vivenciar a vida cotidiana, não apenas atrações turísticas."
      },
      {
        "en": "Traveling is a good way to learn about people.",
        "pt": "Viajar é uma boa forma de aprender sobre as pessoas."
      }
    ],
    "patterns": [
      {
        "title": "I'd like to + verb",
        "examples": [
          "I'd like to travel.",
          "What would you like to do?"
        ],
        "variationBank": [
          "I'd like to travel.",
          "I wouldn't like to...",
          "What would you like to do?"
        ]
      },
      {
        "title": "Where is + place?",
        "examples": [
          "Where is the station?",
          "Where is...?"
        ],
        "variationBank": [
          "Where is the station?",
          "Where isn't...?",
          "Where is...?"
        ]
      },
      {
        "title": "How much is + thing?",
        "examples": [
          "How much is a ticket?",
          "How much is it?"
        ],
        "variationBank": [
          "How much is a ticket?",
          "—",
          "How much is it?"
        ]
      },
      {
        "title": "Could I + verb?",
        "examples": [
          "Could I see the menu?",
          "Could I...?"
        ],
        "variationBank": [
          "Could I see the menu?",
          "Could I not...?",
          "Could I...?"
        ]
      },
      {
        "title": "Could you tell me + question?",
        "examples": [
          "Could you tell me how to get there?",
          "Could you tell me...?"
        ],
        "variationBank": [
          "Could you tell me how to get there?",
          "—",
          "Could you tell me...?"
        ]
      },
      {
        "title": "I'm looking for + thing",
        "examples": [
          "I'm looking for my hotel.",
          "What are you looking for?"
        ],
        "variationBank": [
          "I'm looking for my hotel.",
          "I'm not looking for...",
          "What are you looking for?"
        ]
      },
      {
        "title": "I'd recommend + thing",
        "examples": [
          "I'd recommend this restaurant.",
          "What would you recommend?"
        ],
        "variationBank": [
          "I'd recommend this restaurant.",
          "I wouldn't recommend...",
          "What would you recommend?"
        ]
      },
      {
        "title": "What is + place + like?",
        "examples": [
          "What is Brazil like?",
          "What's it like?"
        ],
        "variationBank": [
          "What is Brazil like?",
          "—",
          "What's it like?"
        ]
      }
    ],
    "variations": [
      {
        "base": "I'd like to travel.",
        "affirmative": "I'd like to travel.",
        "negative": "I wouldn't like to...",
        "question": "What would you like to do?",
        "past": "",
        "future": ""
      },
      {
        "base": "Where is the station?",
        "affirmative": "Where is the station?",
        "negative": "Where isn't...?",
        "question": "Where is...?",
        "past": "",
        "future": ""
      },
      {
        "base": "How much is a ticket?",
        "affirmative": "How much is a ticket?",
        "negative": "",
        "question": "How much is it?",
        "past": "",
        "future": ""
      },
      {
        "base": "Could I see the menu?",
        "affirmative": "Could I see the menu?",
        "negative": "Could I not...?",
        "question": "Could I...?",
        "past": "",
        "future": ""
      },
      {
        "base": "Could you tell me how to get there?",
        "affirmative": "Could you tell me how to get there?",
        "negative": "",
        "question": "Could you tell me...?",
        "past": "",
        "future": ""
      }
    ],
    "questions": [
      {
        "q": "Where would you like to travel?",
        "sample": "I'd like to travel abroad."
      },
      {
        "q": "Have you ever traveled abroad?",
        "sample": "I've never been to the United States."
      },
      {
        "q": "What country would you like to visit?",
        "sample": "Where is the nearest hotel?"
      },
      {
        "q": "What would you do there?",
        "sample": "I have a reservation."
      },
      {
        "q": "What kind of places do you like visiting?",
        "sample": "I'd like to check in."
      },
      {
        "q": "Do you prefer beaches or cities?",
        "sample": "Could you help me with my luggage?"
      },
      {
        "q": "What is Brazil like?",
        "sample": "Where is the train station?"
      },
      {
        "q": "What is Bahia like?",
        "sample": "How much is a ticket?"
      },
      {
        "q": "What Brazilian food would you recommend?",
        "sample": "How long does it take?"
      },
      {
        "q": "What should a foreigner know about Brazil?",
        "sample": "Is there a bus nearby?"
      },
      {
        "q": "What differences between cultures interest you?",
        "sample": "Could you recommend a restaurant?"
      },
      {
        "q": "Would you live in another country? Why?",
        "sample": "Could I see the menu, please?"
      },
      {
        "q": "What would you miss about Brazil?",
        "sample": "Could I have the bill, please?"
      },
      {
        "q": "What would you like to learn from another culture?",
        "sample": "I'm looking for this address."
      },
      {
        "q": "Plan a five-day trip and explain it.",
        "sample": "Could you tell me how to get there?"
      }
    ],
    "exercises": {
      "translate": [
        {
          "pt": "Eu gostaria de viajar para o exterior.",
          "answer": "I'd like to travel abroad."
        },
        {
          "pt": "Nunca fui aos Estados Unidos.",
          "answer": "I've never been to the United States."
        },
        {
          "pt": "Onde fica o hotel mais próximo?",
          "answer": "Where is the nearest hotel?"
        },
        {
          "pt": "Eu tenho uma reserva.",
          "answer": "I have a reservation."
        },
        {
          "pt": "Gostaria de fazer check-in.",
          "answer": "I'd like to check in."
        },
        {
          "pt": "Pode me ajudar com minha bagagem?",
          "answer": "Could you help me with my luggage?"
        },
        {
          "pt": "Onde fica a estação de trem?",
          "answer": "Where is the train station?"
        },
        {
          "pt": "Quanto custa uma passagem?",
          "answer": "How much is a ticket?"
        }
      ],
      "fillBlank": [
        {
          "sentence": "How long ___ it take?",
          "options": [
            "does",
            "work",
            "like",
            "know"
          ],
          "answer": "does"
        },
        {
          "sentence": "Is there ___ bus nearby?",
          "options": [
            "a",
            "work",
            "like",
            "know"
          ],
          "answer": "a"
        },
        {
          "sentence": "Could you ___ a restaurant?",
          "options": [
            "recommend",
            "work",
            "like",
            "know"
          ],
          "answer": "recommend"
        },
        {
          "sentence": "Could I ___ the menu, please?",
          "options": [
            "see",
            "work",
            "like",
            "know"
          ],
          "answer": "see"
        },
        {
          "sentence": "Could I ___ the bill, please?",
          "options": [
            "have",
            "work",
            "like",
            "know"
          ],
          "answer": "have"
        },
        {
          "sentence": "I'm looking ___ this address.",
          "options": [
            "for",
            "work",
            "like",
            "know"
          ],
          "answer": "for"
        },
        {
          "sentence": "Could you ___ me how to get there?",
          "options": [
            "tell",
            "work",
            "like",
            "know"
          ],
          "answer": "tell"
        },
        {
          "sentence": "I'm visiting ___ for the first time.",
          "options": [
            "Brazil",
            "work",
            "like",
            "know"
          ],
          "answer": "Brazil"
        }
      ],
      "multipleChoice": [
        {
          "q": "What does \"Bahia has beautiful beaches and natural areas.\" mean?",
          "options": [
            "A Bahia tem praias e áreas naturais lindas.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "A Bahia tem praias e áreas naturais lindas."
        },
        {
          "q": "What does \"Brazil is a very diverse country.\" mean?",
          "options": [
            "O Brasil é um país muito diverso.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "O Brasil é um país muito diverso."
        },
        {
          "q": "What does \"Every region has its own culture.\" mean?",
          "options": [
            "Cada região tem sua própria cultura.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Cada região tem sua própria cultura."
        },
        {
          "q": "What does \"What is your country like?\" mean?",
          "options": [
            "Como é o seu país?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Como é o seu país?"
        },
        {
          "q": "What does \"What should I visit there?\" mean?",
          "options": [
            "O que eu deveria visitar lá?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "O que eu deveria visitar lá?"
        },
        {
          "q": "What does \"What is the local food like?\" mean?",
          "options": [
            "Como é a comida local?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Como é a comida local?"
        },
        {
          "q": "What does \"I'd love to learn about your culture.\" mean?",
          "options": [
            "Eu adoraria aprender sobre sua cultura.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Eu adoraria aprender sobre sua cultura."
        },
        {
          "q": "What does \"I want to experience everyday life, not just tourist attractions.\" mean?",
          "options": [
            "Quero vivenciar a vida cotidiana, não apenas atrações turísticas.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Quero vivenciar a vida cotidiana, não apenas atrações turísticas."
        }
      ],
      "rearrange": [
        {
          "scrambled": [
            "abroad",
            "travel",
            "to",
            "like",
            "I'd"
          ],
          "answer": "I'd like to travel abroad"
        },
        {
          "scrambled": [
            "States",
            "United",
            "the",
            "to",
            "been",
            "never",
            "I've"
          ],
          "answer": "I've never been to the United States"
        },
        {
          "scrambled": [
            "hotel",
            "nearest",
            "the",
            "is",
            "Where"
          ],
          "answer": "Where is the nearest hotel"
        },
        {
          "scrambled": [
            "reservation",
            "a",
            "have",
            "I"
          ],
          "answer": "I have a reservation"
        },
        {
          "scrambled": [
            "in",
            "check",
            "to",
            "like",
            "I'd"
          ],
          "answer": "I'd like to check in"
        },
        {
          "scrambled": [
            "luggage",
            "my",
            "with",
            "me",
            "help",
            "you",
            "Could"
          ],
          "answer": "Could you help me with my luggage"
        },
        {
          "scrambled": [
            "station",
            "train",
            "the",
            "is",
            "Where"
          ],
          "answer": "Where is the train station"
        },
        {
          "scrambled": [
            "ticket",
            "a",
            "is",
            "much",
            "How"
          ],
          "answer": "How much is a ticket"
        }
      ],
      "listening": [
        {
          "audio": "I'd like to travel abroad.",
          "options": [
            "I'd like to travel abroad.",
            "I've never been to the United States.",
            "Where is the nearest hotel?"
          ],
          "answer": "I'd like to travel abroad."
        },
        {
          "audio": "I've never been to the United States.",
          "options": [
            "I've never been to the United States.",
            "Where is the nearest hotel?",
            "I have a reservation."
          ],
          "answer": "I've never been to the United States."
        },
        {
          "audio": "Where is the nearest hotel?",
          "options": [
            "Where is the nearest hotel?",
            "I have a reservation.",
            "I'd like to check in."
          ],
          "answer": "Where is the nearest hotel?"
        },
        {
          "audio": "I have a reservation.",
          "options": [
            "I have a reservation.",
            "I'd like to check in.",
            "Could you help me with my luggage?"
          ],
          "answer": "I have a reservation."
        },
        {
          "audio": "I'd like to check in.",
          "options": [
            "I'd like to check in.",
            "Could you help me with my luggage?",
            "Where is the train station?"
          ],
          "answer": "I'd like to check in."
        },
        {
          "audio": "Could you help me with my luggage?",
          "options": [
            "Could you help me with my luggage?",
            "Where is the train station?",
            "How much is a ticket?"
          ],
          "answer": "Could you help me with my luggage?"
        },
        {
          "audio": "Where is the train station?",
          "options": [
            "Where is the train station?",
            "How much is a ticket?",
            "How long does it take?"
          ],
          "answer": "Where is the train station?"
        },
        {
          "audio": "How much is a ticket?",
          "options": [
            "How much is a ticket?",
            "How long does it take?",
            "Is there a bus nearby?"
          ],
          "answer": "How much is a ticket?"
        }
      ]
    },
    "speakingSentences": [
      "I'd like to travel abroad.",
      "I've never been to the United States.",
      "Where is the nearest hotel?",
      "I have a reservation.",
      "I'd like to check in.",
      "Could you help me with my luggage?",
      "Where is the train station?",
      "How much is a ticket?"
    ],
    "talkPrompts": [
      "Where would you like to travel?",
      "Have you ever traveled abroad?",
      "What country would you like to visit?",
      "What would you do there?",
      "What kind of places do you like visiting?",
      "Do you prefer beaches or cities?",
      "What is Brazil like?",
      "What is Bahia like?"
    ],
    "reading": []
  },
  {
    "id": "island06",
    "number": 6,
    "name": "Mind & Relationships",
    "emoji": "🧠",
    "description": "Talk about feelings, personality, friendships and human behavior.",
    "unlockedByDefault": false,
    "goal": "Talk about emotions, friendships and behavior.",
    "vocabulary": [
      {
        "en": "feeling",
        "pt": "sentimento",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "emotion",
        "pt": "emoção",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "thought",
        "pt": "pensamento",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "mind",
        "pt": "mente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "behavior",
        "pt": "comportamento",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "habit",
        "pt": "hábito",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "personality",
        "pt": "personalidade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "confidence",
        "pt": "confiança",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "self-esteem",
        "pt": "autoestima",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "trust",
        "pt": "confiança",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "friendship",
        "pt": "amizade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "relationship",
        "pt": "relacionamento",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "boundary",
        "pt": "limite",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "communication",
        "pt": "comunicação",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "loneliness",
        "pt": "solidão",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "happiness",
        "pt": "felicidade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "fear",
        "pt": "medo",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "anger",
        "pt": "raiva",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "sadness",
        "pt": "tristeza",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "attachment",
        "pt": "apego",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "choice",
        "pt": "escolha",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "desire",
        "pt": "desejo",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "expectation",
        "pt": "expectativa",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "support",
        "pt": "apoio",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "respect",
        "pt": "respeito",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "honest",
        "pt": "honesto",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "aware",
        "pt": "consciente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "overthink",
        "pt": "pensar demais",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "cope",
        "pt": "lidar com",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "change",
        "pt": "mudança",
        "approx": "",
        "ipa": ""
      }
    ],
    "coreSentences": [
      {
        "en": "I think people are complicated.",
        "pt": "Acho que as pessoas são complicadas."
      },
      {
        "en": "I tend to overthink things.",
        "pt": "Tendo a pensar demais nas coisas."
      },
      {
        "en": "Sometimes I need some time alone.",
        "pt": "Às vezes preciso de um tempo sozinha."
      },
      {
        "en": "I value honest communication.",
        "pt": "Valorizo a comunicação honesta."
      },
      {
        "en": "Trust is important in a friendship.",
        "pt": "Confiança é importante em uma amizade."
      },
      {
        "en": "I think boundaries are important.",
        "pt": "Acho que limites são importantes."
      },
      {
        "en": "People express feelings in different ways.",
        "pt": "As pessoas expressam sentimentos de maneiras diferentes."
      },
      {
        "en": "It's hard to know what someone is thinking.",
        "pt": "É difícil saber o que alguém está pensando."
      },
      {
        "en": "I don't always say what I'm feeling.",
        "pt": "Nem sempre digo o que estou sentindo."
      },
      {
        "en": "I try to understand other people's perspectives.",
        "pt": "Tento entender a perspectiva das outras pessoas."
      },
      {
        "en": "What makes someone trustworthy?",
        "pt": "O que torna alguém confiável?"
      },
      {
        "en": "What makes a good friendship?",
        "pt": "O que faz uma boa amizade?"
      },
      {
        "en": "Do you think people can change?",
        "pt": "Você acha que as pessoas podem mudar?"
      },
      {
        "en": "Why do people overthink?",
        "pt": "Por que as pessoas pensam demais?"
      },
      {
        "en": "How do you deal with stress?",
        "pt": "Como você lida com estresse?"
      },
      {
        "en": "I think experience changes people.",
        "pt": "Acho que experiências mudam as pessoas."
      },
      {
        "en": "Everyone has insecurities.",
        "pt": "Todo mundo tem inseguranças."
      },
      {
        "en": "It's important to respect other people's boundaries.",
        "pt": "É importante respeitar os limites das outras pessoas."
      },
      {
        "en": "Sometimes we misunderstand each other.",
        "pt": "Às vezes nos entendemos mal."
      },
      {
        "en": "Good communication can prevent many problems.",
        "pt": "Boa comunicação pode evitar muitos problemas."
      },
      {
        "en": "I don't want to judge people too quickly.",
        "pt": "Não quero julgar as pessoas rápido demais."
      },
      {
        "en": "I try to listen before I give advice.",
        "pt": "Tento ouvir antes de dar conselhos."
      },
      {
        "en": "I think loneliness and being alone are different things.",
        "pt": "Acho que solidão e estar sozinho são coisas diferentes."
      },
      {
        "en": "People need different kinds of support.",
        "pt": "As pessoas precisam de diferentes tipos de apoio."
      },
      {
        "en": "What do you value most in a friendship?",
        "pt": "O que você mais valoriza em uma amizade?"
      }
    ],
    "patterns": [
      {
        "title": "I think + clause",
        "examples": [
          "I think communication matters.",
          "What do you think?"
        ],
        "variationBank": [
          "I think communication matters.",
          "I don't think...",
          "What do you think?"
        ]
      },
      {
        "title": "I feel like + clause",
        "examples": [
          "I feel like people overthink.",
          "How do you feel?"
        ],
        "variationBank": [
          "I feel like people overthink.",
          "I don't feel like...",
          "How do you feel?"
        ]
      },
      {
        "title": "It depends on + noun",
        "examples": [
          "It depends on the situation.",
          "What does it depend on?"
        ],
        "variationBank": [
          "It depends on the situation.",
          "It doesn't depend on...",
          "What does it depend on?"
        ]
      },
      {
        "title": "I tend to + verb",
        "examples": [
          "I tend to overthink.",
          "What do you tend to do?"
        ],
        "variationBank": [
          "I tend to overthink.",
          "I don't tend to...",
          "What do you tend to do?"
        ]
      },
      {
        "title": "It's important to + verb",
        "examples": [
          "It's important to listen.",
          "What's important?"
        ],
        "variationBank": [
          "It's important to listen.",
          "It's not important to...",
          "What's important?"
        ]
      },
      {
        "title": "People often + verb",
        "examples": [
          "People often misunderstand each other.",
          "Why do people...?"
        ],
        "variationBank": [
          "People often misunderstand each other.",
          "People don't always...",
          "Why do people...?"
        ]
      },
      {
        "title": "I try to + verb",
        "examples": [
          "I try to listen.",
          "What do you try to do?"
        ],
        "variationBank": [
          "I try to listen.",
          "I don't always try to...",
          "What do you try to do?"
        ]
      },
      {
        "title": "What makes + person + adjective?",
        "examples": [
          "What makes someone trustworthy?",
          "What makes...?"
        ],
        "variationBank": [
          "What makes someone trustworthy?",
          "—",
          "What makes...?"
        ]
      }
    ],
    "variations": [
      {
        "base": "I think communication matters.",
        "affirmative": "I think communication matters.",
        "negative": "I don't think...",
        "question": "What do you think?",
        "past": "",
        "future": ""
      },
      {
        "base": "I feel like people overthink.",
        "affirmative": "I feel like people overthink.",
        "negative": "I don't feel like...",
        "question": "How do you feel?",
        "past": "",
        "future": ""
      },
      {
        "base": "It depends on the situation.",
        "affirmative": "It depends on the situation.",
        "negative": "It doesn't depend on...",
        "question": "What does it depend on?",
        "past": "",
        "future": ""
      },
      {
        "base": "I tend to overthink.",
        "affirmative": "I tend to overthink.",
        "negative": "I don't tend to...",
        "question": "What do you tend to do?",
        "past": "",
        "future": ""
      },
      {
        "base": "It's important to listen.",
        "affirmative": "It's important to listen.",
        "negative": "It's not important to...",
        "question": "What's important?",
        "past": "",
        "future": ""
      }
    ],
    "questions": [
      {
        "q": "What makes someone a good friend?",
        "sample": "I think people are complicated."
      },
      {
        "q": "What makes someone trustworthy?",
        "sample": "I tend to overthink things."
      },
      {
        "q": "Do you think people can change?",
        "sample": "Sometimes I need some time alone."
      },
      {
        "q": "Why do people overthink?",
        "sample": "I value honest communication."
      },
      {
        "q": "How do you deal with stress?",
        "sample": "Trust is important in a friendship."
      },
      {
        "q": "What do you value in relationships?",
        "sample": "I think boundaries are important."
      },
      {
        "q": "How important is communication?",
        "sample": "People express feelings in different ways."
      },
      {
        "q": "Should people always say what they feel?",
        "sample": "It's hard to know what someone is thinking."
      },
      {
        "q": "What are healthy boundaries?",
        "sample": "I don't always say what I'm feeling."
      },
      {
        "q": "What makes people feel lonely?",
        "sample": "I try to understand other people's perspectives."
      },
      {
        "q": "Do social media affect relationships?",
        "sample": "What makes someone trustworthy?"
      },
      {
        "q": "Why do people become attached to others?",
        "sample": "What makes a good friendship?"
      },
      {
        "q": "How can people handle disagreements?",
        "sample": "Do you think people can change?"
      },
      {
        "q": "Can two people understand the same situation differently?",
        "sample": "Why do people overthink?"
      },
      {
        "q": "Explain your view about friendship and trust.",
        "sample": "How do you deal with stress?"
      }
    ],
    "exercises": {
      "translate": [
        {
          "pt": "Acho que as pessoas são complicadas.",
          "answer": "I think people are complicated."
        },
        {
          "pt": "Tendo a pensar demais nas coisas.",
          "answer": "I tend to overthink things."
        },
        {
          "pt": "Às vezes preciso de um tempo sozinha.",
          "answer": "Sometimes I need some time alone."
        },
        {
          "pt": "Valorizo a comunicação honesta.",
          "answer": "I value honest communication."
        },
        {
          "pt": "Confiança é importante em uma amizade.",
          "answer": "Trust is important in a friendship."
        },
        {
          "pt": "Acho que limites são importantes.",
          "answer": "I think boundaries are important."
        },
        {
          "pt": "As pessoas expressam sentimentos de maneiras diferentes.",
          "answer": "People express feelings in different ways."
        },
        {
          "pt": "É difícil saber o que alguém está pensando.",
          "answer": "It's hard to know what someone is thinking."
        }
      ],
      "fillBlank": [
        {
          "sentence": "I don't ___ say what I'm feeling.",
          "options": [
            "always",
            "work",
            "like",
            "know"
          ],
          "answer": "always"
        },
        {
          "sentence": "I try ___ understand other people's perspectives.",
          "options": [
            "to",
            "work",
            "like",
            "know"
          ],
          "answer": "to"
        },
        {
          "sentence": "What makes ___ good friendship?",
          "options": [
            "a",
            "work",
            "like",
            "know"
          ],
          "answer": "a"
        },
        {
          "sentence": "Do you ___ people can change?",
          "options": [
            "think",
            "work",
            "like",
            "know"
          ],
          "answer": "think"
        },
        {
          "sentence": "How do ___ deal with stress?",
          "options": [
            "you",
            "work",
            "like",
            "know"
          ],
          "answer": "you"
        },
        {
          "sentence": "I think ___ changes people.",
          "options": [
            "experience",
            "work",
            "like",
            "know"
          ],
          "answer": "experience"
        }
      ],
      "multipleChoice": [
        {
          "q": "What does \"Everyone has insecurities.\" mean?",
          "options": [
            "Todo mundo tem inseguranças.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Todo mundo tem inseguranças."
        },
        {
          "q": "What does \"It's important to respect other people's boundaries.\" mean?",
          "options": [
            "É importante respeitar os limites das outras pessoas.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "É importante respeitar os limites das outras pessoas."
        },
        {
          "q": "What does \"Sometimes we misunderstand each other.\" mean?",
          "options": [
            "Às vezes nos entendemos mal.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Às vezes nos entendemos mal."
        },
        {
          "q": "What does \"Good communication can prevent many problems.\" mean?",
          "options": [
            "Boa comunicação pode evitar muitos problemas.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Boa comunicação pode evitar muitos problemas."
        },
        {
          "q": "What does \"I don't want to judge people too quickly.\" mean?",
          "options": [
            "Não quero julgar as pessoas rápido demais.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Não quero julgar as pessoas rápido demais."
        },
        {
          "q": "What does \"I try to listen before I give advice.\" mean?",
          "options": [
            "Tento ouvir antes de dar conselhos.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Tento ouvir antes de dar conselhos."
        },
        {
          "q": "What does \"I think loneliness and being alone are different things.\" mean?",
          "options": [
            "Acho que solidão e estar sozinho são coisas diferentes.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Acho que solidão e estar sozinho são coisas diferentes."
        },
        {
          "q": "What does \"People need different kinds of support.\" mean?",
          "options": [
            "As pessoas precisam de diferentes tipos de apoio.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "As pessoas precisam de diferentes tipos de apoio."
        }
      ],
      "rearrange": [
        {
          "scrambled": [
            "complicated",
            "are",
            "people",
            "think",
            "I"
          ],
          "answer": "I think people are complicated"
        },
        {
          "scrambled": [
            "things",
            "overthink",
            "to",
            "tend",
            "I"
          ],
          "answer": "I tend to overthink things"
        },
        {
          "scrambled": [
            "alone",
            "time",
            "some",
            "need",
            "I",
            "Sometimes"
          ],
          "answer": "Sometimes I need some time alone"
        },
        {
          "scrambled": [
            "communication",
            "honest",
            "value",
            "I"
          ],
          "answer": "I value honest communication"
        },
        {
          "scrambled": [
            "friendship",
            "a",
            "in",
            "important",
            "is",
            "Trust"
          ],
          "answer": "Trust is important in a friendship"
        },
        {
          "scrambled": [
            "important",
            "are",
            "boundaries",
            "think",
            "I"
          ],
          "answer": "I think boundaries are important"
        },
        {
          "scrambled": [
            "ways",
            "different",
            "in",
            "feelings",
            "express",
            "People"
          ],
          "answer": "People express feelings in different ways"
        },
        {
          "scrambled": [
            "thinking",
            "is",
            "someone",
            "what",
            "know",
            "to",
            "hard",
            "It's"
          ],
          "answer": "It's hard to know what someone is thinking"
        }
      ],
      "listening": [
        {
          "audio": "I think people are complicated.",
          "options": [
            "I think people are complicated.",
            "I tend to overthink things.",
            "Sometimes I need some time alone."
          ],
          "answer": "I think people are complicated."
        },
        {
          "audio": "I tend to overthink things.",
          "options": [
            "I tend to overthink things.",
            "Sometimes I need some time alone.",
            "I value honest communication."
          ],
          "answer": "I tend to overthink things."
        },
        {
          "audio": "Sometimes I need some time alone.",
          "options": [
            "Sometimes I need some time alone.",
            "I value honest communication.",
            "Trust is important in a friendship."
          ],
          "answer": "Sometimes I need some time alone."
        },
        {
          "audio": "I value honest communication.",
          "options": [
            "I value honest communication.",
            "Trust is important in a friendship.",
            "I think boundaries are important."
          ],
          "answer": "I value honest communication."
        },
        {
          "audio": "Trust is important in a friendship.",
          "options": [
            "Trust is important in a friendship.",
            "I think boundaries are important.",
            "People express feelings in different ways."
          ],
          "answer": "Trust is important in a friendship."
        },
        {
          "audio": "I think boundaries are important.",
          "options": [
            "I think boundaries are important.",
            "People express feelings in different ways.",
            "It's hard to know what someone is thinking."
          ],
          "answer": "I think boundaries are important."
        },
        {
          "audio": "People express feelings in different ways.",
          "options": [
            "People express feelings in different ways.",
            "It's hard to know what someone is thinking.",
            "I don't always say what I'm feeling."
          ],
          "answer": "People express feelings in different ways."
        },
        {
          "audio": "It's hard to know what someone is thinking.",
          "options": [
            "It's hard to know what someone is thinking.",
            "I don't always say what I'm feeling.",
            "I try to understand other people's perspectives."
          ],
          "answer": "It's hard to know what someone is thinking."
        }
      ]
    },
    "speakingSentences": [
      "I think people are complicated.",
      "I tend to overthink things.",
      "Sometimes I need some time alone.",
      "I value honest communication.",
      "Trust is important in a friendship.",
      "I think boundaries are important.",
      "People express feelings in different ways.",
      "It's hard to know what someone is thinking."
    ],
    "talkPrompts": [
      "What makes someone a good friend?",
      "What makes someone trustworthy?",
      "Do you think people can change?",
      "Why do people overthink?",
      "How do you deal with stress?",
      "What do you value in relationships?",
      "How important is communication?",
      "Should people always say what they feel?"
    ],
    "reading": []
  },
  {
    "id": "island07",
    "number": 7,
    "name": "Ideas & Philosophy",
    "emoji": "💭",
    "description": "Express opinions, explain ideas and discuss philosophical questions.",
    "unlockedByDefault": false,
    "goal": "Express and defend ideas respectfully.",
    "vocabulary": [
      {
        "en": "opinion",
        "pt": "opinião",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "idea",
        "pt": "ideia",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "meaning",
        "pt": "sentido/significado",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "purpose",
        "pt": "propósito",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "freedom",
        "pt": "liberdade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "choice",
        "pt": "escolha",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "responsibility",
        "pt": "responsabilidade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "morality",
        "pt": "moralidade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "consciousness",
        "pt": "consciência",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "identity",
        "pt": "identidade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "human nature",
        "pt": "natureza humana",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "society",
        "pt": "sociedade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "desire",
        "pt": "desejo",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "reason",
        "pt": "razão",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "evidence",
        "pt": "evidência",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "argument",
        "pt": "argumento",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "agree",
        "pt": "concordar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "disagree",
        "pt": "discordar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "believe",
        "pt": "acreditar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "consider",
        "pt": "considerar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "perhaps",
        "pt": "talvez",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "however",
        "pt": "porém",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "although",
        "pt": "embora",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "therefore",
        "pt": "portanto",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "according to",
        "pt": "de acordo com",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "in my view",
        "pt": "na minha visão",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "it depends",
        "pt": "depende",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "make sense",
        "pt": "fazer sentido",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "question",
        "pt": "questão",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "perspective",
        "pt": "perspectiva",
        "approx": "",
        "ipa": ""
      }
    ],
    "coreSentences": [
      {
        "en": "In my opinion, freedom is complicated.",
        "pt": "Na minha opinião, liberdade é complicada."
      },
      {
        "en": "I think our choices are influenced by many things.",
        "pt": "Acho que nossas escolhas são influenciadas por muitas coisas."
      },
      {
        "en": "I believe people have some control over their lives.",
        "pt": "Acredito que as pessoas têm algum controle sobre suas vidas."
      },
      {
        "en": "It depends on how you define freedom.",
        "pt": "Depende de como você define liberdade."
      },
      {
        "en": "What gives life meaning?",
        "pt": "O que dá sentido à vida?"
      },
      {
        "en": "Do you think people are truly free?",
        "pt": "Você acha que as pessoas são realmente livres?"
      },
      {
        "en": "Can desire control our decisions?",
        "pt": "O desejo pode controlar nossas decisões?"
      },
      {
        "en": "I don't have a simple answer.",
        "pt": "Não tenho uma resposta simples."
      },
      {
        "en": "There are different ways to look at this.",
        "pt": "Há diferentes maneiras de olhar para isso."
      },
      {
        "en": "I see your point.",
        "pt": "Entendo seu ponto."
      },
      {
        "en": "I agree with part of what you said.",
        "pt": "Concordo com parte do que você disse."
      },
      {
        "en": "I don't completely agree.",
        "pt": "Não concordo completamente."
      },
      {
        "en": "That argument makes sense.",
        "pt": "Esse argumento faz sentido."
      },
      {
        "en": "I need to think about that.",
        "pt": "Preciso pensar sobre isso."
      },
      {
        "en": "That's an interesting perspective.",
        "pt": "Essa é uma perspectiva interessante."
      },
      {
        "en": "I might be wrong, but I think...",
        "pt": "Posso estar errada, mas acho que..."
      },
      {
        "en": "From my experience, people often...",
        "pt": "Pela minha experiência, as pessoas frequentemente..."
      },
      {
        "en": "However, there's another side to this.",
        "pt": "Porém, existe outro lado disso."
      },
      {
        "en": "Although it sounds simple, it's actually complicated.",
        "pt": "Embora pareça simples, na verdade é complicado."
      },
      {
        "en": "I think context matters.",
        "pt": "Acho que o contexto importa."
      },
      {
        "en": "What do you mean by freedom?",
        "pt": "O que você quer dizer com liberdade?"
      },
      {
        "en": "How would you define happiness?",
        "pt": "Como você definiria felicidade?"
      },
      {
        "en": "Do you think morality is universal?",
        "pt": "Você acha que a moralidade é universal?"
      },
      {
        "en": "Can we know what is objectively right?",
        "pt": "Podemos saber o que é objetivamente certo?"
      },
      {
        "en": "Let's look at it from another perspective.",
        "pt": "Vamos olhar por outra perspectiva."
      }
    ],
    "patterns": [
      {
        "title": "In my opinion, + clause",
        "examples": [
          "In my opinion, freedom is complicated.",
          "What's your opinion?"
        ],
        "variationBank": [
          "In my opinion, freedom is complicated.",
          "In my opinion, it isn't...",
          "What's your opinion?"
        ]
      },
      {
        "title": "I believe + clause",
        "examples": [
          "I believe people can change.",
          "What do you believe?"
        ],
        "variationBank": [
          "I believe people can change.",
          "I don't believe...",
          "What do you believe?"
        ]
      },
      {
        "title": "It depends on + definition/context",
        "examples": [
          "It depends on how you define freedom.",
          "What does it depend on?"
        ],
        "variationBank": [
          "It depends on how you define freedom.",
          "It doesn't simply depend on...",
          "What does it depend on?"
        ]
      },
      {
        "title": "I see your point, but + clause",
        "examples": [
          "I see your point, but I disagree.",
          "Do you see my point?"
        ],
        "variationBank": [
          "I see your point, but I disagree.",
          "I don't see your point.",
          "Do you see my point?"
        ]
      },
      {
        "title": "I agree with + person/idea",
        "examples": [
          "I agree with you.",
          "Do you agree?"
        ],
        "variationBank": [
          "I agree with you.",
          "I don't agree with...",
          "Do you agree?"
        ]
      },
      {
        "title": "I don't completely agree.",
        "examples": [
          "I don't completely agree with that.",
          "Do you agree?"
        ],
        "variationBank": [
          "I don't completely agree with that.",
          "I completely agree.",
          "Do you agree?"
        ]
      },
      {
        "title": "That makes sense because + reason",
        "examples": [
          "That makes sense because context matters.",
          "Why does it make sense?"
        ],
        "variationBank": [
          "That makes sense because context matters.",
          "That doesn't make sense...",
          "Why does it make sense?"
        ]
      },
      {
        "title": "What do you mean by + concept?",
        "examples": [
          "What do you mean by freedom?",
          "What do you mean by...?"
        ],
        "variationBank": [
          "What do you mean by freedom?",
          "—",
          "What do you mean by...?"
        ]
      }
    ],
    "variations": [
      {
        "base": "In my opinion, freedom is complicated.",
        "affirmative": "In my opinion, freedom is complicated.",
        "negative": "In my opinion, it isn't...",
        "question": "What's your opinion?",
        "past": "",
        "future": ""
      },
      {
        "base": "I believe people can change.",
        "affirmative": "I believe people can change.",
        "negative": "I don't believe...",
        "question": "What do you believe?",
        "past": "",
        "future": ""
      },
      {
        "base": "It depends on how you define freedom.",
        "affirmative": "It depends on how you define freedom.",
        "negative": "It doesn't simply depend on...",
        "question": "What does it depend on?",
        "past": "",
        "future": ""
      },
      {
        "base": "I see your point, but I disagree.",
        "affirmative": "I see your point, but I disagree.",
        "negative": "I don't see your point.",
        "question": "Do you see my point?",
        "past": "",
        "future": ""
      },
      {
        "base": "I agree with you.",
        "affirmative": "I agree with you.",
        "negative": "I don't agree with...",
        "question": "Do you agree?",
        "past": "",
        "future": ""
      }
    ],
    "questions": [
      {
        "q": "What is freedom?",
        "sample": "In my opinion, freedom is complicated."
      },
      {
        "q": "Do you think people are truly free?",
        "sample": "I think our choices are influenced by many things."
      },
      {
        "q": "What gives life meaning?",
        "sample": "I believe people have some control over their lives."
      },
      {
        "q": "What makes people happy?",
        "sample": "It depends on how you define freedom."
      },
      {
        "q": "Can money buy happiness?",
        "sample": "What gives life meaning?"
      },
      {
        "q": "Is morality universal?",
        "sample": "Do you think people are truly free?"
      },
      {
        "q": "Do people have control over their choices?",
        "sample": "Can desire control our decisions?"
      },
      {
        "q": "How much do our environment and experiences influence us?",
        "sample": "I don't have a simple answer."
      },
      {
        "q": "What is a meaningful life?",
        "sample": "There are different ways to look at this."
      },
      {
        "q": "Is it possible to know what is objectively right?",
        "sample": "I see your point."
      },
      {
        "q": "Do you agree that desire can control people?",
        "sample": "I agree with part of what you said."
      },
      {
        "q": "What is more important: freedom or security?",
        "sample": "I don't completely agree."
      },
      {
        "q": "Can suffering have meaning?",
        "sample": "That argument makes sense."
      },
      {
        "q": "What does identity mean to you?",
        "sample": "I need to think about that."
      },
      {
        "q": "Defend an opinion and respond to a different perspective.",
        "sample": "That's an interesting perspective."
      }
    ],
    "exercises": {
      "translate": [
        {
          "pt": "Na minha opinião, liberdade é complicada.",
          "answer": "In my opinion, freedom is complicated."
        },
        {
          "pt": "Acho que nossas escolhas são influenciadas por muitas coisas.",
          "answer": "I think our choices are influenced by many things."
        },
        {
          "pt": "Acredito que as pessoas têm algum controle sobre suas vidas.",
          "answer": "I believe people have some control over their lives."
        },
        {
          "pt": "Depende de como você define liberdade.",
          "answer": "It depends on how you define freedom."
        },
        {
          "pt": "O que dá sentido à vida?",
          "answer": "What gives life meaning?"
        },
        {
          "pt": "Você acha que as pessoas são realmente livres?",
          "answer": "Do you think people are truly free?"
        },
        {
          "pt": "O desejo pode controlar nossas decisões?",
          "answer": "Can desire control our decisions?"
        },
        {
          "pt": "Não tenho uma resposta simples.",
          "answer": "I don't have a simple answer."
        }
      ],
      "fillBlank": [
        {
          "sentence": "There are ___ ways to look at this.",
          "options": [
            "different",
            "work",
            "like",
            "know"
          ],
          "answer": "different"
        },
        {
          "sentence": "I agree ___ part of what you said.",
          "options": [
            "with",
            "work",
            "like",
            "know"
          ],
          "answer": "with"
        },
        {
          "sentence": "I need ___ think about that.",
          "options": [
            "to",
            "work",
            "like",
            "know"
          ],
          "answer": "to"
        },
        {
          "sentence": "I might ___ wrong, but I think...",
          "options": [
            "be",
            "work",
            "like",
            "know"
          ],
          "answer": "be"
        }
      ],
      "multipleChoice": [
        {
          "q": "What does \"From my experience, people often...\" mean?",
          "options": [
            "Pela minha experiência, as pessoas frequentemente...",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Pela minha experiência, as pessoas frequentemente..."
        },
        {
          "q": "What does \"However, there's another side to this.\" mean?",
          "options": [
            "Porém, existe outro lado disso.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Porém, existe outro lado disso."
        },
        {
          "q": "What does \"Although it sounds simple, it's actually complicated.\" mean?",
          "options": [
            "Embora pareça simples, na verdade é complicado.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Embora pareça simples, na verdade é complicado."
        },
        {
          "q": "What does \"I think context matters.\" mean?",
          "options": [
            "Acho que o contexto importa.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Acho que o contexto importa."
        },
        {
          "q": "What does \"What do you mean by freedom?\" mean?",
          "options": [
            "O que você quer dizer com liberdade?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "O que você quer dizer com liberdade?"
        },
        {
          "q": "What does \"How would you define happiness?\" mean?",
          "options": [
            "Como você definiria felicidade?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Como você definiria felicidade?"
        },
        {
          "q": "What does \"Do you think morality is universal?\" mean?",
          "options": [
            "Você acha que a moralidade é universal?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Você acha que a moralidade é universal?"
        },
        {
          "q": "What does \"Can we know what is objectively right?\" mean?",
          "options": [
            "Podemos saber o que é objetivamente certo?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Podemos saber o que é objetivamente certo?"
        }
      ],
      "rearrange": [
        {
          "scrambled": [
            "complicated",
            "is",
            "freedom",
            "opinion",
            "my",
            "In"
          ],
          "answer": "In my opinion, freedom is complicated"
        },
        {
          "scrambled": [
            "things",
            "many",
            "by",
            "influenced",
            "are",
            "choices",
            "our",
            "think",
            "I"
          ],
          "answer": "I think our choices are influenced by many things"
        },
        {
          "scrambled": [
            "lives",
            "their",
            "over",
            "control",
            "some",
            "have",
            "people",
            "believe",
            "I"
          ],
          "answer": "I believe people have some control over their lives"
        },
        {
          "scrambled": [
            "freedom",
            "define",
            "you",
            "how",
            "on",
            "depends",
            "It"
          ],
          "answer": "It depends on how you define freedom"
        },
        {
          "scrambled": [
            "meaning",
            "life",
            "gives",
            "What"
          ],
          "answer": "What gives life meaning"
        },
        {
          "scrambled": [
            "free",
            "truly",
            "are",
            "people",
            "think",
            "you",
            "Do"
          ],
          "answer": "Do you think people are truly free"
        },
        {
          "scrambled": [
            "decisions",
            "our",
            "control",
            "desire",
            "Can"
          ],
          "answer": "Can desire control our decisions"
        },
        {
          "scrambled": [
            "answer",
            "simple",
            "a",
            "have",
            "don't",
            "I"
          ],
          "answer": "I don't have a simple answer"
        }
      ],
      "listening": [
        {
          "audio": "In my opinion, freedom is complicated.",
          "options": [
            "In my opinion, freedom is complicated.",
            "I think our choices are influenced by many things.",
            "I believe people have some control over their lives."
          ],
          "answer": "In my opinion, freedom is complicated."
        },
        {
          "audio": "I think our choices are influenced by many things.",
          "options": [
            "I think our choices are influenced by many things.",
            "I believe people have some control over their lives.",
            "It depends on how you define freedom."
          ],
          "answer": "I think our choices are influenced by many things."
        },
        {
          "audio": "I believe people have some control over their lives.",
          "options": [
            "I believe people have some control over their lives.",
            "It depends on how you define freedom.",
            "What gives life meaning?"
          ],
          "answer": "I believe people have some control over their lives."
        },
        {
          "audio": "It depends on how you define freedom.",
          "options": [
            "It depends on how you define freedom.",
            "What gives life meaning?",
            "Do you think people are truly free?"
          ],
          "answer": "It depends on how you define freedom."
        },
        {
          "audio": "What gives life meaning?",
          "options": [
            "What gives life meaning?",
            "Do you think people are truly free?",
            "Can desire control our decisions?"
          ],
          "answer": "What gives life meaning?"
        },
        {
          "audio": "Do you think people are truly free?",
          "options": [
            "Do you think people are truly free?",
            "Can desire control our decisions?",
            "I don't have a simple answer."
          ],
          "answer": "Do you think people are truly free?"
        },
        {
          "audio": "Can desire control our decisions?",
          "options": [
            "Can desire control our decisions?",
            "I don't have a simple answer.",
            "There are different ways to look at this."
          ],
          "answer": "Can desire control our decisions?"
        },
        {
          "audio": "I don't have a simple answer.",
          "options": [
            "I don't have a simple answer.",
            "There are different ways to look at this.",
            "I see your point."
          ],
          "answer": "I don't have a simple answer."
        }
      ]
    },
    "speakingSentences": [
      "In my opinion, freedom is complicated.",
      "I think our choices are influenced by many things.",
      "I believe people have some control over their lives.",
      "It depends on how you define freedom.",
      "What gives life meaning?",
      "Do you think people are truly free?",
      "Can desire control our decisions?",
      "I don't have a simple answer."
    ],
    "talkPrompts": [
      "What is freedom?",
      "Do you think people are truly free?",
      "What gives life meaning?",
      "What makes people happy?",
      "Can money buy happiness?",
      "Is morality universal?",
      "Do people have control over their choices?",
      "How much do our environment and experiences influence us?"
    ],
    "reading": []
  },
  {
    "id": "island08",
    "number": 8,
    "name": "Technology & AI",
    "emoji": "🤖",
    "description": "Explain technology, AI, programming and your own projects.",
    "unlockedByDefault": false,
    "goal": "Explain AI, technology and your own projects.",
    "vocabulary": [
      {
        "en": "technology",
        "pt": "tecnologia",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "artificial intelligence",
        "pt": "inteligência artificial",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "AI agent",
        "pt": "agente de IA",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "software",
        "pt": "software",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "programming",
        "pt": "programação",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "developer",
        "pt": "desenvolvedor",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "website",
        "pt": "site",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "application",
        "pt": "aplicativo",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "database",
        "pt": "banco de dados",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "API",
        "pt": "API",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "automation",
        "pt": "automação",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "workflow",
        "pt": "fluxo de trabalho",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "model",
        "pt": "modelo",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "prompt",
        "pt": "prompt",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "chatbot",
        "pt": "chatbot",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "data",
        "pt": "dados",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "code",
        "pt": "código",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "bug",
        "pt": "erro de software",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "feature",
        "pt": "recurso",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "user",
        "pt": "usuário",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "interface",
        "pt": "interface",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "prototype",
        "pt": "protótipo",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "deploy",
        "pt": "publicar/deployar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "build",
        "pt": "construir/desenvolver",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "test",
        "pt": "testar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "improve",
        "pt": "melhorar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "solve",
        "pt": "resolver",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "create",
        "pt": "criar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "tool",
        "pt": "ferramenta",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "project",
        "pt": "projeto",
        "approx": "",
        "ipa": ""
      }
    ],
    "coreSentences": [
      {
        "en": "I'm interested in artificial intelligence.",
        "pt": "Eu me interesso por inteligência artificial."
      },
      {
        "en": "I've been learning about AI tools.",
        "pt": "Tenho aprendido sobre ferramentas de IA."
      },
      {
        "en": "I like building small projects.",
        "pt": "Gosto de construir pequenos projetos."
      },
      {
        "en": "I'm working on a website.",
        "pt": "Estou trabalhando em um site."
      },
      {
        "en": "The project uses a database.",
        "pt": "O projeto usa um banco de dados."
      },
      {
        "en": "I'm testing a new tool.",
        "pt": "Estou testando uma ferramenta nova."
      },
      {
        "en": "I found a bug in the application.",
        "pt": "Encontrei um bug no aplicativo."
      },
      {
        "en": "I need to fix this problem.",
        "pt": "Preciso corrigir esse problema."
      },
      {
        "en": "The user can create a personalized page.",
        "pt": "O usuário pode criar uma página personalizada."
      },
      {
        "en": "The idea is to automate part of the process.",
        "pt": "A ideia é automatizar parte do processo."
      },
      {
        "en": "I'm still improving the prototype.",
        "pt": "Ainda estou melhorando o protótipo."
      },
      {
        "en": "I use AI to brainstorm ideas.",
        "pt": "Uso IA para gerar ideias."
      },
      {
        "en": "I also use AI to write and analyze code.",
        "pt": "Também uso IA para escrever e analisar código."
      },
      {
        "en": "What do you think about AI?",
        "pt": "O que você acha de IA?"
      },
      {
        "en": "Do you use AI in your daily life?",
        "pt": "Você usa IA no dia a dia?"
      },
      {
        "en": "What kind of AI projects would you build?",
        "pt": "Que tipo de projeto de IA você construiria?"
      },
      {
        "en": "AI can save time, but it also creates new challenges.",
        "pt": "A IA pode economizar tempo, mas também cria novos desafios."
      },
      {
        "en": "I want to understand how these tools work.",
        "pt": "Quero entender como essas ferramentas funcionam."
      },
      {
        "en": "I'm not an expert yet.",
        "pt": "Ainda não sou especialista."
      },
      {
        "en": "I'm learning by building things.",
        "pt": "Estou aprendendo construindo coisas."
      },
      {
        "en": "What problem does your project solve?",
        "pt": "Que problema seu projeto resolve?"
      },
      {
        "en": "How does the application work?",
        "pt": "Como o aplicativo funciona?"
      },
      {
        "en": "What technology are you using?",
        "pt": "Que tecnologia você está usando?"
      },
      {
        "en": "What would you improve?",
        "pt": "O que você melhoraria?"
      },
      {
        "en": "I like experimenting with new tools.",
        "pt": "Gosto de experimentar ferramentas novas."
      }
    ],
    "patterns": [
      {
        "title": "I'm working on + project",
        "examples": [
          "I'm working on a website.",
          "What are you working on?"
        ],
        "variationBank": [
          "I'm working on a website.",
          "I'm not working on...",
          "What are you working on?"
        ]
      },
      {
        "title": "The idea is to + verb",
        "examples": [
          "The idea is to automate the process.",
          "What's the idea?"
        ],
        "variationBank": [
          "The idea is to automate the process.",
          "The idea isn't to...",
          "What's the idea?"
        ]
      },
      {
        "title": "It allows users to + verb",
        "examples": [
          "It allows users to create pages.",
          "What does it allow?"
        ],
        "variationBank": [
          "It allows users to create pages.",
          "It doesn't allow...",
          "What does it allow?"
        ]
      },
      {
        "title": "I'm using + technology",
        "examples": [
          "I'm using a database.",
          "What are you using?"
        ],
        "variationBank": [
          "I'm using a database.",
          "I'm not using...",
          "What are you using?"
        ]
      },
      {
        "title": "I built + object",
        "examples": [
          "I built a prototype.",
          "What did you build?"
        ],
        "variationBank": [
          "I built a prototype.",
          "I didn't build...",
          "What did you build?"
        ]
      },
      {
        "title": "I found a bug in + object",
        "examples": [
          "I found a bug in the app.",
          "Did you find a bug?"
        ],
        "variationBank": [
          "I found a bug in the app.",
          "I didn't find...",
          "Did you find a bug?"
        ]
      },
      {
        "title": "I'm trying to + verb",
        "examples": [
          "I'm trying to solve it.",
          "What are you trying to do?"
        ],
        "variationBank": [
          "I'm trying to solve it.",
          "I'm not trying to...",
          "What are you trying to do?"
        ]
      },
      {
        "title": "If I had + resource, I would + verb",
        "examples": [
          "If I had more time, I would improve it.",
          "What would you build?"
        ],
        "variationBank": [
          "If I had more time, I would improve it.",
          "If I didn't have...",
          "What would you build?"
        ]
      }
    ],
    "variations": [
      {
        "base": "I'm working on a website.",
        "affirmative": "I'm working on a website.",
        "negative": "I'm not working on...",
        "question": "What are you working on?",
        "past": "",
        "future": ""
      },
      {
        "base": "The idea is to automate the process.",
        "affirmative": "The idea is to automate the process.",
        "negative": "The idea isn't to...",
        "question": "What's the idea?",
        "past": "",
        "future": ""
      },
      {
        "base": "It allows users to create pages.",
        "affirmative": "It allows users to create pages.",
        "negative": "It doesn't allow...",
        "question": "What does it allow?",
        "past": "",
        "future": ""
      },
      {
        "base": "I'm using a database.",
        "affirmative": "I'm using a database.",
        "negative": "I'm not using...",
        "question": "What are you using?",
        "past": "",
        "future": ""
      },
      {
        "base": "I built a prototype.",
        "affirmative": "I built a prototype.",
        "negative": "I didn't build...",
        "question": "What did you build?",
        "past": "",
        "future": ""
      }
    ],
    "questions": [
      {
        "q": "What do you think about AI?",
        "sample": "I'm interested in artificial intelligence."
      },
      {
        "q": "How do you use AI?",
        "sample": "I've been learning about AI tools."
      },
      {
        "q": "What AI tools have you tried?",
        "sample": "I like building small projects."
      },
      {
        "q": "What are you building right now?",
        "sample": "I'm working on a website."
      },
      {
        "q": "How does your project work?",
        "sample": "The project uses a database."
      },
      {
        "q": "What problem does it solve?",
        "sample": "I'm testing a new tool."
      },
      {
        "q": "What technology are you using?",
        "sample": "I found a bug in the application."
      },
      {
        "q": "What is an API?",
        "sample": "I need to fix this problem."
      },
      {
        "q": "What is automation?",
        "sample": "The user can create a personalized page."
      },
      {
        "q": "Do you think AI will change jobs?",
        "sample": "The idea is to automate part of the process."
      },
      {
        "q": "What are the risks of AI?",
        "sample": "I'm still improving the prototype."
      },
      {
        "q": "What are the benefits of AI?",
        "sample": "I use AI to brainstorm ideas."
      },
      {
        "q": "What would you build if you had unlimited resources?",
        "sample": "I also use AI to write and analyze code."
      },
      {
        "q": "How do you learn programming?",
        "sample": "What do you think about AI?"
      },
      {
        "q": "Explain one of your projects to a non-technical person.",
        "sample": "Do you use AI in your daily life?"
      }
    ],
    "exercises": {
      "translate": [
        {
          "pt": "Eu me interesso por inteligência artificial.",
          "answer": "I'm interested in artificial intelligence."
        },
        {
          "pt": "Tenho aprendido sobre ferramentas de IA.",
          "answer": "I've been learning about AI tools."
        },
        {
          "pt": "Gosto de construir pequenos projetos.",
          "answer": "I like building small projects."
        },
        {
          "pt": "Estou trabalhando em um site.",
          "answer": "I'm working on a website."
        },
        {
          "pt": "O projeto usa um banco de dados.",
          "answer": "The project uses a database."
        },
        {
          "pt": "Estou testando uma ferramenta nova.",
          "answer": "I'm testing a new tool."
        },
        {
          "pt": "Encontrei um bug no aplicativo.",
          "answer": "I found a bug in the application."
        },
        {
          "pt": "Preciso corrigir esse problema.",
          "answer": "I need to fix this problem."
        }
      ],
      "fillBlank": [
        {
          "sentence": "The user ___ create a personalized page.",
          "options": [
            "can",
            "work",
            "like",
            "know"
          ],
          "answer": "can"
        },
        {
          "sentence": "The idea ___ to automate part of the process.",
          "options": [
            "is",
            "work",
            "like",
            "know"
          ],
          "answer": "is"
        },
        {
          "sentence": "I'm still ___ the prototype.",
          "options": [
            "improving",
            "work",
            "like",
            "know"
          ],
          "answer": "improving"
        },
        {
          "sentence": "I use ___ to brainstorm ideas.",
          "options": [
            "AI",
            "work",
            "like",
            "know"
          ],
          "answer": "AI"
        },
        {
          "sentence": "I also ___ AI to write and analyze code.",
          "options": [
            "use",
            "work",
            "like",
            "know"
          ],
          "answer": "use"
        },
        {
          "sentence": "What do ___ think about AI?",
          "options": [
            "you",
            "work",
            "like",
            "know"
          ],
          "answer": "you"
        },
        {
          "sentence": "Do you ___ AI in your daily life?",
          "options": [
            "use",
            "work",
            "like",
            "know"
          ],
          "answer": "use"
        },
        {
          "sentence": "What kind ___ AI projects would you build?",
          "options": [
            "of",
            "work",
            "like",
            "know"
          ],
          "answer": "of"
        }
      ],
      "multipleChoice": [
        {
          "q": "What does \"AI can save time, but it also creates new challenges.\" mean?",
          "options": [
            "A IA pode economizar tempo, mas também cria novos desafios.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "A IA pode economizar tempo, mas também cria novos desafios."
        },
        {
          "q": "What does \"I want to understand how these tools work.\" mean?",
          "options": [
            "Quero entender como essas ferramentas funcionam.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Quero entender como essas ferramentas funcionam."
        },
        {
          "q": "What does \"I'm not an expert yet.\" mean?",
          "options": [
            "Ainda não sou especialista.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Ainda não sou especialista."
        },
        {
          "q": "What does \"I'm learning by building things.\" mean?",
          "options": [
            "Estou aprendendo construindo coisas.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Estou aprendendo construindo coisas."
        },
        {
          "q": "What does \"What problem does your project solve?\" mean?",
          "options": [
            "Que problema seu projeto resolve?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Que problema seu projeto resolve?"
        },
        {
          "q": "What does \"How does the application work?\" mean?",
          "options": [
            "Como o aplicativo funciona?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Como o aplicativo funciona?"
        },
        {
          "q": "What does \"What technology are you using?\" mean?",
          "options": [
            "Que tecnologia você está usando?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Que tecnologia você está usando?"
        },
        {
          "q": "What does \"What would you improve?\" mean?",
          "options": [
            "O que você melhoraria?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "O que você melhoraria?"
        }
      ],
      "rearrange": [
        {
          "scrambled": [
            "intelligence",
            "artificial",
            "in",
            "interested",
            "I'm"
          ],
          "answer": "I'm interested in artificial intelligence"
        },
        {
          "scrambled": [
            "tools",
            "AI",
            "about",
            "learning",
            "been",
            "I've"
          ],
          "answer": "I've been learning about AI tools"
        },
        {
          "scrambled": [
            "projects",
            "small",
            "building",
            "like",
            "I"
          ],
          "answer": "I like building small projects"
        },
        {
          "scrambled": [
            "website",
            "a",
            "on",
            "working",
            "I'm"
          ],
          "answer": "I'm working on a website"
        },
        {
          "scrambled": [
            "database",
            "a",
            "uses",
            "project",
            "The"
          ],
          "answer": "The project uses a database"
        },
        {
          "scrambled": [
            "tool",
            "new",
            "a",
            "testing",
            "I'm"
          ],
          "answer": "I'm testing a new tool"
        },
        {
          "scrambled": [
            "application",
            "the",
            "in",
            "bug",
            "a",
            "found",
            "I"
          ],
          "answer": "I found a bug in the application"
        },
        {
          "scrambled": [
            "problem",
            "this",
            "fix",
            "to",
            "need",
            "I"
          ],
          "answer": "I need to fix this problem"
        }
      ],
      "listening": [
        {
          "audio": "I'm interested in artificial intelligence.",
          "options": [
            "I'm interested in artificial intelligence.",
            "I've been learning about AI tools.",
            "I like building small projects."
          ],
          "answer": "I'm interested in artificial intelligence."
        },
        {
          "audio": "I've been learning about AI tools.",
          "options": [
            "I've been learning about AI tools.",
            "I like building small projects.",
            "I'm working on a website."
          ],
          "answer": "I've been learning about AI tools."
        },
        {
          "audio": "I like building small projects.",
          "options": [
            "I like building small projects.",
            "I'm working on a website.",
            "The project uses a database."
          ],
          "answer": "I like building small projects."
        },
        {
          "audio": "I'm working on a website.",
          "options": [
            "I'm working on a website.",
            "The project uses a database.",
            "I'm testing a new tool."
          ],
          "answer": "I'm working on a website."
        },
        {
          "audio": "The project uses a database.",
          "options": [
            "The project uses a database.",
            "I'm testing a new tool.",
            "I found a bug in the application."
          ],
          "answer": "The project uses a database."
        },
        {
          "audio": "I'm testing a new tool.",
          "options": [
            "I'm testing a new tool.",
            "I found a bug in the application.",
            "I need to fix this problem."
          ],
          "answer": "I'm testing a new tool."
        },
        {
          "audio": "I found a bug in the application.",
          "options": [
            "I found a bug in the application.",
            "I need to fix this problem.",
            "The user can create a personalized page."
          ],
          "answer": "I found a bug in the application."
        },
        {
          "audio": "I need to fix this problem.",
          "options": [
            "I need to fix this problem.",
            "The user can create a personalized page.",
            "The idea is to automate part of the process."
          ],
          "answer": "I need to fix this problem."
        }
      ]
    },
    "speakingSentences": [
      "I'm interested in artificial intelligence.",
      "I've been learning about AI tools.",
      "I like building small projects.",
      "I'm working on a website.",
      "The project uses a database.",
      "I'm testing a new tool.",
      "I found a bug in the application.",
      "I need to fix this problem."
    ],
    "talkPrompts": [
      "What do you think about AI?",
      "How do you use AI?",
      "What AI tools have you tried?",
      "What are you building right now?",
      "How does your project work?",
      "What problem does it solve?",
      "What technology are you using?",
      "What is an API?"
    ],
    "reading": []
  },
  {
    "id": "island09",
    "number": 9,
    "name": "Work & Career",
    "emoji": "💼",
    "description": "Talk about your professional experience, quality work and career goals.",
    "unlockedByDefault": false,
    "goal": "Talk about quality work, experience and career goals.",
    "vocabulary": [
      {
        "en": "quality",
        "pt": "qualidade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "quality control",
        "pt": "controle de qualidade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "quality management",
        "pt": "gestão da qualidade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "inspection",
        "pt": "inspeção",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "document",
        "pt": "documento",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "documentation",
        "pt": "documentação",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "procedure",
        "pt": "procedimento",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "nonconformity",
        "pt": "não conformidade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "corrective action",
        "pt": "ação corretiva",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "audit",
        "pt": "auditoria",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "report",
        "pt": "relatório",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "checklist",
        "pt": "lista de verificação",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "requirement",
        "pt": "requisito",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "standard",
        "pt": "norma/padrão",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "evidence",
        "pt": "evidência",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "deadline",
        "pt": "prazo",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "supplier",
        "pt": "fornecedor",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "construction site",
        "pt": "canteiro de obras",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "engineering",
        "pt": "engenharia",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "project",
        "pt": "projeto",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "renewable energy",
        "pt": "energia renovável",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "solar plant",
        "pt": "usina solar",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "meeting",
        "pt": "reunião",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "responsibility",
        "pt": "responsabilidade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "experience",
        "pt": "experiência",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "position",
        "pt": "cargo/vaga",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "salary",
        "pt": "salário",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "interview",
        "pt": "entrevista",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "career goal",
        "pt": "objetivo de carreira",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "international",
        "pt": "internacional",
        "approx": "",
        "ipa": ""
      }
    ],
    "coreSentences": [
      {
        "en": "I work in quality management.",
        "pt": "Eu trabalho com gestão da qualidade."
      },
      {
        "en": "I have experience in construction projects.",
        "pt": "Tenho experiência em projetos de construção."
      },
      {
        "en": "I worked on a solar energy project.",
        "pt": "Trabalhei em um projeto de energia solar."
      },
      {
        "en": "I work with quality documentation.",
        "pt": "Trabalho com documentação da qualidade."
      },
      {
        "en": "I check documents and requirements.",
        "pt": "Verifico documentos e requisitos."
      },
      {
        "en": "I participate in inspections.",
        "pt": "Participo de inspeções."
      },
      {
        "en": "We need evidence for the audit.",
        "pt": "Precisamos de evidências para a auditoria."
      },
      {
        "en": "We found a nonconformity.",
        "pt": "Encontramos uma não conformidade."
      },
      {
        "en": "We need to investigate the cause.",
        "pt": "Precisamos investigar a causa."
      },
      {
        "en": "We need to take corrective action.",
        "pt": "Precisamos tomar uma ação corretiva."
      },
      {
        "en": "The document needs to be updated.",
        "pt": "O documento precisa ser atualizado."
      },
      {
        "en": "We have a deadline tomorrow.",
        "pt": "Temos um prazo amanhã."
      },
      {
        "en": "I'm comfortable working with documentation.",
        "pt": "Tenho facilidade em trabalhar com documentação."
      },
      {
        "en": "I like organized processes.",
        "pt": "Gosto de processos organizados."
      },
      {
        "en": "I enjoy solving problems.",
        "pt": "Gosto de resolver problemas."
      },
      {
        "en": "Tell me about your experience.",
        "pt": "Fale sobre sua experiência."
      },
      {
        "en": "What are your main responsibilities?",
        "pt": "Quais são suas principais responsabilidades?"
      },
      {
        "en": "Why are you interested in this position?",
        "pt": "Por que você se interessa por esta vaga?"
      },
      {
        "en": "What are your career goals?",
        "pt": "Quais são seus objetivos de carreira?"
      },
      {
        "en": "I want to work internationally.",
        "pt": "Quero trabalhar internacionalmente."
      },
      {
        "en": "I'm looking for an opportunity to grow.",
        "pt": "Estou procurando uma oportunidade para crescer."
      },
      {
        "en": "I'm learning English for my career.",
        "pt": "Estou aprendendo inglês para minha carreira."
      },
      {
        "en": "I can learn new processes quickly.",
        "pt": "Consigo aprender novos processos rapidamente."
      },
      {
        "en": "I try to communicate problems clearly.",
        "pt": "Tento comunicar problemas com clareza."
      },
      {
        "en": "I want to keep developing my technical skills.",
        "pt": "Quero continuar desenvolvendo minhas habilidades técnicas."
      }
    ],
    "patterns": [
      {
        "title": "I work in + field",
        "examples": [
          "I work in quality management.",
          "What do you do?"
        ],
        "variationBank": [
          "I work in quality management.",
          "I don't work in...",
          "What do you do?"
        ]
      },
      {
        "title": "I have experience in + area",
        "examples": [
          "I have experience in construction.",
          "What experience do you have?"
        ],
        "variationBank": [
          "I have experience in construction.",
          "I don't have experience in...",
          "What experience do you have?"
        ]
      },
      {
        "title": "My responsibilities include + nouns/verbs",
        "examples": [
          "My responsibilities include document control.",
          "What are your responsibilities?"
        ],
        "variationBank": [
          "My responsibilities include document control.",
          "My responsibilities don't include...",
          "What are your responsibilities?"
        ]
      },
      {
        "title": "We need to + verb",
        "examples": [
          "We need to investigate the cause.",
          "What do you need to do?"
        ],
        "variationBank": [
          "We need to investigate the cause.",
          "We don't need to...",
          "What do you need to do?"
        ]
      },
      {
        "title": "The document needs to be + past participle",
        "examples": [
          "The document needs to be updated.",
          "What needs to be done?"
        ],
        "variationBank": [
          "The document needs to be updated.",
          "The document doesn't need to...",
          "What needs to be done?"
        ]
      },
      {
        "title": "I handled + situation",
        "examples": [
          "I handled a nonconformity.",
          "How did you handle it?"
        ],
        "variationBank": [
          "I handled a nonconformity.",
          "I didn't handle...",
          "How did you handle it?"
        ]
      },
      {
        "title": "I'm looking for + opportunity",
        "examples": [
          "I'm looking for an international opportunity.",
          "What are you looking for?"
        ],
        "variationBank": [
          "I'm looking for an international opportunity.",
          "I'm not looking for...",
          "What are you looking for?"
        ]
      },
      {
        "title": "My goal is to + verb",
        "examples": [
          "My goal is to work internationally.",
          "What is your career goal?"
        ],
        "variationBank": [
          "My goal is to work internationally.",
          "My goal isn't to...",
          "What is your career goal?"
        ]
      }
    ],
    "variations": [
      {
        "base": "I work in quality management.",
        "affirmative": "I work in quality management.",
        "negative": "I don't work in...",
        "question": "What do you do?",
        "past": "",
        "future": ""
      },
      {
        "base": "I have experience in construction.",
        "affirmative": "I have experience in construction.",
        "negative": "I don't have experience in...",
        "question": "What experience do you have?",
        "past": "",
        "future": ""
      },
      {
        "base": "My responsibilities include document control.",
        "affirmative": "My responsibilities include document control.",
        "negative": "My responsibilities don't include...",
        "question": "What are your responsibilities?",
        "past": "",
        "future": ""
      },
      {
        "base": "We need to investigate the cause.",
        "affirmative": "We need to investigate the cause.",
        "negative": "We don't need to...",
        "question": "What do you need to do?",
        "past": "",
        "future": ""
      },
      {
        "base": "The document needs to be updated.",
        "affirmative": "The document needs to be updated.",
        "negative": "The document doesn't need to...",
        "question": "What needs to be done?",
        "past": "",
        "future": ""
      }
    ],
    "questions": [
      {
        "q": "What do you do?",
        "sample": "I work in quality management."
      },
      {
        "q": "Tell me about your professional experience.",
        "sample": "I have experience in construction projects."
      },
      {
        "q": "What were your main responsibilities?",
        "sample": "I worked on a solar energy project."
      },
      {
        "q": "What is quality management?",
        "sample": "I work with quality documentation."
      },
      {
        "q": "What is a nonconformity?",
        "sample": "I check documents and requirements."
      },
      {
        "q": "How do you handle a problem at work?",
        "sample": "I participate in inspections."
      },
      {
        "q": "How do you organize documents?",
        "sample": "We need evidence for the audit."
      },
      {
        "q": "Have you participated in audits?",
        "sample": "We found a nonconformity."
      },
      {
        "q": "Tell me about a difficult project.",
        "sample": "We need to investigate the cause."
      },
      {
        "q": "How do you communicate a problem?",
        "sample": "We need to take corrective action."
      },
      {
        "q": "What are your strengths at work?",
        "sample": "The document needs to be updated."
      },
      {
        "q": "What are you currently learning?",
        "sample": "We have a deadline tomorrow."
      },
      {
        "q": "Why are you looking for an international opportunity?",
        "sample": "I'm comfortable working with documentation."
      },
      {
        "q": "What are your career goals?",
        "sample": "I like organized processes."
      },
      {
        "q": "Tell me about yourself as a professional.",
        "sample": "I enjoy solving problems."
      }
    ],
    "exercises": {
      "translate": [
        {
          "pt": "Eu trabalho com gestão da qualidade.",
          "answer": "I work in quality management."
        },
        {
          "pt": "Tenho experiência em projetos de construção.",
          "answer": "I have experience in construction projects."
        },
        {
          "pt": "Trabalhei em um projeto de energia solar.",
          "answer": "I worked on a solar energy project."
        },
        {
          "pt": "Trabalho com documentação da qualidade.",
          "answer": "I work with quality documentation."
        },
        {
          "pt": "Verifico documentos e requisitos.",
          "answer": "I check documents and requirements."
        },
        {
          "pt": "Participo de inspeções.",
          "answer": "I participate in inspections."
        },
        {
          "pt": "Precisamos de evidências para a auditoria.",
          "answer": "We need evidence for the audit."
        },
        {
          "pt": "Encontramos uma não conformidade.",
          "answer": "We found a nonconformity."
        }
      ],
      "fillBlank": [
        {
          "sentence": "We need ___ investigate the cause.",
          "options": [
            "to",
            "work",
            "like",
            "know"
          ],
          "answer": "to"
        },
        {
          "sentence": "We need ___ take corrective action.",
          "options": [
            "to",
            "work",
            "like",
            "know"
          ],
          "answer": "to"
        },
        {
          "sentence": "The document ___ to be updated.",
          "options": [
            "needs",
            "work",
            "like",
            "know"
          ],
          "answer": "needs"
        },
        {
          "sentence": "We have ___ deadline tomorrow.",
          "options": [
            "a",
            "work",
            "like",
            "know"
          ],
          "answer": "a"
        },
        {
          "sentence": "I'm comfortable ___ with documentation.",
          "options": [
            "working",
            "work",
            "like",
            "know"
          ],
          "answer": "working"
        },
        {
          "sentence": "Tell me ___ your experience.",
          "options": [
            "about",
            "work",
            "like",
            "know"
          ],
          "answer": "about"
        }
      ],
      "multipleChoice": [
        {
          "q": "What does \"What are your main responsibilities?\" mean?",
          "options": [
            "Quais são suas principais responsabilidades?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Quais são suas principais responsabilidades?"
        },
        {
          "q": "What does \"Why are you interested in this position?\" mean?",
          "options": [
            "Por que você se interessa por esta vaga?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Por que você se interessa por esta vaga?"
        },
        {
          "q": "What does \"What are your career goals?\" mean?",
          "options": [
            "Quais são seus objetivos de carreira?",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Quais são seus objetivos de carreira?"
        },
        {
          "q": "What does \"I want to work internationally.\" mean?",
          "options": [
            "Quero trabalhar internacionalmente.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Quero trabalhar internacionalmente."
        },
        {
          "q": "What does \"I'm looking for an opportunity to grow.\" mean?",
          "options": [
            "Estou procurando uma oportunidade para crescer.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Estou procurando uma oportunidade para crescer."
        },
        {
          "q": "What does \"I'm learning English for my career.\" mean?",
          "options": [
            "Estou aprendendo inglês para minha carreira.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Estou aprendendo inglês para minha carreira."
        },
        {
          "q": "What does \"I can learn new processes quickly.\" mean?",
          "options": [
            "Consigo aprender novos processos rapidamente.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Consigo aprender novos processos rapidamente."
        },
        {
          "q": "What does \"I try to communicate problems clearly.\" mean?",
          "options": [
            "Tento comunicar problemas com clareza.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Tento comunicar problemas com clareza."
        }
      ],
      "rearrange": [
        {
          "scrambled": [
            "management",
            "quality",
            "in",
            "work",
            "I"
          ],
          "answer": "I work in quality management"
        },
        {
          "scrambled": [
            "projects",
            "construction",
            "in",
            "experience",
            "have",
            "I"
          ],
          "answer": "I have experience in construction projects"
        },
        {
          "scrambled": [
            "project",
            "energy",
            "solar",
            "a",
            "on",
            "worked",
            "I"
          ],
          "answer": "I worked on a solar energy project"
        },
        {
          "scrambled": [
            "documentation",
            "quality",
            "with",
            "work",
            "I"
          ],
          "answer": "I work with quality documentation"
        },
        {
          "scrambled": [
            "requirements",
            "and",
            "documents",
            "check",
            "I"
          ],
          "answer": "I check documents and requirements"
        },
        {
          "scrambled": [
            "inspections",
            "in",
            "participate",
            "I"
          ],
          "answer": "I participate in inspections"
        },
        {
          "scrambled": [
            "audit",
            "the",
            "for",
            "evidence",
            "need",
            "We"
          ],
          "answer": "We need evidence for the audit"
        },
        {
          "scrambled": [
            "nonconformity",
            "a",
            "found",
            "We"
          ],
          "answer": "We found a nonconformity"
        }
      ],
      "listening": [
        {
          "audio": "I work in quality management.",
          "options": [
            "I work in quality management.",
            "I have experience in construction projects.",
            "I worked on a solar energy project."
          ],
          "answer": "I work in quality management."
        },
        {
          "audio": "I have experience in construction projects.",
          "options": [
            "I have experience in construction projects.",
            "I worked on a solar energy project.",
            "I work with quality documentation."
          ],
          "answer": "I have experience in construction projects."
        },
        {
          "audio": "I worked on a solar energy project.",
          "options": [
            "I worked on a solar energy project.",
            "I work with quality documentation.",
            "I check documents and requirements."
          ],
          "answer": "I worked on a solar energy project."
        },
        {
          "audio": "I work with quality documentation.",
          "options": [
            "I work with quality documentation.",
            "I check documents and requirements.",
            "I participate in inspections."
          ],
          "answer": "I work with quality documentation."
        },
        {
          "audio": "I check documents and requirements.",
          "options": [
            "I check documents and requirements.",
            "I participate in inspections.",
            "We need evidence for the audit."
          ],
          "answer": "I check documents and requirements."
        },
        {
          "audio": "I participate in inspections.",
          "options": [
            "I participate in inspections.",
            "We need evidence for the audit.",
            "We found a nonconformity."
          ],
          "answer": "I participate in inspections."
        },
        {
          "audio": "We need evidence for the audit.",
          "options": [
            "We need evidence for the audit.",
            "We found a nonconformity.",
            "We need to investigate the cause."
          ],
          "answer": "We need evidence for the audit."
        },
        {
          "audio": "We found a nonconformity.",
          "options": [
            "We found a nonconformity.",
            "We need to investigate the cause.",
            "We need to take corrective action."
          ],
          "answer": "We found a nonconformity."
        }
      ]
    },
    "speakingSentences": [
      "I work in quality management.",
      "I have experience in construction projects.",
      "I worked on a solar energy project.",
      "I work with quality documentation.",
      "I check documents and requirements.",
      "I participate in inspections.",
      "We need evidence for the audit.",
      "We found a nonconformity."
    ],
    "talkPrompts": [
      "What do you do?",
      "Tell me about your professional experience.",
      "What were your main responsibilities?",
      "What is quality management?",
      "What is a nonconformity?",
      "How do you handle a problem at work?",
      "How do you organize documents?",
      "Have you participated in audits?"
    ],
    "reading": []
  },
  {
    "id": "island10",
    "number": 10,
    "name": "Real English",
    "emoji": "🌎",
    "description": "Understand natural speech, fillers, reductions and spontaneous conversation.",
    "unlockedByDefault": false,
    "goal": "Understand and produce natural, spontaneous English.",
    "vocabulary": [
      {
        "en": "natural speech",
        "pt": "fala natural",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "contraction",
        "pt": "contração",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "reduction",
        "pt": "redução na fala",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "filler",
        "pt": "palavra de preenchimento",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "actually",
        "pt": "na verdade",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "basically",
        "pt": "basicamente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "literally",
        "pt": "literalmente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "honestly",
        "pt": "honestamente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "basically",
        "pt": "basicamente",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "you know",
        "pt": "sabe",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "I mean",
        "pt": "quer dizer",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "well",
        "pt": "bom/então",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "like",
        "pt": "tipo",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "kind of",
        "pt": "meio que",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "sort of",
        "pt": "mais ou menos",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "gonna",
        "pt": "going to",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "wanna",
        "pt": "want to",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "gotta",
        "pt": "have got to/ter que",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "lemme",
        "pt": "let me",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "gimme",
        "pt": "give me",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "dunno",
        "pt": "don't know",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "figure out",
        "pt": "descobrir/resolver",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "hang on",
        "pt": "espera",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "hold on",
        "pt": "espera",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "no worries",
        "pt": "sem problema",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "fair enough",
        "pt": "justo/entendi",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "sounds good",
        "pt": "parece bom",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "my bad",
        "pt": "foi mal",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "I didn't catch that",
        "pt": "não entendi/captei",
        "approx": "",
        "ipa": ""
      },
      {
        "en": "take your time",
        "pt": "sem pressa",
        "approx": "",
        "ipa": ""
      }
    ],
    "coreSentences": [
      {
        "en": "What have you been up to?",
        "pt": "O que você tem feito?"
      },
      {
        "en": "I'm just chilling.",
        "pt": "Só estou de boa."
      },
      {
        "en": "I'm gonna get some coffee.",
        "pt": "Vou pegar um café."
      },
      {
        "en": "I wanna show you something.",
        "pt": "Quero te mostrar uma coisa."
      },
      {
        "en": "I've gotta go soon.",
        "pt": "Tenho que ir em breve."
      },
      {
        "en": "Hang on a second.",
        "pt": "Espera um segundo."
      },
      {
        "en": "Give me a minute.",
        "pt": "Me dá um minuto."
      },
      {
        "en": "I didn't catch that.",
        "pt": "Não entendi/captei isso."
      },
      {
        "en": "Could you say that again?",
        "pt": "Pode falar de novo?"
      },
      {
        "en": "What do you mean?",
        "pt": "O que você quer dizer?"
      },
      {
        "en": "You know what I mean?",
        "pt": "Sabe o que quero dizer?"
      },
      {
        "en": "I mean, it's kind of complicated.",
        "pt": "Quer dizer, é meio complicado."
      },
      {
        "en": "Actually, I changed my mind.",
        "pt": "Na verdade, mudei de ideia."
      },
      {
        "en": "Basically, that's what happened.",
        "pt": "Basicamente, foi isso que aconteceu."
      },
      {
        "en": "No worries.",
        "pt": "Sem problema."
      },
      {
        "en": "Fair enough.",
        "pt": "Justo/entendi."
      },
      {
        "en": "Sounds good.",
        "pt": "Parece bom."
      },
      {
        "en": "My bad.",
        "pt": "Foi mal."
      },
      {
        "en": "Take your time.",
        "pt": "Sem pressa."
      },
      {
        "en": "Let me think.",
        "pt": "Deixa eu pensar."
      },
      {
        "en": "I'm not sure how to explain it.",
        "pt": "Não sei bem como explicar."
      },
      {
        "en": "It's hard to put into words.",
        "pt": "É difícil colocar em palavras."
      },
      {
        "en": "That's exactly what I mean.",
        "pt": "É exatamente isso que quero dizer."
      },
      {
        "en": "It depends on the situation.",
        "pt": "Depende da situação."
      },
      {
        "en": "I can follow you, but sometimes you speak too fast.",
        "pt": "Consigo acompanhar, mas às vezes você fala rápido demais."
      }
    ],
    "patterns": [
      {
        "title": "I'm gonna + verb",
        "examples": [
          "I'm gonna get some coffee.",
          "What are you gonna do?"
        ],
        "variationBank": [
          "I'm gonna get some coffee.",
          "I'm not gonna...",
          "What are you gonna do?"
        ]
      },
      {
        "title": "I wanna + verb",
        "examples": [
          "I wanna show you something.",
          "What do you wanna do?"
        ],
        "variationBank": [
          "I wanna show you something.",
          "I don't wanna...",
          "What do you wanna do?"
        ]
      },
      {
        "title": "I've gotta + verb",
        "examples": [
          "I've gotta go.",
          "What have you gotta do?"
        ],
        "variationBank": [
          "I've gotta go.",
          "I haven't gotta...",
          "What have you gotta do?"
        ]
      },
      {
        "title": "You know + clause",
        "examples": [
          "You know, it's complicated.",
          "You know...?"
        ],
        "variationBank": [
          "You know, it's complicated.",
          "—",
          "You know...?"
        ]
      },
      {
        "title": "I mean, + clarification",
        "examples": [
          "I mean, it's not exactly that.",
          "What do you mean?"
        ],
        "variationBank": [
          "I mean, it's not exactly that.",
          "—",
          "What do you mean?"
        ]
      },
      {
        "title": "It's kind of + adjective",
        "examples": [
          "It's kind of weird.",
          "Is it kind of...?"
        ],
        "variationBank": [
          "It's kind of weird.",
          "It's not really...",
          "Is it kind of...?"
        ]
      },
      {
        "title": "Hang on + time",
        "examples": [
          "Hang on a second.",
          "Can you hang on?"
        ],
        "variationBank": [
          "Hang on a second.",
          "—",
          "Can you hang on?"
        ]
      },
      {
        "title": "I didn't catch + object",
        "examples": [
          "I didn't catch that.",
          "Did you catch that?"
        ],
        "variationBank": [
          "I didn't catch that.",
          "I caught that.",
          "Did you catch that?"
        ]
      }
    ],
    "variations": [
      {
        "base": "I'm gonna get some coffee.",
        "affirmative": "I'm gonna get some coffee.",
        "negative": "I'm not gonna...",
        "question": "What are you gonna do?",
        "past": "",
        "future": ""
      },
      {
        "base": "I wanna show you something.",
        "affirmative": "I wanna show you something.",
        "negative": "I don't wanna...",
        "question": "What do you wanna do?",
        "past": "",
        "future": ""
      },
      {
        "base": "I've gotta go.",
        "affirmative": "I've gotta go.",
        "negative": "I haven't gotta...",
        "question": "What have you gotta do?",
        "past": "",
        "future": ""
      },
      {
        "base": "You know, it's complicated.",
        "affirmative": "You know, it's complicated.",
        "negative": "",
        "question": "You know...?",
        "past": "",
        "future": ""
      },
      {
        "base": "I mean, it's not exactly that.",
        "affirmative": "I mean, it's not exactly that.",
        "negative": "",
        "question": "What do you mean?",
        "past": "",
        "future": ""
      }
    ],
    "questions": [
      {
        "q": "What's up?",
        "sample": "What have you been up to?"
      },
      {
        "q": "What have you been up to?",
        "sample": "I'm just chilling."
      },
      {
        "q": "What do you mean?",
        "sample": "I'm gonna get some coffee."
      },
      {
        "q": "Can you say that again?",
        "sample": "I wanna show you something."
      },
      {
        "q": "Did you catch what I said?",
        "sample": "I've gotta go soon."
      },
      {
        "q": "How would you react if someone spoke very fast?",
        "sample": "Hang on a second."
      },
      {
        "q": "What fillers do native speakers use?",
        "sample": "Give me a minute."
      },
      {
        "q": "What is the difference between formal and casual English?",
        "sample": "I didn't catch that."
      },
      {
        "q": "When can you use 'gonna' or 'wanna'?",
        "sample": "Could you say that again?"
      },
      {
        "q": "How do you ask someone to slow down naturally?",
        "sample": "What do you mean?"
      },
      {
        "q": "How do you keep talking when you forget a word?",
        "sample": "You know what I mean?"
      },
      {
        "q": "How do you change the subject naturally?",
        "sample": "I mean, it's kind of complicated."
      },
      {
        "q": "How do you disagree without sounding rude?",
        "sample": "Actually, I changed my mind."
      },
      {
        "q": "How do you end a conversation naturally?",
        "sample": "Basically, that's what happened."
      },
      {
        "q": "Have a five-minute spontaneous conversation without translating.",
        "sample": "No worries."
      }
    ],
    "exercises": {
      "translate": [
        {
          "pt": "O que você tem feito?",
          "answer": "What have you been up to?"
        },
        {
          "pt": "Só estou de boa.",
          "answer": "I'm just chilling."
        },
        {
          "pt": "Vou pegar um café.",
          "answer": "I'm gonna get some coffee."
        },
        {
          "pt": "Quero te mostrar uma coisa.",
          "answer": "I wanna show you something."
        },
        {
          "pt": "Tenho que ir em breve.",
          "answer": "I've gotta go soon."
        },
        {
          "pt": "Espera um segundo.",
          "answer": "Hang on a second."
        },
        {
          "pt": "Me dá um minuto.",
          "answer": "Give me a minute."
        },
        {
          "pt": "Não entendi/captei isso.",
          "answer": "I didn't catch that."
        }
      ],
      "fillBlank": [
        {
          "sentence": "Could you ___ that again?",
          "options": [
            "say",
            "work",
            "like",
            "know"
          ],
          "answer": "say"
        },
        {
          "sentence": "You know ___ I mean?",
          "options": [
            "what",
            "work",
            "like",
            "know"
          ],
          "answer": "what"
        },
        {
          "sentence": "I mean, ___ kind of complicated.",
          "options": [
            "it's",
            "work",
            "like",
            "know"
          ],
          "answer": "it's"
        },
        {
          "sentence": "Actually, I ___ my mind.",
          "options": [
            "changed",
            "work",
            "like",
            "know"
          ],
          "answer": "changed"
        }
      ],
      "multipleChoice": [
        {
          "q": "What does \"Sounds good.\" mean?",
          "options": [
            "Parece bom.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Parece bom."
        },
        {
          "q": "What does \"My bad.\" mean?",
          "options": [
            "Foi mal.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Foi mal."
        },
        {
          "q": "What does \"Take your time.\" mean?",
          "options": [
            "Sem pressa.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Sem pressa."
        },
        {
          "q": "What does \"Let me think.\" mean?",
          "options": [
            "Deixa eu pensar.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Deixa eu pensar."
        },
        {
          "q": "What does \"I'm not sure how to explain it.\" mean?",
          "options": [
            "Não sei bem como explicar.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Não sei bem como explicar."
        },
        {
          "q": "What does \"It's hard to put into words.\" mean?",
          "options": [
            "É difícil colocar em palavras.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "É difícil colocar em palavras."
        },
        {
          "q": "What does \"That's exactly what I mean.\" mean?",
          "options": [
            "É exatamente isso que quero dizer.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "É exatamente isso que quero dizer."
        },
        {
          "q": "What does \"It depends on the situation.\" mean?",
          "options": [
            "Depende da situação.",
            "não sei",
            "talvez",
            "nenhuma das anteriores"
          ],
          "answer": "Depende da situação."
        }
      ],
      "rearrange": [
        {
          "scrambled": [
            "to",
            "up",
            "been",
            "you",
            "have",
            "What"
          ],
          "answer": "What have you been up to"
        },
        {
          "scrambled": [
            "coffee",
            "some",
            "get",
            "gonna",
            "I'm"
          ],
          "answer": "I'm gonna get some coffee"
        },
        {
          "scrambled": [
            "something",
            "you",
            "show",
            "wanna",
            "I"
          ],
          "answer": "I wanna show you something"
        },
        {
          "scrambled": [
            "soon",
            "go",
            "gotta",
            "I've"
          ],
          "answer": "I've gotta go soon"
        },
        {
          "scrambled": [
            "second",
            "a",
            "on",
            "Hang"
          ],
          "answer": "Hang on a second"
        },
        {
          "scrambled": [
            "minute",
            "a",
            "me",
            "Give"
          ],
          "answer": "Give me a minute"
        },
        {
          "scrambled": [
            "that",
            "catch",
            "didn't",
            "I"
          ],
          "answer": "I didn't catch that"
        }
      ],
      "listening": [
        {
          "audio": "What have you been up to?",
          "options": [
            "What have you been up to?",
            "I'm just chilling.",
            "I'm gonna get some coffee."
          ],
          "answer": "What have you been up to?"
        },
        {
          "audio": "I'm just chilling.",
          "options": [
            "I'm just chilling.",
            "I'm gonna get some coffee.",
            "I wanna show you something."
          ],
          "answer": "I'm just chilling."
        },
        {
          "audio": "I'm gonna get some coffee.",
          "options": [
            "I'm gonna get some coffee.",
            "I wanna show you something.",
            "I've gotta go soon."
          ],
          "answer": "I'm gonna get some coffee."
        },
        {
          "audio": "I wanna show you something.",
          "options": [
            "I wanna show you something.",
            "I've gotta go soon.",
            "Hang on a second."
          ],
          "answer": "I wanna show you something."
        },
        {
          "audio": "I've gotta go soon.",
          "options": [
            "I've gotta go soon.",
            "Hang on a second.",
            "Give me a minute."
          ],
          "answer": "I've gotta go soon."
        },
        {
          "audio": "Hang on a second.",
          "options": [
            "Hang on a second.",
            "Give me a minute.",
            "I didn't catch that."
          ],
          "answer": "Hang on a second."
        },
        {
          "audio": "Give me a minute.",
          "options": [
            "Give me a minute.",
            "I didn't catch that.",
            "Could you say that again?"
          ],
          "answer": "Give me a minute."
        },
        {
          "audio": "I didn't catch that.",
          "options": [
            "I didn't catch that.",
            "Could you say that again?",
            "What do you mean?"
          ],
          "answer": "I didn't catch that."
        }
      ]
    },
    "speakingSentences": [
      "What have you been up to?",
      "I'm just chilling.",
      "I'm gonna get some coffee.",
      "I wanna show you something.",
      "I've gotta go soon.",
      "Hang on a second.",
      "Give me a minute.",
      "I didn't catch that."
    ],
    "talkPrompts": [
      "What's up?",
      "What have you been up to?",
      "What do you mean?",
      "Can you say that again?",
      "Did you catch what I said?",
      "How would you react if someone spoke very fast?",
      "What fillers do native speakers use?",
      "What is the difference between formal and casual English?"
    ],
    "reading": []
  }
];

const CONNECTIONS = [
  { islands: ["island01","island03"], prompts: ["Introduce yourself to a new Discord friend.","Ask your friend three follow-up questions."] },
  { islands: ["island02","island04"], prompts: ["Tell a story about a normal day that became unusual.","Describe what happened and what you learned."] },
  { islands: ["island05","island06"], prompts: ["Compare relationships and culture in two countries.","How can cultural differences affect friendships?"] },
  { islands: ["island07","island08"], prompts: ["Discuss whether AI changes human freedom.","Give one argument and respond to another perspective."] },
  { islands: ["island08","island09"], prompts: ["Explain an AI project as if you were in a job interview.","Describe a technical problem and how you solved it."] },
  { islands: ["island09","island10"], prompts: ["Practice a casual conversation about your career.","Explain your work using natural, informal English."] }
];
if (typeof module !== "undefined") module.exports = { ISLANDS, CONNECTIONS };
