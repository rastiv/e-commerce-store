💻 Технологичен стек (Modern Stack)Bundler & Core: Vite (Последна версия) + React 19 + TypeScript 6Архитектура: LFA (Layered Feature Architecture) – ултра-лека, плоска и силно скалируемаДържавно управление (State): Redux Toolkit (Чист синхронен мениджмънт)Автентикация: Node.js + Better-Auth + SQLite (Сесии чрез HTTP-Only бисквитки)Форми и Валидация: React Hook Form + Zod + @hookform/resolvers/zodИнтернационализация: i18next + react-i18next + автоматичен LanguageDetector📂 Крайна структура на директориите (LFA Спецификация)Елиминирахме сложните FSD правила и „сплескахме“ проекта в три основни, лесно разбираеми слоя:bashsrc/
├── app/ # Глобална конфигурация на приложението
│ ├── AppRouter/ # Рутер конфигурация (routerConfig.tsx, index.tsx)
│ ├── StoreProvider/ # Чист Redux провайдър (без излишни createStore функции)
│ ├── ThemeProvider/ # Управление на темите (Dark/Light)
│ ├── ToastProvider/ # Глобални системни нотификации (Toasts)
│ ├── i18n/ # Централизиран i18n (config.ts)
│ │ └── locales/ # Споделени JSON преводи (bg/, en/) с барел индекси
│ ├── store/ # Строго типизиран глобален Redux Store
│ │ ├── config/ # (store.ts, StateSchema.ts)
│ │ ├── hooks.ts # Типизирани useAppDispatch и useAppSelector куки
│ │ └── index.ts # Основна входна точка за целия Redux свят
│ ├── styles/ # Глобални SCSS стилове и ресети
│ ├── App.tsx # Глобален Init (fetchUserSession при рефреш) и Layout
│ └── main.tsx # Ентри поинт на проекта (с включен i18n импорт!)
│
├── features/ # БИЗНЕС МОДУЛИ (Самостоятелни процеси на магазина)
│ ├── auth/ # --- МОДУЛ АВТЕНТИКАЦИЯ (Напълно плосък!) ---
│ │ ├── store/ # authSlice.ts (управлява само UserData | null и isAuth)
│ │ ├── LoginForm.tsx # Чист UI компонент с локален useState за лоудинг/грешки
│ │ ├── LoginForm.module.scss # Капсулирани стилове за формата
│ │ ├── loginSchema.ts # Zod схема за валидация, преместена тук (Co-location)
│ │ ├── LoginPage.tsx # Асинхронен контейнер за маршрута
│ │ └── index.ts # Public API на модула
│ ├── home/ # --- МОДУЛ НАЧАЛНА СТРАНИЦА (Синхронен лоуд!) ---
│ │ ├── HomePage.tsx # Директно зареден за светкавичен първоначален старт
│ │ └── index.ts
│ └── products/ # --- БЪДЕЩ МОДУЛ ПРОДУКТИ ---
│
└── shared/ # Абстрактни инструменти за преизползване (Глупав слой)
├── api/ # Axios инстанция ($api) с credentials: true за бисквитките
├── assets/ # Споделени ресурси (icons/, images/)
├── components/ # Глобални технически/UI елементи (с общ барел index.ts)
│ ├── layout/ # Скелет на сайта (Header.tsx, Footer.tsx)
│ ├── LanguageSwitcher/ # Превключвател (Коригиран със .slice(0, 2) за езиковите кодове)
│ ├── ThemeSwitcher/ # Превключвател за темите
│ ├── PageLoader/ # Системен лоадер при асинхронни страници
│ ├── PageError/ # Екран при срив на приложението
│ └── NotFoundPage/ # 404 екран за несъществуващи адреси
├── hooks/ # useCodeTranslation и други технически куки
├── types/ # Глобални TypeScript декларации (ApiResponse<T>)
└── vite-env.d.ts # Добавен за правилно разпознаване на SVG ?react импортите във Vite
Използвайте кода внимателно.🛡️ Качество на кода & НастройкиESLint (eslint.config.js): Напълно рефакториран! Премахнахме тежкия FSD плъгин (@conarti/feature-sliced). Изключихме досадното и агресивно правило "import/order", за да ви дадем пълна свобода да пишете импортите си в какъвто ред желаете, без червени и бели линии за празни редове.TypeScript Желязна Защита: Всички заявки са обвързани с глобалния generic тип ApiResponse<T>. TypeScript знае точно как изглежда Better-Auth потребителят във всеки един момент.🚦 Какво работи безупречно в момента?Get Session: При всяко презареждане (reload) на браузъра, App.tsx прави сигурна заявка към Node.js. Ако има валидна сесия в SQLite, Redux се пълни автоматично.Login: Формата валидира клиентски през Zod (съобщения в validation.json), изпраща заявка през Axios и записва потребителя в Redux при успех. Сървърните грешки отиват в auth.json.Logout: Изчиства моментално Redux състоянието, превключва UI и връща потребителя в състояние на гост.Language Switcher: Работи перфектно, сменя знамената и текстовете в реално време, като е защитен от локалните браузърни кодове (като en-US).
