// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('@design-system/doc/package.json')

// const mainNodeModules = '../node_modules'
const corePath = '../packages/core'
const mobilePath = '../packages/mobile'
const webPath = '../packages/web'

export default {
  typescript: true,
  files: [
    'src/**/*.mdx',
    `${ corePath }/**/*.mdx`,
    `${ mobilePath }/**/*.mdx`,
    `${ webPath }/**/*.mdx`,
  ],
  title: `@design-system v${ version }`,
  port: 9009,
  host: '0.0.0.0',
  dest: 'dist',
  menu: [
    'Getting Started',
    'Core',
    'Mobile',
    'Web'
  ],
  ignore: [
    `${ mobilePath }/node_modules`,
    `${ webPath }/node_modules`,
    `${ corePath }/*/node_modules`
  ],
  docgenConfig: {
    searchPatterns: [
      `${ corePath }/**/*.(js|jsx|ts|tsx)`,
      `${ mobilePath }/**/*.(js|jsx|ts|tsx)`,
      `${ webPath }/**/*.(js|jsx|ts|tsx)`
    ]
  },
  filterComponents: (files) => files.filter(
    (filepath) => /\/(([A-Z]\w*)|(index))\.(js|jsx|ts|tsx)$/.test(filepath)
  )
  // filterComponents: (files) => files.filter(filepath => /\/[A-Z]\w*.d.ts$/.test(filepath))
  // themeConfig: {
  //   colors: {
  //     modes: {
  //       dark: {
  //         primary: colors.secondary,
  //         link: colors.secondary,
  //         sidebar: {
  //           navLinkActive: colors.secondary
  //         },
  //         props: {
  //           highlight: colors.secondary
  //         },
  //         header: {
  //           bg: colors.primary,
  //           text: colors.secondary,
  //           button: {
  //             bg: colors.backgroundHtml,
  //             color: colors.secondary
  //           }
  //         },
  //         playground: {
  //           bg: colors.white,
  //           color: colors.text
  //         }
  //       },
  //       light: {
  //         primary: colors.primary,
  //         link: colors.secondary,
  //         sidebar: {
  //           navLinkActive: colors.primary
  //         },
  //         props: {
  //           highlight: colors.primary
  //         },
  //         header: {
  //           bg: colors.backgroundHtml,
  //           text: colors.primary,
  //           button: {
  //             bg: colors.primary,
  //             color: colors.secondary
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
}
