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
## Arquitetura do Chatbot com IA

Este documento detalha a implementação da funcionalidade de Chatbot, que segue uma arquitetura de microserviços para integrar inteligência artificial (LLM) aos dados financeiros do usuário.

### Visão Geral do Fluxo

O sistema utiliza uma arquitetura em três camadas para processar as mensagens de forma segura e contextualizada:

1. **Frontend (Angular)**: Interface do usuário e envio de mensagens.
2. **Backend (Java/Spring)**: Orquestrador, gerenciador de contexto e persistência.
3. **Microserviço AI (Python/FastAPI)**: Motor de inferência de IA usando GPT4All.

### 1. 🐍 O Microserviço Python (\`gpt4all-service\`)

Este serviço é o componente focado exclusivamente na inteligência artificial.

- **Tecnologia**: **FastAPI** para API REST de alta performance.
- **Motor de IA**: Utiliza a biblioteca \`gpt4all\` para carregar modelos LLM (como Orca Mini ou Llama) localmente na memória (CPU).
- **Isolamento**: Executa em um processo separado (container Docker próprio), garantindo que o processamento pesado da IA não afete a performance da API principal (Java) e permitindo escalabilidade independente.
- **Endpoint Inteligente**: Expõe a rota \`POST /chat\` que recebe um prompt, um prompt de sistema (instruções) e parâmetros de configuração, retornando a resposta gerada.

### 2. ☕ O Backend Java Integrador (\`ChatService\`)

O Backend Spring Boot atua como intermediário inteligente ("Middleware Pattern") e provedor de contexto.

- **Enriquecimento de Contexto (RAG Simplificado)**: Antes de contatar a IA, o \`ChatService\` consulta o banco de dados (\`TransacaoRepository\`) para buscar o resumo financeiro do usuário (saldo atual, despesas dos últimos 30 dias, totais por categoria).
- **Engenharia de Prompt**: Injeta os dados financeiros recuperados no "System Prompt". Isso permite que a IA forneça respostas personalizadas e baseadas em dados reais (ex: *"Seu saldo atual é R$ X"* ou *"Você gastou muito em Alimentação"*).
- **Comunicação Segura**: O Backend Java atua como um gateway seguro. O serviço Python não é exposto publicamente; apenas a API Java consegue se comunicar com ele (via rede interna do Docker ou localhost).
- **Persistência**: Armazena todo o histórico da conversa (perguntas do usuário e respostas da IA) na tabela \`chat_messages\` via \`ChatMessageRepository\`.

### 3. 🅰️ O Frontend Angular (\`ChatComponent\`)

O cliente web consome a API Java, mantendo a abstração completa do serviço de IA. O Frontend não sabe que existe um serviço Python.

- **Componentes**:
  - \`ChatComponent\`: Gerencia a UI, estado de *loading* ("digitando...") e rolagem automática.
  - \`ChatApiService\`: Serviço que centraliza as chamadas HTTP para o endpoint \`/api/chat\` do Java.
- **Fluxo de Usuário**: Oferece uma experiência fluida onde o usuário interage com o bot como se fosse um chat convencional.

### Fluxo de Dados Detalhado (Step-by-Step)

1. Usuário digita e envia uma mensagem no Frontend.
2. Frontend envia uma requisição \`POST /api/chat\` para o Backend Java.
3. Backend Java:
   - Identifica o usuário autenticado via Token JWT.
   - Busca as transações e calcula o balanço financeiro do usuário.
   - Constrói o prompt final: *Instrução de Comportamento + Contexto Financeiro + Pergunta do Usuário*.
   - Envia o prompt via HTTP (\`RestTemplate\`) para o Microserviço Python (porta 5000).
4. Microserviço Python:
   - Recebe o prompt.
   - Processa a inferência no modelo GPT4All local.
   - Gera a resposta textual e devolve para o Java.
5. Backend Java:
   - Recebe a resposta da IA.
   - Salva a mensagem do usuário e a resposta da IA no banco de dados para histórico.
   - Retorna a resposta final para o Frontend.
6. Frontend exibe a resposta para o usuário e atualiza a lista de mensagens.
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
## AI Chatbot Architecture

This document details the implementation of the Chatbot functionality, which uses a microservices architecture to integrate artificial intelligence (LLM) with user financial data.

### Flow Overview

The system uses a three-tier architecture to process messages securely and contextually:

1. **Frontend (Angular)**: User interface and message sending.
2. **Backend (Java/Spring)**: Orchestrator, context manager, and persistence.
3. **AI Microservice (Python/FastAPI)**: AI inference engine using GPT4All.

### 1. 🐍 Python Microservice (\`gpt4all-service\`)

This service is the component focused exclusively on artificial intelligence.

- **Technology**: **FastAPI** for high-performance REST API.
- **AI Engine**: Uses the \`gpt4all\` library to load LLM models (like Orca Mini or Llama) locally in memory (CPU).
- **Isolation**: Runs in a separate process (own Docker container), ensuring heavy AI processing doesn't affect main API (Java) performance, allowing independent scalability.
- **Smart Endpoint**: Exposes \`POST /chat\` route receiving a prompt, system prompt (instructions), and config parameters, returning generated response.

### 2. ☕ Integrator Java Backend (\`ChatService\`)

The Spring Boot Backend acts as an intelligent intermediary ("Middleware Pattern") and context provider.

- **Context Enrichment (Simplified RAG)**: Before contacting AI, \`ChatService\` queries database (\`TransactionRepository\`) to fetch user financial summary (current balance, last 30 days expenses, category totals).
- **Prompt Engineering**: Injects retrieved financial data into "System Prompt". This allows AI to provide personalized answers based on real data (e.g., *"Your current balance is $ X"* or *"You spent a lot on Food"*).
- **Secure Communication**: Java Backend acts as a secure gateway. Python service isn't publicly exposed; only Java API can communicate with it (via internal Docker network or localhost).
- **Persistence**: Stores full conversation history (user questions and AI answers) in \`chat_messages\` table via \`ChatMessageRepository\`.

### 3. 🅰️ Angular Frontend (\`ChatComponent\`)

The web client consumes the Java API, maintaining full abstraction of the AI service. Frontend doesn't know Python service exists.

- **Components**:
  - \`ChatComponent\`: Manages UI, *loading* state ("typing...") and auto-scrolling.
  - \`ChatApiService\`: Service centralizing HTTP calls to Java \`/api/chat\` endpoint.
- **User Flow**: Offers a fluid experience where user interacts with bot as if it were a conventional chat.

### Detailed Data Flow (Step-by-Step)

1. User types and sends message on Frontend.
2. Frontend sends request \`POST /api/chat\` to Java Backend.
3. Java Backend:
   - Identifies authenticated user via JWT Token.
   - Fetches transactions and calculates user financial balance.
   - Constructs final prompt: *Behavior Instruction + Financial Context + User Question*.
   - Sends prompt via HTTP (\`RestTemplate\`) to Python Microservice (port 5000).
4. Python Microservice:
   - Receives prompt.
   - Processes inference on local GPT4All model.
   - Generates text response and returns to Java.
5. Java Backend:
   - Receives AI response.
   - Saves user message and AI response in database for history.
   - Returns final response to Frontend.
6. Frontend displays response to user and updates message list.
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
