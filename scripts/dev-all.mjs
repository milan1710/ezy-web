/**
 * Starts the main Ezy Digital dev server and the standalone ceramic dev server.
 *
 * Main site:    http://localhost:5173/
 * Ceramic site: http://localhost:5173/ceramic/  (proxied to 5174)
 * Direct:       http://localhost:5174/ceramic/
 */

import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const rootVite = resolve(root, 'node_modules', 'vite', 'bin', 'vite.js')
const ceramicDir = resolve(root, 'ceramic')
const ceramicVite = resolve(ceramicDir, 'node_modules', 'vite', 'bin', 'vite.js')

if (!existsSync(rootVite)) {
  console.error('Vite not found. Run "npm install" in the project root first.')
  process.exit(1)
}

if (!existsSync(ceramicVite)) {
  console.error('Ceramic dependencies not found. Run "cd ceramic && npm install" first.')
  process.exit(1)
}

const children = []
let shuttingDown = false

function start(name, cwd, viteBin) {
  const child = spawn(process.execPath, [viteBin], {
    cwd,
    stdio: 'inherit',
    env: process.env,
  })
  child.on('exit', (code) => {
    if (!shuttingDown) {
      console.log(`\n[${name}] stopped (exit ${code ?? 0}). Stopping the other dev server.`)
      shutdown()
    }
  })
  children.push(child)
  return child
}

function shutdown() {
  if (shuttingDown) return
  shuttingDown = true
  children.forEach((child) => {
    if (!child.killed) child.kill()
  })
  setTimeout(() => process.exit(0), 250)
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

console.log('Starting Ezy Digital and ceramic dev servers...')
start('main', root, rootVite)
start('ceramic', ceramicDir, ceramicVite)
