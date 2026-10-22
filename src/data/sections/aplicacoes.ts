/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto 4:3 e cabeçalho centrado. O card inteiro é o CTA.
 *
 * Variante local do mockup do cliente (21/10/2026, docs/BRIEFING.md): a seção fecha com
 * uma faixa de CTA (`closing`).
 */
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'

export interface Application {
  id: string
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Aplicações',
  title: 'Reposição para cada parte do compressor',
  text: 'Peças e lubrificantes para compressores rotativos de parafuso e alternativos de pistão e para os componentes que trabalham com eles.',
  /** Faixa azul que fecha a seção, com o CTA `aplicacoes-atendimento`. */
  closing: {
    title: 'Não encontrou a sua peça?',
    text: 'Nossa equipe identifica o item certo para o seu compressor.',
    cta: 'Solicitar atendimento',
  },
  items: [
    {
      id: 'compressores-parafuso',
      label: 'Compressores de parafuso',
      description:
        'Filtros, separadores ar/óleo e óleos LUB Schulz para compressores rotativos de parafuso.',
      photo: { src: app1, alt: 'Compressor de parafuso industrial em sala de compressores' },
    },
    {
      id: 'compressores-pistao',
      label: 'Compressores de pistão',
      description:
        'Válvulas, kits de junta e o óleo MS LUB Schulz para compressores alternativos de pistão.',
      photo: { src: app2, alt: 'Compressor de pistão com reservatório de ar' },
    },
    {
      id: 'reservatorios',
      label: 'Reservatórios de ar',
      description: 'Válvulas de segurança e de controle de pressão para reservatórios de ar.',
      photo: {
        src: app3,
        alt: 'Reservatório de ar comprimido com válvula de segurança e manômetro',
      },
    },
    {
      id: 'transmissao',
      label: 'Transmissão',
      description:
        'Acoplamentos e correias para a transmissão entre o motor e a unidade compressora.',
      photo: { src: app4, alt: 'Correias e polias de transmissão de um compressor' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  closing: { title: string; text: string; cta: string }
  items: readonly [Application, Application, Application, Application]
}
