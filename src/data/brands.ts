/**
 * Logos do carrossel de marcas — primitivo opcional.
 *
 * Marcas de compressores (e de lavadoras de alta pressão, no caso da Kärcher) cujas
 * peças a Falanga fornece. Logos enviadas pelo cliente em 24/10/2026, recortadas sem
 * a margem e reduzidas a no máximo 640×200. A ordem é a do carrossel.
 */
import type { ImageMetadata } from 'astro'

import atlasCopco from '@assets/brands/atlas-copco.png'
import chicagoPneumatic from '@assets/brands/chicago-pneumatic.png'
import ingersollRand from '@assets/brands/ingersoll-rand.png'
import karcher from '@assets/brands/karcher.png'
import schulz from '@assets/brands/schulz.png'
import sullair from '@assets/brands/sullair.png'
import wayne from '@assets/brands/wayne.png'

export interface Brand {
  name: string
  src: ImageMetadata
}

export const brands: readonly Brand[] = [
  { name: 'Schulz', src: schulz },
  { name: 'Atlas Copco', src: atlasCopco },
  { name: 'Sullair', src: sullair },
  { name: 'Ingersoll Rand', src: ingersollRand },
  { name: 'Chicago Pneumatic', src: chicagoPneumatic },
  { name: 'Wayne', src: wayne },
  { name: 'Kärcher', src: karcher },
]
