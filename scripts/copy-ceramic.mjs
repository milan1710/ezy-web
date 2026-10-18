import { cpSync, existsSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

/**
 * Copies the standalone ceramic micro-site build into the main site's dist folder
 * so a single deployment of `dist/` serves it at /ceramic/.
 *
 * Run after both builds:
 *   npm run build        (main Ezy Digital site)
 *   npm run build:ceramic (standalone ceramic app)
 *   node scripts/copy-ceramic.mjs
 * or simply: npm run build:all
 */

const root = resolve(process.cwd())
const source = resolve(root, 'ceramic', 'dist')
const target = resolve(root, 'dist', 'ceramic')

if (!existsSync(source)) {
  console.error('ceramic/dist not found. Run "npm --prefix ceramic run build" first.')
  process.exit(1)
}

if (!existsSync(resolve(root, 'dist'))) {
  console.error('dist not found. Run "npm run build" first.')
  process.exit(1)
}

rmSync(target, { recursive: true, force: true })
cpSync(source, target, { recursive: true })
console.log(`Ceramic site copied to ${target}`)
console.log('Deploy the root dist/ directory; the ceramic site will be available at /ceramic/.')
