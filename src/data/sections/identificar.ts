/**
 * Dados da seção "Painel de apoio" (biblioteca B2, fase: apoio).
 *
 * Painel navy com 6 dados que o visitante pode enviar sem ter a especificação em
 * mãos. São 6 exatos: a faixa é um grid de 2/3/6 colunas com divisórias, e
 * qualquer outro número deixa célula órfã.
 */
import type { IconName } from '@data/icons'

export interface SupportItem {
  icon: IconName
  label: string
  hint: string
}

export const supportPanel = {
  eyebrow: 'Apoio na identificação',
  title: 'Precisa identificar a peça certa?',
  text: 'Não precisa ter todos os dados em mãos. Envie o que você tiver e nossa equipe identifica a peça ou o lubrificante certo para o seu compressor.',
  microcopy: 'Retorno da equipe especializada',
  items: [
    { icon: 'barcode', label: 'Código', hint: 'da peça original' },
    { icon: 'tag', label: 'Marca', hint: 'do compressor' },
    { icon: 'hash', label: 'Modelo', hint: 'e número de série' },
    { icon: 'camera', label: 'Foto', hint: 'da peça ou plaqueta' },
    { icon: 'ruler', label: 'Medidas', hint: 'da peça a substituir' },
    { icon: 'droplet', label: 'Lubrificante', hint: 'o que usa hoje' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  microcopy: string
  items: readonly [SupportItem, SupportItem, SupportItem, SupportItem, SupportItem, SupportItem]
}
