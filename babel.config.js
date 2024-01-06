module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@atoms': './src/components/atoms',
            '@molecules': './src/components/molecules',
            '@organisms': './src/components/organisms',
            '@buttons': './src/components/buttons',
            '@static': './src/consts',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@utils': './src/utils'
          }
        }
      ]
    ]
  }
}
