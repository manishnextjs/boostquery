// postcss.config.js
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    ...(isProduction
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './pages/**/*.{js,ts,jsx,tsx}',
              './components/**/*.{js,ts,jsx,tsx}',
              './app/**/*.{js,ts,jsx,tsx}',
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: ['html', 'body'],
          },
        }
      : {}),
  },
};
