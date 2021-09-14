exports.onCreateWebpackConfig = ({ actions, loaders, stage }): void => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-native': 'react-native-web',
        // 'react-native-svg': 'react-svg'
      }
    }
  })

  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-json-view/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}
