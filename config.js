// ============================================================
//  ENEREL ENERGIA SOLAR - config.js
//  Configuração centralizada de conteúdo, contato e simulador
// ============================================================

const siteConfig = {
  brand: {
    name: "Enerel Energia Solar",
    shortName: "Enerel",
    tagline: "Engenharia Solar & Redução de Conta CEMIG",
    subtagline: "Montes Claros e Norte de Minas Gerais",
    location: "Montes Claros - MG",
    concessionaria: "CEMIG",
    address: "Av. Dulce Sarmento, 2126 - Bairro Esplanada, Montes Claros - MG",
    experienceYears: "8+",
    warrantyYears: "25 anos de garantia de eficiência",
  },

  contact: {
    whatsapp: "5538998227582",
    whatsappDisplay: "(38) 9 9822-7582",
    whatsappLink: "https://wa.me/5538998227582",
    phone: "(38) 3212-0961",
    email: "contato@enerel.com.br",
    instagram: "https://www.instagram.com/enerelenergiasolar/",
    instagramHandle: "@enerelenergiasolar",
    mapsLink: "https://www.google.com/maps?q=Av.+Dulce+Sarmento,+2126+-+Esplanada+Montes+Claros+-+MG",
    whatsappDefaultMessage: "Olá! Vi o site da Enerel e quero simular a redução da minha conta de luz da Cemig.",
  },

  hero: {
    badge: "☀️ ENGENHARIA SOLAR HOMOLOGADA CEMIG",
    title: "Pare de pagar contas absurdas para a CEMIG.",
    titleHighlight: "Economize até 95% com energia solar inteligente.",
    description: "Seja instalando seu próprio sistema no telhado ou assinando energia solar sem nenhuma obra: a Enerel cuida de todo o projeto técnico, aprovação na CEMIG e garante sua economia no bolso.",
    ctaPrimary: "Simular Minha Economia Agora",
    ctaSecondary: "Falar com Engenheiro no WhatsApp",
    socialProof: "Mais de 1.200 projetos fotovoltaicos gerando economia real em Montes Claros e região."
  },

  simulator: {
    title: "Simulador de Economia CEMIG",
    subtitle: "Arraste a barra para o valor médio da sua conta de luz mensal e compare as duas modalidades da Enerel:",
    defaultBill: 1200,
    minBill: 300,
    maxBill: 20000,
    step: 50,
    rates: {
      ownSystem: 0.95,      // Até 95% de economia na compra do sistema
      subscription: 0.18,   // Até 18% de desconto direto na assinatura
    }
  },

  solutions: [
    {
      badge: "MÁXIMA ECONOMIA (ATÉ 95%)",
      title: "Sistema Solar Próprio",
      subtitle: "Para residências, comércios e propriedades rurais com telhado ou área disponível.",
      benefits: [
        "Redução de até 95% no valor da conta de energia",
        "Financiamento em até 72x onde a parcela substitui a conta CEMIG",
        "Garantia de 25 anos de eficiência nos painéis solares",
        "Valorização imediata do seu imóvel em 10% a 15%",
        "Homologação e projeto de engenharia 100% por conta da Enerel"
      ],
      idealFor: "Quem quer se livrar de vez dos aumentos tarifários e criar patrimônio.",
      cta: "Orçar Meu Sistema Próprio",
      type: "proprio"
    },
    {
      badge: "SEM OBRAS & SEM CUSTO INICIAL (ATÉ 18%)",
      title: "Energia Solar por Assinatura",
      subtitle: "Para quem mora de aluguel, apartamentos ou empresas que não querem fazer investimento inicial.",
      benefits: [
        "Desconto direto garantido de até 18% na fatura da CEMIG",
        "Zero investimento, zero reformas e zero painéis no seu imóvel",
        "Contratação 100% digital e sem burocracia",
        "Sem fidelidade: cancele quando quiser sem multas",
        "Energia limpa gerada em usinas solares da Enerel injetada na rede"
      ],
      idealFor: "Inquilinos, condomínios e negócios que buscam economia rápida sem investir capital.",
      cta: "Aderir à Assinatura Solar",
      type: "assinatura"
    }
  ],

  segments: [
    {
      title: "Residencial",
      desc: "Ligue o ar-condicionado o dia todo sem medo da conta no final do mês. Conforto total para sua família.",
      savings: "Até 95% de corte",
      icon: "home"
    },
    {
      title: "Comercial & Serviços",
      desc: "Padarias, supermercados, clínicas e escritórios: reduza um dos maiores custos fixos da sua operação.",
      savings: "Lucro líquido direto",
      icon: "briefcase"
    },
    {
      title: "Agronegócio & Rural",
      desc: "Usinas de solo para pivôs de irrigação, granjas e bombeamento de poços no Norte de Minas.",
      savings: "Alta potência e robustez",
      icon: "tractor"
    }
  ],

  stats: [
    { number: "8+", label: "Anos de experiência técnica" },
    { number: "1.200+", label: "Projetos solares homologados" },
    { number: "R$ 4.8M+", label: "Economizados pelos nossos clientes" },
    { number: "25 Anos", label: "Garantia de performance" }
  ],

  steps: [
    {
      number: "01",
      title: "Envio da Conta Cemig",
      desc: "Você nos envia uma foto da sua última conta de luz pelo WhatsApp para nossa engenharia analisar seu perfil de consumo."
    },
    {
      number: "02",
      title: "Estudo Gratuito de Viabilidade",
      desc: "Calculamos a potência exata, dimensionamento dos painéis e retorno financeiro estimado para o seu caso."
    },
    {
      number: "03",
      title: "Engenharia & Homologação",
      desc: "Cuidamos de 100% do projeto elétrico e da aprovação formal junto à CEMIG. Sem estresse e sem burocracia para você."
    },
    {
      number: "04",
      title: "Ativação & Economia Real",
      desc: "Seu sistema entra em operação e você começa a economizar imediatamente na próxima fatura da CEMIG."
    }
  ],

  testimonials: [
    {
      name: "Rodrigo Vasconcelos",
      role: "Proprietário Residencial — Montes Claros",
      billBefore: "R$ 1.150 / mês",
      billAfter: "R$ 115 / mês",
      text: "Minha casa tem 4 aparelhos de ar-condicionado. A conta vinha mais de mil reais todo mês. Fechei o sistema próprio com a Enerel e hoje só pago a taxa básica da Cemig. O suporte da equipe deles em Montes Claros foi nota 10.",
      stars: 5
    },
    {
      name: "Marcos Vinícius Silveira",
      role: "Dono de Supermercado — Janaúba",
      billBefore: "R$ 5.400 / mês",
      billAfter: "R$ 4.420 / mês (Assinatura)",
      text: "Nosso imóvel é alugado e não podíamos furar o telhado. Entramos na energia solar por assinatura da Enerel. Em 15 minutos assinamos digitalmente e o desconto já veio na conta da Cemig. Economizo quase R$ 1.000 todo mês.",
      stars: 5
    },
    {
      name: "Dra. Valéria Cordeiro",
      role: "Clínica Odontológica — Montes Claros",
      billBefore: "R$ 2.800 / mês",
      billAfter: "R$ 210 / mês",
      text: "A instalação foi super rápida, limpa e o financiamento ficou menor do que a fatura que eu já pagava pra Cemig. Foi o melhor investimento do meu consultório.",
      stars: 5
    }
  ],

  faq: [
    {
      q: "Como funciona a energia solar se chover ou ficar nublado?",
      a: "Os painéis solares geram energia mesmo com luz difusa em dias nublados. Além disso, pelo sistema de compensação da CEMIG, nos dias ensolarados seu sistema gera créditos de energia que são usados à noite ou nos períodos de chuva."
    },
    {
      q: "Qual é a diferença entre comprar o sistema e assinar energia solar?",
      a: "Na compra do sistema, os painéis são seus (instalados no seu telhado ou solo), proporcionando até 95% de economia e valorizando seu imóvel. Na assinatura solar, você não investe nada e não faz obras: a Enerel injeta energia de suas usinas na rede da CEMIG e você recebe um desconto de até 18% na sua fatura."
    },
    {
      q: "Como funciona o financiamento solar?",
      a: "Trabalhamos com as melhores linhas de crédito solar dos bancos (Santander, BV, Sicredi, Sicoob). A aprovação é feita no mesmo dia e a parcela é dimensionada para caber no valor que você já gasta hoje com a conta da CEMIG."
    },
    {
      q: "A Enerel atende toda a região de Montes Claros?",
      a: "Sim! Nossa sede fica em Montes Claros (Av. Dulce Sarmento, 2126) e atendemos com equipes próprias todas as cidades do Norte de Minas, incluindo Janaúba, Bocaiúva, Pirapora, Salinas e região."
    },
    {
      q: "O que acontece se eu precisar de manutenção?",
      a: "Os módulos contam com garantia de eficiência de 25 anos. O sistema acompanha aplicativo no seu celular para monitorar a geração em tempo real e a equipe técnica da Enerel fica de prontidão em Montes Claros para qualquer assistência."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteConfig;
}
