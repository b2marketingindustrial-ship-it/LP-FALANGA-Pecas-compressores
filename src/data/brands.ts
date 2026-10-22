/**
 * Logos do carrossel de marcas — primitivo opcional.
 *
 * Vazio de propósito: a ficha registra `marcas.usarLogos: false` (Schulz citada só
 * por extenso, sem autorização de uso de logo). Tipo anotado, e não `[] as const`,
 * para o `.map` do carrossel não virar `never` no `npm run check`.
 */
import type { ImageMetadata } from 'astro'

export interface Brand {
  name: string
  src: ImageMetadata
}

export const brands: readonly Brand[] = []
