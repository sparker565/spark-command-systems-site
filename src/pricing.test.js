import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

import {
  PRICING_VERSION,
  monthlySupportCards,
  operatingSignals,
  pricingTerms,
  websitePricingFaqs,
  websitePricingPackages,
} from './pricing.js'

test('publishes the approved service ladder and version', () => {
  assert.equal(PRICING_VERSION, '2026-08-20-v2')
  assert.deepEqual(websitePricingPackages.map(({ id }) => id), [
    'website_essentials',
    'spark_website_partnership',
    'custom_systems_applications',
  ])
})

test('represents every approved customer-facing price and term', () => {
  const serialized = JSON.stringify({
    pricingTerms,
    websitePricingPackages,
    websitePricingFaqs,
    monthlySupportCards,
    operatingSignals,
  })

  assert.match(serialized, /\$895 one-time/)
  assert.match(serialized, /\$20\/month hosting/)
  assert.match(serialized, /\$3,594 total in year one/)
  assert.match(serialized, /\$1,800 at launch/)
  assert.match(serialized, /\$299\/month during months 7–12/)
  assert.match(serialized, /12-month initial agreement/)
  assert.match(serialized, /Starting at \$4,995/)
  assert.match(serialized, /1-Hour Free Consultation/)
  assert.match(serialized, /Website Care/)
  assert.match(serialized, /\$79\/month/)
  assert.match(serialized, /Partnership Care/)
  assert.match(serialized, /Organized Handoff/)
})

test('keeps scope and billing protections explicit', () => {
  const essentials = websitePricingPackages[0]
  const partnership = websitePricingPackages[1]
  const custom = websitePricingPackages[2]

  assert.equal(essentials.included.includes('Up to three template-based pages'), true)
  assert.equal(essentials.included.includes('Client-provided, ready-to-use content'), true)
  assert.equal(essentials.included.includes('One revision round'), true)
  assert.match(essentials.disclosure, /not a fully custom website/)
  assert.match(partnership.recurring, /\$1,800 covers launch and months 1–6; then \$299\/month during months 7–12/)
  assert.match(partnership.disclosure, /not an added setup fee/)
  assert.match(custom.price, /^Starting at \$4,995$/)
  assert.match(custom.disclosure, /Exact cost depends on discovery and scope/)
})

test('removes retired active offers from the application source', () => {
  const appSource = readFileSync(new URL('./App.jsx', import.meta.url), 'utf8')
  for (const retired of ['$425', '$495', '$3,600', '$4,595', 'Starter Website', 'Ownership Website', 'six-month initial partnership']) {
    assert.equal(appSource.includes(retired), false, `App.jsx still contains retired customer-facing term: ${retired}`)
  }
})
