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
  whatsapp: '5585996267979'
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

publico: [Manutenção, Compras, Revenda]

marcas:
  usarLogos: false
  nomes: [Schulz, Atlas Copco, Sullair, Ingersoll Rand, Wayne, Chicago Pneumatic]
  autorizacao: o site atual mostra as logos num carrossel; na LP, só por extenso até o cliente registrar a autorização

tokens:
  padrao: true

conteudo:
  title: Peças para compressor Schulz e lubrificantes | Falanga Pneumática
  description: Peças para compressor Schulz, Atlas Copco, Sullair, Ingersoll Rand e outras marcas, e lubrificantes LUB Schulz. Atendimento em todo o Nordeste.
  hero:
    title: Peças para compressor Schulz
    headline: [Peça certa.]
    highlight: [Menos parada, na sua produção.]
    text: Peças originais para diversos modelos e marcas, prontas para envio, e lubrificantes Schulz, com equipe especializada para identificar o item certo.
    area: [Fortaleza e Recife, Atendimento em todo o Nordeste]
    banner: Técnico da Falanga ao lado de um compressor de parafuso Schulz aberto, numa sala com outros compressores
    points:
      - icon: shield
        line1: Peças originais
        line2: prontas para envio
      - icon: layers
        line1: Diversos modelos
        line2: e marcas
      - icon: droplet
        line1: Lubrificantes
        line2: Schulz
      - icon: users
        line1: Equipe
        line2: especializada
  quote:
    eyebrow: Solicite sua cotação
    title: Fale com quem entende de peças e lubrificantes para compressores.
    text: 'Solicite uma cotação online agora mesmo: nossa equipe identifica a peça ou o lubrificante certo para o seu compressor. Preencha o formulário ou fale direto conosco pelo WhatsApp.'
    trust:
      - icon: shield
        label: Peças originais
      - icon: truck
        label: Itens prontos para envio
      - icon: pin
        label: Atendimento em todo o Nordeste
    form:
      title: Como podemos ajudar?
      text: Preencha os dados e conte qual peça ou lubrificante o seu compressor precisa.
    lgpd: Seus dados serão usados apenas para responder à sua solicitação de cotação, conforme a LGPD.

blocos:
  vitrine:
    veredicto: quase
    responde: [peca-para-compressor, lubrificante, lubrificante-schulz]
    papeis: [Manutenção, Compras, Revenda]
    eyebrow: Catálogo
    title: Peças para todos os modelos de compressores
    text: Itens para compressores Schulz, Atlas Copco, Sullair, Ingersoll Rand, Wayne, Chicago Pneumatic e outras marcas, e lubrificantes Schulz para parafuso e pistão.
    area: Peças prontas para envio em todo o Nordeste
    closing:
      title: Precisa de uma peça que não está aqui?
      text: Trabalhamos com itens para diversos modelos e marcas de compressores.
      cta: Solicitar cotação
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
        photo: Filtros de ar de diversos formatos para compressor
      - id: filtros-de-oleo
        group: pecas
        title: Filtros de óleo
        description: ''
        photo: Dois filtros de óleo rosqueáveis para compressor
      - id: elementos-filtrantes
        group: pecas
        title: Elementos filtrantes
        description: ''
        photo: Elementos filtrantes com tampas metálicas
      - id: separadores-ar-oleo
        group: pecas
        title: Separadores ar/óleo
        description: ''
        photo: Separadores ar/óleo com flange para compressor de parafuso
      - id: valvulas-de-seguranca
        group: pecas
        title: Válvulas de segurança
        description: ''
        photo: Válvula de segurança em latão com argola de acionamento
      - id: valvulas-controle-pressao
        group: pecas
        title: Válvulas de controle de pressão
        description: ''
        photo: Pressostato com manômetros para controle de pressão
      - id: acoplamentos
        group: pecas
        title: Acoplamentos
        description: ''
        photo: Acoplamentos e elementos elásticos de diversos modelos
      - id: correias-de-transmissao
        group: pecas
        title: Correias de transmissão
        description: ''
        photo: Correias de transmissão em V
      - id: kits-de-junta
        group: pecas
        title: Kits de junta
        description: ''
        photo: Juntas e anéis de vedação de um kit de juntas
      - id: lub-sintetico-8000-20l
        group: lubrificantes
        title: "LUB Schulz Sintético 8000 20\u00a0L"
        description: ''
        photo: Galão de 20 L do LUB Schulz Sintético 8000
      - id: lub-sintetico-8000-4l
        group: lubrificantes
        title: "LUB Schulz Sintético 8000 4\u00a0L"
        description: ''
        photo: Galão de 4 L do LUB Schulz Sintético 8000
      - id: lub-mineral-4000-20l
        group: lubrificantes
        title: "LUB Schulz Mineral 4000 20\u00a0L"
        description: ''
        photo: Galão de 20 L do LUB Schulz Mineral 4000
      - id: lub-mineral-4000-4l
        group: lubrificantes
        title: "LUB Schulz Mineral 4000 4\u00a0L"
        description: ''
        photo: Galão de 4 L do LUB Schulz Mineral 4000
      - id: lub-mineral-1000-20l
        group: lubrificantes
        title: "LUB Schulz Mineral 1000 20\u00a0L"
        description: ''
        photo: Galão de 20 L do LUB Schulz Mineral 1000
      - id: lub-mineral-1000-4l
        group: lubrificantes
        title: "LUB Schulz Mineral 1000 4\u00a0L"
        description: ''
        photo: Galão de 4 L do LUB Schulz Mineral 1000
      - id: ms-lub-4l
        group: lubrificantes
        title: "MS LUB Schulz 4\u00a0L"
        description: ''
        photo: Galão de 4 L do MS LUB Schulz
      - id: ms-lub-1l
        group: lubrificantes
        title: "MS LUB Schulz 1\u00a0L"
        description: ''
        photo: Frasco de 1 L do MS LUB Schulz
      - id: motor-oil-schulz
        group: lubrificantes
        title: Motor Oil Schulz
        description: ''
        photo: Embalagem do Motor Oil Schulz
      - id: desengripante-sd-50
        group: lubrificantes
        title: Desengripante SD 50
        description: ''
        photo: Spray desengripante SD 50 Schulz

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
    highlight: a peça certa?
    microcopy: Retorno da equipe especializada
    cta: Identifique sua peça
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
    text: Peças e lubrificantes para compressores rotativos de parafuso e alternativos de pistão e para os componentes que trabalham com eles.
    closing:
      title: Não encontrou a sua peça?
      text: Nossa equipe identifica o item certo para o seu compressor.
      cta: Solicitar atendimento
    items:
      - id: compressores-parafuso
        label: Compressores de parafuso
        description: Filtros, separadores ar/óleo e óleos LUB Schulz para compressores rotativos de parafuso.
        photo: Compressor de parafuso industrial em sala de compressores
      - id: compressores-pistao
        label: Compressores de pistão
        description: Válvulas, kits de junta e o óleo MS LUB Schulz para compressores alternativos de pistão.
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
    text: Garanta a eficiência dos seus compressores com peças originais para diversos modelos e marcas, lubrificantes Schulz e uma equipe especializada no atendimento de todo o Nordeste.
    cta: Solicitar cotação
    area: Atendimento em todo o Nordeste
    scene: Técnico da Falanga na reposição de peças de um compressor de parafuso, com outros compressores ao fundo
    reasons:
      - icon: shield
        title: Peças originais
        description: Para diversos modelos e marcas de compressores.
      - icon: truck
        title: Prontas para envio
        description: Peças e lubrificantes prontos para envio.
      - icon: map-pin
        title: Atendimento no Nordeste
        description: Unidades em Fortaleza e Recife atendendo toda a região.
      - icon: users
        title: Equipe especializada
        description: Apoio para identificar a peça certa para o seu compressor.
      - icon: chat
        title: Cotação online
        description: Orçamento pelo formulário ou direto no WhatsApp.

  perguntas:
    veredicto: insuficiente
    falta: o comercial não enviou a lista de dúvidas reais com as respostas aprovadas

  escopo:
    veredicto: insuficiente
    falta: o material não fala em consolidar a compra de vários itens num pedido só, nem traz a foto de composição

assets:
  pendentes: [vitrine, aplicacoes]

conflitos:
  - pede: '"Entre em contato conosco" e "Faça um Orçamento Já!" como CTA'
    regra: todo CTA usa o vocabulário padrão
  - pede: formulário próprio (nome, empresa, e-mail, telefone, produto de interesse, finalidade)
    regra: formulário é sempre o shortcode do plugin de atendimento
  - pede: '"todas as peças para a sua manutenção" e "peças de manutenção" na oferta'
    regra: manutenção é negativa da campanha e não é assunto desta LP
  - pede: menu, telefones e redes sociais no topo
    regra: uma rota, uma página; o header tem logo, tagline e CTA

naoAplicado:
  - Kits de Manutenção (produto da LP antiga com termo negativo da campanha; entra se o cliente aprovar outro nome)
  - telefones (85) 98129-5507 (Fortaleza) e (81) 99312-1617 (Recife) e e-mail falanga@falangaservice.com.br (contato não entra na LP pelo padrão)
  - Instagram e Facebook da Falanga
  - campo "Finalidade - para consumo ou revenda" do formulário antigo (configurar no plugin)
  - logo da Kärcher no carrossel de marcas (não é marca de compressor)
  - foto do Motor Oil Schulz da LP antiga (é a embalagem do MS LUB 1 L)
  - '"Precisa de um simples produto ou uma grande automação?" (automação não é oferta desta LP)'
```

# Ficha de execução — Falanga Pneumática / Peças e lubrificantes para compressores

> Revisada no editor em 22/10/2026 a partir da **LP antiga do cliente**
> (`falangapneumatica.com.br/pecas-para-compressores/`), sobre a estrutura da primeira
> versão. A primeira ficha saiu do briefing organizado de 21/10/2026
> (`docs/briefing-cliente/briefing_falanga_pecas_lubrificantes.md`). Os blocos
> `identificar` e `aplicacoes` continuam em parte **inferidos** e precisam ser confirmados
> com o comercial.

## O que mudou com a LP antiga

- **Fotos reais na vitrine.** 18 dos 19 itens usam a foto da LP antiga, recortada e
  centrada em 800×600. A foto de "Filtros de Óleo / Separadores de Óleo e Ar" juntava três
  produtos e virou três recortes (filtros de óleo, elementos filtrantes, separadores). O
  fundo cinza de estúdio do Sintético 8000 4 L foi trocado por branco. Fica pendente só a
  do **Motor Oil Schulz**: a LP antiga usa ali a embalagem do MS LUB 1 L.
- **Copy da LP antiga.** "Peças para todos os modelos de compressores" (título da
  vitrine), "Não deixe seu compressor parar" e "Garanta a eficiência dos seus compressores"
  (diferenciais), "Solicite uma cotação online agora mesmo" (cotação), "peças originais
  para diversos modelos e marcas, prontas para envio" e "equipe especializada" (hero e
  diferenciais).
- **Marcas atendidas por extenso.** Schulz, Atlas Copco, Sullair, Ingersoll Rand, Wayne e
  Chicago Pneumatic, do carrossel "Peças para todos os modelos de compressores". A Kärcher
  ficou fora: não é marca de compressor.
- **Fatos dos rótulos.** A linha LUB Schulz (Sintético 8000, Mineral 4000 e Mineral 1000)
  é "óleo lubrificante para compressores rotativos de parafuso"; o MS LUB Schulz é "para
  compressores alternativos de pistão". Isso sustenta as aplicações de parafuso e pistão.
- **WhatsApp.** O número do botão flutuante da LP antiga (`5585996267979`) liga o botão
  flutuante desta LP.
- **Público.** O formulário antigo pergunta se a compra é para consumo ou para revenda: o
  público ganhou **Revenda**.

## O que foi decidido

LP de produto para os grupos ativos de peças e lubrificantes, com a palavra-chave
`peças para compressor Schulz` no H1 e no title. A composição não mudou: **vitrine**
(19 itens em duas prateleiras), **identificar**, **aplicacoes** e **diferenciais**.

"Kits de Manutenção", que está na LP antiga, continua fora: `manutenção` é negativa da
campanha. "Litros" segue como **L** pelo mesmo motivo (`litros`).

## Viabilidade por fase

| Fase       | Bloco            | Veredicto    | Responde                                  | Papéis                       | O que falta                                                                               |
| ---------- | ---------------- | ------------ | ----------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------- |
| Oferta     | `vitrine`        | quase        | peça, lubrificante, lubrificante Schulz   | Manutenção, Compras, Revenda | foto do Motor Oil Schulz; autorização das logos                                           |
| Oferta     | `linhas`         | insuficiente | —                                         | —                            | famílias com descrição, 3 features e foto recortada                                       |
| Oferta     | `especificacoes` | insuficiente | —                                         | —                            | modelos, colunas técnicas e valores                                                       |
| Apoio      | `identificar`    | completo     | peça para compressor                      | Manutenção, Compras          | os 6 dados são **inferidos**; confirmar com o comercial                                   |
| Apoio      | `processo`       | insuficiente | —                                         | —                            | etapas reais do atendimento                                                               |
| Apoio      | `situacoes`      | insuficiente | —                                         | —                            | situações de compra reativa                                                               |
| Prova      | `aplicacoes`     | completo     | peça para compressor, lubrificante Schulz | Manutenção                   | parafuso e pistão vêm dos rótulos; reservatórios e transmissão são **inferidos**; 4 fotos |
| Prova      | `segmentos`      | insuficiente | —                                         | —                            | 7 setores com equipamentos e fotos                                                        |
| Prova      | `clientes`       | insuficiente | —                                         | —                            | logos autorizadas e números com fonte                                                     |
| Autoridade | `diferenciais`   | completo     | peça para compressor, lubrificante        | Compras, Manutenção          | cenário de bancada e pessoa recortada                                                     |
| Autoridade | `perguntas`      | insuficiente | —                                         | —                            | lista real de dúvidas do comercial                                                        |
| Autoridade | `escopo`         | insuficiente | —                                         | —                            | argumento de compra consolidada e foto de composição                                      |

Famílias sem bloco que as responda: **unidade compressora** e **especificação de
lubrificante**. Dentro da família de peças, **mangueira, dreno e válvulas de admissão e
descarga** também não aparecem na LP antiga. São cliques que a página não atende;
confirmar com o cliente ou negativar na campanha.

## Núcleo

| #   | Entrada            | Valor                                                                                | Origem                                         |
| --- | ------------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------- |
| 1   | MARCA              | Falanga Pneumática                                                                   | LP antiga                                      |
| 2   | MARCA_CURTA        | Falanga                                                                              | LP antiga                                      |
| 3   | PRODUTO_PRINCIPAL  | Peças e lubrificantes para compressores                                              | LP antiga                                      |
| 4   | CONTEXTO_DE_USO    | reposição de componentes                                                             | inferido; evita "manutenção"                   |
| 5   | PUBLICO            | Manutenção, Compras, Revenda                                                         | **inferido**; revenda vem do formulário antigo |
| 6   | HERO               | peças originais prontas para envio, modelos e marcas, Nordeste                       | LP antiga                                      |
| 7   | MARCAS_ATENDIDAS   | Schulz, Atlas Copco, Sullair, Ingersoll Rand, Wayne, Chicago Pneumatic — por extenso | carrossel da LP antiga; logos sem autorização  |
| 8   | SELOS_DE_CONFIANCA | Peças originais, prontos para envio, Nordeste                                        | LP antiga                                      |
| 9   | ENDERECO           | Fortaleza/CE e Recife/PE (sem CEP)                                                   | briefing                                       |
| 10  | URL + PRIVACIDADE  | `falangapneumatica.com.br/pecas-para-compressores/`; sem política                    | URL da LP antiga; política não informada       |
| 11  | SHORTCODES         | padrão do plugin                                                                     | default                                        |
| 12  | WHATSAPP           | `5585996267979`                                                                      | botão flutuante da LP antiga                   |
| 13  | STACK + PUBLICACAO | padrão da agência; revisão na Vercel                                                 | default                                        |
| 14  | TOKENS + FONTE     | visual padrão                                                                        | default                                        |
| 15  | CAMPANHA           | `peças para compressor Schulz`                                                       | lista de palavras-chave                        |

## Pendências

| O que falta                                         | Quem resolve        | Especificação                                                                                                                         |
| --------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Banner do hero                                      | designer            | 1981×900, peças e lubrificantes entre 62% e 79% da largura, lado esquerdo escuro, sem texto                                           |
| Foto do Motor Oil Schulz                            | cliente             | PNG/JPG 800×600 (4:3), fundo branco — entra como `src/assets/vitrine/produto-18.png`                                                  |
| Fotos da vitrine em alta, com direito de uso        | cliente             | as atuais vieram da LP antiga; algumas parecem ser de anúncios de marketplace                                                         |
| 4 fotos das aplicações                              | cliente ou designer | 1200×900 (4:3): compressor de parafuso, compressor de pistão, reservatório, transmissão                                               |
| Cenário e pessoa recortada dos diferenciais         | designer            | cenário 1600×900; pessoa de corpo inteiro 1220×1000 com fundo transparente                                                            |
| Logo no formato do header                           | cliente             | o logo do site (341×82, horizontal) é cortado na placa do header, que pede 240×200: pedir versão empilhada ou aprovar header adaptado |
| Validar os 6 dados de `identificar`                 | comercial           | confirmar ou corrigir: código, marca, modelo/série, foto, medidas, lubrificante                                                       |
| Validar reservatórios e transmissão em `aplicacoes` | comercial           | inferidos da lista de peças                                                                                                           |
| Autorização das logos das marcas                    | cliente             | se autorizar, as marcas podem entrar como logo                                                                                        |
| Política de privacidade                             | cliente             | link da política                                                                                                                      |
| Kits de Manutenção                                  | cliente             | entra com outro nome (ex.: "Kits de reposição")? Hoje fica fora pela negativa                                                         |
| Mangueiras, drenos e válvulas de admissão/descarga  | cliente             | fazem parte da oferta? Se sim, entram na vitrine; se não, negativar                                                                   |
| Unidade compressora de parafuso                     | cliente             | vende? Se não, negativar os termos                                                                                                    |

## Conflitos com o padrão

| O que o material pedia                               | Regra do padrão                    | O que entrou no lugar                                     |
| ---------------------------------------------------- | ---------------------------------- | --------------------------------------------------------- |
| "Entre em contato conosco" e "Faça um Orçamento Já!" | vocabulário padrão de CTA          | "Solicite sua cotação" e "Identifique sua peça"           |
| Formulário próprio com finalidade consumo/revenda    | formulário é o shortcode do plugin | shortcode padrão; o campo de finalidade vai para o plugin |
| "Peças para a sua manutenção"                        | manutenção é negativa da campanha  | "reposição", "eficiência dos seus compressores"           |
| Menu, telefones e redes no topo                      | uma rota, uma página               | header com logo, tagline e CTA                            |

## Itens excedentes

| Bloco     | Itens que entraram           | Itens guardados                                 |
| --------- | ---------------------------- | ----------------------------------------------- |
| `vitrine` | 19 dos 20 itens da LP antiga | Kits de Manutenção — termo negativo da campanha |

## Conteúdo futuro (grupos pausados)

Grupos pausados, fora desta execução: `peças para compressor`, `para compressor`,
`schulz peças reposição`, `oleo compressor`, `oleo lubrificante compressor`,
`lubrificantes para compressores`, `Lubrificante Schulz`, `Lubrificante Sintético` e
`Lubrificante Mineral`. A vitrine já responde a quase todos; os dois últimos pedem ficha
técnica dos lubrificantes.

## Dados não usados pelo padrão

Telefones das unidades, e-mail, Instagram e Facebook; menu do site; campo de finalidade do
formulário antigo; logo da Kärcher; a foto do Motor Oil Schulz da LP antiga (é o MS LUB
1 L); o convite para automação.
