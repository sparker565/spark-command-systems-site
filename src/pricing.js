export const PRICING_VERSION = '2026-08-20-v2'

export const pricingTerms = Object.freeze({
  websiteEssentials: Object.freeze({
    name: 'Website Essentials',
    oneTime: '$895 one-time',
    hosting: '$20/month hosting',
  }),
  partnership: Object.freeze({
    name: 'Spark Website Partnership',
    firstYear: '$3,594 total in year one',
    initialPayment: '$1,800 at launch',
    laterPayments: '$299/month during months 7–12',
    agreement: '12-month initial agreement',
  }),
  customSystems: Object.freeze({
    name: 'Custom Systems & Applications',
    startingPrice: 'Starting at $4,995',
  }),
  consultation: Object.freeze({
    name: '1-Hour Free Consultation',
    duration: '1 hour',
  }),
  websiteCare: Object.freeze({
    name: 'Website Care',
    monthly: '$79/month',
  }),
  partnershipCare: Object.freeze({
    name: 'Partnership Care',
    monthly: '$299/month',
  }),
})

export const websitePricingMetaDescription =
  'Compare Website Essentials at $895 one-time plus $20/month hosting, the $3,594 first-year Spark Website Partnership, and Custom Systems & Applications starting at $4,995.'

export const operatingSignals = Object.freeze([
  ['$3,594', 'Partnership year one'],
  ['12 months', 'Initial agreement'],
  ['$299/mo', 'Months 7–12'],
])

export const partnershipIncludes = Object.freeze([
  'Custom professional website up to five pages',
  'Hosting, upkeep, troubleshooting, and technical support',
  'One initial business automation',
  'Technology consulting and continued improvement guidance',
])

export const partnershipPanel = Object.freeze({
  name: pricingTerms.partnership.name,
  headline: 'Your website, hosting, support, consulting, and technology improvements managed through one ongoing partnership.',
  price: pricingTerms.partnership.firstYear,
  priceNote: pricingTerms.partnership.agreement,
  description:
    'A higher-touch 12-month relationship for businesses that want Spark to build a custom professional website, host and support it, add one initial business automation, and guide practical technology improvements as the business grows.',
  paymentTitle: '$1,800 covers launch and months 1–6',
  paymentDetail:
    'The $1,800 launch payment includes the website build and the first six months of the Partnership. Payments of $299/month begin in month 7 and continue through month 12, for a $3,594 first-year total.',
  disclosure:
    'Larger custom systems, premium integrations, advertising, domain registration fees, and third-party services are separate unless included in a written proposal.',
})

export const websitePricingPackages = Object.freeze([
  Object.freeze({
    id: 'website_essentials',
    name: pricingTerms.websiteEssentials.name,
    price: '$895',
    priceNote: 'one-time',
    recurring: '$20/month lightweight managed hosting',
    badge: 'Affordable start',
    description: 'A professional template-based website for a smaller business that needs a focused online presence.',
    bestFit: 'Smaller businesses that have ready-to-use content and do not need a fully custom website engagement.',
    supportModel: '$895 one-time plus $20/month for basic Spark-managed hosting.',
    included: [
      'Up to three template-based pages',
      'Client-provided, ready-to-use content',
      'One revision round',
      'Mobile-responsive presentation',
      'Basic Spark-managed hosting',
    ],
    disclosure:
      'Website Essentials is not a fully custom website. Additional pages, larger redesigns, integrations, custom functionality, substantial ongoing work, and support beyond the defined hosting service require additional scope and pricing.',
    cta: 'Choose Website Essentials',
    buyingPathNote: 'A defined template-based starting point, not a custom application or ongoing technology partnership.',
  }),
  Object.freeze({
    id: 'spark_website_partnership',
    name: pricingTerms.partnership.name,
    price: '$3,594',
    priceNote: 'total in year one',
    recurring: '$1,800 covers launch and months 1–6; then $299/month during months 7–12',
    badge: 'Recommended',
    description: partnershipPanel.headline,
    bestFit: 'Businesses that want Spark as a higher-touch website and technology partner.',
    supportModel: '$1,800 at launch, then $299/month during months 7–12 under a 12-month initial agreement.',
    featured: true,
    included: [
      'Up to five website pages',
      'Custom professional website',
      'Mobile-responsive design',
      'Hosting and ongoing upkeep',
      'Basic SEO support',
      'Troubleshooting and technical support',
      'Technology consulting',
      'One initial business automation',
      'Continued improvements and technology guidance',
      '12-month initial agreement',
    ],
    disclosure:
      'The $1,800 launch payment includes the build and the first six Partnership months; it is not an added setup fee before immediate monthly billing. Premium integrations, advertising, domain registration fees, large custom systems, and work outside the approved scope are priced separately.',
    cta: 'Apply for Partnership',
    buyingPathNote: 'After month 12, choose Website Care, Partnership Care, or an organized handoff where applicable. There is no surprise automatic second-year commitment.',
  }),
  Object.freeze({
    id: 'custom_systems_applications',
    name: pricingTerms.customSystems.name,
    price: pricingTerms.customSystems.startingPrice,
    priceNote: 'custom proposal',
    recurring: 'Hosting, APIs, support, third-party usage, and special integrations priced separately where applicable',
    badge: 'Custom software',
    description: 'Custom software scoped for businesses that need more than a standard website.',
    bestFit: 'Businesses that need applications, portals, dashboards, automations, integrations, or internal business tools.',
    supportModel: 'Consultation and discovery followed by a written scope and proposal; no firm quote is generated from intake alone.',
    included: [
      'Custom web applications',
      'Advanced portals or dashboards',
      'Business automations and integrations',
      'Internal business tools',
      'Database-backed systems where appropriate',
      'Custom scope, timeline, and proposal',
    ],
    disclosure:
      'Custom Systems & Applications start at $4,995. Exact cost depends on discovery and scope. APIs, third-party usage, hosting, special integrations, and substantial scope changes may be priced separately.',
    cta: 'Request Consultation',
    buyingPathNote: 'Exact cost requires consultation, discovery, and a written proposal. The published amount is a starting price, not a firm quote.',
  }),
])

export const websitePricingHighlights = Object.freeze([
  ['Website Essentials', '$895 + $20/mo hosting'],
  ['Website Partnership', '$3,594 first year'],
  ['Custom Systems', 'Starting at $4,995'],
])

export const monthlySupportCards = Object.freeze([
  [
    'Website Essentials Hosting — $20/month',
    'Lightweight managed hosting for the approved Website Essentials site. It does not include unlimited edits, consulting, redesigns, or advanced support.',
  ],
  [
    'Website Care — $79/month',
    'An after-year-one option that includes hosting, monitoring, updates, and limited minor edits without promising unlimited work.',
  ],
  [
    'Partnership Care — $299/month',
    'An after-year-one option for continued higher-touch support, priority handling, and technology partnership or consultation.',
  ],
  [
    'Organized Handoff',
    'After the initial 12-month Partnership agreement, customers may end ongoing service and receive an organized handoff where applicable.',
  ],
])

export const packageFitCards = Object.freeze([
  ['Focused website need', 'Website Essentials offers up to three template-based pages when the client has ready-to-use content.'],
  ['Higher-touch partnership', 'Spark Website Partnership combines a custom website with hosting, support, consultation, and continued technology guidance.'],
  ['Custom software need', 'Custom Systems & Applications cover portals, dashboards, automations, integrations, and advanced business tools.'],
])

export const websitePricingFaqs = Object.freeze([
  [
    'What does Website Essentials cost?',
    'Website Essentials is $895 one-time plus $20/month hosting. It includes up to three template-based pages using client-provided, ready-to-use content and one revision round.',
  ],
  [
    'Is Website Essentials a fully custom website?',
    'No. It is a focused template-based offer. Larger redesigns, integrations, custom functionality, additional pages, substantial ongoing work, and support beyond the defined hosting service require additional scope and pricing.',
  ],
  [
    'What does the Spark Website Partnership cost?',
    'The first-year total is $3,594 under a 12-month initial agreement. The $1,800 launch payment covers the website build and months 1–6; $299/month begins in month 7 and continues through month 12.',
  ],
  [
    'Is the Partnership simply $299 per month?',
    'No. The approved first-year structure is $1,800 at launch covering the build and the first six months, followed by $299/month during months 7–12.',
  ],
  [
    'What happens after the first 12 months?',
    'Customers may choose Website Care at $79/month, Partnership Care at $299/month, or an organized handoff where applicable. There is no surprise automatic second-year commitment.',
  ],
  [
    'How much is hosting?',
    'Website Essentials hosting is $20/month for the defined lightweight managed hosting service. Website Care is a separate, higher-service after-year-one option at $79/month.',
  ],
  [
    'Can Spark build tools beyond a website?',
    'Yes. Custom Systems & Applications start at $4,995 and may include applications, portals, dashboards, automations, integrations, and internal business tools. Exact cost requires consultation, discovery, and a written scope.',
  ],
  [
    'How long is the free consultation?',
    'The free consultation is one hour. Spark uses it to understand the request and recommend the appropriate next step without inventing a firm custom quote.',
  ],
  [
    'Are domains and third-party tools included?',
    'Third-party subscriptions, API or usage charges, advertising spend, premium integrations, and domain registration fees are separate unless included in a written proposal.',
  ],
])
