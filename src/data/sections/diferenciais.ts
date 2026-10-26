/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e uma foto à direita, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 *
 * Variante local do mockup do cliente (21/10/2026, docs/BRIEFING.md): a foto de
 * cenário já traz o técnico, então não há pessoa recortada. O CTA tem rótulo próprio
 * (`cta`). A linha de área atendida abaixo do CTA saiu em 26/10/2026: repetia o card
 * de Fortaleza e Recife. Texto e cards foram reescritos para não repetirem um ao outro.
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
  text: 'Compressor parado é produção parada. A Falanga encurta esse tempo com a peça certa, pronta para envio, e o atendimento de quem conhece o equipamento.',
  cta: 'Solicitar cotação',
  scene: {
    src: cenario,
    alt: 'Técnico da Falanga na reposição de peças de um compressor de parafuso, com outros compressores ao fundo',
  },
  reasons: [
    {
      icon: 'layers',
      title: 'Multimarcas',
      description: 'Itens para diversos modelos e marcas de compressor.',
    },
    {
      icon: 'truck',
      title: 'Pronta entrega',
      description: 'Menos tempo de máquina parada à espera da peça.',
    },
    {
      icon: 'map-pin',
      title: 'Fortaleza e Recife',
      description: 'Duas unidades para atender todo o Nordeste.',
    },
    {
      icon: 'users',
      title: 'Equipe especializada',
      description: 'Identifica a peça pelo código, pelo modelo ou por foto.',
    },
    {
      icon: 'chat',
      title: 'Cotação rápida',
      description: 'Pelo formulário ou direto no WhatsApp.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly [string, string]
  text: string
  cta: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
