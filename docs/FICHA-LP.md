```yaml
ficha: 1
padrao: 2.8.0
cliente: Falanga Pneumática
produto: Peças e lubrificantes para compressores
data: 2026-10-22

site:
  brand: Falanga Pneumática
  brandShort: Falanga
  product: Peças e lubrificantes para compressores
  context: reposição de componentes
  url: https://falangapneumatica.com.br/pecas-para-compressores/
  address: R. Mirian Rocha, 97 - Fortaleza - CE · Rua Tomaz Gonzaga, 74 - Zumbi, Recife - PE
  privacyUrl: ''
  whatsapp: ''
  shortcodes:
    chat: '[atendimento_chat id="default"]'
    form: '[atendimento_form id="default-form"]'

campanha:
  mainKeyword: peças para compressor Schulz
  negatives:
    [
      manutenção,
      manutencao,
      conserto,
      revisão,
      mecânico,
      oficina,
      automotivo,
      carro,
      veículo,
      caminhão,
      moto,
      diesel,
      gasolina,
      graxa,
      litros,
      câmbio,
      óleo de diferencial,
      macaco hidráulico,
      chiaperini,
      arprex,
      airzap,
      lefoo,
      motomil,
      chevron,
      Shell,
      Mobil,
      Castrol,
      Lubrax,
      Ipiranga,
      Petronas,
    ]
  forbidden: [autorizada, autorizado, distribuidor oficial, representante oficial]
  areaAtendida: Nordeste, com unidades em Fortaleza/CE e Recife/PE
  onde: selo
  familias:
    - nome: peca-para-compressor
      termos:
        [
          peças para compressor Schulz,
          filtro de ar,
          filtro de óleo,
          elemento filtrante,
          separador ar/óleo,
          mangueira,
          dreno,
          válvulas de admissão e descarga,
        ]
      responde: vitrine
    - nome: unidade-compressora
      termos: [unidade compressora parafuso, unidade de compressor parafuso]
      responde: null
    - nome: lubrificante
      termos:
        [
          óleo para compressor,
          óleo de compressor de ar,
          óleo sintético compressor,
          lubrificante para compressor,
        ]
      responde: vitrine
    - nome: lubrificante-schulz
      termos: [óleo para compressor parafuso Schulz]
      responde: vitrine
    - nome: especificacao
      termos: [lubrificante sintético, lubrificante mineral]
      responde: null

publico: [Manutenção, Compras]

marcas:
  usarLogos: false
  nomes: [Schulz]
  autorizacao: não solicitada — Schulz citada só por extenso

tokens:
  padrao: true

conteudo:
  title: Peças para compressor Schulz e lubrificantes | Falanga Pneumática
  description: 'Peças para compressor Schulz e outras marcas: filtros, separadores ar/óleo, válvulas e lubrificantes LUB Schulz. Atendimento em todo o Nordeste.'
  hero:
    eyebrow: Peças e lubrificantes
    title: Peças para compressor Schulz e lubrificantes
    text: Filtros, separadores ar/óleo, válvulas, correias e a linha LUB Schulz para a reposição do seu compressor, com atendimento em todo o Nordeste.
    banner: Filtros, separadores e lubrificantes para compressor sobre fundo técnico
    points:
      - icon: gear
        line1: Peças industriais
        line2: para compressores
      - icon: layers
        line1: Diversos modelos
        line2: e marcas
      - icon: pin
        line1: Atendimento em
        line2: todo o Nordeste
  quote:
    eyebrow: Solicite sua cotação
    title: Fale com quem entende de peças e lubrificantes para compressores.
    text: Nossa equipe identifica a peça ou o lubrificante certo para o seu compressor e prepara o orçamento. Preencha o formulário ou fale direto conosco pelo WhatsApp.
    trust:
      - icon: shield
        label: Peças originais
      - icon: truck
        label: Itens prontos para envio
      - icon: pin
        label: Atendimento em todo o Nordeste
    lgpd: Seus dados serão usados apenas para responder à sua solicitação de cotação, conforme a LGPD.

blocos:
  vitrine:
    veredicto: quase
    responde: [peca-para-compressor, lubrificante, lubrificante-schulz]
    papeis: [Manutenção, Compras]
    eyebrow: Catálogo
    title: Peças e lubrificantes para o seu compressor
    text: Itens de reposição para diversos modelos e marcas e a linha de lubrificantes Schulz. Consulte a disponibilidade com o atendimento.
    groups:
      - id: pecas
        label: Peças de reposição
        logo: null
      - id: lubrificantes
        label: Lubrificantes Schulz
        logo: null
    items:
      - id: filtros-de-ar
        group: pecas
        title: Filtros de ar
        description: ''
        photo: Filtro de ar para compressor
      - id: filtros-de-oleo
        group: pecas
        title: Filtros de óleo
        description: ''
        photo: Filtro de óleo para compressor
      - id: elementos-filtrantes
        group: pecas
        title: Elementos filtrantes
        description: ''
        photo: Elemento filtrante para compressor
      - id: separadores-ar-oleo
        group: pecas
        title: Separadores ar/óleo
        description: ''
        photo: Separador ar/óleo para compressor de parafuso
      - id: valvulas-de-seguranca
        group: pecas
        title: Válvulas de segurança
        description: ''
        photo: Válvula de segurança para compressor
      - id: valvulas-controle-pressao
        group: pecas
        title: Válvulas de controle de pressão
        description: ''
        photo: Válvula de controle de pressão para compressor
      - id: acoplamentos
        group: pecas
        title: Acoplamentos
        description: ''
        photo: Acoplamento para compressor
      - id: correias-de-transmissao
        group: pecas
        title: Correias de transmissão
        description: ''
        photo: Correia de transmissão para compressor
      - id: kits-de-junta
        group: pecas
        title: Kits de junta
        description: ''
        photo: Kit de juntas para compressor
      - id: lub-sintetico-8000-20l
        group: lubrificantes
        title: LUB Schulz Sintético 8000 20 L
        description: ''
        photo: Embalagem de 20 L do lubrificante LUB Schulz Sintético 8000
      - id: lub-sintetico-8000-4l
        group: lubrificantes
        title: LUB Schulz Sintético 8000 4 L
        description: ''
        photo: Embalagem de 4 L do lubrificante LUB Schulz Sintético 8000
      - id: lub-mineral-4000-20l
        group: lubrificantes
        title: LUB Schulz Mineral 4000 20 L
        description: ''
        photo: Embalagem de 20 L do lubrificante LUB Schulz Mineral 4000
      - id: lub-mineral-4000-4l
        group: lubrificantes
        title: LUB Schulz Mineral 4000 4 L
        description: ''
        photo: Embalagem de 4 L do lubrificante LUB Schulz Mineral 4000
      - id: lub-mineral-1000-20l
        group: lubrificantes
        title: LUB Schulz Mineral 1000 20 L
        description: ''
        photo: Embalagem de 20 L do lubrificante LUB Schulz Mineral 1000
      - id: lub-mineral-1000-4l
        group: lubrificantes
        title: LUB Schulz Mineral 1000 4 L
        description: ''
        photo: Embalagem de 4 L do lubrificante LUB Schulz Mineral 1000
      - id: ms-lub-4l
        group: lubrificantes
        title: MS LUB Schulz 4 L
        description: ''
        photo: Embalagem de 4 L do MS LUB Schulz
      - id: ms-lub-1l
        group: lubrificantes
        title: MS LUB Schulz 1 L
        description: ''
        photo: Embalagem de 1 L do MS LUB Schulz
      - id: motor-oil-schulz
        group: lubrificantes
        title: Motor Oil Schulz
        description: ''
        photo: Embalagem do Motor Oil Schulz
      - id: desengripante-sd-50
        group: lubrificantes
        title: Desengripante SD 50
        description: ''
        photo: Embalagem do desengripante SD 50

  linhas:
    veredicto: insuficiente
    falta: não há 3 ou 4 famílias com descrição e 3 características objetivas cada, nem foto recortada por família

  especificacoes:
    veredicto: insuficiente
    falta: não há modelos com colunas técnicas, valores nem a linha mais vendida

  identificar:
    veredicto: completo
    responde: [peca-para-compressor]
    papeis: [Manutenção, Compras]
    eyebrow: Apoio na identificação
    title: Precisa identificar a peça certa?
    microcopy: Atendimento com especialista
    text: Não precisa ter todos os dados em mãos. Envie o que você tiver e nossa equipe identifica a peça ou o lubrificante certo para o seu compressor.
    items:
      - icon: barcode
        label: Código
        hint: da peça original
      - icon: tag
        label: Marca
        hint: do compressor
      - icon: hash
        label: Modelo
        hint: e número de série
      - icon: camera
        label: Foto
        hint: da peça ou plaqueta
      - icon: ruler
        label: Medidas
        hint: da peça a substituir
      - icon: droplet
        label: Lubrificante
        hint: o que usa hoje

  processo:
    veredicto: insuficiente
    falta: o cliente não descreveu as etapas do atendimento nem os prazos que assume

  situacoes:
    veredicto: insuficiente
    falta: o cliente não descreveu as situações de compra reativa em que é procurado

  aplicacoes:
    veredicto: completo
    responde: [peca-para-compressor, lubrificante-schulz]
    papeis: [Manutenção]
    eyebrow: Aplicações
    title: Reposição para cada parte do compressor
    text: Itens de reposição e lubrificantes para compressores de parafuso e de pistão e para os componentes que trabalham com eles.
    items:
      - id: compressores-parafuso
        label: Compressores de parafuso
        description: Filtros de ar e óleo, separadores ar/óleo e lubrificantes para a unidade de parafuso.
        photo: Compressor de parafuso industrial em sala de compressores
      - id: compressores-pistao
        label: Compressores de pistão
        description: Válvulas, kits de junta e lubrificantes para compressores de pistão.
        photo: Compressor de pistão com reservatório de ar
      - id: reservatorios
        label: Reservatórios de ar
        description: Válvulas de segurança e de controle de pressão para reservatórios de ar.
        photo: Reservatório de ar comprimido com válvula de segurança e manômetro
      - id: transmissao
        label: Transmissão
        description: Acoplamentos e correias para a transmissão entre o motor e a unidade compressora.
        photo: Correias e polias de transmissão de um compressor

  segmentos:
    veredicto: insuficiente
    falta: nenhum setor industrial, processo ou foto de segmento foi informado

  clientes:
    veredicto: insuficiente
    falta: faltam 4 a 8 logos autorizadas e 3 números com fonte identificável

  diferenciais:
    veredicto: completo
    responde: [peca-para-compressor, lubrificante]
    papeis: [Compras, Manutenção]
    eyebrow: Por que a Falanga
    titleLines: [Não deixe seu, compressor parar.]
    text: Peças originais para diversos modelos e marcas, a linha de lubrificantes Schulz e atendimento com especialista para manter o seu ar comprimido em operação.
    scene: Bancada com filtros, separadores e lubrificantes para compressor
    person: Especialista da Falanga de braços cruzados
    reasons:
      - icon: shield
        title: Peças originais
        description: Opções para diversos modelos e marcas de compressor.
      - icon: truck
        title: Prontas para envio
        description: Peças e lubrificantes prontos para envio.
      - icon: pin
        title: Atendimento no Nordeste
        description: Cobertura em toda a região, a partir de Fortaleza e Recife.
      - icon: search
        title: Atendimento personalizado
        description: Apoio para identificar o produto certo para o seu compressor.
      - icon: chat
        title: Especialista disponível
        description: Orçamento e dúvidas direto com um especialista.

  perguntas:
    veredicto: insuficiente
    falta: o comercial não enviou a lista de dúvidas reais com as respostas aprovadas

  escopo:
    veredicto: insuficiente
    falta: o material não fala em consolidar a compra de vários itens num pedido só, nem traz a foto de composição

assets:
  pendentes: [LOGO, heroBg, vitrine, aplicacoes, diferenciais]

conflitos:
  - pede: '"Entre em contato conosco" como CTA'
    regra: todo CTA usa o vocabulário padrão
  - pede: atendimento via WhatsApp sem número informado
    regra: o botão flutuante precisa do número com DDI e DDD
  - pede: '"todas as peças para a sua manutenção" na oferta'
    regra: manutenção é negativa da campanha e não é assunto desta LP

naoAplicado:
  - Kits de Manutenção (item da lista com termo negativo da campanha; entra só se o cliente confirmar outro nome)
  - '"Precisa de um simples produto ou uma grande automação?" (automação não é oferta desta LP)'
  - e-mail falanga@falangaservice.com.br (e-mail não entra na LP pelo padrão)
  - página institucional "A empresa automação pneumática"
  - logos de Schulz, Wayne, Atlas Copco, Sullair e Ingersoll Rand do site atual (b.png a f.png), sem autorização de uso
```

# Ficha de execução — Falanga Pneumática / Peças e lubrificantes para compressores

> Montada no editor a partir de `docs/briefing-cliente/briefing_falanga_pecas_lubrificantes.md`
> (briefing organizado de 21/10/2026), por pedido de uma primeira versão antes da entrevista
> completa no chat, como na LP de Manutenção da Falanga. Os blocos `identificar` e
> `aplicacoes` estavam **insuficientes** no briefing e foram preenchidos por **inferência**,
> só para a página ter as fases de apoio e de prova: precisam ser confirmados com o comercial
> e, se mudarem, a ficha é regerada.

## O que foi decidido

LP de produto para os grupos ativos de peças e lubrificantes, com a palavra-chave
`peças para compressor Schulz` no H1 e no title. O H1 junta peças e lubrificantes, porque a
oferta é as duas coisas e metade das famílias compradas é de óleo. O atendimento em todo o
Nordeste aparece no hero (texto e terceira prova), num selo da cotação e num diferencial.

A oferta é uma **vitrine** de 19 itens em duas prateleiras — Peças de reposição (9) e
Lubrificantes Schulz (10) —, só com foto e nome, porque nenhum item tem descrição. O apoio
mostra os seis dados que bastam para identificar a peça em `identificar`, a prova mostra
onde as peças entram em `aplicacoes` e a autoridade fecha com a frase do cliente, "Não deixe
seu compressor parar", e os cinco diferenciais.

Ajustes de vocabulário na vitrine, para casar com o que a campanha compra:
"Elementos de Filtros" virou **Elementos filtrantes** e "Separadores de Óleo e Ar" virou
**Separadores ar/óleo**. Nos lubrificantes, "Litros" virou **L**, porque `litros` é negativa
da campanha (bloqueia a busca por tamanho de reservatório de compressor). Os lubrificantes
foram reordenados por linha (8000, 4000, 1000, MS LUB, Motor Oil, Desengripante).

Marca de terceiro entra **só por extenso**: Schulz, sem logo. `autorizada`, `autorizado`,
`distribuidor oficial` e `representante oficial` estão proibidos na página — o briefing não
traz claim proibido, mas também não comprova a relação com a Schulz.

## Viabilidade por fase

| Fase       | Bloco            | Veredicto    | Responde                                  | Papéis              | O que falta                                                  |
| ---------- | ---------------- | ------------ | ----------------------------------------- | ------------------- | ------------------------------------------------------------ |
| Oferta     | `vitrine`        | quase        | peça, lubrificante, lubrificante Schulz   | Manutenção, Compras | 19 fotos 800×600 e autorização da logo Schulz                |
| Oferta     | `linhas`         | insuficiente | —                                         | —                   | famílias com descrição, 3 features e foto recortada          |
| Oferta     | `especificacoes` | insuficiente | —                                         | —                   | modelos, colunas técnicas e valores                          |
| Apoio      | `identificar`    | completo     | peça para compressor                      | Manutenção, Compras | os 6 dados são **inferidos**; confirmar com o comercial      |
| Apoio      | `processo`       | insuficiente | —                                         | —                   | etapas reais do atendimento                                  |
| Apoio      | `situacoes`      | insuficiente | —                                         | —                   | situações de compra reativa                                  |
| Prova      | `aplicacoes`     | completo     | peça para compressor, lubrificante Schulz | Manutenção          | as 4 aplicações são **inferidas** da lista de peças; 4 fotos |
| Prova      | `segmentos`      | insuficiente | —                                         | —                   | 7 setores com equipamentos e fotos                           |
| Prova      | `clientes`       | insuficiente | —                                         | —                   | logos autorizadas e números com fonte                        |
| Autoridade | `diferenciais`   | completo     | peça para compressor, lubrificante        | Compras, Manutenção | cenário de bancada e pessoa recortada                        |
| Autoridade | `perguntas`      | insuficiente | —                                         | —                   | lista real de dúvidas do comercial                           |
| Autoridade | `escopo`         | insuficiente | —                                         | —                   | argumento de compra consolidada e foto de composição         |

Famílias sem bloco que as responda: **unidade compressora** (não se sabe se a Falanga vende
unidades de parafuso) e **especificação de lubrificante** (sintético e mineral aparecem só no
nome dos produtos, sem ficha técnica). Também ficam sem resposta, dentro da família de peças,
**mangueira, dreno e válvulas de admissão e descarga**: a lista do cliente não os traz. São
cliques que a página não atende; confirmar com o cliente ou negativar na campanha.

## Núcleo

| #   | Entrada            | Valor                                               | Origem                                           |
| --- | ------------------ | --------------------------------------------------- | ------------------------------------------------ |
| 1   | MARCA              | Falanga Pneumática                                  | briefing (inferido do domínio)                   |
| 2   | MARCA_CURTA        | Falanga                                             | briefing                                         |
| 3   | PRODUTO_PRINCIPAL  | Peças e lubrificantes para compressores             | briefing (inferido)                              |
| 4   | CONTEXTO_DE_USO    | reposição de componentes                            | briefing (inferido; evita "manutenção")          |
| 5   | PUBLICO            | Manutenção, Compras                                 | **inferido** — ausente no material               |
| 6   | HERO               | peças industriais, modelos e marcas, Nordeste       | briefing                                         |
| 7   | MARCAS_ATENDIDAS   | Schulz, só por extenso                              | briefing; logo sem autorização                   |
| 8   | SELOS_DE_CONFIANCA | Peças originais, prontos para envio, Nordeste       | briefing                                         |
| 9   | ENDERECO           | Fortaleza/CE e Recife/PE (sem CEP)                  | briefing                                         |
| 10  | URL + PRIVACIDADE  | `falangapneumatica.com.br/pecas-para-compressores/` | **provisório** — URL de referência; sem política |
| 11  | SHORTCODES         | padrão do plugin                                    | default                                          |
| 12  | WHATSAPP           | sem botão flutuante                                 | número não informado                             |
| 13  | STACK + PUBLICACAO | padrão da agência                                   | default                                          |
| 14  | TOKENS + FONTE     | visual padrão                                       | default                                          |
| 15  | CAMPANHA           | `peças para compressor Schulz`                      | briefing (lista de palavras-chave)               |

## Pendências

| O que falta                                        | Quem resolve        | Especificação                                                                                                                                                         |
| -------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Banner do hero                                     | designer            | 1981×900, peças e lubrificantes entre 62% e 79% da largura, lado esquerdo escuro, sem texto                                                                           |
| 19 fotos da vitrine                                | cliente             | PNG/JPG 800×600 (4:3), produto centrado, fundo branco ou transparente — uma por item, na ordem                                                                        |
| 4 fotos das aplicações                             | cliente ou designer | 1200×900 (4:3): compressor de parafuso, compressor de pistão, reservatório, transmissão                                                                               |
| Cenário e pessoa recortada dos diferenciais        | designer            | cenário 1600×900; pessoa de corpo inteiro 1220×1000 com fundo transparente                                                                                            |
| Logo no formato do header                          | cliente             | o logo do site (341×82, horizontal) é cortado na placa do header, que pede 240×200: pedir versão empilhada 240×200 com fundo transparente, ou aprovar header adaptado |
| Validar os 6 dados de `identificar`                | comercial           | confirmar ou corrigir: código, marca, modelo/série, foto, medidas, lubrificante                                                                                       |
| Validar as 4 `aplicacoes`                          | comercial           | confirmar que a Falanga atende pistão, reservatórios e transmissão                                                                                                    |
| Público que pede cotação                           | cliente             | cargos reais (hoje inferido)                                                                                                                                          |
| URL final e política de privacidade                | cliente             | domínio de publicação e link da política                                                                                                                              |
| WhatsApp comercial                                 | cliente             | número com DDI e DDD, só dígitos                                                                                                                                      |
| Kits de Manutenção                                 | cliente             | entra com outro nome (ex.: "Kits de reposição")? Hoje fica fora pela negativa                                                                                         |
| Mangueiras, drenos e válvulas de admissão/descarga | cliente             | fazem parte da oferta? Se sim, entram na vitrine; se não, negativar                                                                                                   |
| Unidade compressora de parafuso                    | cliente             | vende? Se não, negativar os termos                                                                                                                                    |
| Logo Schulz na prateleira de lubrificantes         | cliente             | autorização de uso registrada; sem ela fica o nome                                                                                                                    |

## Conflitos com o padrão

| O que o material pedia                 | Regra do padrão                     | O que entrou no lugar                                   |
| -------------------------------------- | ----------------------------------- | ------------------------------------------------------- |
| "Entre em contato conosco" como CTA    | vocabulário padrão de CTA           | "Solicite sua cotação" e "Identifique sua peça"         |
| Atendimento via WhatsApp sem número    | o botão flutuante precisa do número | sem botão flutuante; o botão da cotação aciona o plugin |
| "Todas as peças para a sua manutenção" | manutenção é negativa da campanha   | "reposição do seu compressor"                           |

## Itens excedentes

| Bloco     | Itens que entraram       | Itens guardados                                 |
| --------- | ------------------------ | ----------------------------------------------- |
| `vitrine` | 19 dos 20 itens da lista | Kits de Manutenção — termo negativo da campanha |

## Conteúdo futuro (grupos pausados)

Grupos pausados, fora desta execução: `peças para compressor`, `para compressor`,
`schulz peças reposição`, `oleo compressor`, `oleo lubrificante compressor`,
`lubrificantes para compressores`, `Lubrificante Schulz`, `Lubrificante Sintético` e
`Lubrificante Mineral`. A página já responde a quase todos pela vitrine; os dois últimos
pedem ficha técnica dos lubrificantes.

## Dados não usados pelo padrão

E-mail `falanga@falangaservice.com.br`; frase de CTA "Entre em contato conosco"; convite a
promoções e texto institucional de atendimento; página institucional de automação; logos de
marcas do site atual (sem autorização); a imagem anexada `image(20261021-125842).png`, que
não estava disponível.
