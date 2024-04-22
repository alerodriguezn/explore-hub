/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    styledComponents: true,
    compiler: {
      styledComponents: {
      displayName: false,
      ssr: false
      }
      },output: 'standalone',
      webpackDevMiddleware: config => {
        config.watchOptions = {
          poll: 1000,
          aggregateTimeout: 300,
        }
        return config
      },
  }