export const projects = {
    pt: [
        {
            slug: "finance-tracker",
            title: "Fin APP (Finance Tracker)",
            description: "Uma plataforma completa de gestão financeira. Apresenta uma arquitetura de microserviços robusta integrando Java Spring Boot, Angular e um Chatbot IA inteligente.",
            details: "A arquitetura destaca-se pelo uso de um microserviço Python separado para o Chatbot, utilizando GPT4All para inferência local segura. O backend Java atua como orquestrador, enriquecendo o contexto com dados financeiros do usuário (RAG). Dashboard interativo com gráficos de despesas e receitas. O sistema permite o gerenciamento completo de transações (receitas, despesas, investimentos), possui conversor de câmbio em tempo real e exportação de relatórios detalhados.",
            image: "/images/finapp-cover.png",
            href: "#",
            repositories: [
                { label: "Frontend", url: "https://github.com/rzend/personal-finance-web" },
                { label: "BFF", url: "https://github.com/rzend/personal-finance-api" }
            ],
            tags: ["Angular", "Spring Boot", "Python", "Docker", "PostgreSQL"],
            color: "#10b981", // Emerald
            class: "md:col-span-2",
            gallery: [
                "/images/finapp/dashboard.png",
                "/images/finapp/transacoes.png",
                "/images/finapp/analises.png",
                "/images/finapp/cambio.png",
                "/images/finapp/relatorios.png"
            ]
        },
        {
            slug: "finbot-ai",
            title: "FinBot (Assistente Financeiro)",
            description: "Assistente de IA contextual que ajuda na gestão financeira. Integrado via microserviços com RAG e inferência local.",
            details: "A arquitetura segue o padrão de microserviços em três camadas. O Frontend (Angular) conecta-se ao Backend (Java/Spring), que atua como orquestrador seguro. O Backend enriquece o contexto com dados financeiros do usuário (RAG) antes de consultar o microserviço de IA (Python/FastAPI) rodando GPT4All localmente. Isso garante privacidade absoluta e respostas personalizadas (ex: 'Seu saldo é R$ X'). Todo o histórico é persistido no PostgreSQL.",
            image: "/images/finbot-cover.png",
            href: "#",
            tags: ["Python", "FastAPI", "AI", "GPT4All", "Spring Boot", "RAG"],
            color: "#3b82f6", // Blue
            class: "md:col-span-1",
            gallery: [],
            architecture: `
### Visão Geral (Microserviços)
O FinBot opera com uma arquitetura distribuída, focada em privacidade e desacoplamento.

### Componentes Principais
1. **Frontend (Angular 16)**
   - SPA Reativa (RxJS)
   - Interface Moderna (Tailwind)
   - Gerenciamento de Estado

2. **Backend BFF (Spring Boot 3)**
   - API Gateway & Orchestrator
   - **Segurança**: JWT + OAuth2
   - **Banco de Dados**: PostgreSQL (Transações)
   - **Integração**: Comunica-se via REST com o módulo de IA.

3. **AI Core (Python FastAPI)**
   - **LLM Local**: GPT4All (Llama 3 8B Quantized) rodando na CPU.
   - **RAG (Retrieval-Augmented Generation)**: ChromaDB para vetorização de dados financeiros.
   - **Privacidade**: Nenhum dado financeiro deixa a infraestrutura do usuário.

### Fluxo de Dados (RAG)
1. Usuário pergunta: *"Quanto gastei em Uber?"*
2. Spring valida a requisição e busca metadados.
3. FastAPI recebe o prompt + contexto.
4. O modelo processa e retorna a resposta natural: *"Você gastou R$ 150,00 em Uber este mês."*
`
        },
        {
            slug: "gcam-club",
            title: "GB Clube (GcamBrasil Clube)",
            description: "Plataforma comunitária para entusiastas da GCam. Com compartilhamento de XML, predefinições e verificações de compatibilidade de dispositivos.",
            details: "Desenvolvido por Richard Rezende (Fundador GcamBrasil). O GBClube é a central definitiva para a comunidade de GCam. O aplicativo utiliza Flutter e Clean Architecture com integração profunda ao Firebase. Destaques: 1. RichAIdao (AI Powered): Chatbot assistente treinado especificamente para GCam. 2. Gestão de XMLs e Presets com listagem inteligente. 3. Download Manager robusto. 4. Login Social seguro. O projeto utiliza Firebase para Auth, Firestore, Storage, Cloud Messaging e Crashlytics.",
            image: "/images/gcam-cover.png",
            hideMainImage: true,
            video: "/videos/gb-club-demo.mp4",
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.devmarques.gcambrasil&hl=pt_BR",
            href: "#",
            tags: ["Flutter", "Firebase", "Clean Architecture", "AdMob"],
            color: "#f59e0b", // Amber
            class: "md:col-span-1",
        },
    ],
    en: [
        {
            slug: "finance-tracker",
            title: "Fin APP (Finance Tracker)",
            description: "A comprehensive financial management platform. Features a robust microservices architecture integrating Java Spring Boot, Angular, and an intelligent AI Chatbot.",
            details: "The architecture highlights a separate Python microservice for the Chatbot, using GPT4All for secure local inference. The Java backend acts as an orchestrator, enriching context with user financial data (RAG). Interactive dashboard with expense and income charts. The system allows complete transaction management (income, expenses, investments), features a real-time currency converter, and detailed report export.",
            image: "/images/finapp-cover.png",
            href: "#",
            repositories: [
                { label: "Frontend", url: "https://github.com/rzend/personal-finance-web" },
                { label: "BFF", url: "https://github.com/rzend/personal-finance-api" }
            ],
            tags: ["Angular", "Spring Boot", "Python", "Docker", "PostgreSQL"],
            color: "#10b981", // Emerald
            class: "md:col-span-2",
            gallery: [
                "/images/finapp/dashboard.png",
                "/images/finapp/transacoes.png",
                "/images/finapp/analises.png",
                "/images/finapp/cambio.png",
                "/images/finapp/relatorios.png"
            ]
        },
        {
            slug: "finbot-ai",
            title: "FinBot (Finance Assistant)",
            description: "Contextual AI assistant for financial management. Integrated via microservices with RAG and local inference.",
            details: "The architecture follows a three-layer microservices pattern. The Frontend (Angular) connects to the Backend (Java/Spring), which acts as a secure orchestrator. The Backend enriches the context with user financial data (RAG) before querying the AI microservice (Python/FastAPI) running GPT4All locally. This ensures absolute privacy and personalized responses (e.g., 'Your balance is $X'). All history is persisted in PostgreSQL.",
            image: "/images/finbot-cover.png",
            href: "#",
            tags: ["Python", "FastAPI", "AI", "GPT4All", "Spring Boot", "RAG"],
            color: "#3b82f6", // Blue
            class: "md:col-span-1",
            gallery: [],
            architecture: `
### Overview (Microservices)
FinBot operates on a distributed architecture focused on privacy and decoupling.

### Main Components
1. **Frontend (Angular 16)**
   - Reactive SPA (RxJS)
   - Modern UI (Tailwind)
   - State Management

2. **Backend BFF (Spring Boot 3)**
   - API Gateway & Orchestrator
   - **Security**: JWT + OAuth2
   - **Database**: PostgreSQL (Transactions)
   - **Integration**: REST communication with AI module.

3. **AI Core (Python FastAPI)**
   - **Local LLM**: GPT4All (Llama 3 8B Quantized) running on CPU.
   - **RAG (Retrieval-Augmented Generation)**: ChromaDB for vectorizing financial data.
   - **Privacy**: No financial data leaves the user infrastructure.

### Data Flow (RAG)
1. User asks: *"How much did I spend on Uber?"*
2. Spring validates request and fetches metadata.
3. FastAPI receives prompt + context.
4. Model processes and returns natural response: *"You spent $150.00 on Uber this month."*
`
        },
        {
            slug: "gcam-club",
            title: "GCam Club",
            description: "Community platform for GCam enthusiasts. Features XML sharing, presets, and device compatibility checks.",
            details: "Developed by Richard Rezende (Founder GcamBrasil). GBClube is the definitive hub for the GCam community. The app uses Flutter and Clean Architecture with deep Firebase integration. Highlights: 1. RichAIdao (AI Powered): Assistant chatbot trained specifically for GCam. 2. XML & Preset Management with intelligent listing. 3. Robust Download Manager. 4. Secure Social Login. The project uses Firebase for Auth, Firestore, Storage, Cloud Messaging, and Crashlytics.",
            image: "/images/gcam-cover.png",
            hideMainImage: true,
            video: "/videos/gb-club-demo.mp4",
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.devmarques.gcambrasil&hl=pt_BR",
            href: "#",
            tags: ["Flutter", "Firebase", "Clean Architecture", "AdMob"],
            color: "#f59e0b", // Amber
            class: "md:col-span-1",
        },
    ]
};
