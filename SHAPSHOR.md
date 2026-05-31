Backend (Node.js + Better-Auth)

    Session-based Auth: Конфигурирахме Better-Auth да работи със сесии (бисквитки), а не с токени.
    CORS: Настроихме Express да приема бисквитки от фронтенда (credentials: true).
    Session Check: Създадохме контролери, които разпознават потребителя чрез auth.api.getSession и fromNodeHeaders.
    Database: SQLite съхранява сесиите и потребителите в реално време.

🧱 Frontend Architecture (FSD)
📡 Shared Layer

    Axios Instance: Създадохме $api в shared/api, който автоматично изпраща бисквитките при всяка заявка.
    Custom Hooks: Направихме useAppDispatch и useAppSelector за правилна работа с TypeScript.

👤 Entities Layer (User)

    Single Source of Truth: Премахнахме localStorage и преминахме към проверка на сесията чрез сървъра.
    Async Thunks:
        initUserData: Проверява сесията при рефреш.
        logoutUser: Изчиства сесията от Redux и от базата данни.
    Public API: Използваме entities/user/index.ts за чист достъп до логиката на потребителя.

📄 Pages Layer

    Lazy Loading: Всички страници се зареждат асинхронно чрез React.lazy за по-бърз първоначален лоуд.
    Async Exports: Използваме HomePageAsync и LoginPageAsync модели.

⚙️ App Layer

    Global Init: В App.tsx проверяваме дали потребителят е логнат още преди да покажем каквото и да е.
    Conditional Rendering: Приложението чака isLoading да стане false, преди да монтира рутера.

🚦 Текущ поток на потребителя (User Flow)

    Зареждане: Браузърът праща заявка за сесия.
    Проверка: Ако има валидна бисквитка, Redux се пълни с userData.
    UI: Бутонът „Login“ автоматично се сменя на „Logout“ и името на потребителя се появява.
    Logout: При клик сесията се трие от SQLite и Redux се чисти моментално.

💡 Какво можем да направим следващия път?
Сега, когато основата е „бетон“, можем да изберем:

    Auth Guard: Да забраним достъпа до /dashboard за нелогнати потребители.
    Role System: Да направим страници, достъпни само за admin.
    Products/Shop Logic: Да започнем работа по същинския електронен магазин.
