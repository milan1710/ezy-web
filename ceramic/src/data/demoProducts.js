/**
 * Illustrative demo products for the kitchen-sink ceramic catalogue preview and
 * the /ceramic-demo concept page.
 *
 * These are NOT real products, prices, specifications or client references.
 * Product names and finishes are deliberately generic and labelled illustrative.
 */

import ceramicImages from './ceramicImages'

export const demoCategories = [
  'All',
  'Wall Tiles',
  'Floor Tiles',
  'Vitrified Tiles',
  'Porcelain Tiles',
  'Slabs',
  'Sanitaryware',
]

export const demoProducts = [
  {
    id: 'wall-ivory',
    name: 'Sample Wall Tile — Ivory Line',
    category: 'Wall Tiles',
    image: ceramicImages.tileSamples,
    finish: 'Illustrative finish: soft matte',
    detail: 'Category demonstration for wall tile presentation.',
  },
  {
    id: 'wall-decor',
    name: 'Sample Wall Tile — Decor Pattern',
    category: 'Wall Tiles',
    image: ceramicImages.decorativeTiles,
    finish: 'Illustrative finish: patterned glaze',
    detail: 'Decorative wall tile concept layout.',
  },
  {
    id: 'floor-veined',
    name: 'Sample Floor Tile — Veined Stone',
    category: 'Floor Tiles',
    image: ceramicImages.marbleTexture,
    finish: 'Illustrative finish: polished stone-look',
    detail: 'Floor tile concept with a large-format visual.',
  },
  {
    id: 'floor-showroom',
    name: 'Sample Floor Tile — Showroom Display',
    category: 'Floor Tiles',
    image: ceramicImages.showroom,
    finish: 'Illustrative finish: display context',
    detail: 'Demonstrates how a floor tile range can be shown in context.',
  },
  {
    id: 'vitrified-dark',
    name: 'Sample Vitrified Tile — Deep Charcoal',
    category: 'Vitrified Tiles',
    image: ceramicImages.bathroomMarble,
    finish: 'Illustrative finish: deep charcoal',
    detail: 'Vitrified tile concept for bathroom and living spaces.',
  },
  {
    id: 'vitrified-neutral',
    name: 'Sample Vitrified Tile — Neutral Stone',
    category: 'Vitrified Tiles',
    image: ceramicImages.catalogueFlatlay,
    finish: 'Illustrative finish: neutral stone',
    detail: 'Concept for comparing neutral vitrified finishes.',
  },
  {
    id: 'porcelain-slab',
    name: 'Sample Porcelain Tile — Backlit Slab',
    category: 'Porcelain Tiles',
    image: ceramicImages.backlitSlabs,
    finish: 'Illustrative finish: large-format slab',
    detail: 'Porcelain slab presentation concept.',
  },
  {
    id: 'porcelain-stair',
    name: 'Sample Porcelain Tile — Stair Detail',
    category: 'Porcelain Tiles',
    image: ceramicImages.marbleStaircase,
    finish: 'Illustrative finish: light marble',
    detail: 'Concept for showing porcelain in architectural details.',
  },
  {
    id: 'slab-interior',
    name: 'Sample Slab — Large Format Interior',
    category: 'Slabs',
    image: ceramicImages.largeFormatSlab,
    finish: 'Illustrative finish: large-format marble-look',
    detail: 'Slab application concept for a premium interior.',
  },
  {
    id: 'slab-factory',
    name: 'Sample Slab — Production Display',
    category: 'Slabs',
    image: ceramicImages.slabFactory,
    finish: 'Illustrative finish: production context',
    detail: 'Shows how slab storage and capability can be presented.',
  },
  {
    id: 'sanitary-vanity',
    name: 'Sample Sanitaryware — Vanity Context',
    category: 'Sanitaryware',
    image: ceramicImages.modernBathroom,
    finish: 'Illustrative context: sanitaryware and tiles',
    detail: 'Concept for combining tiles and sanitaryware presentation.',
  },
  {
    id: 'sanitary-bath',
    name: 'Sample Sanitaryware — Dark Bathroom',
    category: 'Sanitaryware',
    image: ceramicImages.bathroomMarble,
    finish: 'Illustrative context: dark marble bathroom',
    detail: 'Concept for presenting a premium sanitaryware range.',
  },
]

export default demoProducts
