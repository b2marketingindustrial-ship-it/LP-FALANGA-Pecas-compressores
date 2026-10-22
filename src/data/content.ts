/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`.
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicite sua cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique sua peça',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: site.product,
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Peças e lubrificantes',
  title: 'Peças para compressor Schulz e lubrificantes',
  text: 'Filtros, separadores ar/óleo, válvulas, correias e a linha LUB Schulz para a reposição do seu compressor, com atendimento em todo o Nordeste.',
  banner: {
    src: heroBg,
    alt: 'Filtros, separadores e lubrificantes para compressor sobre fundo técnico',
  },
  points: [
    { icon: 'gear', line1: 'Peças industriais', line2: 'para compressores' },
    { icon: 'layers', line1: 'Diversos modelos', line2: 'e marcas' },
    { icon: 'pin', line1: 'Atendimento em', line2: 'todo o Nordeste' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: `Fale com quem entende de ${site.product.toLowerCase()}.`,
  text: 'Nossa equipe identifica a peça ou o lubrificante certo para o seu compressor e prepara o orçamento. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  trust: [
    { icon: 'shield', label: 'Peças originais' },
    { icon: 'truck', label: 'Itens prontos para envio' },
    { icon: 'pin', label: 'Atendimento em todo o Nordeste' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: 'Seus dados serão usados apenas para responder à sua solicitação de cotação, conforme a LGPD.',
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
