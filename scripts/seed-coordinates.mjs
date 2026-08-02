// Sets geopoint coordinates on each location (patch by slug; only touches `coordinates`).
// Usage: node scripts/seed-coordinates.mjs

import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { createClient } from '@sanity/client'

const __dirname = dirname(fileURLToPath(import.meta.url))
const envPath = join(__dirname, '..', '.env.local')
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const eq = t.indexOf('=')
    if (eq === -1) continue
    const key = t.slice(0, eq).trim()
    let val = t.slice(eq + 1).trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1)
    if (!(key in process.env)) process.env[key] = val
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN
if (!projectId || !token) {
  console.error('ERROR: NEXT_PUBLIC_SANITY_PROJECT_ID and a write-enabled SANITY_API_TOKEN are required in .env.local')
  process.exit(1)
}

const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', token, useCdn: false })

const coords = [
  { slug: 'ikoyi', lat: 7.263614, lng: 4.126928 },
  { slug: 'ilero', lat: 8.123964, lng: 3.463614 },
  { slug: 'otu2', lat: 8.239619, lng: 3.356581 },
  { slug: 'otu1', lat: 8.156728, lng: 3.446328 },
  { slug: 'ikomu', lat: 8.172078, lng: 3.117381 },
]

async function run() {
  console.log(`Connecting to project ${projectId} / dataset ${dataset}...`)
  for (const { slug, lat, lng } of coords) {
    const doc = await client.fetch('*[_type == "location" && slug.current == $slug][0]{ _id }', { slug })
    if (!doc?._id) {
      console.warn(`SKIP ${slug}: no location document found`)
      continue
    }
    await client.patch(doc._id).set({ coordinates: { _type: 'geopoint', lat, lng } }).commit()
    console.log(`Set coordinates for ${slug}: ${lat}, ${lng}`)
  }

  const check = await client.fetch(
    '*[_type=="location"]|order(order asc){name,"slug":slug.current,"lat":coordinates.lat,"lng":coordinates.lng}'
  )
  console.log('\nFinal coordinates:')
  for (const l of check) console.log(` - ${l.name} (${l.slug}) | ${l.lat}, ${l.lng}`)
}

run().catch((err) => {
  console.error('Mutation failed:', err.message || err)
  process.exit(1)
})
