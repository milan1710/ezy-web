/**
 * Central image configuration.
 *
 * Every image is stored locally under /ceramic/images so the site does not
 * depend on third-party hotlinking. Sources are Pexels photos used under the
 * Pexels license (free to use). Images are illustrative — they do not depict
 * Ezy Digital clients, projects or Morbi factories.
 */

const IMAGE_BASE = `${import.meta.env.BASE_URL}images`
const img = (file) => `${IMAGE_BASE}/${file}`

export const ceramicImages = {
  heroInterior: {
    src: img('hero-marble-interior.jpg'),
    alt: 'Modern entrance with large-format marble-look floor and wall tiles',
    section: 'Homepage hero',
    width: 1600,
    height: 2424,
  },
  catalogueFlatlay: {
    src: img('catalogue-flatlay.jpg'),
    alt: 'Flat lay of neutral ceramic and marble tile samples',
    section: 'Hero catalogue card and product catalogue preview',
    width: 1000,
    height: 667,
  },
  tileSamples: {
    src: img('tile-samples.jpg'),
    alt: 'Glazed ceramic wall tile samples on a showroom rack',
    section: 'Product catalogue and demo products',
    width: 1000,
    height: 1777,
  },
  showroom: {
    src: img('showroom.jpg'),
    alt: 'Tile and flooring showroom displaying large tile samples',
    section: 'Challenges section and ceramic demo',
    width: 1000,
    height: 1333,
  },
  slabFactory: {
    src: img('slab-factory.jpg'),
    alt: 'Large stone and ceramic slabs stored in a production facility',
    section: 'Why Ezy Digital and manufacturing capabilities',
    width: 1000,
    height: 667,
  },
  tileFactory: {
    src: img('tile-factory.jpg'),
    alt: 'Worker inspecting stacked tiles in a tile manufacturing workshop',
    section: 'Process section and ceramic demo company profile',
    width: 1000,
    height: 687,
  },
  containerPort: {
    src: img('container-port.jpg'),
    alt: 'Stacked shipping containers at a port prepared for export',
    section: 'Domestic vs export section and export page',
    width: 1000,
    height: 563,
  },
  containerYard: {
    src: img('container-yard.jpg'),
    alt: 'Aerial view of colourful stacked cargo containers',
    section: 'Export growth page',
    width: 1000,
    height: 667,
  },
  exportPortAerial: {
    src: img('export-port-aerial.jpg'),
    alt: 'Aerial view of shipping containers arranged in a port terminal',
    section: 'Export page secondary visual',
    width: 1000,
    height: 1000,
  },
  businessMeeting: {
    src: img('business-meeting.jpg'),
    alt: 'Business team reviewing product and campaign documents at a table',
    section: 'Domestic growth and consultation sections',
    width: 1000,
    height: 667,
  },
  dealSigning: {
    src: img('deal-signing.jpg'),
    alt: 'Business professionals signing documents during a meeting',
    section: 'Dealer and distributor page',
    width: 1000,
    height: 667,
  },
  tileSelection: {
    src: img('tile-selection.jpg'),
    alt: 'Two people comparing a tile sample sheet in a kitchen showroom',
    section: 'Dealer inquiry section',
    width: 1000,
    height: 667,
  },
  marbleHands: {
    src: img('marble-hands.jpg'),
    alt: 'Businessperson holding two contrasting marble and tile samples',
    section: 'Why Ezy Digital section',
    width: 1000,
    height: 667,
  },
  bathroomMarble: {
    src: img('bathroom-marble.jpg'),
    alt: 'Luxury bathroom with dark marble-look wall and floor tiles',
    section: 'Sanitaryware demo products',
    width: 1000,
    height: 1167,
  },
  modernBathroom: {
    src: img('modern-bathroom.jpg'),
    alt: 'Modern bathroom with marble tiling and a vanity',
    section: 'Sanitaryware context',
    width: 1000,
    height: 1500,
  },
  decorativeTiles: {
    src: img('decorative-tiles.jpg'),
    alt: 'Patterned decorative ceramic tiles in warm tones',
    section: 'Product catalogue concept',
    width: 1000,
    height: 1500,
  },
  backlitSlabs: {
    src: img('backlit-slabs.jpg'),
    alt: 'Backlit large-format stone-look slab display in a showroom',
    section: 'Slab catalogue and porcelain products',
    width: 1000,
    height: 1333,
  },
  largeFormatSlab: {
    src: img('large-format-slab.jpg'),
    alt: 'Large-format marble-look slab used across a modern interior',
    section: 'Slab products',
    width: 1000,
    height: 1500,
  },
  marbleTexture: {
    src: img('marble-texture.jpg'),
    alt: 'Close-up of white marble texture with fine grey veining',
    section: 'Floor tile products',
    width: 1000,
    height: 1500,
  },
  marbleStaircase: {
    src: img('marble-staircase.jpg'),
    alt: 'Spiral staircase finished with light marble-look tiles',
    section: 'Catalogue concept',
    width: 1000,
    height: 667,
  },
  warehouseBoxes: {
    src: img('warehouse-boxes.jpg'),
    alt: 'Stacks of boxed tiles packed for dispatch in a warehouse',
    section: 'Packaging and domestic supply section',
    width: 1000,
    height: 750,
  },
}

/** Photo attribution kept central so assets can be verified or replaced. */
export const imageCredits = [
  { file: 'hero-marble-interior.jpg', source: 'Pexels', photoId: '33685861' },
  { file: 'catalogue-flatlay.jpg', source: 'Pexels', photoId: '4249687' },
  { file: 'tile-samples.jpg', source: 'Pexels', photoId: '40080972' },
  { file: 'showroom.jpg', source: 'Pexels', photoId: '12340558' },
  { file: 'slab-factory.jpg', source: 'Pexels', photoId: '30112372' },
  { file: 'tile-factory.jpg', source: 'Pexels', photoId: '40210506' },
  { file: 'container-port.jpg', source: 'Pexels', photoId: '20034017' },
  { file: 'container-yard.jpg', source: 'Pexels', photoId: '22663779' },
  { file: 'export-port-aerial.jpg', source: 'Pexels', photoId: '15876599' },
  { file: 'business-meeting.jpg', source: 'Pexels', photoId: '7693692' },
  { file: 'deal-signing.jpg', source: 'Pexels', photoId: '7433919' },
  { file: 'tile-selection.jpg', source: 'Pexels', photoId: '8293677' },
  { file: 'marble-hands.jpg', source: 'Pexels', photoId: '6568682' },
  { file: 'bathroom-marble.jpg', source: 'Pexels', photoId: '33599113' },
  { file: 'modern-bathroom.jpg', source: 'Pexels', photoId: '8910757' },
  { file: 'decorative-tiles.jpg', source: 'Pexels', photoId: '32021732' },
  { file: 'backlit-slabs.jpg', source: 'Pexels', photoId: '37264178' },
  { file: 'large-format-slab.jpg', source: 'Pexels', photoId: '33685863' },
  { file: 'marble-texture.jpg', source: 'Pexels', photoId: '6634147' },
  { file: 'marble-staircase.jpg', source: 'Pexels', photoId: '40211701' },
  { file: 'warehouse-boxes.jpg', source: 'Pexels', photoId: '10834810' },
]

export default ceramicImages
