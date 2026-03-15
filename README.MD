# Buenas Imóveis - Sistema de Imobiliária com CRUD

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![LocalStorage](https://img.shields.io/badge/LocalStorage-333?style=for-the-badge&logo=databricks&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?style=for-the-badge&logo=githubpages&logoColor=white)

## Projeto CRUD como Desafio para fixar o conhecimento em JS, DOM, Local Storage e JSON.

> **Projeto didático** simulando um cenário profissional real com briefing de cliente, quadro de tasks e entrega com deploy. Vamos simular o pedido de um cliente para a minha empresa de desenvolvimento, com os estudantes sendo os colaboradores. Como Dev, precisam ler o enunciado e seguir os requisitos solicitados.

## 📌 Sobre o Projeto

A **Buenas Imóveis** é um sistema Web de cadastro e gerenciamento de imóveis, desenvolvido como MVP (Produto Mínimo Viável) para a cliente fictícia **Sra. Helen Bueno**, proprietária de uma imobiliária de pequeno porte em Porto Alegre/RS.

O sistema funciona 100% no navegador, utilizando **localStorage** para persistência dos dados e **manipulação de DOM** para renderização dinâmica da interface. Os dados são estruturados em **JSON**.

### Funcionalidades

- **CRUD completo**: Cadastrar, Listar, Editar e Excluir imóveis
- **Persistência**: Dados salvos no `localStorage` (não perde ao fechar o navegador)
- **Tags visuais**: Distinção de **Venda** (verde) e **Aluguel** (azul) com cores diferentes
- **Tipos de imóvel**: Casa, Apartamento, Terreno e Sala
- **Finalidade**: Residencial ou Comercial
- **Status**: Imóveis ativos (visíveis) ou inativos (rascunho)
- **Múltiplas fotos**: Suporte a várias URLs de fotos por imóvel
- **Google Maps**: Link de embed para localização do imóvel
- **Valores formatados**: Exibição em R$ (moeda brasileira)
- **Página de detalhe**: Visualização completa do imóvel em nova aba
- **Modal de edição**: Edição via `<dialog>` nativo do HTML
- **Busca e filtros**: Por título, localização, tipo, venda/aluguel e faixa de valor
- **Responsivo**: Funciona em desktop, tablet e celular

---

## 🎯 Cenário Profissional

Este projeto simula uma demanda real de desenvolvimento. O aluno assume o papel de **desenvolvedor(a) junior** e recebe o projeto organizado em **Tasks**, como acontece em empresas de tecnologia.

---

## 📋 Briefing da Cliente

"Marnei, tô precisando de um site urgente! Hoje controlo tudo numa planilha e tô perdendo negócio. Preciso cadastrar meus imóveis pelo celular ou computador, com fotos, preço, localização, tudo. Quero que o pessoal que entra no site veja os imóveis bem bonitos com foto, e consiga ver se é pra VENDA ou ALUGUEL. Os preços têm que aparecer formatados bonitinho, tipo R$ 450.000,00. Preciso poder corrigir erros de digitação (editar), excluir imóveis vendidos, e o mais importante: NÃO POSSO PERDER OS DADOS quando fechar o navegador! Ah, e preciso separar se é casa, apartamento, terreno ou sala, e se é residencial ou comercial. Tem imóvel que eu quero deixar cadastrado mas não aparecer no site ainda, tipo um rascunho. E quero um link do Google Maps em cada imóvel."

### Mensagem para a equipe:

"A Dona Helen Bueno precisa desse MVP rodando o mais rápido possível. Nesta primeira sprint, o sistema vai funcionar 100% no navegador usando localStorage. Quando ela aprovar o visual e as funcionalidades, a gente conecta num Back-End de verdade. O site vai ter duas partes: uma página Home pública onde qualquer pessoa vê os imóveis ativos, e ao clicar em um imóvel, abre uma página de detalhe com todas as informações. O cadastro, edição e exclusão ficam na própria Home por enquanto (na sprint 2 a gente separa num painel admin com login). Organizei o desenvolvimento em Tasks. Sigam a ordem, façam commits organizados e caprichem, a cliente vai ver o resultado. Boora!"

### O que a cliente precisa (URGENTE):

```
✅ Cadastrar imóveis pelo celular/computador
✅ Ver todos os imóveis em cards bonitos (com foto!)
✅ Distinguir VENDA de ALUGUEL na hora (cores diferentes?)
✅ Preços formatados (R$ 450.000,00)
✅ Poder corrigir erros de digitação
✅ Excluir imóveis vendidos/alugados
✅ NÃO PERDER DADOS quando fechar o navegador!
```

### Dados levantados na reunião

**Nome da marca**: Buenas Imóveis

**Cores da marca**: Roxo (#6c5fff) e cinza escuro (#232323)

**Fonte:** Poppins (Google Fonts)

Estrutura de dados de cada imóvel:

```json
{
    "id": 1,
    "titulo": "Casa com 3 quartos no Menino Deus",
    "descricao": "Ampla casa com garagem para 2 carros, quintal com churrasqueira e área de lazer.",
    "valor": 450000,
    "area": 180,
    "quartos": 3,
    "tipo": "casa",
    "localizacao": "Menino Deus - Porto Alegre/RS",
    "mapa": "https://www.google.com/maps/embed?pb=...",
    "venda_aluguel": "venda",
    "finalidade": "residencial",
    "fotos": [
        "https://exemplo.com/foto1.jpg",
        "https://exemplo.com/foto2.jpg"
    ],
    "status": true,
    "created_at": "2026-03-08T14:30:00.000Z"
}
```

### Descrição dos campos:

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | number | Gerado automaticamente (sequencial) |
| `titulo` | string | Nome/título do imóvel |
| `descricao` | string | Descrição detalhada |
| `valor` | number | Preço (venda) ou mensalidade (aluguel) |
| `area` | number | Área em metros quadrados |
| `quartos` | number | Quantidade de quartos |
| `tipo` | string | `casa`, `apartamento`, `terreno` ou `sala` |
| `localizacao` | string | Endereço / bairro / cidade |
| `mapa` | string | URL do Google Maps (embed) |
| `venda_aluguel` | string | `venda` ou `aluguel` |
| `finalidade` | string | `residencial` ou `comercial` |
| `fotos` | array de strings | URLs das fotos do imóvel |
| `status` | boolean | `true` = ativo, `false` = rascunho |
| `created_at` | string (ISO) | Data/hora do cadastro |

---

## Quadro de Tasks (Tarefas)

### Tasks Essenciais

| Task | Descrição | Commit sugerido |
|---|---|---|
| **T-01** | Setup do projeto e estrutura base | `T-01: setup do projeto e estrutura base` |
| **T-02** | Navegação, banner e identidade visual | `T-02: navegação, banner e identidade visual` |
| **T-03** | Formulário de cadastro completo | `T-03: formulário de cadastro completo` |
| **T-04** | Lógica de cadastro - Create | `T-04: lógica de cadastro (create)` |
| **T-05** | Listagem de imóveis com cards - Read | `T-05: listagem de imóveis com cards (read)` |
| **T-06** | Exclusão de imóvel - Delete | `T-06: exclusão de imóvel (delete)` |
| **T-07** | Edição de imóvel com modal - Update | `T-07: edição de imóvel com modal (update)` |
| **T-08** | Página de detalhe do imóvel | `T-08: página de detalhe do imóvel` |
| **T-09** | Responsividade e polimento visual | `T-09: responsividade e polimento visual` |
| **T-10** | Deploy e documentação | `T-10: deploy e documentação` |

### Tasks Desejáveis (Diferencial)

| Task | Descrição | Commit sugerido |
|---|---|---|
| **T-11** | Busca e filtros | `T-11: busca e filtros` |

---

## 📝 Detalhamento das Tasks

### T-01 - Setup do Projeto e Estrutura Base

**Prioridade:** ESSENCIAL

Criar o repositório no GitHub e a estrutura de arquivos do projeto. Montar o HTML semântico com todas as seções necessárias e linkar os arquivos CSS e JS.

**Estrutura de arquivos:**

    buenas-imoveis/
    ├── index.html
    ├── imovel.html
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── app.js
    │   └── imovel.js
    ├── assets/
    │   └── favicon.svg
    └── README.md

**Critérios de aceite:**

- Repositório público no GitHub com `README.md` inicial
- HTML semântico: `<nav>`, `<header>`, `<main>` com `<section>`s, `<footer>`
- Fonte Poppins importada do Google Fonts
- Ícones Phosphor Icons linkados via CDN
- CSS e JS linkados e funcionando (testar com `console.log`)
- Commit: `T-01: setup do projeto e estrutura base`

---

### T-02 - Navegação, Banner e Identidade Visual

**Prioridade:** ESSENCIAL

Desenvolver a barra de navegação fixa e o banner/header, aplicando a identidade visual da marca (cores roxo e cinza escuro, fonte Poppins).

**Critérios de aceite:**

- Variáveis CSS no `:root` para cores, sombras e border-radius
- Reset CSS aplicado (`*, margin, padding, box-sizing`)
- Navbar fixa no topo com logo "Buenas Imóveis" e links de âncora
- Banner com gradiente usando a cor principal
- Footer com nome da empresa e ano
- Commit: `T-02: navegação, banner e identidade visual`

---

### T-03 - Formulário de Cadastro Completo

**Prioridade:** ESSENCIAL

Criar a seção de cadastro com formulário completo e estilizado para registrar novos imóveis.

**Campos do formulário:**

| Campo | Elemento HTML | Observações |
|---|---|---|
| Título | `input type="text"` | Obrigatório |
| Descrição | `textarea` | Obrigatório |
| Valor (R$) | `input type="number"` | `min="0"`, `step="0.01"` |
| Área (m²) | `input type="number"` | `min="1"` |
| Quartos | `input type="number"` | `min="0"`, `max="20"` |
| Tipo | `select` | Casa, Apartamento, Terreno, Sala |
| Venda / Aluguel | `select` | Venda, Aluguel |
| Finalidade | `select` | Residencial, Comercial |
| Localização | `input type="text"` | Obrigatório |
| Link do Mapa | `input type="url"` | Google Maps embed |
| Fotos (URLs) | `input type="text"` | URLs separadas por vírgula |
| Ativo? | `input type="checkbox"` | Marcado por padrão |

**Critérios de aceite:**

- Todos os campos presentes com `label` e `required` (quando aplicável)
- Layout em CSS Grid: 2 colunas (desktop) e 1 coluna (mobile)
- Campos Descrição, Fotos e Link do Mapa em largura total (`grid-column: 1 / -1`)
- Botões Cadastrar (`submit`) e Limpar (`reset`)
- Checkbox "Ativo" marcado por padrão (`checked`)
- Commit: `T-03: formulário de cadastro completo`

---

### T-04 - Lógica de Cadastro (Create)

**Prioridade:** ESSENCIAL

Implementar a captura dos dados do formulário, criação do objeto JavaScript, geração automática de ID e timestamp, conversão do campo fotos (string → array), salvamento no localStorage e atualização da tela.

**Detalhes técnicos:**

- O campo `fotos` vem como string com URLs separadas por vírgula - converter para array com `split(",")` e `map(url => url.trim())`
- O `id` é sequencial - salvar `proximoId` no localStorage
- O `created_at` é gerado com `new Date().toISOString()`
- O `status` vem do checkbox: `formCadastro.status.checked`

**Critérios de aceite:**

- `addEventListener("submit")` com `preventDefault()`
- Objeto criado com todos os 14 campos do modelo
- Campo `fotos` convertido de string para array
- `id` sequencial e `created_at` gerados automaticamente
- Dados salvos no localStorage com `JSON.stringify`
- Formulário limpo após cadastro
- Lista atualizada na tela
- Commit: `T-04: lógica de cadastro (create)`

---

### T-05 - Listagem de Imóveis com Cards (Read)

**Prioridade:** ESSENCIAL

Criar a função que lê os dados do localStorage e renderiza cards dinamicamente. Apenas imóveis com `status: true` aparecem na listagem.

**Estrutura visual do card:**

    ┌─────────────────────────────┐
    │         [FOTO]              │
    │  ┌──────────┐               │
    │  │  VENDA   │  (tag verde)  │
    │  └──────────┘               │
    ├─────────────────────────────┤
    │  Título do Imóvel           │
    │  Descrição resumida...      │
    │                             │
    │  Casa  │ 🏘 Residencial     │
    │  Localização                │
    │  🛏 3 quartos  📐 120 m²    │
    │                             │
    │  R$ 450.000,00              │
    ├─────────────────────────────┤
    │ [Detalhes][Editar][Excluir] │
    └─────────────────────────────┘

**Regras de cores:**

- **Venda:** fundo `#d4efdf`, texto `#1e8449`
- **Aluguel:** fundo `#d6eaf8`, texto `#2471a3`

**Critérios de aceite:**

- Função `renderizar()` que limpa o container e cria os cards
- Somente imóveis com `status: true` são renderizados
- Cards criados com `createElement` e `appendChild`
- Uso de `forEach` (não `map`) para iterar
- Tag Venda/Aluguel com classe CSS condicional e cores distintas
- Valor formatado com `toLocaleString("pt-BR", { style: "currency", currency: "BRL" })`
- Primeira foto do array `fotos[0]` usada no card
- Fallback para imagem quebrada (evento `error` na `<img>`)
- Mensagem "Nenhum imóvel disponível" quando a lista estiver vazia
- Grid responsivo: `repeat(auto-fill, minmax(280px, 1fr))`
- Lista renderizada ao carregar a página
- Botão "Ver Detalhes" abre `imovel.html?id=X` em nova aba (`window.open`)
- Commit: `T-05: listagem de imóveis com cards (read)`

---

### T-06 - Exclusão de Imóvel (Delete)

**Prioridade:** ESSENCIAL

Ao clicar em "Excluir", pedir confirmação e remover o imóvel do localStorage.

**Critérios de aceite:**

- Botão com `addEventListener("click")` usando closure (não `setAttribute("onclick")`)
- `confirm()` antes de excluir
- `findIndex` pelo `id` + `splice` para remover
- localStorage atualizado e tela re-renderizada
- Commit: `T-06: exclusão de imóvel (delete)`

---

### T-07 - Edição de Imóvel com Modal (Update)

**Prioridade:** ESSENCIAL

Criar um `<dialog>` com formulário de edição. Ao clicar "Editar", o modal abre preenchido com os dados atuais. Ao salvar, os dados são atualizados no localStorage.

**Critérios de aceite:**

- `<dialog>` com formulário espelhando todos os campos do cadastro
- Modal aberto com `showModal()`, campos preenchidos com dados atuais
- Campo `fotos`: array → string com `join(", ")` ao abrir; string → array com `split(",")` ao salvar
- `id` armazenado no `dataset` do modal
- `created_at` **não** deve ser alterado na edição
- Modal fecha ao salvar, cancelar ou clicar no backdrop
- Commit: `T-07: edição de imóvel com modal (update)`

---

### T-08 - Página de Detalhe do Imóvel

**Prioridade:** ESSENCIAL

Criar a página `imovel.html` que exibe todas as informações de um imóvel. O botão "Ver Detalhes" abre esta página em nova aba passando o `id` pela URL.

**Critérios de aceite:**

- Ler o `id` da URL com `new URLSearchParams(window.location.search).get("id")`
- Buscar o imóvel no localStorage pelo `id`
- Renderizar: foto principal, tag Venda/Aluguel, título, badges (tipo, finalidade, localização, quartos, área), valor formatado, descrição completa, iframe do Google Maps (se houver) e data de cadastro
- Mensagem "Imóvel não encontrado" se o `id` não existir
- Botão "Voltar" na navbar com link para `index.html`
- Commit: `T-08: página de detalhe do imóvel`

---

### T-09 - Responsividade e Polimento Visual

**Prioridade:** ESSENCIAL

Garantir que o site funcione bem em diferentes tamanhos de tela e aplicar ajustes visuais finais.

**Critérios de aceite:**

- Formulário em 1 coluna no mobile (`@media max-width: 768px`)
- Navbar adaptada para telas menores
- Cards com hover suave (sombra + elevação)
- Descrição truncada em 2 linhas no card (`-webkit-line-clamp: 2`)
- Transições suaves em botões e cards
- Commit: `T-09: responsividade e polimento visual`

---

### T-10 - Deploy e Documentação

**Prioridade:** ESSENCIAL

Publicar no GitHub Pages e documentar o projeto.

**Critérios de aceite:**

- Deploy funcionando no GitHub Pages
- `README.md` com: nome do projeto, descrição, screenshot, link do deploy, tecnologias e nome do desenvolvedor
- Histórico de commits organizado (idealmente um por task)
- Commit: `T-10: deploy e documentação`

---

### T-11 - Busca e Filtros

**Prioridade:** DESEJÁVEL (Diferencial)

Adicionar funcionalidades de busca e filtragem na listagem de imóveis.

**Critérios de aceite:**

- Busca por título ou localização em tempo real (evento `input`)
- Filtro por tipo (Casa, Apartamento, Terreno, Sala)
- Filtro por venda/aluguel
- Filtro por faixa de valor (mínimo e máximo)
- Todos os filtros funcionam em conjunto
- Contador: "Exibindo X de Y imóveis"
- Commit: `T-11: busca e filtros`

---

## Critérios de Avaliação

| Critério | Peso |
|---|---|
| Tasks T-01 a T-10 completas e funcionais | 70% |
| Código limpo, organizado e legível | 10% |
| Interface fiel ao briefing da cliente | 10% |
| Commits organizados (1 por task) | 5% |
| Task T-11 - Busca e Filtros | 5% extra |

---

## 🧪 Dados de Teste

Para popular o localStorage com dados de exemplo, abra o **console do navegador** (F12) e cole o código abaixo:

```javascript
const dadosTeste = [
    {
        id: 1,
        titulo: "Casa espaçosa no Menino Deus",
        descricao: "Ampla casa com 3 quartos, garagem para 2 carros, quintal com churrasqueira e área de lazer. Piso porcelanato em todos os ambientes. Próximo ao Parque Marinha do Brasil.",
        valor: 450000,
        area: 180,
        quartos: 3,
        tipo: "casa",
        localizacao: "Menino Deus - Porto Alegre/RS",
        mapa: "",
        venda_aluguel: "venda",
        finalidade: "residencial",
        fotos: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600"],
        status: true,
        created_at: "2026-03-01T10:00:00.000Z"
    },
    {
        id: 2,
        titulo: "Apartamento 2 quartos no Moinhos",
        descricao: "Apartamento moderno com vista para o Parcão. 2 quartos sendo 1 suíte, sacada com churrasqueira, 1 vaga de garagem coberta. Condomínio com piscina e academia.",
        valor: 2800,
        area: 75,
        quartos: 2,
        tipo: "apartamento",
        localizacao: "Moinhos de Vento - Porto Alegre/RS",
        mapa: "",
        venda_aluguel: "aluguel",
        finalidade: "residencial",
        fotos: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600"],
        status: true,
        created_at: "2026-03-02T14:30:00.000Z"
    },
    {
        id: 3,
        titulo: "Sala comercial no Centro Histórico",
        descricao: "Sala comercial de 45m² no Centro Histórico de Porto Alegre. Ideal para escritório ou consultório. Prédio com elevador, portaria 24h e estacionamento rotativo próximo.",
        valor: 1200,
        area: 45,
        quartos: 0,
        tipo: "sala",
        localizacao: "Centro Histórico - Porto Alegre/RS",
        mapa: "",
        venda_aluguel: "aluguel",
        finalidade: "comercial",
        fotos: ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=600"],
        status: true,
        created_at: "2026-03-03T09:15:00.000Z"
    },
    {
        id: 4,
        titulo: "Terreno 360m² em Viamão",
        descricao: "Terreno plano de 360m² em condomínio fechado com infraestrutura completa. Água, luz e esgoto no local. Ótimo para construir a casa dos sonhos.",
        valor: 120000,
        area: 360,
        quartos: 0,
        tipo: "terreno",
        localizacao: "Viamão/RS",
        mapa: "",
        venda_aluguel: "venda",
        finalidade: "residencial",
        fotos: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600"],
        status: true,
        created_at: "2026-03-04T16:45:00.000Z"
    },
    {
        id: 5,
        titulo: "Cobertura duplex na Cidade Baixa",
        descricao: "Cobertura duplex com terraço panorâmico. 4 quartos sendo 2 suítes, living amplo com lareira, cozinha integrada e 2 vagas. Vista privilegiada da cidade.",
        valor: 890000,
        area: 220,
        quartos: 4,
        tipo: "apartamento",
        localizacao: "Cidade Baixa - Porto Alegre/RS",
        mapa: "",
        venda_aluguel: "venda",
        finalidade: "residencial",
        fotos: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600"],
        status: true,
        created_at: "2026-03-05T11:20:00.000Z"
    },
    {
        id: 6,
        titulo: "Casa inativa (rascunho - não aparece no site)",
        descricao: "Esta casa está com status false, então não deve aparecer na listagem pública. Serve para testar se o filtro de status funciona corretamente.",
        valor: 300000,
        area: 100,
        quartos: 2,
        tipo: "casa",
        localizacao: "Teste - Porto Alegre/RS",
        mapa: "",
        venda_aluguel: "venda",
        finalidade: "residencial",
        fotos: ["https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600"],
        status: false,
        created_at: "2026-03-06T08:00:00.000Z"
    }
];

localStorage.setItem("imoveis", JSON.stringify(dadosTeste));
localStorage.setItem("proximoId", "7");
location.reload();
```

> Nota: O imóvel de id 6 tem status: false e não deve aparecer na listagem pública. Serve para validar se o filtro de status está funcionando.

## Próximas Sprints

```
Este projeto foi desenvolvido como Sprint 1 — MVP com localStorage.

Na Sprint 2, o sistema será evoluído com:

    🔐 Login simples e painel administrativo separado
    📊 Dashboard com estatísticas (total de imóveis, vendas vs. aluguéis, etc.)
    🌐 Migração do localStorage para API externa usando fetch e MockAPI
    📂 Separação: site público (somente leitura) vs. painel admin (CRUD)
```