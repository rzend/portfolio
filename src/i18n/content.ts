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
            slug: "ai-chat-assistant",
            title: "AI Chat Assistant",
            description: "Chatbot contextual integrado com GPT-4 e LLMs locais. Possui respostas em tempo real e gerenciamento de histórico.",
            details: "Assistant inteligente capaz de manter contexto da conversa. Utiliza LangChain para orquestração e suporta múltiplos modelos de linguagem. Interface moderna construída com React e WebSocket para baixa latência.",
            image: "/images/ai-chat.png",
            href: "#",
            tags: ["Python", "FastAPI", "AI"],
            color: "#3b82f6", // Blue
            class: "md:col-span-1",
        },
        {
            slug: "gcam-club",
            title: "GCam Club",
            description: "Plataforma comunitária para entusiastas da GCam. Com compartilhamento de XML, predefinições e verificações de compatibilidade de dispositivos.",
            details: "Hub central para fotógrafos móveis. Permite upload e download de configurações XML para Google Camera. Sistema de votação e comentários para as melhores configurações. Backend em Firebase para escalabilidade.",
            image: "/images/gcam-club.png",
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
            slug: "ai-chat-assistant",
            title: "AI Chat Assistant",
            description: "Contextual chatbot integrated with GPT-4 and local LLMs. Features real-time responses and history management.",
            details: "Intelligent assistant capable of maintaining conversation context. Uses LangChain for orchestration and supports multiple language models. Modern interface built with React and WebSocket for low latency.",
            image: "/images/ai-chat.png",
            href: "#",
            tags: ["Python", "FastAPI", "AI"],
            color: "#3b82f6", // Blue
            class: "md:col-span-1",
        },
        {
            slug: "gcam-club",
            title: "GCam Club",
            description: "Community platform for GCam enthusiasts. Features XML sharing, presets, and device compatibility checks.",
            details: "Central hub for mobile photographers. Allows upload and download of XML configurations for Google Camera. Voting and comment system for best configs. Backend on Firebase for scalability.",
            image: "/images/gcam-club.png",
            href: "#",
            tags: ["Flutter", "Firebase"],
            color: "#f59e0b", // Amber
            class: "md:col-span-1",
        },
    ]
};
