export const projects = {
    pt: [
        {
            slug: "finance-tracker",
            title: "Fin APP (Finance Tracker)",
            description: "Uma plataforma completa de gestão financeira. Apresenta uma arquitetura de microserviços robusta integrando Java Spring Boot, Angular e um Chatbot IA inteligente.",
            details: "A arquitetura destaca-se pelo uso de um microserviço Python separado para o Chatbot, utilizando GPT4All para inferência local segura. O backend Java atua como orquestrador, enriquecendo o contexto com dados financeiros do usuário (RAG). Dashboard interativo com gráficos de despesas e receitas. O sistema permite o gerenciamento completo de transações (receitas, despesas, investimentos), possui conversor de câmbio em tempo real e exportação de relatórios detalhados.",
            image: "/images/finapp/dashboard-chat.png",
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
            image: "/images/finbot-ui.png",
            href: "#",
            tags: ["Python", "FastAPI", "AI", "GPT4All", "Spring Boot", "RAG"],
            color: "#3b82f6", // Blue
            class: "md:col-span-1",
            gallery: []
        },
        {
            slug: "gcam-club",
            title: "GCam Club",
            description: "Plataforma comunitária para entusiastas da GCam. Com compartilhamento de XML, predefinições e verificações de compatibilidade de dispositivos.",
            details: "Hub central para fotógrafos móveis. Permite upload e download de configurações XML para Google Camera. Sistema de votação e comentários para as melhores configurações. Backend em Firebase para escalabilidade.",
            image: "/images/gcam-club.png",
            video: "/videos/gb-club-demo.mp4",
            href: "#",
            tags: ["Flutter", "Firebase"],
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
            image: "/images/finapp/dashboard-chat.png",
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
            image: "/images/finbot-ui.png",
            href: "#",
            tags: ["Python", "FastAPI", "AI", "GPT4All", "Spring Boot", "RAG"],
            color: "#3b82f6", // Blue
            class: "md:col-span-1",
            gallery: []
        },
        {
            slug: "gcam-club",
            title: "GCam Club",
            description: "Community platform for GCam enthusiasts. Features XML sharing, presets, and device compatibility checks.",
            details: "Central hub for mobile photographers. Allows upload and download of XML configurations for Google Camera. Voting and comment system for best configs. Backend on Firebase for scalability.",
            image: "/images/gcam-club.png",
            video: "/videos/gb-club-demo.mp4",
            href: "#",
            tags: ["Flutter", "Firebase"],
            color: "#f59e0b", // Amber
            class: "md:col-span-1",
        },
    ]
};
