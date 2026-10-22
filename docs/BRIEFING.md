# Registro da LP — o que a ficha decidiu e o que a execução fez

> Preenchido pelo agente **durante a execução**, a partir de `docs/FICHA-LP.md`. Não é um registro de entrevista: a entrevista aconteceu no chat web (`docs/PROMPT-FICHA-LP.md`) e a ficha é a fonte. Este arquivo existe para que, meses depois e sem a conversa, se saiba de onde veio cada coisa — e porque `docs/briefing-cliente/` fica fora do git.
>
> Nada aqui é perguntado ao usuário. Se um campo não puder ser preenchido a partir da ficha, a execução para e recusa, em vez de deixar lacuna.

> **Desvio de fluxo registrado.** Esta ficha **não** saiu de uma entrevista no chat: foi montada no editor a partir do briefing organizado, por pedido de uma primeira versão ("construa essa lp"), como na LP de Manutenção da Falanga. Os blocos `identificar` e `aplicacoes` estavam `insuficiente` no briefing e foram preenchidos por inferência para a página ter apoio e prova. Validar com o comercial antes de publicar.

> **Revisão de 22/10/2026 — conteúdo da LP antiga.** A pedido, o conteúdo foi refeito a partir da página atual do cliente (`falangapneumatica.com.br/pecas-para-compressores/`), mantendo a estrutura e a composição. Entraram: 18 fotos reais na vitrine, a copy da página antiga, as marcas do carrossel "Peças para todos os modelos de compressores" por extenso, os fatos dos rótulos (LUB Schulz para parafuso, MS LUB para pistão), o WhatsApp do botão flutuante antigo e "Revenda" no público.

> **Revisão de 22/10/2026 — linguagem visual da LP de compressores de parafuso.** A pedido ("faça a nova lp na mesma estrutura"), esta LP passou a usar a mesma linguagem visual aprovada pelo cliente na LP irmã `lp-compressores-de-parafuso` (mockup de 21/10/2026): header branco, hero com H1 em linha de abertura e manchete amarela, painel navy largo, faixas de CTA e divisões arredondadas entre seções. **A composição e o conteúdo não mudaram**: continuam `vitrine · identificar · aplicacoes · diferenciais` com o conteúdo da LP antiga. As seções `linhas` e `processo` da LP irmã seguem fora, pelo mesmo motivo da ficha — o material do cliente não as sustenta (ver "Blocos que ficaram fora"). Ver "Desvios do padrão".

## Origem

| Campo                     | Valor                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| Ficha de execução         | `docs/FICHA-LP.md`                                                                                |
| Data da ficha             | 2026-10-22                                                                                        |
| Versão do padrão na ficha | 2.8.0                                                                                             |
| Validada em               | `22/10/2026` por `npm run ficha`                                                                  |
| Material bruto do cliente | `docs/briefing-cliente/briefing_falanga_pecas_lubrificantes.md` (fora do git)                     |
| LP antiga do cliente      | https://falangapneumatica.com.br/pecas-para-compressores/ — fonte da copy, das fotos e das marcas |
| Briefing de campanha      | não — só palavras-chave e negativas dos grupos                                                    |
| Fora desta execução       | grupos pausados de peças e lubrificantes (ver Conteúdo futuro); LP de Manutenção, em outra pasta  |

## Campanha

> Vem de `campanha` na ficha e vai para `campaign` em `src/data/site.ts`.

| Campo                      | Valor                                                                                                                                                                                                                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Palavra-chave principal    | `peças para compressor Schulz` — no H1 e no title                                                                                                                                                                                                                                                     |
| Origem                     | informada (lista de palavras-chave dos grupos)                                                                                                                                                                                                                                                        |
| Área atendida              | Nordeste, com unidades em Fortaleza/CE e Recife/PE — no texto e na 3ª prova do hero, num selo da cotação e num diferencial                                                                                                                                                                            |
| Negativas de oferta        | 30 termos em `campaign.negatives` (manutenção, conserto, revisão, automotivo, combustíveis, `litros`, marcas de óleo e de compressor concorrentes). Nenhum aviso no `check:lp`                                                                                                                        |
| Negativas fora da lista    | `compressores` e `compressores industrial` (exatas): bloqueiam a busca por comprar compressor, mas a página fala de peças **para** compressores — na lista, gerariam aviso em toda frase. `que`, `pés`, `pressure` e as viscosidades (0W-16…25W-50) também ficaram só aqui: não são assunto da página |
| Claims proibidos           | `autorizada`, `autorizado`, `distribuidor oficial`, `representante oficial` — o briefing não traz claim proibido, mas também não comprova a relação com a Schulz                                                                                                                                      |
| Divergência de vocabulário | "peças para compressores industriais" → `peças para compressor Schulz` no H1; "Elementos de Filtros" → Elementos filtrantes; "Separadores de Óleo e Ar" → Separadores ar/óleo; "Litros" → L (`litros` é negativa)                                                                                     |

### Famílias de palavra-chave

> Família sem bloco que a responda é a lacuna que faz a campanha pagar por clique que a página não atende. Vem de `campanha.familias`.

| Família              | Termos                                                                                                                                               | Bloco que responde                     | Status                                                                                                |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| peça para compressor | peças para compressor Schulz; filtro de ar; filtro de óleo; elemento filtrante; separador ar/óleo; mangueira; dreno; válvulas de admissão e descarga | `vitrine`, `identificar`, `aplicacoes` | coberta em parte — **mangueira, dreno e válvulas de admissão/descarga** não estão na lista do cliente |
| unidade compressora  | unidade compressora parafuso; unidade de compressor parafuso                                                                                         | —                                      | **lacuna**                                                                                            |
| lubrificante         | óleo para compressor; óleo de compressor de ar; óleo sintético compressor; lubrificante para compressor                                              | `vitrine`, `diferenciais`              | coberta                                                                                               |
| lubrificante Schulz  | óleo para compressor parafuso Schulz                                                                                                                 | `vitrine`, `aplicacoes`                | coberta                                                                                               |
| especificação        | lubrificante sintético; lubrificante mineral                                                                                                         | —                                      | **lacuna** — só no nome dos produtos, sem ficha técnica                                               |

### Comitê de compra

| Papel      | Argumento de compra                                          | Bloco que responde                          | Status                                               |
| ---------- | ------------------------------------------------------------ | ------------------------------------------- | ---------------------------------------------------- |
| Manutenção | achar a peça certa sem ter o código em mãos                  | `identificar`, `aplicacoes`, `vitrine`      | **inferido**                                         |
| Compras    | itens prontos para envio, peças originais, um só atendimento | `diferenciais`, selos da cotação, `vitrine` | **inferido**                                         |
| Revenda    | catálogo amplo de peças e a linha de lubrificantes Schulz    | `vitrine`                                   | formulário antigo pergunta "para consumo ou revenda" |

### Conteúdo futuro

> O que os grupos pausados oferecem. Fora da página até o grupo ser ativado.

| Grupo                                                                                                       | O que oferece                 | Por que está fora                                                |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------------------- |
| `peças para compressor`, `para compressor`, `schulz peças reposição`                                        | peças em geral                | pausado; a vitrine já responde quando for ativado                |
| `oleo compressor`, `oleo lubrificante compressor`, `lubrificantes para compressores`, `Lubrificante Schulz` | lubrificantes                 | pausado; a prateleira de lubrificantes já responde               |
| `Lubrificante Sintético`, `Lubrificante Mineral`                                                            | especificação de lubrificante | pausado; pede ficha técnica dos lubrificantes (`especificacoes`) |

## Composição

> **Derivada**, não escolhida: `npm run ficha` aplica a regra de `template/scripts/lib/plan.mjs`, congelada por `scripts/ficha.test.mjs`. Fundo e respiro saem de `lp.manifest.json` — não os escolha à mão.

Derivada em: `22/10/2026` · comando aplicado: `npm run compose -- --library "../Projetos B2/LP-STARTER-B2/sections" vitrine identificar aplicacoes diferenciais`

A biblioteca não fica ao lado desta pasta, então o caminho foi passado com `--library` e ficou gravado em `lp.manifest.json`: `npm run ficha` e `npm run compose` o leem de lá nas próximas vezes.

### Seções que entraram

| Fase       | Seção          | Fundo     | Respiro     | Veredicto na ficha             | Famílias que responde                   |
| ---------- | -------------- | --------- | ----------- | ------------------------------ | --------------------------------------- |
| oferta     | `vitrine`      | branco    | pt-20 pb-10 | quase                          | peça, lubrificante, lubrificante Schulz |
| apoio      | `identificar`  | branco    | pt-6 pb-16  | completo (**inferido**) · navy | peça                                    |
| prova      | `aplicacoes`   | cinza-100 | pt-4 pb-20  | completo (**inferido**)        | peça, lubrificante Schulz               |
| autoridade | `diferenciais` | cinza-100 | pt-6 pb-8   | completo · navy                | peça, lubrificante                      |

### Blocos que ficaram fora

> Copiado de `fora` em `ficha.json`. É o registro de que a decisão foi tomada com material na mão, e a lista do que buscar para a próxima versão.

| Bloco            | Veredicto    | O que falta para entrar                                                          |
| ---------------- | ------------ | -------------------------------------------------------------------------------- |
| `linhas`         | insuficiente | 3 ou 4 famílias com descrição, 3 características objetivas e foto recortada cada |
| `especificacoes` | insuficiente | modelos com colunas técnicas, valores e a linha mais vendida                     |
| `processo`       | insuficiente | etapas reais do atendimento e prazos que o cliente assume                        |
| `situacoes`      | insuficiente | situações de compra reativa em que o cliente é procurado                         |
| `segmentos`      | insuficiente | 7 setores com equipamentos e fotos                                               |
| `clientes`       | insuficiente | 4 a 8 logos autorizadas e 3 números com fonte                                    |
| `perguntas`      | insuficiente | lista real de dúvidas do comercial, com respostas aprovadas                      |
| `escopo`         | insuficiente | argumento de compra consolidada e foto de composição                             |

## Entradas do núcleo

> Transcritas da ficha. "Origem" diz de onde o valor saiu na conversa do chat: material do cliente, briefing de campanha, decisão do usuário ou default do padrão.

| #   | Entrada                 | Valor                                                                                           | Origem                                                   |
| --- | ----------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 1   | MARCA                   | Falanga Pneumática                                                                              | briefing (inferido do domínio)                           |
| 2   | MARCA_CURTA             | Falanga                                                                                         | briefing                                                 |
| 3   | PRODUTO_PRINCIPAL       | Peças e lubrificantes para compressores                                                         | briefing (inferido)                                      |
| 4   | CONTEXTO_DE_USO         | reposição de componentes                                                                        | briefing (inferido; evita "manutenção")                  |
| 5   | PUBLICO                 | Manutenção, Compras, Revenda                                                                    | **inferido**; revenda vem do formulário da LP antiga     |
| 6   | HERO                    | Peças originais prontas para envio · Diversos modelos e marcas · Atendimento em todo o Nordeste | LP antiga                                                |
| 7   | MARCAS_ATENDIDAS        | Schulz, Atlas Copco, Sullair, Ingersoll Rand, Wayne, Chicago Pneumatic — só por extenso         | carrossel da LP antiga; logos sem autorização registrada |
| 8   | SELOS_DE_CONFIANCA      | Peças originais · Itens prontos para envio · Atendimento em todo o Nordeste                     | briefing                                                 |
| 9   | ENDERECO                | R. Mirian Rocha, 97 - Fortaleza - CE · Rua Tomaz Gonzaga, 74 - Zumbi, Recife - PE               | briefing (sem CEP)                                       |
| 10  | URL_FINAL + PRIVACIDADE | `https://falangapneumatica.com.br/pecas-para-compressores/` · sem política                      | **provisório** — URL de referência do briefing           |
| 11  | SHORTCODES              | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`                      | default do plugin                                        |
| 12  | WHATSAPP                | `5585996267979` — botão flutuante ligado                                                        | botão flutuante da LP antiga                             |
| 13  | STACK + PUBLICACAO      | Astro, `main` → `wp-build`                                                                      | default do padrão                                        |
| 14  | TOKENS_DE_COR + FONTE   | visual padrão                                                                                   | default (a LP de Manutenção usa o amarelo da logo)       |
| 15  | CAMPANHA                | `peças para compressor Schulz`                                                                  | lista de palavras-chave                                  |

## Assets

> Status `pendente` é o que estava em `assets.pendentes` na ficha: a primeira versão subiu com o placeholder da biblioteca naquele lugar. O `npm run verify` continua falhando enquanto houver um — é o que impede o placeholder de ir ao ar.

| Asset          | Arquivo esperado        | Especificação               | Status                                                                                                                                                |
| -------------- | ----------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logo           | `src/assets/LOGO.png`   | 240×200, fundo transparente | **entregue** — logo horizontal 341×82 do site, a mesma da LP irmã. O header branco adotado em 22/10/2026 a alinha na barra, sem a placa que a cortava |
| Banner do hero | `src/assets/heroBg.png` | 1981×900, brief 4.1.3       | **entregue** — foto do cliente (técnico ao lado de um compressor de parafuso aberto), a mesma da LP irmã                                              |

> Abaixo, uma linha por asset das seções que entraram (`assets` no manifesto de cada uma).

| Asset                       | Arquivo esperado                                            | Especificação                                                      | Status                                                                                                 |
| --------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 19 fotos da vitrine         | `src/assets/vitrine/produto-1.png` … `produto-19.png`       | PNG/JPG 800×600 (4:3), produto centrado, fundo branco ou recortado | 18 entregues (fotos da LP antiga) · **`produto-18.png` pendente** (Motor Oil Schulz)                   |
| Logos dos grupos da vitrine | `src/assets/vitrine/marca-*.png`                            | PNG 400×160                                                        | não usado — prateleiras com o nome do grupo                                                            |
| 4 fotos das aplicações      | `src/assets/aplicacoes/aplicacao-1.png` … `aplicacao-4.png` | 1200×900 (4:3), equipamento em operação                            | **entregues** em 22/10/2026 — parafuso, pistão, reservatório, transmissão; ver a nota de origem abaixo |
| Cenário dos diferenciais    | `src/assets/diferenciais/cenario.jpg`                       | 1600×900, bancada/cenário                                          | **entregue** — foto do cliente (1020×482), a mesma da LP irmã; vem do site, menor que a especificação  |
| Pessoa dos diferenciais     | `src/assets/diferenciais/pessoa.png`                        | 1220×1000, corpo inteiro, fundo transparente                       | **não usado** — a variante do mockup não tem pessoa recortada: o cenário já traz o técnico             |

**Origem das 4 fotos das aplicações (22/10/2026).** Não saíram do site do cliente: foram enviadas pelo usuário junto com o mockup do layout da seção, já na proporção 4:3 (1448×1086), e entraram reduzidas a 1200×900. São imagens genéricas de equipamento — compressor de parafuso em gabinete, compressor de pistão sobre reservatório, vasos de ar comprimido e conjunto de polias/correias —, e não fotos da operação da Falanga. **Confirmar a origem e o direito de uso com o cliente antes de publicar**, como nas fotos de lubrificante com nome de arquivo de marketplace. Se o cliente tiver fotos próprias dos quatro casos, elas substituem estas sem mexer no layout: mesmo nome, mesma proporção.

As fotos da vitrine saíram da LP antiga, uma por produto, na ordem em que a página as mostra (cada foto vem logo antes do nome do produto). Tratamento: recorte, aparo do fundo e produto centrado em 800×600 sobre branco. Exceções:

- A foto de "Filtros de Óleo / Separadores de Óleo e Ar" juntava três produtos: virou três recortes (`produto-2` filtros de óleo, `produto-3` elementos filtrantes, `produto-4` separadores).
- `produto-11` (Sintético 8000 4 L) vinha com fundo cinza de estúdio, trocado por branco.
- A LP antiga usa no Motor Oil Schulz a embalagem do MS LUB 1 L (rótulo: "para compressores alternativos de pistão"). A foto não foi usada: `produto-18` segue com o placeholder.
- Parte das fotos de lubrificante tem nome de arquivo de anúncio de marketplace (`D_NQ_NP_…`): confirmar com o cliente o direito de uso, ou pedir as originais.

As imagens `a.png` a `g.png` da LP antiga são logos (Kärcher, Schulz, Wayne, Atlas Copco, Sullair, Ingersoll Rand, Chicago Pneumatic), não fotos de produto. Não entraram como imagem: logo de marca de terceiro exige autorização registrada. As marcas de compressor entraram por extenso no texto da vitrine.

## Conflitos com o padrão

> Vem de `conflitos` na ficha: o que o material pedia e o padrão não permite. Registrado, não negociado.

| O que o material pedia                                        | Regra do padrão                    | O que entrou no lugar                                     |
| ------------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------- |
| "Entre em contato conosco" e "Faça um Orçamento Já!" como CTA | vocabulário padrão de CTA          | "Solicite sua cotação" e "Identifique sua peça"           |
| Formulário próprio com finalidade consumo/revenda             | formulário é o shortcode do plugin | shortcode padrão; o campo de finalidade vai para o plugin |
| "Peças para a sua manutenção" e "peças de manutenção"         | manutenção é negativa da campanha  | "reposição", "eficiência dos seus compressores"           |
| Menu, telefones e redes sociais no topo                       | uma rota, uma página               | header com logo, tagline e CTA                            |

## Dados não aplicados

> Vem de `naoAplicado`: telefone, e-mail, redes, CTA próprio, texto institucional. Não entram na página; ficam aqui para ninguém procurar depois.

- Kits de Manutenção — item da lista com termo negativo; entra se o cliente confirmar outro nome.
- "Precisa de um simples produto ou uma grande automação?" — automação não é oferta desta LP.
- E-mail `falanga@falangaservice.com.br`.
- Página institucional "A empresa automação pneumática".
- Logos de marcas do site atual, sem autorização de uso; a da Kärcher também porque não é marca de compressor.
- Telefones (85) 98129-5507 (Fortaleza) e (81) 99312-1617 (Recife), Instagram e Facebook da LP antiga.
- Campo "Finalidade — para consumo ou revenda" do formulário antigo: configurar no plugin.
- Foto do Motor Oil Schulz da LP antiga (é a embalagem do MS LUB 1 L).
- Imagem anexada `image(20261021-125842).png`, que não estava disponível.

## Desvios do padrão

Adotados em 22/10/2026 ao trazer a linguagem visual aprovada na LP irmã `lp-compressores-de-parafuso` (mockup do cliente de 21/10/2026). São os mesmos desvios registrados lá, aplicados ao conteúdo desta LP.

**Estrutura fixa** (regra 13 — Header, Hero, Cotação, Footer):

- **Header branco com a logo na barra**, no lugar da barra navy com a placa pendurada, e CTA em pílula amarela com texto navy. O menu do mockup não entra (uma rota, uma página). Rótulo próprio no desktop: `content.header.cta` = "Fale com um especialista".
- **Hero com H1 em linha de abertura.** O H1 (`hero.title`, com a palavra-chave da campanha) vai acima da manchete visual, que é `headline` em branco mais `highlight` em amarelo. A foto vai do fim da coluna de texto até a borda da tela, esmaecida à esquerda por máscara. Os pontos passaram de 3 em linha para **4 em grade 2×2**, com ícone amarelo. Um só CTA, em pílula amarela, com a área atendida (`hero.area`) embaixo. O shortcode do chat fica num card branco que encosta na margem da tela. O grid de três colunas e a coluna de 300px do shortcode continuam os do padrão.
- **Card de cotação.** O formulário fica num card branco com o selo, o título `quote.form.title` e a nota de LGPD com cadeado. O espaço do shortcode fica sem estilo de texto, de propósito.
- **Divisões arredondadas entre as seções**, cada uma por cima da seguinte (`--lp-round` em `global.css`).

**Variantes locais das seções** (contrato da biblioteca mantido — dados, CTAs, navy, `tone`/`rhythm`):

- `vitrine` — cabeçalho à esquerda com traço amarelo e a área atendida (`area`), prateleiras numeradas, cards contornados com o palco claro do produto, e faixa de CTA fechando a seção (`closing`, CTA `vitrine-cotacao`).
- `identificar` — painel navy mais largo que o container, fim do título em amarelo (`highlight`), os 6 dados em cards contornados com ícone amarelo, e faixa final com selo e CTA de rótulo próprio (`cta`).
- `aplicacoes` — faixa de CTA fechando a seção (`closing`, CTA `aplicacoes-atendimento`).
- `diferenciais` — sem pessoa recortada: o cenário já traz o técnico. CTA de rótulo próprio (`cta`) e área atendida (`area`) abaixo dele.

> `npm run compose` recopia os componentes da biblioteca e desfaz as variantes. Recompor a página exige reaplicá-las a partir do git. O aviso está no topo de cada componente alterado.

**Exceções nos scripts**, para o padrão continuar guardando a partir da base nova:

- `scripts/ficha.mjs` aceita **4** pontos no hero (eram exatamente 3) e lê chaves de ícone entre aspas.
- `scripts/check-lp.mjs` tem as assinaturas de `Header.astro` e `Hero.astro` **repinadas** na estrutura nova — continuam pegando mudança acidental, agora desta base.

## Defeitos do padrão encontrados nesta execução

Registrados para corrigir no starter (o primeiro e o terceiro foram corrigidos dentro da LP):

1. `scripts/ficha.mjs` lê os nomes de ícone com `/^ {2}([a-zA-Z][\w-]*):/` e ignora as chaves entre aspas de `icons.ts` (`'map-pin'`, `'badge-check'`, `'file-text'`, `'settings-2'`…). A ficha recusa ícones que existem. **Corrigido aqui em 22/10/2026**, como na LP irmã: o padrão passou a aceitar a chave entre aspas, e `diferenciais` usa `map-pin`.
2. `scripts/screens.mjs` passa o caminho de saída sem aspas com `shell: true`: em pasta com espaço no nome, o Playwright recebe argumentos quebrados e a captura falha. As capturas desta LP saíram de uma cópia do script com o caminho entre aspas.
3. `.prettierignore` do template não ignora `docs/PROMPT-FICHA-LP.md` nem `ficha.json`, e o `format:check` falha numa LP recém-criada. Corrigido aqui, como na LP de Manutenção.
4. O header fixo pede logo 240×200; logo horizontal é cortado pelo `<Image width={240} height={200}>` sem aviso visual. **Deixou de afetar esta LP em 22/10/2026**: o header branco alinha a logo na barra, em 341×82. O `check:lp` ainda avisa da proporção contra a especificação da estrutura fixa — aviso esperado, igual ao da LP irmã.
5. **`Footer.astro` estourava a largura da tela em 1024px** (medido em 22/10/2026). A partir de `lg` o rodapé virava uma linha com `shrink-0` nos dois `<p>` e `lg:whitespace-nowrap` no `<address>`: nada podia encolher nem quebrar, e com um endereço de duas unidades (`site.address` desta LP tem Fortaleza **e** Recife) o documento ia a 1112px num viewport de 1024px, gerando rolagem horizontal na página inteira. **Corrigido aqui em 22/10/2026**, a pedido: o `<address>` ganhou `min-w-0` e o `whitespace-nowrap` subiu de `lg` para `xl`, então o endereço quebra em duas linhas entre 1024 e 1279px e volta a uma linha a partir de 1280px. Medido sem estouro em 360, 390, 768, 1024, 1100, 1180, 1280, 1366, 1440, 1512 e 1920px. A assinatura de estrutura fixa do `check:lp` não muda (não cobre essas classes). **A LP irmã `lp-compressores-de-parafuso` segue com o defeito** — a mesma correção precisa ser aplicada lá e no starter.

## Lista de `data-cta` (para o GTM)

`header-cta`, `hero-primary`, `vitrine-filtros-de-ar`, `vitrine-filtros-de-oleo`, `vitrine-elementos-filtrantes`, `vitrine-separadores-ar-oleo`, `vitrine-valvulas-de-seguranca`, `vitrine-valvulas-controle-pressao`, `vitrine-acoplamentos`, `vitrine-correias-de-transmissao`, `vitrine-kits-de-junta`, `vitrine-lub-sintetico-8000-20l`, `vitrine-lub-sintetico-8000-4l`, `vitrine-lub-mineral-4000-20l`, `vitrine-lub-mineral-4000-4l`, `vitrine-lub-mineral-1000-20l`, `vitrine-lub-mineral-1000-4l`, `vitrine-ms-lub-4l`, `vitrine-ms-lub-1l`, `vitrine-motor-oil-schulz`, `vitrine-desengripante-sd-50`, `vitrine-cotacao`, `identificar-cta`, `aplicacoes-compressores-parafuso`, `aplicacoes-compressores-pistao`, `aplicacoes-reservatorios`, `aplicacoes-transmissao`, `aplicacoes-atendimento`, `diferenciais-cta`, `cotacao-whatsapp`, `float-whatsapp` (31).

> Mudou em 22/10/2026 com a linguagem visual nova: saiu `hero-secondary` (o hero passou a ter um só CTA) e entraram `vitrine-cotacao` e `aplicacoes-atendimento`, das faixas que fecham as duas seções. **Reconfigurar o GTM.**

## Estado da entrega

- [x] Primeira versão de pé (`npm run check:lp:rascunho` passa) em: `22/10/2026`
- [ ] Todos os assets reais entregues
- [ ] `npm run verify` passa inteiro em: `____/____/______`
- [x] Padrão B2 versão: `2.8.0`

## Publicação

| Onde      | Endereço                                                       | Observação                                                                                                  |
| --------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| GitHub    | https://github.com/harpyacessory-ux/lp-pe-as-para-compressores | branch `main`; o workflow `build-wp.yml` só publica em `wp-build` quando o `check:lp` estrito passar        |
| Vercel    | https://lp-pe-as-para-compressores.vercel.app                  | projeto `lp-pe-as-para-compressores`, ligado ao repositório: cada push em `main` gera um deploy de produção |
| URL final | https://falangapneumatica.com.br/pecas-para-compressores/      | é a `site.url` (canonical e og:url); a URL da Vercel é de revisão                                           |
