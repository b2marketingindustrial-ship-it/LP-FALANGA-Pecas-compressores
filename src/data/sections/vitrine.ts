/**
 * Dados da seção "Vitrine de produtos" (biblioteca B2, fase: oferta).
 *
 * De 6 a 24 itens com foto e nome. `description` é tudo ou nada: ou todos os
 * itens têm a frase, ou nenhum tem — o componente recusa a mistura no build.
 *
 * `groups` vazio deixa a vitrine em grade. Com grupos, cada um vira uma
 * prateleira própria, com a logo (ou o nome) no cabeçalho.
 */
import type { Photo } from '@data/types'

import produto1 from '@assets/vitrine/produto-1.png'
import produto2 from '@assets/vitrine/produto-2.png'
import produto3 from '@assets/vitrine/produto-3.png'
import produto4 from '@assets/vitrine/produto-4.png'
import produto5 from '@assets/vitrine/produto-5.png'
import produto6 from '@assets/vitrine/produto-6.png'
import produto7 from '@assets/vitrine/produto-7.png'
import produto8 from '@assets/vitrine/produto-8.png'
import produto9 from '@assets/vitrine/produto-9.png'
import produto10 from '@assets/vitrine/produto-10.png'
import produto11 from '@assets/vitrine/produto-11.png'
import produto12 from '@assets/vitrine/produto-12.png'
import produto13 from '@assets/vitrine/produto-13.png'
import produto14 from '@assets/vitrine/produto-14.png'
import produto15 from '@assets/vitrine/produto-15.png'
import produto16 from '@assets/vitrine/produto-16.png'
import produto17 from '@assets/vitrine/produto-17.png'
import produto18 from '@assets/vitrine/produto-18.png'
import produto19 from '@assets/vitrine/produto-19.png'

/** Marca, linha ou família. `logo` é opcional: sem ela, vale o nome. */
export interface ShowcaseGroup {
  id: string
  label: string
  logo: Photo | null
}

export interface ShowcaseItem {
  id: string
  /** id de um grupo de `groups`, ou '' quando a vitrine não é agrupada. */
  group: string
  title: string
  /** 1 frase, 50–90 caracteres. '' quando a vitrine é só foto e nome. */
  description: string
  photo: Photo
}

export const showcase = {
  eyebrow: 'Catálogo',
  title: 'Peças e lubrificantes para o seu compressor',
  text: 'Itens de reposição para diversos modelos e marcas e a linha de lubrificantes Schulz. Consulte a disponibilidade com o atendimento.',
  groups: [
    { id: 'pecas', label: 'Peças de reposição', logo: null },
    { id: 'lubrificantes', label: 'Lubrificantes Schulz', logo: null },
  ],
  items: [
    {
      id: 'filtros-de-ar',
      group: 'pecas',
      title: 'Filtros de ar',
      description: '',
      photo: { src: produto1, alt: 'Filtro de ar para compressor' },
    },
    {
      id: 'filtros-de-oleo',
      group: 'pecas',
      title: 'Filtros de óleo',
      description: '',
      photo: { src: produto2, alt: 'Filtro de óleo para compressor' },
    },
    {
      id: 'elementos-filtrantes',
      group: 'pecas',
      title: 'Elementos filtrantes',
      description: '',
      photo: { src: produto3, alt: 'Elemento filtrante para compressor' },
    },
    {
      id: 'separadores-ar-oleo',
      group: 'pecas',
      title: 'Separadores ar/óleo',
      description: '',
      photo: { src: produto4, alt: 'Separador ar/óleo para compressor de parafuso' },
    },
    {
      id: 'valvulas-de-seguranca',
      group: 'pecas',
      title: 'Válvulas de segurança',
      description: '',
      photo: { src: produto5, alt: 'Válvula de segurança para compressor' },
    },
    {
      id: 'valvulas-controle-pressao',
      group: 'pecas',
      title: 'Válvulas de controle de pressão',
      description: '',
      photo: { src: produto6, alt: 'Válvula de controle de pressão para compressor' },
    },
    {
      id: 'acoplamentos',
      group: 'pecas',
      title: 'Acoplamentos',
      description: '',
      photo: { src: produto7, alt: 'Acoplamento para compressor' },
    },
    {
      id: 'correias-de-transmissao',
      group: 'pecas',
      title: 'Correias de transmissão',
      description: '',
      photo: { src: produto8, alt: 'Correia de transmissão para compressor' },
    },
    {
      id: 'kits-de-junta',
      group: 'pecas',
      title: 'Kits de junta',
      description: '',
      photo: { src: produto9, alt: 'Kit de juntas para compressor' },
    },
    {
      id: 'lub-sintetico-8000-20l',
      group: 'lubrificantes',
      title: 'LUB Schulz Sintético 8000 20 L',
      description: '',
      photo: {
        src: produto10,
        alt: 'Embalagem de 20 L do lubrificante LUB Schulz Sintético 8000',
      },
    },
    {
      id: 'lub-sintetico-8000-4l',
      group: 'lubrificantes',
      title: 'LUB Schulz Sintético 8000 4 L',
      description: '',
      photo: { src: produto11, alt: 'Embalagem de 4 L do lubrificante LUB Schulz Sintético 8000' },
    },
    {
      id: 'lub-mineral-4000-20l',
      group: 'lubrificantes',
      title: 'LUB Schulz Mineral 4000 20 L',
      description: '',
      photo: { src: produto12, alt: 'Embalagem de 20 L do lubrificante LUB Schulz Mineral 4000' },
    },
    {
      id: 'lub-mineral-4000-4l',
      group: 'lubrificantes',
      title: 'LUB Schulz Mineral 4000 4 L',
      description: '',
      photo: { src: produto13, alt: 'Embalagem de 4 L do lubrificante LUB Schulz Mineral 4000' },
    },
    {
      id: 'lub-mineral-1000-20l',
      group: 'lubrificantes',
      title: 'LUB Schulz Mineral 1000 20 L',
      description: '',
      photo: { src: produto14, alt: 'Embalagem de 20 L do lubrificante LUB Schulz Mineral 1000' },
    },
    {
      id: 'lub-mineral-1000-4l',
      group: 'lubrificantes',
      title: 'LUB Schulz Mineral 1000 4 L',
      description: '',
      photo: { src: produto15, alt: 'Embalagem de 4 L do lubrificante LUB Schulz Mineral 1000' },
    },
    {
      id: 'ms-lub-4l',
      group: 'lubrificantes',
      title: 'MS LUB Schulz 4 L',
      description: '',
      photo: { src: produto16, alt: 'Embalagem de 4 L do MS LUB Schulz' },
    },
    {
      id: 'ms-lub-1l',
      group: 'lubrificantes',
      title: 'MS LUB Schulz 1 L',
      description: '',
      photo: { src: produto17, alt: 'Embalagem de 1 L do MS LUB Schulz' },
    },
    {
      id: 'motor-oil-schulz',
      group: 'lubrificantes',
      title: 'Motor Oil Schulz',
      description: '',
      photo: { src: produto18, alt: 'Embalagem do Motor Oil Schulz' },
    },
    {
      id: 'desengripante-sd-50',
      group: 'lubrificantes',
      title: 'Desengripante SD 50',
      description: '',
      photo: { src: produto19, alt: 'Embalagem do desengripante SD 50' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  groups: readonly ShowcaseGroup[]
  items: readonly ShowcaseItem[]
}
