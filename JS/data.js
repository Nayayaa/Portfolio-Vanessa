const icones = {
    github:   '<svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zM8 19H5V8h3zM6.5 6.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5z"/></svg>',
    email:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="17" height="17"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
};

const dados = {
    redes: [
    { rotulo: "GitHub",   url: "https://github.com/Nayayaa", icones: "github" },
    { rotulo: "LinkedIn", url: "https://www.linkedin.com/in/vanessasml-nascimento-nayayaa", icones: "linkedin" },
    { rotulo: "Email",    url: "mailto:vanessasml.nascimento@hotmail.com", icones: "email"},
  ],

  habilidades: [
    { nome: "Python", nivel: "Básico" },
    { nome: "Java", nivel: "Básico" },
    { nome: "Kotlin", nivel: "Básico" },
    { nome: "HTML", nivel: "Básico" },
    { nome: "CSS", nivel: "Básico" },
    { nome: "JavaScript", nivel: "Básico" },
    { nome: "C++", nivel: "Básico"},
    { nome: "MySQL", nivel: "Básico"},
    { nome: "PostgreSQL", nivel: "Básico"},
    { nome: "Docker", nivel: "Básico" },
    { nome: "Microsoft Azure", nivel: "Básico" },
    { nome: "Linux", nivel: "Básico"},
    { nome: "Git & GitHub", nivel: "Básico" },
  ],

  projetos: [
    {
      ano: "2026 — Atual",
      titulo: "Startup Lasanha Tracket",
      descricao: "Projeto de Startup: Site de venda, compra e aluguel de carros antigos. Responsável pela construção do frontend e na assistência do backend, o projeto foi desenvolvido primeiramente na plataforma Lovable e depois modificada e aprimorada no Visual Studio Code junto a criação do backend.",
      tags: ["Python", "Typescript", "React", "Django Rest Framework", "SQLite", "Cloudflare", "Lovable", "Claude", "Visual Studio Code"],
      repo: "https://github.com/Nayayaa/Startup-Lasanha-Tracker",
      imagem: null,
      video: "./Imagens/VID-20260605-WA0005.mp4",
    },

    {
      ano: "2026",
      titulo: "Dashboard Analytics Hackathon IBMEC + Databricks + FactSet",
      descricao: "Painel de visualização de dados com gráficos interativos e filtros dinâmicos para o desafio do Hackathon IBMEC em parceria com Databricks e FactSet. Os dados para este desafio foi fornecido pela FactSet, a verificação de dados foi desenvolvido utilizando a plataforma Databricks e Dashboard criado no Lovable.",
      tags: ["Databricks Plataform", "FactSet", "Lovable"],
      repo: "https://foco-macro-corp.lovable.app/mercado",
      imagem: "./Imagens/hackthon%20databrick+factset2026_1.png",
      video: null,
    },

    {
      ano: "2025",
      titulo: "Santander Cybersecurity 2025 + DIO",
      descricao: "Desafio de Cybersecurity promovido pelo Santander em parceria com a DIO, utilização da ferramenta Medusa para análise de vulnerabilidades, criação de Keylogger para captura de senhas e um Malware de criptografia de arquivos. <br><strong>Por segurança e ética, não disponibilizo o repositório do projeto.</strong></br>",
      tags: ["Kali Linux", "Python", "Medusa", "Keylogger", "Malware", "Visual Studio Code"],
      repo: null,
      imagem: "./Imagens/medusa.png",
      video: null,
    },

    {
      ano: "2025",
      titulo: "ChatBot de Agendamento Aéreo e Hotel",
      descricao: "Chatbot integrado à API pública, utilizando armazenamento e treinamento de dados em nuvem com Microsoft Azure, uso do Docker e PostgreSQL para armazenamento de dados local e desenvolvimento do bot com Bot Framework.",
      tags: ["Microsoft Azure", "Docker", "Bot Framework", "PostgreSQL", "Visual Studio Code"],
      repo: "https://github.com/Nayayaa/BigData-and-Cloud-Computing",
      imagem: null,
      video: "./Imagens/VID-20251117-WA0013.mp4",
    },

    {     
      ano: "2025",
      titulo: "Projeto Mobile - Aplicativo para Associação de Moradores",
      descricao: "Desenvolvimento de aplicativo para gestão de moradores da associação da Primeira Ilha - Barra da Tijuca - RJ.",
      tags: ["Kotlin", "Android Studio", "Figma"],
      repo: "https://github.com/Nayayaa/ProjetoMobile-Primeira-Ilha",
      imagem: null, 
      video: "./Imagens/Projeto Primeira Ilha.mkv",
    },

    {
      ano: "2024",
      titulo: "Projeto Backend - Protótipo API de Cadastro de Lojistas",
      descricao: "API de cadastro de lojistas com login via JSON Web Token, validação de dados e persistência em MySQL, construída com Spring Boot e Spring Security.",
      tags: ["Java", "Spring Boot", "Spring Security", "MySQL", "Visual Studio Code"],
      repo: "https://github.com/jpgiovanelli/ProjetoBack",
      imagem: "./Imagens/projeto_backend.png",
      video: null,
    },

    {
      ano: "2023",
      titulo: "Projeto Frontend - Website",
      descricao: "Desenvolvimento de página web com auxílio de um estudante colaborador da AS3 Engenharia para projeto da disciplina FrontEnd, página focada na criação de chamados internos e externos para os colaboradores.",
      tags: ["HTML", "CSS", "JavaScript", "React", "Visual Studio Code"],
      repo: "https://github.com/eympessanha/React_Projeto_Front-end",
      imagem: "./Imagens/projeto_frontend.png",
      video: null,
    },
  ],
};