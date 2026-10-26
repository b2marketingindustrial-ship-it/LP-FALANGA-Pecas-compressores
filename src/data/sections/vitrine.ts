/**
 * Dados da seção "Vitrine de produtos" (biblioteca B2, fase: oferta).
 *
 * De 6 a 24 itens com foto e nome. `description` é tudo ou nada: ou todos os
 * itens têm a frase, ou nenhum tem — o componente recusa a mistura no build.
 *
 * `groups` vazio deixa a vitrine em grade. Com grupos, cada um vira uma
 * prateleira própria, com a logo (ou o nome) no cabeçalho.
 *
 * Variante local do mockup do cliente (21/10/2026, docs/BRIEFING.md): cabeçalho com o
 * traço amarelo (a área atendida saiu em 26/10/2026). A faixa de CTA que fechava a seção saiu em
 * 26/10/2026: a mensagem foi para o painel de identificação (`identificar.ts`).
 *
 * Fotos da LP antiga da Falanga (falangapneumatica.com.br/pecas-para-compressores/),
 * recortadas e centradas em 800×600. Itens e ordem conforme a lista do cliente (26/10/2026):
 * 8 peças, com dois cards de nome duplo, e 10 lubrificantes (voltaram o MS LUB e o Motor Oil).
 * As 8 fotos das peças foram enviadas pelo cliente na mesma data, recortadas e centradas
 * em 800×600. A dos kits de manutenção veio com 249px de largura e perde nitidez.
 */
import type { Photo } from '@data/types'

import produto1 from '@assets/vitrine/produto-1.png'
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
import produto20 from '@assets/vitrine/produto-20.png'

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
  eyebrow: 'Catálogo multimarcas',
  title: 'Do filtro ao lubrificante, em um só fornecedor',
  text: 'Reposição para Schulz, Atlas Copco, Sullair, Ingersoll Rand, Chicago Pneumatic, Wayne e outras marcas, mais os lubrificantes Schulz.',
  /** Rodapé do card de logos: `brandsNoteLead` em destaque, `brandsNote` em seguida. */
  brandsNoteLead: 'Não viu a sua marca?',
  brandsNote: 'Atendemos outras também: fale com a equipe.',
  groups: [
    { id: 'pecas', label: 'Peças de reposição', logo: null },
    { id: 'lubrificantes', label: 'Lubrificantes Schulz', logo: null },
  ],
  items: [
    {
      id: 'acoplamentos',
      group: 'pecas',
      title: 'Acoplamentos',
      description: '',
      photo: { src: produto7, alt: 'Acoplamentos e elementos elásticos de diversos modelos' },
    },
    {
      id: 'filtros-de-oleo-separadores',
      group: 'pecas',
      title: 'Filtros de óleo e separadores ar/óleo',
      description: '',
      photo: {
        src: produto4,
        alt: 'Filtros de óleo rosqueáveis e separadores ar/óleo de diversos formatos',
      },
    },
    {
      id: 'elementos-filtrantes-valvulas-de-seguranca',
      group: 'pecas',
      title: 'Elementos filtrantes e válvulas de segurança',
      description: '',
      photo: { src: produto5, alt: 'Válvula de segurança em latão com argola de acionamento' },
    },
    {
      id: 'valvulas-controle-pressao',
      group: 'pecas',
      title: 'Válvulas de controle de pressão',
      description: '',
      photo: { src: produto6, alt: 'Pressostato com manômetros para controle de pressão' },
    },
    {
      id: 'correias-de-transmissao',
      group: 'pecas',
      title: 'Correias de transmissão',
      description: '',
      photo: { src: produto8, alt: 'Correias de transmissão em V' },
    },
    {
      id: 'kits-de-junta',
      group: 'pecas',
      title: 'Kits de junta',
      description: '',
      photo: { src: produto9, alt: 'Juntas e anéis de vedação de um kit de juntas' },
    },
    {
      id: 'filtros-de-ar',
      group: 'pecas',
      title: 'Filtros de ar',
      description: '',
      photo: { src: produto1, alt: 'Elementos de filtro de ar de diversos formatos e tamanhos' },
    },
    {
      id: 'kits-de-manutencao',
      group: 'pecas',
      title: 'Kits de manutenção',
      description: '',
      photo: {
        src: produto20,
        alt: 'Kit com filtro de ar, filtros de óleo, elemento filtrante e galão de óleo',
      },
    },
    {
      id: 'lub-sintetico-8000-20l',
      group: 'lubrificantes',
      title: 'LUB Schulz Sintético 8000 20\u00a0L',
      description: '',
      photo: { src: produto10, alt: 'Galão de 20 L do LUB Schulz Sintético 8000' },
    },
    {
      id: 'lub-sintetico-8000-4l',
      group: 'lubrificantes',
      title: 'LUB Schulz Sintético 8000 4\u00a0L',
      description: '',
      photo: { src: produto11, alt: 'Galão de 4 L do LUB Schulz Sintético 8000' },
    },
    {
      id: 'lub-mineral-4000-20l',
      group: 'lubrificantes',
      title: 'LUB Schulz Mineral 4000 20\u00a0L',
      description: '',
      photo: { src: produto12, alt: 'Galão de 20 L do LUB Schulz Mineral 4000' },
    },
    {
      id: 'lub-mineral-4000-4l',
      group: 'lubrificantes',
      title: 'LUB Schulz Mineral 4000 4\u00a0L',
      description: '',
      photo: { src: produto13, alt: 'Galão de 4 L do LUB Schulz Mineral 4000' },
    },
    {
      id: 'motor-oil-schulz',
      group: 'lubrificantes',
      title: 'Motor Oil Schulz',
      description: '',
      photo: {
        src: produto18,
        alt: 'Frasco de 1 L de óleo Schulz e óleo sendo despejado no cabeçote de um compressor',
      },
    },
    {
      id: 'lub-mineral-1000-4l',
      group: 'lubrificantes',
      title: 'LUB Schulz Mineral 1000 4\u00a0L',
      description: '',
      photo: { src: produto15, alt: 'Galão de 4 L do LUB Schulz Mineral 1000' },
    },
    {
      id: 'lub-mineral-1000-20l',
      group: 'lubrificantes',
      title: 'LUB Schulz Mineral 1000 20\u00a0L',
      description: '',
      photo: { src: produto14, alt: 'Galão de 20 L do LUB Schulz Mineral 1000' },
    },
    {
      id: 'ms-lub-schulz-4l',
      group: 'lubrificantes',
      title: 'MS LUB Schulz 4\u00a0L',
      description: '',
      photo: { src: produto16, alt: 'Galão de 4 L do MS LUB Schulz' },
    },
    {
      id: 'desengripante-sd-50',
      group: 'lubrificantes',
      title: 'Desengripante SD 50',
      description: '',
      photo: { src: produto19, alt: 'Spray desengripante SD 50 Schulz' },
    },
    {
      id: 'ms-lub-schulz-1l',
      group: 'lubrificantes',
      title: 'MS LUB Schulz 1\u00a0L',
      description: '',
      photo: { src: produto17, alt: 'Frasco de 1 L do MS LUB Schulz' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  brandsNoteLead: string
  brandsNote: string
  groups: readonly ShowcaseGroup[]
  items: readonly ShowcaseItem[]
}
