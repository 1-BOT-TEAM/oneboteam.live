/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/sxyxzf337T',
        permanent: false,
        basePath: false
      },
      {
        source: '/github',
        destination: 'https://github.com/1-BOT-TEAM',
        permanent: false,
        basePath: false
      },
    ]
  },
}

module.exports = nextConfig
