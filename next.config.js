/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
