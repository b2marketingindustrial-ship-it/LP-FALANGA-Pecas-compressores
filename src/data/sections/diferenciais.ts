/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e a pessoa recortada, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'
import pessoa from '@assets/diferenciais/pessoa.png'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Não deixe seu', 'compressor parar.'],
  text: 'Peças originais para diversos modelos e marcas, a linha de lubrificantes Schulz e atendimento com especialista para manter o seu ar comprimido em operação.',
  scene: {
    src: cenario,
    alt: 'Bancada com filtros, separadores e lubrificantes para compressor',
  },
  person: {
    src: pessoa,
    alt: `Especialista da ${site.brandShort} de braços cruzados`,
  },
  reasons: [
    {
      icon: 'shield',
      title: 'Peças originais',
      description: 'Opções para diversos modelos e marcas de compressor.',
    },
    {
      icon: 'truck',
      title: 'Prontas para envio',
      description: 'Peças e lubrificantes prontos para envio.',
    },
    {
      icon: 'pin',
      title: 'Atendimento no Nordeste',
      description: 'Cobertura em toda a região, a partir de Fortaleza e Recife.',
    },
    {
      icon: 'search',
      title: 'Atendimento personalizado',
      description: 'Apoio para identificar o produto certo para o seu compressor.',
    },
    {
      icon: 'chat',
      title: 'Especialista disponível',
      description: 'Orçamento e dúvidas direto com um especialista.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  person: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
