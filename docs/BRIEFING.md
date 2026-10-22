# Registro da LP — o que a ficha decidiu e o que a execução fez

> Preenchido pelo agente **durante a execução**, a partir de `docs/FICHA-LP.md`. Não é um registro de entrevista: a entrevista aconteceu no chat web (`docs/PROMPT-FICHA-LP.md`) e a ficha é a fonte. Este arquivo existe para que, meses depois e sem a conversa, se saiba de onde veio cada coisa — e porque `docs/briefing-cliente/` fica fora do git.
>
> Nada aqui é perguntado ao usuário. Se um campo não puder ser preenchido a partir da ficha, a execução para e recusa, em vez de deixar lacuna.

> **Desvio de fluxo registrado.** Esta ficha **não** saiu de uma entrevista no chat: foi montada no editor a partir do briefing organizado, por pedido de uma primeira versão ("construa essa lp"), como na LP de Manutenção da Falanga. Os blocos `identificar` e `aplicacoes` estavam `insuficiente` no briefing e foram preenchidos por inferência para a página ter apoio e prova. Validar com o comercial antes de publicar.

## Origem

| Campo                     | Valor                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------ |
| Ficha de execução         | `docs/FICHA-LP.md`                                                                               |
| Data da ficha             | 2026-10-22                                                                                       |
| Versão do padrão na ficha | 2.8.0                                                                                            |
| Validada em               | `22/10/2026` por `npm run ficha`                                                                 |
| Material bruto do cliente | `docs/briefing-cliente/briefing_falanga_pecas_lubrificantes.md` (fora do git)                    |
| Briefing de campanha      | não — só palavras-chave e negativas dos grupos                                                   |
| Fora desta execução       | grupos pausados de peças e lubrificantes (ver Conteúdo futuro); LP de Manutenção, em outra pasta |

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

| Papel      | Argumento de compra                                          | Bloco que responde                          | Status       |
| ---------- | ------------------------------------------------------------ | ------------------------------------------- | ------------ |
| Manutenção | achar a peça certa sem ter o código em mãos                  | `identificar`, `aplicacoes`, `vitrine`      | **inferido** |
| Compras    | itens prontos para envio, peças originais, um só atendimento | `diferenciais`, selos da cotação, `vitrine` | **inferido** |

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

| #   | Entrada                 | Valor                                                                                            | Origem                                             |
| --- | ----------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| 1   | MARCA                   | Falanga Pneumática                                                                               | briefing (inferido do domínio)                     |
| 2   | MARCA_CURTA             | Falanga                                                                                          | briefing                                           |
| 3   | PRODUTO_PRINCIPAL       | Peças e lubrificantes para compressores                                                          | briefing (inferido)                                |
| 4   | CONTEXTO_DE_USO         | reposição de componentes                                                                         | briefing (inferido; evita "manutenção")            |
| 5   | PUBLICO                 | Manutenção, Compras                                                                              | **inferido** — ausente no material                 |
| 6   | HERO                    | Peças industriais para compressores · Diversos modelos e marcas · Atendimento em todo o Nordeste | briefing                                           |
| 7   | MARCAS_ATENDIDAS        | Schulz, só por extenso                                                                           | logos de terceiros: sem autorização registrada     |
| 8   | SELOS_DE_CONFIANCA      | Peças originais · Itens prontos para envio · Atendimento em todo o Nordeste                      | briefing                                           |
| 9   | ENDERECO                | R. Mirian Rocha, 97 - Fortaleza - CE · Rua Tomaz Gonzaga, 74 - Zumbi, Recife - PE                | briefing (sem CEP)                                 |
| 10  | URL_FINAL + PRIVACIDADE | `https://falangapneumatica.com.br/pecas-para-compressores/` · sem política                       | **provisório** — URL de referência do briefing     |
| 11  | SHORTCODES              | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`                       | default do plugin                                  |
| 12  | WHATSAPP                | vazio — sem botão flutuante                                                                      | número não informado                               |
| 13  | STACK + PUBLICACAO      | Astro, `main` → `wp-build`                                                                       | default do padrão                                  |
| 14  | TOKENS_DE_COR + FONTE   | visual padrão                                                                                    | default (a LP de Manutenção usa o amarelo da logo) |
| 15  | CAMPANHA                | `peças para compressor Schulz`                                                                   | lista de palavras-chave                            |

## Assets

> Status `pendente` é o que estava em `assets.pendentes` na ficha: a primeira versão subiu com o placeholder da biblioteca naquele lugar. O `npm run verify` continua falhando enquanto houver um — é o que impede o placeholder de ir ao ar.

| Asset          | Arquivo esperado        | Especificação               | Status                                                                                                                                              |
| -------------- | ----------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logo           | `src/assets/LOGO.png`   | 240×200, fundo transparente | pendente — o logo do site (341×82, horizontal, com o selo de 40 anos) é cortado na placa do header; pedir versão 240×200 ou aprovar header adaptado |
| Banner do hero | `src/assets/heroBg.png` | 1981×900, brief 4.1.3       | pendente                                                                                                                                            |

> Abaixo, uma linha por asset das seções que entraram (`assets` no manifesto de cada uma).

| Asset                       | Arquivo esperado                                            | Especificação                                                      | Status                                                                      |
| --------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| 19 fotos da vitrine         | `src/assets/vitrine/produto-1.png` … `produto-19.png`       | PNG/JPG 800×600 (4:3), produto centrado, fundo branco ou recortado | pendente — na ordem da ficha (1 = Filtros de ar … 19 = Desengripante SD 50) |
| Logos dos grupos da vitrine | `src/assets/vitrine/marca-*.png`                            | PNG 400×160                                                        | não usado — prateleiras com o nome do grupo                                 |
| 4 fotos das aplicações      | `src/assets/aplicacoes/aplicacao-1.png` … `aplicacao-4.png` | 1200×900 (4:3), equipamento em operação                            | pendente — parafuso, pistão, reservatório, transmissão                      |
| Cenário dos diferenciais    | `src/assets/diferenciais/cenario.jpg`                       | 1600×900, bancada/cenário                                          | pendente                                                                    |
| Pessoa dos diferenciais     | `src/assets/diferenciais/pessoa.png`                        | 1220×1000, corpo inteiro, fundo transparente                       | pendente                                                                    |

As 5 imagens citadas no briefing (`/wp-content/uploads/2024/08/b.png` a `f.png`) são logos de Schulz, Wayne, Atlas Copco, Sullair e Ingersoll Rand, não fotos de produto. Não entraram: logo de marca de terceiro exige autorização.

## Conflitos com o padrão

> Vem de `conflitos` na ficha: o que o material pedia e o padrão não permite. Registrado, não negociado.

| O que o material pedia                 | Regra do padrão                     | O que entrou no lugar                                   |
| -------------------------------------- | ----------------------------------- | ------------------------------------------------------- |
| "Entre em contato conosco" como CTA    | vocabulário padrão de CTA           | "Solicite sua cotação" e "Identifique sua peça"         |
| Atendimento via WhatsApp sem número    | o botão flutuante precisa do número | sem botão flutuante; o botão da cotação aciona o plugin |
| "Todas as peças para a sua manutenção" | manutenção é negativa da campanha   | "reposição do seu compressor"                           |

## Dados não aplicados

> Vem de `naoAplicado`: telefone, e-mail, redes, CTA próprio, texto institucional. Não entram na página; ficam aqui para ninguém procurar depois.

- Kits de Manutenção — item da lista com termo negativo; entra se o cliente confirmar outro nome.
- "Precisa de um simples produto ou uma grande automação?" — automação não é oferta desta LP.
- E-mail `falanga@falangaservice.com.br`.
- Página institucional "A empresa automação pneumática".
- Logos de marcas do site atual, sem autorização de uso.
- Imagem anexada `image(20261021-125842).png`, que não estava disponível.

## Defeitos do padrão encontrados nesta execução

Registrados para corrigir no starter (não foram corrigidos dentro da LP, exceto o terceiro):

1. `scripts/ficha.mjs` lê os nomes de ícone com `/^ {2}([a-zA-Z][\w-]*):/` e ignora as chaves entre aspas de `icons.ts` (`'map-pin'`, `'badge-check'`, `'file-text'`, `'settings-2'`…). A ficha recusa ícones que existem; aqui foi usado `pin`, que é o mesmo pino.
2. `scripts/screens.mjs` passa o caminho de saída sem aspas com `shell: true`: em pasta com espaço no nome, o Playwright recebe argumentos quebrados e a captura falha. As capturas desta LP saíram de uma cópia do script com o caminho entre aspas.
3. `.prettierignore` do template não ignora `docs/PROMPT-FICHA-LP.md` nem `ficha.json`, e o `format:check` falha numa LP recém-criada. Corrigido aqui, como na LP de Manutenção.
4. O header fixo pede logo 240×200; logo horizontal é cortado pelo `<Image width={240} height={200}>` sem aviso visual.

## Lista de `data-cta` (para o GTM)

`header-cta`, `hero-primary`, `hero-secondary`, `vitrine-filtros-de-ar`, `vitrine-filtros-de-oleo`, `vitrine-elementos-filtrantes`, `vitrine-separadores-ar-oleo`, `vitrine-valvulas-de-seguranca`, `vitrine-valvulas-controle-pressao`, `vitrine-acoplamentos`, `vitrine-correias-de-transmissao`, `vitrine-kits-de-junta`, `vitrine-lub-sintetico-8000-20l`, `vitrine-lub-sintetico-8000-4l`, `vitrine-lub-mineral-4000-20l`, `vitrine-lub-mineral-4000-4l`, `vitrine-lub-mineral-1000-20l`, `vitrine-lub-mineral-1000-4l`, `vitrine-ms-lub-4l`, `vitrine-ms-lub-1l`, `vitrine-motor-oil-schulz`, `vitrine-desengripante-sd-50`, `identificar-cta`, `aplicacoes-compressores-parafuso`, `aplicacoes-compressores-pistao`, `aplicacoes-reservatorios`, `aplicacoes-transmissao`, `diferenciais-cta`, `cotacao-whatsapp` (29). Sem `float-whatsapp`: não há número.

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
