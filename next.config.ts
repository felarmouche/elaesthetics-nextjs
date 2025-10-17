// next.config.mjs
const isProd = process.env.NODE_ENV === 'production'
const repo = 'elaesthetics-bremen-github' // exakt wie auf GitHub

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ab Next 13/14 (App oder Pages Router):
  output: 'export',
  // Wichtig für GitHub Project Pages: /user.github.io/REPO
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true, // sorgt dafür, dass /pfad/ -> pfad/index.html auf GH Pages funktioniert
  images: {
    unoptimized: true, // Next/Image ohne Optimizer (GH Pages kann das nicht)
  },
}
export default nextConfig
