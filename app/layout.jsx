import './globals.css'

export const metadata = {
  metadataBase: new URL('https://lotfy.ai'),
  title: 'Mohamed Lotfy — Team Leader · AI-Augmented Developer',
  description:
    'Mohamed Lotfy — team leader and AI-augmented developer with 13+ years shipping scalable web platforms with React, Next.js, and TypeScript. Spec-Driven Development and agentic coding practitioner.',
  keywords: [
    'Mohamed Lotfy',
    'AI engineer',
    'agentic coding',
    'Spec-Driven Development',
    'Claude Code',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'team leader',
    'Alexandria Egypt',
  ],
  authors: [{ name: 'Mohamed Lotfy' }],
  creator: 'Mohamed Lotfy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://lotfy.ai/',
  },
  openGraph: {
    type: 'profile',
    url: 'https://lotfy.ai/',
    title: 'Mohamed Lotfy — Team Leader · AI-Augmented Developer',
    description:
      '13+ years shipping scalable web platforms. Practitioner of Spec-Driven Development and agentic coding with Claude Code.',
    siteName: 'lotfy.ai',
    locale: 'en_US',
    images: [
      {
        url: 'https://lotfy.ai/lotfy.jpg',
        alt: 'Mohamed Lotfy',
      },
    ],
    firstName: 'Mohamed',
    lastName: 'Lotfy',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@molotfii',
    creator: '@molotfii',
    title: 'Mohamed Lotfy — Team Leader · AI-Augmented Developer',
    description:
      '13+ years shipping scalable web platforms. Spec-Driven Development and agentic coding with Claude Code.',
    images: ['https://lotfy.ai/lotfy.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Mohamed Lotfy',
    capable: true,
    statusBarStyle: 'black-translucent',
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
}

const ldJson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mohamed Lotfy',
  alternateName: 'Lotfy',
  url: 'https://lotfy.ai/',
  image: 'https://lotfy.ai/lotfy.jpg',
  email: 'mailto:hi@lotfy.ai',
  jobTitle: 'Team Leader · AI-Augmented Developer',
  description:
    'Team leader and AI-augmented developer with 13+ years shipping scalable web platforms. Practitioner of Spec-Driven Development and agentic coding with Claude Code.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Alexandria',
    addressCountry: 'EG',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Boud',
  },
  sameAs: [
    'https://www.linkedin.com/in/mo-lotfy',
    'https://x.com/molotfii',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'NestJS',
    'MongoDB',
    'Agentic Coding',
    'Spec-Driven Development',
    'Claude Code',
    'Docker',
    'Kubernetes',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Mansoura University',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </body>
    </html>
  )
}
