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
<h2 class="text-3xl font-bold mb-6">Arquitetura do Chatbot com IA</h2>
<p class="mb-4">Este documento detalha a implementação da funcionalidade de Chatbot, que segue uma arquitetura de microserviços para integrar inteligência artificial (LLM) aos dados financeiros do usuário.</p>

<h3 class="text-2xl font-semibold mb-4 text-white">Visão Geral do Fluxo</h3>
<p class="mb-4">O sistema utiliza uma arquitetura em três camadas para processar as mensagens de forma segura e contextualizada:</p>
<ol class="list-decimal pl-6 mb-8 space-y-2">
    <li><strong>Frontend (Angular)</strong>: Interface do usuário e envio de mensagens.</li>
    <li><strong>Backend (Java/Spring)</strong>: Orquestrador, gerenciador de contexto e persistência.</li>
    <li><strong>Microserviço AI (Python/FastAPI)</strong>: Motor de inferência de IA usando GPT4All.</li>
</ol>

<div class="mb-8">
    <h3 class="text-xl font-bold mb-3 flex items-center gap-2"><span class="text-2xl">🐍</span> 1. O Microserviço Python (<code class="bg-gray-800 px-1 rounded text-sm text-green-300">gpt4all-service</code>)</h3>
    <p class="mb-3">Este serviço é o componente focado exclusivamente na inteligência artificial.</p>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Tecnologia</strong>: <span class="text-blue-300">FastAPI</span> para API REST de alta performance.</li>
        <li><strong>Motor de IA</strong>: Utiliza a biblioteca <code>gpt4all</code> para carregar modelos LLM (como Orca Mini ou Llama) localmente na memória (CPU).</li>
        <li><strong>Isolamento</strong>: Executa em um processo separado (container Docker próprio), garantindo que o processamento pesado da IA não afete a performance da API principal (Java) e permitindo escalabilidade independente.</li>
        <li><strong>Endpoint Inteligente</strong>: Expõe a rota <code>POST /chat</code> que recebe um prompt, um prompt de sistema (instruções) e parâmetros de configuração, retornando a resposta gerada.</li>
    </ul>
</div>

<div class="mb-8">
    <h3 class="text-xl font-bold mb-3 flex items-center gap-2"><span class="text-2xl">☕</span> 2. O Backend Java Integrador (<code class="bg-gray-800 px-1 rounded text-sm text-yellow-300">ChatService</code>)</h3>
    <p class="mb-3">O Backend Spring Boot atua como intermediário inteligente ("Middleware Pattern") e provedor de contexto.</p>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Enriquecimento de Contexto (RAG Simplificado)</strong>: Antes de contatar a IA, o <code>ChatService</code> consulta o banco de dados (<code>TransacaoRepository</code>) para buscar o resumo financeiro do usuário (saldo atual, despesas dos últimos 30 dias, totais por categoria).</li>
        <li><strong>Engenharia de Prompt</strong>: Injeta os dados financeiros recuperados no "System Prompt". Isso permite que a IA forneça respostas personalizadas e baseadas em dados reais (ex: <em>"Seu saldo atual é R$ X"</em> ou <em>"Você gastou muito em Alimentação"</em>).</li>
        <li><strong>Comunicação Segura</strong>: O Backend Java atua como um gateway seguro. O serviço Python não é exposto publicamente; apenas a API Java consegue se comunicar com ele (via rede interna do Docker ou localhost).</li>
        <li><strong>Persistência</strong>: Armazena todo o histórico da conversa (perguntas do usuário e respostas da IA) na tabela <code>chat_messages</code> via <code>ChatMessageRepository</code>.</li>
    </ul>
</div>

<div class="mb-8">
    <h3 class="text-xl font-bold mb-3 flex items-center gap-2"><span class="text-2xl">🅰️</span> 3. O Frontend Angular (<code class="bg-gray-800 px-1 rounded text-sm text-red-300">ChatComponent</code>)</h3>
    <p class="mb-3">O cliente web consome a API Java, mantendo a abstração completa do serviço de IA. O Frontend não sabe que existe um serviço Python.</p>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Componentes</strong>:
            <ul class="list-circle pl-6 mt-1 space-y-1">
                <li><code>ChatComponent</code>: Gerencia a UI, estado de <em>loading</em> ("digitando...") e rolagem automática.</li>
                <li><code>ChatApiService</code>: Serviço que centraliza as chamadas HTTP para o endpoint <code>/api/chat</code> do Java.</li>
            </ul>
        </li>
        <li><strong>Fluxo de Usuário</strong>: Oferece uma experiência fluida onde o usuário interage com o bot como se fosse um chat convencional.</li>
    </ul>
</div>

<div class="mb-8">
    <h3 class="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Fluxo de Dados Detalhado (Step-by-Step)</h3>
    <ol class="list-decimal pl-6 space-y-3 marker:text-gray-400">
        <li>Usuário digita e envia uma mensagem no Frontend.</li>
        <li>Frontend envia uma requisição <code>POST /api/chat</code> para o Backend Java.</li>
        <li>Backend Java:
            <ul class="list-disc pl-6 mt-1 space-y-1 text-gray-400 text-sm">
                <li>Identifica o usuário autenticado via Token JWT.</li>
                <li>Busca as transações e calcula o balanço financeiro do usuário.</li>
                <li>Constrói o prompt final: <em>Instrução de Comportamento + Contexto Financeiro + Pergunta do Usuário</em>.</li>
                <li>Envia o prompt via HTTP (<code>RestTemplate</code>) para o Microserviço Python (porta 5000).</li>
            </ul>
        </li>
        <li>Microserviço Python:
            <ul class="list-disc pl-6 mt-1 space-y-1 text-gray-400 text-sm">
                <li>Recebe o prompt.</li>
                <li>Processa a inferência no modelo GPT4All local.</li>
                <li>Gera a resposta textual e devolve para o Java.</li>
            </ul>
        </li>
        <li>Backend Java:
            <ul class="list-disc pl-6 mt-1 space-y-1 text-gray-400 text-sm">
                <li>Recebe a resposta da IA.</li>
                <li>Salva a mensagem do usuário e a resposta da IA no banco de dados para histórico.</li>
                <li>Retorna a resposta final para o Frontend.</li>
            </ul>
        </li>
        <li>Frontend exibe a resposta para o usuário e atualiza a lista de mensagens.</li>
    </ol>
</div>
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
<h2 class="text-3xl font-bold mb-6">AI Chatbot Architecture</h2>
<p class="mb-4">This document details the implementation of the Chatbot functionality, which uses a microservices architecture to integrate artificial intelligence (LLM) with user financial data.</p>

<h3 class="text-2xl font-semibold mb-4 text-white">Flow Overview</h3>
<p class="mb-4">The system uses a three-tier architecture to process messages securely and contextually:</p>
<ol class="list-decimal pl-6 mb-8 space-y-2">
    <li><strong>Frontend (Angular)</strong>: User interface and message sending.</li>
    <li><strong>Backend (Java/Spring)</strong>: Orchestrator, context manager, and persistence.</li>
    <li><strong>AI Microservice (Python/FastAPI)</strong>: AI inference engine using GPT4All.</li>
</ol>

<div class="mb-8">
    <h3 class="text-xl font-bold mb-3 flex items-center gap-2"><span class="text-2xl">🐍</span> 1. Python Microservice (<code class="bg-gray-800 px-1 rounded text-sm text-green-300">gpt4all-service</code>)</h3>
    <p class="mb-3">This service is the component focused exclusively on artificial intelligence.</p>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Technology</strong>: <span class="text-blue-300">FastAPI</span> for high-performance REST API.</li>
        <li><strong>AI Engine</strong>: Uses the <code>gpt4all</code> library to load LLM models (like Orca Mini or Llama) locally in memory (CPU).</li>
        <li><strong>Isolation</strong>: Runs in a separate process (own Docker container), ensuring heavy AI processing doesn't affect main API (Java) performance, allowing independent scalability.</li>
        <li><strong>Smart Endpoint</strong>: Exposes <code>POST /chat</code> route receiving a prompt, system prompt (instructions), and config parameters, returning generated response.</li>
    </ul>
</div>

<div class="mb-8">
    <h3 class="text-xl font-bold mb-3 flex items-center gap-2"><span class="text-2xl">☕</span> 2. Integrator Java Backend (<code class="bg-gray-800 px-1 rounded text-sm text-yellow-300">ChatService</code>)</h3>
    <p class="mb-3">The Spring Boot Backend acts as an intelligent intermediary ("Middleware Pattern") and context provider.</p>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Context Enrichment (Simplified RAG)</strong>: Before contacting AI, <code>ChatService</code> queries database (<code>TransactionRepository</code>) to fetch user financial summary (current balance, last 30 days expenses, category totals).</li>
        <li><strong>Prompt Engineering</strong>: Injects retrieved financial data into "System Prompt". This allows AI to provide personalized answers based on real data (e.g., <em>"Your current balance is $ X"</em> or <em>"You spent a lot on Food"</em>).</li>
        <li><strong>Secure Communication</strong>: Java Backend acts as a secure gateway. Python service isn't publicly exposed; only Java API can communicate with it (via internal Docker network or localhost).</li>
        <li><strong>Persistence</strong>: Stores full conversation history (user questions and AI answers) in <code>chat_messages</code> table via <code>ChatMessageRepository</code>.</li>
    </ul>
</div>

<div class="mb-8">
    <h3 class="text-xl font-bold mb-3 flex items-center gap-2"><span class="text-2xl">🅰️</span> 3. Angular Frontend (<code class="bg-gray-800 px-1 rounded text-sm text-red-300">ChatComponent</code>)</h3>
    <p class="mb-3">The web client consumes the Java API, maintaining full abstraction of the AI service. Frontend doesn't know Python service exists.</p>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Components</strong>:
            <ul class="list-circle pl-6 mt-1 space-y-1">
                <li><code>ChatComponent</code>: Manages UI, <em>loading</em> state ("typing...") and auto-scrolling.</li>
                <li><code>ChatApiService</code>: Service centralizing HTTP calls to Java <code>/api/chat</code> endpoint.</li>
            </ul>
        </li>
        <li><strong>User Flow</strong>: Offers a fluid experience where user interacts with bot as if it were a conventional chat.</li>
    </ul>
</div>

<div class="mb-8">
    <h3 class="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Detailed Data Flow (Step-by-Step)</h3>
    <ol class="list-decimal pl-6 space-y-3 marker:text-gray-400">
        <li>User types and sends message on Frontend.</li>
        <li>Frontend sends request <code>POST /api/chat</code> to Java Backend.</li>
        <li>Java Backend:
            <ul class="list-disc pl-6 mt-1 space-y-1 text-gray-400 text-sm">
                <li>Identifies authenticated user via JWT Token.</li>
                <li>Fetches transactions and calculates user financial balance.
                <li>Constructs final prompt: <em>Behavior Instruction + Financial Context + User Question</em>.</li>
                <li>Sends prompt via HTTP (<code>RestTemplate</code>) to Python Microservice (port 5000).</li>
            </ul>
        </li>
        <li>Python Microservice:
            <ul class="list-disc pl-6 mt-1 space-y-1 text-gray-400 text-sm">
                <li>Receives prompt.</li>
                <li>Processes inference on local GPT4All model.</li>
                <li>Generates text response and returns to Java.</li>
            </ul>
        </li>
        <li>Java Backend:
            <ul class="list-disc pl-6 mt-1 space-y-1 text-gray-400 text-sm">
                <li>Receives AI response.</li>
                <li>Saves user message and AI response in database for history.</li>
                <li>Returns final response to Frontend.</li>
            </ul>
        </li>
        <li>Frontend displays response to user and updates message list.</li>
    </ol>
</div>
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
