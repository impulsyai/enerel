# Enerel — Energia Solar & Engenharia Elétrica

> Projeto desenvolvido pela Impulsy.ai seguindo o **Padrão Ouro / Editorial Elite $10k**.

---

## 🌐 Ambientes & Links Oficiais

- **Produção Principal (Vercel):** [https://enerel-energia.vercel.app](https://enerel-energia.vercel.app)
- **Produção Secundária (Vercel):** [https://enerel-solar.vercel.app](https://enerel-solar.vercel.app)
- **Repositório GitHub:** [https://github.com/impulsyai/enerel](https://github.com/impulsyai/enerel)
- **Site Legado do Cliente:** [https://enerel.com.br](https://enerel.com.br)

---

## 🏢 Dados do Cliente
- **Razão/Nome:** Enerel Energia Solar & Engenharia Elétrica
- **Fundação:** 2020 (Montes Claros - MG)
- **Endereço:** Av. Dulce Sarmento, 2126 - Esplanada, Montes Claros - MG
- **Contato Comercial:** +55 (38) 99822-7582
- **Instagram:** [@enerelenergiasolar](https://www.instagram.com/enerelenergiasolar/)
- **Registro:** CREA-MG com emissão de ART, 100% de projetos homologados na CEMIG

---

## ⚡ Diferenciais Técnicos da Implementação

1. **Identidade Visual & Ritmo Cromático:**
   - Paleta oficial com Verde Institucional (`#16773E`), Verde Escuro (`#073B1E`) e Branco Puro (`#FFFFFF`).
   - Ritmo cromático alternado entre seções (Branco ➔ Sage Suave `#EFF6F1` ➔ Ardósia Corporativo `#F2F5F8` ➔ Gradiente Esmeralda no Simulador ➔ Neutro `#F3F6F4` no Comparativo) para eliminar a monotonia do fundo branco contínuo.

2. **Simulador de Economia CEMIG:**
   - Slider interativo com cálculo dinâmico para Compra do Sistema (até 95% de corte) e Assinatura Solar (até 20% de desconto).
   - Botão de CTA dinâmico que pré-preenche a mensagem do WhatsApp com o valor simulado.
   - Enquadramento rígido no mobile (`minmax(0, 1fr)` e padding adaptado) sem transbordamento lateral.

3. **Engenharia Especializada (10 Serviços Categorizados):**
   - Categoria 1: Engenharia & Homologação (Subestações, Estudos de Proteção, Parametrização de Relés, Homologação CEMIG).
   - Categoria 2: Geração Própria (Projetos Residenciais, Usinas Comerciais e Industriais, Usinas de Solo Rural).
   - Categoria 3: Geração Compartilhada & Eficiência (Assinatura Solar, Mercado Livre de Energia, Manutenção Preventiva & Pós-Venda).

4. **Mobile First 2.0:**
   - Tabela comparativa convertida em cards verticais no mobile (elimina necessidade de scroll horizontal).
   - Efeitos de entrada fluida (`IntersectionObserver`) com cascade stagger delays (`delay-1`, `delay-2`, `delay-3`).
   - Foto da Hero estática e com mascaramento de fade 100% sólido, sem bugs de renderização.

---

## 📁 Estrutura de Arquivos
- `index.html`: Landing page completa com estilos, assets embutidos e scripts de interatividade.
- `config.js`: Central de parametrização dinâmica de textos, dados de contato e simulador.
- `briefing.md`: Inteligência de mercado, público-alvo e pesquisa de concorrência.
- `GEMINI.md`: Contexto e diretrizes locais do agente.
- `vercel.json`: Configurações de deploy e roteamento na Vercel.
- `assets/`: Imagens reais de usinas, instalações e logos.
