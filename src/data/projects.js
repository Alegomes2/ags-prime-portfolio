// Dados dos projetos: edite aqui para atualizar os cards sem mexer no JSX.

export const projects = [
  
{
  id: "devburguer",
  title: "DevBurguer",
  category: "fullstack",
  status: "Concluído",
  description:
    "Aplicação Full Stack para pedidos de hamburgueria, com autenticação, carrinho, produtos e painel administrativo.",
  tech: ["React", "Node.js", "Express", "PostgreSQL", "Sequelize"],
  image: "/projects/devburguer/home.png",
  images: [
    "/projects/devburguer/home.png",
    "/projects/devburguer/login.png",
    "/projects/devburguer/carrinho.png",
    "/projects/devburguer/admin.png",
  ],
  repo: "https://github.com/Alegomes2/devburguer-interface",
  demo: "https://devburguer-interface-lovat.vercel.app/",
  backend: "https://github.com/Alegomes2/DevBurguer-Api",
},
{
  id: "flowai",
  title: "FlowAI SaaS",
  category: "fullstack",
  status: "Em desenvolvimento",
  description:
    "Interface de gestão empresarial com cadastro de clientes e agenda, desenvolvida com React e TypeScript.",
  tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zod"],
  image: "/projects/flowai/flowia-dashboard.png",
  images: [
    "/projects/flowai/flowia-dashboard.png",
    "/projects/flowai/flowia-clientes.png",
    "/projects/flowai/flowia-agenda.png",
  ],
},
{
  id: "taskflow",
  title: "TaskFlow",
  category: "fullstack",
  status: "Projeto de portfólio",
  description:
    "Projeto de gerenciamento de tarefas. Confira o repositório para detalhes e implementação.",
  tech: [],
  image: "/projects/taskflow/home.png",
  images: [
    "/projects/taskflow/home.png",
    
    
  ],
  repo: "https://github.com/Alegomes2/taskflow",
  demo: "https://taskflow-gules-phi.vercel.app/"
},
{
  id: "crypto",
  title: "Crypto Dashboard",
  category: "fullstack",
  status: "Projeto de portfólio",
  description:
    "Dashboard de criptomoedas. Confira o repositório para conhecer os recursos implementados.",
  tech: [],
  image: "/projects/crypto-dashboard/crypto-dashboard.png",
  images: [
    "/projects/crypto-dashboard/crypto-dashboard.png",
  ],
  repo: "https://github.com/Alegomes2/crypto-dashboard",
  demo: "https://crypto-dashboard-seven-jet.vercel.app",
},

  {
    id: "recepcionista",
    title: "Recepcionista IA para barbearias",
    category: "automation",
    status: "Demonstração funcional",
    description:
      "Bot demonstrativo no Telegram para coletar dados, validar horários e conduzir solicitações de agendamento.",
    tech: ["n8n", "Telegram", "IA", "Google Sheets"],
    image: "/projects/automacoes/atendimento-ia/fluxo-agente-barbearia.png",
    images: [
      "/projects/automacoes/atendimento-ia/fluxo-agente-barbearia.png",
      "/projects/automacoes/atendimento-ia/telegram-agente-barbearia.png",
      "/projects/automacoes/atendimento-ia/confirmacoes-pendentes-agente-barbearia.png",
    ],
  },
  {
    id: "reativacao",
    title: "Reativação de clientes",
    category: "automation",
    status: "Demonstração funcional",
    description:
      "Fluxo que identifica clientes inativos e prepara mensagens personalizadas para revisão antes do envio.",
    tech: ["n8n", "Google Sheets", "IA"],
    image: "/projects/automacoes/reativacao-clientes/fluxo-reativacao.png",
    images: [
      "/projects/automacoes/reativacao-clientes/fluxo-reativacao.png",
      "/projects/automacoes/reativacao-clientes/dashboard-reativacao.png",
      "/projects/automacoes/reativacao-clientes/historico-reativacao.png",
      "/projects/automacoes/reativacao-clientes/reativacao-clientes.png",
    ],
  },
  {
    id: "posatendimento",
    title: "Pós-atendimento automatizado",
    category: "automation",
    status: "Demonstração funcional",
    description:
      "Automação de solicitações de avaliação, registro de respostas e sinalização de avaliações críticas.",
    tech: ["n8n", "Google Sheets", "IA"],
    image: "/projects/automacoes/pos-atendimento/fluxo-pos-atendimento.png",
    images: [
      "/projects/automacoes/pos-atendimento/fluxo-pos-atendimento.png",
      "/projects/automacoes/pos-atendimento/atendimentos.png",
      "/projects/automacoes/pos-atendimento/alertas-acompanhamento.png",
      "/projects/automacoes/pos-atendimento/dashboard-pos-atendimento.png",
      "/projects/automacoes/pos-atendimento/historico.png",
    ],
  },
  {
    id: "leads",
    title: "Captação e organização de leads",
    category: "automation",
    status: "Workflow desenvolvido",
    description:
      "Coleta e organização de informações comerciais, com tratamento de dados e integração ao CRM.",
    tech: ["n8n", "Apify", "Notion"],
    image: "/projects/automacoes/captacao-leads/fluxo-captacao.png",
    images: [
      "/projects/automacoes/captacao-leads/fluxo-captacao.png",
      "/projects/automacoes/captacao-leads/crm-leads.png",
    ],
  },
];
