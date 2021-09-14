const path = require('path')

module.exports = {
  overrides: [
    {
      files: [
        'jest.config.ts',
        'jest.setup.ts',
        'src/**/*.{js,jsx,ts,tsx,mdx}'
      ],
      parserOptions: {
        project: [
          path.resolve(__dirname, './tsconfig.json'),
        ]
      }
    }
  ]
}
