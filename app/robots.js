export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://lotfy.ai/sitemap.xml',
    host: 'https://lotfy.ai',
  }
}
