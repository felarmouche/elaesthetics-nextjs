// next.config.ts
const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages';
const repo = 'elaesthetics-bremen-github';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // GitHub Pages braucht basePath + assetPrefix; Custom Domain nicht
  ...(isGitHubPages && {
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
  }),
  images: {
    unoptimized: true,
  },
}
export default nextConfig
