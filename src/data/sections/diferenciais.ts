/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e uma foto à direita, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 *
 * Variante local do mockup do cliente (21/10/2026, docs/BRIEFING.md): a foto de
 * cenário já traz o técnico, então não há pessoa recortada. O CTA tem rótulo próprio
 * (`cta`) e a área atendida aparece abaixo dele (`area`).
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada): a primeira em branco, a segunda em amarelo. */
  titleLines: ['Não deixe seu', 'compressor parar.'],
  text: 'Garanta a eficiência dos seus compressores com peças originais para diversos modelos e marcas, lubrificantes Schulz e uma equipe especializada no atendimento de todo o Nordeste.',
  cta: 'Solicitar cotação',
  area: 'Atendimento em todo o Nordeste',
  scene: {
    src: cenario,
    alt: 'Técnico da Falanga na reposição de peças de um compressor de parafuso, com outros compressores ao fundo',
  },
  reasons: [
    {
      icon: 'shield',
      title: 'Peças originais',
      description: 'Para diversos modelos e marcas de compressores.',
    },
    {
      icon: 'truck',
      title: 'Prontas para envio',
      description: 'Peças e lubrificantes prontos para envio.',
    },
    {
      icon: 'map-pin',
      title: 'Atendimento no Nordeste',
      description: 'Unidades em Fortaleza e Recife atendendo toda a região.',
    },
    {
      icon: 'users',
      title: 'Equipe especializada',
      description: 'Apoio para identificar a peça certa para o seu compressor.',
    },
    {
      icon: 'chat',
      title: 'Cotação online',
      description: 'Orçamento pelo formulário ou direto no WhatsApp.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly [string, string]
  text: string
  cta: string
  area: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
