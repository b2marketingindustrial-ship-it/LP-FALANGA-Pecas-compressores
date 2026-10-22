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
  /** Rótulo do CTA do header no desktop, do mockup do cliente (21/10/2026). */
  cta: 'Fale com um especialista',
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  /**
   * H1 da página, exibido como a linha de abertura acima da manchete (mockup do cliente,
   * 21/10/2026). É o que o check:lp confere contra a palavra-chave da campanha.
   */
  title: 'Peças para compressor Schulz',
  /** Manchete visual, uma linha por item: primeiro em branco, depois em amarelo. */
  headline: ['Peça certa.'],
  highlight: ['Menos parada', 'na sua produção.'],
  text: 'Peças originais para diversos modelos e marcas, prontas para envio, e lubrificantes Schulz, com equipe especializada para identificar o item certo.',
  /** Linha de área atendida abaixo do CTA, separada por ponto. */
  area: ['Fortaleza e Recife', 'Atendimento em todo o Nordeste'],
  banner: {
    src: heroBg,
    alt: 'Técnico da Falanga ao lado de um compressor de parafuso Schulz aberto, numa sala com outros compressores',
  },
  points: [
    { icon: 'shield', line1: 'Peças originais', line2: 'prontas para envio' },
    { icon: 'layers', line1: 'Diversos modelos', line2: 'e marcas' },
    { icon: 'droplet', line1: 'Lubrificantes', line2: 'Schulz' },
    { icon: 'users', line1: 'Equipe', line2: 'especializada' },
  ],
} as const satisfies {
  title: string
  headline: readonly string[]
  highlight: readonly string[]
  text: string
  area: readonly string[]
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: `Fale com quem entende de ${site.product.toLowerCase()}.`,
  text: 'Solicite uma cotação online agora mesmo: nossa equipe identifica a peça ou o lubrificante certo para o seu compressor. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  trust: [
    { icon: 'shield', label: 'Peças originais' },
    { icon: 'truck', label: 'Itens prontos para envio' },
    { icon: 'pin', label: 'Atendimento em todo o Nordeste' },
  ],
  /**
   * Cabeçalho do card do formulário (mockup do cliente, 21/10/2026). O `eyebrow` acima
   * vai no card, e não mais na coluna de texto, para não aparecer duas vezes lado a lado.
   */
  form: {
    title: 'Como podemos ajudar?',
    text: 'Preencha os dados e conte qual peça ou lubrificante o seu compressor precisa.',
  },
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: 'Seus dados serão usados apenas para responder à sua solicitação de cotação, conforme a LGPD.',
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  form: { title: string; text: string }
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
